
function mudfish_adclean_e10182b7569a1e82aeafa63c9af6e460() {
  try {
    Sizzle(`span[class$="_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e10182b7569a1e82aeafa63c9af6e460 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e10182b7569a1e82aeafa63c9af6e460, function (items) {
  if (mudfish_adclean_g_conf_e10182b7569a1e82aeafa63c9af6e460.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e10182b7569a1e82aeafa63c9af6e460();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e10182b7569a1e82aeafa63c9af6e460();
    });
  }
});
