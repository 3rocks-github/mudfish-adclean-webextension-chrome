
function mudfish_adclean_965a148748ddc751adb57e20dc583676() {
  try {
    Sizzle(`iframe[src^="/ad/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_965a148748ddc751adb57e20dc583676 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_965a148748ddc751adb57e20dc583676, function (items) {
  if (mudfish_adclean_g_conf_965a148748ddc751adb57e20dc583676.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_965a148748ddc751adb57e20dc583676();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});