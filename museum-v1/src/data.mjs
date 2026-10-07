import {projects as source} from '../../src/projects.mjs';
const order=['last-signal','abyss','riso','aura','nocturne','ledger'];
const titles={'last-signal':'LAST SIGNAL',abyss:'ABYSS',riso:'ШУМ',aura:'AURA',nocturne:'NOCTURNE',ledger:'LEDGER'};
export const exhibits=order.map((id,i)=>({...source.find(p=>p.id===id),title:titles[id],label:String(i+1).padStart(2,'0'),year:'2026'}));
export const rooms=[{id:'entrance',title:'Вход',english:'The Entrance',number:'00'}, {id:'atrium',title:'Атриум',english:'The Atrium',number:'01'}, {id:'gallery',title:'Цифровая галерея',english:'Digital Gallery',number:'02'}, {id:'interactive',title:'Интерактивная выставка',english:'Interactive Exhibition',number:'03'}, {id:'bureau',title:'Бюро автора',english:"Author’s Bureau",number:'04'}];
export function normalizeRoute(hash){const id=String(hash||'').replace(/^#/,'');return rooms.some(r=>r.id===id)||exhibits.some(p=>'exhibit-'+p.id===id)?id:'entrance';}
export function isExhibit(id){return id.startsWith('exhibit-')&&exhibits.some(p=>'exhibit-'+p.id===id);}
export function getRouteMeta(id){return rooms.find(r=>r.id===id)||(()=>{const p=exhibits.find(p=>'exhibit-'+p.id===id);return p?{id,title:p.title,english:'Digital Gallery / '+p.label,number:'02'}:rooms[0];})();}
