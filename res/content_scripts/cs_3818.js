
function mudfish_adclean_0004b344b6b34355ec1c85388c1d9b9a() {
  try {
    Sizzle(`.bnt > div[class^="bancol"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0004b344b6b34355ec1c85388c1d9b9a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0004b344b6b34355ec1c85388c1d9b9a, function (items) {
  if (mudfish_adclean_g_conf_0004b344b6b34355ec1c85388c1d9b9a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0004b344b6b34355ec1c85388c1d9b9a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0004b344b6b34355ec1c85388c1d9b9a();
    });
  }
});
