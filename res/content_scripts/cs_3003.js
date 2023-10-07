
function mudfish_adclean_4e605217bf3e83789c03f735c96fc06d() {
  try {
    Sizzle(`#mbnRoll_001 > .mbnRollUnit > .pagen_5`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4e605217bf3e83789c03f735c96fc06d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4e605217bf3e83789c03f735c96fc06d, function (items) {
  if (mudfish_adclean_g_conf_4e605217bf3e83789c03f735c96fc06d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4e605217bf3e83789c03f735c96fc06d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
