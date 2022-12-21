!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 7));
})([
  function (e, t, n) {
    var r;
    (r = function () {
      var e = !0;
      function t(t) {
        function n(e) {
          var n = t.match(e);
          return (n && n.length > 1 && n[1]) || "";
        }
        function r(e) {
          var n = t.match(e);
          return (n && n.length > 1 && n[2]) || "";
        }
        var a,
          i = n(/(ipod|iphone|ipad)/i).toLowerCase(),
          s = !/like android/i.test(t) && /android/i.test(t),
          l = /nexus\s*[0-6]\s*/i.test(t),
          p = !l && /nexus\s*[0-9]+/i.test(t),
          u = /CrOS/.test(t),
          c = /silk/i.test(t),
          d = /sailfish/i.test(t),
          f = /tizen/i.test(t),
          y = /(web|hpw)(o|0)s/i.test(t),
          m = /windows phone/i.test(t),
          h = (/SamsungBrowser/i.test(t), !m && /windows/i.test(t)),
          v = !i && !c && /macintosh/i.test(t),
          g = !s && !d && !f && !y && /linux/i.test(t),
          w = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
          b = n(/version\/(\d+(\.\d+)?)/i),
          P = /tablet/i.test(t) && !/tablet pc/i.test(t),
          _ = !P && /[^-]mobi/i.test(t),
          k = /xbox/i.test(t);
        /opera/i.test(t)
          ? (a = {
              name: "Opera",
              opera: e,
              version: b || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i),
            })
          : /opr\/|opios/i.test(t)
          ? (a = {
              name: "Opera",
              opera: e,
              version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || b,
            })
          : /SamsungBrowser/i.test(t)
          ? (a = {
              name: "Samsung Internet for Android",
              samsungBrowser: e,
              version: b || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i),
            })
          : /Whale/i.test(t)
          ? (a = {
              name: "NAVER Whale browser",
              whale: e,
              version: n(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i),
            })
          : /MZBrowser/i.test(t)
          ? (a = {
              name: "MZ Browser",
              mzbrowser: e,
              version: n(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i),
            })
          : /coast/i.test(t)
          ? (a = {
              name: "Opera Coast",
              coast: e,
              version: b || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i),
            })
          : /focus/i.test(t)
          ? (a = {
              name: "Focus",
              focus: e,
              version: n(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i),
            })
          : /yabrowser/i.test(t)
          ? (a = {
              name: "Yandex Browser",
              yandexbrowser: e,
              version: b || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i),
            })
          : /ucbrowser/i.test(t)
          ? (a = {
              name: "UC Browser",
              ucbrowser: e,
              version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i),
            })
          : /mxios/i.test(t)
          ? (a = {
              name: "Maxthon",
              maxthon: e,
              version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i),
            })
          : /epiphany/i.test(t)
          ? (a = {
              name: "Epiphany",
              epiphany: e,
              version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i),
            })
          : /puffin/i.test(t)
          ? (a = {
              name: "Puffin",
              puffin: e,
              version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i),
            })
          : /sleipnir/i.test(t)
          ? (a = {
              name: "Sleipnir",
              sleipnir: e,
              version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i),
            })
          : /k-meleon/i.test(t)
          ? (a = {
              name: "K-Meleon",
              kMeleon: e,
              version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i),
            })
          : m
          ? ((a = {
              name: "Windows Phone",
              osname: "Windows Phone",
              windowsphone: e,
            }),
            w
              ? ((a.msedge = e), (a.version = w))
              : ((a.msie = e), (a.version = n(/iemobile\/(\d+(\.\d+)?)/i))))
          : /msie|trident/i.test(t)
          ? (a = {
              name: "Internet Explorer",
              msie: e,
              version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i),
            })
          : u
          ? (a = {
              name: "Chrome",
              osname: "Chrome OS",
              chromeos: e,
              chromeBook: e,
              chrome: e,
              version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i),
            })
          : /edg([ea]|ios)/i.test(t)
          ? (a = { name: "Microsoft Edge", msedge: e, version: w })
          : /vivaldi/i.test(t)
          ? (a = {
              name: "Vivaldi",
              vivaldi: e,
              version: n(/vivaldi\/(\d+(\.\d+)?)/i) || b,
            })
          : d
          ? (a = {
              name: "Sailfish",
              osname: "Sailfish OS",
              sailfish: e,
              version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i),
            })
          : /seamonkey\//i.test(t)
          ? (a = {
              name: "SeaMonkey",
              seamonkey: e,
              version: n(/seamonkey\/(\d+(\.\d+)?)/i),
            })
          : /firefox|iceweasel|fxios/i.test(t)
          ? ((a = {
              name: "Firefox",
              firefox: e,
              version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i),
            }),
            /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) &&
              ((a.firefoxos = e), (a.osname = "Firefox OS")))
          : c
          ? (a = {
              name: "Amazon Silk",
              silk: e,
              version: n(/silk\/(\d+(\.\d+)?)/i),
            })
          : /phantom/i.test(t)
          ? (a = {
              name: "PhantomJS",
              phantom: e,
              version: n(/phantomjs\/(\d+(\.\d+)?)/i),
            })
          : /slimerjs/i.test(t)
          ? (a = {
              name: "SlimerJS",
              slimer: e,
              version: n(/slimerjs\/(\d+(\.\d+)?)/i),
            })
          : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t)
          ? (a = {
              name: "BlackBerry",
              osname: "BlackBerry OS",
              blackberry: e,
              version: b || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i),
            })
          : y
          ? ((a = {
              name: "WebOS",
              osname: "WebOS",
              webos: e,
              version: b || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i),
            }),
            /touchpad\//i.test(t) && (a.touchpad = e))
          : /bada/i.test(t)
          ? (a = {
              name: "Bada",
              osname: "Bada",
              bada: e,
              version: n(/dolfin\/(\d+(\.\d+)?)/i),
            })
          : f
          ? (a = {
              name: "Tizen",
              osname: "Tizen",
              tizen: e,
              version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || b,
            })
          : /qupzilla/i.test(t)
          ? (a = {
              name: "QupZilla",
              qupzilla: e,
              version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || b,
            })
          : /chromium/i.test(t)
          ? (a = {
              name: "Chromium",
              chromium: e,
              version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || b,
            })
          : /chrome|crios|crmo/i.test(t)
          ? (a = {
              name: "Chrome",
              chrome: e,
              version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i),
            })
          : s
          ? (a = { name: "Android", version: b })
          : /safari|applewebkit/i.test(t)
          ? ((a = { name: "Safari", safari: e }), b && (a.version = b))
          : i
          ? ((a = {
              name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod",
            }),
            b && (a.version = b))
          : (a = /googlebot/i.test(t)
              ? {
                  name: "Googlebot",
                  googlebot: e,
                  version: n(/googlebot\/(\d+(\.\d+))/i) || b,
                }
              : { name: n(/^(.*)\/(.*) /), version: r(/^(.*)\/(.*) /) }),
          !a.msedge && /(apple)?webkit/i.test(t)
            ? (/(apple)?webkit\/537\.36/i.test(t)
                ? ((a.name = a.name || "Blink"), (a.blink = e))
                : ((a.name = a.name || "Webkit"), (a.webkit = e)),
              !a.version && b && (a.version = b))
            : !a.opera &&
              /gecko\//i.test(t) &&
              ((a.name = a.name || "Gecko"),
              (a.gecko = e),
              (a.version = a.version || n(/gecko\/(\d+(\.\d+)?)/i))),
          a.windowsphone || (!s && !a.silk)
            ? !a.windowsphone && i
              ? ((a[i] = e), (a.ios = e), (a.osname = "iOS"))
              : v
              ? ((a.mac = e), (a.osname = "macOS"))
              : k
              ? ((a.xbox = e), (a.osname = "Xbox"))
              : h
              ? ((a.windows = e), (a.osname = "Windows"))
              : g && ((a.linux = e), (a.osname = "Linux"))
            : ((a.android = e), (a.osname = "Android"));
        var T = "";
        a.windows
          ? (T = (function (e) {
              switch (e) {
                case "NT":
                  return "NT";
                case "XP":
                  return "XP";
                case "NT 5.0":
                  return "2000";
                case "NT 5.1":
                  return "XP";
                case "NT 5.2":
                  return "2003";
                case "NT 6.0":
                  return "Vista";
                case "NT 6.1":
                  return "7";
                case "NT 6.2":
                  return "8";
                case "NT 6.3":
                  return "8.1";
                case "NT 10.0":
                  return "10";
                default:
                  return;
              }
            })(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)))
          : a.windowsphone
          ? (T = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i))
          : a.mac
          ? (T = (T = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, "."))
          : i
          ? (T = (T = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(
              /[_\s]/g,
              "."
            ))
          : s
          ? (T = n(/android[ \/-](\d+(\.\d+)*)/i))
          : a.webos
          ? (T = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i))
          : a.blackberry
          ? (T = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i))
          : a.bada
          ? (T = n(/bada\/(\d+(\.\d+)*)/i))
          : a.tizen && (T = n(/tizen[\/\s](\d+(\.\d+)*)/i)),
          T && (a.osversion = T);
        var C = !a.windows && T.split(".")[0];
        return (
          P || p || "ipad" == i || (s && (3 == C || (C >= 4 && !_))) || a.silk
            ? (a.tablet = e)
            : (_ ||
                "iphone" == i ||
                "ipod" == i ||
                s ||
                l ||
                a.blackberry ||
                a.webos ||
                a.bada) &&
              (a.mobile = e),
          a.msedge ||
          (a.msie && a.version >= 10) ||
          (a.yandexbrowser && a.version >= 15) ||
          (a.vivaldi && a.version >= 1) ||
          (a.chrome && a.version >= 20) ||
          (a.samsungBrowser && a.version >= 4) ||
          (a.whale && 1 === o([a.version, "1.0"])) ||
          (a.mzbrowser && 1 === o([a.version, "6.0"])) ||
          (a.focus && 1 === o([a.version, "1.0"])) ||
          (a.firefox && a.version >= 20) ||
          (a.safari && a.version >= 6) ||
          (a.opera && a.version >= 10) ||
          (a.ios && a.osversion && a.osversion.split(".")[0] >= 6) ||
          (a.blackberry && a.version >= 10.1) ||
          (a.chromium && a.version >= 20)
            ? (a.a = e)
            : (a.msie && a.version < 10) ||
              (a.chrome && a.version < 20) ||
              (a.firefox && a.version < 20) ||
              (a.safari && a.version < 6) ||
              (a.opera && a.version < 10) ||
              (a.ios && a.osversion && a.osversion.split(".")[0] < 6) ||
              (a.chromium && a.version < 20)
            ? (a.c = e)
            : (a.x = e),
          a
        );
      }
      var n = t(("undefined" != typeof navigator && navigator.userAgent) || "");
      function r(e) {
        return e.split(".").length;
      }
      function a(e, t) {
        var n,
          r = [];
        if (Array.prototype.map) return Array.prototype.map.call(e, t);
        for (n = 0; n < e.length; n++) r.push(t(e[n]));
        return r;
      }
      function o(e) {
        for (
          var t = Math.max(r(e[0]), r(e[1])),
            n = a(e, function (e) {
              var n = t - r(e);
              return a(
                (e += new Array(n + 1).join(".0")).split("."),
                function (e) {
                  return new Array(20 - e.length).join("0") + e;
                }
              ).reverse();
            });
          --t >= 0;

        ) {
          if (n[0][t] > n[1][t]) return 1;
          if (n[0][t] !== n[1][t]) return -1;
          if (0 === t) return 0;
        }
      }
      function i(e, r, a) {
        var i = n;
        "string" == typeof r && ((a = r), (r = void 0)),
          void 0 === r && (r = !1),
          a && (i = t(a));
        var s = "" + i.version;
        for (var l in e)
          if (e.hasOwnProperty(l) && i[l]) {
            if ("string" != typeof e[l])
              throw new Error(
                "Browser version in the minVersion map should be a string: " +
                  l +
                  ": " +
                  String(e)
              );
            return o([s, e[l]]) < 0;
          }
        return r;
      }
      return (
        (n.test = function (e) {
          for (var t = 0; t < e.length; ++t) {
            var r = e[t];
            if ("string" == typeof r && r in n) return !0;
          }
          return !1;
        }),
        (n.isUnsupportedBrowser = i),
        (n.compareVersions = o),
        (n.check = function (e, t, n) {
          return !i(e, t, n);
        }),
        (n._detect = t),
        (n.detect = t),
        n
      );
    }),
      e.exports ? (e.exports = r()) : n(3)("bowser", r);
  },
  function (e, t, n) {
    (function (t, n) {
      /*!
       * @overview es6-promise - a tiny implementation of Promises/A+.
       * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
       * @license   Licensed under MIT license
       *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
       * @version   v4.2.8+1e68dce6
       */
      var r;
      (r = function () {
        "use strict";
        function e(e) {
          return "function" == typeof e;
        }
        var r = Array.isArray
            ? Array.isArray
            : function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
              },
          a = 0,
          o = void 0,
          i = void 0,
          s = function (e, t) {
            (y[a] = e), (y[a + 1] = t), 2 === (a += 2) && (i ? i(m) : b());
          },
          l = "undefined" != typeof window ? window : void 0,
          p = l || {},
          u = p.MutationObserver || p.WebKitMutationObserver,
          c =
            "undefined" == typeof self &&
            void 0 !== t &&
            "[object process]" === {}.toString.call(t),
          d =
            "undefined" != typeof Uint8ClampedArray &&
            "undefined" != typeof importScripts &&
            "undefined" != typeof MessageChannel;
        function f() {
          var e = setTimeout;
          return function () {
            return e(m, 1);
          };
        }
        var y = new Array(1e3);
        function m() {
          for (var e = 0; e < a; e += 2)
            (0, y[e])(y[e + 1]), (y[e] = void 0), (y[e + 1] = void 0);
          a = 0;
        }
        var h,
          v,
          g,
          w,
          b = void 0;
        function P(e, t) {
          var n = this,
            r = new this.constructor(T);
          void 0 === r[k] && x(r);
          var a = n._state;
          if (a) {
            var o = arguments[a - 1];
            s(function () {
              return q(a, r, o, n._result);
            });
          } else O(n, r, e, t);
          return r;
        }
        function _(e) {
          if (e && "object" == typeof e && e.constructor === this) return e;
          var t = new this(T);
          return S(t, e), t;
        }
        c
          ? (b = function () {
              return t.nextTick(m);
            })
          : u
          ? ((v = 0),
            (g = new u(m)),
            (w = document.createTextNode("")),
            g.observe(w, { characterData: !0 }),
            (b = function () {
              w.data = v = ++v % 2;
            }))
          : d
          ? (((h = new MessageChannel()).port1.onmessage = m),
            (b = function () {
              return h.port2.postMessage(0);
            }))
          : (b =
              void 0 === l
                ? (function () {
                    try {
                      var e = Function("return this")().require("vertx");
                      return void 0 !== (o = e.runOnLoop || e.runOnContext)
                        ? function () {
                            o(m);
                          }
                        : f();
                    } catch (e) {
                      return f();
                    }
                  })()
                : f());
        var k = Math.random().toString(36).substring(2);
        function T() {}
        function C(t, n, r) {
          n.constructor === t.constructor &&
          r === P &&
          n.constructor.resolve === _
            ? (function (e, t) {
                1 === t._state
                  ? M(e, t._result)
                  : 2 === t._state
                  ? R(e, t._result)
                  : O(
                      t,
                      void 0,
                      function (t) {
                        return S(e, t);
                      },
                      function (t) {
                        return R(e, t);
                      }
                    );
              })(t, n)
            : void 0 === r
            ? M(t, n)
            : e(r)
            ? (function (e, t, n) {
                s(function (e) {
                  var r = !1,
                    a = (function (e, t, n, r) {
                      try {
                        e.call(t, n, r);
                      } catch (e) {
                        return e;
                      }
                    })(
                      n,
                      t,
                      function (n) {
                        r || ((r = !0), t !== n ? S(e, n) : M(e, n));
                      },
                      function (t) {
                        r || ((r = !0), R(e, t));
                      },
                      e._label
                    );
                  !r && a && ((r = !0), R(e, a));
                }, e);
              })(t, n, r)
            : M(t, n);
        }
        function S(e, t) {
          if (e === t)
            R(e, new TypeError("You cannot resolve a promise with itself"));
          else if (
            ((a = typeof (r = t)),
            null === r || ("object" !== a && "function" !== a))
          )
            M(e, t);
          else {
            var n = void 0;
            try {
              n = t.then;
            } catch (t) {
              return void R(e, t);
            }
            C(e, t, n);
          }
          var r, a;
        }
        function A(e) {
          e._onerror && e._onerror(e._result), E(e);
        }
        function M(e, t) {
          void 0 === e._state &&
            ((e._result = t),
            (e._state = 1),
            0 !== e._subscribers.length && s(E, e));
        }
        function R(e, t) {
          void 0 === e._state && ((e._state = 2), (e._result = t), s(A, e));
        }
        function O(e, t, n, r) {
          var a = e._subscribers,
            o = a.length;
          (e._onerror = null),
            (a[o] = t),
            (a[o + 1] = n),
            (a[o + 2] = r),
            0 === o && e._state && s(E, e);
        }
        function E(e) {
          var t = e._subscribers,
            n = e._state;
          if (0 !== t.length) {
            for (
              var r = void 0, a = void 0, o = e._result, i = 0;
              i < t.length;
              i += 3
            )
              (r = t[i]), (a = t[i + n]), r ? q(n, r, a, o) : a(o);
            e._subscribers.length = 0;
          }
        }
        function q(t, n, r, a) {
          var o = e(r),
            i = void 0,
            s = void 0,
            l = !0;
          if (o) {
            try {
              i = r(a);
            } catch (e) {
              (l = !1), (s = e);
            }
            if (n === i)
              return void R(
                n,
                new TypeError(
                  "A promises callback cannot return that same promise."
                )
              );
          } else i = a;
          void 0 !== n._state ||
            (o && l
              ? S(n, i)
              : !1 === l
              ? R(n, s)
              : 1 === t
              ? M(n, i)
              : 2 === t && R(n, i));
        }
        var D = 0;
        function x(e) {
          (e[k] = D++),
            (e._state = void 0),
            (e._result = void 0),
            (e._subscribers = []);
        }
        var N = (function () {
            function e(e, t) {
              (this._instanceConstructor = e),
                (this.promise = new e(T)),
                this.promise[k] || x(this.promise),
                r(t)
                  ? ((this.length = t.length),
                    (this._remaining = t.length),
                    (this._result = new Array(this.length)),
                    0 === this.length
                      ? M(this.promise, this._result)
                      : ((this.length = this.length || 0),
                        this._enumerate(t),
                        0 === this._remaining && M(this.promise, this._result)))
                  : R(
                      this.promise,
                      new Error("Array Methods must be provided an Array")
                    );
            }
            return (
              (e.prototype._enumerate = function (e) {
                for (var t = 0; void 0 === this._state && t < e.length; t++)
                  this._eachEntry(e[t], t);
              }),
              (e.prototype._eachEntry = function (e, t) {
                var n = this._instanceConstructor,
                  r = n.resolve;
                if (r === _) {
                  var a = void 0,
                    o = void 0,
                    i = !1;
                  try {
                    a = e.then;
                  } catch (e) {
                    (i = !0), (o = e);
                  }
                  if (a === P && void 0 !== e._state)
                    this._settledAt(e._state, t, e._result);
                  else if ("function" != typeof a)
                    this._remaining--, (this._result[t] = e);
                  else if (n === I) {
                    var s = new n(T);
                    i ? R(s, o) : C(s, e, a), this._willSettleAt(s, t);
                  } else
                    this._willSettleAt(
                      new n(function (t) {
                        return t(e);
                      }),
                      t
                    );
                } else this._willSettleAt(r(e), t);
              }),
              (e.prototype._settledAt = function (e, t, n) {
                var r = this.promise;
                void 0 === r._state &&
                  (this._remaining--,
                  2 === e ? R(r, n) : (this._result[t] = n)),
                  0 === this._remaining && M(r, this._result);
              }),
              (e.prototype._willSettleAt = function (e, t) {
                var n = this;
                O(
                  e,
                  void 0,
                  function (e) {
                    return n._settledAt(1, t, e);
                  },
                  function (e) {
                    return n._settledAt(2, t, e);
                  }
                );
              }),
              e
            );
          })(),
          I = (function () {
            function t(e) {
              (this[k] = D++),
                (this._result = this._state = void 0),
                (this._subscribers = []),
                T !== e &&
                  ("function" != typeof e &&
                    (function () {
                      throw new TypeError(
                        "You must pass a resolver function as the first argument to the promise constructor"
                      );
                    })(),
                  this instanceof t
                    ? (function (e, t) {
                        try {
                          t(
                            function (t) {
                              S(e, t);
                            },
                            function (t) {
                              R(e, t);
                            }
                          );
                        } catch (t) {
                          R(e, t);
                        }
                      })(this, e)
                    : (function () {
                        throw new TypeError(
                          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                        );
                      })());
            }
            return (
              (t.prototype.catch = function (e) {
                return this.then(null, e);
              }),
              (t.prototype.finally = function (t) {
                var n = this.constructor;
                return e(t)
                  ? this.then(
                      function (e) {
                        return n.resolve(t()).then(function () {
                          return e;
                        });
                      },
                      function (e) {
                        return n.resolve(t()).then(function () {
                          throw e;
                        });
                      }
                    )
                  : this.then(t, t);
              }),
              t
            );
          })();
        return (
          (I.prototype.then = P),
          (I.all = function (e) {
            return new N(this, e).promise;
          }),
          (I.race = function (e) {
            var t = this;
            return r(e)
              ? new t(function (n, r) {
                  for (var a = e.length, o = 0; o < a; o++)
                    t.resolve(e[o]).then(n, r);
                })
              : new t(function (e, t) {
                  return t(new TypeError("You must pass an array to race."));
                });
          }),
          (I.resolve = _),
          (I.reject = function (e) {
            var t = new this(T);
            return R(t, e), t;
          }),
          (I._setScheduler = function (e) {
            i = e;
          }),
          (I._setAsap = function (e) {
            s = e;
          }),
          (I._asap = s),
          (I.polyfill = function () {
            var e = void 0;
            if (void 0 !== n) e = n;
            else if ("undefined" != typeof self) e = self;
            else
              try {
                e = Function("return this")();
              } catch (e) {
                throw new Error(
                  "polyfill failed because global object is unavailable in this environment"
                );
              }
            var t = e.Promise;
            if (t) {
              var r = null;
              try {
                r = Object.prototype.toString.call(t.resolve());
              } catch (e) {}
              if ("[object Promise]" === r && !t.cast) return;
            }
            e.Promise = I;
          }),
          (I.Promise = I),
          I
        );
      }),
        (e.exports = r());
    }.call(this, n(4), n(5)));
  },
  function (e, t, n) {
    (function (e) {
      var n, r, a, o;
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      (o = function () {
        return (function (e) {
          function t(r) {
            if (n[r]) return n[r].exports;
            var a = (n[r] = { i: r, l: !1, exports: {} });
            return e[r].call(a.exports, a, a.exports, t), (a.l = !0), a.exports;
          }
          var n = {};
          return (
            (t.m = e),
            (t.c = n),
            (t.i = function (e) {
              return e;
            }),
            (t.d = function (e, n, r) {
              t.o(e, n) ||
                Object.defineProperty(e, n, {
                  configurable: !1,
                  enumerable: !0,
                  get: r,
                });
            }),
            (t.n = function (e) {
              var n =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return t.d(n, "a", n), n;
            }),
            (t.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ""),
            t((t.s = 0))
          );
        })([
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              window.ApplePaySession &&
                (t.PaymentRequest = (function () {
                  function e(e, t, n) {
                    (this.paymentRequestID = ""),
                      (this.shippingAddress = null),
                      (this.shippingOption = ""),
                      (this.shippingType = "shipping"),
                      (this.paymentResolver = null),
                      (this.paymentRejector = null),
                      (this.onshippingaddresschange = null),
                      (this.onshippingoptionchange = null),
                      (this.onpaymentmethodselected = null),
                      (this.validationEndpoint = ""),
                      (this.merchantIdentifier = "");
                    var r = !1;
                    this.paymentRequest = {
                      countryCode: "",
                      currencyCode: "",
                      lineItems: [],
                      merchantCapabilities: ["supports3DS"],
                      supportedNetworks: [],
                      total: null,
                      billingContact: null,
                      requiredBillingContactFields: [],
                      requiredShippingContactFields: [],
                      shippingContact: null,
                      shippingMethods: [],
                      shippingType: "shipping",
                    };
                    for (var a, o = 0, i = e; o < i.length; o++)
                      if (
                        -1 <
                        (a = i[o]).supportedMethods.indexOf(
                          "https://apple.com/apple-pay"
                        )
                      ) {
                        (this.paymentRequest.supportedNetworks =
                          a.data.supportedNetworks),
                          (this.paymentRequest.countryCode =
                            a.data.countryCode),
                          a.data.billingContact
                            ? (this.paymentRequest.billingContact =
                                a.data.billingContact)
                            : delete this.paymentRequest.billingContact,
                          a.data.shippingContact
                            ? (this.paymentRequest.shippingContact =
                                a.data.shippingContact)
                            : delete this.paymentRequest.shippingContact,
                          a.data.merchantCapabilities &&
                            (this.paymentRequest.merchantCapabilities =
                              a.data.merchantCapabilities),
                          (this.validationEndpoint = a.data.validationEndpoint),
                          (this.merchantIdentifier = a.data.merchantIdentifier),
                          (r = !0);
                        break;
                      }
                    if (!r) throw "Payment method not specified for Apple Pay.";
                    t &&
                      (n &&
                        !0 !== n.requestShipping &&
                        delete t.shippingOptions,
                      this.updatePaymentDetails(t),
                      this.paymentRequest.shippingMethods &&
                        this.paymentRequest.shippingMethods.length &&
                        (this.shippingOption = this.convertShippingMethod(
                          this.paymentRequest.shippingMethods[0]
                        ))),
                      n &&
                        (n.requestShipping &&
                          (this.paymentRequest.requiredBillingContactFields.push(
                            "postalAddress"
                          ),
                          this.paymentRequest.requiredShippingContactFields.push(
                            "postalAddress"
                          )),
                        n.requestPayerName &&
                          this.paymentRequest.requiredShippingContactFields.push(
                            "name"
                          ),
                        n.requestPayerEmail &&
                          this.paymentRequest.requiredShippingContactFields.push(
                            "email"
                          ),
                        n.requestPayerPhone &&
                          this.paymentRequest.requiredShippingContactFields.push(
                            "phone"
                          ),
                        (this.paymentRequest.shippingType =
                          "pickup" === n.shippingType
                            ? "servicePickup"
                            : n.shippingType || "shipping")),
                      (this.session = new ApplePaySession(
                        2,
                        this.paymentRequest
                      )),
                      this.session.addEventListener(
                        "validatemerchant",
                        this.onValidateMerchant.bind(this)
                      ),
                      this.session.addEventListener(
                        "paymentauthorized",
                        this.onPaymentAuthorized.bind(this)
                      ),
                      this.session.addEventListener(
                        "paymentmethodselected",
                        this.onPaymentMethodSelected.bind(this)
                      ),
                      this.session.addEventListener(
                        "shippingcontactselected",
                        this.onShippingAddressChange.bind(this)
                      ),
                      this.session.addEventListener(
                        "shippingmethodselected",
                        this.onShippingOptionChange.bind(this)
                      ),
                      this.session.addEventListener(
                        "cancel",
                        this.onPaymentCanceled.bind(this)
                      );
                  }
                  return (
                    (e.prototype.updatePaymentDetails = function (e) {
                      if (e.displayItems) {
                        this.paymentRequest.lineItems = [];
                        for (var t = 0, n = e.displayItems; t < n.length; t++) {
                          var r = n[t],
                            a = {
                              type:
                                !0 === r.isAmountPending ? "pending" : "final",
                              label: r.label,
                              amount: r.amount.value,
                            };
                          this.paymentRequest.lineItems.push(a);
                        }
                      }
                      if (e.shippingOptions) {
                        this.paymentRequest.shippingMethods = [];
                        for (
                          var o = 0, i = e.shippingOptions;
                          o < i.length;
                          o++
                        ) {
                          var s = i[o],
                            l = {
                              label: s.label,
                              detail: s.detail || "",
                              amount: s.amount.value,
                              identifier: s.id,
                            };
                          this.paymentRequest.shippingMethods.push(l);
                        }
                      }
                      if (!e.total)
                        throw "`total` is required parameter for `PaymentDetails`.";
                      (this.paymentRequest.currencyCode =
                        e.total.amount.currency),
                        (this.paymentRequest.total = {
                          type:
                            !0 === e.total.isAmountPending
                              ? "pending"
                              : "final",
                          label: e.total.label,
                          amount: e.total.amount.value,
                        });
                    }),
                    (e.prototype.updatePaymentMethod = function () {}),
                    (e.prototype.convertPaymentAddress = function (e) {
                      return {
                        country: e.countryCode || "",
                        addressLine: e.addressLines || [],
                        region: e.administrativeArea || "",
                        city: e.locality || "",
                        dependentLocality: "",
                        postalCode: e.postalCode || "",
                        sortingCode: e.country || "",
                        languageCode: "",
                        organization: "",
                        recipient: e.givenName + " " + e.familyName,
                        phone: e.phoneNumber || "",
                      };
                    }),
                    (e.prototype.convertShippingMethod = function (e) {
                      for (
                        var t, n = 0, r = this.paymentRequest.shippingMethods;
                        n < r.length;
                        n++
                      )
                        if (((t = r[n]), e.identifier === t.identifier))
                          return t.identifier;
                      return "";
                    }),
                    (e.prototype.convertPaymentResponse = function (e) {
                      var t = e.shippingContact
                          ? this.convertPaymentAddress(e.shippingContact)
                          : void 0,
                        n = e.billingContact
                          ? this.convertPaymentAddress(e.billingContact)
                          : void 0,
                        r = e.shippingContact || {},
                        a = e.billingContact
                          ? e.billingContact.givenName +
                            " " +
                            e.billingContact.familyName
                          : void 0;
                      return {
                        details: { billingAddress: n },
                        methodName: "https://apple.com/apple-pay",
                        payerEmail: r.emailAddress,
                        payerName: a,
                        payerPhone: r.phoneNumber,
                        shippingAddress: t,
                        shippingOption: this.shippingOption,
                        applePayRaw: e,
                        complete: this.onPaymentComplete.bind(this),
                      };
                    }),
                    (e.prototype.show = function () {
                      var e = this;
                      return (
                        this.session.begin(),
                        new Promise(function (t, n) {
                          (e.paymentResolver = function (e) {
                            t(e);
                          }),
                            (e.paymentRejector = function (e) {
                              n(e);
                            });
                        })
                      );
                    }),
                    (e.prototype.abort = function () {
                      this.session.abort();
                    }),
                    (e.prototype.canMakePayment = function () {
                      if (this.merchantIdentifier)
                        return ApplePaySession.canMakePaymentsWithActiveCard(
                          this.merchantIdentifier
                        );
                      throw "`merchantIdentifier` is not specified.";
                    }),
                    (e.prototype.completeMerchantValidation = function (e) {
                      this.session.completeMerchantValidation(e);
                    }),
                    (e.prototype.completePaymentMethodSelection = function (
                      e,
                      t
                    ) {
                      this.session.completePaymentMethodSelection(e, t);
                    }),
                    (e.prototype.addEventListener = function (e, t) {
                      if (
                        "shippingaddresschange" !== e &&
                        "shippingoptionchange" !== e &&
                        "paymentmethodselected" !== e &&
                        "validatemerchant" !== e
                      )
                        throw (
                          'Unknown event type "' +
                          e +
                          '" for `addEventListener`.'
                        );
                      this["on" + e] = t;
                    }),
                    (e.prototype.onValidateMerchant = function (e) {
                      var t = this;
                      if ((e.stopPropagation(), this.onvalidatemerchant))
                        this.onvalidatemerchant(e);
                      else {
                        var n = new Headers({
                          "Content-Type": "application/json",
                        });
                        fetch(this.validationEndpoint, {
                          method: "POST",
                          headers: n,
                          body: JSON.stringify({
                            validationURL: e.validationURL,
                          }),
                        })
                          .then(function (e) {
                            if (200 === e.status) return e.json();
                            throw "Merchant validation error.";
                          })
                          .then(function (e) {
                            t.completeMerchantValidation(e);
                          })
                          .catch(function (e) {
                            throw e;
                          });
                      }
                    }),
                    (e.prototype.onPaymentMethodSelected = function (e) {
                      if ((e.stopPropagation(), this.onpaymentmethodselected))
                        this.onpaymentmethodselected(e);
                      else {
                        var t = this.paymentRequest.total,
                          n = this.paymentRequest.lineItems;
                        this.session.completePaymentMethodSelection(t, n);
                      }
                    }),
                    (e.prototype.onShippingAddressChange = function (e) {
                      var t = this;
                      if (this.onshippingaddresschange) {
                        e.stopPropagation();
                        var n = e.shippingContact;
                        (this.shippingAddress = this.convertPaymentAddress(n)),
                          this.onshippingaddresschange({
                            updateWith: function (e) {
                              Promise.resolve(e).then(
                                function (e) {
                                  t.updatePaymentDetails(e),
                                    t.session.completeShippingContactSelection(
                                      ApplePaySession.STATUS_SUCCESS,
                                      t.paymentRequest.shippingMethods,
                                      t.paymentRequest.total,
                                      t.paymentRequest.lineItems
                                    );
                                },
                                function (e) {
                                  t.updatePaymentDetails(e),
                                    t.session.completeShippingContactSelection(
                                      ApplePaySession.STATUS_FAILURE,
                                      t.paymentRequest.shippingMethods,
                                      t.paymentRequest.total,
                                      t.paymentRequest.lineItems
                                    );
                                }
                              );
                            },
                          });
                      }
                    }),
                    (e.prototype.onShippingOptionChange = function (e) {
                      var t = this;
                      if (this.onshippingoptionchange) {
                        e.stopPropagation();
                        var n = e.shippingMethod;
                        (this.shippingOption = this.convertShippingMethod(n)),
                          this.onshippingoptionchange({
                            updateWith: function (e) {
                              Promise.resolve(e).then(
                                function (e) {
                                  t.updatePaymentDetails(e),
                                    t.session.completeShippingMethodSelection(
                                      ApplePaySession.STATUS_SUCCESS,
                                      t.paymentRequest.total,
                                      t.paymentRequest.lineItems
                                    );
                                },
                                function (e) {
                                  t.updatePaymentDetails(e),
                                    t.session.completeShippingMethodSelection(
                                      ApplePaySession.STATUS_FAILURE,
                                      null,
                                      null
                                    );
                                }
                              );
                            },
                          });
                      }
                    }),
                    (e.prototype.onPaymentAuthorized = function (e) {
                      if (this.paymentResolver) {
                        var t = this.convertPaymentResponse(e.payment);
                        this.paymentResolver(t),
                          (this.paymentResolver = null),
                          (this.paymentRejector = null);
                      }
                    }),
                    (e.prototype.onPaymentCanceled = function (e) {
                      this.paymentRejector &&
                        (this.paymentRejector(e),
                        (this.paymentResolver = null),
                        (this.paymentRejector = null));
                    }),
                    (e.prototype.onPaymentComplete = function (e) {
                      if (
                        "success" !== e &&
                        "fail" !== e &&
                        "unknown" !== e &&
                        "" !== e
                      )
                        throw "Unkown status code for complete().";
                      var t =
                        "success" === e
                          ? ApplePaySession.STATUS_SUCCESS
                          : "fail" === e || "unknown" === e
                          ? ApplePaySession.STATUS_FAILURE
                          : ApplePaySession.STATUS_SUCCESS;
                      this.session.completePayment(t);
                    }),
                    e
                  );
                })());
          },
        ]);
      }),
        "object" == i(t) && "object" == i(e)
          ? (e.exports = o())
          : ((r = []),
            void 0 === (a = "function" == typeof (n = o) ? n.apply(t, r) : n) ||
              (e.exports = a));
    }.call(this, n(6)(e)));
  },
  function (e, t) {
    e.exports = function () {
      throw new Error("define cannot be used indirect");
    };
  },
  function (e, t) {
    var n,
      r,
      a = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function i() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        n = o;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        r = i;
      }
    })();
    var l,
      p = [],
      u = !1,
      c = -1;
    function d() {
      u &&
        l &&
        ((u = !1), l.length ? (p = l.concat(p)) : (c = -1), p.length && f());
    }
    function f() {
      if (!u) {
        var e = s(d);
        u = !0;
        for (var t = p.length; t; ) {
          for (l = p, p = []; ++c < t; ) l && l[c].run();
          (c = -1), (t = p.length);
        }
        (l = null),
          (u = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === i || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function y(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (a.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      p.push(new y(e, t)), 1 !== p.length || u || s(f);
    }),
      (y.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (a.title = "browser"),
      (a.browser = !0),
      (a.env = {}),
      (a.argv = []),
      (a.version = ""),
      (a.versions = {}),
      (a.on = m),
      (a.addListener = m),
      (a.once = m),
      (a.off = m),
      (a.removeListener = m),
      (a.removeAllListeners = m),
      (a.emit = m),
      (a.prependListener = m),
      (a.prependOnceListener = m),
      (a.listeners = function (e) {
        return [];
      }),
      (a.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (a.cwd = function () {
        return "/";
      }),
      (a.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (a.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
              return e.l;
            },
          }),
          Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
              return e.i;
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r,
      a,
      o,
      i = n(0),
      s = n.n(i),
      l = n(1);
    ((a = r || (r = {})).production = "production"), (a.sandbox = "sandboox");
    var p = function (e) {
        o = e;
      },
      u = function (e) {
        return o[e];
      },
      c = "https://js.tappaysdk.com",
      d = { en: "Pay Now", zh: "付款" },
      f = { VISA: 1, MASTERCARD: 2, JCB: 3, UNIONPAY: 4, AMEX: 5 },
      y = { VI: 1, MC: 2 },
      m = { CREDIT: 0, DEBIT: 1, PREPAID: 2 },
      h = 0,
      v = 1,
      g = 2,
      w = "card-number",
      b = "expiration-date",
      P = "ccv",
      _ = n(2),
      k = {
        amex: /^3[47]\d{0,13}/,
        mastercard:
          /(^(5[1-5]|2[3-6])\d{0,14})|^(((222[1-9])|(2720))\d{0,12})|^(((22[3-9])|(27[0-1]))\d{0,13})/,
        jcb: /^(?:2131|1800|35\d{0,2})\d{0,12}/,
        visa: /^4\d{0,15}/,
        unionpay: /^(62[0-9]{14,17})$/,
      },
      T = {
        amex: "AMEX",
        mastercard: "MASTERCARD",
        jcb: "JCB",
        visa: "VISA",
        unionpay: "UNIONPAY",
        unknown: "UNKNOWN",
      },
      C = function () {
        return T;
      },
      S = function (e) {
        return !!T[(e + "").toLowerCase()];
      },
      A = function () {
        return { lower: T.unknown.toLowerCase(), upper: T.unknown };
      },
      M = C(),
      R = function (e) {
        for (
          var t = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9], n = e.length, r = 0, a = 0;
          0 < n--;

        )
          r += (a ^= 1) ? e.charCodeAt(n) - 48 : t[e.charCodeAt(n) - 48];
        return 0 == r % 10;
      },
      O = function (e, t) {
        return (
          (e = (e + "").replace(/\s+|-/g, "")),
          void 0 === t
            ? /^\d{15,19}$/.test(e) && R(e)
            : t === M.amex
            ? /^\d{15}$/.test(e) && R(e)
            : /^\d{16,19}$/.test(e) && R(e)
        );
      },
      E = function (e, t) {
        var n,
          r,
          a = e;
        return (
          (t += ""),
          !!/^\d+$/.test((a += "")) &&
            !!/^\d+$/.test(t) &&
            1 <= a &&
            12 >= a &&
            (2 === t.length && (t = "20" + t),
            4 === t.length &&
              ((r = new Date(t, a)),
              (n = new Date()),
              r.setMonth(r.getMonth() - 1),
              r.setMonth(r.getMonth() + 1, 1),
              r > n))
        );
      },
      q = function (e) {
        for (var t in k) if (!0 === k[t].test(e)) return M[t];
        return "Unknown";
      },
      D = function (e, t) {
        return void 0 === t
          ? /^\d{3,4}$/.test(e)
          : t === M.amex
          ? /^\d{4}$/.test(e)
          : /^\d{3}$/.test(e);
      };
    function x(e) {
      return (x =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function N(e, t) {
      for (var n, r = 0; r < t.length; r++)
        ((n = t[r]).enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
    }
    function I(e, t) {
      return !t || ("object" !== x(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function j(e) {
      var t = "function" == typeof Map ? new Map() : void 0;
      return (j = function (e) {
        function n() {
          return W(e, arguments, U(this).constructor);
        }
        if (
          null === e ||
          !(function (e) {
            return -1 !== Function.toString.call(e).indexOf("[native code]");
          })(e)
        )
          return e;
        if ("function" != typeof e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, n);
        }
        return (
          (n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          L(n, e)
        );
      })(e);
    }
    function W() {
      return (W = F()
        ? Reflect.construct
        : function (e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var a = new (Function.bind.apply(e, r))();
            return n && L(a, n.prototype), a;
          }).apply(null, arguments);
    }
    function F() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function L(e, t) {
      return (L =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function U(e) {
      return (U = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var z = (function (e) {
      function t(e, r) {
        var a;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          ((a = n.call(this, e)).name = r),
          a
        );
      }
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && L(e, t);
      })(t, e);
      var n = (function (e) {
        var t = F();
        return function () {
          var n,
            r = U(e);
          if (t) {
            var a = U(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return I(this, n);
        };
      })(t);
      return (
        (function (e, t, n) {
          t && N(e.prototype, t), n && N(e, n);
        })(t, [
          {
            key: "toJSON",
            value: function () {
              var e = {};
              return (
                Object.getOwnPropertyNames(this).forEach(function (t) {
                  e[t] = this[t];
                }, this),
                e
              );
            },
          },
        ]),
        t
      );
    })(j(Error));
    function V(e) {
      return (V =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function B(e, t) {
      return (B =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function Y(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = K(e);
        if (t) {
          var a = K(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return G(this, n);
      };
    }
    function G(e, t) {
      return !t || ("object" !== V(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function K(e) {
      return (K = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var J = (function (e) {
      function t(e) {
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
          n.call(this, e, "TapPayNetworkError")
        );
      }
      !(function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && B(e, t);
      })(t, e);
      var n = Y(t);
      return t;
    })(z);
    function H(e) {
      return (H =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function X(e, t) {
      return (X =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function $(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = Q(e);
        if (t) {
          var a = Q(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return Z(this, n);
      };
    }
    function Z(e, t) {
      return !t || ("object" !== H(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function Q(e) {
      return (Q = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var ee = (function (e) {
        function t(e) {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            n.call(this, e, "TapPaySDKError")
          );
        }
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && X(e, t);
        })(t, e);
        var n = $(t);
        return t;
      })(z),
      te = function (e) {
        if ("TapPaySDKError" === e.name) {
          var t = new ee(e.message);
          return (t.stack = e.stack), t;
        }
        if ("TapPayNetworkError" === e.name) {
          var n = new J(e.message);
          return (n.stack = e.stack), n;
        }
        return e;
      },
      ne = null,
      re = null,
      ae = {},
      oe = function () {
        return ae;
      },
      ie = function () {
        return ne;
      },
      se = function (e) {
        ne.contentWindow.postMessage(JSON.stringify(e), c);
      },
      le = [c, "https://fraud.tappaysdk.com"],
      pe = new Map();
    pe.set("send_device_id", []),
      pe.set("fraud_id", []),
      pe.set("iframe_get_prime_ready", []),
      pe.set("setup_payment_request_done", []),
      pe.set("payment_request_not_support_in_iframe", []),
      pe.set("payment_request_get_prime_done", []),
      pe.set("payment_request_apple_pay_get_prime_done", []),
      pe.set("apple_pay_get_session_done", []),
      pe.set("samsung_pay_iframe_result", []),
      pe.set("line_pay_get_prime_done", []),
      pe.set("jko_pay_get_prime_done", []),
      pe.set("easy_wallet_get_prime_done", []),
      pe.set("google_pay_get_prime_done", []),
      pe.set("apple_pay_get_prime_done", []),
      pe.set("update", []),
      pe.set("cardtype-change", []),
      pe.set("field-focus-change", []),
      pe.set("field-status-change", []),
      pe.set("get_prime_for_tappay_fields_done", []),
      pe.set("get_prime_for_card_view_done", []),
      pe.set("get_prime_for_ccv_prime_done", []),
      pe.set("ccv_prime_field_ready", []),
      pe.set("ccv_field_ready", []),
      pe.set("atome_get_prime_done", []),
      pe.set("pi_wallet_get_prime_done", []),
      pe.set("plus_pay_get_prime_done", []);
    var ue = function (e, t) {
        if (pe.has(e)) {
          var n = pe.get(e);
          n.push(t), pe.set(e, n);
        }
      },
      ce = function (e, t) {
        return e.classList
          ? e.classList.contains(t)
          : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"));
      },
      de = function (e) {
        return "function" != typeof e;
      },
      fe = function (e) {
        return e instanceof Element;
      },
      ye = function (e) {
        return !(e instanceof Element);
      },
      me = function (e) {
        return void 0 !== e;
      },
      he = function (e) {
        return void 0 === e;
      },
      ve = function (e) {
        return "string" == typeof e;
      },
      ge = function (e) {
        return "string" != typeof e;
      },
      we = function (e) {
        return "boolean" != typeof e;
      },
      be = function (e) {
        return "number" != typeof e;
      },
      Pe = function (e) {
        return 0 > e;
      },
      _e = function (e, t) {
        return e > t;
      },
      ke = function (e, t) {
        e.classList
          ? e.classList.add(t)
          : !ce(e, t) && (e.className += " " + t);
      },
      Te = function (e) {
        var t,
          n = window.location.origin;
        if (null !== URL && me(URL))
          try {
            t = new URL(e);
          } catch (e) {
            return !1;
          }
        else (t = document.createElement("a")).href = n;
        return (
          ("https://sandbox-redirect.tappaysdk.com" === t.origin ||
            "https://prod-redirect.tappaysdk.com" === t.origin) &&
          "https:" === t.protocol
        );
      },
      Ce = function (e) {
        try {
          var t = e.token.paymentData;
          if (!t) return !1;
          if (!t.data || ge(t.data)) return !1;
          if (!t.version || ge(t.version)) return !1;
          if (!t.signature || ge(t.signature)) return !1;
          if (!t.header) return !1;
          if (!t.header.publicKeyHash || ge(t.header.publicKeyHash)) return !1;
          if (!t.header.ephemeralPublicKey || ge(t.header.ephemeralPublicKey))
            return !1;
          if (!t.header.transactionId || ge(t.header.transactionId)) return !1;
        } catch (e) {
          return !1;
        }
        return !0;
      },
      Se = function () {
        return window.ApplePaySession
          ? ApplePaySession.canMakePayments()
            ? !(
                "https:" !== location.protocol &&
                (console.warn(
                  "[TapPay] Trying to call an ApplePaySession API from an insecure document."
                ),
                1)
              )
            : (console.warn("[TapPay] User Can Not Use Apple Pay"), !1)
          : (console.warn("[TapPay] Your Browser Did Not Support Apple Pay"),
            !1);
      },
      Ae = function () {
        var e;
        try {
          e = (
            navigator.languages && navigator.languages.length
              ? navigator.languages[0]
              : navigator.userLanguage
              ? navigator.userLanguage
              : navigator.language
          )
            .split("-")[0]
            .toLowerCase();
        } catch (e) {
          return d.en;
        }
        var t = d[e];
        return t || d.en;
      },
      Me = function (e) {
        if (!e) return null;
        var t = e.toUpperCase();
        return me(y[t]) ? y[t] : null;
      },
      Re = function (e) {
        var t = e.toUpperCase();
        return me(f[t]) ? f[t] : null;
      },
      Oe = function (e) {
        var t = e.toUpperCase();
        return me(m[t]) ? m[t] : null;
      },
      Ee = function (e) {
        return new Promise(function (t, n) {
          e(function (e, r) {
            return e ? void n(e) : void t(r);
          });
        });
      };
    function qe(e, t) {
      for (var n, r = 0; r < t.length; r++)
        ((n = t[r]).enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
    }
    function De(e, t, n) {
      var r = t.get(e);
      if (!r)
        throw new TypeError("attempted to set private field on non-instance");
      if (r.set) r.set.call(e, n);
      else {
        if (!r.writable)
          throw new TypeError("attempted to set read only private field");
        r.value = n;
      }
      return n;
    }
    function xe(e, t) {
      var n = t.get(e);
      if (!n)
        throw new TypeError("attempted to get private field on non-instance");
      return n.get ? n.get.call(e) : n.value;
    }
    var Ne = (function () {
        function e() {
          var t = this;
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            Ie.set(this, { writable: !0, value: void 0 }),
            je.set(this, { writable: !0, value: void 0 }),
            We.set(this, { writable: !0, value: void 0 }),
            Fe.set(this, {
              writable: !0,
              value: function () {
                ue("apple_pay_get_prime_done", function (e) {
                  xe(t, We) && xe(t, We).call(t, e.err, e.result);
                }),
                  ue("apple_pay_get_session_done", function (e) {
                    xe(t, je) && xe(t, je).call(t, e.err, e.result);
                  });
              },
            }),
            xe(this, Fe).call(this);
        }
        return (
          (function (e, t, n) {
            t && qe(e.prototype, t), n && qe(e, n);
          })(e, [
            {
              key: "checkAvailability",
              value: function () {
                return Se();
              },
            },
            {
              key: "canMakePaymentsWithActiveCard",
              value: function (e, t) {
                return Se()
                  ? void ApplePaySession.canMakePaymentsWithActiveCard(e)
                      .then(function (e) {
                        t({
                          browserSupportPaymentRequest: !0,
                          canMakePaymentWithActiveCard: e,
                          canMakePaymentError: null,
                        });
                      })
                      .catch(function (e) {
                        t({
                          browserSupportPaymentRequest: !0,
                          canMakePaymentWithActiveCard: !1,
                          canMakePaymentError: e,
                        });
                      })
                  : t({
                      browserSupportPaymentRequest: !1,
                      canMakePaymentWithActiveCard: !1,
                      canMakePaymentError: null,
                    });
              },
            },
            {
              key: "buildSession",
              value: function (e) {
                var t = this,
                  n =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : "",
                  r = 2 < arguments.length ? arguments[2] : void 0,
                  a = 3 < arguments.length ? arguments[3] : void 0;
                return "https:" === window.location.protocol
                  ? (De(this, Ie, new ApplePaySession(1, e)),
                    (xe(this, Ie).onvalidatemerchant = function (e) {
                      var r = {
                        appId: u("appID"),
                        appKey: u("appKey"),
                        appName: window.location.hostname,
                        appleMerchantId: n,
                        merchant_domain: window.location.hostname,
                        validationURL: e.validationURL,
                        tappay_endpoint: u("endPoint"),
                      };
                      De(t, je, function (e, n) {
                        return e
                          ? void a({
                              status: 403,
                              msg: "[Apple Pay] Get Session error: "
                                .concat(e.status, " ")
                                .concat(e.msg),
                            })
                          : void xe(t, Ie).completeMerchantValidation(n);
                      }),
                        se({ event: "apple_pay_get_session", payload: r });
                    }),
                    (xe(this, Ie).onpaymentauthorized = function (e) {
                      var o = e.payment;
                      if (!Ce(o))
                        return (
                          a({
                            status: 402,
                            msg: "Parsing Apple Pay result happen error",
                          }),
                          xe(t, Ie).completePayment(
                            ApplePaySession.STATUS_FAILURE
                          )
                        );
                      var i = function (e) {
                        xe(t, Ie).completePayment(e);
                      };
                      De(t, We, function (t, n) {
                        return t
                          ? a(t)
                          : 0 === n.status
                          ? void r(n.prime, e, i)
                          : a(n);
                      });
                      var s = {
                        app_id: u("appID"),
                        app_key: u("appKey"),
                        app_name: window.location.hostname,
                        pay_token_data: o.token.paymentData,
                        apple_merchant_id: n,
                        platform_type: "2",
                      };
                      se({ event: "apple_pay_get_prime", parameter: s });
                    }),
                    xe(this, Ie))
                  : console.warn(
                      "[TapPay] Trying to call an ApplePaySession API from an insecure document."
                    );
              },
            },
          ]),
          e
        );
      })(),
      Ie = new WeakMap(),
      je = new WeakMap(),
      We = new WeakMap(),
      Fe = new WeakMap();
    function Le(e, t) {
      for (var n, r = 0; r < t.length; r++)
        ((n = t[r]).enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
    }
    function Ue(e, t) {
      var n = t.get(e);
      if (!n)
        throw new TypeError("attempted to get private field on non-instance");
      return n.get ? n.get.call(e) : n.value;
    }
    function ze(e, t, n) {
      var r = t.get(e);
      if (!r)
        throw new TypeError("attempted to set private field on non-instance");
      if (r.set) r.set.call(e, n);
      else {
        if (!r.writable)
          throw new TypeError("attempted to set read only private field");
        r.value = n;
      }
      return n;
    }
    var Ve = (function () {
        function e(t) {
          var n = this;
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            Be.set(this, { writable: !0, value: void 0 }),
            Ye.set(this, { writable: !0, value: void 0 }),
            Ge.set(this, { writable: !0, value: void 0 }),
            Ke.set(this, { writable: !0, value: void 0 }),
            Je.set(this, { writable: !0, value: void 0 }),
            He.set(this, { writable: !0, value: void 0 }),
            Xe.set(this, { writable: !0, value: void 0 }),
            $e.set(this, {
              writable: !0,
              value: function () {
                ue("update", function (e) {
                  ze(n, Xe, e.result), Ue(n, Je).call(n, e.result);
                }),
                  ue("cardtype-change", function (e) {
                    if ("tappay-field" === e.field_type) {
                      Ue(n, He).cardType = e.result;
                      var t = n.formatTappayFieldUpdate();
                      Ue(n, Je).call(n, t);
                    }
                  }),
                  ue("field-focus-change", function (e) {
                    if ("tappay-field" === e.field_type) {
                      var t = e.result,
                        r = Ue(n, He)[t.type].el;
                      "focus" === t.state
                        ? ke(r, "tappay-field-focus")
                        : (function (e, t) {
                            if (e.classList) e.classList.remove(t);
                            else if (ce(e, t)) {
                              var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                              e.className = e.className.replace(n, " ");
                            }
                          })(r, "tappay-field-focus");
                    }
                  }),
                  ue("field-status-change", function (e) {
                    if ("tappay-field" === e.field_type) {
                      var t = e.result,
                        r = Ue(n, He).status;
                      t.type === w
                        ? (r.number = t.status)
                        : t.type === b
                        ? (r.expiry = t.status)
                        : t.type === P && (r.ccv = t.status);
                      var a = n.formatTappayFieldUpdate();
                      Ue(n, Je).call(n, a);
                    }
                  }),
                  ue("get_prime_for_tappay_fields_done", function (e) {
                    Ue(n, Ge).call(n, e.result);
                  }),
                  ue("get_prime_for_card_view_done", function (e) {
                    Ue(n, Ke).call(n, e.result);
                  });
              },
            }),
            ze(this, Be, t),
            ze(this, Je, function (e) {
              return e;
            }),
            Ue(this, $e).call(this);
        }
        return (
          (function (e, t, n) {
            t && Le(e.prototype, t), n && Le(e, n);
          })(e, [
            {
              key: "setup",
              value: function (e, t, n) {
                if ((ve(e) && (e = document.querySelector(e)), !e))
                  return console.error(
                    "[TapPay] TPDirect.card.setup(element): Missing element param"
                  );
                if (ye(e)) {
                  var r = e;
                  this.setupTappayFields(r);
                } else {
                  if (
                    n &&
                    (void 0 !== n.isMaskCreditCardNumber ||
                      n.isMaskCreditCardNumber)
                  ) {
                    if (we(n.isMaskCreditCardNumber))
                      return console.error(
                        "[TapPay] TPDirect.card.setup: failed to setup TapPay fields isMaskCreditCardNumber type error"
                      );
                    if (n.isMaskCreditCardNumber) {
                      if (
                        be(n.maskCreditCardNumberRange.beginIndex) ||
                        be(n.maskCreditCardNumberRange.endIndex)
                      )
                        return console.error(
                          "[TapPay] TPDirect.card.setup: failed to setup TapPay fields maskCreditCardNumberRange type error"
                        );
                      if (
                        Pe(n.maskCreditCardNumberRange.beginIndex) ||
                        Pe(n.maskCreditCardNumberRange.endIndex) ||
                        _e(
                          n.maskCreditCardNumberRange.beginIndex,
                          n.maskCreditCardNumberRange.endIndex
                        )
                      )
                        return console.error(
                          "[TapPay] TPDirect.card.setup: failed to setup TapPay fields maskCreditCardNumberRange error"
                        );
                    }
                  }
                  var a = {
                    appKey: u("appKey"),
                    appID: u("appID"),
                    serverType: u("type"),
                    hostname: window.location.hostname,
                    origin: window.location.origin,
                    style: t,
                    config: n || { isUsedCcv: !0, isMaskCreditCardNumber: !1 },
                  };
                  ze(this, Ye, document.createElement("iframe")),
                    Ue(this, Ye).setAttribute("frameborder", "0"),
                    Ue(this, Ye).setAttribute("allowtransparency", "true"),
                    Ue(this, Ye).setAttribute("scrolling", "no"),
                    (Ue(this, Ye).style.border = "none"),
                    (Ue(this, Ye).style.margin = "0px"),
                    (Ue(this, Ye).style.padding = "0px"),
                    (Ue(this, Ye).style.width = "1px"),
                    (Ue(this, Ye).style.minWidth = "100%"),
                    (Ue(this, Ye).style.overflow = "hidden"),
                    (Ue(this, Ye).style.display = "block"),
                    (Ue(this, Ye).style.height = "24px"),
                    t &&
                      t.lineHeight &&
                      (Ue(this, Ye).style.height = t.lineHeight),
                    (Ue(this, Ye).src =
                      "https://js.tappaysdk.com/sdk/tpdirect/card-view/html/v5.14.0?" +
                      encodeURIComponent(JSON.stringify(a))),
                    e.appendChild(Ue(this, Ye));
                }
              },
            },
            {
              key: "setupTappayFields",
              value: function (e) {
                if (
                  void 0 !== e.isMaskCreditCardNumber ||
                  e.isMaskCreditCardNumber
                ) {
                  if (we(e.isMaskCreditCardNumber))
                    return console.error(
                      "[TapPay] TPDirect.card.setup: failed to setup TapPay fields isMaskCreditCardNumber type error"
                    );
                  if (e.isMaskCreditCardNumber) {
                    if (
                      be(e.maskCreditCardNumberRange.beginIndex) ||
                      be(e.maskCreditCardNumberRange.endIndex)
                    )
                      return console.error(
                        "[TapPay] TPDirect.card.setup: failed to setup TapPay fields maskCreditCardNumberRange type error"
                      );
                    if (
                      Pe(e.maskCreditCardNumberRange.beginIndex) ||
                      Pe(e.maskCreditCardNumberRange.endIndex) ||
                      _e(
                        e.maskCreditCardNumberRange.beginIndex,
                        e.maskCreditCardNumberRange.endIndex
                      )
                    )
                      return console.error(
                        "[TapPay] TPDirect.card.setup: failed to setup TapPay fields maskCreditCardNumberRange error"
                      );
                  }
                }
                var t = this.setupTappayField(e.fields.number.element, {
                    origin: window.location.origin,
                    type: w,
                    placeholder: e.fields.number.placeholder,
                    styles: e.styles,
                    field_type: "tappay-field",
                    isMaskCreditCardNumber: e.isMaskCreditCardNumber,
                    maskCreditCardNumberRange: e.maskCreditCardNumberRange,
                  }),
                  n = this.setupTappayField(e.fields.expirationDate.element, {
                    origin: window.location.origin,
                    type: b,
                    placeholder: e.fields.expirationDate.placeholder,
                    styles: e.styles,
                    field_type: "tappay-field",
                    isMaskCreditCardNumber: e.isMaskCreditCardNumber,
                    maskCreditCardNumberRange: e.maskCreditCardNumberRange,
                  }),
                  r = null;
                void 0 !== e.fields.ccv &&
                  (r = this.setupTappayField(e.fields.ccv.element, {
                    origin: window.location.origin,
                    type: P,
                    placeholder: e.fields.ccv.placeholder,
                    styles: e.styles,
                    field_type: "tappay-field",
                    isMaskCreditCardNumber: e.isMaskCreditCardNumber,
                    maskCreditCardNumberRange: e.maskCreditCardNumberRange,
                  }));
                var a = !t || !n;
                return (a = null == r ? a : a || !r)
                  ? void console.error(
                      "[TapPay] TPDirect.card.setup: failed to setup TapPay fields"
                    )
                  : void ze(this, He, {
                      "card-number": t,
                      "expiration-date": n,
                      ccv: r,
                      cardType: "unknown",
                      status: { number: v, expiry: v, ccv: v },
                    });
              },
            },
            {
              key: "setupTappayField",
              value: function (e, t) {
                if ((ve(e) && (e = document.querySelector(e)), !ye(e))) {
                  var n = document.createElement("iframe");
                  return (
                    n.setAttribute("frameborder", "0"),
                    n.setAttribute("allowtransparency", "true"),
                    n.setAttribute("scrolling", "no"),
                    (n.style.border = "none"),
                    (n.style.width = "100%"),
                    (n.style.height = "100%"),
                    (n.style.float = "left"),
                    (n.src =
                      "https://js.tappaysdk.com/sdk/tpdirect/tappay-field/html/v5.14.0?" +
                      encodeURIComponent(JSON.stringify(t))),
                    e.appendChild(n),
                    { el: e, iframe: n }
                  );
                }
                console.warn(
                  "[TapPay] TPDirect.card.setup(): Cannot find element for " +
                    t.type
                );
              },
            },
            {
              key: "onUpdate",
              value: function (e) {
                return de(e)
                  ? console.error(
                      "[TapPay] TPDirect.card.onUpdate(callback): callback in not a function"
                    )
                  : void ze(this, Je, e);
              },
            },
            {
              key: "getPrime",
              value: function (e) {
                return de(e)
                  ? console.error(
                      "[TapPay] TPDirect.card.getPrime(callback): callback is not a function"
                    )
                  : Ue(this, He)
                  ? this.getPrimeForTappayFields(e)
                  : Ue(this, Ye)
                  ? void this.getPrimeForCardView(e)
                  : console.error(
                      "[TapPay] You need to call TPDirect.card.setup(element) first"
                    );
              },
            },
            {
              key: "getTappayFieldsStatus",
              value: function () {
                return this.formatTappayFieldUpdate();
              },
            },
            {
              key: "getPrimeForTappayFields",
              value: function (e) {
                return this.formatTappayFieldUpdate().canGetPrime
                  ? (ze(this, Ge, e),
                    void se({ event: "get_prime_for_tappay_fields" }))
                  : e({
                      status: -5,
                      msg: "[Direct Pay - Fields] canGetPrime is false, not ready to get prime, please use TPDirect.card.getTappayFieldsStatus() to retrive canGetPrime parameter, or detect the canGetPrime parameter with TPDirect.card.onUpdate function",
                    });
              },
            },
            {
              key: "getPrimeForCardView",
              value: function (e) {
                return Ue(this, Xe) && Ue(this, Xe).canGetPrime
                  ? (ze(this, Ke, e),
                    void se({ event: "get_prime_for_card_view" }))
                  : e({
                      status: -5,
                      msg: "[Direct Pay - Card View] canGetPrime is false, not ready to get prime, please listen to update with TPDirect.card.onUpdate",
                    });
              },
            },
            {
              key: "validate",
              value: function (e, t, n, r) {
                var a = q(e);
                return {
                  cardType: a,
                  isCardNumberValid: O(e, a),
                  isExpiryDateValid: E(t, n),
                  isCCVValid: D(r, a),
                };
              },
            },
            {
              key: "formatTappayFieldUpdate",
              value: function () {
                var e = Ue(this, He).status,
                  t = Ue(this, He).cardType,
                  n = null != Ue(this, He).ccv,
                  r = e.number === h && e.expiry === h,
                  a = e.number === g || e.expiry === g;
                return (
                  n
                    ? ((r = r && e.ccv === h), (a = a || e.ccv === g))
                    : (e.ccv = h),
                  { canGetPrime: r, hasError: a, cardType: t, status: e }
                );
              },
            },
          ]),
          e
        );
      })(),
      Be = new WeakMap(),
      Ye = new WeakMap(),
      Ge = new WeakMap(),
      Ke = new WeakMap(),
      Je = new WeakMap(),
      He = new WeakMap(),
      Xe = new WeakMap(),
      $e = new WeakMap();
    function Ze(e, t) {
      for (var n, r = 0; r < t.length; r++)
        ((n = t[r]).enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
    }
    function Qe(e, t, n) {
      var r = t.get(e);
      if (!r)
        throw new TypeError("attempted to set private field on non-instance");
      if (r.set) r.set.call(e, n);
      else {
        if (!r.writable)
          throw new TypeError("attempted to set read only private field");
        r.value = n;
      }
      return n;
    }
    function et(e, t) {
      var n = t.get(e);
      if (!n)
        throw new TypeError("attempted to get private field on non-instance");
      return n.get ? n.get.call(e) : n.value;
    }
    var tt = (function () {
        function e() {
          var t = this;
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            nt.set(this, { writable: !0, value: !1 }),
            rt.set(this, { writable: !0, value: void 0 }),
            at.set(this, {
              writable: !0,
              value: function (e) {
                if (ie())
                  Qe(t, rt, function (t, n) {
                    return t ? void e(t, null) : void e(null, n);
                  }),
                    et(t, nt) && se({ event: "easy_wallet_get_prime" });
                else {
                  var n = new ee("Doesn't load pfirame yet");
                  e(n, null);
                }
              },
            }),
            ot.set(this, {
              writable: !0,
              value: function () {
                ue("easy_wallet_get_prime_done", function (e) {
                  et(t, rt).call(t, e.err, e.result);
                }),
                  ue("iframe_get_prime_ready", function () {
                    Qe(t, nt, !0),
                      et(t, rt) && se({ event: "easy_wallet_get_prime" });
                  });
              },
            }),
            et(this, ot).call(this);
        }
        return (
          (function (e, t, n) {
            t && Ze(e.prototype, t), n && Ze(e, n);
          })(e, [
            {
              key: "getPrime",
              value: function (e) {
                return de(e)
                  ? Ee(et(this, at))
                  : void et(this, at).call(this, e);
              },
            },
            {
              key: "pay",
              value: function (e) {
                return Te(e)
                  ? void (window.location.href = e)
                  : console.error("[TapPay] Your payment url is not valid.");
              },
            },
          ]),
          e
        );
      })(),
      nt = new WeakMap(),
      rt = new WeakMap(),
      at = new WeakMap(),
      ot = new WeakMap();
    function it(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), 0 <= t.indexOf(n) || (a[n] = e[n]);
          return a;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            !(0 <= t.indexOf(n)) &&
              Object.prototype.propertyIsEnumerable.call(e, n) &&
              (a[n] = e[n]);
      }
      return a;
    }
    function st(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function lt(e) {
      for (var t, n = 1; n < arguments.length; n++)
        (t = null == arguments[n] ? {} : arguments[n]),
          n % 2
            ? st(Object(t), !0).forEach(function (n) {
                pt(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : st(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
      return e;
    }
    function pt(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function ut(e, t) {
      for (var n, r = 0; r < t.length; r++)
        ((n = t[r]).enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
    }
    function ct(e, t, n) {
      var r = t.get(e);
      if (!r)
        throw new TypeError("attempted to set private field on non-instance");
      if (r.set) r.set.call(e, n);
      else {
        if (!r.writable)
          throw new TypeError("attempted to set read only private field");
        r.value = n;
      }
      return n;
    }
    function dt(e, t) {
      var n = t.get(e);
      if (!n)
        throw new TypeError("attempted to get private field on non-instance");
      return n.get ? n.get.call(e) : n.value;
    }
    var ft = (function () {
        function e() {
          var t = this;
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            yt.set(this, { writable: !0, value: void 0 }),
            mt.set(this, { writable: !0, value: void 0 }),
            ht.set(this, { writable: !0, value: void 0 }),
            vt.set(this, { writable: !0, value: void 0 }),
            gt.set(this, { writable: !0, value: void 0 }),
            wt.set(this, { writable: !0, value: void 0 }),
            bt.set(this, {
              writable: !0,
              value: function () {
                ue("google_pay_get_prime_done", function (e) {
                  dt(t, wt).call(t, e.error, e.result);
                });
              },
            }),
            dt(this, bt).call(this);
        }
        return (
          (function (e, t, n) {
            t && ut(e.prototype, t), n && ut(e, n);
          })(e, [
            {
              key: "setupTransactionPrice",
              value: function (e) {
                dt(this, mt).transactionInfo = {
                  currencyCode: e.currency,
                  totalPrice: e.price,
                  totalPriceStatus: "FINAL",
                };
              },
            },
            {
              key: "setupGooglePay",
              value: function (e) {
                ct(this, ht, e);
              },
            },
            {
              key: "setupGooglePayButton",
              value: function (e) {
                var t = this,
                  n = dt(this, vt).createButton({
                    buttonColor: e.color,
                    buttonType: e.type,
                    onClick: function () {
                      t.loadPaymentDataAndGetPrime(e.getPrimeCallback);
                    }.bind(this),
                  });
                document.querySelector(e.el).appendChild(n);
              },
            },
            {
              key: "setupPaymentRequest",
              value: function (e, t) {
                var n = this,
                  r = "production" === u("type") ? "PRODUCTION" : "TEST";
                return google
                  ? void (
                      !this.parsePaymentRequestData(e) ||
                      (ct(
                        this,
                        vt,
                        new google.payments.api.PaymentsClient({
                          environment: r,
                        })
                      ),
                      dt(this, vt)
                        .isReadyToPay(dt(this, gt))
                        .then(function (e) {
                          e.result && ct(n, yt, !0),
                            t(null, { canUseGooglePay: dt(n, yt) });
                        })
                        .catch(function (e) {
                          t(e, { canUseGooglePay: !1 });
                        }))
                    )
                  : console.error(
                      "[TapPay] Please includ the google pay sdk https://pay.google.com/gp/p/js/pay.js in front of tappay sdk"
                    );
              },
            },
            {
              key: "getPrime",
              value: function (e) {
                this.loadPaymentDataAndGetPrime(function (t, n) {
                  e(t, n);
                });
              },
            },
            {
              key: "validateItemInSupportedArray",
              value: function (e, t) {
                return (
                  !!(e instanceof Array) &&
                  e
                    .map(function (e) {
                      return -1 !== t.indexOf(e);
                    })
                    .every(function (e) {
                      return !0 === e;
                    })
                );
              },
            },
            {
              key: "parsePaymentRequestData",
              value: function (e) {
                var t = dt(this, ht),
                  n = { apiVersion: 2, apiVersionMinor: 0 },
                  r = e.allowedNetworks,
                  a = t.allowedCardAuthMethods;
                if (
                  !this.validateItemInSupportedArray(r, [
                    "AMEX",
                    "DISCOVER",
                    "JCB",
                    "MASTERCARD",
                    "VISA",
                  ])
                )
                  return !1;
                if (
                  !this.validateItemInSupportedArray(a, [
                    "PAN_ONLY",
                    "CRYPTOGRAM_3DS",
                  ])
                )
                  return !1;
                var o = {
                    type: "CARD",
                    parameters: {
                      allowPrepaidCards: t.allowPrepaidCards,
                      allowedAuthMethods: a,
                      allowedCardNetworks: r,
                      billingAddressParameters: {
                        format: t.billingAddressFormat,
                        phoneNumberRequired: t.phoneNumberRequired,
                      },
                      billingAddressRequired: t.billingAddressRequired,
                    },
                  },
                  i = lt({}, n);
                i.allowedPaymentMethods = [o];
                var s = lt(
                    lt({}, o),
                    {},
                    {
                      tokenizationSpecification: {
                        type: "PAYMENT_GATEWAY",
                        parameters: {
                          gateway: "tappay",
                          gatewayMerchantId: "tappay",
                        },
                      },
                    }
                  ),
                  l = lt({}, n);
                return (
                  (l.allowedPaymentMethods = [s]),
                  (l.transactionInfo = {
                    totalPriceStatus: "FINAL",
                    totalPrice: e.price,
                    currencyCode: e.currency,
                  }),
                  (l.merchantInfo = {
                    merchantName: t.merchantName,
                    merchantId: t.googleMerchantId,
                  }),
                  (l.emailRequired = t.emailRequired),
                  (l.shippingAddressRequired = t.shippingAddressRequired),
                  (l.shippingAddressParameters = {
                    allowedCountryCodes: t.allowedCountryCodes,
                    phoneNumberRequired: t.phoneNumberRequired,
                  }),
                  ct(this, gt, i),
                  ct(this, mt, l),
                  !0
                );
              },
            },
            {
              key: "loadPaymentDataAndGetPrime",
              value: function (e) {
                var t = this;
                return dt(this, yt)
                  ? void dt(this, vt)
                      .loadPaymentData(dt(this, mt))
                      .then(
                        function (n) {
                          se({
                            event: "google_pay_get_prime",
                            payment_data: n,
                          }),
                            ct(t, wt, function (t, n) {
                              if (t) e(t, null);
                              else if (0 === n.status) {
                                n.status;
                                var r = n.prime,
                                  a =
                                    (n.msg, it(n, ["status", "prime", "msg"]));
                                a.merchant_reference_info ||
                                  (a.merchant_reference_info = {
                                    affiliate_codes: [],
                                  }),
                                  e(null, r, a);
                              } else e(n, null);
                            });
                        }.bind(this)
                      )
                      .catch(function (t) {
                        e(
                          {
                            status: 2200,
                            msg: "[Google Pay] Unexcept Error",
                            originalError: t,
                          },
                          null
                        );
                      })
                  : console.error(
                      "[TapPay] Your device doesn't support Google Pay"
                    );
              },
            },
          ]),
          e
        );
      })(),
      yt = new WeakMap(),
      mt = new WeakMap(),
      ht = new WeakMap(),
      vt = new WeakMap(),
      gt = new WeakMap(),
      wt = new WeakMap(),
      bt = new WeakMap();
    function Pt(e, t) {
      for (var n, r = 0; r < t.length; r++)
        ((n = t[r]).enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
    }
    function _t(e, t, n) {
      var r = t.get(e);
      if (!r)
        throw new TypeError("attempted to set private field on non-instance");
      if (r.set) r.set.call(e, n);
      else {
        if (!r.writable)
          throw new TypeError("attempted to set read only private field");
        r.value = n;
      }
      return n;
    }
    function kt(e, t) {
      var n = t.get(e);
      if (!n)
        throw new TypeError("attempted to get private field on non-instance");
      return n.get ? n.get.call(e) : n.value;
    }
    var Tt = (function () {
        function e() {
          var t = this;
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            Ct.set(this, { writable: !0, value: !1 }),
            St.set(this, { writable: !0, value: void 0 }),
            At.set(this, {
              writable: !0,
              value: function () {
                ue("jko_pay_get_prime_done", function (e) {
                  kt(t, St).call(t, e.err, e.result);
                }),
                  ue("iframe_get_prime_ready", function () {
                    _t(t, Ct, !0),
                      kt(t, St) && se({ event: "jko_pay_get_prime" });
                  });
              },
            }),
            kt(this, At).call(this);
        }
        return (
          (function (e, t, n) {
            t && Pt(e.prototype, t), n && Pt(e, n);
          })(e, [
            {
              key: "getPrime",
              value: function (e) {
                return de(e)
                  ? console.error(
                      "[TapPay] TPDirect.jkoPay.getPrime(callback): callback is not a function"
                    )
                  : ie()
                  ? (_t(this, St, function (t, n) {
                      return t ? void e(t) : void e(n);
                    }),
                    void (kt(this, Ct) && se({ event: "jko_pay_get_prime" })))
                  : console.error("[TapPay] Doesnt load pfirame yet");
              },
            },
            {
              key: "pay",
              value: function (e) {
                return Te(e)
                  ? void (window.location.href = e)
                  : console.error("[TapPay] Your payment url is not valid.");
              },
            },
          ]),
          e
        );
      })(),
      Ct = new WeakMap(),
      St = new WeakMap(),
      At = new WeakMap();
    function Mt(e, t) {
      for (var n, r = 0; r < t.length; r++)
        ((n = t[r]).enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
    }
    function Rt(e, t, n) {
      var r = t.get(e);
      if (!r)
        throw new TypeError("attempted to set private field on non-instance");
      if (r.set) r.set.call(e, n);
      else {
        if (!r.writable)
          throw new TypeError("attempted to set read only private field");
        r.value = n;
      }
      return n;
    }
    function Ot(e, t) {
      var n = t.get(e);
      if (!n)
        throw new TypeError("attempted to get private field on non-instance");
      return n.get ? n.get.call(e) : n.value;
    }
    var Et = (function () {
        function e() {
          var t = this;
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            qt.set(this, { writable: !0, value: !1 }),
            Dt.set(this, { writable: !0, value: void 0 }),
            xt.set(this, {
              writable: !0,
              value: function () {
                ue("line_pay_get_prime_done", function (e) {
                  Ot(t, Dt).call(t, e.err, e.result, e.url);
                }),
                  ue("iframe_get_prime_ready", function () {
                    Rt(t, qt, !0),
                      Ot(t, Dt) && se({ event: "line_pay_get_prime" });
                  });
              },
            }),
            Ot(this, xt).call(this);
        }
        return (
          (function (e, t, n) {
            t && Mt(e.prototype, t), n && Mt(e, n);
          })(e, [
            {
              key: "getPrime",
              value: function (e) {
                return de(e)
                  ? console.error(
                      "[TapPay] TPDirect.linePay.getPrime(callback): callback is not a function"
                    )
                  : ie()
                  ? (Rt(this, Dt, function (t, n) {
                      return t ? void e(t) : void e(n);
                    }),
                    void (Ot(this, qt) && se({ event: "line_pay_get_prime" })))
                  : console.error("[TapPay] Doesnt load pfirame yet");
              },
            },
            {
              key: "pay",
              value: function (e) {
                return Te(e)
                  ? void (window.location.href = e)
                  : console.error("[TapPay] Your payment url is not valid.");
              },
            },
          ]),
          e
        );
      })(),
      qt = new WeakMap(),
      Dt = new WeakMap(),
      xt = new WeakMap();
    function Nt(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), 0 <= t.indexOf(n) || (a[n] = e[n]);
          return a;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            !(0 <= t.indexOf(n)) &&
              Object.prototype.propertyIsEnumerable.call(e, n) &&
              (a[n] = e[n]);
      }
      return a;
    }
    function It(e, t) {
      for (var n, r = 0; r < t.length; r++)
        ((n = t[r]).enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
    }
    function jt(e, t) {
      var n = t.get(e);
      if (!n)
        throw new TypeError("attempted to get private field on non-instance");
      return n.get ? n.get.call(e) : n.value;
    }
    function Wt(e, t, n) {
      var r = t.get(e);
      if (!r)
        throw new TypeError("attempted to set private field on non-instance");
      if (r.set) r.set.call(e, n);
      else {
        if (!r.writable)
          throw new TypeError("attempted to set read only private field");
        r.value = n;
      }
      return n;
    }
    var Ft = (function () {
        function e() {
          var t = this;
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            Lt.set(this, { writable: !0, value: void 0 }),
            Ut.set(this, { writable: !0, value: void 0 }),
            zt.set(this, { writable: !0, value: void 0 }),
            Vt.set(this, { writable: !0, value: void 0 }),
            Bt.set(this, { writable: !0, value: void 0 }),
            Yt.set(this, { writable: !0, value: void 0 }),
            Gt.set(this, { writable: !0, value: void 0 }),
            Kt.set(this, { writable: !0, value: void 0 }),
            Jt.set(this, { writable: !0, value: void 0 }),
            Ht.set(this, {
              writable: !0,
              value: function () {
                var e = {
                  MODE: "",
                  appKey: u("appKey"),
                  appID: u("appID"),
                  serverType: u("type"),
                  hostname: window.location.hostname,
                  origin: window.location.origin,
                  referrer: document.referrer,
                  href: window.location.href,
                  port: window.location.port,
                  protocol: window.location.protocol,
                  sdk_version: u("sdk_version"),
                  payment_request: jt(t, Ut),
                };
                Wt(t, Bt, document.createElement("iframe")),
                  jt(t, Bt).setAttribute("frameborder", "0"),
                  jt(t, Bt).setAttribute("allowtransparency", "true"),
                  (jt(t, Bt).style.zIndex = "2147483647"),
                  (jt(t, Bt).style.display = "block"),
                  (jt(t, Bt).style.background = "rgba(0, 0, 0, 0.004)"),
                  (jt(t, Bt).style.border = "0px none transparent"),
                  (jt(t, Bt).style.overflowX = "hidden"),
                  (jt(t, Bt).style.overflowY = "auto"),
                  (jt(t, Bt).style.margin = "0px"),
                  (jt(t, Bt).style.padding = "0px"),
                  (jt(t, Bt).style.webkitTapHighlightColor = "transparent"),
                  (jt(t, Bt).style.position = "fixed"),
                  (jt(t, Bt).style.left = "0px"),
                  (jt(t, Bt).style.top = "0px"),
                  (jt(t, Bt).style.width = "100%"),
                  (jt(t, Bt).style.height = "100%"),
                  (jt(t, Bt).src =
                    "https://js.tappaysdk.com/sdk/tpdirect/samsung-pay/html/v5.14.0?" +
                    encodeURIComponent(JSON.stringify(e))),
                  "complete" === document.readyState ||
                  "loaded" === document.readyState ||
                  "interactive" === document.readyState
                    ? (document.body.appendChild(jt(t, Bt)), jt(t, $t).call(t))
                    : document.addEventListener(
                        "DOMContentLoaded",
                        function () {
                          document.body.appendChild(jt(this, Bt)),
                            jt(this, $t).call(this);
                        }
                      );
              },
            }),
            Xt.set(this, {
              writable: !0,
              value: function () {
                document.body.removeChild(jt(t, Bt)), jt(t, Zt).call(t);
              },
            }),
            $t.set(this, {
              writable: !0,
              value: function () {
                Wt(t, Yt, document.documentElement.style.height),
                  Wt(t, Gt, document.documentElement.style.overflowY),
                  Wt(t, Kt, document.body.style.height),
                  Wt(t, Jt, document.body.style.overflowY),
                  (document.documentElement.style.height = "auto"),
                  (document.documentElement.style.overflowY = "hidden"),
                  (document.body.style.height = "auto"),
                  (document.body.style.overflowY = "hidden");
              },
            }),
            Zt.set(this, {
              writable: !0,
              value: function () {
                (document.documentElement.style.height = jt(t, Yt)),
                  (document.documentElement.style.overflowY = jt(t, Gt)),
                  (document.body.style.height = jt(t, Kt)),
                  (document.body.style.overflowY = jt(t, Jt));
              },
            }),
            Qt.set(this, {
              writable: !0,
              value: function (e) {
                if (0 !== e.status) return e;
                var t = e.card_last_four,
                  n = e.card_type,
                  r = Nt(e, ["card_last_four", "card_type"]);
                return (
                  r.merchant_reference_info ||
                    (r.merchant_reference_info = { affiliate_codes: [] }),
                  Object.assign(r, { card: { lastfour: t, type: Me(n) } })
                );
              },
            }),
            en.set(this, {
              writable: !0,
              value: function (e) {
                if (he(e)) return !0;
                if ("[object Array]" !== Object.prototype.toString.call(e))
                  return !1;
                if (0 === e.length) return !1;
                for (var t = 0; t < e.length; t++) {
                  var n = e[t];
                  if (!(ve(n) || n instanceof String) || "" === n) return !1;
                }
                return !0;
              },
            }),
            tn.set(this, {
              writable: !0,
              value: function () {
                ue("samsung_pay_iframe_result", function (e) {
                  jt(t, Vt).call(t, e.result);
                });
              },
            }),
            Wt(this, Lt, !1),
            Wt(this, Ut, { country_code: "tw" }),
            Wt(this, Vt, function (e) {
              jt(t, Xt).call(t);
              var n = jt(t, Qt).call(t, e);
              jt(t, zt).call(t, n);
            }),
            jt(this, tn).call(this);
        }
        return (
          (function (e, t, n) {
            t && It(e.prototype, t), n && It(e, n);
          })(e, [
            {
              key: "setup",
              value: function (e) {
                jt(this, Ut).country_code = e.country_code;
              },
            },
            {
              key: "setupPaymentRequest",
              value: function (e) {
                var t = e.total;
                return t &&
                  t.label &&
                  t.amount &&
                  t.amount.currency &&
                  parseFloat(t.amount.value)
                  ? jt(this, en).call(this, e.supportedNetworks)
                    ? ((jt(this, Ut).allowed_brands = e.supportedNetworks),
                      (jt(this, Ut).merchant_name = t.label),
                      (jt(this, Ut).currency = t.amount.currency),
                      (jt(this, Ut).amount = parseFloat(t.amount.value)),
                      void Wt(this, Lt, !0))
                    : console.error(
                        "[TPDirect.samsungPay.setupPaymentRequest] Please check payment request format (supportedNetworks)"
                      )
                  : console.error(
                      "[TPDirect.samsungPay.setupPaymentRequest] Please check payment request format"
                    );
              },
            },
            {
              key: "getPrime",
              value: function (e) {
                return de(e)
                  ? console.error(
                      "[TapPay] TPDirect.samsungPay.getPrime(callback): callback is not a function"
                    )
                  : jt(this, Lt)
                  ? (Wt(this, zt, e), void jt(this, Ht).call(this))
                  : e({
                      status: -5,
                      msg: "[TPDirect.samsungPay.getPrime] Setup Samsung Pay with TPDirect.samsungPay.setupPaymentRequest first",
                    });
              },
            },
            {
              key: "setupSamsungPayButton",
              value: function (e, t) {
                if ((ve(e) && (e = document.querySelector(e)), !fe(e)))
                  return console.warn(
                    "[TapPay] TPDirect.samsungPay.setupSamsungPayButton: No element to setup."
                  );
                var n = { color: "black", type: "pay", shape: "rectangular" };
                t || (t = n),
                  t.color || (t.color = n.color),
                  t.type || (t.type = n.type),
                  t.shape || (t.shape = n.shape),
                  -1 === ["black", "white"].indexOf(t.color) &&
                    (console.warn(
                      "[TapPay] TPDirect.samsungPay.setupSamsungPayButton: Unknown color option " +
                        t.color
                    ),
                    (t.color = n.color)),
                  -1 === ["pay", "buy"].indexOf(t.type) &&
                    (console.warn(
                      "[TapPay] TPDirect.samsungPay.setupSamsungPayButton: Unknown type option " +
                        t.type
                    ),
                    (t.type = n.type)),
                  -1 === ["rectangular", "pill"].indexOf(t.shape) &&
                    (console.warn(
                      "[TapPay] TPDirect.samsungPay.setupSamsungPayButton: Unknown shape option " +
                        t.shape
                    ),
                    (t.shape = n.shape));
                var r =
                    "https://js.tappaysdk.com/tpdirect/image/samsung-pay/" +
                    t.type +
                    "_" +
                    t.color +
                    "_" +
                    t.shape +
                    ".svg",
                  a = document.createElement("div");
                (a.style.backgroundOrigin = "content-box"),
                  (a.style.backgroundPosition = "center"),
                  (a.style.backgroundRepeat = "no-repeat"),
                  (a.style.backgroundSize = "contain"),
                  (a.style.border = "0"),
                  (a.style.outline = "0"),
                  (a.style.height = "100%"),
                  (a.style.minHeight = "40px"),
                  (a.style.width = "100%"),
                  (a.style.cursor = "pointer"),
                  (a.style.backgroundImage = "url(" + r + ")"),
                  e.appendChild(a);
              },
            },
          ]),
          e
        );
      })(),
      Lt = new WeakMap(),
      Ut = new WeakMap(),
      zt = new WeakMap(),
      Vt = new WeakMap(),
      Bt = new WeakMap(),
      Yt = new WeakMap(),
      Gt = new WeakMap(),
      Kt = new WeakMap(),
      Jt = new WeakMap(),
      Ht = new WeakMap(),
      Xt = new WeakMap(),
      $t = new WeakMap(),
      Zt = new WeakMap(),
      Qt = new WeakMap(),
      en = new WeakMap(),
      tn = new WeakMap();
    function nn(e, t) {
      for (var n, r = 0; r < t.length; r++)
        ((n = t[r]).enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
    }
    function rn(e, t, n) {
      var r = t.get(e);
      if (!r)
        throw new TypeError("attempted to set private field on non-instance");
      if (r.set) r.set.call(e, n);
      else {
        if (!r.writable)
          throw new TypeError("attempted to set read only private field");
        r.value = n;
      }
      return n;
    }
    function an(e, t) {
      var n = t.get(e);
      if (!n)
        throw new TypeError("attempted to get private field on non-instance");
      return n.get ? n.get.call(e) : n.value;
    }
    var on = (function () {
        function e() {
          var t = this;
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            sn.set(this, { writable: !0, value: void 0 }),
            ln.set(this, { writable: !0, value: void 0 }),
            pn.set(this, { writable: !0, value: !1 }),
            un.set(this, { writable: !0, value: void 0 }),
            cn.set(this, { writable: !0, value: void 0 }),
            dn.set(this, { writable: !0, value: function () {} }),
            fn.set(this, {
              writable: !0,
              value: function (e, t) {
                if ((ve(e) && (e = document.querySelector(e)), !ye(e))) {
                  var n = document.createElement("iframe");
                  return (
                    n.setAttribute("frameborder", "0"),
                    n.setAttribute("allowtransparency", "true"),
                    n.setAttribute("scrolling", "no"),
                    (n.style.border = "none"),
                    (n.style.width = "100%"),
                    (n.style.height = "100%"),
                    (n.style.float = "left"),
                    (n.src =
                      "https://js.tappaysdk.com/sdk/tpdirect/tappay-field/html/v5.14.0?" +
                      encodeURIComponent(JSON.stringify(t))),
                    e.appendChild(n),
                    { el: e, iframe: n }
                  );
                }
                console.warn(
                  "[TapPay] TPDirect.card.setup(): Cannot find element for " +
                    t.type
                );
              },
            }),
            yn.set(this, {
              writable: !0,
              value: function (e) {
                rn(t, sn, function (t, n) {
                  return t ? void e(t, null) : void e(null, n);
                }),
                  an(t, hn).call(t, { event: "get_prime_for_ccv_prime" });
              },
            }),
            mn.set(this, {
              writable: !0,
              value: function () {
                var e = an(t, cn);
                return {
                  canGetPrime: e === h,
                  hasError: e === g,
                  status: { ccv: e },
                };
              },
            }),
            hn.set(this, {
              writable: !0,
              value: function (e) {
                se(e);
              },
            }),
            vn.set(this, {
              writable: !0,
              value: function (e) {
                !(function (e, t) {
                  e.contentWindow.postMessage(JSON.stringify(t), c);
                })(an(t, ln), e);
              },
            }),
            gn.set(this, {
              writable: !0,
              value: function () {
                ue("get_prime_for_ccv_prime_done", function (e) {
                  an(t, sn).call(t, e.err, e.result);
                });
              },
            }),
            wn.set(this, {
              writable: !0,
              value: function () {
                ue("ccv_field_ready", function (e) {
                  "ccv-prime" === e.field_type &&
                    (an(t, pn) ||
                      (rn(t, pn, !0), an(t, un).call(t, A().lower)));
                }),
                  ue("field-status-change", function (e) {
                    if ("ccv-prime" === e.field_type) {
                      var n = e.result;
                      rn(t, cn, n.status);
                      var r = an(t, mn).call(t);
                      an(t, dn).call(t, r);
                    }
                  });
              },
            }),
            bn.set(this, {
              writable: !0,
              value: function () {
                an(t, gn).call(t), an(t, wn).call(t);
              },
            }),
            an(this, bn).call(this),
            rn(this, un, function (e) {
              return S(e)
                ? void an(t, vn).call(t, {
                    event: "cardtype-change",
                    result: e,
                    field_type: "ccv-prime",
                  })
                : void console.error(
                    "[TapPay] TPDirect.ccv.setupCardType(): Invalid card type"
                  );
            });
        }
        return (
          (function (e, t, n) {
            t && nn(e.prototype, t), n && nn(e, n);
          })(e, [
            {
              key: "setup",
              value: function (e) {
                if (an(this, ln))
                  console.error(
                    "[TapPay] TPDirect.ccv.setup() has been called once"
                  );
                else {
                  var t = an(this, fn).call(this, e.fields.ccv.element, {
                    origin: window.location.origin,
                    type: P,
                    placeholder: e.fields.ccv.placeholder,
                    styles: e.styles,
                    field_type: "ccv-prime",
                  });
                  rn(this, ln, t.iframe);
                }
              },
            },
            {
              key: "setupCardType",
              value: function (e) {
                an(this, pn) && an(this, un).call(this, e);
              },
            },
            {
              key: "getPrime",
              value: function (e) {
                var t,
                  n = de(e);
                return (
                  (t = an(this, mn).call(this).canGetPrime
                    ? an(this, yn)
                    : function (e) {
                        e(
                          new ee(
                            "You couldn't get ccv prime because of your ccv is invalid"
                          ),
                          null
                        );
                      }),
                  n ? Ee(t) : void t(e)
                );
              },
            },
            {
              key: "onUpdate",
              value: function (e) {
                return de(e)
                  ? console.error(
                      "[TapPay] TPDirect.ccv.onUpdate(callback): callback in not a function"
                    )
                  : void rn(this, dn, e);
              },
            },
          ]),
          e
        );
      })(),
      sn = new WeakMap(),
      ln = new WeakMap(),
      pn = new WeakMap(),
      un = new WeakMap(),
      cn = new WeakMap(),
      dn = new WeakMap(),
      fn = new WeakMap(),
      yn = new WeakMap(),
      mn = new WeakMap(),
      hn = new WeakMap(),
      vn = new WeakMap(),
      gn = new WeakMap(),
      wn = new WeakMap(),
      bn = new WeakMap(),
      Pn = C(),
      _n = Object.create(null);
    Object.keys(Pn).map(function (e) {
      _n[e.toLocaleUpperCase()] = Pn[e].toLocaleLowerCase();
    });
    var kn = _n;
    function Tn(e, t) {
      for (var n, r = 0; r < t.length; r++)
        ((n = t[r]).enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
    }
    function Cn(e, t, n) {
      var r = t.get(e);
      if (!r)
        throw new TypeError("attempted to set private field on non-instance");
      if (r.set) r.set.call(e, n);
      else {
        if (!r.writable)
          throw new TypeError("attempted to set read only private field");
        r.value = n;
      }
      return n;
    }
    function Sn(e, t) {
      var n = t.get(e);
      if (!n)
        throw new TypeError("attempted to get private field on non-instance");
      return n.get ? n.get.call(e) : n.value;
    }
    var An = (function () {
        function e() {
          var t = this;
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            Mn.set(this, { writable: !0, value: !1 }),
            Rn.set(this, { writable: !0, value: void 0 }),
            On.set(this, {
              writable: !0,
              value: function (e) {
                if (ie())
                  Cn(t, Rn, function (t, n) {
                    return t ? void e(t, null) : void e(null, n);
                  }),
                    Sn(t, Mn) && se({ event: "atome_get_prime" });
                else {
                  var n = new ee("Doesn't load pfirame yet");
                  e(n, null);
                }
              },
            }),
            En.set(this, {
              writable: !0,
              value: function () {
                ue("atome_get_prime_done", function (e) {
                  Sn(t, Rn).call(t, e.err, e.result);
                }),
                  ue("iframe_get_prime_ready", function () {
                    Cn(t, Mn, !0),
                      Sn(t, Rn) && se({ event: "atome_get_prime" });
                  });
              },
            }),
            Sn(this, En).call(this);
        }
        return (
          (function (e, t, n) {
            t && Tn(e.prototype, t), n && Tn(e, n);
          })(e, [
            {
              key: "getPrime",
              value: function (e) {
                return de(e)
                  ? Ee(Sn(this, On))
                  : void Sn(this, On).call(this, e);
              },
            },
            {
              key: "pay",
              value: function (e) {
                return Te(e)
                  ? void (window.location.href = e)
                  : console.error("[TapPay] Your payment url is not valid.");
              },
            },
          ]),
          e
        );
      })(),
      Mn = new WeakMap(),
      Rn = new WeakMap(),
      On = new WeakMap(),
      En = new WeakMap();
    function qn(e, t) {
      for (var n, r = 0; r < t.length; r++)
        ((n = t[r]).enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
    }
    function Dn(e, t, n) {
      var r = t.get(e);
      if (!r)
        throw new TypeError("attempted to set private field on non-instance");
      if (r.set) r.set.call(e, n);
      else {
        if (!r.writable)
          throw new TypeError("attempted to set read only private field");
        r.value = n;
      }
      return n;
    }
    function xn(e, t) {
      var n = t.get(e);
      if (!n)
        throw new TypeError("attempted to get private field on non-instance");
      return n.get ? n.get.call(e) : n.value;
    }
    var Nn = (function () {
        function e() {
          var t = this;
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            In.set(this, { writable: !0, value: !1 }),
            jn.set(this, { writable: !0, value: void 0 }),
            Wn.set(this, {
              writable: !0,
              value: function (e) {
                if (ie())
                  Dn(t, jn, function (t, n) {
                    return t ? void e(t, null) : void e(null, n);
                  }),
                    xn(t, In) && se({ event: "pi_wallet_get_prime" });
                else {
                  var n = new ee("Doesn't load pfirame yet");
                  e(n, null);
                }
              },
            }),
            Fn.set(this, {
              writable: !0,
              value: function () {
                ue("pi_wallet_get_prime_done", function (e) {
                  xn(t, jn).call(t, e.err, e.result);
                }),
                  ue("iframe_get_prime_ready", function () {
                    Dn(t, In, !0),
                      xn(t, jn) && se({ event: "pi_wallet_get_prime" });
                  });
              },
            }),
            xn(this, Fn).call(this);
        }
        return (
          (function (e, t, n) {
            t && qn(e.prototype, t), n && qn(e, n);
          })(e, [
            {
              key: "getPrime",
              value: function (e) {
                return de(e)
                  ? Ee(xn(this, Wn))
                  : void xn(this, Wn).call(this, e);
              },
            },
            {
              key: "pay",
              value: function (e) {
                return Te(e)
                  ? void (window.location.href = e)
                  : console.error("[TapPay] Your payment url is not valid.");
              },
            },
          ]),
          e
        );
      })(),
      In = new WeakMap(),
      jn = new WeakMap(),
      Wn = new WeakMap(),
      Fn = new WeakMap();
    function Ln(e, t) {
      for (var n, r = 0; r < t.length; r++)
        ((n = t[r]).enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
    }
    function Un(e, t, n) {
      var r = t.get(e);
      if (!r)
        throw new TypeError("attempted to set private field on non-instance");
      if (r.set) r.set.call(e, n);
      else {
        if (!r.writable)
          throw new TypeError("attempted to set read only private field");
        r.value = n;
      }
      return n;
    }
    function zn(e, t) {
      var n = t.get(e);
      if (!n)
        throw new TypeError("attempted to get private field on non-instance");
      return n.get ? n.get.call(e) : n.value;
    }
    var Vn = (function () {
        function e() {
          var t = this;
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            Bn.set(this, { writable: !0, value: !1 }),
            Yn.set(this, { writable: !0, value: void 0 }),
            Gn.set(this, {
              writable: !0,
              value: function (e) {
                if (ie())
                  Un(t, Yn, function (t, n) {
                    return t ? void e(t, null) : void e(null, n);
                  }),
                    zn(t, Bn) && se({ event: "plus_pay_get_prime" });
                else {
                  var n = new ee("Doesn't load pfirame yet");
                  e(n, null);
                }
              },
            }),
            Kn.set(this, {
              writable: !0,
              value: function () {
                ue("plus_pay_get_prime_done", function (e) {
                  zn(t, Yn).call(t, e.err, e.result);
                }),
                  ue("iframe_get_prime_ready", function () {
                    Un(t, Bn, !0),
                      zn(t, Yn) && se({ event: "plus_pay_get_prime" });
                  });
              },
            }),
            zn(this, Kn).call(this);
        }
        return (
          (function (e, t, n) {
            t && Ln(e.prototype, t), n && Ln(e, n);
          })(e, [
            {
              key: "getPrime",
              value: function (e) {
                return de(e)
                  ? Ee(zn(this, Gn))
                  : void zn(this, Gn).call(this, e);
              },
            },
            {
              key: "pay",
              value: function (e) {
                return Te(e)
                  ? void (window.location.href = e)
                  : console.error("[TapPay] Your payment url is not valid.");
              },
            },
          ]),
          e
        );
      })(),
      Bn = new WeakMap(),
      Yn = new WeakMap(),
      Gn = new WeakMap(),
      Kn = new WeakMap();
    function Jn(e) {
      return (Jn =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    !(function (e) {
      window.addEventListener(
        "message",
        function (e) {
          if (-1 !== le.indexOf(e.origin)) {
            var t = JSON.parse(e.data);
            if (
              (t.err && (t.err = te(t.err)),
              t.error && (t.error = te(t.error)),
              pe.has(t.event))
            ) {
              var n = pe.get(t.event);
              if (0 === n.length) return;
              for (var r = 0; r < n.length; r++) n[r](t);
            }
          }
        },
        !1
      ),
        e.location.origin ||
          (e.location.origin =
            e.location.protocol +
            "//" +
            e.location.hostname +
            (e.location.port ? ":" + e.location.port : ""));
      var t,
        n,
        r,
        a,
        o,
        i,
        c,
        d,
        f,
        y,
        m,
        h,
        v,
        g = {},
        w = !1,
        b = [];
      if (
        ("https://js.tappaysdk.com",
        (t = document.querySelectorAll(
          'script[src^="https://js.tappaysdk.com"]'
        )),
        (v = 0 >= t.length ? "v5.14.0" : "v" + t[0].src.split("/v")[1]),
        "withCredentials" in new XMLHttpRequest())
      )
        n = !0;
      else {
        if (!e.XDomainRequest)
          return (
            (n = !1),
            console.warn("[TapPay] It looks like browser not support cors.")
          );
        n = !0;
      }
      e.TPDirect
        ? ((e.TPDirect.isDoubleLoaded = !0),
          console.warn(
            "[TapPay] It looks like TPDirect.js was loaded more than one time."
          ))
        : ((e.TPDirect = (function (t) {
            return (
              (r = e.location.hostname),
              ((t = {}).isDoubleLoaded = !1),
              (t.setPublishableKey = function (e, t, n) {
                p({
                  appID: e,
                  appKey: t,
                  type: n,
                  endPoint:
                    "production" === n
                      ? "https://prod.tappaysdk.com"
                      : "https://sandbox.tappaysdk.com",
                });
              }),
              (t.setupSDK = function (t, n, r) {
                if (!t || !n || !r)
                  return console.error(
                    "[TapPay] TPDirect.setupSDK error, appID = " +
                      t +
                      ", appKey = " +
                      n +
                      ", serverType = " +
                      r
                  );
                if (ge(r))
                  return console.error(
                    '[TapPay] TPDirect.setupSDK error, serverType is not "sandbox" nor "production", serverType = ' +
                      r
                  );
                if ("production" !== (r = r.toLowerCase()) && "sandbox" !== r)
                  return console.error(
                    '[TapPay] TPDirect.setupSDK error, serverType is not "sandbox" nor "production", serverType = ' +
                      r
                  );
                p({
                  appID: t,
                  appKey: n,
                  type: r,
                  endPoint:
                    "production" === r
                      ? "https://prod.tappaysdk.com"
                      : "https://sandbox.tappaysdk.com",
                  sdk_version: v,
                });
                var a = {
                  appKey: u("appKey"),
                  appID: u("appID"),
                  serverType: u("type"),
                  hostname: e.location.hostname,
                  origin: e.location.origin,
                  referrer: document.referrer,
                  href: e.location.href,
                  port: e.location.port,
                  protocol: e.location.protocol,
                  sdk_version: u("sdk_version"),
                  mode: "production",
                };
                (function (e) {
                  ue("send_device_id", function (e) {
                    (ae = e.result),
                      se({
                        event: "main_event_data_register",
                        dataset: { ddcaResult: ae },
                      });
                  }),
                    ((re = document.createElement("iframe")).style.display =
                      "none"),
                    (re.src =
                      "https://fraud.tappaysdk.com/ddca/iframe?" +
                      encodeURIComponent(JSON.stringify(e))),
                    "complete" === document.readyState ||
                    "loaded" === document.readyState ||
                    "interactive" === document.readyState
                      ? document.body.appendChild(re)
                      : document.addEventListener(
                          "DOMContentLoaded",
                          function () {
                            document.body.appendChild(re);
                          }
                        );
                })(a),
                  (h = document.createElement("iframe")).setAttribute(
                    "allowpaymentrequest",
                    !0
                  ),
                  h.setAttribute("frameborder", "0"),
                  h.setAttribute("allowtransparency", "true"),
                  h.setAttribute("scrolling", "no"),
                  (h.style.display = "none"),
                  (h.src =
                    "https://js.tappaysdk.com/sdk/tpdirect/api/html/v5.14.0?" +
                    encodeURIComponent(JSON.stringify(a))),
                  "complete" === document.readyState ||
                  "loaded" === document.readyState ||
                  "interactive" === document.readyState
                    ? document.body.appendChild(h)
                    : document.addEventListener(
                        "DOMContentLoaded",
                        function () {
                          document.body.appendChild(h);
                        }
                      ),
                  (function (e) {
                    ne = e;
                  })(h);
              }),
              (t.getDeviceId = function () {
                return oe().deviceId || "";
              }),
              (t.redirect = function (t) {
                return Te(t)
                  ? void (e.location = t)
                  : console.error("[TapPay] Your payment url is not valid.");
              }),
              (g = t),
              t
            );
          })(g)),
          (e.TPDirect.CardType = kn),
          (e.TPDirect.card = new Ve(g)),
          (e.TPDirect.googlePay = new ft()),
          (e.TPDirect.linePay = new Et()),
          (e.TPDirect.samsungPay = new Ft()),
          (e.TPDirect.jkoPay = new Tt()),
          (e.TPDirect.easyWallet = new tt()),
          (e.TPDirect.ccv = new on()),
          (e.TPDirect.piWallet = new Nn()),
          (e.TPDirect.atome = new An()),
          (e.TPDirect.plusPay = new Vn()),
          (e.TPDirect.applePay = new Ne()),
          (e.TPDirect.paymentRequestApi = (function (t, n) {
            var p = null;
            return (
              ((n = {}).isAmountPending = !1),
              (n.paymentRequest = null),
              (n.pay_with_google_options = null),
              (n.apple_pay_options = null),
              (n.checkAvailability = function () {
                var t = !1;
                return (
                  e.ApplePaySession ? (t = Se()) : e.PaymentRequest && (t = !0),
                  !1 === t
                    ? (console.warn(
                        "[TapPay] Your Browser Did Not Support Payment Request and Apple Pay"
                      ),
                      !1)
                    : "https:" !== location.protocol &&
                      "localhost" !== e.location.hostname
                    ? (console.warn(
                        "[TapPay] Trying to call an PaymentRequest API from an insecure document or http://localhost."
                      ),
                      !1)
                    : !s.a.msedge ||
                      (console.warn(
                        "[TapPay] Does not support PaymentRequest on Edge."
                      ),
                      !1)
                );
              }),
              (n.availableMethods = function () {
                return s.a.msedge
                  ? []
                  : Se()
                  ? ["apple_pay"]
                  : s.a.android && s.a.check({ chrome: "61" })
                  ? ["card", "pay_with_google"]
                  : (s.a.android && me(e.PaymentRequest)) ||
                    me(e.PaymentRequest)
                  ? ["card"]
                  : [];
              }),
              (n.setupTappayPaymentButton = function (t, r) {
                if ((ve(t) && (t = document.querySelector(t)), !fe(t)))
                  return console.error(
                    "[TapPay] TPDirect.paymentRequestApi.setupTappayPaymentButton: Missing element param"
                  );
                if (de(r))
                  return console.error(
                    "[TapPay] TPDirect.paymentRequestApi.setupTappayPaymentButton: Missing callback function"
                  );
                t.style.cursor = "pointer";
                var a,
                  o = !1,
                  i = !1,
                  l =
                    e.TPDirect.paymentRequestApi.paymentRequest
                      .supportedInstruments,
                  p = l.find(function (e) {
                    return (
                      -1 !==
                      e.supportedMethods.indexOf("https://android.com/pay")
                    );
                  }),
                  u = l.find(function (e) {
                    return (
                      -1 !==
                      e.supportedMethods.indexOf("https://google.com/pay")
                    );
                  });
                if (
                  (s.a.android && s.a.check({ chrome: "61" }) && u
                    ? (o = !0)
                    : s.a.android &&
                      "undefined" !== e.PaymentRequest &&
                      p &&
                      (i = !0),
                  e.ApplePaySession)
                )
                  ((a = document.createElement("div")).style.height = "40px"),
                    (a.style["-webkit-appearance"] = "-apple-pay-button"),
                    (a.style["-apple-pay-button-type"] =
                      y.canMakePaymentWithActiveCard ? "buy" : "set-up"),
                    t.appendChild(a);
                else if (o)
                  (a = document.createElement("div")),
                    ke(a, "googlepay"),
                    (a.style.backgroundColor = "white"),
                    (a.style.backgroundImage =
                      "url('data:image/svg+xml,%3Csvg%20width%3D%22102%22%20height%3D%2217%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M80.526%202.635v4.083h2.518c.6%200%201.096-.202%201.488-.605.403-.402.605-.882.605-1.437%200-.544-.202-1.018-.605-1.422-.392-.413-.888-.62-1.488-.62h-2.518zm0%205.52v4.736h-1.504V1.198h3.99c1.013%200%201.873.337%202.582%201.012.72.675%201.08%201.497%201.08%202.466%200%20.991-.36%201.819-1.08%202.482-.697.665-1.559.996-2.583.996h-2.485v.001zm7.668%202.287c0%20.392.166.718.499.98.332.26.722.391%201.168.391.633%200%201.196-.234%201.692-.701.497-.469.744-1.019.744-1.65-.469-.37-1.123-.555-1.962-.555-.61%200-1.12.148-1.528.442-.409.294-.613.657-.613%201.093m1.946-5.815c1.112%200%201.989.297%202.633.89.642.594.964%201.408.964%202.442v4.932h-1.439v-1.11h-.065c-.622.914-1.45%201.372-2.486%201.372-.882%200-1.621-.262-2.215-.784-.594-.523-.891-1.176-.891-1.96%200-.828.313-1.486.94-1.976s1.463-.735%202.51-.735c.892%200%201.629.163%202.206.49v-.344c0-.522-.207-.966-.621-1.33a2.132%202.132%200%200%200-1.455-.547c-.84%200-1.504.353-1.995%201.062l-1.324-.834c.73-1.045%201.81-1.568%203.238-1.568m11.853.262l-5.02%2011.53H95.42l1.864-4.034-3.302-7.496h1.635l2.387%205.749h.032l2.322-5.75z%22%20fill%3D%22%235F6368%22%2F%3E%3Cpath%20d%3D%22M74.448%207.134c0-.473-.04-.93-.116-1.366h-6.344v2.588h3.634a3.11%203.11%200%200%201-1.344%202.042v1.68h2.169c1.27-1.17%202.001-2.9%202.001-4.944%22%20fill%3D%22%234285F4%22%2F%3E%3Cpath%20d%3D%22M67.988%2013.7c1.816%200%203.344-.595%204.459-1.621l-2.169-1.681c-.603.406-1.38.643-2.29.643-1.754%200-3.244-1.182-3.776-2.774h-2.234v1.731a6.728%206.728%200%200%200%206.01%203.703%22%20fill%3D%22%2334A853%22%2F%3E%3Cpath%20d%3D%22M64.212%208.267a4.034%204.034%200%200%201%200-2.572V3.964h-2.234a6.678%206.678%200%200%200-.717%203.017c0%201.085.26%202.11.717%203.017l2.234-1.731z%22%20fill%3D%22%23FABB05%22%2F%3E%3Cpath%20d%3D%22M67.988%202.921c.992%200%201.88.34%202.58%201.008v.001l1.92-1.918c-1.165-1.084-2.685-1.75-4.5-1.75a6.728%206.728%200%200%200-6.01%203.702l2.234%201.731c.532-1.592%202.022-2.774%203.776-2.774%22%20fill%3D%22%23E94235%22%2F%3E%3Cpath%20d%3D%22M.148%202.976h3.766c.532%200%201.024.117%201.477.35.453.233.814.555%201.085.966.27.41.406.863.406%201.358%200%20.495-.124.924-.371%201.288s-.572.64-.973.826v.084c.504.177.912.471%201.225.882.313.41.469.891.469%201.442a2.6%202.6%200%200%201-.427%201.47c-.285.43-.667.763-1.148%201.001A3.5%203.5%200%200%201%204.082%2013H.148V2.976zm3.696%204.2c.448%200%20.81-.14%201.085-.42.275-.28.413-.602.413-.966s-.133-.684-.399-.959c-.266-.275-.614-.413-1.043-.413H1.716v2.758h2.128zm.238%204.368c.476%200%20.856-.15%201.141-.448.285-.299.427-.644.427-1.036%200-.401-.147-.749-.441-1.043-.294-.294-.688-.441-1.183-.441h-2.31v2.968h2.366zm5.379.903c-.453-.518-.679-1.239-.679-2.163V5.86h1.54v4.214c0%20.579.138%201.013.413%201.302.275.29.637.434%201.085.434.364%200%20.686-.096.966-.287.28-.191.495-.446.644-.763a2.37%202.37%200%200%200%20.224-1.022V5.86h1.54V13h-1.456v-.924h-.084c-.196.336-.5.611-.91.826-.41.215-.845.322-1.302.322-.868%200-1.528-.259-1.981-.777zm9.859.161L16.352%205.86h1.722l2.016%204.858h.056l1.96-4.858H23.8l-4.41%2010.164h-1.624l1.554-3.416zm8.266-6.748h1.666l1.442%205.11h.056l1.61-5.11h1.582l1.596%205.11h.056l1.442-5.11h1.638L36.392%2013h-1.624L33.13%207.876h-.042L31.464%2013h-1.596l-2.282-7.14zm12.379-1.337a1%201%200%200%201-.301-.735%201%201%200%200%201%20.301-.735%201%201%200%200%201%20.735-.301%201%201%200%200%201%20.735.301%201%201%200%200%201%20.301.735%201%201%200%200%201-.301.735%201%201%200%200%201-.735.301%201%201%200%200%201-.735-.301zM39.93%205.86h1.54V13h-1.54V5.86zm5.568%207.098a1.967%201.967%200%200%201-.686-.406c-.401-.401-.602-.947-.602-1.638V7.218h-1.246V5.86h1.246V3.844h1.54V5.86h1.736v1.358H45.75v3.36c0%20.383.075.653.224.812.14.187.383.28.728.28.159%200%20.299-.021.42-.063.121-.042.252-.11.392-.203v1.498c-.308.14-.681.21-1.12.21-.317%200-.616-.051-.896-.154zm3.678-9.982h1.54v2.73l-.07%201.092h.07c.205-.336.511-.614.917-.833.406-.22.842-.329%201.309-.329.868%200%201.53.254%201.988.763.457.509.686%201.202.686%202.079V13h-1.54V8.688c0-.541-.142-.947-.427-1.218-.285-.27-.656-.406-1.113-.406-.345%200-.656.098-.931.294a2.042%202.042%200%200%200-.651.777%202.297%202.297%200%200%200-.238%201.029V13h-1.54V2.976z%22%20fill%3D%22%233C4043%22%2F%3E%3Cpath%20d%3D%22M61%200h41.285v18H61z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')"),
                    (a.style.backgroundOrigin = "content-box"),
                    (a.style.backgroundPosition = "center"),
                    (a.style.backgroundRepeat = "no-repeat"),
                    (a.style.backgroundSize = "contain"),
                    (a.style.border = "0"),
                    (a.style.borderRadius = "4px"),
                    (a.style.boxShadow = "0px 1px 3px 0px #6d6d6d"),
                    (a.style.outline = "0"),
                    (a.style.padding = "10px 8px"),
                    (a.style.height = "40px"),
                    (a.style.minHeight = "40px"),
                    a.addEventListener("mouseover", function () {
                      a.style.backgroundColor = "#f7f7f7";
                    }),
                    a.addEventListener("mouseleave", function () {
                      a.style.backgroundColor = "white";
                    }),
                    t.appendChild(a);
                else if (i)
                  ((a = document.createElement("div")).style.borderRadius =
                    "5px"),
                    (a.style.boxShadow = "0px 1px 3px rgb(116,116,116)"),
                    (a.style.height = "100%"),
                    (a.style.backgroundSize = "auto calc(60% + 2px)"),
                    (a.style.backgroundRepeat = "no-repeat"),
                    (a.style.backgroundPosition = "center"),
                    (a.style.backgroundColor = "#fff"),
                    (a.style.backgroundImage =
                      "url(https://link-pay.tappaysdk.com/images/android_pay_logo.png)"),
                    t.appendChild(a);
                else {
                  ((a = document.createElement("div")).style.display = "flex"),
                    (a.style.justifyContent = "center"),
                    (a.style.color = "rgb(61,64,67)"),
                    (a.style.background = "#fff"),
                    (a.style.borderRadius = "5px"),
                    (a.style.boxShadow = "0px 1px 3px rgb(116,116,116)"),
                    (a.style.height = "100%"),
                    (a.style.alignItems = "center"),
                    (a.style.webkitTapHighlightColor = "transparent"),
                    (a.style.cursor = "pointer"),
                    (a.style.webkitUserSelect = "none"),
                    (a.style.MozUserSelect = "none"),
                    (a.style.msUserSelect = "none"),
                    (a.style.userSelect = "none"),
                    (a.style.font =
                      "500 16px/21px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif"),
                    (a.style.fontWeight = "500"),
                    (a.style.webkitFontSmoothing = "antialiased"),
                    (a.style.MozOsxFontSmoothing = "grayscale");
                  var c = document.createElement("img");
                  c.setAttribute(
                    "src",
                    "https://s3-ap-northeast-1.amazonaws.com/tappay-image-resource/favicon-32x32.png"
                  ),
                    (c.style.width = "20px"),
                    (c.style.height = "20px"),
                    (c.style.marginRight = "5px");
                  var d = document.createElement("span");
                  (d.textContent = Ae()),
                    a.appendChild(c),
                    a.appendChild(d),
                    t.appendChild(a);
                }
                t.addEventListener(
                  "click",
                  function () {
                    n.getPrime(function (e) {
                      r(e);
                    });
                  },
                  !1
                );
              }),
              (n.setupPaymentRequest = function (t, r) {
                de(r) &&
                  (r = function (e) {
                    return e.browserSupportPaymentRequest
                      ? void (
                          !e.canMakePaymentWithActiveCard &&
                          console.error(
                            "[TapPay] User does not have support payment method."
                          )
                        )
                      : void console.error(
                          "[TapPay] Browser does not support PaymentRequest or Apple Pay"
                        );
                  }),
                  (o = function (e) {
                    (y = e), r(e);
                  });
                var a = n.checkAvailability();
                if (!a)
                  return o({
                    browserSupportPaymentRequest: !1,
                    canMakePaymentWithActiveCard: !1,
                    canMakePaymentError: null,
                  });
                var i = s.a.android && s.a.check({ chrome: "61" }),
                  l =
                    -1 === t.supportedMethods.indexOf("card") &&
                    -1 === t.supportedMethods.indexOf("basic-card"),
                  p = he(e.ApplePaySession);
                l && p && !i && (a = !1),
                  1 === t.supportedMethods.length &&
                    ("pay_with_google" === t.supportedMethods[0] ||
                      "https://google.com/pay" === t.supportedMethods[0]) &&
                    !i &&
                    (a = !1),
                  1 === t.supportedMethods.length &&
                    ("apple_pay" === t.supportedMethods[0] ||
                      "https://apple.com/apple-pay" ===
                        t.supportedMethods[0]) &&
                    he(e.ApplePaySession) &&
                    (a = !1);
                var u =
                  -1 === t.supportedMethods.indexOf("apple_pay") &&
                  -1 ===
                    t.supportedMethods.indexOf("https://apple.com/apple-pay");
                if ((e.ApplePaySession && u && (a = !1), a))
                  if (n.preparePaymentRequest(t))
                    if (e.ApplePaySession) {
                      if (!n.apple_pay_options)
                        return void console.error(
                          "[TapPay]: You need to call `TPDirect.paymentRequestApi.setupApplePay` before `TPDirect.paymentRequestApi.setupPaymentRequest`"
                        );
                      var c = n.apple_pay_options.merchantIdentifier;
                      g.applePay.canMakePaymentsWithActiveCard(c, o);
                    } else {
                      if (s.a.ios && s.a.chrome)
                        return (
                          n.iosChromeSetupPaymentRequest(),
                          void n.iosChromeCheckCanMakePaymentWithActiveCard()
                        );
                      var d = function () {
                        se({
                          event: "setup_payment_request",
                          paymentRequest: n.paymentRequest,
                          pay_with_google_options: n.pay_with_google_options,
                        });
                      };
                      w ? d() : b.push(d);
                    }
                  else
                    console.error("[TapPay] Please check your paymentRequest");
                else
                  o({
                    browserSupportPaymentRequest: !1,
                    canMakePaymentWithActiveCard: !1,
                    canMakePaymentError: null,
                  });
              }),
              (n.setupApplePay = function (e) {
                (e.merchantIdentifier && !ge(e.merchantIdentifier)) ||
                  console.error(
                    "[TapPay] TPDirect.paymentRequestApi.setupApplePay: merchantIdentifier is required"
                  ),
                  e.countryCode &&
                    (ge(e.countryCode) || 2 !== e.countryCode.length) &&
                    console.error(
                      "[TapPay] TPDirect.paymentRequestApi.setupApplePay: countryCode need to be two-letter ISO 3166 country code format."
                    ),
                  (n.apple_pay_options = e);
              }),
              (n.setupPayWithGoogle = function (e) {
                e.allowedPaymentMethods &&
                  e.allowedPaymentMethods.forEach(function (e) {
                    -1 === ["CARD", "TOKENIZED_CARD"].indexOf(e) &&
                      console.error(
                        "[TapPay] TPDirect.paymentRequestApi.setupPayWithGoogle: allowedPaymentMethods error: " +
                          e
                      );
                  });
                var t = Jn(e.allowPrepaidCards);
                -1 === ["boolean", "undefined"].indexOf(t) &&
                  console.error(
                    "[TapPay] TPDirect.paymentRequestApi.setupPayWithGoogle: allowPrepaidCards type error: " +
                      t
                  );
                var r = Jn(e.billingAddressRequired);
                if (
                  (-1 === ["boolean", "undefined"].indexOf(r) &&
                    console.error(
                      "[TapPay] TPDirect.paymentRequestApi.setupPayWithGoogle: billingAddressRequired type error: " +
                        r
                    ),
                  e.billingAddressFormat &&
                    -1 === ["FULL", "MIN"].indexOf(e.billingAddressFormat))
                ) {
                  var a =
                    "[TapPay] TPDirect.paymentRequestApi.setupPayWithGoogle: billingAddressFormat error: " +
                    e.billingAddressFormat;
                  console.error(a);
                }
                if (
                  e.allowedCountryCodes &&
                  "[object Array]" !==
                    Object.prototype.toString.call(e.allowedCountryCodes)
                ) {
                  var o =
                    "[TapPay] TPDirect.paymentRequestApi.setupPayWithGoogle: allowedCountryCodes error: " +
                    e.allowedCountryCodes;
                  console.error(o);
                }
                n.pay_with_google_options = e;
              }),
              (n.preparePaymentItems = function (e) {
                if (!e.hasOwnProperty("total"))
                  return (
                    console.error(
                      "[TapPay] You need to setup total in the paymentRequest"
                    ),
                    !1
                  );
                var t = !1,
                  r = !1,
                  a =
                    !me(e.total.isShowTotalAmount) || e.total.isShowTotalAmount,
                  o = !!me(e.total.isAmountPending) && e.total.isAmountPending,
                  i = { amount: { currency: null, value: "0.00" } },
                  s = function (e, t, n) {
                    return { label: e, amount: { currency: t, value: n } };
                  },
                  l = function (e, t) {
                    var n =
                      2 < arguments.length && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0;
                    return {
                      label: e,
                      amount: { currency: t, value: n },
                      isAmountPending: !0,
                    };
                  },
                  p = function (e, t) {
                    return parseFloat(e) !== parseFloat(t);
                  },
                  u = 0,
                  c = JSON.parse(JSON.stringify(e)),
                  d = !!(c.displayItems && 0 < c.displayItems.length);
                if ((d || (c.displayItems = null), d)) {
                  for (var f, y = [], m = 0; m < c.displayItems.length; m++) {
                    if (
                      ((f = c.displayItems[m]),
                      i.amount.currency ||
                        (i.amount.currency = f.amount.currency),
                      i.amount.currency !== f.amount.currency)
                    )
                      return (
                        console.error(
                          "[TapPay] payment request data have inconsistent currency, please use consistent currency."
                        ),
                        !1
                      );
                    if (
                      !f.isAmountPending &&
                      !1 === Object.hasOwnProperty.call(f.amount, "value")
                    )
                      return (
                        console.error(
                          "Your displayItems object should have `amount.value` or `isAmountPending:true`"
                        ),
                        !1
                      );
                    if (
                      f.isAmountPending &&
                      Object.hasOwnProperty.call(f.amount, "value")
                    )
                      return (
                        console.error(
                          "Your displayItems object should only have `amount.value` or `isAmountPending:true`"
                        ),
                        !1
                      );
                    f.isAmountPending
                      ? ((t = !0), y.push(1), Object.assign(f, i))
                      : y.push(-1),
                      (u += parseFloat(f.amount.value));
                  }
                  y.reduce(function (e, t) {
                    return e + t;
                  }, 0) === c.displayItems.length && (r = !0);
                }
                if (
                  (i.amount.currency ||
                    (i.amount.currency = c.total.amount.currency),
                  i.amount.currency !== c.total.amount.currency)
                )
                  return (
                    console.error(
                      "[TapPay] payment request data have inconsistent currency, please use consistent currency."
                    ),
                    !1
                  );
                if (!a && !o)
                  return (
                    console.error(
                      "[TapPay] `isShowTotalAmount` and `total.isAmountPending` couldn't be false at the same time."
                    ),
                    !1
                  );
                if (d) {
                  var h = !(0 !== u || !r);
                  if (!(0 === u || !t) || null) {
                    if (!o)
                      return (
                        console.error(
                          "[TapPay] `total.isAmountPending` must be true if there is any payment item's amount is `pending`"
                        ),
                        !1
                      );
                    if (((n.isAmountPending = !0), a)) {
                      if (p(c.total.amount.value, u))
                        return (
                          console.error(
                            "[TapPay] Your total amount value is not equal to sum of displayItems value."
                          ),
                          !1
                        );
                      c.total = s(c.total.label, i.amount.currency, u);
                    } else c.total = l(c.total.label, i.amount.currency, u);
                  } else if (h) {
                    if (!o)
                      return (
                        console.error(
                          "[TapPay] `total.isAmountPending` must be true if there is any payment item's amount is `pending`"
                        ),
                        !1
                      );
                    if (a)
                      return (
                        console.error(
                          "[TapPay] Total amount couldn’t be displayed if all paymentItems' amount are pending."
                        ),
                        !1
                      );
                    (n.isAmountPending = !0),
                      (c.total = l(c.total.label, i.amount.currency, 1));
                  } else if (((n.isAmountPending = o), a)) {
                    var v = c.total.amount.value;
                    if (p(v, u))
                      return (
                        console.error(
                          "[TapPay] Your total amount value is not equal to sum of displayItems value."
                        ),
                        !1
                      );
                    if (0 >= parseFloat(v))
                      return (
                        console.error(
                          "[TapPay] `total.amount.value` must greater than zero when `total.isShowTotalAmount:true`"
                        ),
                        !1
                      );
                    c.total = s(c.total.label, i.amount.currency, u);
                  } else c.total = l(c.total.label, i.amount.currency, u);
                } else if (((n.isAmountPending = o), a)) {
                  if (
                    !1 === Object.hasOwnProperty.call(c.total.amount, "value")
                  )
                    return (
                      console.error(
                        "[TapPay] `total.amount.value` should have value when `total.isShowTotalAmount:true`"
                      ),
                      !1
                    );
                  var g = c.total.amount.value;
                  if (0 >= parseFloat(g))
                    return (
                      console.error(
                        "[TapPay] `total.amount.value` must greater than zero when `total.isShowTotalAmount:true`"
                      ),
                      !1
                    );
                  c.total = s(c.total.label, i.amount.currency, g);
                } else c.total = l(c.total.label, i.amount.currency, 1);
                return {
                  displayItems: c.displayItems,
                  total: c.total,
                  shippingOptions: c.shippingOptions || [],
                };
              }),
              (n.preparePaymentOptions = function (e) {
                var t = {};
                return e.hasOwnProperty("options") && (t = e.options), t;
              }),
              (n.parseSupportMethod = function (e, t) {
                var r = t.supportedNetworks,
                  a = t.options || {},
                  o = {};
                if (
                  -1 ===
                  [
                    "card",
                    "pay_with_google",
                    "apple_pay",
                    "basic-card",
                    "https://google.com/pay",
                    "https://apple.com/apple-pay",
                  ].indexOf(e)
                )
                  return console.error(
                    "[TapPay] " +
                      e +
                      " is not supported, supportedMethods: card, pay_with_google, apple_pay"
                  );
                if ("card" === e || "basic-card" === e)
                  o = {
                    supportedMethods: ["basic-card"],
                    data: {
                      supportedNetworks: r.map(function (e) {
                        return e.toLowerCase();
                      }),
                    },
                  };
                else if (
                  "pay_with_google" === e ||
                  "https://google.com/pay" === e
                ) {
                  var i = n.pay_with_google_options || {};
                  (o = {
                    supportedMethods: ["https://google.com/pay"],
                    data: {
                      merchantId: "04234483533225200652",
                      environment: "TEST",
                      apiVersion: 1,
                      allowedPaymentMethods: i.allowedPaymentMethods || [
                        "CARD",
                        "TOKENIZED_CARD",
                      ],
                      paymentMethodTokenizationParameters: {
                        tokenizationType: "PAYMENT_GATEWAY",
                        parameters: {
                          gateway: "tappay",
                          gatewayMerchantId: "tappay",
                        },
                      },
                      cardRequirements: {
                        allowedCardNetworks: r,
                        allowPrepaidCards: i.allowPrepaidCards || !0,
                        billingAddressRequired: i.billingAddressRequired || !1,
                        billingAddressFormat: i.billingAddressFormat || "MIN",
                      },
                      phoneNumberRequired: a.requestPayerPhone || !1,
                      emailRequired: a.requestPayerEmail || !1,
                      shippingAddressRequired: a.requestShipping || !1,
                      shippingAddressRequirements: {
                        allowedCountryCodes: i.allowedCountryCodes || void 0,
                      },
                    },
                  }),
                    "production" === u("type") && delete o.data.environment;
                } else if (
                  "apple_pay" === e ||
                  "https://apple.com/apple-pay" === e
                ) {
                  var s = n.apple_pay_options || {};
                  o = {
                    supportedMethods: ["https://apple.com/apple-pay"],
                    data: {
                      supportedNetworks: n.convertToApplePayNetworks(r),
                      countryCode: s.countryCode || "TW",
                      merchantIdentifier: s.merchantIdentifier,
                    },
                  };
                }
                return o;
              }),
              (n.convertToApplePayNetworks = function (e) {
                return e
                  .map(function (e) {
                    var t = e.toLowerCase();
                    return "amex" === t
                      ? "amex"
                      : "jcb" === t
                      ? "jcb"
                      : "mastercard" === t
                      ? "masterCard"
                      : "visa" === t
                      ? "visa"
                      : null;
                  })
                  .filter(function (e) {
                    return null !== e;
                  });
              }),
              (n.preparePaymentMethods = function (e) {
                return e.hasOwnProperty("supportedMethods")
                  ? e.supportedMethods.map(function (t) {
                      return n.parseSupportMethod(t, e);
                    })
                  : (console.error(
                      '[TapPay] "supportedMthods" is not found in the paymentRequest, you need to setup the right name.'
                    ),
                    !1);
              }),
              (n.preparePaymentRequest = function (e) {
                var t = n.preparePaymentMethods(e),
                  r = n.preparePaymentItems(e),
                  a = n.preparePaymentOptions(e);
                return t && r && a
                  ? ((n.paymentRequest = {
                      supportedInstruments: t,
                      details: r,
                      options: a,
                    }),
                    !0)
                  : ((n.paymentRequest = null), !1);
              }),
              (n.getPrime = function (t) {
                if (de(t))
                  return console.error(
                    "[TapPay] TPDirect.paymentRequestApi.getPrime(callback): callback is not a function"
                  );
                if (!h)
                  return console.error("[TapPay] Doesnt load pfirame yet");
                if (!n.paymentRequest)
                  return console.error(
                    "[TapPay] You need to setup the complete payment request."
                  );
                if (e.ApplePaySession) n.applePayGetPrime(t);
                else if (f) n.iosChromeGetPrime(t);
                else {
                  i = t;
                  var r = n.paymentRequest,
                    a = r.supportedInstruments,
                    o = r.details,
                    s = r.options,
                    l = new e.PaymentRequest(a, o, s);
                  (l.onshippingoptionchange = function (e) {
                    var t = JSON.parse(JSON.stringify(r.details));
                    (t.shippingOptions = t.shippingOptions.map(function (e) {
                      return (
                        l.shippingOption === e.id
                          ? ((e.selected = !0),
                            (t.total.amount.value = (
                              parseFloat(t.total.amount.value) +
                              parseFloat(e.amount.value)
                            ).toString()))
                          : (e.selected = !1),
                        e
                      );
                    })),
                      e.updateWith(t);
                  }),
                    (l.onshippingaddresschange = function (e) {
                      e.updateWith(r.details);
                    }),
                    l
                      .show()
                      .then(function (e) {
                        (m = e),
                          se({
                            event: "payment_request_get_response_success",
                            response: e,
                          });
                      })
                      .catch(function (e) {
                        se({
                          event: "payment_request_get_response_fail",
                          error_message: e.message,
                        });
                      });
                }
              }),
              (n.iosChromeSetupPaymentRequest = function () {
                var t = n.paymentRequest,
                  r = t.supportedInstruments,
                  a = t.details,
                  i = t.options;
                "servicePickup" === i.shippingType &&
                  (i.shippingType = "pickup");
                try {
                  f = new e.PaymentRequest(r, a, i);
                } catch (e) {
                  return void o({
                    browserSupportPaymentRequest: !1,
                    canMakePaymentWithActiveCard: !1,
                  });
                }
                f.addEventListener("shippingoptionchange", function (e) {
                  var n = JSON.parse(JSON.stringify(t.details));
                  (n.shippingOptions = n.shippingOptions.map(function (e) {
                    return (
                      f.shippingOption === e.id
                        ? ((e.selected = !0),
                          (n.total.amount.value = (
                            parseFloat(n.total.amount.value) +
                            parseFloat(e.amount.value)
                          ).toString()))
                        : (e.selected = !1),
                      e
                    );
                  })),
                    e.updateWith(l.Promise.resolve(a));
                }),
                  f.addEventListener("shippingaddresschange", function (e) {
                    e.updateWith(l.Promise.resolve(t.details));
                  });
              }),
              (n.iosChromeCheckCanMakePaymentWithActiveCard = function () {
                var e = l.Promise.resolve(!0);
                f.canMakePayment && (e = f.canMakePayment()),
                  e
                    .then(function (e) {
                      o({
                        browserSupportPaymentRequest: !0,
                        canMakePaymentWithActiveCard: e,
                      });
                    })
                    .catch(function (e) {
                      console.error(
                        "[TapPay] PaymentRequest.canMakePayment error (see https://developers.google.com/web/fundamentals/payments/deep-dive-into-payment-request#check_payment_method_availability): ",
                        e
                      ),
                        o({
                          browserSupportPaymentRequest: !0,
                          canMakePaymentWithActiveCard: !0,
                          canMakePaymentError: e,
                        });
                    });
              }),
              (n.iosChromeGetPrime = function (t) {
                f.show()
                  .then(function (n) {
                    var r,
                      o = e.TPDirect.paymentRequestApi.paymentRequest,
                      i = o.details.shippingOptions,
                      s = o.details.total.amount.value;
                    if (!0 === o.options.requestShipping && i && i.length) {
                      var l = i.find(function (e) {
                        return e.id === n.shippingOption;
                      }).amount.value;
                      r = (parseFloat(s) + parseFloat(l)).toString();
                    } else r = s;
                    if (
                      "basic-card" === n.methodName ||
                      "basic_card" === n.methodName
                    ) {
                      var p = n.details.cardNumber,
                        u = n.details.expiryMonth,
                        c = n.details.expiryYear.slice(2),
                        d = n.details.cardSecurityCode;
                      (a = function (e) {
                        0 === e.status
                          ? ((e.payer = {
                              email: n.payerEmail,
                              name: n.payerName,
                              phone: n.payerPhone,
                            }),
                            (e.billingAddress = n.details.billingAddress),
                            (e.shippingAddress = n.shippingAddress),
                            (e.shippingOption = n.shippingOption),
                            (e.methodName = "card"),
                            (e.requestId = n.requestId),
                            (e.prime = e.card.prime),
                            (e.total_amount = r),
                            n.complete("success"))
                          : n.complete("fail"),
                          t(e);
                      }),
                        se({
                          event: "get_prime",
                          card: {
                            number: p,
                            exp_month: u,
                            exp_year: c,
                            ccv: d,
                          },
                        });
                    }
                  })
                  .catch(function (e) {
                    var r = { status: 401, msg: e.message };
                    t(r), n.iosChromeSetupPaymentRequest();
                  });
              }),
              (n.applePayGetPrime = function (t) {
                i = t;
                var a = n.paymentRequest;
                "pickup" === a.options.shippingType &&
                  (a.options.shippingType = "storePickup");
                var o = new _.PaymentRequest(
                  a.supportedInstruments,
                  a.details,
                  a.options
                );
                (o.onvalidatemerchant = function (e) {
                  var t = e.validationURL,
                    a = n.apple_pay_options.merchantIdentifier,
                    i = {
                      appId: u("appID"),
                      appKey: u("appKey"),
                      appName: r,
                      appleMerchantId: a,
                      merchant_domain: r,
                      validationURL: t,
                      tappay_endpoint: u("endPoint"),
                    };
                  (d = function (e, t) {
                    if (e)
                      p = new Error(
                        "[Apple Pay] Get Session error: ".concat(e.msg)
                      );
                    else if (0 === t.status)
                      if (0 === t.status && t.statusMessage) {
                        var n = t.statusMessage;
                        p = new Error(
                          "[Apple Pay] Get Session error: ".concat(n)
                        );
                      } else o.completeMerchantValidation(t);
                    else {
                      var r = t.errorMessage || t.msg;
                      p = new Error(
                        "[Apple Pay] Get Session error: ".concat(r)
                      );
                    }
                  }),
                    se({ event: "apple_pay_get_session", payload: i });
                }),
                  (o.onshippingoptionchange = function (t) {
                    var n = JSON.parse(
                      JSON.stringify(
                        e.TPDirect.paymentRequestApi.paymentRequest
                      )
                    ).details;
                    (n.shippingOptions = n.shippingOptions.map(function (e) {
                      return (
                        o.shippingOption === e.id
                          ? ((e.selected = !0),
                            (n.total.amount.value = (
                              parseFloat(n.total.amount.value) +
                              parseFloat(e.amount.value)
                            ).toString()))
                          : (e.selected = !1),
                        e
                      );
                    })),
                      t.updateWith(n);
                  }),
                  (o.onshippingaddresschange = function (e) {
                    var t = JSON.parse(
                      JSON.stringify(n.paymentRequest.details)
                    );
                    t.shippingOptions &&
                      t.shippingOptions.length &&
                      (t.total.amount.value = (
                        parseFloat(t.total.amount.value) +
                        parseFloat(t.shippingOptions[0].amount.value)
                      ).toString()),
                      e.updateWith(t);
                  }),
                  o
                    .show()
                    .then(function (e) {
                      if (!Ce(e.applePayRaw))
                        return (
                          t({
                            status: 402,
                            msg: "[Apple Pay] Parsing Apple Pay result happen error",
                          }),
                          e.complete("fail")
                        );
                      var o = {
                          app_id: u("appID"),
                          app_key: u("appKey"),
                          app_name: r,
                          pay_token_data: e.applePayRaw.token.paymentData,
                          apple_merchant_id:
                            n.apple_pay_options.merchantIdentifier,
                          platform_type: "2",
                          is_amount_pending: n.isAmountPending,
                          device_id: oe().deviceId,
                          tappay_sdk_version: u("sdk_version"),
                        },
                        i = function (r) {
                          var o = r;
                          if (0 === o.status) {
                            o.merchant_reference_info ||
                              (o.merchant_reference_info = {
                                affiliate_codes: [],
                              }),
                              (o.payer = {
                                email: e.payerEmail,
                                name: e.payerName,
                                phone: e.payerPhone,
                              }),
                              (o.billingAddress = e.details.billingAddress),
                              (o.shippingAddress = e.shippingAddress),
                              (o.shippingOption = e.shippingOption),
                              (o.methodName = "apple_pay");
                            var i = e.applePayRaw.token.paymentMethod;
                            o.card = {
                              lastfour: i.displayName.split(" ")[1],
                              type: Re(i.network),
                              funding: Oe(i.type),
                            };
                            var s = n.paymentRequest,
                              l = a.details.shippingOptions,
                              p = parseFloat(s.details.total.amount.value);
                            if (
                              !0 === s.options.requestShipping &&
                              l &&
                              l.length
                            ) {
                              var u = l.find(function (t) {
                                return t.id === e.shippingOption;
                              }).amount.value;
                              o.total_amount = (p + parseFloat(u)).toString();
                            } else o.total_amount = p.toString();
                            e.complete("success");
                          } else e.complete("fail");
                          t(o);
                        },
                        s = function (n) {
                          t(n), e.complete("fail");
                        };
                      (c = function (e, t) {
                        return e ? void s(e) : void i(t);
                      }),
                        se({
                          event: "payment_request_apple_pay_get_prime",
                          parameter: o,
                        });
                    })
                    .catch(function (e) {
                      var n = null;
                      return p
                        ? ((n = p.message),
                          t({ status: 403, msg: n }),
                          void (p = null))
                        : void (
                            e &&
                            t({
                              status: 401,
                              msg: "[Apple Pay] Unexcept Error",
                              originalError: e,
                            })
                          );
                    });
              }),
              n
            );
          })(0, void 0)),
          (e.TPDirect.validate = {
            cardNumber: O,
            ccv: D,
            expiry: E,
            cardType: q,
            sdkError: function () {
              return !e.TPDirect.isDoubleLoaded && n;
            },
          }),
          ue("get_prime_done", function (e) {
            me(a) && a(e.result);
          }),
          ue("iframe_get_prime_ready", function () {
            (w = !0),
              b.forEach(function (e) {
                e();
              });
          }),
          ue("setup_payment_request_done", function (e) {
            o({
              browserSupportPaymentRequest: !0,
              canMakePaymentWithActiveCard:
                e.result.canMakePaymentWithActiveCard,
              canMakePaymentError: e.result.error,
            });
          }),
          ue("payment_request_not_support_in_iframe", function () {
            e.TPDirect.paymentRequestApi.iosChromeSetupPaymentRequest(),
              e.TPDirect.paymentRequestApi.iosChromeCheckCanMakePaymentWithActiveCard();
          }),
          ue("payment_request_get_prime_done", function (e) {
            i(e.result),
              0 === e.result.status && m.complete("success"),
              402 === e.result.status && m.complete("fail");
          }),
          ue("payment_request_apple_pay_get_prime_done", function (e) {
            c(e.err, e.result);
          }),
          ue("apple_pay_get_session_done", function (e) {
            d && d(e.err, e.result);
          }));
    })(window);
  },
]);
