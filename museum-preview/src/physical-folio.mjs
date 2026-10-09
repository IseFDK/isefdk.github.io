/* A visitor-owned object. It contains only public identity and current room controls. */
export const physicalFolioSchema = Object.freeze({
  creator: Object.freeze({
    name: 'IseFDK',
    role: 'Developer & Creator',
    tools: Object.freeze(['React', 'Node.js', 'JavaScript', 'TypeScript', 'Next.js', 'Three.js', 'WebGL', 'SVG', 'Canvas', 'Express', 'PostgreSQL', 'Prisma']),
    interests: Object.freeze(['Unity', 'Roblox']),
    links: Object.freeze([
      Object.freeze({id:'github', label:'GitHub', href:'https://github.com/IseFDK'}),
      Object.freeze({id:'website', label:'Website', href:null}),
      Object.freeze({id:'social', label:'Social', href:null}),
      Object.freeze({id:'video', label:'Video', href:null}),
      Object.freeze({id:'other', label:'Other', href:null}),
    ]),
    cv: null,
  }),
  preferences: Object.freeze({language:'en', quality:'full', motion:'system', audio:null}),
  rooms: Object.freeze(['entrance', 'rotunda', 'gallery', 'interactive']),
});

const copy = {
  en: {
    folio:'Visitor Folio', open:'Open your Visitor Folio', close:'Fold and close your Folio', visitorCopy:'VISITOR COPY', museum:'ISEFDK · MUSEUM', keeper:'YOURS FOR THE VISIT',
    guide:'Museum Guide', guideMaterial:'FOLDED PAPER / 01', guideIntro:'A little plan to carry with you.', planLabel:'Museum plan. Entrance and Central Rotunda are open. One gallery segment and one interaction study are open.',
    rotunda:'Central Rotunda', entrance:'Entrance', gallery:'Digital Gallery', interactive:'Interactive Exhibition', future:'FIRST STUDY', here:'YOU ARE HERE', location:'Your current room',
    guideNote:'A first visit: one gallery segment and one interaction study. The wider collection is still taking shape.', mapCaption:'A small architectural sketch · not to scale', unfold:'Unfold or refold the museum guide', north:'N',
    creator:'Creator Card', creatorRole:'Developer & Creator', creatorIntro:'Independent web concepts and practical tools, with an interest in visual stories and playful interaction.', directions:'DIRECTIONS', directionWeb:'Web experiences & visual stories', directionTools:'Interactive tools & fullstack applications',
    tools:'Tools & interests', toolHeading:'TOOLS USED IN PROJECT REPOSITORIES', interests:'GAME-DEVELOPMENT INTERESTS', interestsNote:'Unity and Roblox are interests; no published game is claimed.', github:'GitHub / IseFDK', external:'opens a new tab',
    preferences:'Visit Preferences', preferenceMaterial:'ADJUSTMENT SLIP / 03', language:'Language', quality:'Scene quality', motion:'Motion', full:'Full', light:'Light', system:'Follow device', reduce:'Reduced', normal:'Normal',
    qualityNote:'Full: high-resolution images · Light: smaller images', motionNote:'Short room transitions, independent of image quality', settingsNote:'Your choices stay with this museum.', keyboard:'Tab to explore · Escape to fold closed', fold:'Fold closed', guidePocket:'KEEP THE PLAN', cardPocket:'CREATOR / 02', preferencePocket:'FOR YOUR COMFORT',
  },
  ru: {
    folio:'Папка посетителя', open:'Открыть папку посетителя', close:'Сложить и закрыть папку посетителя', visitorCopy:'ЭКЗЕМПЛЯР ПОСЕТИТЕЛЯ', museum:'ISEFDK · МУЗЕЙ', keeper:'ВАША НА ВРЕМЯ ПОСЕЩЕНИЯ',
    guide:'Путеводитель', guideMaterial:'СКЛАДНАЯ БУМАГА / 01', guideIntro:'Небольшой план, который всегда под рукой.', planLabel:'План музея. Вход и Центральная ротонда открыты. Открыты один сегмент галереи и один интерактивный этюд.',
    rotunda:'Центральная ротонда', entrance:'Вход', gallery:'Цифровая галерея', interactive:'Интерактивная выставка', future:'ПЕРВЫЙ ЭТЮД', here:'ВЫ ЗДЕСЬ', location:'Ваш текущий зал',
    guideNote:'Первый маршрут: один сегмент галереи и интерактивный этюд. Остальная коллекция ещё в работе.', mapCaption:'Небольшой архитектурный эскиз · без масштаба', unfold:'Развернуть или сложить путеводитель', north:'С',
    creator:'Карточка автора', creatorRole:'Разработчик и автор', creatorIntro:'Самостоятельные веб-концепты и практические инструменты, интерес к визуальным историям и игровым взаимодействиям.', directions:'НАПРАВЛЕНИЯ', directionWeb:'Веб-проекты и визуальные истории', directionTools:'Интерактивные инструменты и fullstack-приложения',
    tools:'Инструменты и интересы', toolHeading:'ИНСТРУМЕНТЫ В РЕПОЗИТОРИЯХ ПРОЕКТОВ', interests:'ИНТЕРЕС К РАЗРАБОТКЕ ИГР', interestsNote:'Unity и Roblox — направления интереса; опубликованные игры не заявлены.', github:'GitHub / IseFDK', external:'откроется в новой вкладке',
    preferences:'Настройки посещения', preferenceMaterial:'ЛИСТ НАСТРОЕК / 03', language:'Язык', quality:'Качество сцены', motion:'Движение', full:'Полное', light:'Лёгкое', system:'Как на устройстве', reduce:'Уменьшенное', normal:'Обычное',
    qualityNote:'Полное: высокое разрешение · Лёгкое: меньший размер изображений', motionNote:'Короткие переходы между залами, независимо от качества изображений', settingsNote:'Ваши настройки сохраняются для этого музея.', keyboard:'Tab — переход · Escape — закрыть', fold:'Сложить', guidePocket:'ДЕРЖИТЕ ПЛАН ПОД РУКОЙ', cardPocket:'АВТОР / 02', preferencePocket:'ДЛЯ ВАШЕГО КОМФОРТА',
  },
};
const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const text = (key, tag='span', attributes='') => `<${tag} data-pf-copy="${key}" ${attributes}>${esc(copy.en[key])}</${tag}>`;
const option = (name, value, label, checked=false) => `<label class="pf-choice"><input type="radio" name="physical-folio-${name}" value="${value}" data-pf-preference="${name}"${checked?' checked':''}><span>${label === 'English' || label === 'Русский' ? esc(label) : text(label)}</span></label>`;

