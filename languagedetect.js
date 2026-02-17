(function() {
  const rtlLanguages = ['ar', 'he', 'fa', 'ur', 'ps', 'ku', 'ug', 'dv', 'yi', 'ji', 'iw'];
  
  function enableRTLIfNeeded() {
    let browserLang = navigator.language || navigator.userLanguage;
    if (browserLang) {
      browserLang = browserLang.split('-')[0].toLowerCase();
    }
    
    const isRTL = rtlLanguages.includes(browserLang);
    
    if (isRTL) {
      document.documentElement.setAttribute('dir', 'rtl');
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enableRTLIfNeeded);
  } else {
    enableRTLIfNeeded();
  }
})();
