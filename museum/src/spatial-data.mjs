import {projects} from '../../src/projects.mjs';
const original=projects.find(p=>p.id==='last-signal');
export const prototypeCollection=[{
 ...original,id:'last-signal',title:'LAST SIGNAL',titleRu:'Последний сигнал',label:'01',wing:'gallery',year:'2026',
 shortEn:'A seven-chapter night-train story, from a quiet platform to a mountain observatory and dawn.',shortRu:original.short,
 roleEn:'Independent web concept, story and development with AI assistance',roleRu:'Самостоятельная веб-история и разработка с AI-помощью',
 statusEn:'Published web story',statusRu:'Опубликованная веб-история',
 descriptionEn:'Scroll follows a fictional journey from 00:07 to 06:03. The illustrated version has a complete reading edition and creation notes. Pace, backward scrolling and reduced motion remain under the reader’s control.',
 descriptionRu:original.solution,tech:['JavaScript','CSS','SVG'],
 limitsEn:'The station, route and observatory are fictional. Original generated illustrations are artwork, not photographs. No real transport information or ticket sales.',limitsRu:original.boundaries,
}, {
 id:'light-study',title:'LIGHT STUDY',titleRu:'Этюд света',label:'D01',wing:'interactive',year:'2026',
 shortEn:'A small illuminated diorama for testing object inspection inside the museum.',shortRu:'Небольшая световая диорама для проверки осмотра объектов в музее.',
 roleEn:'Museum interaction sample',roleRu:'Демонстрация взаимодействия в музее',statusEn:'Prototype / interaction sample',statusRu:'Прототип / демонстрация взаимодействия',
 descriptionEn:'This is a game-like display made for the navigation prototype. Inspect the scene and change its light. It demonstrates the pedestal, focus and dossier mechanics; it is not presented as a finished game by IseFDK.',
 descriptionRu:'Игровая диорама создана для прототипа навигации. Можно осмотреть сцену и изменить свет. Она демонстрирует постамент, фокус и досье; это не готовая игра IseFDK.',
 tech:['CSS 3D','JavaScript','Procedural geometry'],limitsEn:'An interaction sample only. No game release, store page, achievements or launch date is claimed.',limitsRu:'Только демонстрация взаимодействия. Релиз игры, магазин, достижения и дата выпуска не заявлены.',live:null,repo:null,
}];
export const corridorFrames=[
 {id:'signal-platform',project:'last-signal',side:-1,depth:1050,y:0,width:540,height:310,image:'last-signal-station.webp',titleEn:'Platform / 00:07',titleRu:'Платформа / 00:07'},
 {id:'signal-observatory',project:'last-signal',side:1,depth:1950,y:-30,width:580,height:330,image:'last-signal-observatory.webp',titleEn:'Observatory / 04:18',titleRu:'Обсерватория / 04:18'},
 {id:'signal-dawn',project:'last-signal',side:-1,depth:2820,y:15,width:520,height:295,image:'last-signal-dawn.webp',titleEn:'Dawn / 06:03',titleRu:'Рассвет / 06:03'},
];
export const interactiveObjects=[{id:'light-study-object',project:'light-study',side:0,depth:1350,y:75,width:360,height:320}];
export const wings={gallery:{length:3700,end:4050,items:corridorFrames},interactive:{length:2550,end:3000,items:interactiveObjects}};
export const copy={
 en:{museum:'IseFDK Digital Museum',enter:'Enter',rotunda:'Central Rotunda',gallery:'Digital Gallery',interactive:'Interactive Exhibition',back:'Central Atrium',exit:'Exit',move:'Scroll to move through the corridor',moveMobile:'Swipe to move forward or back',inspect:'Inspect',close:'Close dossier',visit:'Visit project',github:'GitHub source',role:'Role',tech:'Materials / technology',year:'Year',status:'Status',context:'Context',future:'FUTURE COLLECTION',grow:'This exhibition continues to grow',sample:'INTERACTION SAMPLE',look:'Look closer',distance:'Corridor position',settle:'Near an exhibit. Select it to inspect.',reduced:'Reduced motion · still camera views',loading:'Loading the exhibition'},
 ru:{museum:'IseFDK Digital Museum',enter:'Войти',rotunda:'Центральная ротонда',gallery:'Цифровая галерея',interactive:'Интерактивная выставка',back:'Центральный атриум',exit:'Выход',move:'Прокручивай, чтобы двигаться по коридору',moveMobile:'Листай, чтобы двигаться вперёд и назад',inspect:'Осмотреть',close:'Закрыть досье',visit:'Открыть проект',github:'Исходный код GitHub',role:'Роль',tech:'Материалы / технологии',year:'Год',status:'Статус',context:'Контекст',future:'БУДУЩАЯ КОЛЛЕКЦИЯ',grow:'Эта экспозиция будет расти',sample:'ДЕМОНСТРАЦИЯ ВЗАИМОДЕЙСТВИЯ',look:'Рассмотреть ближе',distance:'Положение в коридоре',settle:'Рядом экспонат. Выбери его для осмотра.',reduced:'Без движения · статичные виды',loading:'Загружаем экспозицию'}
};
