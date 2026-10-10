(() => {
  const buttons = [...document.querySelectorAll('[data-library-filter]')];
  const groups = [...document.querySelectorAll('[data-library-group]')];
  const status = document.getElementById('library-status');
  if (!buttons.length || !groups.length) return;
  function select(key) {
    if (key !== 'all' && !groups.some(g => g.dataset.libraryGroup === key)) return;
    let count = 0;
    groups.forEach(group => {
      group.hidden = key !== 'all' && group.dataset.libraryGroup !== key;
      if (!group.hidden) count += group.querySelectorAll('.science-card').length;
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.libraryFilter === key)));
    const chosen = buttons.find(button => button.dataset.libraryFilter === key);
    status.textContent = `${chosen.textContent.trim()} — ${count} ${count === 1 ? 'دليل متاح' : 'أدلة متاحة'}.`;
  }
  buttons.forEach(button => button.addEventListener('click', () => select(button.dataset.libraryFilter)));
  function followHash() {
    const group = groups.find(g => `#${g.id}` === location.hash);
    if (group) select(group.dataset.libraryGroup);
    else if (location.hash === '#science') select('all');
  }
  window.addEventListener('hashchange', followHash);
  followHash();
})();
