"use strict";
(self.webpackChunkjouwweb = self.webpackChunkjouwweb || []).push([
    [938], {
        1938: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var s = n(2891),
                i = n(8895);
            class u extends s.xI {
                cleanup = null;
                connect() {
                    if (!this.element.classList.contains("hidden")) return;
                    const e = this.element.closest("form");
                    if (!e) return;
                    null !== e.querySelector(".jw-element-form-is-error") && this.show();
                    const t = this.show.bind(this),
                        n = () => {
                            t()
                        };
                    e.addEventListener("submit", n);
                    const s = (0, i.kE)(e, "input", "input,textarea", (function() {
                        const {
                            value: e
                        } = this;
                        "" !== e && t()
                    }));
                    this.cleanup = () => {
                        e.removeEventListener("submit", n), s()
                    }
                }
                disconnect() {
                    this.cleanup ? .(), this.cleanup = null
                }
                hide() {
                    this.element.classList.add("hidden")
                }
                show() {
                    this.element.classList.remove("hidden")
                }
            }
        }
    }
]);
//# sourceMappingURL=938.49664f63c00c117fb2f9.js.map