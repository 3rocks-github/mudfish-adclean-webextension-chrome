
function mudfish_adclean_0f27f435540cbd8cb879372772390434() {
  try {
    Sizzle(`div[class$="_ban"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0f27f435540cbd8cb879372772390434 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0f27f435540cbd8cb879372772390434, function (items) {
  if (mudfish_adclean_g_conf_0f27f435540cbd8cb879372772390434.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0f27f435540cbd8cb879372772390434();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0f27f435540cbd8cb879372772390434();
    });
  }
});
