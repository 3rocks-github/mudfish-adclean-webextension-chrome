
function mudfish_adclean_566d80b82b537374a340946efec127e4() {
  try {
    Sizzle(`div[id*="ads"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_566d80b82b537374a340946efec127e4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_566d80b82b537374a340946efec127e4, function (items) {
  if (mudfish_adclean_g_conf_566d80b82b537374a340946efec127e4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_566d80b82b537374a340946efec127e4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_566d80b82b537374a340946efec127e4();
    });
  }
});
