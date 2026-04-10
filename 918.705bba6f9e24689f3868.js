"use strict";
(self.webpackChunkjouwweb = self.webpackChunkjouwweb || []).push([
    [918], {
        5918: function(e, t, i) {
            i.r(t), i.d(t, {
                default: function() {
                    return a
                }
            });
            var s = i(2891),
                n = i(2752);
            class a extends s.xI {
                static values = (() => ({
                    sitekey: String,
                    action: String
                }))();
                isRendered = !1;
                initialize() {
                    (0, n.v1)(this)
                }
                appear() {
                    if (this.isRendered) return;
                    (window.grecaptcha.enterprise || hcaptcha).render(this.element, {
                        sitekey: this.sitekeyValue,
                        action: this.actionValue,
                        callback: e => {
                            this.element.closest("form").elements.namedItem("captcha-response").value = e
                        }
                    }), this.isRendered = !0
                }
            }
        }
    }
]);
//# sourceMappingURL=918.705bba6f9e24689f3868.js.map