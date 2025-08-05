/*! For license information please see app_api.pid.js.LICENSE.txt */
(() => {
  var t = {
      1138: () => {
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
      6489: (t, e) => {
        "use strict";
        (e.Q = function (t, e) {
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
          (e.q = function (t, e, n) {
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
      5202: function () {
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
      5666: (t) => {
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
            return r(a, "_invoke", { value: O(t, n, c) }), a;
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
            _ = "suspendedYield",
            p = "executing",
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
          function T(t, e) {
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
          function O(t, e, n) {
            var o = f;
            return function (r, i) {
              if (o === p) throw new Error("Generator is already running");
              if (o === v) {
                if ("throw" === r) throw i;
                return N();
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
                o = p;
                var u = d(t, e, n);
                if ("normal" === u.type) {
                  if (((o = n.done ? v : _), u.arg === h)) continue;
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
            return { next: N };
          }
          function N() {
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
            k(T.prototype),
            s(T.prototype, c, function () {
              return this;
            }),
            (t.AsyncIterator = T),
            (t.async = function (e, n, o, r, i) {
              void 0 === i && (i = Promise);
              var a = new T(l(e, n, o, r), i);
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
    var i = (e[o] = { exports: {} });
    return t[o].call(i.exports, i, i.exports, n), i.exports;
  }
  (() => {
    "use strict";
    var t,
      e,
      o,
      r,
      i,
      a,
      c,
      u = {},
      s = [],
      l = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
      d = Array.isArray;
    function f(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function _(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function p(e, n, o) {
      var r,
        i,
        a,
        c = {};
      for (a in n)
        "key" == a ? (r = n[a]) : "ref" == a ? (i = n[a]) : (c[a] = n[a]);
      if (
        (arguments.length > 2 &&
          (c.children = arguments.length > 3 ? t.call(arguments, 2) : o),
        "function" == typeof e && null != e.defaultProps)
      )
        for (a in e.defaultProps) void 0 === c[a] && (c[a] = e.defaultProps[a]);
      return v(e, c, r, i, null);
    }
    function v(t, n, r, i, a) {
      var c = {
        type: t,
        props: n,
        key: r,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == a ? ++o : a,
      };
      return null == a && null != e.vnode && e.vnode(c), c;
    }
    function h(t) {
      return t.children;
    }
    function g(t, e) {
      (this.props = t), (this.context = e);
    }
    function y(t, e) {
      if (null == e) return t.__ ? y(t.__, t.__.__k.indexOf(t) + 1) : null;
      for (var n; e < t.__k.length; e++)
        if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
      return "function" == typeof t.type ? y(t) : null;
    }
    function m(t) {
      var e, n;
      if (null != (t = t.__) && null != t.__c) {
        for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
          if (null != (n = t.__k[e]) && null != n.__e) {
            t.__e = t.__c.base = n.__e;
            break;
          }
        return m(t);
      }
    }
    function b(t) {
      ((!t.__d && (t.__d = !0) && r.push(t) && !w.__r++) ||
        i !== e.debounceRendering) &&
        ((i = e.debounceRendering) || a)(w);
    }
    function w() {
      var t, e, n, o, i, a, u, s;
      for (r.sort(c); (t = r.shift()); )
        t.__d &&
          ((e = r.length),
          (o = void 0),
          (i = void 0),
          (u = (a = (n = t).__v).__e),
          (s = n.__P) &&
            ((o = []),
            ((i = f({}, a)).__v = a.__v + 1),
            P(
              s,
              a,
              i,
              n.__n,
              void 0 !== s.ownerSVGElement,
              null != a.__h ? [u] : null,
              o,
              null == u ? y(a) : u,
              a.__h
            ),
            N(o, a),
            a.__e != u && m(a)),
          r.length > e && r.sort(c));
      w.__r = 0;
    }
    function E(t, e, n, o, r, i, a, c, l, f) {
      var _,
        p,
        g,
        m,
        b,
        w,
        E,
        k = (o && o.__k) || s,
        C = k.length;
      for (n.__k = [], _ = 0; _ < e.length; _++)
        if (
          null !=
          (m = n.__k[_] =
            null == (m = e[_]) ||
            "boolean" == typeof m ||
            "function" == typeof m
              ? null
              : "string" == typeof m ||
                "number" == typeof m ||
                "bigint" == typeof m
              ? v(null, m, null, null, m)
              : d(m)
              ? v(h, { children: m }, null, null, null)
              : m.__b > 0
              ? v(m.type, m.props, m.key, m.ref ? m.ref : null, m.__v)
              : m)
        ) {
          if (
            ((m.__ = n),
            (m.__b = n.__b + 1),
            null === (g = k[_]) || (g && m.key == g.key && m.type === g.type))
          )
            k[_] = void 0;
          else
            for (p = 0; p < C; p++) {
              if ((g = k[p]) && m.key == g.key && m.type === g.type) {
                k[p] = void 0;
                break;
              }
              g = null;
            }
          P(t, m, (g = g || u), r, i, a, c, l, f),
            (b = m.__e),
            (p = m.ref) &&
              g.ref != p &&
              (E || (E = []),
              g.ref && E.push(g.ref, null, m),
              E.push(p, m.__c || b, m)),
            null != b
              ? (null == w && (w = b),
                "function" == typeof m.type && m.__k === g.__k
                  ? (m.__d = l = S(m, l, t))
                  : (l = T(t, m, g, k, b, l)),
                "function" == typeof n.type && (n.__d = l))
              : l && g.__e == l && l.parentNode != t && (l = y(g));
        }
      for (n.__e = w, _ = C; _--; )
        null != k[_] &&
          ("function" == typeof n.type &&
            null != k[_].__e &&
            k[_].__e == n.__d &&
            (n.__d = O(o).nextSibling),
          R(k[_], k[_]));
      if (E) for (_ = 0; _ < E.length; _++) I(E[_], E[++_], E[++_]);
    }
    function S(t, e, n) {
      for (var o, r = t.__k, i = 0; r && i < r.length; i++)
        (o = r[i]) &&
          ((o.__ = t),
          (e =
            "function" == typeof o.type
              ? S(o, e, n)
              : T(n, o, o, r, o.__e, e)));
      return e;
    }
    function k(t, e) {
      return (
        (e = e || []),
        null == t ||
          "boolean" == typeof t ||
          (d(t)
            ? t.some(function (t) {
                k(t, e);
              })
            : e.push(t)),
        e
      );
    }
    function T(t, e, n, o, r, i) {
      var a, c, u;
      if (void 0 !== e.__d) (a = e.__d), (e.__d = void 0);
      else if (null == n || r != i || null == r.parentNode)
        t: if (null == i || i.parentNode !== t) t.appendChild(r), (a = null);
        else {
          for (c = i, u = 0; (c = c.nextSibling) && u < o.length; u += 1)
            if (c == r) break t;
          t.insertBefore(r, i), (a = i);
        }
      return void 0 !== a ? a : r.nextSibling;
    }
    function O(t) {
      var e, n, o;
      if (null == t.type || "string" == typeof t.type) return t.__e;
      if (t.__k)
        for (e = t.__k.length - 1; e >= 0; e--)
          if ((n = t.__k[e]) && (o = O(n))) return o;
      return null;
    }
    function C(t, e, n) {
      "-" === e[0]
        ? t.setProperty(e, null == n ? "" : n)
        : (t[e] =
            null == n ? "" : "number" != typeof n || l.test(e) ? n : n + "px");
    }
    function x(t, e, n, o, r) {
      var i;
      t: if ("style" === e)
        if ("string" == typeof n) t.style.cssText = n;
        else {
          if (("string" == typeof o && (t.style.cssText = o = ""), o))
            for (e in o) (n && e in n) || C(t.style, e, "");
          if (n) for (e in n) (o && n[e] === o[e]) || C(t.style, e, n[e]);
        }
      else if ("o" === e[0] && "n" === e[1])
        (i = e !== (e = e.replace(/Capture$/, ""))),
          (e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
          t.l || (t.l = {}),
          (t.l[e + i] = n),
          n
            ? o || t.addEventListener(e, i ? L : A, i)
            : t.removeEventListener(e, i ? L : A, i);
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
    function A(t) {
      return this.l[t.type + !1](e.event ? e.event(t) : t);
    }
    function L(t) {
      return this.l[t.type + !0](e.event ? e.event(t) : t);
    }
    function P(t, n, o, r, i, a, c, u, s) {
      var l,
        _,
        p,
        v,
        y,
        m,
        b,
        w,
        S,
        k,
        T,
        O,
        C,
        x,
        A,
        L = n.type;
      if (void 0 !== n.constructor) return null;
      null != o.__h &&
        ((s = o.__h), (u = n.__e = o.__e), (n.__h = null), (a = [u])),
        (l = e.__b) && l(n);
      try {
        t: if ("function" == typeof L) {
          if (
            ((w = n.props),
            (S = (l = L.contextType) && r[l.__c]),
            (k = l ? (S ? S.props.value : l.__) : r),
            o.__c
              ? (b = (_ = n.__c = o.__c).__ = _.__E)
              : ("prototype" in L && L.prototype.render
                  ? (n.__c = _ = new L(w, k))
                  : ((n.__c = _ = new g(w, k)),
                    (_.constructor = L),
                    (_.render = D)),
                S && S.sub(_),
                (_.props = w),
                _.state || (_.state = {}),
                (_.context = k),
                (_.__n = r),
                (p = _.__d = !0),
                (_.__h = []),
                (_._sb = [])),
            null == _.__s && (_.__s = _.state),
            null != L.getDerivedStateFromProps &&
              (_.__s == _.state && (_.__s = f({}, _.__s)),
              f(_.__s, L.getDerivedStateFromProps(w, _.__s))),
            (v = _.props),
            (y = _.state),
            (_.__v = n),
            p)
          )
            null == L.getDerivedStateFromProps &&
              null != _.componentWillMount &&
              _.componentWillMount(),
              null != _.componentDidMount && _.__h.push(_.componentDidMount);
          else {
            if (
              (null == L.getDerivedStateFromProps &&
                w !== v &&
                null != _.componentWillReceiveProps &&
                _.componentWillReceiveProps(w, k),
              (!_.__e &&
                null != _.shouldComponentUpdate &&
                !1 === _.shouldComponentUpdate(w, _.__s, k)) ||
                n.__v === o.__v)
            ) {
              for (
                n.__v !== o.__v &&
                  ((_.props = w), (_.state = _.__s), (_.__d = !1)),
                  _.__e = !1,
                  n.__e = o.__e,
                  n.__k = o.__k,
                  n.__k.forEach(function (t) {
                    t && (t.__ = n);
                  }),
                  T = 0;
                T < _._sb.length;
                T++
              )
                _.__h.push(_._sb[T]);
              (_._sb = []), _.__h.length && c.push(_);
              break t;
            }
            null != _.componentWillUpdate && _.componentWillUpdate(w, _.__s, k),
              null != _.componentDidUpdate &&
                _.__h.push(function () {
                  _.componentDidUpdate(v, y, m);
                });
          }
          if (
            ((_.context = k),
            (_.props = w),
            (_.__P = t),
            (O = e.__r),
            (C = 0),
            "prototype" in L && L.prototype.render)
          ) {
            for (
              _.state = _.__s,
                _.__d = !1,
                O && O(n),
                l = _.render(_.props, _.state, _.context),
                x = 0;
              x < _._sb.length;
              x++
            )
              _.__h.push(_._sb[x]);
            _._sb = [];
          } else
            do {
              (_.__d = !1),
                O && O(n),
                (l = _.render(_.props, _.state, _.context)),
                (_.state = _.__s);
            } while (_.__d && ++C < 25);
          (_.state = _.__s),
            null != _.getChildContext && (r = f(f({}, r), _.getChildContext())),
            p ||
              null == _.getSnapshotBeforeUpdate ||
              (m = _.getSnapshotBeforeUpdate(v, y)),
            E(
              t,
              d(
                (A =
                  null != l && l.type === h && null == l.key
                    ? l.props.children
                    : l)
              )
                ? A
                : [A],
              n,
              o,
              r,
              i,
              a,
              c,
              u,
              s
            ),
            (_.base = n.__e),
            (n.__h = null),
            _.__h.length && c.push(_),
            b && (_.__E = _.__ = null),
            (_.__e = !1);
        } else
          null == a && n.__v === o.__v
            ? ((n.__k = o.__k), (n.__e = o.__e))
            : (n.__e = j(o.__e, n, o, r, i, a, c, s));
        (l = e.diffed) && l(n);
      } catch (t) {
        (n.__v = null),
          (s || null != a) &&
            ((n.__e = u), (n.__h = !!s), (a[a.indexOf(u)] = null)),
          e.__e(t, n, o);
      }
    }
    function N(t, n) {
      e.__c && e.__c(n, t),
        t.some(function (n) {
          try {
            (t = n.__h),
              (n.__h = []),
              t.some(function (t) {
                t.call(n);
              });
          } catch (t) {
            e.__e(t, n.__v);
          }
        });
    }
    function j(e, n, o, r, i, a, c, s) {
      var l,
        f,
        p,
        v = o.props,
        h = n.props,
        g = n.type,
        m = 0;
      if (("svg" === g && (i = !0), null != a))
        for (; m < a.length; m++)
          if (
            (l = a[m]) &&
            "setAttribute" in l == !!g &&
            (g ? l.localName === g : 3 === l.nodeType)
          ) {
            (e = l), (a[m] = null);
            break;
          }
      if (null == e) {
        if (null === g) return document.createTextNode(h);
        (e = i
          ? document.createElementNS("http://www.w3.org/2000/svg", g)
          : document.createElement(g, h.is && h)),
          (a = null),
          (s = !1);
      }
      if (null === g) v === h || (s && e.data === h) || (e.data = h);
      else {
        if (
          ((a = a && t.call(e.childNodes)),
          (f = (v = o.props || u).dangerouslySetInnerHTML),
          (p = h.dangerouslySetInnerHTML),
          !s)
        ) {
          if (null != a)
            for (v = {}, m = 0; m < e.attributes.length; m++)
              v[e.attributes[m].name] = e.attributes[m].value;
          (p || f) &&
            ((p && ((f && p.__html == f.__html) || p.__html === e.innerHTML)) ||
              (e.innerHTML = (p && p.__html) || ""));
        }
        if (
          ((function (t, e, n, o, r) {
            var i;
            for (i in n)
              "children" === i ||
                "key" === i ||
                i in e ||
                x(t, i, null, n[i], o);
            for (i in e)
              (r && "function" != typeof e[i]) ||
                "children" === i ||
                "key" === i ||
                "value" === i ||
                "checked" === i ||
                n[i] === e[i] ||
                x(t, i, e[i], n[i], o);
          })(e, h, v, i, s),
          p)
        )
          n.__k = [];
        else if (
          (E(
            e,
            d((m = n.props.children)) ? m : [m],
            n,
            o,
            r,
            i && "foreignObject" !== g,
            a,
            c,
            a ? a[0] : o.__k && y(o, 0),
            s
          ),
          null != a)
        )
          for (m = a.length; m--; ) null != a[m] && _(a[m]);
        s ||
          ("value" in h &&
            void 0 !== (m = h.value) &&
            (m !== e.value ||
              ("progress" === g && !m) ||
              ("option" === g && m !== v.value)) &&
            x(e, "value", m, v.value, !1),
          "checked" in h &&
            void 0 !== (m = h.checked) &&
            m !== e.checked &&
            x(e, "checked", m, v.checked, !1));
      }
      return e;
    }
    function I(t, n, o) {
      try {
        "function" == typeof t ? t(n) : (t.current = n);
      } catch (t) {
        e.__e(t, o);
      }
    }
    function R(t, n, o) {
      var r, i;
      if (
        (e.unmount && e.unmount(t),
        (r = t.ref) && ((r.current && r.current !== t.__e) || I(r, null, n)),
        null != (r = t.__c))
      ) {
        if (r.componentWillUnmount)
          try {
            r.componentWillUnmount();
          } catch (t) {
            e.__e(t, n);
          }
        (r.base = r.__P = null), (t.__c = void 0);
      }
      if ((r = t.__k))
        for (i = 0; i < r.length; i++)
          r[i] && R(r[i], n, o || "function" != typeof t.type);
      o || null == t.__e || _(t.__e), (t.__ = t.__e = t.__d = void 0);
    }
    function D(t, e, n) {
      return this.constructor(t, n);
    }
    (t = s.slice),
      (e = {
        __e: function (t, e, n, o) {
          for (var r, i, a; (e = e.__); )
            if ((r = e.__c) && !r.__)
              try {
                if (
                  ((i = r.constructor) &&
                    null != i.getDerivedStateFromError &&
                    (r.setState(i.getDerivedStateFromError(t)), (a = r.__d)),
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
      (o = 0),
      (g.prototype.setState = function (t, e) {
        var n;
        (n =
          null != this.__s && this.__s !== this.state
            ? this.__s
            : (this.__s = f({}, this.state))),
          "function" == typeof t && (t = t(f({}, n), this.props)),
          t && f(n, t),
          null != t && this.__v && (e && this._sb.push(e), b(this));
      }),
      (g.prototype.forceUpdate = function (t) {
        this.__v && ((this.__e = !0), t && this.__h.push(t), b(this));
      }),
      (g.prototype.render = h),
      (r = []),
      (a =
        "function" == typeof Promise
          ? Promise.prototype.then.bind(Promise.resolve())
          : setTimeout),
      (c = function (t, e) {
        return t.__v.__b - e.__v.__b;
      }),
      (w.__r = 0),
      n(1138),
      n(5666);
    var M,
      U,
      B,
      H,
      F = 0,
      G = [],
      V = [],
      Y = e.__b,
      W = e.__r,
      K = e.diffed,
      q = e.__c,
      z = e.unmount;
    function $(t, n) {
      e.__h && e.__h(U, t, F || n), (F = 0);
      var o = U.__H || (U.__H = { __: [], __h: [] });
      return t >= o.__.length && o.__.push({ __V: V }), o.__[t];
    }
    function J(t) {
      return (F = 1), Q(ut, t);
    }
    function Q(t, e, n) {
      var o = $(M++, 2);
      if (
        ((o.t = t),
        !o.__c &&
          ((o.__ = [
            n ? n(e) : ut(void 0, e),
            function (t) {
              var e = o.__N ? o.__N[0] : o.__[0],
                n = o.t(e, t);
              e !== n && ((o.__N = [n, o.__[1]]), o.__c.setState({}));
            },
          ]),
          (o.__c = U),
          !U.u))
      ) {
        var r = function (t, e, n) {
          if (!o.__c.__H) return !0;
          var r = o.__c.__H.__.filter(function (t) {
            return t.__c;
          });
          if (
            r.every(function (t) {
              return !t.__N;
            })
          )
            return !i || i.call(this, t, e, n);
          var a = !1;
          return (
            r.forEach(function (t) {
              if (t.__N) {
                var e = t.__[0];
                (t.__ = t.__N), (t.__N = void 0), e !== t.__[0] && (a = !0);
              }
            }),
            !(!a && o.__c.props === t) && (!i || i.call(this, t, e, n))
          );
        };
        U.u = !0;
        var i = U.shouldComponentUpdate,
          a = U.componentWillUpdate;
        (U.componentWillUpdate = function (t, e, n) {
          if (this.__e) {
            var o = i;
            (i = void 0), r(t, e, n), (i = o);
          }
          a && a.call(this, t, e, n);
        }),
          (U.shouldComponentUpdate = r);
      }
      return o.__N || o.__;
    }
    function X(t, n) {
      var o = $(M++, 3);
      !e.__s && ct(o.__H, n) && ((o.__ = t), (o.i = n), U.__H.__h.push(o));
    }
    function Z(t) {
      return (
        (F = 5),
        tt(function () {
          return { current: t };
        }, [])
      );
    }
    function tt(t, e) {
      var n = $(M++, 7);
      return ct(n.__H, e)
        ? ((n.__V = t()), (n.i = e), (n.__h = t), n.__V)
        : n.__;
    }
    function et(t, e) {
      return (
        (F = 8),
        tt(function () {
          return t;
        }, e)
      );
    }
    function nt() {
      for (var t; (t = G.shift()); )
        if (t.__P && t.__H)
          try {
            t.__H.__h.forEach(it), t.__H.__h.forEach(at), (t.__H.__h = []);
          } catch (n) {
            (t.__H.__h = []), e.__e(n, t.__v);
          }
    }
    (e.__b = function (t) {
      (U = null), Y && Y(t);
    }),
      (e.__r = function (t) {
        W && W(t), (M = 0);
        var e = (U = t.__c).__H;
        e &&
          (B === U
            ? ((e.__h = []),
              (U.__h = []),
              e.__.forEach(function (t) {
                t.__N && (t.__ = t.__N), (t.__V = V), (t.__N = t.i = void 0);
              }))
            : (e.__h.forEach(it), e.__h.forEach(at), (e.__h = []), (M = 0))),
          (B = U);
      }),
      (e.diffed = function (t) {
        K && K(t);
        var n = t.__c;
        n &&
          n.__H &&
          (n.__H.__h.length &&
            ((1 !== G.push(n) && H === e.requestAnimationFrame) ||
              ((H = e.requestAnimationFrame) || rt)(nt)),
          n.__H.__.forEach(function (t) {
            t.i && (t.__H = t.i),
              t.__V !== V && (t.__ = t.__V),
              (t.i = void 0),
              (t.__V = V);
          })),
          (B = U = null);
      }),
      (e.__c = function (t, n) {
        n.some(function (t) {
          try {
            t.__h.forEach(it),
              (t.__h = t.__h.filter(function (t) {
                return !t.__ || at(t);
              }));
          } catch (o) {
            n.some(function (t) {
              t.__h && (t.__h = []);
            }),
              (n = []),
              e.__e(o, t.__v);
          }
        }),
          q && q(t, n);
      }),
      (e.unmount = function (t) {
        z && z(t);
        var n,
          o = t.__c;
        o &&
          o.__H &&
          (o.__H.__.forEach(function (t) {
            try {
              it(t);
            } catch (t) {
              n = t;
            }
          }),
          (o.__H = void 0),
          n && e.__e(n, o.__v));
      });
    var ot = "function" == typeof requestAnimationFrame;
    function rt(t) {
      var e,
        n = function () {
          clearTimeout(o), ot && cancelAnimationFrame(e), setTimeout(t);
        },
        o = setTimeout(n, 100);
      ot && (e = requestAnimationFrame(n));
    }
    function it(t) {
      var e = U,
        n = t.__c;
      "function" == typeof n && ((t.__c = void 0), n()), (U = e);
    }
    function at(t) {
      var e = U;
      (t.__c = t.__()), (U = e);
    }
    function ct(t, e) {
      return (
        !t ||
        t.length !== e.length ||
        e.some(function (e, n) {
          return e !== t[n];
        })
      );
    }
    function ut(t, e) {
      return "function" == typeof e ? e(t) : e;
    }
    function st(t, e) {
      for (var n in t) if ("__source" !== n && !(n in e)) return !0;
      for (var o in e) if ("__source" !== o && t[o] !== e[o]) return !0;
      return !1;
    }
    function lt(t) {
      this.props = t;
    }
    ((lt.prototype = new g()).isPureReactComponent = !0),
      (lt.prototype.shouldComponentUpdate = function (t, e) {
        return st(this.props, t) || st(this.state, e);
      });
    var dt = e.__b;
    (e.__b = function (t) {
      t.type && t.type.__f && t.ref && ((t.props.ref = t.ref), (t.ref = null)),
        dt && dt(t);
    }),
      "undefined" != typeof Symbol &&
        Symbol.for &&
        Symbol.for("react.forward_ref");
    var ft = e.__e;
    e.__e = function (t, e, n, o) {
      if (t.then)
        for (var r, i = e; (i = i.__); )
          if ((r = i.__c) && r.__c)
            return (
              null == e.__e && ((e.__e = n.__e), (e.__k = n.__k)), r.__c(t, e)
            );
      ft(t, e, n, o);
    };
    var _t = e.unmount;
    function pt(t, e, n) {
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
              return pt(t, e, n);
            }))),
        t
      );
    }
    function vt(t, e, n) {
      return (
        t &&
          ((t.__v = null),
          (t.__k =
            t.__k &&
            t.__k.map(function (t) {
              return vt(t, e, n);
            })),
          t.__c &&
            t.__c.__P === e &&
            (t.__e && n.insertBefore(t.__e, t.__d),
            (t.__c.__e = !0),
            (t.__c.__P = n))),
        t
      );
    }
    function ht() {
      (this.__u = 0), (this.t = null), (this.__b = null);
    }
    function gt(t) {
      var e = t.__.__c;
      return e && e.__a && e.__a(t);
    }
    function yt() {
      (this.u = null), (this.o = null);
    }
    (e.unmount = function (t) {
      var e = t.__c;
      e && e.__R && e.__R(), e && !0 === t.__h && (t.type = null), _t && _t(t);
    }),
      ((ht.prototype = new g()).__c = function (t, e) {
        var n = e.__c,
          o = this;
        null == o.t && (o.t = []), o.t.push(n);
        var r = gt(o.__v),
          i = !1,
          a = function () {
            i || ((i = !0), (n.__R = null), r ? r(c) : c());
          };
        n.__R = a;
        var c = function () {
            if (!--o.__u) {
              if (o.state.__a) {
                var t = o.state.__a;
                o.__v.__k[0] = vt(t, t.__c.__P, t.__c.__O);
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
      (ht.prototype.componentWillUnmount = function () {
        this.t = [];
      }),
      (ht.prototype.render = function (t, e) {
        if (this.__b) {
          if (this.__v.__k) {
            var n = document.createElement("div"),
              o = this.__v.__k[0].__c;
            this.__v.__k[0] = pt(this.__b, n, (o.__O = o.__P));
          }
          this.__b = null;
        }
        var r = e.__a && p(h, null, t.fallback);
        return r && (r.__h = null), [p(h, null, e.__a ? null : t.children), r];
      });
    var mt = function (t, e, n) {
      if (
        (++n[1] === n[0] && t.o.delete(e),
        t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.o.size))
      )
        for (n = t.u; n; ) {
          for (; n.length > 3; ) n.pop()();
          if (n[1] < n[0]) break;
          t.u = n = n[2];
        }
    };
    ((yt.prototype = new g()).__a = function (t) {
      var e = this,
        n = gt(e.__v),
        o = e.o.get(t);
      return (
        o[0]++,
        function (r) {
          var i = function () {
            e.props.revealOrder ? (o.push(r), mt(e, t, o)) : r();
          };
          n ? n(i) : i();
        }
      );
    }),
      (yt.prototype.render = function (t) {
        (this.u = null), (this.o = new Map());
        var e = k(t.children);
        t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
        for (var n = e.length; n--; )
          this.o.set(e[n], (this.u = [1, 0, this.u]));
        return t.children;
      }),
      (yt.prototype.componentDidUpdate = yt.prototype.componentDidMount =
        function () {
          var t = this;
          this.o.forEach(function (e, n) {
            mt(t, n, e);
          });
        });
    var bt =
        ("undefined" != typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.element")) ||
        60103,
      wt =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
      Et = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
      St = /[A-Z0-9]/g,
      kt = "undefined" != typeof document,
      Tt = function (t) {
        return (
          "undefined" != typeof Symbol && "symbol" == typeof Symbol()
            ? /fil|che|rad/
            : /fil|che|ra/
        ).test(t);
      };
    (g.prototype.isReactComponent = {}),
      [
        "componentWillMount",
        "componentWillReceiveProps",
        "componentWillUpdate",
      ].forEach(function (t) {
        Object.defineProperty(g.prototype, t, {
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
    var Ot = e.event;
    function Ct() {}
    function xt() {
      return this.cancelBubble;
    }
    function At() {
      return this.defaultPrevented;
    }
    e.event = function (t) {
      return (
        Ot && (t = Ot(t)),
        (t.persist = Ct),
        (t.isPropagationStopped = xt),
        (t.isDefaultPrevented = At),
        (t.nativeEvent = t)
      );
    };
    var Lt = {
        enumerable: !1,
        configurable: !0,
        get: function () {
          return this.class;
        },
      },
      Pt = e.vnode;
    e.vnode = function (t) {
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
                (kt && "children" === r && "noscript" === n) ||
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
                  Tt(e.type)
                ? "onfocus" === a
                  ? (r = "onfocusin")
                  : "onblur" === a
                  ? (r = "onfocusout")
                  : Et.test(r)
                  ? (r = a)
                  : -1 === n.indexOf("-") && wt.test(r)
                  ? (r = r.replace(St, "-$&").toLowerCase())
                  : null === i && (i = void 0)
                : (a = r = "oninput"),
                "oninput" === a && o[(r = a)] && (r = "oninputCapture"),
                (o[r] = i);
            }
          }
          "select" == n &&
            o.multiple &&
            Array.isArray(o.value) &&
            (o.value = k(e.children).forEach(function (t) {
              t.props.selected = -1 != o.value.indexOf(t.props.value);
            })),
            "select" == n &&
              null != o.defaultValue &&
              (o.value = k(e.children).forEach(function (t) {
                t.props.selected = o.multiple
                  ? -1 != o.defaultValue.indexOf(t.props.value)
                  : o.defaultValue == t.props.value;
              })),
            e.class && !e.className
              ? ((o.class = e.class), Object.defineProperty(o, "className", Lt))
              : ((e.className && !e.class) || (e.class && e.className)) &&
                (o.class = o.className = e.className),
            (t.props = o);
        })(t),
        (t.$$typeof = bt),
        Pt && Pt(t);
    };
    var Nt = e.__r;
    e.__r = function (t) {
      Nt && Nt(t), t.__c;
    };
    var jt = e.diffed;
    e.diffed = function (t) {
      jt && jt(t);
      var e = t.props,
        n = t.__e;
      null != n &&
        "textarea" === t.type &&
        "value" in e &&
        e.value !== n.value &&
        (n.value = null == e.value ? "" : e.value);
    };
    const It =
      "undefined" == typeof window ||
      !window.navigator ||
      /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
        ? X
        : function (t, n) {
            var o = $(M++, 4);
            !e.__s && ct(o.__H, n) && ((o.__ = t), (o.i = n), U.__h.push(o));
          };
    function Rt(t) {
      const n =
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
        o = (t = n.getState, o = Object.is) => {
          const [, r] = Q((t) => t + 1, 0),
            i = n.getState(),
            a = Z(i),
            c = Z(t),
            u = Z(o),
            s = Z(!1),
            l = Z();
          let d;
          void 0 === l.current && (l.current = t(i));
          let f = !1;
          (a.current !== i ||
            c.current !== t ||
            u.current !== o ||
            s.current) &&
            ((d = t(i)), (f = !o(l.current, d))),
            It(() => {
              f && (l.current = d),
                (a.current = i),
                (c.current = t),
                (u.current = o),
                (s.current = !1);
            });
          const _ = Z(i);
          It(() => {
            const t = () => {
                try {
                  const t = n.getState(),
                    e = c.current(t);
                  u.current(l.current, e) ||
                    ((a.current = t), (l.current = e), r());
                } catch (t) {
                  (s.current = !0), r();
                }
              },
              e = n.subscribe(t);
            return n.getState() !== _.current && t(), e;
          }, []);
          const p = f ? d : l.current;
          return (
            (function (t, n) {
              e.useDebugValue && e.useDebugValue(n ? n(t) : t);
            })(p),
            p
          );
        };
      return (
        Object.assign(o, n),
        (o[Symbol.iterator] = function () {
          console.warn(
            "[useStore, api] = create() is deprecated and will be removed in v4"
          );
          const t = [o, n];
          return {
            next() {
              const e = t.length <= 0;
              return { value: t.shift(), done: e };
            },
          };
        }),
        o
      );
    }
    var Dt = n(6489);
    function Mt(t, e) {
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
    var Ut = function () {
        return (
          (Ut =
            Object.assign ||
            function (t) {
              for (var e, n = 1, o = arguments.length; n < o; n++)
                for (var r in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return t;
            }),
          Ut.apply(this, arguments)
        );
      },
      Bt = (function () {
        function t(t, e) {
          var n = this;
          (this.changeListeners = []),
            (this.HAS_DOCUMENT_COOKIE = !1),
            (this.cookies = (function (t, e) {
              return "string" == typeof t
                ? Dt.Q(t, e)
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
              (this.cookies = Dt.Q(document.cookie, t));
          }),
          (t.prototype._emitChange = function (t) {
            for (var e = 0; e < this.changeListeners.length; ++e)
              this.changeListeners[e](t);
          }),
          (t.prototype.get = function (t, e, n) {
            return (
              void 0 === e && (e = {}),
              this._updateBrowserValues(n),
              Mt(this.cookies[t], e)
            );
          }),
          (t.prototype.getAll = function (t, e) {
            void 0 === t && (t = {}), this._updateBrowserValues(e);
            var n = {};
            for (var o in this.cookies) n[o] = Mt(this.cookies[o], t);
            return n;
          }),
          (t.prototype.set = function (t, e, n) {
            var o;
            "object" == typeof e && (e = JSON.stringify(e)),
              (this.cookies = Ut(Ut({}, this.cookies), (((o = {})[t] = e), o))),
              this.HAS_DOCUMENT_COOKIE && (document.cookie = Dt.q(t, e, n)),
              this._emitChange({ name: t, value: e, options: n });
          }),
          (t.prototype.remove = function (t, e) {
            var n = (e = Ut(Ut({}, e), {
              expires: new Date(1970, 1, 1, 0, 0, 1),
              maxAge: 0,
            }));
            (this.cookies = Ut({}, this.cookies)),
              delete this.cookies[t],
              this.HAS_DOCUMENT_COOKIE && (document.cookie = Dt.q(t, "", n)),
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
    const Ht = Bt;
    function Ft() {
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
    var Gt = function (t) {
        var e =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
        return Ft(
          2 < arguments.length && void 0 !== arguments[2]
            ? arguments[2]
            : "sessionStorage"
        )
          ? sessionStorage.getItem(t)
          : e;
      },
      Vt =
        "true" === Gt("trudebug", null, "localStorage") ||
        (function () {
          var t = new Proxy(new URLSearchParams(window.location.search), {
            get: function (t, e) {
              return t.get(e);
            },
          });
          return "true" === t.tru_debug;
        })();
    function Yt() {
      var t;
      Vt && (t = console).log.apply(t, arguments);
    }
    function Wt(t) {
      Vt && t();
    }
    var Kt = (function (t) {
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
      qt = (function (t) {
        return (
          (t[(t.SERVICE_LEVEL = 1)] = "SERVICE_LEVEL"),
          (t[(t.CATEGORY_LEVEL = 2)] = "CATEGORY_LEVEL"),
          t
        );
      })({}),
      zt = function (t) {
        window.TruendoEventCallback && window.TruendoEventCallback(t),
          window.dispatchEvent(new CustomEvent("truendoevent", { detail: t }));
      };
    function $t(t) {
      return (
        ($t =
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
        $t(t)
      );
    }
    function Jt(t, e) {
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
    function Qt(t) {
      for (var e, n = 1; n < arguments.length; n++)
        (e = null == arguments[n] ? {} : arguments[n]),
          n % 2
            ? Jt(Object(e), !0).forEach(function (n) {
                Xt(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : Jt(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              });
      return t;
    }
    function Xt(t, e, n) {
      return (
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" !== $t(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(t, "string");
              if ("object" !== $t(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" === $t(e) ? e : e + "";
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
    var Zt = new Ht();
    function te(t, e) {
      var n;
      null === (n = t.parentNode) || void 0 === n || n.replaceChild(e, t);
    }
    function ee(t) {
      for (var e in t) if (t.hasOwnProperty(e)) return !1;
      return !0;
    }
    function ne() {
      var t = Be.getState().config.data,
        e = Zt.get(t.settings.cookie_name || "truendo_cc") || {};
      return (
        Wt(function () {
          console.group("% GET COOKIE", " - expanded"),
            console.log(e),
            console.groupCollapsed("%c decoded svc", " - expanded");
          var t = Ge(e.svc),
            n = Be.getState().categoriesAndServices.flatMap(function (t) {
              return t.services;
            });
          console.table(
            Object.keys(t).map(function (e) {
              var o = n.find(function (t) {
                return +t.short_id == +e;
              });
              return {
                id: null == o ? void 0 : o.id,
                shortId: null == o ? void 0 : o.short_id,
                category: null == o ? void 0 : o.cookie_category_name,
                active: t[e],
              };
            })
          ),
            console.groupEnd(),
            console.groupEnd();
        }),
        e
      );
    }
    function oe(t) {
      return window.location.host.includes(t) ? t : "";
    }
    function re(t) {
      var e = Be.getState().config.data,
        n = e.settings.cookie_name || "truendo_cc",
        o = oe(e.settings.cookie_domain);
      Wt(function () {
        var e;
        console.group("%c Cookie written", "color: orange; font-weight: bold"),
          console.log(t),
          console.groupCollapsed(
            "%c decoded svc",
            "color: orange; font-weight: bold"
          );
        var n = Ge(t.svc),
          o = Be.getState().categoriesAndServices.flatMap(function (t) {
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
        Zt.set(n, JSON.stringify(t), {
          expires: t.exp,
          path: "/",
          domain: o,
          sameSite: "lax",
        });
    }
    function ie(t) {
      var e = t || getCookieObj();
      if (void 0 !== e.exp)
        try {
          return new Date(e.exp);
        } catch (t) {}
      var n = new Date();
      return n.setFullYear(n.getFullYear() + 1), n;
    }
    function ae() {
      var t =
          !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
        e = ke(Be.getState().config.data).reduce(function (t, e) {
          return Qt(Qt({}, t), {}, Xt({}, e.cat, !0));
        }, {});
      Be.getState().actions.setCategoryStates(e), ce(t);
    }
    function ce() {
      var t =
          !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
        e = Be.getState().actions.saveToCookieObject;
      Wt(function () {
        console.log("Function: saveSettingsToCookie: ", t);
      }),
        zt({ name: "tru_save_callback" }),
        e(),
        fe(),
        t && le();
    }
    var ue = function (t, e, n, o) {
      return t ? o.cat === Kt.NECESSARY || !!e.svc[n.short_id] : !!e[o.cat];
    };
    function se() {
      var t = Be.getState().config.data,
        e = t.settings.mode === qt.SERVICE_LEVEL,
        n = ne();
      n.svc = Ge(n.svc);
      var o = ke(t).map(function (t) {
        return Qt(
          Qt({}, t),
          {},
          {
            services: t.services.map(function (o) {
              return Qt(Qt({}, o), {}, { active: ue(e, n, o, t) });
            }),
            state: n[t.cat] ? "active" : "inactive",
          }
        );
      });
      return (
        Wt(function () {
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
    function le() {
      Yt("%c Sending consent record", "color: #e31459; font-weight: bold");
      var t = Be.getState().cookieObject,
        e = Be.getState().config.data,
        n = (function (t, e) {
          var n,
            o = Date.now(),
            r = Be.getState().categoriesAndServices;
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
        })(Qt({}, t), e);
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
          re(
            Qt(
              Qt({}, Be.getState().cookieObject),
              {},
              200 <= n && 202 >= n
                ? { consent_sent: "true", exp: ie(t) }
                : { consent_sent: "false", exp: ie(t) }
            )
          );
      }),
        o.open("POST", r),
        o.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
        o.send(i),
        de();
    }
    function de() {
      Yt("%c Sending usage record", "color: #e31459; font-weight: bold");
      var t = Be.getState().cookieObject,
        e = Be.getState().config.data,
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
            re(
              Qt(Qt({}, Be.getState().cookieObject), {}, { usv: r, exp: ie(t) })
            );
        }),
        n.open("GET", o),
        n.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
        n.send());
    }
    function fe() {
      var t = Be.getState().config.data,
        e = Be.getState().categoriesAndServices,
        n = [],
        o = [],
        r = [],
        i = [],
        a = [],
        c = [],
        u = [],
        s = [];
      setTimeout(function () {
        if (t.settings.mode === qt.SERVICE_LEVEL) {
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
          var _ = Array.from(
            document.querySelectorAll("[data-trucookiecontrol]")
          );
          e.forEach(function (t) {
            _.forEach(function (e) {
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
        Wt(function () {
          console.log("optInScriptElems.length: ".concat(n.length)),
            console.log(n);
        }),
          Wt(function () {
            console.log("optOutScriptElems.length: ".concat(o.length)),
              console.log(o);
          }),
          Wt(function () {
            console.log("optInIframeElems.length: ".concat(r.length)),
              console.log(r);
          }),
          Wt(function () {
            console.log("optOutIframeElems.length: ".concat(i.length)),
              console.log(i);
          }),
          Wt(function () {
            console.log("optInImgElems.length: ".concat(a.length)),
              console.log(a);
          }),
          Wt(function () {
            console.log("optOutImgElems.length: ".concat(c.length)),
              console.log(c);
          }),
          n.forEach(_e),
          o.forEach(pe),
          r.forEach(ge),
          i.forEach(ye),
          a.forEach(ve),
          c.forEach(he),
          0 < s.length
            ? (function () {
                var t,
                  e,
                  n = document.getElementsByClassName("tru-ph-soc-container"),
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
                var t = document.getElementsByClassName("tru-ph-soc-container"),
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
    function _e(t) {
      if ("text/javascript" !== t.type) {
        var e = document.createElement("script");
        !(function (t, e, n) {
          for (var o, r = t.attributes, i = 0; i < r.length; i += 1)
            n((o = r[i])) && e.setAttribute(o.name, o.value);
        })(t, e, function (t) {
          return "type" !== t.name;
        });
        var n = t.textContent;
        n && (e.textContent = n), (e.type = "text/javascript"), te(t, e);
      }
    }
    function pe(t) {
      t.setAttribute("type", "text/plain");
    }
    function ve(t) {
      var e = t.getAttribute("data-src");
      e === t.getAttribute("src") || (e && t.setAttribute("src", e));
    }
    function he(t) {
      var e = t.getAttribute("src");
      e && (t.setAttribute("data-src", e), t.setAttribute("src", ""));
    }
    function ge(t) {
      t.getAttribute("data-trucookiecontrol");
      var e,
        n = t.getAttribute("data-src") || "",
        o = t.getAttribute("src") || "";
      o !== n &&
        me(t) &&
        ((e = t).setAttribute("src", n),
        null !== o && e.setAttribute("data-src", o),
        setTimeout(function () {
          te(t, e);
        }, 10));
    }
    function ye(t) {
      var e = {},
        n = t.getAttribute("data-src") || "";
      if (!me(t)) {
        var o = t.getAttribute("src") || "";
        (e = t).setAttribute("src", n),
          e.setAttribute("data-src", o),
          setTimeout(function () {
            te(t, e);
          }, 10);
      }
    }
    var me = function (t) {
      var e = t.getAttribute("src"),
        n = t.getAttribute("data-src");
      return !(e || !n) || !!(null == e ? void 0 : e.includes("placeholder"));
    };
    function be(t) {
      Wt(function () {
        console.log("Call Function: setCategories: ", t);
      });
      var e = Be.getState().cookieObject;
      (0, Be.getState().actions.setCookieObject)(Qt(Qt({}, e), t), !0),
        fe(),
        le();
    }
    function we(t, e) {
      var n =
        !!(2 < arguments.length && void 0 !== arguments[2]) && arguments[2];
      Wt(function () {
        console.log(
          "Function: setCategory (category, newState, send): ",
          t,
          e,
          n
        );
      });
      var o = Be.getState().cookieObject;
      (0, Be.getState().actions.setCookieObject)(
        Qt(Qt({}, o), {}, Xt({}, t, e)),
        !0
      ),
        n && (fe(), le());
    }
    var Ee = function (t, e) {
        var n = document.getElementById(t);
        n && (n.style.display = e);
      },
      Se = function () {
        Ee("custom-panel", "none");
      };
    function ke(t) {
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
    var Te = [
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
    function Oe(t, e) {
      if (void 0 !== t && void 0 !== e)
        return (
          Object.keys(e).forEach(function (n) {
            t[n] = e[n];
          }),
          t
        );
    }
    var Ce = (function (t) {
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
    function xe(t) {
      return (
        (xe =
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
        xe(t)
      );
    }
    function Ae(t, e) {
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
    function Le(t) {
      for (var e, n = 1; n < arguments.length; n++)
        (e = null == arguments[n] ? {} : arguments[n]),
          n % 2
            ? Ae(Object(e), !0).forEach(function (n) {
                Pe(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : Ae(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              });
      return t;
    }
    function Pe(t, e, n) {
      return (
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" !== xe(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(t, "string");
              if ("object" !== xe(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" === xe(e) ? e : e + "";
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
    function Ne() {
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
            return l && "object" == xe(l) && g.call(l, "__await")
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
          if ("executing" == r) throw new Error("Generator is already running");
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
              if (((r = o.done ? "completed" : "suspendedYield"), l.arg === S))
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
          return (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), S;
        var a = i.arg;
        return a
          ? a.done
            ? ((e[t.resultName] = a.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
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
      function _(t) {
        if (t) {
          var e = t[b];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              o = function e() {
                for (; ++n < t.length; )
                  if (g.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (o.next = o);
          }
        }
        return { next: p };
      }
      function p() {
        return { value: void 0, done: !0 };
      }
      Ne = function () {
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
      var T = Object.getPrototypeOf,
        O = T && T(T(_([])));
      O && O !== h && g.call(O, b) && (k = O);
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
        (v.values = _),
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
            for (var n = this, o = this.tryEntries.length - 1; 0 <= o; --o) {
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
                    throw new Error("try statement without catch or finally");
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
              (this.delegate = { iterator: _(t), resultName: e, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              S
            );
          },
        }),
        v
      );
    }
    function je(t, e, n, o, r, i, a) {
      try {
        var c = t[i](a),
          u = c.value;
      } catch (t) {
        return void n(t);
      }
      c.done ? e(u) : Promise.resolve(u).then(o, r);
    }
    function Ie(t) {
      return function () {
        var e = this,
          n = arguments;
        return new Promise(function (o, r) {
          function i(t) {
            je(c, o, r, i, a, "next", t);
          }
          function a(t) {
            je(c, o, r, i, a, "throw", t);
          }
          var c = t.apply(e, n);
          i(void 0);
        });
      };
    }
    function Re(t, e) {
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
            if ("string" == typeof t) return De(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? De(t, e)
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
    function De(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
      return o;
    }
    var Me = (function (t) {
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
    function Ue(t) {
      return 7 < t.length && (t = t.substring(0, t.length - 2)), t;
    }
    var Be,
      He = ["left", "right"],
      Fe = function (t) {
        var e = Object.fromEntries(
          Object.entries(t).map(function (t) {
            var e = Re(t, 2);
            return [e[0], e[1] ? 1 : 0];
          })
        );
        return btoa(JSON.stringify(e));
      },
      Ge = function (t) {
        var e = t ? JSON.parse(atob(t)) : {},
          n = Object.fromEntries(
            Object.entries(e).map(function (t) {
              var e = Re(t, 2);
              return [e[0], !!e[1]];
            })
          );
        return n;
      },
      Ve = function (t) {
        (window.Truendo.catCache = t), (window.Truendo.catCacheInit = !0);
      },
      Ye = function (t, e) {
        return new Promise(function (n) {
          var o = e.custom_url,
            r = e.custom_url_value,
            i = "https://prod-origin.truendo.com";
          o && (i = r);
          var a = Te.includes(e.lang)
              ? e.lang
              : (function () {
                  var t = (function () {
                    var t = document.documentElement.getAttribute("lang"),
                      e = document.documentElement.getAttribute("xml:lang"),
                      n = t || (!!e && e);
                    return !!n && !!Te.includes(n) && n;
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
              .concat("https://cdn-glo.priv.center", "/v2/")
              .concat(e.siteid, "/")
              .concat(e.region, "/")
              .concat(a, ".json"));
          var u = (function () {
            var t = Gt("truendo_data");
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
              var t = Ie(
                Ne().mark(function t(o) {
                  return Ne().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          n(We(e, u, o));
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
                    "https://prod-origin.truendo.com",
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
                    "https://prod-origin.truendo.com",
                    "/region/config"
                  ),
                  { method: "GET" }
                ).then(function (t) {
                  return t.ok ? t.json() : {};
                }),
            ]).then(
              (function () {
                var t = Ie(
                  Ne().mark(function t(o) {
                    var r, i, a;
                    return Ne().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            (r = Re(o, 2)),
                              (i = r[0]),
                              (a = r[1]),
                              1e3 === i.code &&
                                ((i.consentURL = "".concat(
                                  "https://prod-fra.truendo.com",
                                  "/consent/public/save"
                                )),
                                n(We(e, i, a)));
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
      We = function (t, e, n) {
        (e = (function (t, e) {
          var n,
            o = e.country_code,
            r = e.region_code,
            i = r ? "".concat(o, "-").concat(r) : o,
            a =
              null === (n = t.bnr_reg_settings) || void 0 === n ? void 0 : n[i];
          return (
            (t.banner_override = void 0 !== a),
            t.bnr_cfg.bnrType,
            void 0 === a
              ? t
              : Le(
                  Le({}, t),
                  {},
                  { bnr_cfg: Le(Le({}, t.bnr_cfg), {}, { bnrType: a }) }
                )
          );
        })(e, n)),
          (e = (function (t, e) {
            if ("amp" !== e.trutype) return Le(Le({}, t), {}, { isAmp: !1 });
            var n = t.bnr_cfg;
            return (
              (n.bnrType = Ce.BOTTOM),
              Le(
                Le({}, t),
                {},
                { trutype: "amp", isAmp: !0, bnr_cfg: Le({}, n) }
              )
            );
          })(e, t)),
          (e = (function (t, e) {
            if (!e.payId) return Le(Le({}, t), {}, { payId: !1 });
            var n = t.bnr_cfg;
            return (
              (n.bnrType = Ce.PAY),
              Le(Le({}, t), {}, { payId: e.payId, bnr_cfg: Le({}, n) })
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
          _,
          p,
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
          e.bnr_txt && (h = Oe(h, e.bnr_txt)),
          e.pnl_txt && (h = Oe(h, e.pnl_txt)),
          e.tag_txt && (h = Oe(h, e.tag_txt)),
          e.purposedescriptions && (h = Oe(h, e.purposedescriptions)),
          e.categorydescriptions && (h = Oe(h, e.categorydescriptions)),
          (_ = "true" === t.test),
          (o = t.position
            ? He.includes(t.position.toLowerCase().trim())
              ? t.position.toLowerCase().trim()
              : "left"
            : e.settings.panel_position &&
              He.includes(e.settings.panel_position.trim())
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
            ? Ue(e.settings.colortextprimary.trim())
            : "#ffffff"),
          (s = t.secondaryColor
            ? t.secondaryColor.toLowerCase().trim()
            : e.settings.secondary_color
            ? Ue(e.settings.secondary_color.trim())
            : "#121212"),
          (l = t.secondaryTextColor
            ? t.secondaryTextColor.toLowerCase().trim()
            : e.settings.colortextsecondary
            ? Ue(e.settings.colortextsecondary.trim())
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
          (p = !0 === _ ? "" : e.settings.cookie_domain),
          (e.cookieDomain = p),
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
                (function (t, e) {
                  e &&
                    Ft(
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : "sessionStorage"
                    ) &&
                    sessionStorage.setItem(t, e);
                })("truendo_data", JSON.stringify(t));
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
            cookieDomain: p,
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
              btnAltTxtColor: e.bnr_cfg.btnAltTxtColor || e.bnr_cfg.btnTxtColor,
              necessary_button_color:
                e.bnr_cfg.necessary_button_color || e.bnr_cfg.btnColor,
              necessary_button_text_color:
                e.bnr_cfg.necessary_button_text_color || e.bnr_cfg.btnTxtColor,
              bnrBorderRad: "".concat(e.bnr_cfg.bnrBorderRad, "px"),
              bnrBtnRad: "".concat(e.bnr_cfg.bnrBtnRad, "px"),
              showOverlay:
                e.bnr_cfg.bnrType !== Ce.ACCEPTONLY && e.bnr_cfg.showOverlay,
              inherit_font: e.bnr_cfg.inherit_font,
              accessibility_border_color: v,
            },
          }
        );
      },
      Ke = /bot|crawler|spider|crawling|Chrome-Lighthouse/i.test(
        navigator.userAgent
      ),
      qe = function (t) {
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
      ze = function (t) {
        (Be = Rt(function (e, n) {
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
            _,
            p,
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
            T,
            O;
          window.Truendo || (window.Truendo = {});
          var C = document.getElementById("truendoPrivacyPanel");
          if (!C) return {};
          var x = null !== (o = qe("siteid")) && void 0 !== o ? o : "",
            A = null !== (r = qe("region")) && void 0 !== r ? r : "",
            L = null !== (i = qe("lang")) && void 0 !== i ? i : "",
            P = {
              siteid: x,
              region: A,
              custom_url:
                null !== (a = qe("custom_url")) && void 0 !== a ? a : "",
              custom_url_value:
                null !== (c = qe("custom_url_value")) && void 0 !== c ? c : "",
              region_override:
                null !== (u = qe("region_override")) && void 0 !== u ? u : "",
              test: null !== (s = qe("test")) && void 0 !== s ? s : "",
              position: null !== (l = qe("position")) && void 0 !== l ? l : "",
              hideButton:
                null !== (d = qe("hide-button")) && void 0 !== d ? d : "",
              hideLogo: null !== (f = qe("hide-logo")) && void 0 !== f ? f : "",
              primaryColor:
                null !== (_ = qe("primary_color")) && void 0 !== _ ? _ : "",
              primaryTextColor:
                null !== (p = qe("primary-text-color")) && void 0 !== p
                  ? p
                  : "",
              textColor:
                null !== (v = qe("text-color")) && void 0 !== v ? v : "",
              secondaryColor:
                null !== (h = qe("secondary-color")) && void 0 !== h ? h : "",
              secondaryTextColor:
                null !== (g = qe("secondary-text-color")) && void 0 !== g
                  ? g
                  : "",
              cookiesActive:
                null !== (y = qe("cookies-active")) && void 0 !== y ? y : "",
              privacyCenterType:
                null !== (m = qe("privacy-center-type")) && void 0 !== m
                  ? m
                  : "",
              transparency:
                null !== (b = qe("transparency")) && void 0 !== b ? b : "",
              accessibility:
                null !== (w = qe("accessibility")) && void 0 !== w ? w : "",
              accessibilityBorderColor:
                null !== (E = qe("accessibility-border-color")) && void 0 !== E
                  ? E
                  : "",
              trutype: null !== (S = qe("trutype")) && void 0 !== S ? S : "",
              nofont: null !== (k = qe("nofont")) && void 0 !== k ? k : "",
              popupDelay:
                null !== (T = qe("popup-delay")) && void 0 !== T ? T : "",
              payId: null !== (O = qe("pay-id")) && void 0 !== O ? O : "",
              lang: L,
              is_geo: !1,
            },
            N = function (o) {
              e({ config: o });
              var r = ne();
              if (o.data.consent_invalidation_date) {
                var i = new Date(o.data.consent_invalidation_date),
                  a = new Date(r.exp);
                a.setFullYear(a.getFullYear() - 1),
                  a < i &&
                    (Yt("Deleting cookie because of invalidation date"),
                    (function () {
                      var t = Be.getState().config.data;
                      Zt.remove(t.settings.cookie_name || "truendo_cc", {
                        domain: oe(t.settings.cookie_domain),
                        path: "/",
                      });
                    })());
              }
              var c = se();
              e({ cookieObject: ne() }), e({ categoriesAndServices: c });
              var u = ne();
              if (o.data.settings.mode === qt.SERVICE_LEVEL && !u.svc) {
                console.log("i am called"),
                  Wt(function () {
                    console.group(
                      "%c Backfill services into old cookie",
                      "color: pink; font-weight: bold"
                    ),
                      console.log(
                        "categoriesAndServices",
                        n().categoriesAndServices
                      ),
                      console.log("categoryState", n().categoryState),
                      console.log("service data", j(u)),
                      console.groupEnd();
                  });
                var s = j(u);
                console.log("serviceState", s),
                  e({ serviceState: s }),
                  e({ cookieObject: Le(Le({}, u), {}, { svc: Fe(s) }) });
              }
              (function () {
                window.Truendo.cookieSettings ||
                  Object.defineProperty(window.Truendo, "cookieSettings", {
                    get: ne,
                  }),
                  (function () {
                    var t = Be.getState().cookieObject,
                      e = Be.getState().actions.recreateCookieObject,
                      n = Be.getState().config.data,
                      o = (function (t) {
                        var e = ne();
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
                    ee(t) ||
                      (oe(n.settings.cookie_domain) &&
                        Zt.remove(n.settings.cookie_name),
                      r.forEach(function (t) {
                        t !== oe(n.settings.cookie_domain) &&
                          Zt.remove(n.settings.cookie_name, {
                            expires: o,
                            path: "/",
                            domain: t,
                            sameSite: "lax",
                          });
                      }),
                      e());
                  })(),
                  (function () {
                    var t = Be.getState().cookieObject,
                      e = Be.getState().actions.setCookieObject;
                    ee(t) || (void 0 === t.exp && e(t, !0));
                  })();
                var t = Be.getState().cookieObject;
                ee(t) ||
                  (fe(),
                  t.hasOwnProperty("consent_sent") &&
                    "false" === t.consent_sent &&
                    le(),
                  de());
              })(),
                (function () {
                  var t = Be.getState().cookieObject,
                    e = Be.getState().config.data,
                    n = Be.getState().actions.setCookieObject;
                  ee(t) &&
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
              var f = d || o.data.bnr_cfg.bnrType === Ce.ACCEPTONLY,
                _ = 1 === c.length && "necessary" === c[0].cat,
                p = function (t) {
                  Wt(function () {
                    console.log("Autoaccept: ", t);
                  }),
                    ae(t);
                },
                v = n().actions.setAck;
              Ke || _
                ? (Yt(
                    "%c Auto accepting - client is bot or site has no optional cookies",
                    "color: #e31459; font-weight: bold"
                  ),
                  n().cookieObject.ack || (p(!1), v(!0)))
                : l &&
                  (Yt(
                    "%c Auto accepting - GDPR does not apply",
                    "color: #e31459; font-weight: bold"
                  ),
                  n().cookieObject.ack || (p(!0), v(!f)));
            };
          Ye(t, P)
            .then(N)
            .then(function () {
              return e({ initialized: !0 });
            }),
            new MutationObserver(function () {
              return Ye(t, P).then(N);
            }).observe(C, { attributes: !0 });
          var j = function (t) {
              return n().categoriesAndServices.reduce(function (e, n) {
                return Le(
                  Le({}, e),
                  n.services.reduce(function (e, o) {
                    return Le(Le({}, e), {}, Pe({}, o.short_id, t[n.cat]));
                  }, {})
                );
              }, {});
            },
            I = function (t) {
              return n().categoriesAndServices.reduce(function (e, n) {
                return Le(
                  Le({}, e),
                  {},
                  Pe(
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
                  r = Le(Le({}, n().categoryState), {}, Pe({}, t, o));
                e({ categoryState: r, serviceState: j(r) }), Ve(r);
              },
              setCategoryStates: function (t) {
                var o = Le(Le({}, n().categoryState), t);
                e({ categoryState: o, serviceState: j(o) }), Ve(o);
              },
              toggleCategoryState: function (t) {
                var o = Le(
                  Le({}, n().categoryState),
                  {},
                  Pe({}, t, !(t !== Kt.NECESSARY && n().categoryState[t]))
                );
                e({
                  categoryState: o,
                  hasUnsavedChanges: !0,
                  serviceState: j(o),
                }),
                  Ve(o);
              },
              setServiceState: function (t) {
                var o =
                    !!(1 < arguments.length && void 0 !== arguments[1]) &&
                    arguments[1],
                  r = Le(Le({}, n().serviceState), {}, Pe({}, t, o));
                e({ serviceState: r, categoryState: I(r) });
              },
              toggleServiceState: function (t) {
                var o = Le(
                  Le({}, n().serviceState),
                  {},
                  Pe({}, t, !n().serviceState[t])
                );
                e({
                  serviceState: o,
                  hasUnsavedChanges: !0,
                  categoryState: I(o),
                });
              },
              recreateCookieObject: function () {
                var t = n().cookieObject;
                re(Le(Le({}, t), {}, { exp: ie(t) })),
                  e({ categoriesAndServices: se() });
              },
              setCookieObject: function (t, o) {
                var r = n().config,
                  i = r.appMode,
                  a = r.data,
                  c = Le(
                    Le({}, t),
                    {},
                    { exp: ie(t), svc: Fe(n().serviceState) }
                  );
                e({ cookieObject: c }), o && re(c);
                var u = {},
                  s = se();
                if (
                  (s.forEach(function (t) {
                    t.cat === Kt.NECESSARY && (u[t.cat] = !0);
                    var e =
                      n().categoryState[t.cat] ||
                      "active" === t.state ||
                      t.cat === Kt.NECESSARY;
                    u[t.cat] = e;
                  }),
                  e({ categoryState: u, categoriesAndServices: s }),
                  Ve(u),
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
                  o = Le(
                    Le(Le({}, t), {}, { exp: ie(t) }, n().categoryState),
                    {},
                    { svc: Fe(n().serviceState) }
                  );
                e({ cookieObject: o, hasUnsavedChanges: !1 }),
                  re(o),
                  e({ categoriesAndServices: se() });
              },
              setAck: function (t) {
                var e = n().cookieObject;
                e.ack !== t &&
                  n().actions.setCookieObject(
                    Le(Le({}, e), {}, { ack: t }),
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
                    e.cat === Kt.NECESSARY && (t[e.cat] = !0);
                    var r =
                      n().categoryState[e.cat] ||
                      "active" === e.state ||
                      e.cat === Kt.NECESSARY;
                    e.services.forEach(function (t) {
                      o[t.short_id] = t.active;
                    }),
                      (t[e.cat] = r);
                  }),
                    e({ hasSeenBanner: !0, categoryState: t, serviceState: o }),
                    Ve(t);
                },
              },
            },
          };
        })),
          Wt(function () {
            Be.subscribe(function (t) {
              console.groupCollapsed(
                "%c Store updated",
                "color: cyan; font-weight: bold"
              ),
                console.dir(t),
                console.groupEnd();
            });
          });
      },
      $e = Rt(function (t, e) {
        return {
          isMenuOpen: !1,
          isPanelOpen: !1,
          isPanelInitialized: !1,
          currentPage: Me.COOKIE_MANAGER,
          currentPageId: void 0,
          actions: {
            openPage: function (e, n) {
              zt({ name: "tru_page_open", params: { page: e } }),
                t({ currentPage: e, currentPageId: n });
            },
            toggleMenu: function () {
              return t({ isMenuOpen: !e().isMenuOpen });
            },
            openPanel: function (n) {
              return (
                n && e().actions.openPage(n),
                zt({ name: "tru_panel_open" }),
                t({ isPanelOpen: !0, isPanelInitialized: !0 })
              );
            },
            closePanel: function () {
              return zt({ name: "tru_panel_close" }), t({ isPanelOpen: !1 });
            },
          },
        };
      });
    function Je(t) {
      var e;
      null === (e = document.getElementById("truendo_container")) ||
        void 0 === e ||
        e.addEventListener("mouseover", function (e) {
          var n = e.target,
            o = t(n);
          o || (o = (n = n.parentElement) && t(n)), o && Je.show(n, o, !0);
        });
    }
    (Je.show = function (t, e, n) {
      (e = e || {}),
        (
          t.tooltip ||
          (function (t, e) {
            function o() {
              Je.hide(t, !0);
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
      (Je.hide = function (t, e) {
        t.tooltip && t.tooltip.hide(e);
      });
    const Qe = Je;
    function Xe(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
      return o;
    }
    const Ze = function () {
      var t = Be(function (t) {
          return t.cookieObject;
        }).user_id,
        e = Be(function (t) {
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
                if ("string" == typeof t) return Xe(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Xe(t, e)
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
        })(J(!1), 2),
        i = r[0],
        a = r[1],
        c = Z(),
        u = $e(function (t) {
          return t.actions;
        }),
        s = Be(function (t) {
          return t.actions.privacySettings;
        }),
        l = s.setHasSeenBanner,
        d = Be(function (t) {
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
        _ = d.hasUnsavedChanges,
        p = d.cookieObject,
        v = d.config,
        h = (d.categoriesAndServices, d.hasSeenBanner),
        g = (null == p ? void 0 : p.ack) || !1,
        y = et(function (t) {
          "Escape" === t.code && u.closePanel();
        }, []);
      X(function () {
        return (
          document.addEventListener("keyup", y),
          function () {
            return document.removeEventListener("keyup", y);
          }
        );
      }, []);
      var m = function () {
          l(), o(!0);
        },
        b = function () {
          (function () {
            var t =
                !(0 < arguments.length && void 0 !== arguments[0]) ||
                arguments[0],
              e = ke(Be.getState().config.data).reduce(function (t, e) {
                return Qt(Qt({}, t), {}, Xt({}, e.cat, !1));
              }, {});
            Be.getState().actions.setCategoryStates(e), ce(t);
          })(),
            m(),
            zt({ name: "banner_gone" });
        },
        w = function () {
          ae(), m(), zt({ name: "banner_gone" });
        },
        E = function () {
          return Be.getState().categoriesAndServices;
        };
      X(function () {
        Wt(function () {
          console.log("isAmp", v.isAmp),
            console.log("navigator", navigator.cookieEnabled);
        }),
          v.isAmp
            ? a(!0)
            : (!navigator.cookieEnabled && w(), a(navigator.cookieEnabled));
      }, []);
      var S = function () {
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
            ce(),
            o(!0),
            zt({ name: "tru_save_preferences_click" });
        },
        k = function () {
          return document.getElementById("cc-banner");
        },
        T = function () {
          var t = k();
          t && (t.style.display = "none");
        },
        O = et(function () {
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
                  ? (window.Truendo.ack(), window.Truendo.toggleStatistics())
                  : "preferences" === t.data
                  ? (window.Truendo.ack(), window.Truendo.togglePreferences())
                  : "add_features" === t.data
                  ? (window.Truendo.ack(), window.Truendo.addFeatures())
                  : "marketing_social_content" === t.data &&
                    (window.Truendo.ack(),
                    p.hasOwnProperty("marketing") &&
                    p.hasOwnProperty("social_content")
                      ? window.Truendo.toggleMarketingSocialContent()
                      : p.hasOwnProperty("marketing")
                      ? window.Truendo.toggleContent()
                      : p.hasOwnProperty("social_content")
                      ? window.Truendo.toggleMarketing()
                      : window.Truendo.toggleMarketingSocialContent()));
            },
            !1
          );
        }, []);
      X(function () {
        var e;
        return (
          null === (e = c.current) ||
            void 0 === e ||
            e.setAttribute("translate", "no"),
          Qe(function (t) {
            return (
              t &&
              t.classList &&
              t.classList.contains("tru_tooltip") && { grav: "sw" }
            );
          }),
          window.Truendo || (window.Truendo = {}),
          (window.Truendo.openPanel = function () {
            return u.openPanel(Me.COOKIE_MANAGER);
          }),
          (window.Truendo.openPrivacyPanel = function () {
            return u.openPanel(Me.COOKIE_MANAGER);
          }),
          (window.Truendo.openPrivacyPolicy = function () {
            return u.openPanel(Me.POLICY);
          }),
          (window.Truendo.openCookieSettings = function () {
            u.openPanel(Me.COOKIE_MANAGER), T();
          }),
          (window.Truendo.openYourRights = function () {
            return u.openPanel(Me.POLICY);
          }),
          (window.Truendo.openVendors = function () {
            return u.openPanel(Me.VENDORS);
          }),
          (window.Truendo.openGoogleVendors = function () {
            return u.openPanel(Me.GOOGLE_VENDORS);
          }),
          (window.Truendo.acceptAllCookies = w),
          (window.Truendo.acceptNecessaryCookiesOnly = b),
          (window.Truendo.ack = m),
          (window.Truendo.saveSettings = S),
          (window.Truendo.toggleSharing = function () {
            return we(Kt.SOCIAL_SHARING, !0, !0);
          }),
          (window.Truendo.toggleContent = function () {
            return we(Kt.SOCIAL_CONTENT, !0, !0);
          }),
          (window.Truendo.toggleMarketing = function () {
            return we(Kt.MARKETING, !0, !0);
          }),
          (window.Truendo.togglePreferences = function () {
            return we(Kt.PREFERENCES, !0, !0);
          }),
          (window.Truendo.toggleStatistics = function () {
            return we(Kt.STATISTICS, !0, !0);
          }),
          (window.Truendo.addFeatures = function () {
            return we(Kt.ADD_FEATURES, !0, !0);
          }),
          (window.Truendo.toggleMarketingSocialContent = function () {
            return be({ social_content: !0, marketing: !1 });
          }),
          (window.Truendo.toggleCat = function (t) {
            return (function (t) {
              n(t.services[0].cookie_category_id);
            })(t);
          }),
          (window.Truendo.hasUnsavedChanges = function () {
            return _;
          }),
          (window.Truendo.HideCustomPanel = function () {
            return Se();
          }),
          (window.Truendo.ShowCustomPanel = function () {
            Ee("custom-panel", "block");
          }),
          (window.Truendo.HideCustomButton = function () {
            Ee("custom-panel-button", "none");
          }),
          (window.Truendo.ShowCustomButton = function () {
            Ee("custom-panel-button", "block");
          }),
          (window.Truendo.SaveSettingsClosePanel = function () {
            return (function (t) {
              t(), Se();
            })(S);
          }),
          (window.Truendo.acceptAllClosePanel = function () {
            return (function (t) {
              t(), Se();
            })(w);
          }),
          (window.Truendo.necClosePanel = function () {
            return (function (t) {
              t(), Se();
            })(b);
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
            return be({ social_content: t, marketing: !1 });
          }),
          (window.Truendo.runUnblockService = fe),
          (window.Truendo.getCatsAndServices = E),
          (window.Truendo.privacyID = function () {
            var t;
            return null === (t = Be.getState().cookieObject) || void 0 === t
              ? void 0
              : t.user_id;
          }),
          (window.Truendo.cookiePolicy = function () {
            return v.data.settings.cookie_policy_link;
          }),
          (window.Truendo.privacyPolicy = function () {
            return v.data.settings.privacy_policy_link;
          }),
          O(),
          function () {
            window.TruendoOpenPanel = function () {};
          }
        );
      }, []);
      var C = v.cookiesActive,
        x = v.bannerConfig,
        A = v.data.auto_accept && v.data.auto_accept_notify;
      g && !h && f && l(),
        X(
          function () {
            g && u.openPanel();
          },
          [v, g]
        );
      var L = !!window.suppress_truendo && window.suppress_truendo,
        P = i && !L && !h && !g && C,
        N = P && (x.bnrType !== Ce.CUSTOM || A);
      return (
        X(
          function () {
            N ||
              (P
                ? (function () {
                    var t = k();
                    t && (t.style.display = "block");
                  })()
                : T());
          },
          [P, N]
        ),
        N && zt({ name: "banner_showing" }),
        X(function () {
          !(function () {
            switch (
              new URLSearchParams(window.location.search).get("truendo_open")
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
    function tn(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
      return o;
    }
    const en = function () {
      var t = (function (t) {
          var e = $(M++, 10),
            n = J();
          return (
            (e.__ = function (t) {
              console.groupCollapsed("TRUENDO PRIVACY CENTER ERROR"),
                console.error(t),
                console.groupEnd();
            }),
            U.componentDidCatch ||
              (U.componentDidCatch = function (t, o) {
                e.__ && e.__(t, o), n[1](t);
              }),
            [
              n[0],
              function () {
                n[1](void 0);
              },
            ]
          );
        })(),
        e = (function (t, e) {
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
                if ("string" == typeof t) return tn(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? tn(t, e)
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
        })(t, 1)[0],
        n = Be(function (t) {
          return null == t ? void 0 : t.config;
        });
      return !n || e ? null : p(Ze, null);
    };
    function nn() {
      if ((ze(!1), void 0 === window.TruendoLoaded)) {
        window.TruendoLoaded = !0;
        var n = document.body.appendChild(document.createElement("div"));
        (function (n, o, r) {
          var i, a, c;
          e.__ && e.__(n, o),
            (a = (i = "function" == typeof r) ? null : (r && r.__k) || o.__k),
            (c = []),
            P(
              o,
              (n = ((!i && r) || o).__k = p(h, null, [n])),
              a || u,
              u,
              void 0 !== o.ownerSVGElement,
              !i && r
                ? [r]
                : a
                ? null
                : o.firstChild
                ? t.call(o.childNodes)
                : null,
              c,
              !i && r ? r : a ? a.__e : o.firstChild,
              i
            ),
            N(c, n);
        })(p(en), n),
          zt({ name: "tru_loaded" });
      }
    }
    n(5202),
      "loading" === document.readyState
        ? document.addEventListener("DOMContentLoaded", nn)
        : nn();
  })();
})();
