
function mudfish_adclean_ae7f3cba1b544226bc985a6967e519e8() {
  try {
    Sizzle(`#_popIn_recommend`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ae7f3cba1b544226bc985a6967e519e8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ae7f3cba1b544226bc985a6967e519e8, function (items) {
  if (mudfish_adclean_g_conf_ae7f3cba1b544226bc985a6967e519e8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ae7f3cba1b544226bc985a6967e519e8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ae7f3cba1b544226bc985a6967e519e8();
    });
  }
});