function plan() {
  return `<div class="pf-plan" role="group" aria-label="${copy.en.planLabel}" data-pf-plan>
    <svg class="pf-plan-drawing" viewBox="0 0 720 450" aria-hidden="true" focusable="false">
      <defs><pattern id="pf-hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0V5" stroke="currentColor" stroke-width=".5" opacity=".22"/></pattern></defs>
      <g class="pf-plan-ghost" fill="url(#pf-hatch)" stroke="currentColor" stroke-width="1.8" stroke-dasharray="7 5">
        <path d="M34 70L206 67 208 253 35 256Z"/><path d="M510 68L684 70 681 255 511 253Z"/>
      </g>
      <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M222 117L261 117M223 124L258 124M222 203L261 203M223 210L259 210M460 117L495 117M461 124L495 124M460 203L495 203M461 210L495 210"/>
        <path d="M267 119A105 105 0 0 1 454 121M454 208A105 105 0 0 1 410 263M309 263A105 105 0 0 1 267 207"/>
        <path d="M275 125A96 96 0 0 1 446 126M447 200A96 96 0 0 1 401 257M319 257A96 96 0 0 1 275 201"/>
        <path d="M269 119L276 125M453 120L446 127M267 208L275 201M454 208L447 201M309 263L319 257M410 263L401 257"/>
        <circle cx="360" cy="166" r="72" stroke-width=".8" opacity=".5"/>
        <path d="M267 124L267 157Q297 157 297 124M453 202L453 170Q423 170 423 202M321 260V319M399 260V319M329 262V310M391 262V310M298 319H422V405H298Z"/>
        <path d="M301 389H419M301 396H419M311 405V414H409V405M319 414V422H401V414M328 422V430H392V422"/>
        <path d="M327 319V341Q350 341 350 319M393 319V341Q370 341 370 319" stroke-width="1.2"/>
        <g opacity=".35" stroke-width=".7"><path d="M20 280H213M20 273V287M213 273V287M505 280H698M505 273V287M698 273V287M283 33H437M283 26V40M437 26V40"/><path d="M13 67V256M6 67H20M6 256H20"/></g>
        <g class="pf-compass" transform="translate(639 351)"><path d="M0-28V27M-20 0H20M0-28L-5-13H5Z" fill="currentColor"/><circle r="12" stroke-width=".7"/></g>
        <g opacity=".25"><path d="M42 63L204 61M42 62L203 59M29 72L29 252M691 77L693 251M292 411L296 324M421 412L426 324" stroke-width=".8"/></g>
      </g>
      <g data-pf-plan-pin transform="translate(408 378)"><circle r="10" fill="#8ea774" opacity=".2"/><circle r="4" fill="#526f3f"/></g>
    </svg>
    <button type="button" class="pf-map-room pf-map-left" data-pf-navigate="gallery"><span class="pf-map-number" aria-hidden="true">02</span>${text('gallery','strong')}${text('future','small')}<small data-pf-here hidden></small></button>
    <button type="button" class="pf-map-room pf-map-rotunda" data-pf-navigate="rotunda"><span class="pf-map-number" aria-hidden="true">01</span>${text('rotunda','strong')}<span class="pf-location-dot" aria-hidden="true"></span><small data-pf-here hidden>${copy.en.here}</small></button>
    <button type="button" class="pf-map-room pf-map-right" data-pf-navigate="interactive"><span class="pf-map-number" aria-hidden="true">03</span>${text('interactive','strong')}${text('future','small')}<small data-pf-here hidden></small></button>
    <button type="button" class="pf-map-room pf-map-entrance" data-pf-navigate="entrance"><span class="pf-map-number" aria-hidden="true">00</span>${text('entrance','strong')}<span class="pf-location-dot" aria-hidden="true"></span><small data-pf-here>${copy.en.here}</small></button>
    ${text('north','span','class="pf-north" aria-hidden="true"')}
  </div>`;
}

