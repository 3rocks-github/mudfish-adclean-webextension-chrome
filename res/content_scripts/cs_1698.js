
function mudfish_adclean_6589072640189b8bf9dd71b484cad4cc() {
  try {
    Sizzle(`iframe[id^="happy_banner_scroll_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6589072640189b8bf9dd71b484cad4cc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6589072640189b8bf9dd71b484cad4cc, function (items) {
  if (mudfish_adclean_g_conf_6589072640189b8bf9dd71b484cad4cc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6589072640189b8bf9dd71b484cad4cc();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
