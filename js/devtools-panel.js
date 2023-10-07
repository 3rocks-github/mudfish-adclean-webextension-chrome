/*-
 * Copyright (c) 2023 Weongyo Jeong <weongyo@3rocks.net>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 */

var g_ruleset_static_network = null;

url = chrome.runtime.getURL('/res/ruleset/static_network.json');
fetch(url).then(async function(resp) {
    g_ruleset_static_network = await resp.json();
    let { rulesMatchedInfo } = await chrome.declarativeNetRequest.getMatchedRules({
        tabId: chrome.devtools.inspectedWindow.tabId
    });
    let matched_rules = [];
    /* TODO: hash-based lookup */
    for (var i = 0; i < g_ruleset_static_network.length; i++) {
        let rule_static_network = g_ruleset_static_network[i];
        for (var j = 0; j < rulesMatchedInfo.length; j++) {
            let matched_info = rulesMatchedInfo[j];
            if (rule_static_network.id === matched_info.rule.ruleId) {
                matched_rules.push(rule_static_network);
            }
        }
    }
    let element = document.querySelector('#matched_rules');
    if (element === null || element === undefined) {
        return;
    }
    element.innerText = JSON.stringify(matched_rules, null, 4);
});

function i18n_id(name) {
    var m;

    m = chrome.i18n.getMessage(name);
    document.querySelectorAll("#" + name).forEach(elm => {
        elm.innerText = m;
    });
}

(() => {
    i18n_id("i18n_applied_rules");
    i18n_id("i18n_loading_dotdotdot");
    i18n_id("i18n_manifest_name");
    i18n_id("i18n_webextension");
})();
