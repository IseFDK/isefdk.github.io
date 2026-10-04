import {projects,filterProjects,readWorkState,workSearch} from './projects.mjs?v=5e429f585b86';
const root=document.body.dataset.root||'';
// Native dialogs provide modal semantics, Escape and focus containment.
const menu=document.querySelector('#menu-dialog');
const palette=document.querySelector('#palette');
let menuOpener=null,paletteOpener=null;
function closeDialog(dialog,opener){if(dialog.open)dialog.close();if(opener?.isConnected)opener.focus();}
document.querySelector('[data-open-menu]')?.addEventListener('click',e=>{menuOpener=e.currentTarget;if(palette.open)palette.close();if(!menu.open)menu.showModal();});
document.querySelector('[data-close-menu]')?.addEventListener('click',()=>closeDialog(menu,menuOpener));
menu?.addEventListener('cancel',()=>{queueMicrotask(()=>menuOpener?.focus());});
menu?.addEventListener('click',e=>{if(e.target===menu){const rect=menu.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)closeDialog(menu,menuOpener);}});
const commandInput=document.querySelector('#command-query');
const commandLinks=[...document.querySelectorAll('.palette-results>a')];
let commandIndex=0;
function visibleCommands(){return commandLinks.filter(a=>!a.hidden);}
function highlightCommand(){const visible=visibleCommands();commandIndex=Math.max(0,Math.min(commandIndex,visible.length-1));for(const a of commandLinks)a.dataset.active=String(visible[commandIndex]===a);}
function filterCommands(){const q=commandInput.value.trim().toLocaleLowerCase('ru');for(const a of commandLinks)a.hidden=!a.textContent.toLocaleLowerCase('ru').includes(q);commandIndex=0;highlightCommand();const count=visibleCommands().length;document.querySelector('.palette-empty').hidden=count>0;document.querySelector('#palette-status').textContent=count?`Найдено страниц: ${count}`:'Страниц не найдено';}
function openPalette(opener){paletteOpener=opener||document.activeElement;if(menu.open)menu.close();commandInput.value='';filterCommands();if(!palette.open)palette.showModal();commandInput.focus();}
document.querySelector('[data-open-palette]')?.addEventListener('click',e=>openPalette(e.currentTarget));
document.querySelector('[data-close-palette]')?.addEventListener('click',()=>closeDialog(palette,paletteOpener));
palette?.addEventListener('cancel',()=>{queueMicrotask(()=>paletteOpener?.focus());});
palette?.addEventListener('click',e=>{if(e.target===palette){const rect=palette.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)closeDialog(palette,paletteOpener);}});
commandInput?.addEventListener('input',filterCommands);
commandInput?.addEventListener('keydown',e=>{const list=visibleCommands();if(['ArrowDown','ArrowUp','Enter'].includes(e.key))e.preventDefault();if(e.key==='ArrowDown'||e.key==='ArrowUp'){if(list.length){commandIndex=(commandIndex+(e.key==='ArrowDown'?1:-1)+list.length)%list.length;highlightCommand();list[commandIndex]?.scrollIntoView({block:'nearest'});}}else if(e.key==='Enter')list[commandIndex]?.click();});
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();if(palette.open)closeDialog(palette,paletteOpener);else openPalette(document.activeElement);}});
// Project stage: no autoplay or timed progression.
const stageButtons=[...document.querySelectorAll('[data-stage-select]')];
for(const button of stageButtons)button.addEventListener('click',()=>{const p=projects.find(p=>p.id===button.dataset.stageSelect);if(!p)return;for(const b of stageButtons)b.setAttribute('aria-pressed',String(b===button));for(const s of document.querySelectorAll('[data-stage-slide]'))s.hidden=s.dataset.stageSlide!==p.id;for(const [key,value] of Object.entries({kind:p.kind,name:p.name,short:p.short,number:p.number,scope:p.scope,subtitle:p.subtitle,caption:p.caption})){const el=document.querySelector(`[data-stage-${key}]`);if(el)el.textContent=value;}document.querySelector('[data-stage-link]').href=`${root}work/${p.id}/`;});
// Archive filters preserve useful browser history; typing replaces its current entry.
const workInput=document.querySelector('#work-query');
if(workInput){let state=readWorkState(location.search);const cards=[...document.querySelectorAll('.work-grid [data-project]')];const filterButtons=[...document.querySelectorAll('[data-category]')];function render(){workInput.value=state.query;for(const b of filterButtons)b.setAttribute('aria-pressed',String(b.dataset.category===state.category));const ids=new Set(filterProjects(state.query,state.category).map(p=>p.id));for(const c of cards)c.hidden=!ids.has(c.dataset.project);document.querySelector('#work-count').textContent=`${ids.size} из ${projects.length} проектов`;document.querySelector('#work-empty').hidden=ids.size>0;document.querySelector('.results-meta [data-work-reset]').hidden=!state.query&&state.category==='all';}function commit(push){const url=location.pathname+workSearch(state)+location.hash;if(url!==location.pathname+location.search+location.hash)history[push?'pushState':'replaceState'](null,'',url);render();}for(const b of filterButtons)b.addEventListener('click',()=>{state.category=b.dataset.category;commit(true);});workInput.addEventListener('input',()=>{state.query=workInput.value;commit(false);});for(const b of document.querySelectorAll('[data-work-reset]'))b.addEventListener('click',()=>{state={query:'',category:'all'};commit(true);workInput.focus();});window.addEventListener('popstate',()=>{state=readWorkState(location.search);render();});render();}
// A case's walkthrough uses the WAI-ARIA tabs keyboard pattern.
const steps=[...document.querySelectorAll('[data-step]')];
function selectStep(index,focus=false){for(const [i,b] of steps.entries()){b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;document.querySelector('#step-panel-'+i).hidden=i!==index;}if(focus)steps[index]?.focus();}
for(const [i,b] of steps.entries()){b.addEventListener('click',()=>selectStep(i));b.addEventListener('keydown',e=>{let index=i;if(e.key==='ArrowRight')index=(i+1)%steps.length;else if(e.key==='ArrowLeft')index=(i+steps.length-1)%steps.length;else if(e.key==='Home')index=0;else if(e.key==='End')index=steps.length-1;else return;e.preventDefault();selectStep(index,true);});}
const copyButton=document.querySelector('#copy-github');
copyButton?.addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{if(!navigator.clipboard?.writeText)throw new Error('unavailable');await navigator.clipboard.writeText('https://github.com/IseFDK');status.textContent='Ссылка скопирована';}catch{status.textContent='Копирование недоступно. Ссылка: https://github.com/IseFDK';}});
