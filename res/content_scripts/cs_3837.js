
function mudfish_adclean_bc06bb9b755abf73efd61b5c7f2a107e() {
  try {
    Sizzle(`#mw_mobile > .mw_icon_box`).forEach(element => {
      element.style.marginTop = "25px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bc06bb9b755abf73efd61b5c7f2a107e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bc06bb9b755abf73efd61b5c7f2a107e, function (items) {
  if (mudfish_adclean_g_conf_bc06bb9b755abf73efd61b5c7f2a107e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bc06bb9b755abf73efd61b5c7f2a107e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bc06bb9b755abf73efd61b5c7f2a107e();
    });
  }
});
