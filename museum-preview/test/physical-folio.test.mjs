import test from 'node:test';
import assert from 'node:assert/strict';
import {physicalFolioSchema,renderPhysicalFolio,mountPhysicalFolio} from '../src/physical-folio.mjs';

// A small DOM contract fixture. Native browser focus containment is supplied by showModal,
// not simulated or claimed as browser-verified by these tests.
class Node {
  constructor(dataset={}) {this.dataset=dataset;this.attributes={};this.listeners={};this.children=[];this.isConnected=true;this.hidden=false;this.checked=false;this.value='';this.textContent='';}
  setAttribute(key,value){this.attributes[key]=String(value);}
  removeAttribute(key){delete this.attributes[key];}
  getAttribute(key){return this.attributes[key]??null;}
  addEventListener(type,fn){(this.listeners[type]||=[]).push(fn);}
  dispatch(type,values={}){const event={target:this,clientX:0,clientY:0,preventDefault(){this.defaultPrevented=true;},...values};for(const fn of this.listeners[type]||[])fn(event);return event;}
  focus(){globalThis.document.activeElement=this;}
  closest(selector){return selector==='[data-pf-navigate]' && this.dataset.pfNavigate ? this : selector==='[data-pf-preference]' && this.dataset.pfPreference ? this : null;}
  querySelector(selector){return this.selectors?.[selector]||null;}
  querySelectorAll(selector){return this.lists?.[selector]||[];}
}
function fixture(initial={}){
  let state={...initial};const preferences=[],navigations=[];
  const trigger=new Node(),dialog=new Node(),summary=new Node(),close=new Node(),location=new Node(),pin=new Node(),plan=new Node();
  const triggerCopy=new Node({pfCopy:'folio'});
  trigger.lists={'[data-pf-copy]':[triggerCopy]};
  const routes=['entrance','rotunda'].map(room=>{const n=new Node({pfNavigate:room});n.selectors={'[data-pf-here]':new Node()};return n;});
  const inputs=Object.entries({language:['en','ru'],quality:['full','light'],motion:['system','reduce','normal']}).flatMap(([key,values])=>values.map(value=>{const n=new Node({pfPreference:key});n.value=value;return n;}));
  const translated=['folio','qualityNote','motionNote','creatorRole'].map(key=>new Node({pfCopy:key}));
  dialog.open=false;
  dialog.getBoundingClientRect=()=>({left:10,top:10,right:990,bottom:690});
  dialog.showModal=()=>{dialog.open=true;dialog.modalCalls=(dialog.modalCalls||0)+1;};
  dialog.close=()=>{dialog.open=false;dialog.dispatch('close');};
  dialog.selectors={'[data-close-physical-folio]':close,'[data-pf-guide-summary]':summary,'[data-pf-plan]':plan,'[data-pf-location]':location,'[data-pf-plan-pin]':pin};
  dialog.lists={'[data-pf-copy]':translated,'[data-pf-navigate]':routes,'[data-pf-preference]':inputs};
  const doc={activeElement:trigger,body:{style:{overflow:'auto'}},querySelector:()=>dialog,querySelectorAll:()=>[trigger]};
  const previous=globalThis.document;globalThis.document=doc;
  const api=mountPhysicalFolio({getState:()=>state,onNavigate:room=>{navigations.push(room);state.room=room;},onPreferences:value=>{preferences.push(value);state={...state,...value};}});
  return {api,doc,dialog,trigger,triggerCopy,summary,close,location,pin,plan,routes,inputs,translated,preferences,navigations,setState:value=>state=value,restore:()=>{if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}};
}

test('public Creator Card schema has five slots, one verified public link, hidden CV and future audio',()=>{
  assert.equal(physicalFolioSchema.creator.name,'IseFDK');
  assert.equal(physicalFolioSchema.creator.role,'Developer & Creator');
  assert.equal(physicalFolioSchema.creator.links.length,5);
  assert.deepEqual(physicalFolioSchema.creator.links.filter(link=>link.href).map(link=>link.href),['https://github.com/IseFDK']);
  assert.equal(physicalFolioSchema.creator.cv,null);
  assert.equal(physicalFolioSchema.preferences.audio,null);
  assert.deepEqual(physicalFolioSchema.creator.tools,['React','Node.js','JavaScript','TypeScript','Next.js','Three.js','WebGL','SVG','Canvas','Express','PostgreSQL','Prisma']);
  assert.deepEqual(physicalFolioSchema.creator.interests,['Unity','Roblox']);
  assert.ok(Object.isFrozen(physicalFolioSchema));
});

