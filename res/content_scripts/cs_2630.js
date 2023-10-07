
function mudfish_adclean_4ab6b7d0078279dead3b4b7967a3c37c() {
  try {
    Sizzle(`.tabad`).forEach(element => {
      element.style.height = "1px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4ab6b7d0078279dead3b4b7967a3c37c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4ab6b7d0078279dead3b4b7967a3c37c, function (items) {
  if (mudfish_adclean_g_conf_4ab6b7d0078279dead3b4b7967a3c37c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4ab6b7d0078279dead3b4b7967a3c37c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});