export function renderPhysicalFolio() {
  const profile = physicalFolioSchema.creator;
  return `<button type="button" class="pf-trigger" data-open-physical-folio aria-label="${copy.en.open}" aria-haspopup="dialog" aria-controls="physical-visitor-folio" aria-expanded="false">
    <span class="pf-closed-wallet" aria-hidden="true"><span class="pf-peek pf-peek-guide"></span><span class="pf-peek pf-peek-card"></span><span class="pf-peek pf-peek-ticket"></span><span class="pf-closed-cover"><span class="pf-closed-stitch"></span><span class="pf-cover-stamp">i.</span>${text('folio','span','class="pf-cover-name"')}<span class="pf-cover-rule"></span>${text('visitorCopy','span','class="pf-cover-copy"')}</span><span class="pf-closed-strap"></span></span>
  </button>
  <dialog id="physical-visitor-folio" class="pf-dialog" aria-labelledby="pf-title" aria-describedby="pf-keyboard">
    <div class="pf-wallet">
      <div class="pf-wallet-edge" aria-hidden="true"></div><div class="pf-wallet-spine" aria-hidden="true"></div>
      <header class="pf-wallet-heading"><div>${text('museum','span','class="pf-emboss"')}<h2 id="pf-title" data-pf-copy="folio">${copy.en.folio}</h2></div><button type="button" class="pf-clasp" data-close-physical-folio aria-label="${copy.en.close}"><span aria-hidden="true">×</span></button></header>
      <div class="pf-wallet-interior">
        <section class="pf-map-pocket" aria-labelledby="pf-guide-title">
          <details class="pf-guide" open>
            <summary class="pf-paper-heading" aria-label="${copy.en.unfold}" data-pf-guide-summary><span class="pf-paper-heading-text">${text('guideMaterial','span','class="pf-smallprint"')}<h3 id="pf-guide-title" data-pf-copy="guide">${copy.en.guide}</h3></span><span class="pf-fold-mark" aria-hidden="true">⌄</span></summary>
            <div class="pf-guide-body">${text('guideIntro','p','class="pf-guide-intro"')}${plan()}
              <p class="pf-current-location"><span class="pf-location-dot" aria-hidden="true"></span>${text('here','span','class="pf-smallprint"')}<strong data-pf-location>Entrance</strong></p>
              ${text('guideNote','p','class="pf-guide-note"')}${text('mapCaption','p','class="pf-map-caption"')}
            </div>
          </details>
          <span class="pf-pocket-lip pf-map-pocket-lip" aria-hidden="true"></span>${text('guidePocket','span','class="pf-pocket-stamp" aria-hidden="true"')}
        </section>
        <div class="pf-right-leaf">
          <section class="pf-card-pocket" aria-labelledby="pf-creator-title"><article class="pf-creator-card">
            <div class="pf-card-top">${text('creator','span','class="pf-smallprint"')}<span class="pf-card-monogram" aria-hidden="true">i.</span></div>
            <h3 id="pf-creator-title">IseFDK</h3>${text('creatorRole','p','class="pf-card-role"')}${text('creatorIntro','p','class="pf-card-intro"')}
            <div class="pf-directions">${text('directions','span','class="pf-smallprint"')}<ul><li>${text('directionWeb')}</li><li>${text('directionTools')}</li></ul></div>
            <details class="pf-card-details"><summary>${text('tools')}<span aria-hidden="true">+</span></summary><div class="pf-tool-info">${text('toolHeading','h4','class="pf-smallprint"')}<ul class="pf-tools">${profile.tools.map(tool=>`<li>${esc(tool)}</li>`).join('')}</ul>${text('interests','h4','class="pf-smallprint"')}<p class="pf-interest-names">${profile.interests.join(' · ')}</p>${text('interestsNote','p','class="pf-interest-note"')}</div></details>
            <ul class="pf-public-links">${profile.links.map((link,index)=>link.href?`<li data-pf-link-slot="${index}"><a href="${esc(link.href)}" target="_blank" rel="noopener noreferrer">${text('github')}<span aria-hidden="true">↗</span>${text('external','span','class="pf-sr-only"')}</a></li>`:`<li data-pf-link-slot="${index}" hidden></li>`).join('')}</ul>
          </article><span class="pf-pocket-lip pf-card-pocket-lip" aria-hidden="true"></span>${text('cardPocket','span','class="pf-pocket-stamp" aria-hidden="true"')}</section>
          <section class="pf-ticket-pocket" aria-labelledby="pf-preferences-title"><div class="pf-preference-ticket">
            <div class="pf-ticket-perforation" aria-hidden="true"></div>${text('preferenceMaterial','span','class="pf-smallprint"')}<h3 id="pf-preferences-title" data-pf-copy="preferences">${copy.en.preferences}</h3>
            <fieldset class="pf-setting"><legend data-pf-copy="language">${copy.en.language}</legend><div class="pf-choices">${option('language','en','English',true)}${option('language','ru','Русский')}</div></fieldset>
            <fieldset class="pf-setting"><legend data-pf-copy="quality">${copy.en.quality}</legend><div class="pf-choices">${option('quality','full','full',true)}${option('quality','light','light')}</div>${text('qualityNote','p','class="pf-setting-note"')}</fieldset>
            <fieldset class="pf-setting"><legend data-pf-copy="motion">${copy.en.motion}</legend><div class="pf-choices pf-motion-choices">${option('motion','system','system',true)}${option('motion','reduce','reduce')}${option('motion','normal','normal')}</div>${text('motionNote','p','class="pf-setting-note"')}</fieldset>
            ${text('settingsNote','p','class="pf-ticket-foot"')}
          </div><span class="pf-pocket-lip pf-ticket-pocket-lip" aria-hidden="true"></span>${text('preferencePocket','span','class="pf-pocket-stamp" aria-hidden="true"')}</section>
        </div>
      </div>
      <footer class="pf-wallet-footer">${text('keeper','span','class="pf-emboss"')}${text('keyboard','span','id="pf-keyboard"')}</footer>
    </div>
  </dialog>`;
}

