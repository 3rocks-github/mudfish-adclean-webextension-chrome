
function mudfish_adclean_3a9825477391d7eb6c4640c6f6e3243a() {
  try {
    Sizzle(`div[id^="dont"][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3a9825477391d7eb6c4640c6f6e3243a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3a9825477391d7eb6c4640c6f6e3243a, function (items) {
  if (mudfish_adclean_g_conf_3a9825477391d7eb6c4640c6f6e3243a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3a9825477391d7eb6c4640c6f6e3243a();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});