test('render is a native dialog holding three distinct inserts and four scoped navigable rooms',()=>{
  const html=renderPhysicalFolio();
  assert.match(html,/<dialog[^>]+aria-labelledby="pf-title"/);
  for(const className of ['pf-guide','pf-creator-card','pf-preference-ticket','pf-pocket-lip','pf-wallet-spine'])assert.match(html,new RegExp(`class="${className}`));
  assert.deepEqual([...html.matchAll(/data-pf-navigate="([^"]+)"/g)].map(match=>match[1]),['gallery','rotunda','interactive','entrance']);
  assert.equal([...html.matchAll(/data-pf-link-slot=/g)].length,5);
  assert.equal([...html.matchAll(/data-pf-link-slot="\d" hidden/g)].length,4);
  assert.equal([...html.matchAll(/data-pf-preference=/g)].length,7);
  assert.doesNotMatch(html,/role="tab|mailto:|donat|data-pf-preference="audio|\bCV\b/i);
  assert.match(html,/Unity and Roblox are interests; no published game is claimed/);
  assert.match(html,/high-resolution images/);
  assert.doesNotMatch(html,/lighting detail and scene effects/i);
});

test('safe defaults are English, Entrance, Full quality and system motion',()=>{
  const f=fixture({room:'invalid',language:'unknown',quality:'broken',motion:'broken'});
  try{
    assert.equal(f.dialog.lang,'en');assert.equal(f.location.textContent,'Entrance');assert.equal(f.triggerCopy.textContent,'Visitor Folio');
    assert.deepEqual(f.inputs.filter(input=>input.checked).map(input=>input.value),['en','full','system']);
    assert.equal(f.routes[0].getAttribute('aria-current'),'location');
  }finally{f.restore();}
});

test('open, repeated open, Escape and closing restore the opener and prior scroll state',()=>{
  const f=fixture();
  try{
    f.trigger.dispatch('click');assert.equal(f.dialog.open,true);assert.equal(f.doc.activeElement,f.summary);assert.equal(f.doc.body.style.overflow,'hidden');assert.equal(f.trigger.getAttribute('aria-expanded'),'true');
    f.trigger.dispatch('click');assert.equal(f.dialog.modalCalls,1);
    const event=f.dialog.dispatch('cancel');assert.equal(event.defaultPrevented,true);assert.equal(f.dialog.open,false);assert.equal(f.doc.activeElement,f.trigger);assert.equal(f.doc.body.style.overflow,'auto');assert.equal(f.trigger.getAttribute('aria-expanded'),'false');
    f.trigger.dispatch('click');f.close.dispatch('click');assert.equal(f.dialog.open,false);assert.equal(f.doc.activeElement,f.trigger);
  }finally{f.restore();}
});

test('backdrop closes only after a press and release wholly outside the wallet',()=>{
  const f=fixture();
  try{
    f.trigger.dispatch('click');f.dialog.dispatch('pointerdown',{clientX:50,clientY:50});f.dialog.dispatch('click',{clientX:3,clientY:3});assert.equal(f.dialog.open,true);
    f.dialog.dispatch('pointerdown',{clientX:3,clientY:3});f.dialog.dispatch('click',{clientX:50,clientY:50});assert.equal(f.dialog.open,true);
    f.dialog.dispatch('pointerdown',{clientX:3,clientY:3});f.dialog.dispatch('click',{clientX:3,clientY:3});assert.equal(f.dialog.open,false);
  }finally{f.restore();}
});

test('EN/RU, quality and motion dispatch independent preference changes',()=>{
  const f=fixture();
  try{
    for(const [key,value]of [['language','ru'],['quality','light'],['motion','normal']]){
      const input=f.inputs.find(input=>input.dataset.pfPreference===key&&input.value===value);input.checked=true;f.dialog.dispatch('change',{target:input});
    }
    assert.deepEqual(f.preferences,[{language:'ru'},{quality:'light'},{motion:'normal'}]);assert.equal(f.dialog.lang,'ru');assert.equal(f.dialog.dataset.pfMotion,'normal');assert.equal(f.dialog.dataset.pfQuality,'light');assert.equal(f.triggerCopy.textContent,'Папка посетителя');
    assert.deepEqual(f.inputs.filter(input=>input.checked).map(input=>input.value),['ru','light','normal']);
    f.setState({room:'rotunda',language:'en',quality:'full',motion:'reduce'});f.api.update();
    assert.equal(f.location.textContent,'Central Rotunda');assert.equal(f.pin.getAttribute('transform'),'translate(399 219)');assert.equal(f.routes[1].getAttribute('aria-current'),'location');assert.equal(f.routes[0].getAttribute('aria-current'),null);
  }finally{f.restore();}
});

test('route selection closes the wallet; injected routes never navigate',()=>{
  const f=fixture();
  try{
    f.trigger.dispatch('click');f.dialog.dispatch('click',{target:new Node({pfNavigate:'unknown'})});assert.deepEqual(f.navigations,[]);assert.equal(f.dialog.open,true);
    f.dialog.dispatch('click',{target:f.routes[1]});assert.deepEqual(f.navigations,['rotunda']);assert.equal(f.dialog.open,false);assert.equal(f.doc.activeElement,f.trigger);assert.equal(f.location.textContent,'Central Rotunda');
  }finally{f.restore();}
});

test('mount is a harmless update object when its markup is absent',()=>{
  const previous=globalThis.document;globalThis.document={querySelector:()=>null};
  try{assert.equal(typeof mountPhysicalFolio().update,'function');mountPhysicalFolio().update();}finally{if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}
});