export function mountPhysicalFolio({getState=()=>({}), onNavigate=()=>{}, onPreferences=()=>{}}={}) {
  const dialog = document.querySelector('#physical-visitor-folio');
  if (!dialog) return {update(){}};
  const triggers = [...document.querySelectorAll('[data-open-physical-folio]')];
  const allowedPreferences = {language:['en','ru'], quality:['full','light'], motion:['system','reduce','normal']};
  let language = 'en', opener = null, previousBodyOverflow;
  const t = key => copy[language][key] || copy.en[key] || key;
  const readState = () => {
    const incoming = getState() || {};
    const state = {...physicalFolioSchema.preferences,...incoming};
    for (const [key, values] of Object.entries(allowedPreferences)) if (!values.includes(state[key])) state[key] = physicalFolioSchema.preferences[key];
    state.room = physicalFolioSchema.rooms.includes(incoming.room) ? incoming.room : 'entrance';
    return state;
  };
  function update() {
    const state = readState();
    language = state.language;
    dialog.lang = language;
    dialog.dataset.pfMotion = state.motion;
    dialog.dataset.pfQuality = state.quality;
    dialog.querySelectorAll('[data-pf-copy]').forEach(node=>{node.textContent=t(node.dataset.pfCopy);});
    for (const trigger of triggers) {
      trigger.lang = language;
      trigger.setAttribute('aria-label',t('open'));
      trigger.setAttribute('aria-expanded',String(dialog.open));
      trigger.dataset.pfMotion=state.motion;
      trigger.querySelectorAll('[data-pf-copy]').forEach(node=>{node.textContent=t(node.dataset.pfCopy);});
    }
    dialog.querySelector('[data-close-physical-folio]').setAttribute('aria-label',t('close'));
    dialog.querySelector('[data-pf-guide-summary]').setAttribute('aria-label',t('unfold'));
    dialog.querySelector('[data-pf-plan]').setAttribute('aria-label',t('planLabel'));
    dialog.querySelector('[data-pf-location]').textContent=t(state.room);
    dialog.querySelector('[data-pf-plan-pin]').setAttribute('transform',({rotunda:'translate(399 219)',gallery:'translate(140 230)',interactive:'translate(605 230)',entrance:'translate(408 378)'})[state.room]);
    dialog.querySelectorAll('[data-pf-navigate]').forEach(button=>{
      const current=button.dataset.pfNavigate===state.room;
      if(current) button.setAttribute('aria-current','location'); else button.removeAttribute('aria-current');
      const here=button.querySelector('[data-pf-here]');
      here.hidden=!current; here.textContent=t('here');
    });
    dialog.querySelectorAll('[data-pf-preference]').forEach(input=>{input.checked=input.value===state[input.dataset.pfPreference];});
  }
  function open(trigger) {
    if (dialog.open) return;
    opener=trigger || document.activeElement;
    update();
    previousBodyOverflow=document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow='hidden';
    triggers.forEach(button=>button.setAttribute('aria-expanded','true'));
    // Native showModal supplies focus containment and inertness. The plan is the first task.
    dialog.querySelector('[data-pf-guide-summary]').focus({preventScroll:true});
    dialog.scrollTop=0;
  }
  function close() {if(dialog.open) dialog.close();}
  triggers.forEach(trigger=>trigger.addEventListener('click',()=>open(trigger)));
  dialog.querySelector('[data-close-physical-folio]').addEventListener('click',close);
  dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
  dialog.addEventListener('close',()=>{
    document.body.style.overflow=previousBodyOverflow ?? '';
    triggers.forEach(trigger=>trigger.setAttribute('aria-expanded','false'));
    if(opener?.isConnected) opener.focus({preventScroll:true});
    opener=null;
  });
  let outsidePress=false;
  const outside = event => {
    const rect=dialog.getBoundingClientRect();
    return event.target===dialog && (event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom);
  };
  dialog.addEventListener('pointerdown',event=>{outsidePress=outside(event);});
  dialog.addEventListener('click',event=>{if(outsidePress && outside(event)) close();outsidePress=false;});
  dialog.addEventListener('click',event=>{
    const button=event.target.closest?.('[data-pf-navigate]');
    if(!button || !physicalFolioSchema.rooms.includes(button.dataset.pfNavigate)) return;
    close(); onNavigate(button.dataset.pfNavigate); update();
  });
  dialog.addEventListener('change',event=>{
    const input=event.target.closest?.('[data-pf-preference]');
    if(!input || !input.checked) return;
    const key=input.dataset.pfPreference;
    if(!allowedPreferences[key]?.includes(input.value)) return;
    onPreferences({[key]:input.value}); update();
  });
  update();
  return {update,open};
}
