/*! For license information please see app_api.pid.js.LICENSE.txt */
(() => {
  var t = {
      "./src/index_api.ts": (t, e, n) => {
        "use strict";
        n.r(e);
        var o,
          r,
          i,
          a,
          c = n("./node_modules/preact/dist/preact.module.js"),
          u =
            (n("./src/vendor/customEvent.js"),
            n("./node_modules/regenerator-runtime/runtime.js"),
            0),
          s = [],
          l = [],
          d = c.options.__b,
          f = c.options.__r,
          p = c.options.diffed,
          _ = c.options.__c,
          v = c.options.unmount;
        function h(t, e) {
          c.options.__h && c.options.__h(r, t, u || e), (u = 0);
          var n = r.__H || (r.__H = { __: [], __h: [] });
          return t >= n.__.length && n.__.push({ __V: l }), n.__[t];
        }
        function g(t) {
          return (u = 1), y(L, t);
        }
        function y(t, e, n) {
          var i = h(o++, 2);
          if (
            ((i.t = t),
            !i.__c &&
              ((i.__ = [
                n ? n(e) : L(void 0, e),
                function (t) {
                  var e = i.__N ? i.__N[0] : i.__[0],
                    n = i.t(e, t);
                  e !== n && ((i.__N = [n, i.__[1]]), i.__c.setState({}));
                },
              ]),
              (i.__c = r),
              !r.u))
          ) {
            var a = function (t, e, n) {
              if (!i.__c.__H) return !0;
              var o = i.__c.__H.__.filter(function (t) {
                return t.__c;
              });
              if (
                o.every(function (t) {
                  return !t.__N;
                })
              )
                return !c || c.call(this, t, e, n);
              var r = !1;
              return (
                o.forEach(function (t) {
                  if (t.__N) {
                    var e = t.__[0];
                    (t.__ = t.__N), (t.__N = void 0), e !== t.__[0] && (r = !0);
                  }
                }),
                !(!r && i.__c.props === t) && (!c || c.call(this, t, e, n))
              );
            };
            r.u = !0;
            var c = r.shouldComponentUpdate,
              u = r.componentWillUpdate;
            (r.componentWillUpdate = function (t, e, n) {
              if (this.__e) {
                var o = c;
                (c = void 0), a(t, e, n), (c = o);
              }
              u && u.call(this, t, e, n);
            }),
              (r.shouldComponentUpdate = a);
          }
          return i.__N || i.__;
        }
        function m(t, e) {
          var n = h(o++, 3);
          !c.options.__s &&
            A(n.__H, e) &&
            ((n.__ = t), (n.i = e), r.__H.__h.push(n));
        }
        function b(t) {
          return (
            (u = 5),
            w(function () {
              return { current: t };
            }, [])
          );
        }
        function w(t, e) {
          var n = h(o++, 7);
          return A(n.__H, e)
            ? ((n.__V = t()), (n.i = e), (n.__h = t), n.__V)
            : n.__;
        }
        function E(t, e) {
          return (
            (u = 8),
            w(function () {
              return t;
            }, e)
          );
        }
        function S(t) {
          var e = h(o++, 10),
            n = g();
          return (
            (e.__ = t),
            r.componentDidCatch ||
              (r.componentDidCatch = function (t, o) {
                e.__ && e.__(t, o), n[1](t);
              }),
            [
              n[0],
              function () {
                n[1](void 0);
              },
            ]
          );
        }
        function k() {
          for (var t; (t = s.shift()); )
            if (t.__P && t.__H)
              try {
                t.__H.__h.forEach(C), t.__H.__h.forEach(x), (t.__H.__h = []);
              } catch (e) {
                (t.__H.__h = []), c.options.__e(e, t.__v);
              }
        }
        (c.options.__b = function (t) {
          (r = null), d && d(t);
        }),
          (c.options.__r = function (t) {
            f && f(t), (o = 0);
            var e = (r = t.__c).__H;
            e &&
              (i === r
                ? ((e.__h = []),
                  (r.__h = []),
                  e.__.forEach(function (t) {
                    t.__N && (t.__ = t.__N),
                      (t.__V = l),
                      (t.__N = t.i = void 0);
                  }))
                : (e.__h.forEach(C), e.__h.forEach(x), (e.__h = []), (o = 0))),
              (i = r);
          }),
          (c.options.diffed = function (t) {
            p && p(t);
            var e = t.__c;
            e &&
              e.__H &&
              (e.__H.__h.length &&
                ((1 !== s.push(e) && a === c.options.requestAnimationFrame) ||
                  ((a = c.options.requestAnimationFrame) || T)(k)),
              e.__H.__.forEach(function (t) {
                t.i && (t.__H = t.i),
                  t.__V !== l && (t.__ = t.__V),
                  (t.i = void 0),
                  (t.__V = l);
              })),
              (i = r = null);
          }),
          (c.options.__c = function (t, e) {
            e.some(function (t) {
              try {
                t.__h.forEach(C),
                  (t.__h = t.__h.filter(function (t) {
                    return !t.__ || x(t);
                  }));
              } catch (n) {
                e.some(function (t) {
                  t.__h && (t.__h = []);
                }),
                  (e = []),
                  c.options.__e(n, t.__v);
              }
            }),
              _ && _(t, e);
          }),
          (c.options.unmount = function (t) {
            v && v(t);
            var e,
              n = t.__c;
            n &&
              n.__H &&
              (n.__H.__.forEach(function (t) {
                try {
                  C(t);
                } catch (t) {
                  e = t;
                }
              }),
              (n.__H = void 0),
              e && c.options.__e(e, n.__v));
          });
        var O = "function" == typeof requestAnimationFrame;
        function T(t) {
          var e,
            n = function () {
              clearTimeout(o), O && cancelAnimationFrame(e), setTimeout(t);
            },
            o = setTimeout(n, 100);
          O && (e = requestAnimationFrame(n));
        }
        function C(t) {
          var e = r,
            n = t.__c;
          "function" == typeof n && ((t.__c = void 0), n()), (r = e);
        }
        function x(t) {
          var e = r;
          (t.__c = t.__()), (r = e);
        }
        function A(t, e) {
          return (
            !t ||
            t.length !== e.length ||
            e.some(function (e, n) {
              return e !== t[n];
            })
          );
        }
        function L(t, e) {
          return "function" == typeof e ? e(t) : e;
        }
        function P(t, e) {
          for (var n in t) if ("__source" !== n && !(n in e)) return !0;
          for (var o in e) if ("__source" !== o && t[o] !== e[o]) return !0;
          return !1;
        }
        function j(t) {
          this.props = t;
        }
        ((j.prototype = new c.Component()).isPureReactComponent = !0),
          (j.prototype.shouldComponentUpdate = function (t, e) {
            return P(this.props, t) || P(this.state, e);
          });
        var N = c.options.__b;
        (c.options.__b = function (t) {
          t.type &&
            t.type.__f &&
            t.ref &&
            ((t.props.ref = t.ref), (t.ref = null)),
            N && N(t);
        }),
          "undefined" != typeof Symbol &&
            Symbol.for &&
            Symbol.for("react.forward_ref");
        var I = (c.toChildArray, c.options.__e);
        c.options.__e = function (t, e, n, o) {
          if (t.then)
            for (var r, i = e; (i = i.__); )
              if ((r = i.__c) && r.__c)
                return (
                  null == e.__e && ((e.__e = n.__e), (e.__k = n.__k)),
                  r.__c(t, e)
                );
          I(t, e, n, o);
        };
        var R = c.options.unmount;
        function D(t, e, n) {
          return (
            t &&
              (t.__c &&
                t.__c.__H &&
                (t.__c.__H.__.forEach(function (t) {
                  "function" == typeof t.__c && t.__c();
                }),
                (t.__c.__H = null)),
              null !=
                (t = (function (t, e) {
                  for (var n in e) t[n] = e[n];
                  return t;
                })({}, t)).__c &&
                (t.__c.__P === n && (t.__c.__P = e), (t.__c = null)),
              (t.__k =
                t.__k &&
                t.__k.map(function (t) {
                  return D(t, e, n);
                }))),
            t
          );
        }
        function M(t, e, n) {
          return (
            t &&
              ((t.__v = null),
              (t.__k =
                t.__k &&
                t.__k.map(function (t) {
                  return M(t, e, n);
                })),
              t.__c &&
                t.__c.__P === e &&
                (t.__e && n.insertBefore(t.__e, t.__d),
                (t.__c.__e = !0),
                (t.__c.__P = n))),
            t
          );
        }
        function U() {
          (this.__u = 0), (this.t = null), (this.__b = null);
        }
        function H(t) {
          var e = t.__.__c;
          return e && e.__a && e.__a(t);
        }
        function B() {
          (this.u = null), (this.o = null);
        }
        (c.options.unmount = function (t) {
          var e = t.__c;
          e && e.__R && e.__R(),
            e && !0 === t.__h && (t.type = null),
            R && R(t);
        }),
          ((U.prototype = new c.Component()).__c = function (t, e) {
            var n = e.__c,
              o = this;
            null == o.t && (o.t = []), o.t.push(n);
            var r = H(o.__v),
              i = !1,
              a = function () {
                i || ((i = !0), (n.__R = null), r ? r(c) : c());
              };
            n.__R = a;
            var c = function () {
                if (!--o.__u) {
                  if (o.state.__a) {
                    var t = o.state.__a;
                    o.__v.__k[0] = M(t, t.__c.__P, t.__c.__O);
                  }
                  var e;
                  for (o.setState({ __a: (o.__b = null) }); (e = o.t.pop()); )
                    e.forceUpdate();
                }
              },
              u = !0 === e.__h;
            o.__u++ || u || o.setState({ __a: (o.__b = o.__v.__k[0]) }),
              t.then(a, a);
          }),
          (U.prototype.componentWillUnmount = function () {
            this.t = [];
          }),
          (U.prototype.render = function (t, e) {
            if (this.__b) {
              if (this.__v.__k) {
                var n = document.createElement("div"),
                  o = this.__v.__k[0].__c;
                this.__v.__k[0] = D(this.__b, n, (o.__O = o.__P));
              }
              this.__b = null;
            }
            var r = e.__a && (0, c.createElement)(c.Fragment, null, t.fallback);
            return (
              r && (r.__h = null),
              [
                (0, c.createElement)(
                  c.Fragment,
                  null,
                  e.__a ? null : t.children
                ),
                r,
              ]
            );
          });
        var F = function (t, e, n) {
          if (
            (++n[1] === n[0] && t.o.delete(e),
            t.props.revealOrder &&
              ("t" !== t.props.revealOrder[0] || !t.o.size))
          )
            for (n = t.u; n; ) {
              for (; n.length > 3; ) n.pop()();
              if (n[1] < n[0]) break;
              t.u = n = n[2];
            }
        };
        ((B.prototype = new c.Component()).__a = function (t) {
          var e = this,
            n = H(e.__v),
            o = e.o.get(t);
          return (
            o[0]++,
            function (r) {
              var i = function () {
                e.props.revealOrder ? (o.push(r), F(e, t, o)) : r();
              };
              n ? n(i) : i();
            }
          );
        }),
          (B.prototype.render = function (t) {
            (this.u = null), (this.o = new Map());
            var e = (0, c.toChildArray)(t.children);
            t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
            for (var n = e.length; n--; )
              this.o.set(e[n], (this.u = [1, 0, this.u]));
            return t.children;
          }),
          (B.prototype.componentDidUpdate = B.prototype.componentDidMount =
            function () {
              var t = this;
              this.o.forEach(function (e, n) {
                F(t, n, e);
              });
            });
        var G =
            ("undefined" != typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103,
          V =
            /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
          Y = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
          W = /[A-Z0-9]/g,
          z = "undefined" != typeof document,
          J = function (t) {
            return (
              "undefined" != typeof Symbol && "symbol" == typeof Symbol()
                ? /fil|che|rad/
                : /fil|che|ra/
            ).test(t);
          };
        (c.Component.prototype.isReactComponent = {}),
          [
            "componentWillMount",
            "componentWillReceiveProps",
            "componentWillUpdate",
          ].forEach(function (t) {
            Object.defineProperty(c.Component.prototype, t, {
              configurable: !0,
              get: function () {
                return this["UNSAFE_" + t];
              },
              set: function (e) {
                Object.defineProperty(this, t, {
                  configurable: !0,
                  writable: !0,
                  value: e,
                });
              },
            });
          });
        var K = c.options.event;
        function $() {}
        function q() {
          return this.cancelBubble;
        }
        function X() {
          return this.defaultPrevented;
        }
        c.options.event = function (t) {
          return (
            K && (t = K(t)),
            (t.persist = $),
            (t.isPropagationStopped = q),
            (t.isDefaultPrevented = X),
            (t.nativeEvent = t)
          );
        };
        var Q = {
            enumerable: !1,
            configurable: !0,
            get: function () {
              return this.class;
            },
          },
          Z = c.options.vnode;
        c.options.vnode = function (t) {
          "string" == typeof t.type &&
            (function (t) {
              var e = t.props,
                n = t.type,
                o = {};
              for (var r in e) {
                var i = e[r];
                if (
                  !(
                    ("value" === r && "defaultValue" in e && null == i) ||
                    (z && "children" === r && "noscript" === n) ||
                    "class" === r ||
                    "className" === r
                  )
                ) {
                  var a = r.toLowerCase();
                  "defaultValue" === r && "value" in e && null == e.value
                    ? (r = "value")
                    : "download" === r && !0 === i
                    ? (i = "")
                    : "ondoubleclick" === a
                    ? (r = "ondblclick")
                    : "onchange" !== a ||
                      ("input" !== n && "textarea" !== n) ||
                      J(e.type)
                    ? "onfocus" === a
                      ? (r = "onfocusin")
                      : "onblur" === a
                      ? (r = "onfocusout")
                      : Y.test(r)
                      ? (r = a)
                      : -1 === n.indexOf("-") && V.test(r)
                      ? (r = r.replace(W, "-$&").toLowerCase())
                      : null === i && (i = void 0)
                    : (a = r = "oninput"),
                    "oninput" === a && o[(r = a)] && (r = "oninputCapture"),
                    (o[r] = i);
                }
              }
              "select" == n &&
                o.multiple &&
                Array.isArray(o.value) &&
                (o.value = (0, c.toChildArray)(e.children).forEach(function (
                  t
                ) {
                  t.props.selected = -1 != o.value.indexOf(t.props.value);
                })),
                "select" == n &&
                  null != o.defaultValue &&
                  (o.value = (0, c.toChildArray)(e.children).forEach(function (
                    t
                  ) {
                    t.props.selected = o.multiple
                      ? -1 != o.defaultValue.indexOf(t.props.value)
                      : o.defaultValue == t.props.value;
                  })),
                e.class && !e.className
                  ? ((o.class = e.class),
                    Object.defineProperty(o, "className", Q))
                  : ((e.className && !e.class) || (e.class && e.className)) &&
                    (o.class = o.className = e.className),
                (t.props = o);
            })(t),
            (t.$$typeof = G),
            Z && Z(t);
        };
        var tt = c.options.__r;
        c.options.__r = function (t) {
          tt && tt(t), t.__c;
        };
        var et = c.options.diffed;
        (c.options.diffed = function (t) {
          et && et(t);
          var e = t.props,
            n = t.__e;
          null != n &&
            "textarea" === t.type &&
            "value" in e &&
            e.value !== n.value &&
            (n.value = null == e.value ? "" : e.value);
        }),
          c.Fragment,
          c.createElement,
          c.createContext,
          c.createRef,
          c.Fragment,
          c.Component;
        const nt =
          "undefined" == typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
            ? m
            : function (t, e) {
                var n = h(o++, 4);
                !c.options.__s &&
                  A(n.__H, e) &&
                  ((n.__ = t), (n.i = e), r.__h.push(n));
              };
        function ot(t) {
          const e =
              "function" == typeof t
                ? (function (t) {
                    let e;
                    const n = new Set(),
                      o = (t, o) => {
                        const r = "function" == typeof t ? t(e) : t;
                        if (r !== e) {
                          const t = e;
                          (e = o ? r : Object.assign({}, e, r)),
                            n.forEach((n) => n(e, t));
                        }
                      },
                      r = () => e,
                      i = {
                        setState: o,
                        getState: r,
                        subscribe: (t, o, i) =>
                          o || i
                            ? ((t, o = r, i = Object.is) => {
                                console.warn(
                                  "[DEPRECATED] Please use `subscribeWithSelector` middleware"
                                );
                                let a = o(e);
                                function c() {
                                  const n = o(e);
                                  if (!i(a, n)) {
                                    const e = a;
                                    t((a = n), e);
                                  }
                                }
                                return n.add(c), () => n.delete(c);
                              })(t, o, i)
                            : (n.add(t), () => n.delete(t)),
                        destroy: () => n.clear(),
                      };
                    return (e = t(o, r, i)), i;
                  })(t)
                : t,
            n = (t = e.getState, n = Object.is) => {
              const [, o] = y((t) => t + 1, 0),
                r = e.getState(),
                i = b(r),
                a = b(t),
                u = b(n),
                s = b(!1),
                l = b();
              let d;
              void 0 === l.current && (l.current = t(r));
              let f = !1;
              (i.current !== r ||
                a.current !== t ||
                u.current !== n ||
                s.current) &&
                ((d = t(r)), (f = !n(l.current, d))),
                nt(() => {
                  f && (l.current = d),
                    (i.current = r),
                    (a.current = t),
                    (u.current = n),
                    (s.current = !1);
                });
              const p = b(r);
              nt(() => {
                const t = () => {
                    try {
                      const t = e.getState(),
                        n = a.current(t);
                      u.current(l.current, n) ||
                        ((i.current = t), (l.current = n), o());
                    } catch (t) {
                      (s.current = !0), o();
                    }
                  },
                  n = e.subscribe(t);
                return e.getState() !== p.current && t(), n;
              }, []);
              const _ = f ? d : l.current;
              return (
                (function (t, e) {
                  c.options.useDebugValue &&
                    c.options.useDebugValue(e ? e(t) : t);
                })(_),
                _
              );
            };
          return (
            Object.assign(n, e),
            (n[Symbol.iterator] = function () {
              console.warn(
                "[useStore, api] = create() is deprecated and will be removed in v4"
              );
              const t = [n, e];
              return {
                next() {
                  const e = t.length <= 0;
                  return { value: t.shift(), done: e };
                },
              };
            }),
            n
          );
        }
        var rt = n("./node_modules/cookie/index.js");
        function it(t, e) {
          void 0 === e && (e = {});
          var n = (function (t) {
            return t && "j" === t[0] && ":" === t[1] ? t.substr(2) : t;
          })(t);
          if (
            (function (t, e) {
              return (
                void 0 === e &&
                  (e = !t || ("{" !== t[0] && "[" !== t[0] && '"' !== t[0])),
                !e
              );
            })(n, e.doNotParse)
          )
            try {
              return JSON.parse(n);
            } catch (t) {}
          return t;
        }
        var at = function () {
            return (
              (at =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, o = arguments.length; n < o; n++)
                    for (var r in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        (t[r] = e[r]);
                  return t;
                }),
              at.apply(this, arguments)
            );
          },
          ct = (function () {
            function t(t, e) {
              var n = this;
              (this.changeListeners = []),
                (this.HAS_DOCUMENT_COOKIE = !1),
                (this.cookies = (function (t, e) {
                  return "string" == typeof t
                    ? rt.parse(t, e)
                    : "object" == typeof t && null !== t
                    ? t
                    : {};
                })(t, e)),
                new Promise(function () {
                  n.HAS_DOCUMENT_COOKIE =
                    "object" == typeof document &&
                    "string" == typeof document.cookie;
                }).catch(function () {});
            }
            return (
              (t.prototype._updateBrowserValues = function (t) {
                this.HAS_DOCUMENT_COOKIE &&
                  (this.cookies = rt.parse(document.cookie, t));
              }),
              (t.prototype._emitChange = function (t) {
                for (var e = 0; e < this.changeListeners.length; ++e)
                  this.changeListeners[e](t);
              }),
              (t.prototype.get = function (t, e, n) {
                return (
                  void 0 === e && (e = {}),
                  this._updateBrowserValues(n),
                  it(this.cookies[t], e)
                );
              }),
              (t.prototype.getAll = function (t, e) {
                void 0 === t && (t = {}), this._updateBrowserValues(e);
                var n = {};
                for (var o in this.cookies) n[o] = it(this.cookies[o], t);
                return n;
              }),
              (t.prototype.set = function (t, e, n) {
                var o;
                "object" == typeof e && (e = JSON.stringify(e)),
                  (this.cookies = at(
                    at({}, this.cookies),
                    (((o = {})[t] = e), o)
                  )),
                  this.HAS_DOCUMENT_COOKIE &&
                    (document.cookie = rt.serialize(t, e, n)),
                  this._emitChange({ name: t, value: e, options: n });
              }),
              (t.prototype.remove = function (t, e) {
                var n = (e = at(at({}, e), {
                  expires: new Date(1970, 1, 1, 0, 0, 1),
                  maxAge: 0,
                }));
                (this.cookies = at({}, this.cookies)),
                  delete this.cookies[t],
                  this.HAS_DOCUMENT_COOKIE &&
                    (document.cookie = rt.serialize(t, "", n)),
                  this._emitChange({ name: t, value: void 0, options: e });
              }),
              (t.prototype.addChangeListener = function (t) {
                this.changeListeners.push(t);
              }),
              (t.prototype.removeChangeListener = function (t) {
                var e = this.changeListeners.indexOf(t);
                e >= 0 && this.changeListeners.splice(e, 1);
              }),
              t
            );
          })();
        const ut = ct;
        function st() {
          var t,
            e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : "sessionStorage";
          try {
            return (
              (t = window[e]).setItem("__storage_test__", "__storage_test__"),
              t.removeItem("__storage_test__"),
              !0
            );
          } catch (e) {
            return (
              e instanceof DOMException &&
              (22 === e.code ||
                1014 === e.code ||
                "QuotaExceededError" === e.name ||
                "NS_ERROR_DOM_QUOTA_REACHED" === e.name) &&
              t &&
              0 !== t.length
            );
          }
        }
        var lt = function (t) {
            var e =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            return st(
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : "sessionStorage"
            )
              ? sessionStorage.getItem(t)
              : e;
          },
          dt = function (t, e) {
            e &&
              st(
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : "sessionStorage"
              ) &&
              sessionStorage.setItem(t, e);
          },
          ft =
            "true" === lt("trudebug", null, "localStorage") ||
            (function () {
              var t = new Proxy(new URLSearchParams(window.location.search), {
                get: function (t, e) {
                  return t.get(e);
                },
              });
              return "true" === t.tru_debug;
            })();
        function pt() {
          var t;
          ft && (t = console).log.apply(t, arguments);
        }
        function _t(t) {
          ft && t();
        }
        var vt = (function (t) {
            return (
              (t.NECESSARY = "necessary"),
              (t.PREFERENCES = "preferences"),
              (t.STATISTICS = "statistics"),
              (t.SOCIAL_CONTENT = "social_content"),
              (t.SOCIAL_SHARING = "social_sharing"),
              (t.MARKETING = "marketing"),
              (t.ADD_FEATURES = "add_features"),
              t
            );
          })({}),
          ht = (function (t) {
            return (
              (t[(t.SERVICE_LEVEL = 1)] = "SERVICE_LEVEL"),
              (t[(t.CATEGORY_LEVEL = 2)] = "CATEGORY_LEVEL"),
              t
            );
          })({}),
          gt = function (t) {
            window.TruendoEventCallback && window.TruendoEventCallback(t),
              window.dispatchEvent(
                new CustomEvent("truendoevent", { detail: t })
              );
          };
        function yt(t) {
          return (
            (yt =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            yt(t)
          );
        }
        function mt(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e &&
              (o = o.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        function bt(t) {
          for (var e, n = 1; n < arguments.length; n++)
            (e = null == arguments[n] ? {} : arguments[n]),
              n % 2
                ? mt(Object(e), !0).forEach(function (n) {
                    wt(t, n, e[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(e)
                  )
                : mt(Object(e)).forEach(function (n) {
                    Object.defineProperty(
                      t,
                      n,
                      Object.getOwnPropertyDescriptor(e, n)
                    );
                  });
          return t;
        }
        function wt(t, e, n) {
          return (
            (e = (function (t) {
              var e = (function (t, e) {
                if ("object" !== yt(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var o = n.call(t, "string");
                  if ("object" !== yt(o)) return o;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(t);
              })(t);
              return "symbol" === yt(e) ? e : e + "";
            })(e)),
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var Et = new ut();
        function St(t, e) {
          var n;
          null === (n = t.parentNode) || void 0 === n || n.replaceChild(e, t);
        }
        function kt(t) {
          for (var e in t) if (t.hasOwnProperty(e)) return !1;
          return !0;
        }
        function Ot() {
          var t = ue.getState().config.data,
            e = Et.get(t.settings.cookie_name || "truendo_cc") || {};
          return (
            _t(function () {
              var t;
              console.group("% GET COOKIE", " - expanded"),
                console.log(e),
                console.groupCollapsed("%c decoded svc", " - expanded");
              var n = de(e.svc),
                o = ue.getState().categoriesAndServices.flatMap(function (t) {
                  return t.services;
                });
              console.table(
                Object.keys(n).map(function (t) {
                  var e = o.find(function (e) {
                    return +e.short_id == +t;
                  });
                  return {
                    id: null == e ? void 0 : e.id,
                    shortId: null == e ? void 0 : e.short_id,
                    category: null == e ? void 0 : e.cookie_category_name,
                    active: n[t],
                  };
                })
              ),
                console.log(
                  "svc string length",
                  null === (t = e.svc) || void 0 === t ? void 0 : t.length
                ),
                console.groupEnd(),
                console.groupEnd();
            }),
            e
          );
        }
        function Tt(t) {
          return window.location.host.includes(t) ? t : "";
        }
        function Ct(t) {
          var e = ue.getState().config.data,
            n = e.settings.cookie_name || "truendo_cc",
            o = Tt(e.settings.cookie_domain);
          _t(function () {
            var e;
            console.group(
              "%c Cookie written",
              "color: orange; font-weight: bold"
            ),
              console.log(t),
              console.groupCollapsed(
                "%c decoded svc",
                "color: orange; font-weight: bold"
              );
            var n = de(t.svc),
              o = ue.getState().categoriesAndServices.flatMap(function (t) {
                return t.services;
              });
            console.table(
              Object.keys(n).map(function (t) {
                var e = o.find(function (e) {
                  return +e.short_id == +t;
                });
                return {
                  id: null == e ? void 0 : e.id,
                  shortId: null == e ? void 0 : e.short_id,
                  category: null == e ? void 0 : e.cookie_category_name,
                  active: n[t],
                };
              })
            ),
              console.log(
                "svc string length",
                null === (e = t.svc) || void 0 === e ? void 0 : e.length
              ),
              console.groupEnd(),
              console.groupEnd();
          }),
            Et.set(n, JSON.stringify(t), {
              expires: t.exp,
              path: "/",
              domain: o,
              sameSite: "lax",
            });
        }
        function xt(t) {
          var e = t || getCookieObj();
          if (void 0 !== e.exp)
            try {
              return new Date(e.exp);
            } catch (t) {}
          var n = new Date();
          return n.setFullYear(n.getFullYear() + 1), n;
        }
        function At() {
          var t =
              !(0 < arguments.length && void 0 !== arguments[0]) ||
              arguments[0],
            e = Jt(ue.getState().config.data).reduce(function (t, e) {
              return bt(bt({}, t), {}, wt({}, e.cat, !0));
            }, {});
          ue.getState().actions.setCategoryStates(e), Lt(t);
        }
        function Lt() {
          var t =
              !(0 < arguments.length && void 0 !== arguments[0]) ||
              arguments[0],
            e = ue.getState().actions.saveToCookieObject;
          _t(function () {
            console.log("Function: saveSettingsToCookie: ", t);
          }),
            gt({ name: "tru_save_callback" }),
            e(),
            Rt(),
            t && Nt();
        }
        var Pt = function (t, e, n, o) {
          return t ? o.cat === vt.NECESSARY || !!e.svc[n.short_id] : !!e[o.cat];
        };
        function jt() {
          var t = ue.getState().config.data,
            e = t.settings.mode === ht.SERVICE_LEVEL,
            n = Ot();
          n.svc = de(n.svc);
          var o = Jt(t).map(function (t) {
            return bt(
              bt({}, t),
              {},
              {
                services: t.services.map(function (o) {
                  return bt(bt({}, o), {}, { active: Pt(e, n, o, t) });
                }),
                state: n[t.cat] ? "active" : "inactive",
              }
            );
          });
          return (
            _t(function () {
              console.groupCollapsed(
                "%c mergeCookieAndServices",
                "color: lime; font-weight: bold"
              ),
                console.dir(o),
                console.groupEnd();
            }),
            o
          );
        }
        function Nt() {
          pt("%c Sending consent record", "color: #e31459; font-weight: bold");
          var t = ue.getState().cookieObject,
            e = ue.getState().config.data,
            n = (function (t, e) {
              var n,
                o = Date.now(),
                r = ue.getState().categoriesAndServices;
              return (
                (t.categoriesandservices = {}),
                (t.cats = []),
                r.forEach(function (e) {
                  (t.categoriesandservices[e.cat] = []), t[e.cat];
                  var n = { services: [] };
                  e.services.forEach(function (r) {
                    t.categoriesandservices[e.cat].push({
                      name: r.id,
                      status: t[e.cat],
                      t: o,
                    }),
                      n.services.push({ name: r.id, status: t[e.cat], t: o });
                  }),
                    (n.catname = e.cat),
                    (n.catstatus = t[e.cat] ? 1 : 0),
                    t.cats.push(n);
                }),
                (t.usergeo =
                  null === (n = e.gdprData) || void 0 === n
                    ? void 0
                    : n.country_code),
                t
              );
            })(bt({}, t), e);
          (n.scr_id = (function () {
            try {
              return window.Truendo.int.last;
            } catch (t) {
              return 0;
            }
          })()),
            (n.interactions = (function () {
              try {
                return window.Truendo.int.list;
              } catch (t) {
                return [];
              }
            })().length);
          var o = new XMLHttpRequest(),
            r = e.consentURL,
            i = JSON.stringify(n);
          o.addEventListener("loadend", function (e) {
            var n = e.currentTarget.status;
            n &&
              Ct(
                bt(
                  bt({}, ue.getState().cookieObject),
                  {},
                  200 <= n && 202 >= n
                    ? { consent_sent: "true", exp: xt(t) }
                    : { consent_sent: "false", exp: xt(t) }
                )
              );
          }),
            o.open("POST", r),
            o.setRequestHeader(
              "Content-Type",
              "application/json;charset=UTF-8"
            ),
            o.send(i),
            It();
        }
        function It() {
          pt("%c Sending usage record", "color: #e31459; font-weight: bold");
          var t = ue.getState().cookieObject,
            e = ue.getState().config.data,
            n = new XMLHttpRequest(),
            o = e.consentURL + "/integrity/" + t.websiteid,
            r = Date.now(),
            i = t.usv
              ? new Date(t.usv).getTime()
              : new Date("2022-01-01").getTime();
          (function (t, e) {
            if (!t || !e) return !1;
            var n = new Date(t),
              o = new Date(e),
              r = n.getFullYear(),
              i = o.getFullYear(),
              a = n.getMonth(),
              c = o.getMonth();
            return r === i && a === c;
          })(r, i) ||
            (n.addEventListener("loadend", function (e) {
              var n = e.currentTarget.status;
              n &&
                200 <= n &&
                202 >= n &&
                Ct(
                  bt(
                    bt({}, ue.getState().cookieObject),
                    {},
                    { usv: r, exp: xt(t) }
                  )
                );
            }),
            n.open("GET", o),
            n.setRequestHeader(
              "Content-Type",
              "application/json;charset=UTF-8"
            ),
            n.send());
        }
        function Rt() {
          var t = ue.getState().config.data,
            e = ue.getState().categoriesAndServices,
            n = [],
            o = [],
            r = [],
            i = [],
            a = [],
            c = [],
            u = [],
            s = [];
          setTimeout(function () {
            if (t.settings.mode === ht.SERVICE_LEVEL) {
              var l = Array.from(document.querySelectorAll("script")),
                d = Array.from(document.querySelectorAll("iframe")),
                f = Array.from(document.querySelectorAll("img"));
              e.forEach(function (t) {
                t.services.forEach(function (t) {
                  l.forEach(function (e) {
                    e.getAttribute("data-trusvccontrol") === t.id &&
                      (t.active ? n : o).push(e);
                  }),
                    d.forEach(function (e) {
                      e.getAttribute("data-trusvccontrol") === t.id &&
                        (t.active ? r : i).push(e);
                    }),
                    f.forEach(function (e) {
                      e.getAttribute("data-trusvccontrol") === t.id &&
                        (t.active ? a : c).push(e);
                    });
                });
              });
            } else {
              var p = Array.from(
                document.querySelectorAll("[data-trucookiecontrol]")
              );
              e.forEach(function (t) {
                p.forEach(function (e) {
                  var l = e.getAttribute("data-trucookiecontrol");
                  if (l && t.cat.includes(l)) {
                    var d = e.nodeName.toLowerCase();
                    "script" === d
                      ? ("inactive" === t.state ? o : n).push(e)
                      : "iframe" === d
                      ? ("inactive" === t.state ? i : r).push(e)
                      : "img" === d
                      ? ("inactive" === t.state ? c : a).push(e)
                      : ("inactive" === t.state ? u : s).push(e);
                  }
                });
              });
            }
            _t(function () {
              console.log("optInScriptElems.length: ".concat(n.length)),
                console.log(n);
            }),
              _t(function () {
                console.log("optOutScriptElems.length: ".concat(o.length)),
                  console.log(o);
              }),
              _t(function () {
                console.log("optInIframeElems.length: ".concat(r.length)),
                  console.log(r);
              }),
              _t(function () {
                console.log("optOutIframeElems.length: ".concat(i.length)),
                  console.log(i);
              }),
              _t(function () {
                console.log("optInImgElems.length: ".concat(a.length)),
                  console.log(a);
              }),
              _t(function () {
                console.log("optOutImgElems.length: ".concat(c.length)),
                  console.log(c);
              }),
              n.forEach(Dt),
              o.forEach(Mt),
              r.forEach(Bt),
              i.forEach(Ft),
              a.forEach(Ut),
              c.forEach(Ht),
              0 < s.length
                ? (function () {
                    var t,
                      e,
                      n = document.getElementsByClassName(
                        "tru-ph-soc-container"
                      ),
                      o = document.getElementsByClassName("tru-soc-hide");
                    if (0 < n.length)
                      for (t = 0; t < n.length; t += 1)
                        !1 === n[t].classList.contains("tru-ph-soc-hide") &&
                          n[t].classList.add("tru-ph-soc-hide");
                    if (0 < o.length)
                      for (e = 0; e < o.length; e += 1)
                        !1 === o[e].classList.contains("tru-soc-inactive") &&
                          o[e].classList.add("tru-soc-inactive");
                  })()
                : 0 < u.length &&
                  (function () {
                    var t = document.getElementsByClassName(
                        "tru-ph-soc-container"
                      ),
                      e = document.getElementsByClassName("tru-soc-hide");
                    if (0 < t.length)
                      for (var n = 0; n < t.length; n += 1)
                        t[n].classList.remove("tru-ph-soc-hide");
                    if (0 < e.length)
                      for (var o = 0; o < e.length; o += 1)
                        e[o].classList.remove("tru-soc-inactive");
                  })(),
              (function (t) {
                var e = (function (t) {
                  var e = { services: {} };
                  return (
                    t.forEach(function (t) {
                      (e[t.cat] = "active" === t.state),
                        t.services.forEach(function (t) {
                          e.services[t.id] = t.active;
                        });
                    }),
                    e
                  );
                })(t);
                window.TruendoCookieControlCallback &&
                  window.TruendoCookieControlCallback(e),
                  window.dispatchEvent(
                    new CustomEvent("TruendoCookieControl", { detail: e })
                  );
              })(e);
          }, 100);
        }
        function Dt(t) {
          if ("text/javascript" !== t.type) {
            var e = document.createElement("script");
            !(function (t, e, n) {
              for (var o, r = t.attributes, i = 0; i < r.length; i += 1)
                n((o = r[i])) && e.setAttribute(o.name, o.value);
            })(t, e, function (t) {
              return "type" !== t.name;
            });
            var n = t.textContent;
            n && (e.textContent = n), (e.type = "text/javascript"), St(t, e);
          }
        }
        function Mt(t) {
          t.setAttribute("type", "text/plain");
        }
        function Ut(t) {
          var e = t.getAttribute("data-src");
          e === t.getAttribute("src") || (e && t.setAttribute("src", e));
        }
        function Ht(t) {
          var e = t.getAttribute("src");
          e && (t.setAttribute("data-src", e), t.setAttribute("src", ""));
        }
        function Bt(t) {
          t.getAttribute("data-trucookiecontrol");
          var e,
            n = t.getAttribute("data-src") || "",
            o = t.getAttribute("src") || "";
          o !== n &&
            Gt(t) &&
            ((e = t).setAttribute("src", n),
            null !== o && e.setAttribute("data-src", o),
            setTimeout(function () {
              St(t, e);
            }, 10));
        }
        function Ft(t) {
          var e = {},
            n = t.getAttribute("data-src") || "";
          if (!Gt(t)) {
            var o = t.getAttribute("src") || "";
            (e = t).setAttribute("src", n),
              e.setAttribute("data-src", o),
              setTimeout(function () {
                St(t, e);
              }, 10);
          }
        }
        var Gt = function (t) {
          var e = t.getAttribute("src"),
            n = t.getAttribute("data-src");
          return (
            !(e || !n) || !!(null == e ? void 0 : e.includes("placeholder"))
          );
        };
        function Vt(t) {
          _t(function () {
            console.log("Call Function: setCategories: ", t);
          });
          var e = ue.getState().cookieObject;
          (0, ue.getState().actions.setCookieObject)(bt(bt({}, e), t), !0),
            Rt(),
            Nt();
        }
        function Yt(t, e) {
          var n =
            !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2];
          _t(function () {
            console.log(
              "Function: setCategory (category, newState, send): ",
              t,
              e,
              n
            );
          });
          var o = ue.getState().cookieObject;
          (0, ue.getState().actions.setCookieObject)(
            bt(bt({}, o), {}, wt({}, t, e)),
            !0
          ),
            n && (Rt(), Nt());
        }
        var Wt = function (t, e) {
            var n = document.getElementById(t);
            n && (n.style.display = e);
          },
          zt = function () {
            console.log("HideCustomPanel - container"),
              Wt("custom-panel", "none");
          };
        function Jt(t) {
          var e,
            n = [];
          if (void 0 === t.services) return [];
          e = t.services.length;
          var o,
            r = function () {
              var e = t.services[o],
                r = n.findIndex(function (t) {
                  return t.cat === e.cookie_category_id;
                });
              if (void 0 !== e.cookies && void 0 !== e.cookie_category_id)
                if (-1 === r) {
                  var i = {
                    name: e.cookie_category_name,
                    cat: e.cookie_category_id,
                    services: [],
                    desc: e.purpose_name,
                  };
                  i.services.push(e), n.push(i);
                } else n[r].services.push(e);
            };
          for (o = 0; o < e; o += 1) r();
          return n;
        }
        var Kt = [
          "bg",
          "hr",
          "cs",
          "da",
          "nl",
          "en",
          "et",
          "fi",
          "fr",
          "de",
          "el",
          "hu",
          "ga",
          "it",
          "lv",
          "lt",
          "no",
          "pl",
          "pt",
          "ro",
          "ru",
          "sk",
          "sl",
          "es",
          "sv",
          "zh",
          "hk",
          "sr",
          "bs",
        ];
        function $t(t, e) {
          if (void 0 !== t && void 0 !== e)
            return (
              Object.keys(e).forEach(function (n) {
                t[n] = e[n];
              }),
              t
            );
        }
        var qt = (function (t) {
          return (
            (t[(t.FLOATING_CENTER = 1)] = "FLOATING_CENTER"),
            (t[(t.BOTTOM = 2)] = "BOTTOM"),
            (t[(t.BOTTOM_THREE_BUTTONS = 3)] = "BOTTOM_THREE_BUTTONS"),
            (t[(t.BOTTOM_UPDATED = 22)] = "BOTTOM_UPDATED"),
            (t[(t.DEFAULT = 4)] = "DEFAULT"),
            (t[(t.ONE_BUTTON = 5)] = "ONE_BUTTON"),
            (t[(t.THREE_BUTTONS = 6)] = "THREE_BUTTONS"),
            (t[(t.INTERWETTEN = 7)] = "INTERWETTEN"),
            (t[(t.ACCEPTONLY = 8)] = "ACCEPTONLY"),
            (t[(t.TCFBANNER = 9)] = "TCFBANNER"),
            (t[(t.PAY = 10)] = "PAY"),
            (t[(t.TCFBANNER3 = 11)] = "TCFBANNER3"),
            (t[(t.GOOGLEBANNER = 12)] = "GOOGLEBANNER"),
            (t[(t.CUSTOM = 99)] = "CUSTOM"),
            t
          );
        })({});
        function Xt(t) {
          return (
            (Xt =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            Xt(t)
          );
        }
        function Qt(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e &&
              (o = o.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, o);
          }
          return n;
        }
        function Zt(t) {
          for (var e, n = 1; n < arguments.length; n++)
            (e = null == arguments[n] ? {} : arguments[n]),
              n % 2
                ? Qt(Object(e), !0).forEach(function (n) {
                    te(t, n, e[n]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(e)
                  )
                : Qt(Object(e)).forEach(function (n) {
                    Object.defineProperty(
                      t,
                      n,
                      Object.getOwnPropertyDescriptor(e, n)
                    );
                  });
          return t;
        }
        function te(t, e, n) {
          return (
            (e = (function (t) {
              var e = (function (t, e) {
                if ("object" !== Xt(t) || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var o = n.call(t, "string");
                  if ("object" !== Xt(o)) return o;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(t);
              })(t);
              return "symbol" === Xt(e) ? e : e + "";
            })(e)),
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function ee() {
          function t(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          function e(t, e, n, r) {
            var i = e && e.prototype instanceof o ? e : o,
              a = Object.create(i.prototype),
              c = new f(r || []);
            return y(a, "_invoke", { value: u(t, n, c) }), a;
          }
          function n(t, e, n) {
            try {
              return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          function o() {}
          function r() {}
          function i() {}
          function a(e) {
            ["next", "throw", "return"].forEach(function (n) {
              t(e, n, function (t) {
                return this._invoke(n, t);
              });
            });
          }
          function c(t, e) {
            function o(r, i, a, c) {
              var u = n(t[r], t, i);
              if ("throw" !== u.type) {
                var s = u.arg,
                  l = s.value;
                return l && "object" == Xt(l) && g.call(l, "__await")
                  ? e.resolve(l.__await).then(
                      function (t) {
                        o("next", t, a, c);
                      },
                      function (t) {
                        o("throw", t, a, c);
                      }
                    )
                  : e.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return o("throw", t, a, c);
                      }
                    );
              }
              c(u.arg);
            }
            var r;
            y(this, "_invoke", {
              value: function (t, n) {
                function i() {
                  return new e(function (e, r) {
                    o(t, n, e, r);
                  });
                }
                return (r = r ? r.then(i, i) : i());
              },
            });
          }
          function u(t, e, o) {
            var r = "suspendedStart";
            return function (i, a) {
              if ("executing" == r)
                throw new Error("Generator is already running");
              if ("completed" == r) {
                if ("throw" === i) throw a;
                return { value: void 0, done: !0 };
              }
              for (o.method = i, o.arg = a; ; ) {
                var c = o.delegate;
                if (c) {
                  var u = s(c, o);
                  if (u) {
                    if (u === S) continue;
                    return u;
                  }
                }
                if ("next" === o.method) o.sent = o._sent = o.arg;
                else if ("throw" === o.method) {
                  if ("suspendedStart" == r) throw ((r = "completed"), o.arg);
                  o.dispatchException(o.arg);
                } else "return" === o.method && o.abrupt("return", o.arg);
                r = "executing";
                var l = n(t, e, o);
                if ("normal" === l.type) {
                  if (
                    ((r = o.done ? "completed" : "suspendedYield"), l.arg === S)
                  )
                    continue;
                  return { value: l.arg, done: o.done };
                }
                "throw" === l.type &&
                  ((r = "completed"), (o.method = "throw"), (o.arg = l.arg));
              }
            };
          }
          function s(t, e) {
            var o = e.method,
              r = t.iterator[o];
            if (void 0 === r)
              return (
                (e.delegate = null),
                ("throw" === o &&
                  t.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = void 0),
                  s(t, e),
                  "throw" === e.method)) ||
                  ("return" !== o &&
                    ((e.method = "throw"),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + o + "' method"
                    )))),
                S
              );
            var i = n(r, t.iterator, e.arg);
            if ("throw" === i.type)
              return (
                (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), S
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[t.resultName] = a.value),
                  (e.next = t.nextLoc),
                  "return" !== e.method &&
                    ((e.method = "next"), (e.arg = void 0)),
                  (e.delegate = null),
                  S)
                : a
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                S);
          }
          function l(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function d(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function f(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(l, this),
              this.reset(!0);
          }
          function p(t) {
            if (t) {
              var e = t[b];
              if (e) return e.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var n = -1,
                  o = function e() {
                    for (; ++n < t.length; )
                      if (g.call(t, n))
                        return (e.value = t[n]), (e.done = !1), e;
                    return (e.value = void 0), (e.done = !0), e;
                  };
                return (o.next = o);
              }
            }
            return { next: _ };
          }
          function _() {
            return { value: void 0, done: !0 };
          }
          ee = function () {
            return v;
          };
          var v = {},
            h = Object.prototype,
            g = h.hasOwnProperty,
            y =
              Object.defineProperty ||
              function (t, e, n) {
                t[e] = n.value;
              },
            m = "function" == typeof Symbol ? Symbol : {},
            b = m.iterator || "@@iterator",
            w = m.asyncIterator || "@@asyncIterator",
            E = m.toStringTag || "@@toStringTag";
          try {
            t({}, "");
          } catch (e) {
            t = function (t, e, n) {
              return (t[e] = n);
            };
          }
          v.wrap = e;
          var S = {},
            k = {};
          t(k, b, function () {
            return this;
          });
          var O = Object.getPrototypeOf,
            T = O && O(O(p([])));
          T && T !== h && g.call(T, b) && (k = T);
          var C = (i.prototype = o.prototype = Object.create(k));
          return (
            (r.prototype = i),
            y(C, "constructor", { value: i, configurable: !0 }),
            y(i, "constructor", { value: r, configurable: !0 }),
            (r.displayName = t(i, E, "GeneratorFunction")),
            (v.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === r || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (v.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, i)
                  : ((e.__proto__ = i), t(e, E, "GeneratorFunction")),
                (e.prototype = Object.create(C)),
                e
              );
            }),
            (v.awrap = function (t) {
              return { __await: t };
            }),
            a(c.prototype),
            t(c.prototype, w, function () {
              return this;
            }),
            (v.AsyncIterator = c),
            (v.async = function (t, n, o, r, i) {
              void 0 === i && (i = Promise);
              var a = new c(e(t, n, o, r), i);
              return v.isGeneratorFunction(n)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            a(C),
            t(C, E, "Generator"),
            t(C, b, function () {
              return this;
            }),
            t(C, "toString", function () {
              return "[object Generator]";
            }),
            (v.keys = function (t) {
              var e = Object(t),
                n = [];
              for (var o in e) n.push(o);
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    var o = n.pop();
                    if (o in e) return (t.value = o), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (v.values = p),
            (f.prototype = {
              constructor: f,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(d),
                  !t)
                )
                  for (var e in this)
                    "t" === e.charAt(0) &&
                      g.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = void 0);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                function e(e, o) {
                  return (
                    (i.type = "throw"),
                    (i.arg = t),
                    (n.next = e),
                    o && ((n.method = "next"), (n.arg = void 0)),
                    !!o
                  );
                }
                if (this.done) throw t;
                for (
                  var n = this, o = this.tryEntries.length - 1;
                  0 <= o;
                  --o
                ) {
                  var r = this.tryEntries[o],
                    i = r.completion;
                  if ("root" === r.tryLoc) return e("end");
                  if (r.tryLoc <= this.prev) {
                    var a = g.call(r, "catchLoc"),
                      c = g.call(r, "finallyLoc");
                    if (a && c) {
                      if (this.prev < r.catchLoc) return e(r.catchLoc, !0);
                      if (this.prev < r.finallyLoc) return e(r.finallyLoc);
                    } else if (a) {
                      if (this.prev < r.catchLoc) return e(r.catchLoc, !0);
                    } else {
                      if (!c)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < r.finallyLoc) return e(r.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var n, o = this.tryEntries.length - 1; 0 <= o; --o)
                  if (
                    (n = this.tryEntries[o]).tryLoc <= this.prev &&
                    g.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var r = n;
                    break;
                  }
                r &&
                  ("break" === t || "continue" === t) &&
                  r.tryLoc <= e &&
                  e <= r.finallyLoc &&
                  (r = null);
                var i = r ? r.completion : {};
                return (
                  (i.type = t),
                  (i.arg = e),
                  r
                    ? ((this.method = "next"), (this.next = r.finallyLoc), S)
                    : this.complete(i)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  S
                );
              },
              finish: function (t) {
                for (var e, n = this.tryEntries.length - 1; 0 <= n; --n)
                  if ((e = this.tryEntries[n]).finallyLoc === t)
                    return this.complete(e.completion, e.afterLoc), d(e), S;
              },
              catch: function (t) {
                for (var e, n = this.tryEntries.length - 1; 0 <= n; --n)
                  if ((e = this.tryEntries[n]).tryLoc === t) {
                    var o = e.completion;
                    if ("throw" === o.type) {
                      var r = o.arg;
                      d(e);
                    }
                    return r;
                  }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, e, n) {
                return (
                  (this.delegate = {
                    iterator: p(t),
                    resultName: e,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  S
                );
              },
            }),
            v
          );
        }
        function ne(t, e, n, o, r, i, a) {
          try {
            var c = t[i](a),
              u = c.value;
          } catch (t) {
            return void n(t);
          }
          c.done ? e(u) : Promise.resolve(u).then(o, r);
        }
        function oe(t) {
          return function () {
            var e = this,
              n = arguments;
            return new Promise(function (o, r) {
              function i(t) {
                ne(c, o, r, i, a, "next", t);
              }
              function a(t) {
                ne(c, o, r, i, a, "throw", t);
              }
              var c = t.apply(e, n);
              i(void 0);
            });
          };
        }
        function re(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              var n =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != n) {
                var o,
                  r,
                  i,
                  a,
                  c = [],
                  u = !0,
                  s = !1;
                try {
                  if (((i = (n = n.call(t)).next), 0 === e)) {
                    if (Object(n) !== n) return;
                    u = !1;
                  } else
                    for (
                      ;
                      !(u = (o = i.call(n)).done) &&
                      (c.push(o.value), c.length !== e);
                      u = !0
                    );
                } catch (t) {
                  (s = !0), (r = t);
                } finally {
                  try {
                    if (
                      !u &&
                      null != n.return &&
                      ((a = n.return()), Object(a) !== a)
                    )
                      return;
                  } finally {
                    if (s) throw r;
                  }
                }
                return c;
              }
            })(t, e) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return ie(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ie(t, e)
                    : void 0
                );
              }
            })(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function ie(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
          return o;
        }
        var ae = (function (t) {
          return (
            (t.POLICY = "policy"),
            (t.VENDORS = "vendors"),
            (t.GOOGLE_VENDORS = "google_vendors"),
            (t.MY_PROFILE = "my-profile"),
            (t.COOKIE_MANAGER = "cookie-manager"),
            (t.SERVICE = "service"),
            t
          );
        })({});
        function ce(t) {
          return 7 < t.length && (t = t.substring(0, t.length - 2)), t;
        }
        var ue,
          se = ["left", "right"],
          le = function (t) {
            var e = Object.fromEntries(
              Object.entries(t).map(function (t) {
                var e = re(t, 2);
                return [e[0], e[1] ? 1 : 0];
              })
            );
            return btoa(JSON.stringify(e));
          },
          de = function (t) {
            var e = t ? JSON.parse(atob(t)) : {},
              n = Object.fromEntries(
                Object.entries(e).map(function (t) {
                  var e = re(t, 2);
                  return [e[0], !!e[1]];
                })
              );
            return n;
          },
          fe = function (t) {
            (window.Truendo.catCache = t), (window.Truendo.catCacheInit = !0);
          },
          pe = function (t, e) {
            return new Promise(function (n) {
              var o = e.custom_url,
                r = e.custom_url_value,
                i = "https://testcdn.priv.center";
              o && (i = r);
              var a = Kt.includes(e.lang)
                  ? e.lang
                  : (function () {
                      var t = (function () {
                        var t = document.documentElement.getAttribute("lang"),
                          e = document.documentElement.getAttribute("xml:lang"),
                          n = t || (!!e && e);
                        return !!n && !!Kt.includes(n) && n;
                      })();
                      if (t) return t;
                      if (
                        "undefined" != typeof window &&
                        void 0 !== window.navigator
                      ) {
                        var e = window.navigator.languages
                          ? window.navigator.languages[0]
                          : null;
                        return (
                          (e = (function (t) {
                            if (!t) return null;
                            if (-1 !== t.indexOf("-")) {
                              var e = t.split("-");
                              "zh" === (t = e[0]) && 1 < e.length
                                ? (t =
                                    "tw" === e[e.length - 1].toLowerCase() ||
                                    "hk" === e[e.length - 1].toLowerCase()
                                      ? "hk"
                                      : "cn")
                                : "zh" === t && 1 === e.length && (t = "cn"),
                                "pt" === t &&
                                  1 < e.length &&
                                  "br" === e[e.length - 1].toLowerCase() &&
                                  (t = "pt-br");
                            }
                            return ("nb" === t || "nn" === t) && (t = "no"), t;
                          })(
                            (e =
                              e ||
                              window.navigator.language ||
                              window.navigator.browserLanguage ||
                              window.navigator.userLanguage)
                          )),
                          e
                        );
                      }
                    })(),
                c = "".concat(i, "/jsons/").concat(e.siteid, "/").concat(a);
              t &&
                (c = ""
                  .concat("https://testcdn-glo.priv.center", "/v2/")
                  .concat(e.siteid, "/")
                  .concat(e.region, "/")
                  .concat(a, ".json"));
              var u = (function () {
                var t = lt("truendo_data");
                if (t) {
                  var e = JSON.parse(t);
                  if (e) {
                    var n = new Date(),
                      o = new Date(e.cacheTime);
                    if ((o.setHours(o.getHours() + 6), o > n)) return e;
                  }
                }
              })();
              if ((t && ((u = void 0), (e.is_geo = !0)), u)) {
                var s = (function () {
                  var t = oe(
                    ee().mark(function t(o) {
                      return ee().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              n(_e(e, u, o));
                            case 1:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })();
                u.gdprData
                  ? s(u.gdprData)
                  : fetch(
                      "".concat(
                        "https://testcdn.priv.center",
                        "/region/config"
                      ),
                      { method: "GET" }
                    )
                      .then(function (t) {
                        return t.ok ? t.json() : {};
                      })
                      .then(s);
              } else
                Promise.all([
                  fetch(c, { method: "GET" }).then(function (t) {
                    return t.ok ? t.json() : {};
                  }),
                  !e.region_override &&
                    fetch(
                      "".concat(
                        "https://testcdn.priv.center",
                        "/region/config"
                      ),
                      { method: "GET" }
                    ).then(function (t) {
                      return t.ok ? t.json() : {};
                    }),
                ]).then(
                  (function () {
                    var t = oe(
                      ee().mark(function t(o) {
                        var r, i, a;
                        return ee().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (r = re(o, 2)),
                                  (i = r[0]),
                                  (a = r[1]),
                                  1e3 === i.code &&
                                    ((i.consentURL = "".concat(
                                      "https://testservices.priv.center",
                                      "/consent/public/save"
                                    )),
                                    n(_e(e, i, a)));
                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })()
                );
            });
          },
          _e = function (t, e, n) {
            (e = (function (t, e) {
              var n,
                o = e.country_code,
                r = e.region_code,
                i = r ? "".concat(o, "-").concat(r) : o,
                a =
                  null === (n = t.bnr_reg_settings) || void 0 === n
                    ? void 0
                    : n[i];
              return (
                (t.banner_override = void 0 !== a),
                t.bnr_cfg.bnrType,
                void 0 === a
                  ? t
                  : Zt(
                      Zt({}, t),
                      {},
                      { bnr_cfg: Zt(Zt({}, t.bnr_cfg), {}, { bnrType: a }) }
                    )
              );
            })(e, n)),
              (e = (function (t, e) {
                if ("amp" !== e.trutype)
                  return Zt(Zt({}, t), {}, { isAmp: !1 });
                var n = t.bnr_cfg;
                return (
                  (n.bnrType = qt.BOTTOM),
                  Zt(
                    Zt({}, t),
                    {},
                    { trutype: "amp", isAmp: !0, bnr_cfg: Zt({}, n) }
                  )
                );
              })(e, t)),
              (e = (function (t, e) {
                if (!e.payId) return Zt(Zt({}, t), {}, { payId: !1 });
                var n = t.bnr_cfg;
                return (
                  (n.bnrType = qt.PAY),
                  Zt(Zt({}, t), {}, { payId: e.payId, bnr_cfg: Zt({}, n) })
                );
              })(e, t));
            var o,
              r,
              i,
              a,
              c,
              u,
              s,
              l,
              d,
              f,
              p,
              _,
              v,
              h = {
                responsible_authorities_link:
                  "https://truendo.com/data-protection-authorities/",
                rights_link_art13: "https://gdpr.truendo.com/___/3/2/13/",
                rights_link_art15: "https://gdpr.truendo.com/___/3/2/15/",
                rights_link_art16: "https://gdpr.truendo.com/___/3/3/16/",
                rights_link_art17: "https://gdpr.truendo.com/___/3/3/17/",
                rights_link_art18: "https://gdpr.truendo.com/___/3/3/18/",
                rights_link_art19: "https://gdpr.truendo.com/___/3/3/19/",
                rights_link_art20: "https://gdpr.truendo.com/___/3/3/20/",
                rights_link_art21: "https://gdpr.truendo.com/___/3/4/21/",
                rights_link_art22: "https://gdpr.truendo.com/___/3/4/22/",
              };
            return (
              e.bnr_txt && (h = $t(h, e.bnr_txt)),
              e.pnl_txt && (h = $t(h, e.pnl_txt)),
              e.tag_txt && (h = $t(h, e.tag_txt)),
              e.purposedescriptions && (h = $t(h, e.purposedescriptions)),
              e.categorydescriptions && (h = $t(h, e.categorydescriptions)),
              (p = "true" === t.test),
              (o = t.position
                ? se.includes(t.position.toLowerCase().trim())
                  ? t.position.toLowerCase().trim()
                  : "left"
                : e.settings.panel_position &&
                  se.includes(e.settings.panel_position.trim())
                ? e.settings.panel_position.trim()
                : "left"),
              (r = t.hideButton
                ? "true" === t.hideButton.toLowerCase().trim()
                : void 0 !== e.settings.float_btn_hidden &&
                  e.settings.float_btn_hidden),
              (i = e.settings.margin_bottom ? e.settings.margin_bottom : 16),
              (a = e.settings.margin_side ? e.settings.margin_side : 16),
              (c = t.hideLogo
                ? "true" === t.hideLogo.toLowerCase().trim()
                : void 0 !== e.settings.logo_hidden && e.settings.logo_hidden),
              (u = t.primaryTextColor
                ? t.primaryTextColor.toLowerCase().trim()
                : t.textColor
                ? t.textColor
                : e.settings.colortextprimary
                ? ce(e.settings.colortextprimary.trim())
                : "#ffffff"),
              (s = t.secondaryColor
                ? t.secondaryColor.toLowerCase().trim()
                : e.settings.secondary_color
                ? ce(e.settings.secondary_color.trim())
                : "#121212"),
              (l = t.secondaryTextColor
                ? t.secondaryTextColor.toLowerCase().trim()
                : e.settings.colortextsecondary
                ? ce(e.settings.colortextsecondary.trim())
                : "#ffffff"),
              (d = t.cookiesActive
                ? "true" === t.cookiesActive.toLowerCase().trim()
                : void 0 === e.settings.show_notification ||
                  e.settings.show_notification),
              (f = t.privacyCenterType
                ? t.privacyCenterType
                : void 0 === e.settings.privacy_center_type
                ? 1
                : e.settings.privacy_center_type),
              (v = t.accessibilityBorderColor
                ? t.accessibilityBorderColor
                : "#f00"),
              (_ = !0 === p ? "" : e.settings.cookie_domain),
              (e.cookieDomain = _),
              (e.websiteid = t.siteid),
              (e.gen = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx".replace(
                /[x]/g,
                function (t) {
                  var e = 0 | (16 * Math.random());
                  return ("x" === t ? e : 8 | (3 & e)).toString(16);
                }
              )),
              console.log("user_id", e.gen),
              (e.gdprData = n),
              t.region_override &&
                ((e.gdprData = {}),
                (e.gdprData.country_code = t.region_override),
                (e.gdprData.is_gdpr_region = !0)),
              (e.settings.privacy_policy_link =
                e.settings.privacy_policy_link.trim()),
              (e.settings.cookie_policy_link =
                e.settings.cookie_policy_link.trim()),
              (e.settings.imprint_link = e.settings.imprint_link.trim()),
              t.is_geo ||
                (function (t) {
                  (t.cacheTime = new Date()),
                    dt("truendo_data", JSON.stringify(t));
                })(e),
              {
                data: e,
                cookiesActive: d,
                secondaryColor: s,
                primaryTextColor: u,
                secondaryTextColor: l,
                language: h,
                transparency: "false" !== t.transparency,
                appMode: "true" === t.appMode,
                payId: !!t.payId && t.payId,
                appModeV2: "true" === t.appModeV2,
                accessibility: "true" === t.accessibility,
                isAmp: "amp" === t.trutype,
                position: o,
                hideLogo: c,
                websiteid: t.siteid,
                privacyCenterType: f,
                cookieDomain: _,
                popupDelay: t.popupDelay
                  ? Math.min(Math.max(0, parseInt(t.popupDelay)), 10)
                  : 0,
                fabConfig: { hideButton: r, marginSide: a, marginBottom: i },
                bannerConfig: {
                  bnrType: e.bnr_cfg.bnrType,
                  position: e.bnr_cfg.position,
                  bgColor: e.bnr_cfg.bgColor,
                  txtColor: e.bnr_cfg.txtColor,
                  btnColor: e.bnr_cfg.btnColor,
                  btnAltColor: e.bnr_cfg.btnAltColor || e.bnr_cfg.btnColor,
                  btnTxtColor: e.bnr_cfg.btnTxtColor,
                  btnAltTxtColor:
                    e.bnr_cfg.btnAltTxtColor || e.bnr_cfg.btnTxtColor,
                  necessary_button_color:
                    e.bnr_cfg.necessary_button_color || e.bnr_cfg.btnColor,
                  necessary_button_text_color:
                    e.bnr_cfg.necessary_button_text_color ||
                    e.bnr_cfg.btnTxtColor,
                  bnrBorderRad: "".concat(e.bnr_cfg.bnrBorderRad, "px"),
                  bnrBtnRad: "".concat(e.bnr_cfg.bnrBtnRad, "px"),
                  showOverlay:
                    e.bnr_cfg.bnrType !== qt.ACCEPTONLY &&
                    e.bnr_cfg.showOverlay,
                  inherit_font: e.bnr_cfg.inherit_font,
                  accessibility_border_color: v,
                },
              }
            );
          },
          ve = /bot|crawler|spider|crawling|Chrome-Lighthouse/i.test(
            navigator.userAgent
          ),
          he = function (t) {
            var e,
              n,
              o =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : document,
              r = window.TruSettings
                ? window.TruSettings[t.replaceAll("-", "_")]
                : "";
            return (
              (r && "" !== r) ||
                (r =
                  null !==
                    (e =
                      null === (n = o.getElementById("truendoPrivacyPanel")) ||
                      void 0 === n
                        ? void 0
                        : n.getAttribute("data-".concat(t))) && void 0 !== e
                    ? e
                    : ""),
              r
            );
          },
          ge = function (t) {
            (ue = ot(function (e, n) {
              var o,
                r,
                i,
                a,
                c,
                u,
                s,
                l,
                d,
                f,
                p,
                _,
                v,
                h,
                g,
                y,
                m,
                b,
                w,
                E,
                S,
                k,
                O,
                T;
              window.Truendo || (window.Truendo = {});
              var C = document.getElementById("truendoPrivacyPanel");
              if (!C) return {};
              var x = null !== (o = he("siteid")) && void 0 !== o ? o : "",
                A = null !== (r = he("region")) && void 0 !== r ? r : "",
                L = null !== (i = he("lang")) && void 0 !== i ? i : "",
                P = {
                  siteid: x,
                  region: A,
                  custom_url:
                    null !== (a = he("custom_url")) && void 0 !== a ? a : "",
                  custom_url_value:
                    null !== (c = he("custom_url_value")) && void 0 !== c
                      ? c
                      : "",
                  region_override:
                    null !== (u = he("region_override")) && void 0 !== u
                      ? u
                      : "",
                  test: null !== (s = he("test")) && void 0 !== s ? s : "",
                  position:
                    null !== (l = he("position")) && void 0 !== l ? l : "",
                  hideButton:
                    null !== (d = he("hide-button")) && void 0 !== d ? d : "",
                  hideLogo:
                    null !== (f = he("hide-logo")) && void 0 !== f ? f : "",
                  primaryColor:
                    null !== (p = he("primary_color")) && void 0 !== p ? p : "",
                  primaryTextColor:
                    null !== (_ = he("primary-text-color")) && void 0 !== _
                      ? _
                      : "",
                  textColor:
                    null !== (v = he("text-color")) && void 0 !== v ? v : "",
                  secondaryColor:
                    null !== (h = he("secondary-color")) && void 0 !== h
                      ? h
                      : "",
                  secondaryTextColor:
                    null !== (g = he("secondary-text-color")) && void 0 !== g
                      ? g
                      : "",
                  cookiesActive:
                    null !== (y = he("cookies-active")) && void 0 !== y
                      ? y
                      : "",
                  privacyCenterType:
                    null !== (m = he("privacy-center-type")) && void 0 !== m
                      ? m
                      : "",
                  transparency:
                    null !== (b = he("transparency")) && void 0 !== b ? b : "",
                  accessibility:
                    null !== (w = he("accessibility")) && void 0 !== w ? w : "",
                  accessibilityBorderColor:
                    null !== (E = he("accessibility-border-color")) &&
                    void 0 !== E
                      ? E
                      : "",
                  trutype:
                    null !== (S = he("trutype")) && void 0 !== S ? S : "",
                  nofont: null !== (k = he("nofont")) && void 0 !== k ? k : "",
                  popupDelay:
                    null !== (O = he("popup-delay")) && void 0 !== O ? O : "",
                  payId: null !== (T = he("pay-id")) && void 0 !== T ? T : "",
                  lang: L,
                  is_geo: !1,
                },
                j = function (o) {
                  e({ config: o });
                  var r = Ot();
                  if (o.data.consent_invalidation_date) {
                    var i = new Date(o.data.consent_invalidation_date),
                      a = new Date(r.exp);
                    a.setFullYear(a.getFullYear() - 1),
                      a < i &&
                        (pt("Deleting cookie because of invalidation date"),
                        (function () {
                          var t = ue.getState().config.data;
                          Et.remove(t.settings.cookie_name || "truendo_cc", {
                            domain: Tt(t.settings.cookie_domain),
                            path: "/",
                          });
                        })());
                  }
                  var c = jt();
                  e({ cookieObject: Ot() }), e({ categoriesAndServices: c });
                  var u = Ot();
                  if (o.data.settings.mode === ht.SERVICE_LEVEL && !u.svc) {
                    console.log("i am called"),
                      _t(function () {
                        console.group(
                          "%c Backfill services into old cookie",
                          "color: pink; font-weight: bold"
                        ),
                          console.log(
                            "categoriesAndServices",
                            n().categoriesAndServices
                          ),
                          console.log("categoryState", n().categoryState),
                          console.log("service data", N(u)),
                          console.groupEnd();
                      });
                    var s = N(u);
                    console.log("serviceState", s),
                      e({ serviceState: s }),
                      e({ cookieObject: Zt(Zt({}, u), {}, { svc: le(s) }) });
                  }
                  (function () {
                    window.Truendo.cookieSettings ||
                      Object.defineProperty(window.Truendo, "cookieSettings", {
                        get: Ot,
                      }),
                      (function () {
                        var t = ue.getState().cookieObject,
                          e = ue.getState().actions.recreateCookieObject,
                          n = ue.getState().config.data,
                          o = (function (t) {
                            var e = Ot();
                            if (void 0 !== e.exp)
                              try {
                                return new Date(e.exp);
                              } catch (t) {}
                            var n = new Date();
                            return n.setFullYear(n.getFullYear() + 1), n;
                          })(),
                          r = (function () {
                            var t = [],
                              e = window.location.hostname.split(".");
                            e = e.reverse();
                            var n = "";
                            return (
                              e.forEach(function (e, o) {
                                (n = 0 === o ? e : "".concat(e, ".").concat(n)),
                                  t.push(n);
                              }),
                              t.shift(),
                              t
                            );
                          })();
                        kt(t) ||
                          (Tt(n.settings.cookie_domain) &&
                            Et.remove(n.settings.cookie_name),
                          r.forEach(function (t) {
                            t !== Tt(n.settings.cookie_domain) &&
                              Et.remove(n.settings.cookie_name, {
                                expires: o,
                                path: "/",
                                domain: t,
                                sameSite: "lax",
                              });
                          }),
                          e());
                      })(),
                      (function () {
                        var t = ue.getState().cookieObject,
                          e = ue.getState().actions.setCookieObject;
                        kt(t) || (void 0 === t.exp && e(t, !0));
                      })();
                    var t = ue.getState().cookieObject;
                    kt(t) ||
                      (Rt(),
                      t.hasOwnProperty("consent_sent") &&
                        "false" === t.consent_sent &&
                        Nt(),
                      It());
                  })(),
                    (function () {
                      var t = ue.getState().cookieObject,
                        e = ue.getState().config.data,
                        n = ue.getState().actions.setCookieObject;
                      kt(t) &&
                        n(
                          {
                            ack: !1,
                            version: 2,
                            user_id: e.gen,
                            websiteid: e.websiteid,
                            prodirversion: e.version,
                            panellanguage: e.language,
                            preferences: !1,
                            marketing: !1,
                            necessary: !0,
                            statistics: !1,
                            social_content: !1,
                            social_sharing: !1,
                            add_features: !1,
                          },
                          !1
                        );
                    })();
                  var l = o.data.eu_only && !o.data.gdprData.is_gdpr_region,
                    d = !1;
                  t &&
                    ((l = o.data.settings.auto_accept),
                    (d = o.data.settings.auto_accept_notify));
                  var f = d || o.data.bnr_cfg.bnrType === qt.ACCEPTONLY,
                    p = 1 === c.length && "necessary" === c[0].cat,
                    _ = function (t) {
                      _t(function () {
                        console.log("Autoaccept: ", t);
                      }),
                        At(t);
                    },
                    v = n().actions.setAck;
                  ve || p
                    ? (pt(
                        "%c Auto accepting - client is bot or site has no optional cookies",
                        "color: #e31459; font-weight: bold"
                      ),
                      n().cookieObject.ack || (_(!1), v(!0)))
                    : l &&
                      (pt(
                        "%c Auto accepting - GDPR does not apply",
                        "color: #e31459; font-weight: bold"
                      ),
                      n().cookieObject.ack || (_(!0), v(!f)));
                };
              pe(t, P)
                .then(j)
                .then(function () {
                  return e({ initialized: !0 });
                }),
                new MutationObserver(function () {
                  return pe(t, P).then(j);
                }).observe(C, { attributes: !0 });
              var N = function (t) {
                  return n().categoriesAndServices.reduce(function (e, n) {
                    return Zt(
                      Zt({}, e),
                      n.services.reduce(function (e, o) {
                        return Zt(Zt({}, e), {}, te({}, o.short_id, t[n.cat]));
                      }, {})
                    );
                  }, {});
                },
                I = function (t) {
                  return n().categoriesAndServices.reduce(function (e, n) {
                    return Zt(
                      Zt({}, e),
                      {},
                      te(
                        {},
                        n.cat,
                        n.services.every(function (e) {
                          return t[e.short_id];
                        })
                      )
                    );
                  }, {});
                };
              return {
                initialized: !1,
                config: null,
                hasUnsavedChanges: !1,
                cookieObject: null,
                hasSeenBanner: !1,
                categoryState: {},
                serviceState: {},
                categoriesAndServices: [],
                showTCFUI: !1,
                googleVendorsSelected: [],
                payState: {},
                tcfPurposes: {},
                actions: {
                  setCategoryState: function (t) {
                    var o =
                        !!(1 < arguments.length && void 0 !== arguments[1]) &&
                        arguments[1],
                      r = Zt(Zt({}, n().categoryState), {}, te({}, t, o));
                    e({ categoryState: r, serviceState: N(r) }), fe(r);
                  },
                  setCategoryStates: function (t) {
                    var o = Zt(Zt({}, n().categoryState), t);
                    e({ categoryState: o, serviceState: N(o) }), fe(o);
                  },
                  toggleCategoryState: function (t) {
                    var o = Zt(
                      Zt({}, n().categoryState),
                      {},
                      te({}, t, !(t !== vt.NECESSARY && n().categoryState[t]))
                    );
                    e({
                      categoryState: o,
                      hasUnsavedChanges: !0,
                      serviceState: N(o),
                    }),
                      fe(o);
                  },
                  setServiceState: function (t) {
                    var o =
                        !!(1 < arguments.length && void 0 !== arguments[1]) &&
                        arguments[1],
                      r = Zt(Zt({}, n().serviceState), {}, te({}, t, o));
                    e({ serviceState: r, categoryState: I(r) });
                  },
                  toggleServiceState: function (t) {
                    var o = Zt(
                      Zt({}, n().serviceState),
                      {},
                      te({}, t, !n().serviceState[t])
                    );
                    e({
                      serviceState: o,
                      hasUnsavedChanges: !0,
                      categoryState: I(o),
                    });
                  },
                  recreateCookieObject: function () {
                    var t = n().cookieObject;
                    Ct(Zt(Zt({}, t), {}, { exp: xt(t) })),
                      e({ categoriesAndServices: jt() });
                  },
                  setCookieObject: function (t, o) {
                    var r = n().config,
                      i = r.appMode,
                      a = r.data,
                      c = Zt(
                        Zt({}, t),
                        {},
                        { exp: xt(t), svc: le(n().serviceState) }
                      );
                    e({ cookieObject: c }), o && Ct(c);
                    var u = {},
                      s = jt();
                    if (
                      (s.forEach(function (t) {
                        t.cat === vt.NECESSARY && (u[t.cat] = !0);
                        var e =
                          n().categoryState[t.cat] ||
                          "active" === t.state ||
                          t.cat === vt.NECESSARY;
                        u[t.cat] = e;
                      }),
                      e({ categoryState: u, categoriesAndServices: s }),
                      fe(u),
                      i && window.appCallback)
                    ) {
                      var l = a.settings.cookie_name || "truendo__cc",
                        d = ""
                          .concat(l, "=")
                          .concat(encodeURIComponent(JSON.stringify(c)));
                      window.appCallback("cookie", {
                        cookieName: l,
                        cookieObject: c,
                        cookieString: d,
                      });
                    }
                  },
                  saveToCookieObject: function () {
                    var t = n().cookieObject,
                      o = Zt(
                        Zt(Zt({}, t), {}, { exp: xt(t) }, n().categoryState),
                        {},
                        { svc: le(n().serviceState) }
                      );
                    e({ cookieObject: o, hasUnsavedChanges: !1 }),
                      Ct(o),
                      e({ categoriesAndServices: jt() });
                  },
                  setAck: function (t) {
                    var e = n().cookieObject;
                    e.ack !== t &&
                      n().actions.setCookieObject(
                        Zt(Zt({}, e), {}, { ack: t }),
                        !0
                      );
                  },
                  privacySettings: {
                    setHasUnsavedChanges: function () {
                      return e({
                        hasUnsavedChanges:
                          !(0 < arguments.length && void 0 !== arguments[0]) ||
                          arguments[0],
                      });
                    },
                    setHasSeenBanner: function () {
                      var t = {},
                        o = n().serviceState || {};
                      n().categoriesAndServices.forEach(function (e) {
                        e.cat === vt.NECESSARY && (t[e.cat] = !0);
                        var r =
                          n().categoryState[e.cat] ||
                          "active" === e.state ||
                          e.cat === vt.NECESSARY;
                        e.services.forEach(function (t) {
                          o[t.short_id] = t.active;
                        }),
                          (t[e.cat] = r);
                      }),
                        e({
                          hasSeenBanner: !0,
                          categoryState: t,
                          serviceState: o,
                        }),
                        fe(t);
                    },
                  },
                },
              };
            })),
              _t(function () {
                ue.subscribe(function (t) {
                  console.groupCollapsed(
                    "%c Store updated",
                    "color: cyan; font-weight: bold"
                  ),
                    console.dir(t),
                    console.groupEnd();
                });
              });
          },
          ye = ot(function (t, e) {
            return {
              isMenuOpen: !1,
              isPanelOpen: !1,
              isPanelInitialized: !1,
              currentPage: ae.COOKIE_MANAGER,
              currentPageId: void 0,
              actions: {
                openPage: function (e, n) {
                  gt({ name: "tru_page_open", params: { page: e } }),
                    t({ currentPage: e, currentPageId: n });
                },
                toggleMenu: function () {
                  return t({ isMenuOpen: !e().isMenuOpen });
                },
                openPanel: function (n) {
                  return (
                    n && e().actions.openPage(n),
                    gt({ name: "tru_panel_open" }),
                    t({ isPanelOpen: !0, isPanelInitialized: !0 })
                  );
                },
                closePanel: function () {
                  return (
                    gt({ name: "tru_panel_close" }), t({ isPanelOpen: !1 })
                  );
                },
              },
            };
          });
        function me(t) {
          var e;
          null === (e = document.getElementById("truendo_container")) ||
            void 0 === e ||
            e.addEventListener("mouseover", function (e) {
              var n = e.target,
                o = t(n);
              o || (o = (n = n.parentElement) && t(n)), o && me.show(n, o, !0);
            });
        }
        (me.show = function (t, e, n) {
          (e = e || {}),
            (
              t.tooltip ||
              (function (t, e) {
                function o() {
                  me.hide(t, !0);
                }
                function r() {
                  i ||
                    ((i = (function (t, e, n) {
                      function o() {
                        r.className = "tlite tlite-" + a + c;
                        var e = t.offsetTop,
                          n = t.offsetLeft;
                        r.offsetParent === t && (e = n = 0);
                        var o = t.offsetWidth,
                          i = t.offsetHeight,
                          u = r.offsetHeight,
                          s = r.offsetWidth,
                          l = n + o / 2;
                        r.style.setProperty(
                          "top",
                          ("s" === a
                            ? e - u - 10
                            : "n" === a
                            ? e + i + 10
                            : e + i / 2 - u / 2) + "px",
                          "important"
                        ),
                          r.style.setProperty(
                            "left",
                            ("w" === c
                              ? n
                              : "e" === c
                              ? n + o - s
                              : "w" === a
                              ? n + o + 10
                              : "e" === a
                              ? n - s - 10
                              : l - s / 2) + "px",
                            "important"
                          );
                      }
                      var r = document.createElement("span"),
                        i = n.grav || t.getAttribute("data-tlite") || "n";
                      (r.innerHTML = e), t.appendChild(r);
                      var a = i[0] || "",
                        c = i[1] || "";
                      o();
                      var u = r.getBoundingClientRect();
                      return (
                        "s" === a && 0 > u.top
                          ? ((a = "n"), o())
                          : "n" === a && u.bottom > window.innerHeight
                          ? ((a = "s"), o())
                          : "e" === a && 0 > u.left
                          ? ((a = "w"), o())
                          : "w" == a &&
                            u.right > window.innerWidth &&
                            ((a = "e"), o()),
                        (r.className += " tlite-visible"),
                        r
                      );
                    })(t, c, e)),
                    i.addEventListener("mousedown", o));
                }
                var i, a, c;
                return (
                  t.addEventListener("mouseleave", o),
                  (t.tooltip = {
                    show: function () {
                      (c = t.title || t.getAttribute("data-tlite") || c),
                        (t.title = ""),
                        t.setAttribute("data-tlite", ""),
                        c && !a && (a = setTimeout(r, n ? 150 : 1));
                    },
                    hide: function (t) {
                      if (n === t) {
                        a = clearTimeout(a);
                        var e = i && i.parentNode;
                        e && e.removeChild(i), (i = void 0);
                      }
                    },
                  })
                );
              })(t, e)
            ).show();
        }),
          (me.hide = function (t, e) {
            t.tooltip && t.tooltip.hide(e);
          });
        const be = me;
        function we(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
          return o;
        }
        console.log("%cTRUENDO DEBUG MODE", "font-size: 30px; color: hotpink;"),
          console.log(
            "%cHelper methods: setGdprRegion(boolean), setBnrType(number), setCategoryMode(), setServiceMode()",
            "font-size: 13px; font-weight: bold; color: hotpink;"
          ),
          (window.setGdprRegion = function () {
            var t =
                !(0 < arguments.length && void 0 !== arguments[0]) ||
                arguments[0],
              e = lt("truendo_data");
            if (e) {
              var n = JSON.parse(e);
              (n.gdprData = {
                is_gdpr_region: t,
                country_code: t ? "AT" : "ID",
              }),
                dt("truendo_data", JSON.stringify(n));
            }
          }),
          (window.setBnrType = function (t) {
            var e = lt("truendo_data");
            if (e) {
              var n = JSON.parse(e);
              (n.bnr_cfg = { bnrType: t }),
                dt("truendo_data", JSON.stringify(n));
            }
          }),
          (window.setCategoryMode = function () {
            var t = lt("truendo_data");
            if (t) {
              var e = JSON.parse(t);
              dt("truendo_data", JSON.stringify(e));
            }
          }),
          (window.setServiceMode = function () {
            var t = lt("truendo_data");
            if (t) {
              var e = JSON.parse(t);
              dt("truendo_data", JSON.stringify(e));
            }
          });
        const Ee = function () {
          var t = ue(function (t) {
              return t.cookieObject;
            }).user_id,
            e = ue(function (t) {
              return t.actions;
            }),
            n = e.toggleCategoryState,
            o = e.setAck,
            r = (function (t, e) {
              return (
                (function (t) {
                  if (Array.isArray(t)) return t;
                })(t) ||
                (function (t, e) {
                  var n =
                    null == t
                      ? null
                      : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                  if (null != n) {
                    var o,
                      r,
                      i,
                      a,
                      c = [],
                      u = !0,
                      s = !1;
                    try {
                      if (((i = (n = n.call(t)).next), 0 === e)) {
                        if (Object(n) !== n) return;
                        u = !1;
                      } else
                        for (
                          ;
                          !(u = (o = i.call(n)).done) &&
                          (c.push(o.value), c.length !== e);
                          u = !0
                        );
                    } catch (t) {
                      (s = !0), (r = t);
                    } finally {
                      try {
                        if (
                          !u &&
                          null != n.return &&
                          ((a = n.return()), Object(a) !== a)
                        )
                          return;
                      } finally {
                        if (s) throw r;
                      }
                    }
                    return c;
                  }
                })(t, e) ||
                (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return we(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      "Object" === n &&
                        t.constructor &&
                        (n = t.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(t)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? we(t, e)
                        : void 0
                    );
                  }
                })(t, e) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            })(g(!1), 2),
            i = r[0],
            a = r[1],
            c = b(),
            u = ye(function (t) {
              return t.actions;
            }),
            s = ue(function (t) {
              return t.actions.privacySettings;
            }),
            l = s.setHasSeenBanner,
            d = ue(function (t) {
              return {
                initialized: t.initialized,
                hasUnsavedChanges: t.hasUnsavedChanges,
                cookieObject: t.cookieObject,
                config: t.config,
                categoriesAndServices: t.categoriesAndServices,
                hasSeenBanner: t.hasSeenBanner,
              };
            }),
            f = d.initialized,
            p = d.hasUnsavedChanges,
            _ = d.cookieObject,
            v = d.config,
            h = (d.categoriesAndServices, d.hasSeenBanner),
            y = (null == _ ? void 0 : _.ack) || !1,
            w = E(function (t) {
              "Escape" === t.code && u.closePanel();
            }, []);
          m(function () {
            return (
              document.addEventListener("keyup", w),
              function () {
                return document.removeEventListener("keyup", w);
              }
            );
          }, []);
          var S = function () {
              l(), o(!0);
            },
            k = function () {
              (function () {
                var t =
                    !(0 < arguments.length && void 0 !== arguments[0]) ||
                    arguments[0],
                  e = Jt(ue.getState().config.data).reduce(function (t, e) {
                    return bt(bt({}, t), {}, wt({}, e.cat, !1));
                  }, {});
                ue.getState().actions.setCategoryStates(e), Lt(t);
              })(),
                S(),
                gt({ name: "banner_gone" });
            },
            O = function () {
              At(), S(), gt({ name: "banner_gone" });
            },
            T = function () {
              return ue.getState().categoriesAndServices;
            };
          m(function () {
            _t(function () {
              console.log("isAmp", v.isAmp),
                console.log("navigator", navigator.cookieEnabled);
            }),
              v.isAmp
                ? a(!0)
                : (!navigator.cookieEnabled && O(), a(navigator.cookieEnabled));
          }, []);
          var C = function () {
              (function (t) {
                try {
                  window.Truendo.int
                    ? ((window.Truendo.int.last = 2),
                      window.Truendo.int.list.push(2))
                    : ((window.Truendo.int = {}),
                      (window.Truendo.int.last = 2),
                      (window.Truendo.int.list = [2]));
                } catch (t) {}
              })(),
                Lt(),
                o(!0),
                gt({ name: "tru_save_preferences_click" });
            },
            x = function () {
              return document.getElementById("cc-banner");
            },
            A = function () {
              var t = x();
              t && (t.style.display = "none");
            },
            L = E(function () {
              window.addEventListener(
                "message",
                function (t) {
                  var e =
                    "^(http://localhost)(:3000){0,1}$|^(https://.*(truendo.com|decid.io|priv.center|".concat(
                      window.location.host,
                      "))$"
                    );
                  t.origin.match(e) &&
                    ("show_panel" === t.data
                      ? (window.Truendo.openPanel(), window.Truendo.ack())
                      : "social_content" === t.data
                      ? (window.Truendo.ack(), window.Truendo.toggleContent())
                      : "social_sharing" === t.data
                      ? (window.Truendo.ack(), window.Truendo.toggleSharing())
                      : "marketing" === t.data
                      ? (window.Truendo.ack(), window.Truendo.toggleMarketing())
                      : "statistics" === t.data
                      ? (window.Truendo.ack(),
                        window.Truendo.toggleStatistics())
                      : "preferences" === t.data
                      ? (window.Truendo.ack(),
                        window.Truendo.togglePreferences())
                      : "add_features" === t.data
                      ? (window.Truendo.ack(), window.Truendo.addFeatures())
                      : "marketing_social_content" === t.data &&
                        (window.Truendo.ack(),
                        _.hasOwnProperty("marketing") &&
                        _.hasOwnProperty("social_content")
                          ? window.Truendo.toggleMarketingSocialContent()
                          : _.hasOwnProperty("marketing")
                          ? window.Truendo.toggleContent()
                          : _.hasOwnProperty("social_content")
                          ? window.Truendo.toggleMarketing()
                          : window.Truendo.toggleMarketingSocialContent()));
                },
                !1
              );
            }, []);
          m(function () {
            var e;
            return (
              null === (e = c.current) ||
                void 0 === e ||
                e.setAttribute("translate", "no"),
              be(function (t) {
                return (
                  t &&
                  t.classList &&
                  t.classList.contains("tru_tooltip") && { grav: "sw" }
                );
              }),
              window.Truendo || (window.Truendo = {}),
              (window.Truendo.openPanel = function () {
                return u.openPanel(ae.COOKIE_MANAGER);
              }),
              (window.Truendo.openPrivacyPanel = function () {
                return u.openPanel(ae.COOKIE_MANAGER);
              }),
              (window.Truendo.openPrivacyPolicy = function () {
                return u.openPanel(ae.POLICY);
              }),
              (window.Truendo.openCookieSettings = function () {
                u.openPanel(ae.COOKIE_MANAGER), A();
              }),
              (window.Truendo.openYourRights = function () {
                return u.openPanel(ae.POLICY);
              }),
              (window.Truendo.openVendors = function () {
                return u.openPanel(ae.VENDORS);
              }),
              (window.Truendo.openGoogleVendors = function () {
                return u.openPanel(ae.GOOGLE_VENDORS);
              }),
              (window.Truendo.acceptAllCookies = O),
              (window.Truendo.acceptNecessaryCookiesOnly = k),
              (window.Truendo.ack = S),
              (window.Truendo.saveSettings = C),
              (window.Truendo.toggleSharing = function () {
                return Yt(vt.SOCIAL_SHARING, !0, !0);
              }),
              (window.Truendo.toggleContent = function () {
                return Yt(vt.SOCIAL_CONTENT, !0, !0);
              }),
              (window.Truendo.toggleMarketing = function () {
                return Yt(vt.MARKETING, !0, !0);
              }),
              (window.Truendo.togglePreferences = function () {
                return Yt(vt.PREFERENCES, !0, !0);
              }),
              (window.Truendo.toggleStatistics = function () {
                return Yt(vt.STATISTICS, !0, !0);
              }),
              (window.Truendo.addFeatures = function () {
                return Yt(vt.ADD_FEATURES, !0, !0);
              }),
              (window.Truendo.toggleMarketingSocialContent = function () {
                return Vt({ social_content: !0, marketing: !1 });
              }),
              (window.Truendo.toggleCat = function (t) {
                return (function (t) {
                  n(t.services[0].cookie_category_id);
                })(t);
              }),
              (window.Truendo.hasUnsavedChanges = function () {
                return p;
              }),
              (window.Truendo.HideCustomPanel = function () {
                return zt();
              }),
              (window.Truendo.ShowCustomPanel = function () {
                return (
                  console.log("ShowCustomPanel - container"),
                  void Wt("custom-panel", "block")
                );
              }),
              (window.Truendo.HideCustomButton = function () {
                return (
                  console.log("HideCustomButton - container"),
                  void Wt("custom-panel-button", "none")
                );
              }),
              (window.Truendo.ShowCustomButton = function () {
                return (
                  console.log("ShowCustomButton - container"),
                  void Wt("custom-panel-button", "block")
                );
              }),
              (window.Truendo.SaveSettingsClosePanel = function () {
                return (function (t) {
                  t(), zt();
                })(C);
              }),
              (window.Truendo.acceptAllClosePanel = function () {
                return (function (t) {
                  t(), zt();
                })(O);
              }),
              (window.Truendo.necClosePanel = function () {
                return (function (t) {
                  t(), zt();
                })(k);
              }),
              (window.Truendo.displayPrivacyID = function () {
                return (function (t) {
                  var e = document.getElementById("privacyid");
                  e && (e.innerHTML = "privacy id : " + t);
                })(t);
              }),
              (window.Truendo.displayCookiePolicy = function () {
                return (function () {
                  var t = document.getElementById("cookiepolicy");
                  t &&
                    (t.innerHTML =
                      "cookie policy link: https://truendo.com/cookie");
                })(v.data.settings.cookie_policy_link);
              }),
              (window.Truendo.displayPrivacyPolicy = function () {
                return (function () {
                  var t = document.getElementById("privacypolicy");
                  t &&
                    (t.innerHTML =
                      "privacy policy link: https://truendo.com/privacy");
                })(v.data.settings.privacy_policy_link);
              }),
              (window.Truendo.toggleMarketingSocialContent2 = function (t) {
                return Vt({ social_content: t, marketing: !1 });
              }),
              (window.Truendo.runUnblockService = Rt),
              (window.Truendo.getCatsAndServices = T),
              (window.Truendo.privacyID = function () {
                var t;
                return null === (t = ue.getState().cookieObject) || void 0 === t
                  ? void 0
                  : t.user_id;
              }),
              (window.Truendo.cookiePolicy = function () {
                return v.data.settings.cookie_policy_link;
              }),
              (window.Truendo.privacyPolicy = function () {
                return v.data.settings.privacy_policy_link;
              }),
              console.log("window.Truendo.privacyID", window.Truendo.privacyID),
              console.log(
                "window.Truendo.cookiePolicy",
                window.Truendo.cookiePolicy
              ),
              console.log(
                "window.Truendo.privacyPolicy",
                window.Truendo.privacyPolicy
              ),
              L(),
              function () {
                window.TruendoOpenPanel = function () {};
              }
            );
          }, []);
          var P = v.cookiesActive,
            j = v.bannerConfig,
            N = v.data.auto_accept && v.data.auto_accept_notify;
          y && !h && f && l(),
            m(
              function () {
                y && u.openPanel();
              },
              [v, y]
            );
          var I = !!window.suppress_truendo && window.suppress_truendo,
            R = i && !I && !h && !y && P,
            D = R && (j.bnrType !== qt.CUSTOM || N);
          return (
            m(
              function () {
                D ||
                  (R
                    ? (function () {
                        var t = x();
                        t && (t.style.display = "block");
                      })()
                    : A());
              },
              [R, D]
            ),
            D && gt({ name: "banner_showing" }),
            m(function () {
              !(function () {
                switch (
                  new URLSearchParams(window.location.search).get(
                    "truendo_open"
                  )
                ) {
                  case "privacy_policy":
                    window.Truendo.openPrivacyPolicy();
                    break;
                  case "privacy_profile":
                    window.Truendo.openYourRights();
                    break;
                  case "cookie_settings":
                    window.Truendo.openCookieSettings();
                }
              })();
            }, []),
            null
          );
        };
        function Se(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
          return o;
        }
        const ke = function () {
          var t = (function (t, e) {
              return (
                (function (t) {
                  if (Array.isArray(t)) return t;
                })(t) ||
                (function (t, e) {
                  var n =
                    null == t
                      ? null
                      : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                  if (null != n) {
                    var o,
                      r,
                      i,
                      a,
                      c = [],
                      u = !0,
                      s = !1;
                    try {
                      if (((i = (n = n.call(t)).next), 0 === e)) {
                        if (Object(n) !== n) return;
                        u = !1;
                      } else
                        for (
                          ;
                          !(u = (o = i.call(n)).done) &&
                          (c.push(o.value), c.length !== e);
                          u = !0
                        );
                    } catch (t) {
                      (s = !0), (r = t);
                    } finally {
                      try {
                        if (
                          !u &&
                          null != n.return &&
                          ((a = n.return()), Object(a) !== a)
                        )
                          return;
                      } finally {
                        if (s) throw r;
                      }
                    }
                    return c;
                  }
                })(t, e) ||
                (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return Se(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      "Object" === n &&
                        t.constructor &&
                        (n = t.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(t)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? Se(t, e)
                        : void 0
                    );
                  }
                })(t, e) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            })(
              S(function (t) {
                console.groupCollapsed("TRUENDO PRIVACY CENTER ERROR"),
                  console.error(t),
                  console.groupEnd();
              }),
              1
            )[0],
            e = ue(function (t) {
              return null == t ? void 0 : t.config;
            });
          return !e || t ? null : (0, c.h)(Ee, null);
        };
        function Oe() {
          if ((ge(!1), void 0 === window.TruendoLoaded)) {
            window.TruendoLoaded = !0;
            var t = document.body.appendChild(document.createElement("div"));
            (0, c.render)((0, c.h)(ke), t), gt({ name: "tru_loaded" });
          }
        }
        n("./node_modules/focus-visible/dist/focus-visible.js"),
          (t = n.hmd(t)),
          "loading" === document.readyState
            ? document.addEventListener("DOMContentLoaded", Oe)
            : Oe(),
          n("./node_modules/preact/debug/dist/debug.module.js"),
          t.hot;
      },
      "./src/vendor/customEvent.js": () => {
        if ("function" != typeof window.CustomEvent) {
          var t = function (t, e) {
            ((e = e || {}).bubbles = !!e.bubbles),
              (e.cancelable = !!e.cancelable);
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
          };
          (t.prototype = window.Event.prototype), (window.CustomEvent = t);
        }
      },
      "./node_modules/cookie/index.js": (t, e) => {
        "use strict";
        (e.parse = function (t, e) {
          if ("string" != typeof t)
            throw new TypeError("argument str must be a string");
          for (
            var o = {}, r = e || {}, a = t.split(";"), c = r.decode || n, u = 0;
            u < a.length;
            u++
          ) {
            var s = a[u],
              l = s.indexOf("=");
            if (!(l < 0)) {
              var d = s.substring(0, l).trim();
              if (null == o[d]) {
                var f = s.substring(l + 1, s.length).trim();
                '"' === f[0] && (f = f.slice(1, -1)), (o[d] = i(f, c));
              }
            }
          }
          return o;
        }),
          (e.serialize = function (t, e, n) {
            var i = n || {},
              a = i.encode || o;
            if ("function" != typeof a)
              throw new TypeError("option encode is invalid");
            if (!r.test(t)) throw new TypeError("argument name is invalid");
            var c = a(e);
            if (c && !r.test(c)) throw new TypeError("argument val is invalid");
            var u = t + "=" + c;
            if (null != i.maxAge) {
              var s = i.maxAge - 0;
              if (isNaN(s) || !isFinite(s))
                throw new TypeError("option maxAge is invalid");
              u += "; Max-Age=" + Math.floor(s);
            }
            if (i.domain) {
              if (!r.test(i.domain))
                throw new TypeError("option domain is invalid");
              u += "; Domain=" + i.domain;
            }
            if (i.path) {
              if (!r.test(i.path))
                throw new TypeError("option path is invalid");
              u += "; Path=" + i.path;
            }
            if (i.expires) {
              if ("function" != typeof i.expires.toUTCString)
                throw new TypeError("option expires is invalid");
              u += "; Expires=" + i.expires.toUTCString();
            }
            if (
              (i.httpOnly && (u += "; HttpOnly"),
              i.secure && (u += "; Secure"),
              i.sameSite)
            )
              switch (
                "string" == typeof i.sameSite
                  ? i.sameSite.toLowerCase()
                  : i.sameSite
              ) {
                case !0:
                  u += "; SameSite=Strict";
                  break;
                case "lax":
                  u += "; SameSite=Lax";
                  break;
                case "strict":
                  u += "; SameSite=Strict";
                  break;
                case "none":
                  u += "; SameSite=None";
                  break;
                default:
                  throw new TypeError("option sameSite is invalid");
              }
            return u;
          });
        var n = decodeURIComponent,
          o = encodeURIComponent,
          r = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function i(t, e) {
          try {
            return e(t);
          } catch (e) {
            return t;
          }
        }
      },
      "./node_modules/focus-visible/dist/focus-visible.js": function () {
        !(function () {
          "use strict";
          function t(t) {
            var e = !0,
              n = !1,
              o = null,
              r = {
                text: !0,
                search: !0,
                url: !0,
                tel: !0,
                email: !0,
                password: !0,
                number: !0,
                date: !0,
                month: !0,
                week: !0,
                time: !0,
                datetime: !0,
                "datetime-local": !0,
              };
            function i(t) {
              return !!(
                t &&
                t !== document &&
                "HTML" !== t.nodeName &&
                "BODY" !== t.nodeName &&
                "classList" in t &&
                "contains" in t.classList
              );
            }
            function a(t) {
              t.classList.contains("focus-visible") ||
                (t.classList.add("focus-visible"),
                t.setAttribute("data-focus-visible-added", ""));
            }
            function c(t) {
              e = !1;
            }
            function u() {
              document.addEventListener("mousemove", s),
                document.addEventListener("mousedown", s),
                document.addEventListener("mouseup", s),
                document.addEventListener("pointermove", s),
                document.addEventListener("pointerdown", s),
                document.addEventListener("pointerup", s),
                document.addEventListener("touchmove", s),
                document.addEventListener("touchstart", s),
                document.addEventListener("touchend", s);
            }
            function s(t) {
              (t.target.nodeName &&
                "html" === t.target.nodeName.toLowerCase()) ||
                ((e = !1),
                document.removeEventListener("mousemove", s),
                document.removeEventListener("mousedown", s),
                document.removeEventListener("mouseup", s),
                document.removeEventListener("pointermove", s),
                document.removeEventListener("pointerdown", s),
                document.removeEventListener("pointerup", s),
                document.removeEventListener("touchmove", s),
                document.removeEventListener("touchstart", s),
                document.removeEventListener("touchend", s));
            }
            document.addEventListener(
              "keydown",
              function (n) {
                n.metaKey ||
                  n.altKey ||
                  n.ctrlKey ||
                  (i(t.activeElement) && a(t.activeElement), (e = !0));
              },
              !0
            ),
              document.addEventListener("mousedown", c, !0),
              document.addEventListener("pointerdown", c, !0),
              document.addEventListener("touchstart", c, !0),
              document.addEventListener(
                "visibilitychange",
                function (t) {
                  "hidden" === document.visibilityState && (n && (e = !0), u());
                },
                !0
              ),
              u(),
              t.addEventListener(
                "focus",
                function (t) {
                  var n, o, c;
                  i(t.target) &&
                    (e ||
                      ((n = t.target),
                      (o = n.type),
                      ("INPUT" === (c = n.tagName) && r[o] && !n.readOnly) ||
                        ("TEXTAREA" === c && !n.readOnly) ||
                        n.isContentEditable)) &&
                    a(t.target);
                },
                !0
              ),
              t.addEventListener(
                "blur",
                function (t) {
                  var e;
                  i(t.target) &&
                    (t.target.classList.contains("focus-visible") ||
                      t.target.hasAttribute("data-focus-visible-added")) &&
                    ((n = !0),
                    window.clearTimeout(o),
                    (o = window.setTimeout(function () {
                      n = !1;
                    }, 100)),
                    (e = t.target).hasAttribute("data-focus-visible-added") &&
                      (e.classList.remove("focus-visible"),
                      e.removeAttribute("data-focus-visible-added")));
                },
                !0
              ),
              t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && t.host
                ? t.host.setAttribute("data-js-focus-visible", "")
                : t.nodeType === Node.DOCUMENT_NODE &&
                  (document.documentElement.classList.add("js-focus-visible"),
                  document.documentElement.setAttribute(
                    "data-js-focus-visible",
                    ""
                  ));
          }
          if ("undefined" != typeof window && "undefined" != typeof document) {
            var e;
            window.applyFocusVisiblePolyfill = t;
            try {
              e = new CustomEvent("focus-visible-polyfill-ready");
            } catch (t) {
              (e = document.createEvent("CustomEvent")).initCustomEvent(
                "focus-visible-polyfill-ready",
                !1,
                !1,
                {}
              );
            }
            window.dispatchEvent(e);
          }
          "undefined" != typeof document && t(document);
        })();
      },
      "./node_modules/preact/debug/dist/debug.module.js": (t, e, n) => {
        "use strict";
        n.r(e), n.d(e, { resetPropWarnings: () => c });
        var o = n("./node_modules/preact/dist/preact.module.js");
        function r(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
          return o;
        }
        function i(t, e) {
          var n =
            ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (n) return (n = n.call(t)).next.bind(n);
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (t) {
                if ("string" == typeof t) return r(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? r(t, e)
                    : void 0
                );
              }
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var o = 0;
            return function () {
              return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        "undefined" != typeof window &&
          window.__PREACT_DEVTOOLS__ &&
          window.__PREACT_DEVTOOLS__.attachPreact("10.15.1", o.options, {
            Fragment: o.Fragment,
            Component: o.Component,
          });
        var a = {};
        function c() {
          a = {};
        }
        function u(t) {
          return t.type === o.Fragment
            ? "Fragment"
            : "function" == typeof t.type
            ? t.type.displayName || t.type.name
            : "string" == typeof t.type
            ? t.type
            : "#text";
        }
        var s = [],
          l = [];
        function d() {
          return s.length > 0 ? s[s.length - 1] : null;
        }
        var f = !1;
        function p(t) {
          return "function" == typeof t.type && t.type != o.Fragment;
        }
        function _(t) {
          for (var e = [t], n = t; null != n.__o; ) e.push(n.__o), (n = n.__o);
          return e.reduce(function (t, e) {
            t += "  in " + u(e);
            var n = e.__source;
            return (
              n
                ? (t += " (at " + n.fileName + ":" + n.lineNumber + ")")
                : f ||
                  ((f = !0),
                  console.warn(
                    "Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons."
                  )),
              t + "\n"
            );
          }, "");
        }
        var v = "function" == typeof WeakMap;
        function h(t) {
          return t ? ("function" == typeof t.type ? h(t.__) : t) : {};
        }
        var g = o.Component.prototype.setState;
        o.Component.prototype.setState = function (t, e) {
          return (
            null == this.__v &&
              null == this.state &&
              console.warn(
                'Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' +
                  _(d())
              ),
            g.call(this, t, e)
          );
        };
        var y = o.Component.prototype.forceUpdate;
        function m(t) {
          var e = t.props,
            n = u(t),
            o = "";
          for (var r in e)
            if (e.hasOwnProperty(r) && "children" !== r) {
              var i = e[r];
              "function" == typeof i &&
                (i = "function " + (i.displayName || i.name) + "() {}"),
                (i =
                  Object(i) !== i || i.toString
                    ? i + ""
                    : Object.prototype.toString.call(i)),
                (o += " " + r + "=" + JSON.stringify(i));
            }
          var a = e.children;
          return "<" + n + o + (a && a.length ? ">..</" + n + ">" : " />");
        }
        (o.Component.prototype.forceUpdate = function (t) {
          return (
            null == this.__v
              ? console.warn(
                  'Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' +
                    _(d())
                )
              : null == this.__P &&
                console.warn(
                  'Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' +
                    _(this.__v)
                ),
            y.call(this, t)
          );
        }),
          (function () {
            !(function () {
              var t = o.options.__b,
                e = o.options.diffed,
                n = o.options.__,
                r = o.options.vnode,
                i = o.options.__r;
              (o.options.diffed = function (t) {
                p(t) && l.pop(), s.pop(), e && e(t);
              }),
                (o.options.__b = function (e) {
                  p(e) && s.push(e), t && t(e);
                }),
                (o.options.__ = function (t, e) {
                  (l = []), n && n(t, e);
                }),
                (o.options.vnode = function (t) {
                  (t.__o = l.length > 0 ? l[l.length - 1] : null), r && r(t);
                }),
                (o.options.__r = function (t) {
                  p(t) && l.push(t), i && i(t);
                });
            })();
            var t = !1,
              e = o.options.__b,
              n = o.options.diffed,
              r = o.options.vnode,
              c = o.options.__r,
              d = o.options.__e,
              f = o.options.__,
              g = o.options.__h,
              y = v
                ? {
                    useEffect: new WeakMap(),
                    useLayoutEffect: new WeakMap(),
                    lazyPropTypes: new WeakMap(),
                  }
                : null,
              b = [];
            (o.options.__e = function (t, e, n, o) {
              if (e && e.__c && "function" == typeof t.then) {
                var r = t;
                t = new Error(
                  "Missing Suspense. The throwing component was: " + u(e)
                );
                for (var i = e; i; i = i.__)
                  if (i.__c && i.__c.__c) {
                    t = r;
                    break;
                  }
                if (t instanceof Error) throw t;
              }
              try {
                ((o = o || {}).componentStack = _(e)),
                  d(t, e, n, o),
                  "function" != typeof t.then &&
                    setTimeout(function () {
                      throw t;
                    });
              } catch (t) {
                throw t;
              }
            }),
              (o.options.__ = function (t, e) {
                if (!e)
                  throw new Error(
                    "Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id."
                  );
                var n;
                switch (e.nodeType) {
                  case 1:
                  case 11:
                  case 9:
                    n = !0;
                    break;
                  default:
                    n = !1;
                }
                if (!n) {
                  var o = u(t);
                  throw new Error(
                    "Expected a valid HTML node as a second argument to render.\tReceived " +
                      e +
                      " instead: render(<" +
                      o +
                      " />, " +
                      e +
                      ");"
                  );
                }
                f && f(t, e);
              }),
              (o.options.__b = function (n) {
                var o = n.type,
                  r = h(n.__);
                if (((t = !0), void 0 === o))
                  throw new Error(
                    "Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" +
                      m(n) +
                      "\n\n" +
                      _(n)
                  );
                if (null != o && "object" == typeof o) {
                  if (void 0 !== o.__k && void 0 !== o.__e)
                    throw new Error(
                      "Invalid type passed to createElement(): " +
                        o +
                        "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" +
                        u(n) +
                        " = " +
                        m(o) +
                        ";\n  let vnode = <My" +
                        u(n) +
                        " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" +
                        _(n)
                    );
                  throw new Error(
                    "Invalid type passed to createElement(): " +
                      (Array.isArray(o) ? "array" : o)
                  );
                }
                if (
                  (("thead" !== o && "tfoot" !== o && "tbody" !== o) ||
                  "table" === r.type
                    ? "tr" === o &&
                      "thead" !== r.type &&
                      "tfoot" !== r.type &&
                      "tbody" !== r.type &&
                      "table" !== r.type
                      ? console.error(
                          "Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." +
                            m(n) +
                            "\n\n" +
                            _(n)
                        )
                      : "td" === o && "tr" !== r.type
                      ? console.error(
                          "Improper nesting of table. Your <td> should have a <tr> parent." +
                            m(n) +
                            "\n\n" +
                            _(n)
                        )
                      : "th" === o &&
                        "tr" !== r.type &&
                        console.error(
                          "Improper nesting of table. Your <th> should have a <tr>." +
                            m(n) +
                            "\n\n" +
                            _(n)
                        )
                    : console.error(
                        "Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." +
                          m(n) +
                          "\n\n" +
                          _(n)
                      ),
                  void 0 !== n.ref &&
                    "function" != typeof n.ref &&
                    "object" != typeof n.ref &&
                    !("$$typeof" in n))
                )
                  throw new Error(
                    'Component\'s "ref" property should be a function, or an object created by createRef(), but got [' +
                      typeof n.ref +
                      "] instead\n" +
                      m(n) +
                      "\n\n" +
                      _(n)
                  );
                if ("string" == typeof n.type)
                  for (var i in n.props)
                    if (
                      "o" === i[0] &&
                      "n" === i[1] &&
                      "function" != typeof n.props[i] &&
                      null != n.props[i]
                    )
                      throw new Error(
                        "Component's \"" +
                          i +
                          '" property should be a function, but got [' +
                          typeof n.props[i] +
                          "] instead\n" +
                          m(n) +
                          "\n\n" +
                          _(n)
                      );
                if ("function" == typeof n.type && n.type.propTypes) {
                  if (
                    "Lazy" === n.type.displayName &&
                    y &&
                    !y.lazyPropTypes.has(n.type)
                  ) {
                    var c =
                      "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
                    try {
                      var s = n.type();
                      y.lazyPropTypes.set(n.type, !0),
                        console.warn(
                          c + "Component wrapped in lazy() is " + u(s)
                        );
                    } catch (t) {
                      console.warn(
                        c +
                          "We will log the wrapped component's name once it is loaded."
                      );
                    }
                  }
                  var l = n.props;
                  n.type.__f &&
                    delete (l = (function (t, e) {
                      for (var n in e) t[n] = e[n];
                      return t;
                    })({}, l)).ref,
                    (function (t, e, n, o, r) {
                      Object.keys(t).forEach(function (n) {
                        var i;
                        try {
                          i = t[n](
                            e,
                            n,
                            o,
                            "prop",
                            null,
                            "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                          );
                        } catch (t) {
                          i = t;
                        }
                        i &&
                          !(i.message in a) &&
                          ((a[i.message] = !0),
                          console.error(
                            "Failed prop type: " +
                              i.message +
                              ((r && "\n" + r()) || "")
                          ));
                      });
                    })(n.type.propTypes, l, 0, u(n), function () {
                      return _(n);
                    });
                }
                e && e(n);
              }),
              (o.options.__r = function (e) {
                c && c(e), (t = !0);
              }),
              (o.options.__h = function (e, n, o) {
                if (!e || !t)
                  throw new Error(
                    "Hook can only be invoked from render methods."
                  );
                g && g(e, n, o);
              });
            var w = function (t, e) {
                return {
                  get: function () {
                    var n = "get" + t + e;
                    b &&
                      b.indexOf(n) < 0 &&
                      (b.push(n),
                      console.warn(
                        "getting vnode." + t + " is deprecated, " + e
                      ));
                  },
                  set: function () {
                    var n = "set" + t + e;
                    b &&
                      b.indexOf(n) < 0 &&
                      (b.push(n),
                      console.warn(
                        "setting vnode." + t + " is not allowed, " + e
                      ));
                  },
                };
              },
              E = {
                nodeName: w("nodeName", "use vnode.type"),
                attributes: w("attributes", "use vnode.props"),
                children: w("children", "use vnode.props.children"),
              },
              S = Object.create({}, E);
            (o.options.vnode = function (t) {
              var e = t.props;
              if (
                null !== t.type &&
                null != e &&
                ("__source" in e || "__self" in e)
              ) {
                var n = (t.props = {});
                for (var o in e) {
                  var i = e[o];
                  "__source" === o
                    ? (t.__source = i)
                    : "__self" === o
                    ? (t.__self = i)
                    : (n[o] = i);
                }
              }
              (t.__proto__ = S), r && r(t);
            }),
              (o.options.diffed = function (e) {
                if (
                  (e.__k &&
                    e.__k.forEach(function (t) {
                      if ("object" == typeof t && t && void 0 === t.type) {
                        var n = Object.keys(t).join(",");
                        throw new Error(
                          "Objects are not valid as a child. Encountered an object with the keys {" +
                            n +
                            "}.\n\n" +
                            _(e)
                        );
                      }
                    }),
                  (t = !1),
                  n && n(e),
                  null != e.__k)
                )
                  for (var o = [], r = 0; r < e.__k.length; r++) {
                    var a = e.__k[r];
                    if (a && null != a.key) {
                      var c = a.key;
                      if (-1 !== o.indexOf(c)) {
                        console.error(
                          'Following component has two or more children with the same key attribute: "' +
                            c +
                            '". This may cause glitches and misbehavior in rendering process. Component: \n\n' +
                            m(e) +
                            "\n\n" +
                            _(e)
                        );
                        break;
                      }
                      o.push(c);
                    }
                  }
                if (null != e.__c && null != e.__c.__H) {
                  var s = e.__c.__H.__;
                  if (s)
                    for (var l = 0; l < s.length; l += 1) {
                      var d = s[l];
                      if (d.__H)
                        for (var f, p = i(d.__H); !(f = p()).done; )
                          if ((h = f.value) != h) {
                            var v = u(e);
                            throw new Error(
                              "Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index " +
                                l +
                                " in component " +
                                v +
                                " was called with NaN."
                            );
                          }
                    }
                }
                var h;
              });
          })();
      },
      "./node_modules/preact/dist/preact.module.js": (t, e, n) => {
        "use strict";
        n.r(e),
          n.d(e, {
            Component: () => E,
            Fragment: () => w,
            cloneElement: () => Y,
            createContext: () => W,
            createElement: () => y,
            createRef: () => b,
            h: () => y,
            hydrate: () => V,
            isValidElement: () => a,
            options: () => r,
            render: () => G,
            toChildArray: () => A,
          });
        var o,
          r,
          i,
          a,
          c,
          u,
          s,
          l,
          d,
          f = {},
          p = [],
          _ =
            /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
          v = Array.isArray;
        function h(t, e) {
          for (var n in e) t[n] = e[n];
          return t;
        }
        function g(t) {
          var e = t.parentNode;
          e && e.removeChild(t);
        }
        function y(t, e, n) {
          var r,
            i,
            a,
            c = {};
          for (a in e)
            "key" == a ? (r = e[a]) : "ref" == a ? (i = e[a]) : (c[a] = e[a]);
          if (
            (arguments.length > 2 &&
              (c.children = arguments.length > 3 ? o.call(arguments, 2) : n),
            "function" == typeof t && null != t.defaultProps)
          )
            for (a in t.defaultProps)
              void 0 === c[a] && (c[a] = t.defaultProps[a]);
          return m(t, c, r, i, null);
        }
        function m(t, e, n, o, a) {
          var c = {
            type: t,
            props: e,
            key: n,
            ref: o,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == a ? ++i : a,
          };
          return null == a && null != r.vnode && r.vnode(c), c;
        }
        function b() {
          return { current: null };
        }
        function w(t) {
          return t.children;
        }
        function E(t, e) {
          (this.props = t), (this.context = e);
        }
        function S(t, e) {
          if (null == e) return t.__ ? S(t.__, t.__.__k.indexOf(t) + 1) : null;
          for (var n; e < t.__k.length; e++)
            if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
          return "function" == typeof t.type ? S(t) : null;
        }
        function k(t) {
          var e, n;
          if (null != (t = t.__) && null != t.__c) {
            for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
              if (null != (n = t.__k[e]) && null != n.__e) {
                t.__e = t.__c.base = n.__e;
                break;
              }
            return k(t);
          }
        }
        function O(t) {
          ((!t.__d && (t.__d = !0) && c.push(t) && !T.__r++) ||
            u !== r.debounceRendering) &&
            ((u = r.debounceRendering) || s)(T);
        }
        function T() {
          var t, e, n, o, r, i, a, u;
          for (c.sort(l); (t = c.shift()); )
            t.__d &&
              ((e = c.length),
              (o = void 0),
              (r = void 0),
              (a = (i = (n = t).__v).__e),
              (u = n.__P) &&
                ((o = []),
                ((r = h({}, i)).__v = i.__v + 1),
                D(
                  u,
                  i,
                  r,
                  n.__n,
                  void 0 !== u.ownerSVGElement,
                  null != i.__h ? [a] : null,
                  o,
                  null == a ? S(i) : a,
                  i.__h
                ),
                M(o, i),
                i.__e != a && k(i)),
              c.length > e && c.sort(l));
          T.__r = 0;
        }
        function C(t, e, n, o, r, i, a, c, u, s) {
          var l,
            d,
            _,
            h,
            g,
            y,
            b,
            E = (o && o.__k) || p,
            k = E.length;
          for (n.__k = [], l = 0; l < e.length; l++)
            if (
              null !=
              (h = n.__k[l] =
                null == (h = e[l]) ||
                "boolean" == typeof h ||
                "function" == typeof h
                  ? null
                  : "string" == typeof h ||
                    "number" == typeof h ||
                    "bigint" == typeof h
                  ? m(null, h, null, null, h)
                  : v(h)
                  ? m(w, { children: h }, null, null, null)
                  : h.__b > 0
                  ? m(h.type, h.props, h.key, h.ref ? h.ref : null, h.__v)
                  : h)
            ) {
              if (
                ((h.__ = n),
                (h.__b = n.__b + 1),
                null === (_ = E[l]) ||
                  (_ && h.key == _.key && h.type === _.type))
              )
                E[l] = void 0;
              else
                for (d = 0; d < k; d++) {
                  if ((_ = E[d]) && h.key == _.key && h.type === _.type) {
                    E[d] = void 0;
                    break;
                  }
                  _ = null;
                }
              D(t, h, (_ = _ || f), r, i, a, c, u, s),
                (g = h.__e),
                (d = h.ref) &&
                  _.ref != d &&
                  (b || (b = []),
                  _.ref && b.push(_.ref, null, h),
                  b.push(d, h.__c || g, h)),
                null != g
                  ? (null == y && (y = g),
                    "function" == typeof h.type && h.__k === _.__k
                      ? (h.__d = u = x(h, u, t))
                      : (u = L(t, h, _, E, g, u)),
                    "function" == typeof n.type && (n.__d = u))
                  : u && _.__e == u && u.parentNode != t && (u = S(_));
            }
          for (n.__e = y, l = k; l--; )
            null != E[l] &&
              ("function" == typeof n.type &&
                null != E[l].__e &&
                E[l].__e == n.__d &&
                (n.__d = P(o).nextSibling),
              B(E[l], E[l]));
          if (b) for (l = 0; l < b.length; l++) H(b[l], b[++l], b[++l]);
        }
        function x(t, e, n) {
          for (var o, r = t.__k, i = 0; r && i < r.length; i++)
            (o = r[i]) &&
              ((o.__ = t),
              (e =
                "function" == typeof o.type
                  ? x(o, e, n)
                  : L(n, o, o, r, o.__e, e)));
          return e;
        }
        function A(t, e) {
          return (
            (e = e || []),
            null == t ||
              "boolean" == typeof t ||
              (v(t)
                ? t.some(function (t) {
                    A(t, e);
                  })
                : e.push(t)),
            e
          );
        }
        function L(t, e, n, o, r, i) {
          var a, c, u;
          if (void 0 !== e.__d) (a = e.__d), (e.__d = void 0);
          else if (null == n || r != i || null == r.parentNode)
            t: if (null == i || i.parentNode !== t)
              t.appendChild(r), (a = null);
            else {
              for (c = i, u = 0; (c = c.nextSibling) && u < o.length; u += 1)
                if (c == r) break t;
              t.insertBefore(r, i), (a = i);
            }
          return void 0 !== a ? a : r.nextSibling;
        }
        function P(t) {
          var e, n, o;
          if (null == t.type || "string" == typeof t.type) return t.__e;
          if (t.__k)
            for (e = t.__k.length - 1; e >= 0; e--)
              if ((n = t.__k[e]) && (o = P(n))) return o;
          return null;
        }
        function j(t, e, n) {
          "-" === e[0]
            ? t.setProperty(e, null == n ? "" : n)
            : (t[e] =
                null == n
                  ? ""
                  : "number" != typeof n || _.test(e)
                  ? n
                  : n + "px");
        }
        function N(t, e, n, o, r) {
          var i;
          t: if ("style" === e)
            if ("string" == typeof n) t.style.cssText = n;
            else {
              if (("string" == typeof o && (t.style.cssText = o = ""), o))
                for (e in o) (n && e in n) || j(t.style, e, "");
              if (n) for (e in n) (o && n[e] === o[e]) || j(t.style, e, n[e]);
            }
          else if ("o" === e[0] && "n" === e[1])
            (i = e !== (e = e.replace(/Capture$/, ""))),
              (e =
                e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
              t.l || (t.l = {}),
              (t.l[e + i] = n),
              n
                ? o || t.addEventListener(e, i ? R : I, i)
                : t.removeEventListener(e, i ? R : I, i);
          else if ("dangerouslySetInnerHTML" !== e) {
            if (r) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (
              "width" !== e &&
              "height" !== e &&
              "href" !== e &&
              "list" !== e &&
              "form" !== e &&
              "tabIndex" !== e &&
              "download" !== e &&
              "rowSpan" !== e &&
              "colSpan" !== e &&
              e in t
            )
              try {
                t[e] = null == n ? "" : n;
                break t;
              } catch (t) {}
            "function" == typeof n ||
              (null == n || (!1 === n && "-" !== e[4])
                ? t.removeAttribute(e)
                : t.setAttribute(e, n));
          }
        }
        function I(t) {
          return this.l[t.type + !1](r.event ? r.event(t) : t);
        }
        function R(t) {
          return this.l[t.type + !0](r.event ? r.event(t) : t);
        }
        function D(t, e, n, o, i, a, c, u, s) {
          var l,
            d,
            f,
            p,
            _,
            g,
            y,
            m,
            b,
            S,
            k,
            O,
            T,
            x,
            A,
            L = e.type;
          if (void 0 !== e.constructor) return null;
          null != n.__h &&
            ((s = n.__h), (u = e.__e = n.__e), (e.__h = null), (a = [u])),
            (l = r.__b) && l(e);
          try {
            t: if ("function" == typeof L) {
              if (
                ((m = e.props),
                (b = (l = L.contextType) && o[l.__c]),
                (S = l ? (b ? b.props.value : l.__) : o),
                n.__c
                  ? (y = (d = e.__c = n.__c).__ = d.__E)
                  : ("prototype" in L && L.prototype.render
                      ? (e.__c = d = new L(m, S))
                      : ((e.__c = d = new E(m, S)),
                        (d.constructor = L),
                        (d.render = F)),
                    b && b.sub(d),
                    (d.props = m),
                    d.state || (d.state = {}),
                    (d.context = S),
                    (d.__n = o),
                    (f = d.__d = !0),
                    (d.__h = []),
                    (d._sb = [])),
                null == d.__s && (d.__s = d.state),
                null != L.getDerivedStateFromProps &&
                  (d.__s == d.state && (d.__s = h({}, d.__s)),
                  h(d.__s, L.getDerivedStateFromProps(m, d.__s))),
                (p = d.props),
                (_ = d.state),
                (d.__v = e),
                f)
              )
                null == L.getDerivedStateFromProps &&
                  null != d.componentWillMount &&
                  d.componentWillMount(),
                  null != d.componentDidMount &&
                    d.__h.push(d.componentDidMount);
              else {
                if (
                  (null == L.getDerivedStateFromProps &&
                    m !== p &&
                    null != d.componentWillReceiveProps &&
                    d.componentWillReceiveProps(m, S),
                  (!d.__e &&
                    null != d.shouldComponentUpdate &&
                    !1 === d.shouldComponentUpdate(m, d.__s, S)) ||
                    e.__v === n.__v)
                ) {
                  for (
                    e.__v !== n.__v &&
                      ((d.props = m), (d.state = d.__s), (d.__d = !1)),
                      d.__e = !1,
                      e.__e = n.__e,
                      e.__k = n.__k,
                      e.__k.forEach(function (t) {
                        t && (t.__ = e);
                      }),
                      k = 0;
                    k < d._sb.length;
                    k++
                  )
                    d.__h.push(d._sb[k]);
                  (d._sb = []), d.__h.length && c.push(d);
                  break t;
                }
                null != d.componentWillUpdate &&
                  d.componentWillUpdate(m, d.__s, S),
                  null != d.componentDidUpdate &&
                    d.__h.push(function () {
                      d.componentDidUpdate(p, _, g);
                    });
              }
              if (
                ((d.context = S),
                (d.props = m),
                (d.__P = t),
                (O = r.__r),
                (T = 0),
                "prototype" in L && L.prototype.render)
              ) {
                for (
                  d.state = d.__s,
                    d.__d = !1,
                    O && O(e),
                    l = d.render(d.props, d.state, d.context),
                    x = 0;
                  x < d._sb.length;
                  x++
                )
                  d.__h.push(d._sb[x]);
                d._sb = [];
              } else
                do {
                  (d.__d = !1),
                    O && O(e),
                    (l = d.render(d.props, d.state, d.context)),
                    (d.state = d.__s);
                } while (d.__d && ++T < 25);
              (d.state = d.__s),
                null != d.getChildContext &&
                  (o = h(h({}, o), d.getChildContext())),
                f ||
                  null == d.getSnapshotBeforeUpdate ||
                  (g = d.getSnapshotBeforeUpdate(p, _)),
                C(
                  t,
                  v(
                    (A =
                      null != l && l.type === w && null == l.key
                        ? l.props.children
                        : l)
                  )
                    ? A
                    : [A],
                  e,
                  n,
                  o,
                  i,
                  a,
                  c,
                  u,
                  s
                ),
                (d.base = e.__e),
                (e.__h = null),
                d.__h.length && c.push(d),
                y && (d.__E = d.__ = null),
                (d.__e = !1);
            } else
              null == a && e.__v === n.__v
                ? ((e.__k = n.__k), (e.__e = n.__e))
                : (e.__e = U(n.__e, e, n, o, i, a, c, s));
            (l = r.diffed) && l(e);
          } catch (t) {
            (e.__v = null),
              (s || null != a) &&
                ((e.__e = u), (e.__h = !!s), (a[a.indexOf(u)] = null)),
              r.__e(t, e, n);
          }
        }
        function M(t, e) {
          r.__c && r.__c(e, t),
            t.some(function (e) {
              try {
                (t = e.__h),
                  (e.__h = []),
                  t.some(function (t) {
                    t.call(e);
                  });
              } catch (t) {
                r.__e(t, e.__v);
              }
            });
        }
        function U(t, e, n, r, i, a, c, u) {
          var s,
            l,
            d,
            p = n.props,
            _ = e.props,
            h = e.type,
            y = 0;
          if (("svg" === h && (i = !0), null != a))
            for (; y < a.length; y++)
              if (
                (s = a[y]) &&
                "setAttribute" in s == !!h &&
                (h ? s.localName === h : 3 === s.nodeType)
              ) {
                (t = s), (a[y] = null);
                break;
              }
          if (null == t) {
            if (null === h) return document.createTextNode(_);
            (t = i
              ? document.createElementNS("http://www.w3.org/2000/svg", h)
              : document.createElement(h, _.is && _)),
              (a = null),
              (u = !1);
          }
          if (null === h) p === _ || (u && t.data === _) || (t.data = _);
          else {
            if (
              ((a = a && o.call(t.childNodes)),
              (l = (p = n.props || f).dangerouslySetInnerHTML),
              (d = _.dangerouslySetInnerHTML),
              !u)
            ) {
              if (null != a)
                for (p = {}, y = 0; y < t.attributes.length; y++)
                  p[t.attributes[y].name] = t.attributes[y].value;
              (d || l) &&
                ((d &&
                  ((l && d.__html == l.__html) || d.__html === t.innerHTML)) ||
                  (t.innerHTML = (d && d.__html) || ""));
            }
            if (
              ((function (t, e, n, o, r) {
                var i;
                for (i in n)
                  "children" === i ||
                    "key" === i ||
                    i in e ||
                    N(t, i, null, n[i], o);
                for (i in e)
                  (r && "function" != typeof e[i]) ||
                    "children" === i ||
                    "key" === i ||
                    "value" === i ||
                    "checked" === i ||
                    n[i] === e[i] ||
                    N(t, i, e[i], n[i], o);
              })(t, _, p, i, u),
              d)
            )
              e.__k = [];
            else if (
              (C(
                t,
                v((y = e.props.children)) ? y : [y],
                e,
                n,
                r,
                i && "foreignObject" !== h,
                a,
                c,
                a ? a[0] : n.__k && S(n, 0),
                u
              ),
              null != a)
            )
              for (y = a.length; y--; ) null != a[y] && g(a[y]);
            u ||
              ("value" in _ &&
                void 0 !== (y = _.value) &&
                (y !== t.value ||
                  ("progress" === h && !y) ||
                  ("option" === h && y !== p.value)) &&
                N(t, "value", y, p.value, !1),
              "checked" in _ &&
                void 0 !== (y = _.checked) &&
                y !== t.checked &&
                N(t, "checked", y, p.checked, !1));
          }
          return t;
        }
        function H(t, e, n) {
          try {
            "function" == typeof t ? t(e) : (t.current = e);
          } catch (t) {
            r.__e(t, n);
          }
        }
        function B(t, e, n) {
          var o, i;
          if (
            (r.unmount && r.unmount(t),
            (o = t.ref) &&
              ((o.current && o.current !== t.__e) || H(o, null, e)),
            null != (o = t.__c))
          ) {
            if (o.componentWillUnmount)
              try {
                o.componentWillUnmount();
              } catch (t) {
                r.__e(t, e);
              }
            (o.base = o.__P = null), (t.__c = void 0);
          }
          if ((o = t.__k))
            for (i = 0; i < o.length; i++)
              o[i] && B(o[i], e, n || "function" != typeof t.type);
          n || null == t.__e || g(t.__e), (t.__ = t.__e = t.__d = void 0);
        }
        function F(t, e, n) {
          return this.constructor(t, n);
        }
        function G(t, e, n) {
          var i, a, c;
          r.__ && r.__(t, e),
            (a = (i = "function" == typeof n) ? null : (n && n.__k) || e.__k),
            (c = []),
            D(
              e,
              (t = ((!i && n) || e).__k = y(w, null, [t])),
              a || f,
              f,
              void 0 !== e.ownerSVGElement,
              !i && n
                ? [n]
                : a
                ? null
                : e.firstChild
                ? o.call(e.childNodes)
                : null,
              c,
              !i && n ? n : a ? a.__e : e.firstChild,
              i
            ),
            M(c, t);
        }
        function V(t, e) {
          G(t, e, V);
        }
        function Y(t, e, n) {
          var r,
            i,
            a,
            c,
            u = h({}, t.props);
          for (a in (t.type && t.type.defaultProps && (c = t.type.defaultProps),
          e))
            "key" == a
              ? (r = e[a])
              : "ref" == a
              ? (i = e[a])
              : (u[a] = void 0 === e[a] && void 0 !== c ? c[a] : e[a]);
          return (
            arguments.length > 2 &&
              (u.children = arguments.length > 3 ? o.call(arguments, 2) : n),
            m(t.type, u, r || t.key, i || t.ref, null)
          );
        }
        function W(t, e) {
          var n = {
            __c: (e = "__cC" + d++),
            __: t,
            Consumer: function (t, e) {
              return t.children(e);
            },
            Provider: function (t) {
              var n, o;
              return (
                this.getChildContext ||
                  ((n = []),
                  ((o = {})[e] = this),
                  (this.getChildContext = function () {
                    return o;
                  }),
                  (this.shouldComponentUpdate = function (t) {
                    this.props.value !== t.value &&
                      n.some(function (t) {
                        (t.__e = !0), O(t);
                      });
                  }),
                  (this.sub = function (t) {
                    n.push(t);
                    var e = t.componentWillUnmount;
                    t.componentWillUnmount = function () {
                      n.splice(n.indexOf(t), 1), e && e.call(t);
                    };
                  })),
                t.children
              );
            },
          };
          return (n.Provider.__ = n.Consumer.contextType = n);
        }
        (o = p.slice),
          (r = {
            __e: function (t, e, n, o) {
              for (var r, i, a; (e = e.__); )
                if ((r = e.__c) && !r.__)
                  try {
                    if (
                      ((i = r.constructor) &&
                        null != i.getDerivedStateFromError &&
                        (r.setState(i.getDerivedStateFromError(t)),
                        (a = r.__d)),
                      null != r.componentDidCatch &&
                        (r.componentDidCatch(t, o || {}), (a = r.__d)),
                      a)
                    )
                      return (r.__E = r);
                  } catch (e) {
                    t = e;
                  }
              throw t;
            },
          }),
          (i = 0),
          (a = function (t) {
            return null != t && void 0 === t.constructor;
          }),
          (E.prototype.setState = function (t, e) {
            var n;
            (n =
              null != this.__s && this.__s !== this.state
                ? this.__s
                : (this.__s = h({}, this.state))),
              "function" == typeof t && (t = t(h({}, n), this.props)),
              t && h(n, t),
              null != t && this.__v && (e && this._sb.push(e), O(this));
          }),
          (E.prototype.forceUpdate = function (t) {
            this.__v && ((this.__e = !0), t && this.__h.push(t), O(this));
          }),
          (E.prototype.render = w),
          (c = []),
          (s =
            "function" == typeof Promise
              ? Promise.prototype.then.bind(Promise.resolve())
              : setTimeout),
          (l = function (t, e) {
            return t.__v.__b - e.__v.__b;
          }),
          (T.__r = 0),
          (d = 0);
      },
      "./node_modules/regenerator-runtime/runtime.js": (t) => {
        var e = (function (t) {
          "use strict";
          var e,
            n = Object.prototype,
            o = n.hasOwnProperty,
            r =
              Object.defineProperty ||
              function (t, e, n) {
                t[e] = n.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            c = i.asyncIterator || "@@asyncIterator",
            u = i.toStringTag || "@@toStringTag";
          function s(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            s({}, "");
          } catch (t) {
            s = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function l(t, e, n, o) {
            var i = e && e.prototype instanceof g ? e : g,
              a = Object.create(i.prototype),
              c = new L(o || []);
            return r(a, "_invoke", { value: T(t, n, c) }), a;
          }
          function d(t, e, n) {
            try {
              return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          t.wrap = l;
          var f = "suspendedStart",
            p = "suspendedYield",
            _ = "executing",
            v = "completed",
            h = {};
          function g() {}
          function y() {}
          function m() {}
          var b = {};
          s(b, a, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            E = w && w(w(P([])));
          E && E !== n && o.call(E, a) && (b = E);
          var S = (m.prototype = g.prototype = Object.create(b));
          function k(t) {
            ["next", "throw", "return"].forEach(function (e) {
              s(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function O(t, e) {
            function n(r, i, a, c) {
              var u = d(t[r], t, i);
              if ("throw" !== u.type) {
                var s = u.arg,
                  l = s.value;
                return l && "object" == typeof l && o.call(l, "__await")
                  ? e.resolve(l.__await).then(
                      function (t) {
                        n("next", t, a, c);
                      },
                      function (t) {
                        n("throw", t, a, c);
                      }
                    )
                  : e.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return n("throw", t, a, c);
                      }
                    );
              }
              c(u.arg);
            }
            var i;
            r(this, "_invoke", {
              value: function (t, o) {
                function r() {
                  return new e(function (e, r) {
                    n(t, o, e, r);
                  });
                }
                return (i = i ? i.then(r, r) : r());
              },
            });
          }
          function T(t, e, n) {
            var o = f;
            return function (r, i) {
              if (o === _) throw new Error("Generator is already running");
              if (o === v) {
                if ("throw" === r) throw i;
                return j();
              }
              for (n.method = r, n.arg = i; ; ) {
                var a = n.delegate;
                if (a) {
                  var c = C(a, n);
                  if (c) {
                    if (c === h) continue;
                    return c;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (o === f) throw ((o = v), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = _;
                var u = d(t, e, n);
                if ("normal" === u.type) {
                  if (((o = n.done ? v : p), u.arg === h)) continue;
                  return { value: u.arg, done: n.done };
                }
                "throw" === u.type &&
                  ((o = v), (n.method = "throw"), (n.arg = u.arg));
              }
            };
          }
          function C(t, n) {
            var o = n.method,
              r = t.iterator[o];
            if (r === e)
              return (
                (n.delegate = null),
                ("throw" === o &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  C(t, n),
                  "throw" === n.method)) ||
                  ("return" !== o &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + o + "' method"
                    )))),
                h
              );
            var i = d(r, t.iterator, n.arg);
            if ("throw" === i.type)
              return (
                (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), h
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((n[t.resultName] = a.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  h)
                : a
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                h);
          }
          function x(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function A(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function L(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(x, this),
              this.reset(!0);
          }
          function P(t) {
            if (t) {
              var n = t[a];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var r = -1,
                  i = function n() {
                    for (; ++r < t.length; )
                      if (o.call(t, r))
                        return (n.value = t[r]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (i.next = i);
              }
            }
            return { next: j };
          }
          function j() {
            return { value: e, done: !0 };
          }
          return (
            (y.prototype = m),
            r(S, "constructor", { value: m, configurable: !0 }),
            r(m, "constructor", { value: y, configurable: !0 }),
            (y.displayName = s(m, u, "GeneratorFunction")),
            (t.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === y || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, m)
                  : ((t.__proto__ = m), s(t, u, "GeneratorFunction")),
                (t.prototype = Object.create(S)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            k(O.prototype),
            s(O.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = O),
            (t.async = function (e, n, o, r, i) {
              void 0 === i && (i = Promise);
              var a = new O(l(e, n, o, r), i);
              return t.isGeneratorFunction(n)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            k(S),
            s(S, u, "Generator"),
            s(S, a, function () {
              return this;
            }),
            s(S, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (t) {
              var e = Object(t),
                n = [];
              for (var o in e) n.push(o);
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    var o = n.pop();
                    if (o in e) return (t.value = o), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (t.values = P),
            (L.prototype = {
              constructor: L,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(A),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      o.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function r(o, r) {
                  return (
                    (c.type = "throw"),
                    (c.arg = t),
                    (n.next = o),
                    r && ((n.method = "next"), (n.arg = e)),
                    !!r
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    c = a.completion;
                  if ("root" === a.tryLoc) return r("end");
                  if (a.tryLoc <= this.prev) {
                    var u = o.call(a, "catchLoc"),
                      s = o.call(a, "finallyLoc");
                    if (u && s) {
                      if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n];
                  if (
                    r.tryLoc <= this.prev &&
                    o.call(r, "finallyLoc") &&
                    this.prev < r.finallyLoc
                  ) {
                    var i = r;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), h)
                    : this.complete(a)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  h
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), A(n), h;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var o = n.completion;
                    if ("throw" === o.type) {
                      var r = o.arg;
                      A(n);
                    }
                    return r;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, o) {
                return (
                  (this.delegate = {
                    iterator: P(t),
                    resultName: n,
                    nextLoc: o,
                  }),
                  "next" === this.method && (this.arg = e),
                  h
                );
              },
            }),
            t
          );
        })(t.exports);
        try {
          regeneratorRuntime = e;
        } catch (t) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = e)
            : Function("r", "regeneratorRuntime = r")(e);
        }
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var i = (e[o] = { id: o, loaded: !1, exports: {} });
    return t[o].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
  }
  (n.d = (t, e) => {
    for (var o in e)
      n.o(e, o) &&
        !n.o(t, o) &&
        Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
  }),
    (n.hmd = (t) => (
      (t = Object.create(t)).children || (t.children = []),
      Object.defineProperty(t, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              t.id
          );
        },
      }),
      t
    )),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    n("./src/index_api.ts");
})();
