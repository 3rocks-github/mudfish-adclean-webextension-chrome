
function mudfish_adclean_0f26e424a158fd402d2728ab73f311e9() {
  try {
    Sizzle(`a[href^="/go/"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0f26e424a158fd402d2728ab73f311e9 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0f26e424a158fd402d2728ab73f311e9, function (items) {
  if (mudfish_adclean_g_conf_0f26e424a158fd402d2728ab73f311e9.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0f26e424a158fd402d2728ab73f311e9();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0f26e424a158fd402d2728ab73f311e9();
    });
  }
});
