/** Visitor folio: ordinary HTML beside the spatial museum, not part of its camera. */
const copy = {
  en: {
    folio: 'Visitor Folio', open: 'Open visitor folio', close: 'Close visitor folio', edition: 'ISEFDK / DIGITAL MUSEUM',
    guide: 'Museum Guide', catalogue: 'Collection Catalogue', creator: 'Creator Card', preferences: 'Preferences',
    guideLead: 'A small plan for finding your way. Choose a room, or go straight to a work.',
    planLabel: 'Schematic museum plan. Choose a room to visit.', planCaption: 'A folded plan · schematic, not to scale',
    entrance: 'Entrance', entranceNote: 'Start your visit', rotunda: 'Central Rotunda', rotundaNote: 'The heart of the museum',
    gallery: 'Digital Gallery', galleryNote: 'Web projects', interactive: 'Interactive Exhibition', interactiveNote: 'Games & experiments',
    here: 'YOU ARE HERE', currentProject: 'Viewing', guideWorks: 'Find a work', go: 'Visit',
    catalogueLead: 'Each numbered entry opens its place in the museum.', search: 'Search the collection', searchPlaceholder: 'Title, number, or keyword',
    noResults: 'No works match this search.', collectionEmpty: 'The collection is being prepared.', items: 'works',
    creatorRole: 'Developer & Creator', creatorLead: 'A collection of independent web concepts and educational projects: visual stories, interactive graphics, practical tools, and full-stack studies.',
    directions: 'Areas of work', directionWeb: 'Web experiences & visual storytelling', directionTools: 'Interactive tools & full-stack applications',
    tools: 'Tools used in project repositories', toolsNote: 'Based on the projects in this collection.', interfaces: 'Interfaces', graphics: 'Graphics', applications: 'Applications',
    interests: 'Game-development interests', interestsNote: 'Unity and Roblox are interests, not a claim of published projects.', publicProfile: 'Public profile', github: 'View GitHub profile',
    preferenceLead: 'Adjust the visit for your device and the way you prefer to move.', language: 'Language', languageEnglish: 'English', languageRussian: 'Русский', quality: 'Scene quality',
    full: 'Full', fullNote: 'Detailed lighting and scene effects', light: 'Light', lightNote: 'Simpler rendering, fewer scene effects',
    motion: 'Motion', system: 'Follow device', systemNote: 'Use your device’s reduced-motion setting', reduce: 'Reduced', reduceNote: 'Keep camera changes and effects still', normal: 'Normal', normalNote: 'Allow camera transitions and scene motion',
    saved: 'Preferences apply to this museum.', keyHint: 'Tab to move between controls · Escape to close', sheet: 'VISITOR COPY',
  },
  ru: {
    folio: 'Папка посетителя', open: 'Открыть папку посетителя', close: 'Закрыть папку посетителя', edition: 'ISEFDK / ЦИФРОВОЙ МУЗЕЙ',
    guide: 'Путеводитель', catalogue: 'Каталог коллекции', creator: 'Карточка автора', preferences: 'Настройки',
    guideLead: 'Небольшой план, чтобы найти дорогу. Выберите зал или сразу перейдите к работе.',
    planLabel: 'Схематичный план музея. Выберите зал для посещения.', planCaption: 'Складной план · условная схема, не в масштабе',
    entrance: 'Вход', entranceNote: 'Начало посещения', rotunda: 'Центральная ротонда', rotundaNote: 'Сердце музея',
    gallery: 'Цифровая галерея', galleryNote: 'Веб-проекты', interactive: 'Интерактивная выставка', interactiveNote: 'Игры и эксперименты',
    here: 'ВЫ ЗДЕСЬ', currentProject: 'Открыта работа', guideWorks: 'Найти работу', go: 'Перейти',
    catalogueLead: 'Каждый номер открывает работу на её месте в музее.', search: 'Поиск по коллекции', searchPlaceholder: 'Название, номер или ключевое слово',
    noResults: 'По этому запросу работ не найдено.', collectionEmpty: 'Коллекция готовится.', items: 'работ',
    creatorRole: 'Разработчик и автор', creatorLead: 'Коллекция самостоятельных веб-концептов и учебных проектов: визуальные истории, интерактивная графика, практические инструменты и fullstack-системы.',
    directions: 'Направления', directionWeb: 'Веб-проекты и визуальные истории', directionTools: 'Интерактивные инструменты и fullstack-приложения',
    tools: 'Инструменты в репозиториях проектов', toolsNote: 'По проектам, представленным в коллекции.', interfaces: 'Интерфейсы', graphics: 'Графика', applications: 'Приложения',
    interests: 'Интерес к разработке игр', interestsNote: 'Unity и Roblox — направления интереса, а не заявление об опубликованных проектах.', publicProfile: 'Публичный профиль', github: 'Открыть профиль GitHub',
    preferenceLead: 'Настройте посещение под своё устройство и комфортный способ перемещения.', language: 'Язык', languageEnglish: 'English', languageRussian: 'Русский', quality: 'Качество сцены',
    full: 'Полное', fullNote: 'Подробное освещение и эффекты сцены', light: 'Лёгкое', lightNote: 'Упрощённая отрисовка, меньше эффектов',
    motion: 'Движение', system: 'Как на устройстве', systemNote: 'Учитывать системную настройку уменьшения движения', reduce: 'Уменьшенное', reduceNote: 'Без движения камеры и эффектов', normal: 'Обычное', normalNote: 'Переходы камеры и движение сцены',
    saved: 'Настройки применяются к этому музею.', keyHint: 'Tab — переход между элементами · Escape — закрыть', sheet: 'ЭКЗЕМПЛЯР ПОСЕТИТЕЛЯ',
  },
};
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const translated = (key, tag = 'span', attributes = '') => `<${tag} data-folio-copy="${key}" ${attributes}>${escapeHtml(copy.en[key])}</${tag}>`;
const projectTitle = (p, language) => language === 'ru' ? (p.titleRu || p.title || p.id) : (p.title || p.id);
const projectShort = (p, language) => language === 'ru' ? (p.shortRu || p.shortEn || '') : (p.shortEn || '');
const projectStatus = (p, language) => language === 'ru' ? (p.statusRu || p.statusEn || '') : (p.statusEn || '');
const projectWing = p => p.wing === 'interactive' ? 'interactive' : 'gallery';
const folioPanels = ['guide', 'catalogue', 'creator', 'preferences'];
function mapRoom(wing, number, description) {
  return `<button type="button" class="folio-map-room folio-map-${wing}" data-folio-navigate="${wing}"><span class="folio-map-number" aria-hidden="true">${number}</span>${translated(wing, 'strong')}${translated(description, 'small')}<span class="folio-map-dot" aria-hidden="true"></span><span class="folio-map-here" data-folio-copy="here" hidden>${copy.en.here}</span></button>`;
}
function preference(name, value, label, note, checked = false) {
  return `<label class="folio-option"><input type="radio" name="folio-${name}" value="${value}" data-folio-preference="${name}"${checked ? ' checked' : ''}><span>${translated(label, 'strong')}${note ? translated(note, 'small') : ''}</span></label>`;
}
function projectRow(p, i, compact = false) {
  const number = p.label || String(i + 1).padStart(2, '0');
  return `<li data-folio-project="${escapeHtml(p.id)}"><button type="button" class="folio-project${compact ? ' folio-project-compact' : ''}" data-folio-navigate="${projectWing(p)}" data-folio-selected="${escapeHtml(p.id)}"><span class="folio-project-number">${escapeHtml(number)}</span><span class="folio-project-text"><strong data-folio-project-title>${escapeHtml(projectTitle(p, 'en'))}</strong>${compact ? '' : `<span class="folio-project-short" data-folio-project-short>${escapeHtml(projectShort(p, 'en'))}</span><small data-folio-project-status>${escapeHtml(projectStatus(p, 'en'))}</small>`}</span><span class="folio-project-arrow" aria-hidden="true">↗</span></button></li>`;
}
export function renderFolio(exhibits = []) {
  const projects = Array.isArray(exhibits) ? exhibits.filter(p => p && p.id) : [];
  // These tools are evidenced by src/projects.mjs; Unity/Roblox are interests only.
  const toolGroups = [
    ['interfaces', ['JavaScript', 'TypeScript', 'CSS', 'React', 'Next.js']],
    ['graphics', ['Three.js', 'WebGL', 'GLSL', 'SVG', 'Canvas']],
    ['applications', ['Node.js', 'Express', 'PostgreSQL', 'Prisma']],
  ];
  const data = escapeHtml(JSON.stringify(projects.map(p => ({id:p.id,title:p.title,titleRu:p.titleRu,label:p.label,wing:projectWing(p),shortEn:p.shortEn,shortRu:p.shortRu,statusEn:p.statusEn,statusRu:p.statusRu}))));
  return `<button type="button" class="folio-trigger" data-open-folio aria-haspopup="dialog" aria-controls="visitor-folio" aria-label="${copy.en.open}"><span class="folio-wallet" aria-hidden="true"><span class="folio-wallet-sheet"></span><span class="folio-wallet-fold"></span><span class="folio-wallet-stamp">i.</span></span><span class="folio-trigger-label" data-folio-copy="folio">${copy.en.folio}</span></button>
<dialog id="visitor-folio" class="visitor-folio" aria-labelledby="folio-title" data-folio-exhibits="${data}">
  <div class="folio-shell">
    <header class="folio-header"><div>${translated('edition', 'span', 'class="folio-eyebrow"')}<h2 id="folio-title" data-folio-copy="folio">${copy.en.folio}</h2></div><button type="button" class="folio-close" data-close-folio aria-label="${copy.en.close}"><span aria-hidden="true">×</span></button></header>
    <div class="folio-tabs" role="tablist" aria-label="${copy.en.folio}">${folioPanels.map((name, i) => `<button type="button" role="tab" id="folio-tab-${name}" aria-controls="folio-panel-${name}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}" data-folio-tab="${name}"><span class="folio-tab-number" aria-hidden="true">0${i + 1}</span>${translated(name)}</button>`).join('')}</div>
    <div class="folio-pages">
      <section id="folio-panel-guide" class="folio-panel" role="tabpanel" aria-labelledby="folio-tab-guide" tabindex="0">
        <div class="folio-page-heading">${translated('guide', 'h3')}${translated('guideLead', 'p')}</div>
        <div class="folio-location" aria-live="polite"><span class="folio-location-pin" aria-hidden="true">●</span>${translated('here', 'span', 'class="folio-eyebrow"')}<strong data-folio-location>Entrance</strong><span data-folio-location-project hidden></span></div>
        <div class="folio-plan" role="group" aria-label="${copy.en.planLabel}" data-folio-plan>${mapRoom('gallery', '02', 'galleryNote')}${mapRoom('rotunda', '01', 'rotundaNote')}${mapRoom('interactive', '03', 'interactiveNote')}${mapRoom('entrance', '00', 'entranceNote')}<span class="folio-plan-compass" aria-hidden="true">N ↑</span></div>
        ${translated('planCaption', 'p', 'class="folio-plan-caption"')}
        <div class="folio-section-heading">${translated('guideWorks', 'h4')}<span class="folio-count">${String(projects.length).padStart(2, '0')}</span></div>
        <ol class="folio-guide-index">${projects.map((p, i) => projectRow(p, i, true)).join('')}</ol>${projects.length ? '' : translated('collectionEmpty', 'p', 'class="folio-empty"')}
      </section>
      <section id="folio-panel-catalogue" class="folio-panel" role="tabpanel" aria-labelledby="folio-tab-catalogue" tabindex="0" hidden>
        <div class="folio-page-heading">${translated('catalogue', 'h3')}${translated('catalogueLead', 'p')}</div>
        <label class="folio-search"${projects.length > 4 ? '' : ' hidden'}>${translated('search', 'span')}<input type="search" data-folio-search placeholder="${copy.en.searchPlaceholder}" autocomplete="off" spellcheck="false"></label>
        <ol class="folio-catalogue">${projects.map((p, i) => projectRow(p, i)).join('')}</ol>${projects.length ? '' : translated('collectionEmpty', 'p', 'class="folio-empty"')}
        <p class="folio-empty" data-folio-no-results data-folio-copy="noResults" role="status" hidden>${copy.en.noResults}</p>
      </section>
      <section id="folio-panel-creator" class="folio-panel" role="tabpanel" aria-labelledby="folio-tab-creator" tabindex="0" hidden>
        <div class="folio-creator-heading"><span class="folio-creator-mark" aria-hidden="true">i.</span><div><span class="folio-eyebrow" data-folio-copy="creator">${copy.en.creator}</span><h3>IseFDK</h3>${translated('creatorRole', 'p')}</div></div>
        ${translated('creatorLead', 'p', 'class="folio-creator-intro"')}
        <section class="folio-creator-section">${translated('directions', 'h4')}<ul class="folio-directions"><li>${translated('directionWeb')}</li><li>${translated('directionTools')}</li></ul></section>
        <section class="folio-creator-section">${translated('tools', 'h4')}${translated('toolsNote', 'p', 'class="folio-muted"')}<dl class="folio-tools">${toolGroups.map(([label, list]) => `<div>${translated(label, 'dt')}<dd>${list.map(tool => `<span>${tool}</span>`).join('')}</dd></div>`).join('')}</dl></section>
        <section class="folio-creator-section folio-interests">${translated('interests', 'h4')}<p class="folio-interest-names">Unity · Roblox</p>${translated('interestsNote', 'p', 'class="folio-muted"')}</section>
        <section class="folio-creator-section">${translated('publicProfile', 'h4')}<ul class="folio-socials"><li data-folio-social-slot="0"><a href="https://github.com/IseFDK" target="_blank" rel="noopener noreferrer"><span>GitHub / IseFDK</span><span aria-hidden="true">↗</span></a></li>${[1,2,3,4].map(n => `<li data-folio-social-slot="${n}" hidden></li>`).join('')}</ul></section>
      </section>
      <section id="folio-panel-preferences" class="folio-panel" role="tabpanel" aria-labelledby="folio-tab-preferences" tabindex="0" hidden>
        <div class="folio-page-heading">${translated('preferences', 'h3')}${translated('preferenceLead', 'p')}</div>
        <fieldset class="folio-preference-group"><legend data-folio-copy="language">${copy.en.language}</legend><div class="folio-options folio-language">${preference('language', 'en', 'languageEnglish', null, true)}${preference('language', 'ru', 'languageRussian', null)}</div></fieldset>
        <fieldset class="folio-preference-group"><legend data-folio-copy="quality">${copy.en.quality}</legend><div class="folio-options">${preference('quality', 'full', 'full', 'fullNote', true)}${preference('quality', 'light', 'light', 'lightNote')}</div></fieldset>
        <fieldset class="folio-preference-group"><legend data-folio-copy="motion">${copy.en.motion}</legend><div class="folio-options folio-motion">${preference('motion', 'system', 'system', 'systemNote', true)}${preference('motion', 'reduce', 'reduce', 'reduceNote')}${preference('motion', 'normal', 'normal', 'normalNote')}</div></fieldset>
        ${translated('saved', 'p', 'class="folio-muted folio-preference-note"')}
      </section>
    </div>
    <footer class="folio-footer">${translated('sheet', 'span', 'class="folio-eyebrow"')}${translated('keyHint', 'span')}</footer>
  </div>
</dialog>`;
}

