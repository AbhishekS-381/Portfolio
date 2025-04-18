!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"), require("popper.js"))
    : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], e)
      : e(
        ((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).bootstrap = {}),
        t.jQuery,
        t.Popper,
      );
})(this, function (t, e, n) {
  "use strict";
  function i(t) {
    return t && "object" == typeof t && "default" in t ? t : { default: t };
  }
  var d = i(e),
    o = i(n);
  function s(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function a(t, e, n) {
    return e && s(t.prototype, e), n && s(t, n), t;
  }
  function l() {
    return (l =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n,
            i = arguments[e];
          for (n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
        }
        return t;
      }).apply(this, arguments);
  }
  var c = {
    TRANSITION_END: "bsTransitionEnd",
    getUID: function (t) {
      for (; (t += ~~(1e6 * Math.random())), document.getElementById(t););
      return t;
    },
    getSelectorFromElement: function (t) {
      var e,
        n = t.getAttribute("data-target");
      (n && "#" !== n) ||
        (n = (e = t.getAttribute("href")) && "#" !== e ? e.trim() : "");
      try {
        return document.querySelector(n) ? n : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var e = d.default(t).css("transition-duration"),
        n = d.default(t).css("transition-delay"),
        i = parseFloat(e),
        t = parseFloat(n);
      return i || t
        ? ((e = e.split(",")[0]),
          (n = n.split(",")[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      d.default(t).trigger("transitionend");
    },
    supportsTransitionEnd: function () {
      return Boolean("transitionend");
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            s = e[i],
            s =
              s && c.isElement(s)
                ? "element"
                : null === s || void 0 === s
                  ? "" + s
                  : {}.toString
                    .call(s)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(s))
            throw new Error(
              t.toUpperCase() +
              ': Option "' +
              i +
              '" provided type "' +
              s +
              '" but expected type "' +
              o +
              '".',
            );
        }
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" != typeof t.getRootNode)
        return t instanceof ShadowRoot
          ? t
          : t.parentNode
            ? c.findShadowRoot(t.parentNode)
            : null;
      t = t.getRootNode();
      return t instanceof ShadowRoot ? t : null;
    },
    jQueryDetection: function () {
      if (void 0 === d.default)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.",
        );
      var t = d.default.fn.jquery.split(" ")[0].split(".");
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        4 <= t[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0",
        );
    },
  };
  c.jQueryDetection(),
    (d.default.fn.emulateTransitionEnd = function (t) {
      var e = this,
        n = !1;
      return (
        d.default(this).one(c.TRANSITION_END, function () {
          n = !0;
        }),
        setTimeout(function () {
          n || c.triggerTransitionEnd(e);
        }, t),
        this
      );
    }),
    (d.default.event.special[c.TRANSITION_END] = {
      bindType: "transitionend",
      delegateType: "transitionend",
      handle: function (t) {
        if (d.default(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var r = "alert",
    u = d.default.fn[r],
    f =
      (((n = h.prototype).close = function (t) {
        var e = this._element;
        t && (e = this._getRootElement(t)),
          this._triggerCloseEvent(e).isDefaultPrevented() ||
          this._removeElement(e);
      }),
        (n.dispose = function () {
          d.default.removeData(this._element, "bs.alert"), (this._element = null);
        }),
        (n._getRootElement = function (t) {
          var e = c.getSelectorFromElement(t),
            n = !1;
          return (n =
            (n = e ? document.querySelector(e) : n) ||
            d.default(t).closest(".alert")[0]);
        }),
        (n._triggerCloseEvent = function (t) {
          var e = d.default.Event("close.bs.alert");
          return d.default(t).trigger(e), e;
        }),
        (n._removeElement = function (e) {
          var t,
            n = this;
          d.default(e).removeClass("show"),
            d.default(e).hasClass("fade")
              ? ((t = c.getTransitionDurationFromElement(e)),
                d
                  .default(e)
                  .one(c.TRANSITION_END, function (t) {
                    return n._destroyElement(e, t);
                  })
                  .emulateTransitionEnd(t))
              : this._destroyElement(e);
        }),
        (n._destroyElement = function (t) {
          d.default(t).detach().trigger("closed.bs.alert").remove();
        }),
        (h._jQueryInterface = function (n) {
          return this.each(function () {
            var t = d.default(this),
              e = t.data("bs.alert");
            e || ((e = new h(this)), t.data("bs.alert", e)),
              "close" === n && e[n](this);
          });
        }),
        (h._handleDismiss = function (e) {
          return function (t) {
            t && t.preventDefault(), e.close(this);
          };
        }),
        a(h, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        h);
  function h(t) {
    this._element = t;
  }
  d
    .default(document)
    .on(
      "click.bs.alert.data-api",
      '[data-dismiss="alert"]',
      f._handleDismiss(new f()),
    ),
    (d.default.fn[r] = f._jQueryInterface),
    (d.default.fn[r].Constructor = f),
    (d.default.fn[r].noConflict = function () {
      return (d.default.fn[r] = u), f._jQueryInterface;
    });
  var g = d.default.fn.button,
    m =
      (((n = p.prototype).toggle = function () {
        var t,
          e = !0,
          n = !0,
          i = d.default(this._element).closest('[data-toggle="buttons"]')[0];
        !i ||
          ((t = this._element.querySelector('input:not([type="hidden"])')) &&
            ("radio" === t.type &&
              (t.checked && this._element.classList.contains("active")
                ? (e = !1)
                : (i = i.querySelector(".active")) &&
                d.default(i).removeClass("active")),
              e &&
              (("checkbox" !== t.type && "radio" !== t.type) ||
                (t.checked = !this._element.classList.contains("active")),
                this.shouldAvoidTriggerChange || d.default(t).trigger("change")),
              t.focus(),
              (n = !1))),
          this._element.hasAttribute("disabled") ||
          this._element.classList.contains("disabled") ||
          (n &&
            this._element.setAttribute(
              "aria-pressed",
              !this._element.classList.contains("active"),
            ),
            e && d.default(this._element).toggleClass("active"));
      }),
        (n.dispose = function () {
          d.default.removeData(this._element, "bs.button"),
            (this._element = null);
        }),
        (p._jQueryInterface = function (n, i) {
          return this.each(function () {
            var t = d.default(this),
              e = t.data("bs.button");
            e || ((e = new p(this)), t.data("bs.button", e)),
              (e.shouldAvoidTriggerChange = i),
              "toggle" === n && e[n]();
          });
        }),
        a(p, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        p);
  function p(t) {
    (this._element = t), (this.shouldAvoidTriggerChange = !1);
  }
  d
    .default(document)
    .on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var e,
        n = t.target,
        i = n;
      !(n = !d.default(n).hasClass("btn")
        ? d.default(n).closest(".btn")[0]
        : n) ||
        n.hasAttribute("disabled") ||
        n.classList.contains("disabled") ||
        ((e = n.querySelector('input:not([type="hidden"])')) &&
          (e.hasAttribute("disabled") || e.classList.contains("disabled")))
        ? t.preventDefault()
        : ("INPUT" !== i.tagName && "LABEL" === n.tagName) ||
        m._jQueryInterface.call(
          d.default(n),
          "toggle",
          "INPUT" === i.tagName,
        );
    })
    .on(
      "focus.bs.button.data-api blur.bs.button.data-api",
      '[data-toggle^="button"]',
      function (t) {
        var e = d.default(t.target).closest(".btn")[0];
        d.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
      },
    ),
    d.default(window).on("load.bs.button.data-api", function () {
      for (
        var t = [].slice.call(
          document.querySelectorAll('[data-toggle="buttons"] .btn'),
        ),
        e = 0,
        n = t.length;
        e < n;
        e++
      ) {
        var i = t[e],
          o = i.querySelector('input:not([type="hidden"])');
        o.checked || o.hasAttribute("checked")
          ? i.classList.add("active")
          : i.classList.remove("active");
      }
      for (
        var s = 0,
        a = (t = [].slice.call(
          document.querySelectorAll('[data-toggle="button"]'),
        )).length;
        s < a;
        s++
      ) {
        var l = t[s];
        "true" === l.getAttribute("aria-pressed")
          ? l.classList.add("active")
          : l.classList.remove("active");
      }
    }),
    (d.default.fn.button = m._jQueryInterface),
    (d.default.fn.button.Constructor = m),
    (d.default.fn.button.noConflict = function () {
      return (d.default.fn.button = g), m._jQueryInterface;
    });
  var _ = "carousel",
    v = d.default.fn[_],
    b = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    y = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    E = { TOUCH: "touch", PEN: "pen" },
    w =
      (((n = T.prototype).next = function () {
        this._isSliding || this._slide("next");
      }),
        (n.nextWhenVisible = function () {
          var t = d.default(this._element);
          !document.hidden &&
            t.is(":visible") &&
            "hidden" !== t.css("visibility") &&
            this.next();
        }),
        (n.prev = function () {
          this._isSliding || this._slide("prev");
        }),
        (n.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(
              ".carousel-item-next, .carousel-item-prev",
            ) && (c.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (n.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
            (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
            !this._isPaused &&
            (this._interval = setInterval(
              (document.visibilityState
                ? this.nextWhenVisible
                : this.next
              ).bind(this),
              this._config.interval,
            ));
        }),
        (n.to = function (t) {
          var e = this;
          this._activeElement = this._element.querySelector(
            ".active.carousel-item",
          );
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              d.default(this._element).one("slid.bs.carousel", function () {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              n = n < t ? "next" : "prev";
              this._slide(n, this._items[t]);
            }
        }),
        (n.dispose = function () {
          d.default(this._element).off(".bs.carousel"),
            d.default.removeData(this._element, "bs.carousel"),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (n._getConfig = function (t) {
          return (t = l({}, b, t)), c.typeCheckConfig(_, t, y), t;
        }),
        (n._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          t <= 40 ||
            ((t = t / this.touchDeltaX),
              (this.touchDeltaX = 0) < t && this.prev(),
              t < 0 && this.next());
        }),
        (n._addEventListeners = function () {
          var e = this;
          this._config.keyboard &&
            d.default(this._element).on("keydown.bs.carousel", function (t) {
              return e._keydown(t);
            }),
            "hover" === this._config.pause &&
            d
              .default(this._element)
              .on("mouseenter.bs.carousel", function (t) {
                return e.pause(t);
              })
              .on("mouseleave.bs.carousel", function (t) {
                return e.cycle(t);
              }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (n._addTouchEventListeners = function () {
          var t,
            e,
            n = this;
          this._touchSupported &&
            ((t = function (t) {
              n._pointerEvent && E[t.originalEvent.pointerType.toUpperCase()]
                ? (n.touchStartX = t.originalEvent.clientX)
                : n._pointerEvent ||
                (n.touchStartX = t.originalEvent.touches[0].clientX);
            }),
              (e = function (t) {
                n._pointerEvent &&
                  E[t.originalEvent.pointerType.toUpperCase()] &&
                  (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                  n._handleSwipe(),
                  "hover" === n._config.pause &&
                  (n.pause(),
                    n.touchTimeout && clearTimeout(n.touchTimeout),
                    (n.touchTimeout = setTimeout(function (t) {
                      return n.cycle(t);
                    }, 500 + n._config.interval)));
              }),
              d
                .default(this._element.querySelectorAll(".carousel-item img"))
                .on("dragstart.bs.carousel", function (t) {
                  return t.preventDefault();
                }),
              this._pointerEvent
                ? (d.default(this._element).on("pointerdown.bs.carousel", t),
                  d.default(this._element).on("pointerup.bs.carousel", e),
                  this._element.classList.add("pointer-event"))
                : (d.default(this._element).on("touchstart.bs.carousel", t),
                  d
                    .default(this._element)
                    .on("touchmove.bs.carousel", function (t) {
                      (t = t).originalEvent.touches &&
                        1 < t.originalEvent.touches.length
                        ? (n.touchDeltaX = 0)
                        : (n.touchDeltaX =
                          t.originalEvent.touches[0].clientX - n.touchStartX);
                    }),
                  d.default(this._element).on("touchend.bs.carousel", e)));
        }),
        (n._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (n._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item"))
                : []),
            this._items.indexOf(t)
          );
        }),
        (n._getItemByDirection = function (t, e) {
          var n = "next" === t,
            i = "prev" === t,
            o = this._getItemIndex(e),
            s = this._items.length - 1;
          if (((i && 0 === o) || (n && o === s)) && !this._config.wrap) return e;
          t = (o + ("prev" === t ? -1 : 1)) % this._items.length;
          return -1 == t ? this._items[this._items.length - 1] : this._items[t];
        }),
        (n._triggerSlideEvent = function (t, e) {
          var n = this._getItemIndex(t),
            i = this._getItemIndex(
              this._element.querySelector(".active.carousel-item"),
            ),
            n = d.default.Event("slide.bs.carousel", {
              relatedTarget: t,
              direction: e,
              from: i,
              to: n,
            });
          return d.default(this._element).trigger(n), n;
        }),
        (n._setActiveIndicatorElement = function (t) {
          var e;
          this._indicatorsElement &&
            ((e = [].slice.call(
              this._indicatorsElement.querySelectorAll(".active"),
            )),
              d.default(e).removeClass("active"),
              (t = this._indicatorsElement.children[this._getItemIndex(t)]) &&
              d.default(t).addClass("active"));
        }),
        (n._slide = function (t, e) {
          var n,
            i,
            o,
            s = this,
            a = this._element.querySelector(".active.carousel-item"),
            l = this._getItemIndex(a),
            r = e || (a && this._getItemByDirection(t, a)),
            u = this._getItemIndex(r),
            e = Boolean(this._interval),
            t =
              "next" === t
                ? ((n = "carousel-item-left"), (i = "carousel-item-next"), "left")
                : ((n = "carousel-item-right"),
                  (i = "carousel-item-prev"),
                  "right");
          r && d.default(r).hasClass("active")
            ? (this._isSliding = !1)
            : !this._triggerSlideEvent(r, t).isDefaultPrevented() &&
            a &&
            r &&
            ((this._isSliding = !0),
              e && this.pause(),
              this._setActiveIndicatorElement(r),
              (o = d.default.Event("slid.bs.carousel", {
                relatedTarget: r,
                direction: t,
                from: l,
                to: u,
              })),
              d.default(this._element).hasClass("slide")
                ? (d.default(r).addClass(i),
                  c.reflow(r),
                  d.default(a).addClass(n),
                  d.default(r).addClass(n),
                  (u = parseInt(r.getAttribute("data-interval"), 10))
                    ? ((this._config.defaultInterval =
                      this._config.defaultInterval || this._config.interval),
                      (this._config.interval = u))
                    : (this._config.interval =
                      this._config.defaultInterval || this._config.interval),
                  (u = c.getTransitionDurationFromElement(a)),
                  d
                    .default(a)
                    .one(c.TRANSITION_END, function () {
                      d
                        .default(r)
                        .removeClass(n + " " + i)
                        .addClass("active"),
                        d.default(a).removeClass("active " + i + " " + n),
                        (s._isSliding = !1),
                        setTimeout(function () {
                          return d.default(s._element).trigger(o);
                        }, 0);
                    })
                    .emulateTransitionEnd(u))
                : (d.default(a).removeClass("active"),
                  d.default(r).addClass("active"),
                  (this._isSliding = !1),
                  d.default(this._element).trigger(o)),
              e && this.cycle());
        }),
        (T._jQueryInterface = function (i) {
          return this.each(function () {
            var t = d.default(this).data("bs.carousel"),
              e = l({}, b, d.default(this).data());
            "object" == typeof i && (e = l({}, e, i));
            var n = "string" == typeof i ? i : e.slide;
            if (
              (t ||
                ((t = new T(this, e)), d.default(this).data("bs.carousel", t)),
                "number" == typeof i)
            )
              t.to(i);
            else if ("string" == typeof n) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            } else e.interval && e.ride && (t.pause(), t.cycle());
          });
        }),
        (T._dataApiClickHandler = function (t) {
          var e,
            n,
            i = c.getSelectorFromElement(this);
          !i ||
            ((e = d.default(i)[0]) &&
              d.default(e).hasClass("carousel") &&
              ((n = l({}, d.default(e).data(), d.default(this).data())),
                (i = this.getAttribute("data-slide-to")) && (n.interval = !1),
                T._jQueryInterface.call(d.default(e), n),
                i && d.default(e).data("bs.carousel").to(i),
                t.preventDefault()));
        }),
        a(T, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return b;
            },
          },
        ]),
        T);
  function T(t, e) {
    (this._items = null),
      (this._interval = null),
      (this._activeElement = null),
      (this._isPaused = !1),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this.touchStartX = 0),
      (this.touchDeltaX = 0),
      (this._config = this._getConfig(e)),
      (this._element = t),
      (this._indicatorsElement = this._element.querySelector(
        ".carousel-indicators",
      )),
      (this._touchSupported =
        "ontouchstart" in document.documentElement ||
        0 < navigator.maxTouchPoints),
      (this._pointerEvent = Boolean(
        window.PointerEvent || window.MSPointerEvent,
      )),
      this._addEventListeners();
  }
  d
    .default(document)
    .on(
      "click.bs.carousel.data-api",
      "[data-slide], [data-slide-to]",
      w._dataApiClickHandler,
    ),
    d.default(window).on("load.bs.carousel.data-api", function () {
      for (
        var t = [].slice.call(
          document.querySelectorAll('[data-ride="carousel"]'),
        ),
        e = 0,
        n = t.length;
        e < n;
        e++
      ) {
        var i = d.default(t[e]);
        w._jQueryInterface.call(i, i.data());
      }
    }),
    (d.default.fn[_] = w._jQueryInterface),
    (d.default.fn[_].Constructor = w),
    (d.default.fn[_].noConflict = function () {
      return (d.default.fn[_] = v), w._jQueryInterface;
    });
  var C = "collapse",
    S = d.default.fn[C],
    N = { toggle: !0, parent: "" },
    D = { toggle: "boolean", parent: "(string|element)" },
    k =
      (((n = A.prototype).toggle = function () {
        d.default(this._element).hasClass("show") ? this.hide() : this.show();
      }),
        (n.show = function () {
          var t,
            e,
            n,
            i,
            o = this;
          this._isTransitioning ||
            d.default(this._element).hasClass("show") ||
            ((i =
              this._parent &&
                0 ===
                (i = [].slice
                  .call(this._parent.querySelectorAll(".show, .collapsing"))
                  .filter(function (t) {
                    return "string" == typeof o._config.parent
                      ? t.getAttribute("data-parent") === o._config.parent
                      : t.classList.contains("collapse");
                  })).length
                ? null
                : i) &&
              (n = d.default(i).not(this._selector).data("bs.collapse")) &&
              n._isTransitioning) ||
            ((t = d.default.Event("show.bs.collapse")),
              d.default(this._element).trigger(t),
              t.isDefaultPrevented() ||
              (i &&
                (A._jQueryInterface.call(
                  d.default(i).not(this._selector),
                  "hide",
                ),
                  n || d.default(i).data("bs.collapse", null)),
                (e = this._getDimension()),
                d
                  .default(this._element)
                  .removeClass("collapse")
                  .addClass("collapsing"),
                (this._element.style[e] = 0),
                this._triggerArray.length &&
                d
                  .default(this._triggerArray)
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                this.setTransitioning(!0),
                (n = "scroll" + (e[0].toUpperCase() + e.slice(1))),
                (i = c.getTransitionDurationFromElement(this._element)),
                d
                  .default(this._element)
                  .one(c.TRANSITION_END, function () {
                    d
                      .default(o._element)
                      .removeClass("collapsing")
                      .addClass("collapse show"),
                      (o._element.style[e] = ""),
                      o.setTransitioning(!1),
                      d.default(o._element).trigger("shown.bs.collapse");
                  })
                  .emulateTransitionEnd(i),
                (this._element.style[e] = this._element[n] + "px")));
        }),
        (n.hide = function () {
          var t = this;
          if (
            !this._isTransitioning &&
            d.default(this._element).hasClass("show")
          ) {
            var e = d.default.Event("hide.bs.collapse");
            if ((d.default(this._element).trigger(e), !e.isDefaultPrevented())) {
              e = this._getDimension();
              (this._element.style[e] =
                this._element.getBoundingClientRect()[e] + "px"),
                c.reflow(this._element),
                d
                  .default(this._element)
                  .addClass("collapsing")
                  .removeClass("collapse show");
              var n = this._triggerArray.length;
              if (0 < n)
                for (var i = 0; i < n; i++) {
                  var o = this._triggerArray[i],
                    s = c.getSelectorFromElement(o);
                  null !== s &&
                    (d
                      .default([].slice.call(document.querySelectorAll(s)))
                      .hasClass("show") ||
                      d
                        .default(o)
                        .addClass("collapsed")
                        .attr("aria-expanded", !1));
                }
              this.setTransitioning(!0), (this._element.style[e] = "");
              e = c.getTransitionDurationFromElement(this._element);
              d.default(this._element)
                .one(c.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    d
                      .default(t._element)
                      .removeClass("collapsing")
                      .addClass("collapse")
                      .trigger("hidden.bs.collapse");
                })
                .emulateTransitionEnd(e);
            }
          }
        }),
        (n.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (n.dispose = function () {
          d.default.removeData(this._element, "bs.collapse"),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (n._getConfig = function (t) {
          return (
            ((t = l({}, N, t)).toggle = Boolean(t.toggle)),
            c.typeCheckConfig(C, t, D),
            t
          );
        }),
        (n._getDimension = function () {
          return d.default(this._element).hasClass("width") ? "width" : "height";
        }),
        (n._getParent = function () {
          var t,
            n = this;
          c.isElement(this._config.parent)
            ? ((t = this._config.parent),
              void 0 !== this._config.parent.jquery &&
              (t = this._config.parent[0]))
            : (t = document.querySelector(this._config.parent));
          var e =
            '[data-toggle="collapse"][data-parent="' +
            this._config.parent +
            '"]',
            e = [].slice.call(t.querySelectorAll(e));
          return (
            d.default(e).each(function (t, e) {
              n._addAriaAndCollapsedClass(A._getTargetFromElement(e), [e]);
            }),
            t
          );
        }),
        (n._addAriaAndCollapsedClass = function (t, e) {
          t = d.default(t).hasClass("show");
          e.length &&
            d.default(e).toggleClass("collapsed", !t).attr("aria-expanded", t);
        }),
        (A._getTargetFromElement = function (t) {
          t = c.getSelectorFromElement(t);
          return t ? document.querySelector(t) : null;
        }),
        (A._jQueryInterface = function (i) {
          return this.each(function () {
            var t = d.default(this),
              e = t.data("bs.collapse"),
              n = l({}, N, t.data(), "object" == typeof i && i ? i : {});
            if (
              (!e &&
                n.toggle &&
                "string" == typeof i &&
                /show|hide/.test(i) &&
                (n.toggle = !1),
                e || ((e = new A(this, n)), t.data("bs.collapse", e)),
                "string" == typeof i)
            ) {
              if (void 0 === e[i])
                throw new TypeError('No method named "' + i + '"');
              e[i]();
            }
          });
        }),
        a(A, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return N;
            },
          },
        ]),
        A);
  function A(e, t) {
    (this._isTransitioning = !1),
      (this._element = e),
      (this._config = this._getConfig(t)),
      (this._triggerArray = [].slice.call(
        document.querySelectorAll(
          '[data-toggle="collapse"][href="#' +
          e.id +
          '"],[data-toggle="collapse"][data-target="#' +
          e.id +
          '"]',
        ),
      ));
    for (
      var n = [].slice.call(
        document.querySelectorAll('[data-toggle="collapse"]'),
      ),
      i = 0,
      o = n.length;
      i < o;
      i++
    ) {
      var s = n[i],
        a = c.getSelectorFromElement(s),
        l = [].slice.call(document.querySelectorAll(a)).filter(function (t) {
          return t === e;
        });
      null !== a &&
        0 < l.length &&
        ((this._selector = a), this._triggerArray.push(s));
    }
    (this._parent = this._config.parent ? this._getParent() : null),
      this._config.parent ||
      this._addAriaAndCollapsedClass(this._element, this._triggerArray),
      this._config.toggle && this.toggle();
  }
  d
    .default(document)
    .on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var n = d.default(this),
        t = c.getSelectorFromElement(this),
        t = [].slice.call(document.querySelectorAll(t));
      d.default(t).each(function () {
        var t = d.default(this),
          e = t.data("bs.collapse") ? "toggle" : n.data();
        k._jQueryInterface.call(t, e);
      });
    }),
    (d.default.fn[C] = k._jQueryInterface),
    (d.default.fn[C].Constructor = k),
    (d.default.fn[C].noConflict = function () {
      return (d.default.fn[C] = S), k._jQueryInterface;
    });
  var I = "dropdown",
    j = d.default.fn[I],
    O = new RegExp("38|40|27"),
    x = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    P = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    R =
      (((n = L.prototype).toggle = function () {
        var t;
        this._element.disabled ||
          d.default(this._element).hasClass("disabled") ||
          ((t = d.default(this._menu).hasClass("show")),
            L._clearMenus(),
            t || this.show(!0));
      }),
        (n.show = function (t) {
          if (
            (void 0 === t && (t = !1),
              !(
                this._element.disabled ||
                d.default(this._element).hasClass("disabled") ||
                d.default(this._menu).hasClass("show")
              ))
          ) {
            var e = { relatedTarget: this._element },
              n = d.default.Event("show.bs.dropdown", e),
              i = L._getParentFromElement(this._element);
            if ((d.default(i).trigger(n), !n.isDefaultPrevented())) {
              if (!this._inNavbar && t) {
                if (void 0 === o.default)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)",
                  );
                t = this._element;
                "parent" === this._config.reference
                  ? (t = i)
                  : c.isElement(this._config.reference) &&
                  ((t = this._config.reference),
                    void 0 !== this._config.reference.jquery &&
                    (t = this._config.reference[0])),
                  "scrollParent" !== this._config.boundary &&
                  d.default(i).addClass("position-static"),
                  (this._popper = new o.default(
                    t,
                    this._menu,
                    this._getPopperConfig(),
                  ));
              }
              "ontouchstart" in document.documentElement &&
                0 === d.default(i).closest(".navbar-nav").length &&
                d
                  .default(document.body)
                  .children()
                  .on("mouseover", null, d.default.noop),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                d.default(this._menu).toggleClass("show"),
                d
                  .default(i)
                  .toggleClass("show")
                  .trigger(d.default.Event("shown.bs.dropdown", e));
            }
          }
        }),
        (n.hide = function () {
          var t, e, n;
          this._element.disabled ||
            d.default(this._element).hasClass("disabled") ||
            !d.default(this._menu).hasClass("show") ||
            ((t = { relatedTarget: this._element }),
              (e = d.default.Event("hide.bs.dropdown", t)),
              (n = L._getParentFromElement(this._element)),
              d.default(n).trigger(e),
              e.isDefaultPrevented() ||
              (this._popper && this._popper.destroy(),
                d.default(this._menu).toggleClass("show"),
                d
                  .default(n)
                  .toggleClass("show")
                  .trigger(d.default.Event("hidden.bs.dropdown", t))));
        }),
        (n.dispose = function () {
          d.default.removeData(this._element, "bs.dropdown"),
            d.default(this._element).off(".bs.dropdown"),
            (this._element = null),
            (this._menu = null) !== this._popper &&
            (this._popper.destroy(), (this._popper = null));
        }),
        (n.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (n._addEventListeners = function () {
          var e = this;
          d.default(this._element).on("click.bs.dropdown", function (t) {
            t.preventDefault(), t.stopPropagation(), e.toggle();
          });
        }),
        (n._getConfig = function (t) {
          return (
            (t = l(
              {},
              this.constructor.Default,
              d.default(this._element).data(),
              t,
            )),
            c.typeCheckConfig(I, t, this.constructor.DefaultType),
            t
          );
        }),
        (n._getMenuElement = function () {
          var t;
          return (
            this._menu ||
            ((t = L._getParentFromElement(this._element)) &&
              (this._menu = t.querySelector(".dropdown-menu"))),
            this._menu
          );
        }),
        (n._getPlacement = function () {
          var t = d.default(this._element.parentNode),
            e = "bottom-start";
          return (
            t.hasClass("dropup")
              ? (e = d.default(this._menu).hasClass("dropdown-menu-right")
                ? "top-end"
                : "top-start")
              : t.hasClass("dropright")
                ? (e = "right-start")
                : t.hasClass("dropleft")
                  ? (e = "left-start")
                  : d.default(this._menu).hasClass("dropdown-menu-right") &&
                  (e = "bottom-end"),
            e
          );
        }),
        (n._detectNavbar = function () {
          return 0 < d.default(this._element).closest(".navbar").length;
        }),
        (n._getOffset = function () {
          var e = this,
            t = {};
          return (
            "function" == typeof this._config.offset
              ? (t.fn = function (t) {
                return (
                  (t.offsets = l(
                    {},
                    t.offsets,
                    e._config.offset(t.offsets, e._element) || {},
                  )),
                  t
                );
              })
              : (t.offset = this._config.offset),
            t
          );
        }),
        (n._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            "static" === this._config.display &&
            (t.modifiers.applyStyle = { enabled: !1 }),
            l({}, t, this._config.popperConfig)
          );
        }),
        (L._jQueryInterface = function (e) {
          return this.each(function () {
            var t = d.default(this).data("bs.dropdown");
            if (
              (t ||
                ((t = new L(this, "object" == typeof e ? e : null)),
                  d.default(this).data("bs.dropdown", t)),
                "string" == typeof e)
            ) {
              if (void 0 === t[e])
                throw new TypeError('No method named "' + e + '"');
              t[e]();
            }
          });
        }),
        (L._clearMenus = function (t) {
          if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
            for (
              var e = [].slice.call(
                document.querySelectorAll('[data-toggle="dropdown"]'),
              ),
              n = 0,
              i = e.length;
              n < i;
              n++
            ) {
              var o,
                s,
                a = L._getParentFromElement(e[n]),
                l = d.default(e[n]).data("bs.dropdown"),
                r = { relatedTarget: e[n] };
              t && "click" === t.type && (r.clickEvent = t),
                l &&
                ((o = l._menu),
                  !d.default(a).hasClass("show") ||
                  (t &&
                    (("click" === t.type &&
                      /input|textarea/i.test(t.target.tagName)) ||
                      ("keyup" === t.type && 9 === t.which)) &&
                    d.default.contains(a, t.target)) ||
                  ((s = d.default.Event("hide.bs.dropdown", r)),
                    d.default(a).trigger(s),
                    s.isDefaultPrevented() ||
                    ("ontouchstart" in document.documentElement &&
                      d
                        .default(document.body)
                        .children()
                        .off("mouseover", null, d.default.noop),
                      e[n].setAttribute("aria-expanded", "false"),
                      l._popper && l._popper.destroy(),
                      d.default(o).removeClass("show"),
                      d
                        .default(a)
                        .removeClass("show")
                        .trigger(d.default.Event("hidden.bs.dropdown", r)))));
            }
        }),
        (L._getParentFromElement = function (t) {
          var e,
            n = c.getSelectorFromElement(t);
          return (e = n ? document.querySelector(n) : e) || t.parentNode;
        }),
        (L._dataApiKeydownHandler = function (t) {
          if (
            !(/input|textarea/i.test(t.target.tagName)
              ? 32 === t.which ||
              (27 !== t.which &&
                ((40 !== t.which && 38 !== t.which) ||
                  d.default(t.target).closest(".dropdown-menu").length))
              : !O.test(t.which)) &&
            !this.disabled &&
            !d.default(this).hasClass("disabled")
          ) {
            var e = L._getParentFromElement(this),
              n = d.default(e).hasClass("show");
            if (n || 27 !== t.which) {
              if (
                (t.preventDefault(),
                  t.stopPropagation(),
                  !n || 27 === t.which || 32 === t.which)
              )
                return (
                  27 === t.which &&
                  d
                    .default(e.querySelector('[data-toggle="dropdown"]'))
                    .trigger("focus"),
                  void d.default(this).trigger("click")
                );
              n = [].slice
                .call(
                  e.querySelectorAll(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                  ),
                )
                .filter(function (t) {
                  return d.default(t).is(":visible");
                });
              0 !== n.length &&
                ((e = n.indexOf(t.target)),
                  38 === t.which && 0 < e && e--,
                  40 === t.which && e < n.length - 1 && e++,
                  n[(e = e < 0 ? 0 : e)].focus());
            }
          }
        }),
        a(L, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return x;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return P;
            },
          },
        ]),
        L);
  function L(t, e) {
    (this._element = t),
      (this._popper = null),
      (this._config = this._getConfig(e)),
      (this._menu = this._getMenuElement()),
      (this._inNavbar = this._detectNavbar()),
      this._addEventListeners();
  }
  d
    .default(document)
    .on(
      "keydown.bs.dropdown.data-api",
      '[data-toggle="dropdown"]',
      R._dataApiKeydownHandler,
    )
    .on(
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      R._dataApiKeydownHandler,
    )
    .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", R._clearMenus)
    .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        R._jQueryInterface.call(d.default(this), "toggle");
    })
    .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
      t.stopPropagation();
    }),
    (d.default.fn[I] = R._jQueryInterface),
    (d.default.fn[I].Constructor = R),
    (d.default.fn[I].noConflict = function () {
      return (d.default.fn[I] = j), R._jQueryInterface;
    });
  var q = d.default.fn.modal,
    F = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    Q = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    B =
      (((n = H.prototype).toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }),
        (n.show = function (t) {
          var e,
            n = this;
          this._isShown ||
            this._isTransitioning ||
            (d.default(this._element).hasClass("fade") &&
              (this._isTransitioning = !0),
              (e = d.default.Event("show.bs.modal", { relatedTarget: t })),
              d.default(this._element).trigger(e),
              this._isShown ||
              e.isDefaultPrevented() ||
              ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                d
                  .default(this._element)
                  .on(
                    "click.dismiss.bs.modal",
                    '[data-dismiss="modal"]',
                    function (t) {
                      return n.hide(t);
                    },
                  ),
                d
                  .default(this._dialog)
                  .on("mousedown.dismiss.bs.modal", function () {
                    d.default(n._element).one(
                      "mouseup.dismiss.bs.modal",
                      function (t) {
                        d.default(t.target).is(n._element) &&
                          (n._ignoreBackdropClick = !0);
                      },
                    );
                  }),
                this._showBackdrop(function () {
                  return n._showElement(t);
                })));
        }),
        (n.hide = function (t) {
          var e = this;
          t && t.preventDefault(),
            this._isShown &&
            !this._isTransitioning &&
            ((t = d.default.Event("hide.bs.modal")),
              d.default(this._element).trigger(t),
              this._isShown &&
              !t.isDefaultPrevented() &&
              ((this._isShown = !1),
                (t = d.default(this._element).hasClass("fade")) &&
                (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                d.default(document).off("focusin.bs.modal"),
                d.default(this._element).removeClass("show"),
                d.default(this._element).off("click.dismiss.bs.modal"),
                d.default(this._dialog).off("mousedown.dismiss.bs.modal"),
                t
                  ? ((t = c.getTransitionDurationFromElement(this._element)),
                    d
                      .default(this._element)
                      .one(c.TRANSITION_END, function (t) {
                        return e._hideModal(t);
                      })
                      .emulateTransitionEnd(t))
                  : this._hideModal()));
        }),
        (n.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return d.default(t).off(".bs.modal");
          }),
            d.default(document).off("focusin.bs.modal"),
            d.default.removeData(this._element, "bs.modal"),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (n.handleUpdate = function () {
          this._adjustDialog();
        }),
        (n._getConfig = function (t) {
          return (t = l({}, F, t)), c.typeCheckConfig("modal", t, Q), t;
        }),
        (n._triggerBackdropTransition = function () {
          var t,
            e,
            n,
            i = this;
          "static" === this._config.backdrop
            ? ((t = d.default.Event("hidePrevented.bs.modal")),
              d.default(this._element).trigger(t),
              t.isDefaultPrevented() ||
              ((e =
                this._element.scrollHeight >
                document.documentElement.clientHeight) ||
                (this._element.style.overflowY = "hidden"),
                this._element.classList.add("modal-static"),
                (n = c.getTransitionDurationFromElement(this._dialog)),
                d.default(this._element).off(c.TRANSITION_END),
                d
                  .default(this._element)
                  .one(c.TRANSITION_END, function () {
                    i._element.classList.remove("modal-static"),
                      e ||
                      d
                        .default(i._element)
                        .one(c.TRANSITION_END, function () {
                          i._element.style.overflowY = "";
                        })
                        .emulateTransitionEnd(i._element, n);
                  })
                  .emulateTransitionEnd(n),
                this._element.focus()))
            : this.hide();
        }),
        (n._showElement = function (t) {
          var e = this,
            n = d.default(this._element).hasClass("fade"),
            i = this._dialog ? this._dialog.querySelector(".modal-body") : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = "block"),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            d.default(this._dialog).hasClass("modal-dialog-scrollable") && i
              ? (i.scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && c.reflow(this._element),
            d.default(this._element).addClass("show"),
            this._config.focus && this._enforceFocus();
          var o = d.default.Event("shown.bs.modal", { relatedTarget: t }),
            t = function () {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                d.default(e._element).trigger(o);
            };
          n
            ? ((n = c.getTransitionDurationFromElement(this._dialog)),
              d
                .default(this._dialog)
                .one(c.TRANSITION_END, t)
                .emulateTransitionEnd(n))
            : t();
        }),
        (n._enforceFocus = function () {
          var e = this;
          d.default(document)
            .off("focusin.bs.modal")
            .on("focusin.bs.modal", function (t) {
              document !== t.target &&
                e._element !== t.target &&
                0 === d.default(e._element).has(t.target).length &&
                e._element.focus();
            });
        }),
        (n._setEscapeEvent = function () {
          var e = this;
          this._isShown
            ? d
              .default(this._element)
              .on("keydown.dismiss.bs.modal", function (t) {
                e._config.keyboard && 27 === t.which
                  ? (t.preventDefault(), e.hide())
                  : e._config.keyboard ||
                  27 !== t.which ||
                  e._triggerBackdropTransition();
              })
            : this._isShown ||
            d.default(this._element).off("keydown.dismiss.bs.modal");
        }),
        (n._setResizeEvent = function () {
          var e = this;
          this._isShown
            ? d.default(window).on("resize.bs.modal", function (t) {
              return e.handleUpdate(t);
            })
            : d.default(window).off("resize.bs.modal");
        }),
        (n._hideModal = function () {
          var t = this;
          (this._element.style.display = "none"),
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              d.default(document.body).removeClass("modal-open"),
                t._resetAdjustments(),
                t._resetScrollbar(),
                d.default(t._element).trigger("hidden.bs.modal");
            });
        }),
        (n._removeBackdrop = function () {
          this._backdrop &&
            (d.default(this._backdrop).remove(), (this._backdrop = null));
        }),
        (n._showBackdrop = function (t) {
          var e,
            n = this,
            i = d.default(this._element).hasClass("fade") ? "fade" : "";
          this._isShown && this._config.backdrop
            ? ((this._backdrop = document.createElement("div")),
              (this._backdrop.className = "modal-backdrop"),
              i && this._backdrop.classList.add(i),
              d.default(this._backdrop).appendTo(document.body),
              d.default(this._element).on("click.dismiss.bs.modal", function (t) {
                n._ignoreBackdropClick
                  ? (n._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                  n._triggerBackdropTransition();
              }),
              i && c.reflow(this._backdrop),
              d.default(this._backdrop).addClass("show"),
              t &&
              (i
                ? ((e = c.getTransitionDurationFromElement(this._backdrop)),
                  d
                    .default(this._backdrop)
                    .one(c.TRANSITION_END, t)
                    .emulateTransitionEnd(e))
                : t()))
            : !this._isShown && this._backdrop
              ? (d.default(this._backdrop).removeClass("show"),
                (i = function () {
                  n._removeBackdrop(), t && t();
                }),
                d.default(this._element).hasClass("fade")
                  ? ((e = c.getTransitionDurationFromElement(this._backdrop)),
                    d
                      .default(this._backdrop)
                      .one(c.TRANSITION_END, i)
                      .emulateTransitionEnd(e))
                  : i())
              : t && t();
        }),
        (n._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing &&
            !t &&
            (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (n._resetAdjustments = function () {
          (this._element.style.paddingLeft = ""),
            (this._element.style.paddingRight = "");
        }),
        (n._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(t.left + t.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (n._setScrollbar = function () {
          var t,
            e,
            o = this;
          this._isBodyOverflowing &&
            ((t = [].slice.call(
              document.querySelectorAll(
                ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
              ),
            )),
              (e = [].slice.call(document.querySelectorAll(".sticky-top"))),
              d.default(t).each(function (t, e) {
                var n = e.style.paddingRight,
                  i = d.default(e).css("padding-right");
                d.default(e)
                  .data("padding-right", n)
                  .css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
              }),
              d.default(e).each(function (t, e) {
                var n = e.style.marginRight,
                  i = d.default(e).css("margin-right");
                d.default(e)
                  .data("margin-right", n)
                  .css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
              }),
              (t = document.body.style.paddingRight),
              (e = d.default(document.body).css("padding-right")),
              d
                .default(document.body)
                .data("padding-right", t)
                .css("padding-right", parseFloat(e) + this._scrollbarWidth + "px")),
            d.default(document.body).addClass("modal-open");
        }),
        (n._resetScrollbar = function () {
          var t = [].slice.call(
            document.querySelectorAll(
              ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            ),
          );
          d.default(t).each(function (t, e) {
            var n = d.default(e).data("padding-right");
            d.default(e).removeData("padding-right"),
              (e.style.paddingRight = n || "");
          });
          t = [].slice.call(document.querySelectorAll(".sticky-top"));
          d.default(t).each(function (t, e) {
            var n = d.default(e).data("margin-right");
            void 0 !== n &&
              d.default(e).css("margin-right", n).removeData("margin-right");
          });
          t = d.default(document.body).data("padding-right");
          d.default(document.body).removeData("padding-right"),
            (document.body.style.paddingRight = t || "");
        }),
        (n._getScrollbarWidth = function () {
          var t = document.createElement("div");
          (t.className = "modal-scrollbar-measure"), document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (H._jQueryInterface = function (n, i) {
          return this.each(function () {
            var t = d.default(this).data("bs.modal"),
              e = l(
                {},
                F,
                d.default(this).data(),
                "object" == typeof n && n ? n : {},
              );
            if (
              (t || ((t = new H(this, e)), d.default(this).data("bs.modal", t)),
                "string" == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n](i);
            } else e.show && t.show(i);
          });
        }),
        a(H, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return F;
            },
          },
        ]),
        H);
  function H(t, e) {
    (this._config = this._getConfig(e)),
      (this._element = t),
      (this._dialog = t.querySelector(".modal-dialog")),
      (this._backdrop = null),
      (this._isShown = !1),
      (this._isBodyOverflowing = !1),
      (this._ignoreBackdropClick = !1),
      (this._isTransitioning = !1),
      (this._scrollbarWidth = 0);
  }
  d
    .default(document)
    .on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
      var e,
        n = this,
        i = c.getSelectorFromElement(this);
      i && (e = document.querySelector(i));
      i = d.default(e).data("bs.modal")
        ? "toggle"
        : l({}, d.default(e).data(), d.default(this).data());
      ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
      var o = d.default(e).one("show.bs.modal", function (t) {
        t.isDefaultPrevented() ||
          o.one("hidden.bs.modal", function () {
            d.default(n).is(":visible") && n.focus();
          });
      });
      B._jQueryInterface.call(d.default(e), i, this);
    }),
    (d.default.fn.modal = B._jQueryInterface),
    (d.default.fn.modal.Constructor = B),
    (d.default.fn.modal.noConflict = function () {
      return (d.default.fn.modal = q), B._jQueryInterface;
    });
  var U = [
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href",
  ],
    M = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
    W =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function V(t, o, e) {
    if (0 === t.length) return t;
    if (e && "function" == typeof e) return e(t);
    for (
      var t = new window.DOMParser().parseFromString(t, "text/html"),
      s = Object.keys(o),
      a = [].slice.call(t.body.querySelectorAll("*")),
      n = 0,
      i = a.length;
      n < i;
      n++
    )
      !(function (t) {
        var e = a[t],
          n = e.nodeName.toLowerCase();
        if (-1 === s.indexOf(e.nodeName.toLowerCase()))
          return e.parentNode.removeChild(e);
        var t = [].slice.call(e.attributes),
          i = [].concat(o["*"] || [], o[n] || []);
        t.forEach(function (t) {
          !(function (t, e) {
            var n = t.nodeName.toLowerCase();
            if (-1 !== e.indexOf(n))
              return (
                -1 === U.indexOf(n) ||
                Boolean(t.nodeValue.match(M) || t.nodeValue.match(W))
              );
            for (
              var i = e.filter(function (t) {
                return t instanceof RegExp;
              }),
              o = 0,
              s = i.length;
              o < s;
              o++
            )
              if (n.match(i[o])) return 1;
          })(t, i) && e.removeAttribute(t.nodeName);
        });
      })(n);
    return t.body.innerHTML;
  }
  var z = "tooltip",
    K = d.default.fn[z],
    X = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    Y = ["sanitize", "whiteList", "sanitizeFn"],
    $ = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    J = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    G = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    Z = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    tt =
      (((n = et.prototype).enable = function () {
        this._isEnabled = !0;
      }),
        (n.disable = function () {
          this._isEnabled = !1;
        }),
        (n.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (n.toggle = function (t) {
          var e, n;
          this._isEnabled &&
            (t
              ? ((e = this.constructor.DATA_KEY),
                (n = d.default(t.currentTarget).data(e)) ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig(),
                )),
                  d.default(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n))
              : d.default(this.getTipElement()).hasClass("show")
                ? this._leave(null, this)
                : this._enter(null, this));
        }),
        (n.dispose = function () {
          clearTimeout(this._timeout),
            d.default.removeData(this.element, this.constructor.DATA_KEY),
            d.default(this.element).off(this.constructor.EVENT_KEY),
            d
              .default(this.element)
              .closest(".modal")
              .off("hide.bs.modal", this._hideModalHandler),
            this.tip && d.default(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (n.show = function () {
          var e = this;
          if ("none" === d.default(this.element).css("display"))
            throw new Error("Please use show on visible elements");
          var t,
            n,
            i = d.default.Event(this.constructor.Event.SHOW);
          this.isWithContent() &&
            this._isEnabled &&
            (d.default(this.element).trigger(i),
              (n = c.findShadowRoot(this.element)),
              (t = d.default.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element,
              )),
              !i.isDefaultPrevented() &&
              t &&
              ((n = this.getTipElement()),
                (i = c.getUID(this.constructor.NAME)),
                n.setAttribute("id", i),
                this.element.setAttribute("aria-describedby", i),
                this.setContent(),
                this.config.animation && d.default(n).addClass("fade"),
                (t =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, n, this.element)
                    : this.config.placement),
                (i = this._getAttachment(t)),
                this.addAttachmentClass(i),
                (t = this._getContainer()),
                d.default(n).data(this.constructor.DATA_KEY, this),
                d.default.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip,
                ) || d.default(n).appendTo(t),
                d.default(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new o.default(
                  this.element,
                  n,
                  this._getPopperConfig(i),
                )),
                d.default(n).addClass("show"),
                "ontouchstart" in document.documentElement &&
                d
                  .default(document.body)
                  .children()
                  .on("mouseover", null, d.default.noop),
                (i = function () {
                  e.config.animation && e._fixTransition();
                  var t = e._hoverState;
                  (e._hoverState = null),
                    d.default(e.element).trigger(e.constructor.Event.SHOWN),
                    "out" === t && e._leave(null, e);
                }),
                d.default(this.tip).hasClass("fade")
                  ? ((n = c.getTransitionDurationFromElement(this.tip)),
                    d
                      .default(this.tip)
                      .one(c.TRANSITION_END, i)
                      .emulateTransitionEnd(n))
                  : i()));
        }),
        (n.hide = function (t) {
          function e() {
            "show" !== n._hoverState &&
              i.parentNode &&
              i.parentNode.removeChild(i),
              n._cleanTipClass(),
              n.element.removeAttribute("aria-describedby"),
              d.default(n.element).trigger(n.constructor.Event.HIDDEN),
              null !== n._popper && n._popper.destroy(),
              t && t();
          }
          var n = this,
            i = this.getTipElement(),
            o = d.default.Event(this.constructor.Event.HIDE);
          d.default(this.element).trigger(o),
            o.isDefaultPrevented() ||
            (d.default(i).removeClass("show"),
              "ontouchstart" in document.documentElement &&
              d
                .default(document.body)
                .children()
                .off("mouseover", null, d.default.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              d.default(this.tip).hasClass("fade")
                ? ((o = c.getTransitionDurationFromElement(i)),
                  d.default(i).one(c.TRANSITION_END, e).emulateTransitionEnd(o))
                : e(),
              (this._hoverState = ""));
        }),
        (n.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (n.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (n.addAttachmentClass = function (t) {
          d.default(this.getTipElement()).addClass("bs-tooltip-" + t);
        }),
        (n.getTipElement = function () {
          return (
            (this.tip = this.tip || d.default(this.config.template)[0]), this.tip
          );
        }),
        (n.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            d.default(t.querySelectorAll(".tooltip-inner")),
            this.getTitle(),
          ),
            d.default(t).removeClass("fade show");
        }),
        (n.setElementContent = function (t, e) {
          "object" != typeof e || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                (e = V(e, this.config.whiteList, this.config.sanitizeFn)),
                t.html(e))
              : t.text(e)
            : this.config.html
              ? d.default(e).parent().is(t) || t.empty().append(e)
              : t.text(d.default(e).text());
        }),
        (n.getTitle = function () {
          return (
            this.element.getAttribute("data-original-title") ||
            ("function" == typeof this.config.title
              ? this.config.title.call(this.element)
              : this.config.title)
          );
        }),
        (n._getPopperConfig = function (t) {
          var e = this;
          return l(
            {},
            {
              placement: t,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: ".arrow" },
                preventOverflow: { boundariesElement: this.config.boundary },
              },
              onCreate: function (t) {
                t.originalPlacement !== t.placement &&
                  e._handlePopperPlacementChange(t);
              },
              onUpdate: function (t) {
                return e._handlePopperPlacementChange(t);
              },
            },
            this.config.popperConfig,
          );
        }),
        (n._getOffset = function () {
          var e = this,
            t = {};
          return (
            "function" == typeof this.config.offset
              ? (t.fn = function (t) {
                return (
                  (t.offsets = l(
                    {},
                    t.offsets,
                    e.config.offset(t.offsets, e.element) || {},
                  )),
                  t
                );
              })
              : (t.offset = this.config.offset),
            t
          );
        }),
        (n._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : c.isElement(this.config.container)
              ? d.default(this.config.container)
              : d.default(document).find(this.config.container);
        }),
        (n._getAttachment = function (t) {
          return J[t.toUpperCase()];
        }),
        (n._setListeners = function () {
          var n = this;
          this.config.trigger.split(" ").forEach(function (t) {
            var e;
            "click" === t
              ? d
                .default(n.element)
                .on(n.constructor.Event.CLICK, n.config.selector, function (t) {
                  return n.toggle(t);
                })
              : "manual" !== t &&
              ((e =
                "hover" === t
                  ? n.constructor.Event.MOUSEENTER
                  : n.constructor.Event.FOCUSIN),
                (t =
                  "hover" === t
                    ? n.constructor.Event.MOUSELEAVE
                    : n.constructor.Event.FOCUSOUT),
                d
                  .default(n.element)
                  .on(e, n.config.selector, function (t) {
                    return n._enter(t);
                  })
                  .on(t, n.config.selector, function (t) {
                    return n._leave(t);
                  }));
          }),
            (this._hideModalHandler = function () {
              n.element && n.hide();
            }),
            d
              .default(this.element)
              .closest(".modal")
              .on("hide.bs.modal", this._hideModalHandler),
            this.config.selector
              ? (this.config = l({}, this.config, {
                trigger: "manual",
                selector: "",
              }))
              : this._fixTitle();
        }),
        (n._fixTitle = function () {
          var t = typeof this.element.getAttribute("data-original-title");
          (!this.element.getAttribute("title") && "string" == t) ||
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || "",
            ),
              this.element.setAttribute("title", ""));
        }),
        (n._enter = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || d.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig(),
            )),
              d.default(t.currentTarget).data(n, e)),
            t &&
            (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            d.default(e.getTipElement()).hasClass("show") ||
              "show" === e._hoverState
              ? (e._hoverState = "show")
              : (clearTimeout(e._timeout),
                (e._hoverState = "show"),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function () {
                    "show" === e._hoverState && e.show();
                  }, e.config.delay.show))
                  : e.show());
        }),
        (n._leave = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || d.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig(),
            )),
              d.default(t.currentTarget).data(n, e)),
            t &&
            (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1),
            e._isWithActiveTrigger() ||
            (clearTimeout(e._timeout),
              (e._hoverState = "out"),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function () {
                  "out" === e._hoverState && e.hide();
                }, e.config.delay.hide))
                : e.hide());
        }),
        (n._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (n._getConfig = function (t) {
          var e = d.default(this.element).data();
          return (
            Object.keys(e).forEach(function (t) {
              -1 !== Y.indexOf(t) && delete e[t];
            }),
            "number" ==
            typeof (t = l(
              {},
              this.constructor.Default,
              e,
              "object" == typeof t && t ? t : {},
            )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            c.typeCheckConfig(z, t, this.constructor.DefaultType),
            t.sanitize && (t.template = V(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (n._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (n._cleanTipClass = function () {
          var t = d.default(this.getTipElement()),
            e = t.attr("class").match(X);
          null !== e && e.length && t.removeClass(e.join(""));
        }),
        (n._handlePopperPlacementChange = function (t) {
          (this.tip = t.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (n._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute("x-placement") &&
            (d.default(t).removeClass("fade"),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = e));
        }),
        (et._jQueryInterface = function (i) {
          return this.each(function () {
            var t = d.default(this),
              e = t.data("bs.tooltip"),
              n = "object" == typeof i && i;
            if (
              (e || !/dispose|hide/.test(i)) &&
              (e || ((e = new et(this, n)), t.data("bs.tooltip", e)),
                "string" == typeof i)
            ) {
              if (void 0 === e[i])
                throw new TypeError('No method named "' + i + '"');
              e[i]();
            }
          });
        }),
        a(et, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return G;
            },
          },
          {
            key: "NAME",
            get: function () {
              return z;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip";
            },
          },
          {
            key: "Event",
            get: function () {
              return Z;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.tooltip";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return $;
            },
          },
        ]),
        et);
  function et(t, e) {
    if (void 0 === o.default)
      throw new TypeError(
        "Bootstrap's tooltips require Popper.js (https://popper.js.org/)",
      );
    (this._isEnabled = !0),
      (this._timeout = 0),
      (this._hoverState = ""),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this.element = t),
      (this.config = this._getConfig(e)),
      (this.tip = null),
      this._setListeners();
  }
  (d.default.fn[z] = tt._jQueryInterface),
    (d.default.fn[z].Constructor = tt),
    (d.default.fn[z].noConflict = function () {
      return (d.default.fn[z] = K), tt._jQueryInterface;
    });
  var nt = "popover",
    it = d.default.fn[nt],
    ot = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    st = l({}, tt.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    at = l({}, tt.DefaultType, { content: "(string|element|function)" }),
    lt = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    },
    rt = (function (t) {
      var e;
      function i() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        ((e.prototype.constructor = e).__proto__ = n);
      var n = i.prototype;
      return (
        (n.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (n.addAttachmentClass = function (t) {
          d.default(this.getTipElement()).addClass("bs-popover-" + t);
        }),
        (n.getTipElement = function () {
          return (
            (this.tip = this.tip || d.default(this.config.template)[0]),
            this.tip
          );
        }),
        (n.setContent = function () {
          var t = d.default(this.getTipElement());
          this.setElementContent(t.find(".popover-header"), this.getTitle());
          var e = this._getContent();
          "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(".popover-body"), e),
            t.removeClass("fade show");
        }),
        (n._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (n._cleanTipClass = function () {
          var t = d.default(this.getTipElement()),
            e = t.attr("class").match(ot);
          null !== e && 0 < e.length && t.removeClass(e.join(""));
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = d.default(this).data("bs.popover"),
              e = "object" == typeof n ? n : null;
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t ||
                ((t = new i(this, e)), d.default(this).data("bs.popover", t)),
                "string" == typeof n)
            ) {
              if (void 0 === t[n])
                throw new TypeError('No method named "' + n + '"');
              t[n]();
            }
          });
        }),
        a(i, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return st;
            },
          },
          {
            key: "NAME",
            get: function () {
              return nt;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.popover";
            },
          },
          {
            key: "Event",
            get: function () {
              return lt;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.popover";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return at;
            },
          },
        ]),
        i
      );
    })(tt);
  (d.default.fn[nt] = rt._jQueryInterface),
    (d.default.fn[nt].Constructor = rt),
    (d.default.fn[nt].noConflict = function () {
      return (d.default.fn[nt] = it), rt._jQueryInterface;
    });
  var ut = "scrollspy",
    dt = d.default.fn[ut],
    ct = { offset: 10, method: "auto", target: "" },
    ft = { offset: "number", method: "string", target: "(string|element)" },
    ht =
      (((n = gt.prototype).refresh = function () {
        var e = this,
          t =
            this._scrollElement === this._scrollElement.window
              ? "offset"
              : "position",
          i = "auto" === this._config.method ? t : this._config.method,
          o = "position" === i ? this._getScrollTop() : 0;
        (this._offsets = []),
          (this._targets = []),
          (this._scrollHeight = this._getScrollHeight()),
          [].slice
            .call(document.querySelectorAll(this._selector))
            .map(function (t) {
              var e,
                n = c.getSelectorFromElement(t);
              if ((e = n ? document.querySelector(n) : e)) {
                t = e.getBoundingClientRect();
                if (t.width || t.height) return [d.default(e)[i]().top + o, n];
              }
              return null;
            })
            .filter(function (t) {
              return t;
            })
            .sort(function (t, e) {
              return t[0] - e[0];
            })
            .forEach(function (t) {
              e._offsets.push(t[0]), e._targets.push(t[1]);
            });
      }),
        (n.dispose = function () {
          d.default.removeData(this._element, "bs.scrollspy"),
            d.default(this._scrollElement).off(".bs.scrollspy"),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (n._getConfig = function (t) {
          var e;
          return (
            "string" !=
            typeof (t = l({}, ct, "object" == typeof t && t ? t : {})).target &&
            c.isElement(t.target) &&
            ((e = d.default(t.target).attr("id")) ||
              ((e = c.getUID(ut)), d.default(t.target).attr("id", e)),
              (t.target = "#" + e)),
            c.typeCheckConfig(ut, t, ft),
            t
          );
        }),
        (n._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (n._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
            )
          );
        }),
        (n._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (n._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
            n = this._targets[this._targets.length - 1];
            this._activeTarget !== n && this._activate(n);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              0 < this._offsets[0]
            )
              return (this._activeTarget = null), void this._clear();
            for (var i = this._offsets.length; i--;)
              this._activeTarget !== this._targets[i] &&
                t >= this._offsets[i] &&
                (void 0 === this._offsets[i + 1] || t < this._offsets[i + 1]) &&
                this._activate(this._targets[i]);
          }
        }),
        (n._activate = function (e) {
          (this._activeTarget = e), this._clear();
          var t = this._selector.split(",").map(function (t) {
            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
          }),
            t = d.default([].slice.call(document.querySelectorAll(t.join(","))));
          t.hasClass("dropdown-item")
            ? (t.closest(".dropdown").find(".dropdown-toggle").addClass("active"),
              t.addClass("active"))
            : (t.addClass("active"),
              t
                .parents(".nav, .list-group")
                .prev(".nav-link, .list-group-item")
                .addClass("active"),
              t
                .parents(".nav, .list-group")
                .prev(".nav-item")
                .children(".nav-link")
                .addClass("active")),
            d
              .default(this._scrollElement)
              .trigger("activate.bs.scrollspy", { relatedTarget: e });
        }),
        (n._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains("active");
            })
            .forEach(function (t) {
              return t.classList.remove("active");
            });
        }),
        (gt._jQueryInterface = function (e) {
          return this.each(function () {
            var t = d.default(this).data("bs.scrollspy");
            if (
              (t ||
                ((t = new gt(this, "object" == typeof e && e)),
                  d.default(this).data("bs.scrollspy", t)),
                "string" == typeof e)
            ) {
              if (void 0 === t[e])
                throw new TypeError('No method named "' + e + '"');
              t[e]();
            }
          });
        }),
        a(gt, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "Default",
            get: function () {
              return ct;
            },
          },
        ]),
        gt);
  function gt(t, e) {
    var n = this;
    (this._element = t),
      (this._scrollElement = "BODY" === t.tagName ? window : t),
      (this._config = this._getConfig(e)),
      (this._selector =
        this._config.target +
        " .nav-link," +
        this._config.target +
        " .list-group-item," +
        this._config.target +
        " .dropdown-item"),
      (this._offsets = []),
      (this._targets = []),
      (this._activeTarget = null),
      (this._scrollHeight = 0),
      d.default(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
        return n._process(t);
      }),
      this.refresh(),
      this._process();
  }
  d.default(window).on("load.bs.scrollspy.data-api", function () {
    for (
      var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
      e = t.length;
      e--;

    ) {
      var n = d.default(t[e]);
      ht._jQueryInterface.call(n, n.data());
    }
  }),
    (d.default.fn[ut] = ht._jQueryInterface),
    (d.default.fn[ut].Constructor = ht),
    (d.default.fn[ut].noConflict = function () {
      return (d.default.fn[ut] = dt), ht._jQueryInterface;
    });
  var mt = d.default.fn.tab,
    pt =
      (((n = _t.prototype).show = function () {
        var t,
          e,
          n,
          i,
          o,
          s,
          a = this;
        (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
          d.default(this._element).hasClass("active")) ||
          d.default(this._element).hasClass("disabled") ||
          ((s = d.default(this._element).closest(".nav, .list-group")[0]),
            (e = c.getSelectorFromElement(this._element)),
            s &&
            ((o =
              "UL" === s.nodeName || "OL" === s.nodeName
                ? "> li > .active"
                : ".active"),
              (n = (n = d.default.makeArray(d.default(s).find(o)))[
                n.length - 1
              ])),
            (i = d.default.Event("hide.bs.tab", {
              relatedTarget: this._element,
            })),
            (o = d.default.Event("show.bs.tab", { relatedTarget: n })),
            n && d.default(n).trigger(i),
            d.default(this._element).trigger(o),
            o.isDefaultPrevented() ||
            i.isDefaultPrevented() ||
            (e && (t = document.querySelector(e)),
              this._activate(this._element, s),
              (s = function () {
                var t = d.default.Event("hidden.bs.tab", {
                  relatedTarget: a._element,
                }),
                  e = d.default.Event("shown.bs.tab", { relatedTarget: n });
                d.default(n).trigger(t), d.default(a._element).trigger(e);
              }),
              t ? this._activate(t, t.parentNode, s) : s()));
      }),
        (n.dispose = function () {
          d.default.removeData(this._element, "bs.tab"), (this._element = null);
        }),
        (n._activate = function (t, e, n) {
          var i = this,
            o = (
              !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                ? d.default(e).children(".active")
                : d.default(e).find("> li > .active")
            )[0],
            s = n && o && d.default(o).hasClass("fade"),
            e = function () {
              return i._transitionComplete(t, o, n);
            };
          o && s
            ? ((s = c.getTransitionDurationFromElement(o)),
              d
                .default(o)
                .removeClass("show")
                .one(c.TRANSITION_END, e)
                .emulateTransitionEnd(s))
            : e();
        }),
        (n._transitionComplete = function (t, e, n) {
          var i;
          e &&
            (d.default(e).removeClass("active"),
              (i = d.default(e.parentNode).find("> .dropdown-menu .active")[0]) &&
              d.default(i).removeClass("active"),
              "tab" === e.getAttribute("role") &&
              e.setAttribute("aria-selected", !1)),
            d.default(t).addClass("active"),
            "tab" === t.getAttribute("role") &&
            t.setAttribute("aria-selected", !0),
            c.reflow(t),
            t.classList.contains("fade") && t.classList.add("show"),
            t.parentNode &&
            d.default(t.parentNode).hasClass("dropdown-menu") &&
            ((e = d.default(t).closest(".dropdown")[0]) &&
              ((e = [].slice.call(e.querySelectorAll(".dropdown-toggle"))),
                d.default(e).addClass("active")),
              t.setAttribute("aria-expanded", !0)),
            n && n();
        }),
        (_t._jQueryInterface = function (n) {
          return this.each(function () {
            var t = d.default(this),
              e = t.data("bs.tab");
            if (
              (e || ((e = new _t(this)), t.data("bs.tab", e)),
                "string" == typeof n)
            ) {
              if (void 0 === e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n]();
            }
          });
        }),
        a(_t, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
        ]),
        _t);
  function _t(t) {
    this._element = t;
  }
  d
    .default(document)
    .on(
      "click.bs.tab.data-api",
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      function (t) {
        t.preventDefault(), pt._jQueryInterface.call(d.default(this), "show");
      },
    ),
    (d.default.fn.tab = pt._jQueryInterface),
    (d.default.fn.tab.Constructor = pt),
    (d.default.fn.tab.noConflict = function () {
      return (d.default.fn.tab = mt), pt._jQueryInterface;
    });
  var vt = d.default.fn.toast,
    bt = { animation: "boolean", autohide: "boolean", delay: "number" },
    yt = { animation: !0, autohide: !0, delay: 500 },
    Et =
      (((n = wt.prototype).show = function () {
        var t,
          e = this,
          n = d.default.Event("show.bs.toast");
        d.default(this._element).trigger(n),
          n.isDefaultPrevented() ||
          (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            (t = function () {
              e._element.classList.remove("showing"),
                e._element.classList.add("show"),
                d.default(e._element).trigger("shown.bs.toast"),
                e._config.autohide &&
                (e._timeout = setTimeout(function () {
                  e.hide();
                }, e._config.delay));
            }),
            this._element.classList.remove("hide"),
            c.reflow(this._element),
            this._element.classList.add("showing"),
            this._config.animation
              ? ((n = c.getTransitionDurationFromElement(this._element)),
                d
                  .default(this._element)
                  .one(c.TRANSITION_END, t)
                  .emulateTransitionEnd(n))
              : t());
      }),
        (n.hide = function () {
          var t;
          this._element.classList.contains("show") &&
            ((t = d.default.Event("hide.bs.toast")),
              d.default(this._element).trigger(t),
              t.isDefaultPrevented() || this._close());
        }),
        (n.dispose = function () {
          this._clearTimeout(),
            this._element.classList.contains("show") &&
            this._element.classList.remove("show"),
            d.default(this._element).off("click.dismiss.bs.toast"),
            d.default.removeData(this._element, "bs.toast"),
            (this._element = null),
            (this._config = null);
        }),
        (n._getConfig = function (t) {
          return (
            (t = l(
              {},
              yt,
              d.default(this._element).data(),
              "object" == typeof t && t ? t : {},
            )),
            c.typeCheckConfig("toast", t, this.constructor.DefaultType),
            t
          );
        }),
        (n._setListeners = function () {
          var t = this;
          d.default(this._element).on(
            "click.dismiss.bs.toast",
            '[data-dismiss="toast"]',
            function () {
              return t.hide();
            },
          );
        }),
        (n._close = function () {
          function t() {
            n._element.classList.add("hide"),
              d.default(n._element).trigger("hidden.bs.toast");
          }
          var e,
            n = this;
          this._element.classList.remove("show"),
            this._config.animation
              ? ((e = c.getTransitionDurationFromElement(this._element)),
                d
                  .default(this._element)
                  .one(c.TRANSITION_END, t)
                  .emulateTransitionEnd(e))
              : t();
        }),
        (n._clearTimeout = function () {
          clearTimeout(this._timeout), (this._timeout = null);
        }),
        (wt._jQueryInterface = function (n) {
          return this.each(function () {
            var t = d.default(this),
              e = t.data("bs.toast");
            if (
              (e ||
                ((e = new wt(this, "object" == typeof n && n)),
                  t.data("bs.toast", e)),
                "string" == typeof n)
            ) {
              if (void 0 === e[n])
                throw new TypeError('No method named "' + n + '"');
              e[n](this);
            }
          });
        }),
        a(wt, null, [
          {
            key: "VERSION",
            get: function () {
              return "4.5.3";
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return bt;
            },
          },
          {
            key: "Default",
            get: function () {
              return yt;
            },
          },
        ]),
        wt);
  function wt(t, e) {
    (this._element = t),
      (this._config = this._getConfig(e)),
      (this._timeout = null),
      this._setListeners();
  }
  (d.default.fn.toast = Et._jQueryInterface),
    (d.default.fn.toast.Constructor = Et),
    (d.default.fn.toast.noConflict = function () {
      return (d.default.fn.toast = vt), Et._jQueryInterface;
    }),
    (t.Alert = f),
    (t.Button = m),
    (t.Carousel = w),
    (t.Collapse = k),
    (t.Dropdown = R),
    (t.Modal = B),
    (t.Popover = rt),
    (t.Scrollspy = ht),
    (t.Tab = pt),
    (t.Toast = Et),
    (t.Tooltip = tt),
    (t.Util = c),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
