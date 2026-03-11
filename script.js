document.addEventListener('DOMContentLoaded', () => {

  const btnMap = {
    homeBtn: 'index.html',
    jobsBtn: 'jobs.html',
    itemsBtn: 'items.html',
    creditsBtn: 'credits.html',
    staffBtn: 'staff.html',
    supportBtn: 'support.html'
  };

  Object.keys(btnMap).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        window.location.href = btnMap[id];
      });
    }
  });

});