export function mountFolio({getState = () => ({}), onNavigate = () => {}, onPreferences = () => {}} = {}) {
  const dialog = document.querySelector('#visitor-folio');
  if (!dialog) return {update() {}};
  const triggers = [...document.querySelectorAll('[data-open-folio]')];
  let projects = [];
  try { projects = JSON.parse(dialog.dataset.folioExhibits || '[]'); } catch {}
  const projectById = new Map(projects.map(p => [String(p.id), p]));
  const tabs = [...dialog.querySelectorAll('[data-folio-tab]')];
  let opener = null;
  let language = 'en';
  let activeTab = 'guide';
  let previousBodyOverflow;
  const state = () => ({language:'en',quality:'full',motion:'system',wing:'entrance',selected:null,...getState()});
  const t = key => copy[language][key] || copy.en[key] || key;
  function selectTab(name, focus = false) {
    if (!folioPanels.includes(name)) return;
    activeTab = name;
    tabs.forEach(tab => {
      const selected = tab.dataset.folioTab === name;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      const panel = dialog.querySelector(`#folio-panel-${tab.dataset.folioTab}`);
      panel.hidden = !selected;
      if (selected && focus) tab.focus({preventScroll:true});
    });
    dialog.dataset.folioPanel = name;
    const pages = dialog.querySelector('.folio-pages');
    if (pages) pages.scrollTop = 0;
  }
  function filterCatalogue() {
    const query = (dialog.querySelector('[data-folio-search]')?.value || '').trim().toLocaleLowerCase(language);
    let visible = 0;
    dialog.querySelectorAll('.folio-catalogue [data-folio-project]').forEach(row => {
      const p = projectById.get(row.dataset.folioProject);
      const haystack = p ? [p.id, p.label, p.title, p.titleRu, p.shortEn, p.shortRu, p.statusEn, p.statusRu].filter(Boolean).join(' ').toLocaleLowerCase(language) : row.textContent.toLocaleLowerCase(language);
      row.hidden = Boolean(query && !haystack.includes(query));
      if (!row.hidden) visible++;
    });
    dialog.querySelector('[data-folio-no-results]').hidden = visible > 0 || projects.length === 0;
  }
  function update() {
    const s = state();
    language = s.language === 'ru' ? 'ru' : 'en';
    dialog.lang = language;
    dialog.dataset.folioMotion = s.motion || 'system';
    dialog.querySelectorAll('[data-folio-copy]').forEach(node => {node.textContent = t(node.dataset.folioCopy);});
    triggers.forEach(trigger => {
      trigger.setAttribute('aria-label', t('open'));
      trigger.dataset.folioMotion = s.motion || 'system';
      trigger.querySelectorAll('[data-folio-copy]').forEach(node => {node.textContent = t(node.dataset.folioCopy);});
    });
    dialog.querySelector('[data-close-folio]').setAttribute('aria-label', t('close'));
    dialog.querySelector('[role="tablist"]').setAttribute('aria-label', t('folio'));
    dialog.querySelector('[data-folio-plan]').setAttribute('aria-label', t('planLabel'));
    dialog.querySelector('[data-folio-search]').placeholder = t('searchPlaceholder');
    const wing = ['entrance','rotunda','gallery','interactive'].includes(s.wing) ? s.wing : 'entrance';
    dialog.querySelector('[data-folio-location]').textContent = t(wing);
    dialog.querySelectorAll('.folio-map-room').forEach(button => {
      const current = button.dataset.folioNavigate === wing;
      if (current) button.setAttribute('aria-current', 'location'); else button.removeAttribute('aria-current');
      button.querySelector('.folio-map-here').hidden = !current;
    });
    const currentProject = projectById.get(String(s.selected));
    const currentProjectNode = dialog.querySelector('[data-folio-location-project]');
    currentProjectNode.hidden = !currentProject;
    currentProjectNode.textContent = currentProject ? `${t('currentProject')}: ${projectTitle(currentProject, language)}` : '';
    dialog.querySelectorAll('[data-folio-project]').forEach(row => {
      const p = projectById.get(row.dataset.folioProject);
      if (!p) return;
      row.querySelector('[data-folio-project-title]').textContent = projectTitle(p, language);
      const short = row.querySelector('[data-folio-project-short]');
      const status = row.querySelector('[data-folio-project-status]');
      if (short) {short.textContent = projectShort(p, language); short.hidden = !short.textContent;}
      if (status) {status.textContent = projectStatus(p, language); status.hidden = !status.textContent;}
      const button = row.querySelector('[data-folio-navigate]');
      if (s.selected === p.id) button.setAttribute('aria-current','true'); else button.removeAttribute('aria-current');
    });
    dialog.querySelectorAll('[data-folio-preference]').forEach(input => {input.checked = input.value === s[input.dataset.folioPreference];});
    filterCatalogue();
  }
  function open(trigger) {
    if (dialog.open) return;
    opener = trigger || document.activeElement;
    update();
    dialog.showModal();
    previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    tabs.find(tab => tab.dataset.folioTab === activeTab)?.focus({preventScroll:true});
  }
  function close() { if (dialog.open) dialog.close(); }
  triggers.forEach(trigger => trigger.addEventListener('click', () => open(trigger)));
  dialog.querySelector('[data-close-folio]').addEventListener('click', close);
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousBodyOverflow ?? '';
    if (opener?.isConnected) opener.focus({preventScroll:true});
    opener = null;
  });
  dialog.addEventListener('click', event => {
    const tab = event.target.closest('[data-folio-tab]');
    if (tab) {selectTab(tab.dataset.folioTab); return;}
    const destination = event.target.closest('[data-folio-navigate]');
    if (destination) {
      onNavigate({wing:destination.dataset.folioNavigate,selected:destination.dataset.folioSelected || null});
      close();
      return;
    }
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
    }
  });
  dialog.querySelector('[role="tablist"]').addEventListener('keydown', event => {
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) return;
    const index = tabs.indexOf(document.activeElement);
    if (index < 0) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    selectTab(tabs[next].dataset.folioTab, true);
  });
  dialog.addEventListener('change', event => {
    const input = event.target.closest('[data-folio-preference]');
    if (!input || !input.checked) return;
    onPreferences({[input.dataset.folioPreference]:input.value});
    update();
  });
  dialog.querySelector('[data-folio-search]').addEventListener('input', filterCatalogue);
  selectTab('guide');
  update();
  return {update};
}
