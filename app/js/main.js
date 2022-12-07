(() => {
    var e = {
        765: () => {
            console.log("Component")
        }, 524: () => {
            const e = document.querySelector(".menu__icon"), t = document.querySelector(".menu__icon > span"),
                o = document.querySelector(".header__menu"), c = document.querySelector("body");
            e.addEventListener("click", (function (r) {
                e.classList.toggle("_active"), o.classList.toggle("_active"), c.classList.toggle("_lock"), window.onclick = function (c) {
                    c.target !== o && c.target !== e && c.target !== t && (o.classList.remove("_active"), e.classList.remove("_active"))
                }
            }))
        }
    }, t = {};

    function o(c) {
        var r = t[c];
        if (void 0 !== r) return r.exports;
        var n = t[c] = {exports: {}};
        return e[c](n, n.exports, o), n.exports
    }

    (() => {
        "use strict";
        o(524), o(765)
    })()
})();