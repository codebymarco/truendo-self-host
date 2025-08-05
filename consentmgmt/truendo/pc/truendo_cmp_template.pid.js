/*! For license information please see truendo_cmp_template.pid.js.LICENSE.txt */
(() => {
  var t = {
      "./node_modules/isomorphic-fetch/fetch-npm-browserify.js": (t, e, n) => {
        n("./node_modules/whatwg-fetch/fetch.js"),
          (t.exports = self.fetch.bind(self));
      },
      "./node_modules/process/browser.js": (t) => {
        var e,
          n,
          r = (t.exports = {});
        function o() {
          throw new Error("setTimeout has not been defined");
        }
        function i() {
          throw new Error("clearTimeout has not been defined");
        }
        function a(t) {
          if (e === setTimeout) return setTimeout(t, 0);
          if ((e === o || !e) && setTimeout)
            return (e = setTimeout), setTimeout(t, 0);
          try {
            return e(t, 0);
          } catch (n) {
            try {
              return e.call(null, t, 0);
            } catch (n) {
              return e.call(this, t, 0);
            }
          }
        }
        !(function () {
          try {
            e = "function" == typeof setTimeout ? setTimeout : o;
          } catch (t) {
            e = o;
          }
          try {
            n = "function" == typeof clearTimeout ? clearTimeout : i;
          } catch (t) {
            n = i;
          }
        })();
        var s,
          c = [],
          u = !1,
          l = -1;
        function d() {
          u &&
            s &&
            ((u = !1),
            s.length ? (c = s.concat(c)) : (l = -1),
            c.length && f());
        }
        function f() {
          if (!u) {
            var t = a(d);
            u = !0;
            for (var e = c.length; e; ) {
              for (s = c, c = []; ++l < e; ) s && s[l].run();
              (l = -1), (e = c.length);
            }
            (s = null),
              (u = !1),
              (function (t) {
                if (n === clearTimeout) return clearTimeout(t);
                if ((n === i || !n) && clearTimeout)
                  return (n = clearTimeout), clearTimeout(t);
                try {
                  return n(t);
                } catch (e) {
                  try {
                    return n.call(null, t);
                  } catch (e) {
                    return n.call(this, t);
                  }
                }
              })(t);
          }
        }
        function h(t, e) {
          (this.fun = t), (this.array = e);
        }
        function p() {}
        (r.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          c.push(new h(t, e)), 1 !== c.length || u || a(f);
        }),
          (h.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (r.title = "browser"),
          (r.browser = !0),
          (r.env = {}),
          (r.argv = []),
          (r.version = ""),
          (r.versions = {}),
          (r.on = p),
          (r.addListener = p),
          (r.once = p),
          (r.off = p),
          (r.removeListener = p),
          (r.removeAllListeners = p),
          (r.emit = p),
          (r.prependListener = p),
          (r.prependOnceListener = p),
          (r.listeners = function (t) {
            return [];
          }),
          (r.binding = function (t) {
            throw new Error("process.binding is not supported");
          }),
          (r.cwd = function () {
            return "/";
          }),
          (r.chdir = function (t) {
            throw new Error("process.chdir is not supported");
          }),
          (r.umask = function () {
            return 0;
          });
      },
      "./node_modules/regenerator-runtime/runtime.js": (t) => {
        var e = (function (t) {
          "use strict";
          var e,
            n = Object.prototype,
            r = n.hasOwnProperty,
            o =
              Object.defineProperty ||
              function (t, e, n) {
                t[e] = n.value;
              },
            i = "function" == typeof Symbol ? Symbol : {},
            a = i.iterator || "@@iterator",
            s = i.asyncIterator || "@@asyncIterator",
            c = i.toStringTag || "@@toStringTag";
          function u(t, e, n) {
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
            u({}, "");
          } catch (t) {
            u = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function l(t, e, n, r) {
            var i = e && e.prototype instanceof v ? e : v,
              a = Object.create(i.prototype),
              s = new P(r || []);
            return o(a, "_invoke", { value: S(t, n, s) }), a;
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
            h = "suspendedYield",
            p = "executing",
            y = "completed",
            g = {};
          function v() {}
          function m() {}
          function b() {}
          var w = {};
          u(w, a, function () {
            return this;
          });
          var _ = Object.getPrototypeOf,
            E = _ && _(_(C([])));
          E && E !== n && r.call(E, a) && (w = E);
          var A = (b.prototype = v.prototype = Object.create(w));
          function T(t) {
            ["next", "throw", "return"].forEach(function (e) {
              u(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function x(t, e) {
            function n(o, i, a, s) {
              var c = d(t[o], t, i);
              if ("throw" !== c.type) {
                var u = c.arg,
                  l = u.value;
                return l && "object" == typeof l && r.call(l, "__await")
                  ? e.resolve(l.__await).then(
                      function (t) {
                        n("next", t, a, s);
                      },
                      function (t) {
                        n("throw", t, a, s);
                      }
                    )
                  : e.resolve(l).then(
                      function (t) {
                        (u.value = t), a(u);
                      },
                      function (t) {
                        return n("throw", t, a, s);
                      }
                    );
              }
              s(c.arg);
            }
            var i;
            o(this, "_invoke", {
              value: function (t, r) {
                function o() {
                  return new e(function (e, o) {
                    n(t, r, e, o);
                  });
                }
                return (i = i ? i.then(o, o) : o());
              },
            });
          }
          function S(t, e, n) {
            var r = f;
            return function (o, i) {
              if (r === p) throw new Error("Generator is already running");
              if (r === y) {
                if ("throw" === o) throw i;
                return k();
              }
              for (n.method = o, n.arg = i; ; ) {
                var a = n.delegate;
                if (a) {
                  var s = L(a, n);
                  if (s) {
                    if (s === g) continue;
                    return s;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (r === f) throw ((r = y), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = p;
                var c = d(t, e, n);
                if ("normal" === c.type) {
                  if (((r = n.done ? y : h), c.arg === g)) continue;
                  return { value: c.arg, done: n.done };
                }
                "throw" === c.type &&
                  ((r = y), (n.method = "throw"), (n.arg = c.arg));
              }
            };
          }
          function L(t, n) {
            var r = n.method,
              o = t.iterator[r];
            if (o === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  L(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                g
              );
            var i = d(o, t.iterator, n.arg);
            if ("throw" === i.type)
              return (
                (n.method = "throw"), (n.arg = i.arg), (n.delegate = null), g
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((n[t.resultName] = a.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  g)
                : a
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                g);
          }
          function O(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function j(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function P(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(O, this),
              this.reset(!0);
          }
          function C(t) {
            if (t) {
              var n = t[a];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var o = -1,
                  i = function n() {
                    for (; ++o < t.length; )
                      if (r.call(t, o))
                        return (n.value = t[o]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (i.next = i);
              }
            }
            return { next: k };
          }
          function k() {
            return { value: e, done: !0 };
          }
          return (
            (m.prototype = b),
            o(A, "constructor", { value: b, configurable: !0 }),
            o(b, "constructor", { value: m, configurable: !0 }),
            (m.displayName = u(b, c, "GeneratorFunction")),
            (t.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === m || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (t.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, b)
                  : ((t.__proto__ = b), u(t, c, "GeneratorFunction")),
                (t.prototype = Object.create(A)),
                t
              );
            }),
            (t.awrap = function (t) {
              return { __await: t };
            }),
            T(x.prototype),
            u(x.prototype, s, function () {
              return this;
            }),
            (t.AsyncIterator = x),
            (t.async = function (e, n, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new x(l(e, n, r, o), i);
              return t.isGeneratorFunction(n)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            T(A),
            u(A, c, "Generator"),
            u(A, a, function () {
              return this;
            }),
            u(A, "toString", function () {
              return "[object Generator]";
            }),
            (t.keys = function (t) {
              var e = Object(t),
                n = [];
              for (var r in e) n.push(r);
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in e) return (t.value = r), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (t.values = C),
            (P.prototype = {
              constructor: P,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(j),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      r.call(this, n) &&
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
                function o(r, o) {
                  return (
                    (s.type = "throw"),
                    (s.arg = t),
                    (n.next = r),
                    o && ((n.method = "next"), (n.arg = e)),
                    !!o
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    s = a.completion;
                  if ("root" === a.tryLoc) return o("end");
                  if (a.tryLoc <= this.prev) {
                    var c = r.call(a, "catchLoc"),
                      u = r.call(a, "finallyLoc");
                    if (c && u) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    } else if (c) {
                      if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var o = this.tryEntries[n];
                  if (
                    o.tryLoc <= this.prev &&
                    r.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var i = o;
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
                    ? ((this.method = "next"), (this.next = i.finallyLoc), g)
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
                  g
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), j(n), g;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var o = r.arg;
                      j(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: C(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  g
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
      "./node_modules/url-search-params-polyfill/index.js": function (t, e, n) {
        !(function (t) {
          "use strict";
          var e,
            n = (function () {
              try {
                if (
                  t.URLSearchParams &&
                  "bar" === new t.URLSearchParams("foo=bar").get("foo")
                )
                  return t.URLSearchParams;
              } catch (t) {}
              return null;
            })(),
            r = n && "a=1" === new n({ a: 1 }).toString(),
            o = n && "+" === new n("s=%2B").get("s"),
            i = "__URLSearchParams__",
            a =
              !n ||
              ((e = new n()).append("s", " &"), "s=+%26" === e.toString()),
            s = d.prototype,
            c = !(!t.Symbol || !t.Symbol.iterator);
          if (!(n && r && o && a)) {
            var u;
            (s.append = function (t, e) {
              g(this[i], t, e);
            }),
              (s.delete = function (t) {
                delete this[i][t];
              }),
              (s.get = function (t) {
                var e = this[i];
                return this.has(t) ? e[t][0] : null;
              }),
              (s.getAll = function (t) {
                var e = this[i];
                return this.has(t) ? e[t].slice(0) : [];
              }),
              (s.has = function (t) {
                return m(this[i], t);
              }),
              (s.set = function (t, e) {
                this[i][t] = ["" + e];
              }),
              (s.toString = function () {
                var t,
                  e,
                  n,
                  r,
                  o = this[i],
                  a = [];
                for (e in o)
                  for (n = f(e), t = 0, r = o[e]; t < r.length; t++)
                    a.push(n + "=" + f(r[t]));
                return a.join("&");
              }),
              o && n && !r && t.Proxy
                ? ((u = new Proxy(n, {
                    construct: function (t, e) {
                      return new t(new d(e[0]).toString());
                    },
                  })).toString = Function.prototype.toString.bind(d))
                : (u = d),
              Object.defineProperty(t, "URLSearchParams", { value: u });
            var l = t.URLSearchParams.prototype;
            (l.polyfill = !0),
              (l.forEach =
                l.forEach ||
                function (t, e) {
                  var n = y(this.toString());
                  Object.getOwnPropertyNames(n).forEach(function (r) {
                    n[r].forEach(function (n) {
                      t.call(e, n, r, this);
                    }, this);
                  }, this);
                }),
              (l.sort =
                l.sort ||
                function () {
                  var t,
                    e,
                    n,
                    r = y(this.toString()),
                    o = [];
                  for (t in r) o.push(t);
                  for (o.sort(), e = 0; e < o.length; e++) this.delete(o[e]);
                  for (e = 0; e < o.length; e++) {
                    var i = o[e],
                      a = r[i];
                    for (n = 0; n < a.length; n++) this.append(i, a[n]);
                  }
                }),
              (l.keys =
                l.keys ||
                function () {
                  var t = [];
                  return (
                    this.forEach(function (e, n) {
                      t.push(n);
                    }),
                    p(t)
                  );
                }),
              (l.values =
                l.values ||
                function () {
                  var t = [];
                  return (
                    this.forEach(function (e) {
                      t.push(e);
                    }),
                    p(t)
                  );
                }),
              (l.entries =
                l.entries ||
                function () {
                  var t = [];
                  return (
                    this.forEach(function (e, n) {
                      t.push([n, e]);
                    }),
                    p(t)
                  );
                }),
              c && (l[t.Symbol.iterator] = l[t.Symbol.iterator] || l.entries);
          }
          function d(t) {
            ((t = t || "") instanceof URLSearchParams || t instanceof d) &&
              (t = t.toString()),
              (this[i] = y(t));
          }
          function f(t) {
            var e = {
              "!": "%21",
              "'": "%27",
              "(": "%28",
              ")": "%29",
              "~": "%7E",
              "%20": "+",
              "%00": "\0",
            };
            return encodeURIComponent(t).replace(
              /[!'\(\)~]|%20|%00/g,
              function (t) {
                return e[t];
              }
            );
          }
          function h(t) {
            return t
              .replace(/[ +]/g, "%20")
              .replace(/(%[a-f0-9]{2})+/gi, function (t) {
                return decodeURIComponent(t);
              });
          }
          function p(e) {
            var n = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              },
            };
            return (
              c &&
                (n[t.Symbol.iterator] = function () {
                  return n;
                }),
              n
            );
          }
          function y(t) {
            var e = {};
            if ("object" == typeof t)
              if (v(t))
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  if (!v(r) || 2 !== r.length)
                    throw new TypeError(
                      "Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements"
                    );
                  g(e, r[0], r[1]);
                }
              else for (var o in t) t.hasOwnProperty(o) && g(e, o, t[o]);
            else {
              0 === t.indexOf("?") && (t = t.slice(1));
              for (var i = t.split("&"), a = 0; a < i.length; a++) {
                var s = i[a],
                  c = s.indexOf("=");
                -1 < c
                  ? g(e, h(s.slice(0, c)), h(s.slice(c + 1)))
                  : s && g(e, h(s), "");
              }
            }
            return e;
          }
          function g(t, e, n) {
            var r =
              "string" == typeof n
                ? n
                : null != n && "function" == typeof n.toString
                ? n.toString()
                : JSON.stringify(n);
            m(t, e) ? t[e].push(r) : (t[e] = [r]);
          }
          function v(t) {
            return (
              !!t && "[object Array]" === Object.prototype.toString.call(t)
            );
          }
          function m(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }
        })(void 0 !== n.g ? n.g : "undefined" != typeof window ? window : this);
      },
      "./node_modules/whatwg-fetch/fetch.js": (t, e, n) => {
        "use strict";
        n.r(e),
          n.d(e, {
            DOMException: () => _,
            Headers: () => l,
            Request: () => v,
            Response: () => b,
            fetch: () => E,
          });
        var r =
            ("undefined" != typeof globalThis && globalThis) ||
            ("undefined" != typeof self && self) ||
            (void 0 !== r && r),
          o = {
            searchParams: "URLSearchParams" in r,
            iterable: "Symbol" in r && "iterator" in Symbol,
            blob:
              "FileReader" in r &&
              "Blob" in r &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (t) {
                  return !1;
                }
              })(),
            formData: "FormData" in r,
            arrayBuffer: "ArrayBuffer" in r,
          };
        if (o.arrayBuffer)
          var i = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ],
            a =
              ArrayBuffer.isView ||
              function (t) {
                return t && i.indexOf(Object.prototype.toString.call(t)) > -1;
              };
        function s(t) {
          if (
            ("string" != typeof t && (t = String(t)),
            /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t)
          )
            throw new TypeError(
              'Invalid character in header field name: "' + t + '"'
            );
          return t.toLowerCase();
        }
        function c(t) {
          return "string" != typeof t && (t = String(t)), t;
        }
        function u(t) {
          var e = {
            next: function () {
              var e = t.shift();
              return { done: void 0 === e, value: e };
            },
          };
          return (
            o.iterable &&
              (e[Symbol.iterator] = function () {
                return e;
              }),
            e
          );
        }
        function l(t) {
          (this.map = {}),
            t instanceof l
              ? t.forEach(function (t, e) {
                  this.append(e, t);
                }, this)
              : Array.isArray(t)
              ? t.forEach(function (t) {
                  this.append(t[0], t[1]);
                }, this)
              : t &&
                Object.getOwnPropertyNames(t).forEach(function (e) {
                  this.append(e, t[e]);
                }, this);
        }
        function d(t) {
          if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
          t.bodyUsed = !0;
        }
        function f(t) {
          return new Promise(function (e, n) {
            (t.onload = function () {
              e(t.result);
            }),
              (t.onerror = function () {
                n(t.error);
              });
          });
        }
        function h(t) {
          var e = new FileReader(),
            n = f(e);
          return e.readAsArrayBuffer(t), n;
        }
        function p(t) {
          if (t.slice) return t.slice(0);
          var e = new Uint8Array(t.byteLength);
          return e.set(new Uint8Array(t)), e.buffer;
        }
        function y() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (t) {
              var e;
              (this.bodyUsed = this.bodyUsed),
                (this._bodyInit = t),
                t
                  ? "string" == typeof t
                    ? (this._bodyText = t)
                    : o.blob && Blob.prototype.isPrototypeOf(t)
                    ? (this._bodyBlob = t)
                    : o.formData && FormData.prototype.isPrototypeOf(t)
                    ? (this._bodyFormData = t)
                    : o.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(t)
                    ? (this._bodyText = t.toString())
                    : o.arrayBuffer &&
                      o.blob &&
                      (e = t) &&
                      DataView.prototype.isPrototypeOf(e)
                    ? ((this._bodyArrayBuffer = p(t.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : o.arrayBuffer &&
                      (ArrayBuffer.prototype.isPrototypeOf(t) || a(t))
                    ? (this._bodyArrayBuffer = p(t))
                    : (this._bodyText = t = Object.prototype.toString.call(t))
                  : (this._bodyText = ""),
                this.headers.get("content-type") ||
                  ("string" == typeof t
                    ? this.headers.set(
                        "content-type",
                        "text/plain;charset=UTF-8"
                      )
                    : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set("content-type", this._bodyBlob.type)
                    : o.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(t) &&
                      this.headers.set(
                        "content-type",
                        "application/x-www-form-urlencoded;charset=UTF-8"
                      ));
            }),
            o.blob &&
              ((this.blob = function () {
                var t = d(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]));
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? d(this) ||
                      (ArrayBuffer.isView(this._bodyArrayBuffer)
                        ? Promise.resolve(
                            this._bodyArrayBuffer.buffer.slice(
                              this._bodyArrayBuffer.byteOffset,
                              this._bodyArrayBuffer.byteOffset +
                                this._bodyArrayBuffer.byteLength
                            )
                          )
                        : Promise.resolve(this._bodyArrayBuffer))
                  : this.blob().then(h);
              })),
            (this.text = function () {
              var t,
                e,
                n,
                r = d(this);
              if (r) return r;
              if (this._bodyBlob)
                return (
                  (t = this._bodyBlob),
                  (n = f((e = new FileReader()))),
                  e.readAsText(t),
                  n
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (t) {
                    for (
                      var e = new Uint8Array(t), n = new Array(e.length), r = 0;
                      r < e.length;
                      r++
                    )
                      n[r] = String.fromCharCode(e[r]);
                    return n.join("");
                  })(this._bodyArrayBuffer)
                );
              if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText);
            }),
            o.formData &&
              (this.formData = function () {
                return this.text().then(m);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        (l.prototype.append = function (t, e) {
          (t = s(t)), (e = c(e));
          var n = this.map[t];
          this.map[t] = n ? n + ", " + e : e;
        }),
          (l.prototype.delete = function (t) {
            delete this.map[s(t)];
          }),
          (l.prototype.get = function (t) {
            return (t = s(t)), this.has(t) ? this.map[t] : null;
          }),
          (l.prototype.has = function (t) {
            return this.map.hasOwnProperty(s(t));
          }),
          (l.prototype.set = function (t, e) {
            this.map[s(t)] = c(e);
          }),
          (l.prototype.forEach = function (t, e) {
            for (var n in this.map)
              this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this);
          }),
          (l.prototype.keys = function () {
            var t = [];
            return (
              this.forEach(function (e, n) {
                t.push(n);
              }),
              u(t)
            );
          }),
          (l.prototype.values = function () {
            var t = [];
            return (
              this.forEach(function (e) {
                t.push(e);
              }),
              u(t)
            );
          }),
          (l.prototype.entries = function () {
            var t = [];
            return (
              this.forEach(function (e, n) {
                t.push([n, e]);
              }),
              u(t)
            );
          }),
          o.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries);
        var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function v(t, e) {
          if (!(this instanceof v))
            throw new TypeError(
              'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
            );
          var n,
            r,
            o = (e = e || {}).body;
          if (t instanceof v) {
            if (t.bodyUsed) throw new TypeError("Already read");
            (this.url = t.url),
              (this.credentials = t.credentials),
              e.headers || (this.headers = new l(t.headers)),
              (this.method = t.method),
              (this.mode = t.mode),
              (this.signal = t.signal),
              o ||
                null == t._bodyInit ||
                ((o = t._bodyInit), (t.bodyUsed = !0));
          } else this.url = String(t);
          if (
            ((this.credentials =
              e.credentials || this.credentials || "same-origin"),
            (!e.headers && this.headers) || (this.headers = new l(e.headers)),
            (this.method =
              ((r = (n = e.method || this.method || "GET").toUpperCase()),
              g.indexOf(r) > -1 ? r : n)),
            (this.mode = e.mode || this.mode || null),
            (this.signal = e.signal || this.signal),
            (this.referrer = null),
            ("GET" === this.method || "HEAD" === this.method) && o)
          )
            throw new TypeError("Body not allowed for GET or HEAD requests");
          if (
            (this._initBody(o),
            !(
              ("GET" !== this.method && "HEAD" !== this.method) ||
              ("no-store" !== e.cache && "no-cache" !== e.cache)
            ))
          ) {
            var i = /([?&])_=[^&]*/;
            i.test(this.url)
              ? (this.url = this.url.replace(i, "$1_=" + new Date().getTime()))
              : (this.url +=
                  (/\?/.test(this.url) ? "&" : "?") +
                  "_=" +
                  new Date().getTime());
          }
        }
        function m(t) {
          var e = new FormData();
          return (
            t
              .trim()
              .split("&")
              .forEach(function (t) {
                if (t) {
                  var n = t.split("="),
                    r = n.shift().replace(/\+/g, " "),
                    o = n.join("=").replace(/\+/g, " ");
                  e.append(decodeURIComponent(r), decodeURIComponent(o));
                }
              }),
            e
          );
        }
        function b(t, e) {
          if (!(this instanceof b))
            throw new TypeError(
              'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
            );
          e || (e = {}),
            (this.type = "default"),
            (this.status = void 0 === e.status ? 200 : e.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText =
              void 0 === e.statusText ? "" : "" + e.statusText),
            (this.headers = new l(e.headers)),
            (this.url = e.url || ""),
            this._initBody(t);
        }
        (v.prototype.clone = function () {
          return new v(this, { body: this._bodyInit });
        }),
          y.call(v.prototype),
          y.call(b.prototype),
          (b.prototype.clone = function () {
            return new b(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new l(this.headers),
              url: this.url,
            });
          }),
          (b.error = function () {
            var t = new b(null, { status: 0, statusText: "" });
            return (t.type = "error"), t;
          });
        var w = [301, 302, 303, 307, 308];
        b.redirect = function (t, e) {
          if (-1 === w.indexOf(e)) throw new RangeError("Invalid status code");
          return new b(null, { status: e, headers: { location: t } });
        };
        var _ = r.DOMException;
        try {
          new _();
        } catch (t) {
          ((_ = function (t, e) {
            (this.message = t), (this.name = e);
            var n = Error(t);
            this.stack = n.stack;
          }).prototype = Object.create(Error.prototype)),
            (_.prototype.constructor = _);
        }
        function E(t, e) {
          return new Promise(function (n, i) {
            var a = new v(t, e);
            if (a.signal && a.signal.aborted)
              return i(new _("Aborted", "AbortError"));
            var s = new XMLHttpRequest();
            function u() {
              s.abort();
            }
            (s.onload = function () {
              var t,
                e,
                r = {
                  status: s.status,
                  statusText: s.statusText,
                  headers:
                    ((t = s.getAllResponseHeaders() || ""),
                    (e = new l()),
                    t
                      .replace(/\r?\n[\t ]+/g, " ")
                      .split("\r")
                      .map(function (t) {
                        return 0 === t.indexOf("\n")
                          ? t.substr(1, t.length)
                          : t;
                      })
                      .forEach(function (t) {
                        var n = t.split(":"),
                          r = n.shift().trim();
                        if (r) {
                          var o = n.join(":").trim();
                          e.append(r, o);
                        }
                      }),
                    e),
                };
              r.url =
                "responseURL" in s
                  ? s.responseURL
                  : r.headers.get("X-Request-URL");
              var o = "response" in s ? s.response : s.responseText;
              setTimeout(function () {
                n(new b(o, r));
              }, 0);
            }),
              (s.onerror = function () {
                setTimeout(function () {
                  i(new TypeError("Network request failed"));
                }, 0);
              }),
              (s.ontimeout = function () {
                setTimeout(function () {
                  i(new TypeError("Network request failed"));
                }, 0);
              }),
              (s.onabort = function () {
                setTimeout(function () {
                  i(new _("Aborted", "AbortError"));
                }, 0);
              }),
              s.open(
                a.method,
                (function (t) {
                  try {
                    return "" === t && r.location.href ? r.location.href : t;
                  } catch (e) {
                    return t;
                  }
                })(a.url),
                !0
              ),
              "include" === a.credentials
                ? (s.withCredentials = !0)
                : "omit" === a.credentials && (s.withCredentials = !1),
              "responseType" in s &&
                (o.blob
                  ? (s.responseType = "blob")
                  : o.arrayBuffer &&
                    a.headers.get("Content-Type") &&
                    -1 !==
                      a.headers
                        .get("Content-Type")
                        .indexOf("application/octet-stream") &&
                    (s.responseType = "arraybuffer")),
              !e || "object" != typeof e.headers || e.headers instanceof l
                ? a.headers.forEach(function (t, e) {
                    s.setRequestHeader(e, t);
                  })
                : Object.getOwnPropertyNames(e.headers).forEach(function (t) {
                    s.setRequestHeader(t, c(e.headers[t]));
                  }),
              a.signal &&
                (a.signal.addEventListener("abort", u),
                (s.onreadystatechange = function () {
                  4 === s.readyState &&
                    a.signal.removeEventListener("abort", u);
                })),
              s.send(void 0 === a._bodyInit ? null : a._bodyInit);
          });
        }
        (E.polyfill = !0),
          r.fetch ||
            ((r.fetch = E), (r.Headers = l), (r.Request = v), (r.Response = b));
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { exports: {} });
    return t[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.d = (t, e) => {
    for (var r in e)
      n.o(e, r) &&
        !n.o(t, r) &&
        Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
  }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    });
  var r = {};
  (() => {
    "use strict";
    n.r(r),
      n.d(r, {
        getSiteId: () => g,
        getTruAttributeByName: () => y,
        observerCallBack: () => W,
        setRulesToSessionStorage: () => C,
        setTruendoSettings: () => j,
        setUpMutationObserver: () => R,
      }),
      n("./node_modules/url-search-params-polyfill/index.js"),
      n("./node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
      n("./node_modules/regenerator-runtime/runtime.js");
    var t = function (t, e) {
      e &&
        (function () {
          var t,
            e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "sessionStorage";
          try {
            t = window[e];
            var n = "__storage_test__";
            return t.setItem(n, n), t.removeItem(n), !0;
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
        })(
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "sessionStorage"
        ) &&
        sessionStorage.setItem(t, e);
    };
    var e,
      o,
      i,
      a,
      s,
      c,
      u,
      l,
      d,
      f,
      h = [
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
      ],
      p = n("./node_modules/process/browser.js"),
      y = function (t) {
        var e,
          n,
          r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : document,
          o = window.TruSettings
            ? window.TruSettings[t.replaceAll("-", "_")]
            : "";
        return (
          (o && "" !== o) ||
            (o =
              null !==
                (e =
                  null === (n = r.getElementById("truendoAutoBlock")) ||
                  void 0 === n
                    ? void 0
                    : n.getAttribute("data-".concat(t))) && void 0 !== e
                ? e
                : ""),
          o
        );
      },
      g = function (t) {
        return y("siteid", t);
      },
      v = (g(document), y("nofont")),
      m = null !== (e = y("transparency")) && void 0 !== e ? e : "",
      b = null !== (o = y("accessibility")) && void 0 !== o ? o : "",
      w =
        null !== (i = y("accessibility-border-color")) && void 0 !== i ? i : "",
      _ = null !== (a = y("trutype")) && void 0 !== a ? a : "",
      E = (y("lang"), null !== (s = y("popup-delay")) && void 0 !== s ? s : ""),
      A = null !== (c = y("pay-id")) && void 0 !== c ? c : "",
      T = null !== (u = y("autoblocking-disabled")) && void 0 !== u && u,
      x = null !== (l = y("is-consent-mode")) && void 0 !== l && l,
      S = null !== (d = y("custom_url")) && void 0 !== d && d,
      L = null !== (f = y("custom_url_value")) && void 0 !== f ? f : "";
    x &&
      (window.truConsentListeners || (window.truConsentListeners = []),
      window.addEventListener("TruendoCookieControl", function (t) {
        var e;
        null === (e = window.truConsentListeners) ||
          void 0 === e ||
          e.forEach(function (e) {
            void 0 !== e && e(t.detail);
          });
      }));
    var O = void 0,
      j = function (t) {},
      P = function () {
        return window.Truendo && window.Truendo.catCache
          ? window.Truendo.catCache
          : null;
      },
      C = function (e) {
        t("tru-rules", JSON.stringify(e));
      },
      k = function () {
        if (void 0 !== O) return O;
        var t =
            '{"default_lang":"en","region":"default","sup_langs":null,"svc_names":{"google_youtube":"YouTube","gravitec":"Gravitec","matomo_analytics":"Matomo Analytics"},"cke":"truendo_cmp","autoblock":true,"mode":2,"tags":[{"tagName":"script","rules":[{"filters":[{"attr":"src","value":"matomo.js","eval":"contains"}],"actions":[{"replaceAttr":[{"type":"text/plain"}],"addAttr":[{"data-trucookiecontrol":"statistics","data-trusvccontrol":"matomo_analytics"}]}]},{"filters":[{"attr":"src","value":"gravitec.net","eval":"contains"}],"actions":[{"replaceAttr":[{"type":"text/plain"}],"addAttr":[{"data-trucookiecontrol":"add_features","data-trusvccontrol":"gravitec"}]}]}]},{"tagName":"iframe","rules":[{"filters":[{"attr":"src","value":"youtube.com/embed","eval":"contains"}],"actions":[{"addAttr":[{"data-trucookiecontrol":"social_content","data-trusvccontrol":"google_youtube"}]}]}]}],"ph_styling":{"font_color":"#2d3c55","bg_color":"#fff","btn_color":"#508dfa"},"consent_mode":{"node_id":"","region":"","ad_storage":null,"ad_user_data":null,"active":null,"ad_personalization":null,"analytics_storage":null,"preferences":null,"social_content":null,"social_sharing":null,"wait_for_update":0,"functionality_storage":null,"personalization_storage":null,"functionality_storage_status":false,"personalization_storage_status":false,"ad_storage_status":false,"ad_user_data_status":false,"active_status":false,"ad_personalization_status":false,"analytics_storage_status":false,"preferences_status":false,"social_content_status":false,"social_sharing_status":false},"node_id":"05c24d40-cbbb-41fe-b3f8-814106f64f0c"}'
              .replace(/\\\?/g, "\\\\?")
              .replace(/\\\./g, "\\\\.")
              .replace(/\\/g, "\\\\"),
          e = JSON.parse(t);
        if (null == e) {
          return { tags: [] };
        }
        return (
          void 0 === e.tags && (e.tags = []),
          void 0 === e.svc_names && (e.svc_names = {}),
          (O = e),
          e
        );
      },
      B = k().consent_mode;
    null != B &&
      B.active &&
      (function (t) {
        var e = document.createElement("script");
        (e.type = "text/javascript"),
          (e.text = (function (t) {
            return '\n            window.dataLayer = window.dataLayer || [];\n            function gtag() {\n              dataLayer.push(arguments);\n            }\n  \n            // set „denied\' as default for both ad and analytics storage,\n            gtag("consent", "default", {\n              ad_storage: "'
              .concat(
                t.ad_storage ? "granted" : "denied",
                '",\n              ad_user_data: "'
              )
              .concat(
                t.ad_user_data ? "granted" : "denied",
                '",\n              ad_personalization: "'
              )
              .concat(
                t.ad_personalization ? "granted" : "denied",
                '",\n              analytics_storage: "'
              )
              .concat(
                t.analytics_storage ? "granted" : "denied",
                '",\n              preferences: "'
              )
              .concat(
                t.preferences ? "granted" : "denied",
                '",\n              social_content: "'
              )
              .concat(
                t.social_content ? "granted" : "denied",
                '",\n              social_sharing: "'
              )
              .concat(
                t.social_sharing ? "granted" : "denied",
                '",\n              personalization_storage: "'
              )
              .concat(
                t.personalization_storage ? "granted" : "denied",
                '",\n              functionality_storage: "'
              )
              .concat(
                t.functionality_storage ? "granted" : "denied",
                '",\n              wait_for_update: '
              )
              .concat(
                t.wait_for_update ? t.wait_for_update : 0,
                ' // milliseconds to wait for update\n            });\n  \n            // Enable ads data redaction by default [optional]\n            gtag("set", "ads_data_redaction", true);\n\n            // Set the developer id\n            gtag("set", "developer_id.dMjBiZm", true);\n\n            function TruendoCookieControlCallback(cookieObj) {\n              if (cookieObj.preferences) {\n                gtag("consent", "update", {\n                  preferences: "granted",\n                });\n              } else {\n                gtag("consent", "update", {\n                  preferences: "denied",\n                });\n              }\n              if (cookieObj.marketing) {\n                gtag("consent", "update", {\n                  ad_storage: "granted",\n                  ad_personalization: "granted",\n                  ad_user_data:"granted",\n                });\n              } else {\n                gtag("consent", "update", {\n                  ad_storage: "denied",    \n                  ad_personalization: "denied",\n                  ad_user_data:"denied",\n                });\n              }\n              if (cookieObj.add_features) {\n                gtag("consent", "update", {\n                  functionality_storage: "granted",\n                  personalization_storage: "granted",\n                });\n              } else {\n                gtag("consent", "update", {\n                  functionality_storage: "denied",\n                  personalization_storage: "denied",\n                });\n              }\n              if (cookieObj.statistics) {\n                gtag("consent", "update", {\n                  analytics_storage: "granted",\n                });\n              } else {\n                gtag("consent", "update", {\n                  analytics_storage: "denied",\n                });\n              }\n              if (cookieObj.social_content) {\n                gtag("consent", "update", {\n                  social_content: "granted",\n                });\n              } else {\n                gtag("consent", "update", {\n                  social_content: "denied",\n                });\n              }\n              if (cookieObj.social_sharing) {\n                gtag("consent", "update", {\n                  social_sharing: "granted",\n                });\n              } else {\n                gtag("consent", "update", {\n                  social_sharing: "denied",\n                });\n              }\n            }\n  '
              );
          })(t));
        var n = document.head;
        n.firstChild ? n.insertBefore(e, n.firstChild) : n.appendChild(e);
      })(B),
      k().tcf_mode &&
        (function () {
          var t = document.createElement("script");
          (t.type = "text/javascript"),
            (t.innerText =
              '!function(){const e=()=>{const e="__tcfapiLocator",t=[],n=window;let o,s,a=n;for(;a;){try{if(a.frames[e]){o=a;break}}catch(e){}if(a===n.top)break;a=a.parent}o||(function t(){const o=n.document,s=!!n.frames[e];if(!s)if(o.body){const t=o.createElement("iframe");t.style.cssText="display:none",t.name=e,o.body.appendChild(t)}else setTimeout(t,5);return!s}(),n.__tcfapi=function(...e){if(!e.length)return t;"setGdprApplies"===e[0]?e.length>3&&2===parseInt(e[1],10)&&"boolean"==typeof e[3]&&(s=e[3],"function"==typeof e[2]&&e[2]("set",!0)):"ping"===e[0]?"function"==typeof e[2]&&e[2]({gdprApplies:s,cmpLoaded:!1,cmpStatus:"stub"}):t.push(e)},n.addEventListener("message",(function(e){const t="string"==typeof e.data;let n={};if(t)try{n=JSON.parse(e.data)}catch(e){}else n=e.data;const o="object"==typeof n&&null!==n?n.__tcfapiCall:null;o&&window.__tcfapi(o.command,o.version,(function(n,s){let a={__tcfapiReturn:{returnValue:n,success:s,callId:o.callId}};e&&e.source&&e.source.postMessage&&e.source.postMessage(t?JSON.stringify(a):a,"*")}),o.parameter)}),!1))};typeof module!="undefined"?module.exports=e:e()}()'),
            t.setAttribute("data-tru-stub", "true");
          var e = document.head;
          e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
        })();
    var R = function (t, e) {
        e.observe(t, { childList: !0, subtree: !0 });
      },
      U = function (t) {
        if (null !== t.target) {
          var e = D(t.target);
          e &&
            "string" != typeof e &&
            e.prohibited &&
            (t.preventDefault(), t.stopPropagation(), z(e));
        }
      },
      I = function (t) {
        return (
          !(null == t || !t.getAttribute) &&
          "true" === t.getAttribute("data-truendo")
        );
      },
      N = function (t) {
        window.NodeList &&
          !NodeList.prototype.forEach &&
          (NodeList.prototype.forEach = Array.prototype.forEach),
          t &&
            t.forEach(function (t) {
              if ("string" != typeof t) {
                var e = t;
                if (!I(e)) {
                  var n = D(e);
                  n && "string" != typeof n && n.prohibited && z(n);
                }
              }
            });
      },
      D = function (t) {
        var e, n, r, o;
        return t
          ? "string" == typeof t
            ? t
            : "SCRIPT" ===
              (null === (e = t.tagName) || void 0 === e
                ? void 0
                : e.toUpperCase())
            ? F(
                t,
                k().tags.filter(function (t) {
                  return "script" === t.tagName;
                })
              )
            : "IFRAME" ===
              (null === (n = t.tagName) || void 0 === n
                ? void 0
                : n.toUpperCase())
            ? M(
                t,
                k().tags.filter(function (t) {
                  return "iframe" === t.tagName;
                })
              )
            : ("IMG" ===
              (null === (r = t.tagName) || void 0 === r
                ? void 0
                : r.toUpperCase())
                ? G(
                    t,
                    k().tags.filter(function (t) {
                      return "img" === t.tagName;
                    })
                  )
                : "LINK" ===
                    (null === (o = t.tagName) || void 0 === o
                      ? void 0
                      : o.toUpperCase()) &&
                  G(
                    t,
                    k().tags.filter(function (t) {
                      return "link" === t.tagName;
                    })
                  ),
              t)
          : null;
      },
      F = function (t, e) {
        return (
          null == e ||
            e.forEach(function (e) {
              return null == e || null == e.rules
                ? t
                : void e.rules.forEach(function (e) {
                    e.filters.forEach(function (n) {
                      if ("contains" === n.eval) {
                        var r = t.getAttribute(n.attr);
                        null !== r &&
                          K(r, n.value) &&
                          !$(e.actions) &&
                          ((t.prohibited = !0), (t.actions = e.actions));
                      }
                    });
                  });
            }),
          t
        );
      },
      M = function (t, e) {
        return (
          null == e ||
            e.forEach(function (e) {
              if (null == e.rules) return t;
              e.rules.forEach(function (e) {
                if (null == e.filters) return t;
                e.filters.forEach(function (n) {
                  if ("contains" === n.eval) {
                    var r = t.getAttribute(n.attr);
                    null !== r &&
                      K(r, n.value) &&
                      !$(e.actions) &&
                      ((t.prohibited = !0), (t.actions = e.actions));
                  }
                });
              });
            }),
          t
        );
      },
      G = function (t, e) {
        return (
          null == e ||
            e.forEach(function (e) {
              if (null == e.rules) return t;
              e.rules.forEach(function (e) {
                if (null == e.filters) return t;
                e.filters.forEach(function (n) {
                  if ("contains" === n.eval) {
                    var r = t.getAttribute(n.attr);
                    null !== r &&
                      K(r, n.value) &&
                      !$(e.actions) &&
                      ((t.prohibited = !0), (t.actions = e.actions));
                  }
                });
              });
            }),
          t
        );
      },
      z = function (t) {
        var e, n, r;
        t.setAttribute("data-truendo", "true"),
          "SCRIPT" ===
          (null === (e = t.tagName) || void 0 === e ? void 0 : e.toUpperCase())
            ? H(t)
            : "IFRAME" ===
              (null === (n = t.tagName) || void 0 === n
                ? void 0
                : n.toUpperCase())
            ? q(t)
            : "IMG" ===
                (null === (r = t.tagName) || void 0 === r
                  ? void 0
                  : r.toUpperCase()) && J(t);
      },
      H = function (t) {
        V(t);
      },
      q = function (t) {
        Y(t), Q(t);
      },
      J = function (t) {
        Y(t), X(t);
      },
      V = function (t) {
        if (null == t.actions) return t;
        t.actions.forEach(function (e) {
          null != e.addAttr &&
            e.addAttr.forEach(function (e) {
              null !== e["data-trucookiecontrol"] &&
                void 0 !== e["data-trucookiecontrol"] &&
                t.setAttribute(
                  "data-trucookiecontrol",
                  e["data-trucookiecontrol"]
                ),
                null !== e["data-trusvccontrol"] &&
                  void 0 !== e["data-trusvccontrol"] &&
                  t.setAttribute("data-trusvccontrol", e["data-trusvccontrol"]);
            });
        }),
          t.actions.forEach(function (e) {
            null != e.replaceAttr &&
              e.replaceAttr.forEach(function (e) {
                null !== e.type &&
                  void 0 !== e.type &&
                  t.setAttribute("type", e.type);
              });
          });
      },
      Q = function (t) {
        null != t.actions &&
          t.actions.forEach(function (e) {
            null != e.addAttr &&
              e.addAttr.forEach(function (e) {
                null !== e["data-trucookiecontrol"] &&
                  void 0 !== e["data-trucookiecontrol"] &&
                  t.setAttribute(
                    "data-trucookiecontrol",
                    e["data-trucookiecontrol"]
                  ),
                  null !== e["data-trusvccontrol"] &&
                    void 0 !== e["data-trusvccontrol"] &&
                    t.setAttribute(
                      "data-trusvccontrol",
                      e["data-trusvccontrol"]
                    );
                var n = k().mode,
                  r = k().ph_styling.font_color,
                  o = k().ph_styling.bg_color,
                  i = k().ph_styling.btn_color,
                  a = k().svc_names[e["data-trusvccontrol"]];
                (function (t) {
                  return "none" !== window.getComputedStyle(t).display;
                })(t) &&
                  t.setAttribute(
                    "src",
                    Z(
                      e.placeHolder,
                      e["data-trusvccontrol"],
                      a,
                      e["data-trucookiecontrol"],
                      n,
                      r,
                      o,
                      i
                    )
                  );
              });
          });
      },
      X = function (t) {
        if (null == t.actions) return t;
        t.actions.forEach(function (e) {
          null != e.addAttr &&
            (e.addAttr.forEach(function (e) {
              null !== e["data-trucookiecontrol"] &&
                void 0 !== e["data-trucookiecontrol"] &&
                t.setAttribute(
                  "data-trucookiecontrol",
                  e["data-trucookiecontrol"]
                ),
                null !== e["data-trusvccontrol"] &&
                  void 0 !== e["data-trusvccontrol"] &&
                  t.setAttribute("data-trusvccontrol", e["data-trusvccontrol"]);
            }),
            t.getAttribute);
        });
      },
      Y = function (t) {
        var e,
          n = t.getAttribute("src") || "",
          r = t;
        r.removeAttribute("src"),
          r.setAttribute("data-src", n),
          null === (e = t.parentElement) ||
            void 0 === e ||
            e.replaceChild(r, t);
      },
      $ = function (t) {
        if (null == P()) return !1;
        var e = !1;
        return (
          null == t ||
            t.forEach(function (t) {
              null != t.addAttr &&
                t.addAttr.forEach(function (t) {
                  ((!0 !== P()[t["data-trucookiecontrol"]] || e) &&
                    (!0 !== P()[t["data-trusvccontrol"]] || e)) ||
                    (e = !0);
                });
            }),
          e
        );
      },
      K = function (t, e) {
        return new RegExp(e).test(t);
      },
      Z = function (t, e, n, r, o, i, a, s) {
        var c = (function () {
            var t = (function () {
              var t = document.documentElement.getAttribute("lang"),
                e = document.documentElement.getAttribute("xml:lang"),
                n = t || e || !1;
              return !!n && !!h.includes(n) && n;
            })();
            if (t) return t;
            if ("undefined" == typeof window || void 0 === window.navigator)
              return k().default_lang;
            var e = window.navigator.languages
              ? window.navigator.languages[0]
              : k().default_lang;
            return (
              (e = (function (t) {
                if (!t) return null;
                if (-1 !== t.indexOf("-")) {
                  var e = t.split("-");
                  "zh" === (t = e[0]) && e.length > 1
                    ? (t =
                        "tw" === e[e.length - 1].toLowerCase() ||
                        "hk" === e[e.length - 1].toLowerCase()
                          ? "hk"
                          : "cn")
                    : "zh" === t && 1 === e.length && (t = "cn"),
                    "pt" === t &&
                      e.length > 1 &&
                      "br" === e[e.length - 1].toLowerCase() &&
                      (t = "pt-br");
                }
                return ("nb" !== t && "nn" !== t) || (t = "no"), t;
              })(
                (e =
                  e ||
                  window.navigator.language ||
                  window.navigator.browserLanguage ||
                  window.navigator.userLanguage)
              )),
              null != k().sup_langs && k().sup_langs.includes(e)
                ? e
                : (e = k().default_lang)
            );
          })(),
          u =
            null != t
              ? "".concat(t, "/").concat(c)
              : ""
                  .concat(
                    "TRUE" !== p.env.TESTING
                      ? "https://testcdn.priv.center"
                      : "../.",
                    "/pc/placeholder/v2/"
                  )
                  .concat(c, ".html");
        "true" == p.env.TEST &&
          (u =
            null != t
              ? "".concat(t, "/").concat(c)
              : ".././placeholder/v2/".concat(c, ".html"));
        var l = decodeURI(n),
          d = {
            domain: window.location.hostname,
            service_name: l,
            category_id: r,
            service_id: e,
            mode: o,
            font_color: i,
            bg_color: a,
            btn_color: s,
          };
        return u + "?" + new URLSearchParams(d).toString();
      },
      W = function (t, e) {
        t.forEach(function (t) {
          N(t.addedNodes);
        });
      },
      tt =
        (!0 !== T &&
          (function () {
            navigator.userAgent.indexOf("Firefox") > -1 &&
              document.addEventListener("beforescriptexecute", U, !0),
              window.TruendoAutoblockLoaded ||
                ((window.oldAppend = Element.prototype.append),
                (Element.prototype.append = function () {
                  for (
                    var t = arguments.length, e = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    e[n] = arguments[n];
                  if (0 !== e.length) {
                    if (e.length > 1) N(e);
                    else if (!I(e[0])) {
                      var r = D(e[0]);
                      r && "string" != typeof r && r.prohibited && z(e[0]);
                    }
                    return window.oldAppend.apply(this, arguments);
                  }
                }),
                (window.oldAppendChild = Element.prototype.appendChild),
                (Element.prototype.appendChild = function () {
                  if (arguments.length < 1)
                    return window.oldAppendChild.apply(this, arguments);
                  if (!I(arguments[0])) {
                    var t = D(arguments[0]);
                    t &&
                      "string" != typeof t &&
                      t.prohibited &&
                      z(arguments[0]);
                  }
                  return window.oldAppendChild.apply(this, arguments);
                }),
                (window.oldInsertBefore = Element.prototype.insertBefore),
                (Element.prototype.insertBefore = function () {
                  if (null != arguments && !I(arguments[0])) {
                    var t = D(arguments[0]);
                    t &&
                      "string" != typeof t &&
                      t.prohibited &&
                      z(arguments[0]);
                  }
                  return window.oldInsertBefore.apply(this, arguments);
                }),
                (window.oldReplaceChild = Element.prototype.replaceChild),
                (Element.prototype.replaceChild = function () {
                  if (null != arguments && !I(arguments[0])) {
                    var t = D(arguments[0]);
                    t &&
                      "string" != typeof t &&
                      t.prohibited &&
                      z(arguments[0]);
                  }
                  return window.oldReplaceChild.apply(this, arguments);
                }),
                (window.TruendoAutoblockLoaded = !0));
            var t = new MutationObserver(W);
            R(document, t);
          })(),
        "app_geo.pid.js");
    S && (tt = "app.pid.js"),
      /MSIE|Trident/.test(navigator.userAgent) && (tt = "ieapp.pid.js");
    var et = document.createElement("script");
    (et.type = "text/javascript"),
      "true" == p.env.TEST
        ? (et.src = ".././".concat(tt))
        : (et.src = ""
            .concat(
              S
                ? L
                : "TRUE" !== p.env.TESTING
                ? "https://testcdn-glo.priv.center"
                : "../.",
              "/pc/"
            )
            .concat(tt)),
      (et.id = "truendoPrivacyPanel");
    var nt = k();
    et.setAttribute("data-region", nt.region),
      et.setAttribute("data-siteid", nt.node_id),
      v && et.setAttribute("data-nofont", v),
      m && et.setAttribute("data-transparency", m),
      b && et.setAttribute("data-accessibility", b),
      w && et.setAttribute("data-accessibility-border-color", w),
      _ && et.setAttribute("data-trutype", _),
      E && et.setAttribute("data-popup-delay", E),
      A && et.setAttribute("data-pay-id", A),
      (et.async = !0);
    var rt = !1,
      ot = function () {
        rt ||
          (document.body.appendChild(et),
          navigator.userAgent.indexOf("Firefox") > -1 &&
            document.removeEventListener("beforescriptexecute", U, !1),
          (rt = !0));
      };
    "loading" !== document.readyState && ot(),
      document.addEventListener("DOMContentLoaded", function () {
        ot();
      });
  })();
})();
