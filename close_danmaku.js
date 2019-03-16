// ==UserScript==
// @name         默认关闭弹幕
// @namespace    https://github.com/yekingyan/close_danmaku/
// @version      0.1
// @description  默认关闭弹幕!!!
// @author       Yekingyan
// @match        https://www.bilibili.com/*
// @run-at        document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let host = window.location.host
    let TARGET_AND_MARK = new Map ([
        // [[hostName, switchSelector], [markSelector, markText]],
        [['bilibili', '.bilibili-player-video-danmaku-switch .bui-checkbox'], 
        ['.bilibili-player-video-danmaku-switch .choose_danmaku', '关闭']],

    ])

    let closeDanmaku = () => {
        for (let [[hostName, switchSelector], [markSelector, markText]] of TARGET_AND_MARK) {
            if (host.includes(hostName)) {
                let [switchDom, markDom] = [switchSelector, markSelector].map(x => document.querySelector(x))
                if (!markDom) {
                    switchDom.click()
                } else if (markDom.innerText.includes(markText)) {
                    switchDom.click()
                }
                break
            }
        }
    }

    window.onload = () => {
        setTimeout(() => {
            closeDanmaku()
        }, 2000);
    }
    
    
})();