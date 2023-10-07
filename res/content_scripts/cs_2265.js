
function mudfish_adclean_fafef1c3267eae850464900ec1a51a5e() {
  try {
    Sizzle(`#popupBody #nonmember_all .left1`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fafef1c3267eae850464900ec1a51a5e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fafef1c3267eae850464900ec1a51a5e, function (items) {
  if (mudfish_adclean_g_conf_fafef1c3267eae850464900ec1a51a5e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fafef1c3267eae850464900ec1a51a5e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});