
function mudfish_adclean_8ce028dd3921dc2c48fac173f45c5c3e() {
  try {
    Sizzle(`.nav_container > div[id$="_content"][class^="content_"] .section_list.notice > div[class^="main_top_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8ce028dd3921dc2c48fac173f45c5c3e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8ce028dd3921dc2c48fac173f45c5c3e, function (items) {
  if (mudfish_adclean_g_conf_8ce028dd3921dc2c48fac173f45c5c3e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8ce028dd3921dc2c48fac173f45c5c3e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8ce028dd3921dc2c48fac173f45c5c3e();
    });
  }
});
