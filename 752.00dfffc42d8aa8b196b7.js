"use strict";
(self.webpackChunkjouwweb = self.webpackChunkjouwweb || []).push([
    [752], {
        2752: function(e, t, n) {
            n.d(t, {
                v1: function() {
                    return b
                }
            });
            var s = n(2891);
            const i = (e, t) => {
                    const n = e[t];
                    return "function" == typeof n ? n : (...e) => {}
                },
                r = (e, t, n) => {
                    let s = e;
                    return !0 === n ? s = `${t.identifier}:${e}` : "string" == typeof n && (s = `${n}:${e}`), s
                },
                l = (e, t, n) => {
                    const {
                        bubbles: s,
                        cancelable: i,
                        composed: r
                    } = t || {
                        bubbles: !0,
                        cancelable: !0,
                        composed: !0
                    };
                    t && Object.assign(n, {
                        originalEvent: t
                    });
                    return new CustomEvent(e, {
                        bubbles: s,
                        cancelable: i,
                        composed: r,
                        detail: n
                    })
                };
            console;
            s.xI;
            s.xI;
            class c extends s.xI {}
            c.debounces = [];
            s.xI;
            s.xI;
            const o = {
                    dispatchEvent: !0,
                    eventPrefix: !0,
                    visibleAttribute: "isVisible"
                },
                b = (e, t = {}) => {
                    const n = e,
                        {
                            dispatchEvent: s,
                            eventPrefix: c,
                            visibleAttribute: b
                        } = Object.assign({}, o, t),
                        a = (null == t ? void 0 : t.element) || n.element;
                    n.intersectionElements || (n.intersectionElements = []), n.intersectionElements.push(a);
                    const u = new IntersectionObserver((e => {
                            const [t] = e;
                            t.isIntersecting ? p(t) : a.hasAttribute(b) && v(t)
                        }), t),
                        p = e => {
                            if (a.setAttribute(b, "true"), i(n, "appear").call(n, e, u), s) {
                                const t = r("appear", n, c),
                                    s = l(t, null, {
                                        controller: n,
                                        entry: e,
                                        observer: u
                                    });
                                a.dispatchEvent(s)
                            }
                        },
                        v = e => {
                            if (a.removeAttribute(b), i(n, "disappear").call(n, e, u), s) {
                                const t = r("disappear", n, c),
                                    s = l(t, null, {
                                        controller: n,
                                        entry: e,
                                        observer: u
                                    });
                                a.dispatchEvent(s)
                            }
                        },
                        d = n.disconnect.bind(n),
                        x = () => {
                            u.observe(a)
                        },
                        I = () => {
                            u.unobserve(a)
                        },
                        h = () => n.intersectionElements.every((e => e.hasAttribute(b))),
                        m = h;
                    return Object.assign(n, {
                        isVisible: m,
                        noneVisible: () => 0 === n.intersectionElements.filter((e => e.hasAttribute(b))).length,
                        oneVisible: () => 1 === n.intersectionElements.filter((e => e.hasAttribute(b))).length,
                        atLeastOneVisible: () => n.intersectionElements.some((e => e.hasAttribute(b))),
                        allVisible: h,
                        disconnect: () => {
                            I(), d()
                        }
                    }), x(), [x, I]
                };
            s.xI;
            s.xI;
            s.xI;
            s.xI;
            s.xI;
            class a extends s.xI {}
            a.throttles = [];
            s.xI;
            s.xI;
            s.xI;
            s.xI
        }
    }
]);
//# sourceMappingURL=752.00dfffc42d8aa8b196b7.js.map