function hexToRgb(e) {
  e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, a, i) {
    return t + t + a + a + i + i;
  });
  e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return e
    ? { r: parseInt(e[1], 16), g: parseInt(e[2], 16), b: parseInt(e[3], 16) }
    : null;
}
function clamp(e, t, a) {
  return Math.min(Math.max(e, t), a);
}
function isInArray(e, t) {
  return -1 < t.indexOf(e);
}
var pJS = function (e, t) {
  var a = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: { el: a, w: a.offsetWidth, h: a.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
      },
      array: [],
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "push" },
        resize: !0,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
      mouse: {},
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {},
  };
  var p = this.pJS;
  t && Object.deepExtend(p, t),
    (p.tmp.obj = {
      size_value: p.particles.size.value,
      size_anim_speed: p.particles.size.anim.speed,
      move_speed: p.particles.move.speed,
      line_linked_distance: p.particles.line_linked.distance,
      line_linked_width: p.particles.line_linked.width,
      mode_grab_distance: p.interactivity.modes.grab.distance,
      mode_bubble_distance: p.interactivity.modes.bubble.distance,
      mode_bubble_size: p.interactivity.modes.bubble.size,
      mode_repulse_distance: p.interactivity.modes.repulse.distance,
    }),
    (p.fn.retinaInit = function () {
      p.retina_detect && 1 < window.devicePixelRatio
        ? ((p.canvas.pxratio = window.devicePixelRatio), (p.tmp.retina = !0))
        : ((p.canvas.pxratio = 1), (p.tmp.retina = !1)),
        (p.canvas.w = p.canvas.el.offsetWidth * p.canvas.pxratio),
        (p.canvas.h = p.canvas.el.offsetHeight * p.canvas.pxratio),
        (p.particles.size.value = p.tmp.obj.size_value * p.canvas.pxratio),
        (p.particles.size.anim.speed =
          p.tmp.obj.size_anim_speed * p.canvas.pxratio),
        (p.particles.move.speed = p.tmp.obj.move_speed * p.canvas.pxratio),
        (p.particles.line_linked.distance =
          p.tmp.obj.line_linked_distance * p.canvas.pxratio),
        (p.interactivity.modes.grab.distance =
          p.tmp.obj.mode_grab_distance * p.canvas.pxratio),
        (p.interactivity.modes.bubble.distance =
          p.tmp.obj.mode_bubble_distance * p.canvas.pxratio),
        (p.particles.line_linked.width =
          p.tmp.obj.line_linked_width * p.canvas.pxratio),
        (p.interactivity.modes.bubble.size =
          p.tmp.obj.mode_bubble_size * p.canvas.pxratio),
        (p.interactivity.modes.repulse.distance =
          p.tmp.obj.mode_repulse_distance * p.canvas.pxratio);
    }),
    (p.fn.canvasInit = function () {
      p.canvas.ctx = p.canvas.el.getContext("2d");
    }),
    (p.fn.canvasSize = function () {
      (p.canvas.el.width = p.canvas.w),
        (p.canvas.el.height = p.canvas.h),
        p &&
        p.interactivity.events.resize &&
        window.addEventListener("resize", function () {
          (p.canvas.w = p.canvas.el.offsetWidth),
            (p.canvas.h = p.canvas.el.offsetHeight),
            p.tmp.retina &&
            ((p.canvas.w *= p.canvas.pxratio),
              (p.canvas.h *= p.canvas.pxratio)),
            (p.canvas.el.width = p.canvas.w),
            (p.canvas.el.height = p.canvas.h),
            p.particles.move.enable ||
            (p.fn.particlesEmpty(),
              p.fn.particlesCreate(),
              p.fn.particlesDraw(),
              p.fn.vendors.densityAutoParticles()),
            p.fn.vendors.densityAutoParticles();
        });
    }),
    (p.fn.canvasPaint = function () {
      p.canvas.ctx.fillRect(0, 0, p.canvas.w, p.canvas.h);
    }),
    (p.fn.canvasClear = function () {
      p.canvas.ctx.clearRect(0, 0, p.canvas.w, p.canvas.h);
    }),
    (p.fn.particle = function (e, t, a) {
      (this.radius =
        (p.particles.size.random ? Math.random() : 1) * p.particles.size.value),
        p.particles.size.anim.enable &&
        ((this.size_status = !1),
          (this.vs = p.particles.size.anim.speed / 100),
          p.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        (this.x = a ? a.x : Math.random() * p.canvas.w),
        (this.y = a ? a.y : Math.random() * p.canvas.h),
        this.x > p.canvas.w - 2 * this.radius
          ? (this.x = this.x - this.radius)
          : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > p.canvas.h - 2 * this.radius
          ? (this.y = this.y - this.radius)
          : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        p.particles.move.bounce && p.fn.vendors.checkOverlap(this, a),
        (this.color = {}),
        "object" == typeof e.value
          ? e.value instanceof Array
            ? ((n =
              e.value[
              Math.floor(Math.random() * p.particles.color.value.length)
              ]),
              (this.color.rgb = hexToRgb(n)))
            : (null != e.value.r &&
              null != e.value.g &&
              null != e.value.b &&
              (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }),
              null != e.value.h &&
              null != e.value.s &&
              null != e.value.l &&
              (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l }))
          : "random" == e.value
            ? (this.color.rgb = {
              r: Math.floor(256 * Math.random()) + 0,
              g: Math.floor(256 * Math.random()) + 0,
              b: Math.floor(256 * Math.random()) + 0,
            })
            : "string" == typeof e.value &&
            ((this.color = e), (this.color.rgb = hexToRgb(this.color.value))),
        (this.opacity =
          (p.particles.opacity.random ? Math.random() : 1) *
          p.particles.opacity.value),
        p.particles.opacity.anim.enable &&
        ((this.opacity_status = !1),
          (this.vo = p.particles.opacity.anim.speed / 100),
          p.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var i = {};
      switch (p.particles.move.direction) {
        case "top":
          i = { x: 0, y: -1 };
          break;
        case "top-right":
          i = { x: 0.5, y: -0.5 };
          break;
        case "right":
          i = { x: 1, y: -0 };
          break;
        case "bottom-right":
          i = { x: 0.5, y: 0.5 };
          break;
        case "bottom":
          i = { x: 0, y: 1 };
          break;
        case "bottom-left":
          i = { x: -0.5, y: 1 };
          break;
        case "left":
          i = { x: -1, y: 0 };
          break;
        case "top-left":
          i = { x: -0.5, y: -0.5 };
          break;
        default:
          i = { x: 0, y: 0 };
      }
      p.particles.move.straight
        ? ((this.vx = i.x),
          (this.vy = i.y),
          p.particles.move.random &&
          ((this.vx = this.vx * Math.random()),
            (this.vy = this.vy * Math.random())))
        : ((this.vx = i.x + Math.random() - 0.5),
          (this.vy = i.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var n = p.particles.shape.type;
      "object" == typeof n
        ? n instanceof Array &&
        ((e = n[Math.floor(Math.random() * n.length)]), (this.shape = e))
        : (this.shape = n),
        "image" == this.shape &&
        ((n = p.particles.shape),
          (this.img = {
            src: n.image.src,
            ratio: n.image.width / n.image.height,
          }),
          this.img.ratio || (this.img.ratio = 1),
          "svg" == p.tmp.img_type &&
          null != p.tmp.source_svg &&
          (p.fn.vendors.createSvgImg(this),
            p.tmp.pushing && (this.img.loaded = !1)));
    }),
    (p.fn.particle.prototype.draw = function () {
      var e,
        t,
        a,
        i = this;
      switch (
      ((e = null != i.radius_bubble ? i.radius_bubble : i.radius),
        (t = null != i.opacity_bubble ? i.opacity_bubble : i.opacity),
        (t = i.color.rgb
          ? "rgba(" +
          i.color.rgb.r +
          "," +
          i.color.rgb.g +
          "," +
          i.color.rgb.b +
          "," +
          t +
          ")"
          : "hsla(" +
          i.color.hsl.h +
          "," +
          i.color.hsl.s +
          "%," +
          i.color.hsl.l +
          "%," +
          t +
          ")"),
        (p.canvas.ctx.fillStyle = t),
        p.canvas.ctx.beginPath(),
        i.shape)
      ) {
        case "circle":
          p.canvas.ctx.arc(i.x, i.y, e, 0, 2 * Math.PI, !1);
          break;
        case "edge":
          p.canvas.ctx.rect(i.x - e, i.y - e, 2 * e, 2 * e);
          break;
        case "triangle":
          p.fn.vendors.drawShape(
            p.canvas.ctx,
            i.x - e,
            i.y + e / 1.66,
            2 * e,
            3,
            2,
          );
          break;
        case "polygon":
          p.fn.vendors.drawShape(
            p.canvas.ctx,
            i.x - e / (p.particles.shape.polygon.nb_sides / 3.5),
            i.y - e / 0.76,
            (2.66 * e) / (p.particles.shape.polygon.nb_sides / 3),
            p.particles.shape.polygon.nb_sides,
            1,
          );
          break;
        case "star":
          p.fn.vendors.drawShape(
            p.canvas.ctx,
            i.x - (2 * e) / (p.particles.shape.polygon.nb_sides / 4),
            i.y - e / 1.52,
            (2 * e * 2.66) / (p.particles.shape.polygon.nb_sides / 3),
            p.particles.shape.polygon.nb_sides,
            2,
          );
          break;
        case "image":
          (a = "svg" == p.tmp.img_type ? i.img.obj : p.tmp.img_obj) &&
            p.canvas.ctx.drawImage(
              a,
              i.x - e,
              i.y - e,
              2 * e,
              (2 * e) / i.img.ratio,
            );
      }
      p.canvas.ctx.closePath(),
        0 < p.particles.shape.stroke.width &&
        ((p.canvas.ctx.strokeStyle = p.particles.shape.stroke.color),
          (p.canvas.ctx.lineWidth = p.particles.shape.stroke.width),
          p.canvas.ctx.stroke()),
        p.canvas.ctx.fill();
    }),
    (p.fn.particlesCreate = function () {
      for (var e = 0; e < p.particles.number.value; e++)
        p.particles.array.push(
          new p.fn.particle(p.particles.color, p.particles.opacity.value),
        );
    }),
    (p.fn.particlesUpdate = function () {
      for (var e = 0; e < p.particles.array.length; e++) {
        var t,
          a = p.particles.array[e];
        if (
          (p.particles.move.enable &&
            ((t = p.particles.move.speed / 2),
              (a.x += a.vx * t),
              (a.y += a.vy * t)),
            p.particles.opacity.anim.enable &&
            (1 == a.opacity_status
              ? (a.opacity >= p.particles.opacity.value &&
                (a.opacity_status = !1),
                (a.opacity += a.vo))
              : (a.opacity <= p.particles.opacity.anim.opacity_min &&
                (a.opacity_status = !0),
                (a.opacity -= a.vo)),
              a.opacity < 0 && (a.opacity = 0)),
            p.particles.size.anim.enable &&
            (1 == a.size_status
              ? (a.radius >= p.particles.size.value && (a.size_status = !1),
                (a.radius += a.vs))
              : (a.radius <= p.particles.size.anim.size_min &&
                (a.size_status = !0),
                (a.radius -= a.vs)),
              a.radius < 0 && (a.radius = 0)),
            (t =
              "bounce" == p.particles.move.out_mode
                ? {
                  x_left: a.radius,
                  x_right: p.canvas.w,
                  y_top: a.radius,
                  y_bottom: p.canvas.h,
                }
                : {
                  x_left: -a.radius,
                  x_right: p.canvas.w + a.radius,
                  y_top: -a.radius,
                  y_bottom: p.canvas.h + a.radius,
                }),
            "bounce" ===
            (a.x - a.radius > p.canvas.w
              ? ((a.x = t.x_left), (a.y = Math.random() * p.canvas.h))
              : a.x + a.radius < 0 &&
              ((a.x = t.x_right), (a.y = Math.random() * p.canvas.h)),
              a.y - a.radius > p.canvas.h
                ? ((a.y = t.y_top), (a.x = Math.random() * p.canvas.w))
                : a.y + a.radius < 0 &&
                ((a.y = t.y_bottom), (a.x = Math.random() * p.canvas.w)),
              p.particles.move.out_mode) &&
            ((a.x + a.radius > p.canvas.w || a.x - a.radius < 0) &&
              (a.vx = -a.vx),
              (a.y + a.radius > p.canvas.h || a.y - a.radius < 0) &&
              (a.vy = -a.vy)),
            isInArray("grab", p.interactivity.events.onhover.mode) &&
            p.fn.modes.grabParticle(a),
            (isInArray("bubble", p.interactivity.events.onhover.mode) ||
              isInArray("bubble", p.interactivity.events.onclick.mode)) &&
            p.fn.modes.bubbleParticle(a),
            (isInArray("repulse", p.interactivity.events.onhover.mode) ||
              isInArray("repulse", p.interactivity.events.onclick.mode)) &&
            p.fn.modes.repulseParticle(a),
            p.particles.line_linked.enable || p.particles.move.attract.enable)
        )
          for (var i = e + 1; i < p.particles.array.length; i++) {
            var n = p.particles.array[i];
            p.particles.line_linked.enable && p.fn.interact.linkParticles(a, n),
              p.particles.move.attract.enable &&
              p.fn.interact.attractParticles(a, n),
              p.particles.move.bounce && p.fn.interact.bounceParticles(a, n);
          }
      }
    }),
    (p.fn.particlesDraw = function () {
      p.canvas.ctx.clearRect(0, 0, p.canvas.w, p.canvas.h),
        p.fn.particlesUpdate();
      for (var e = 0; e < p.particles.array.length; e++)
        p.particles.array[e].draw();
    }),
    (p.fn.particlesEmpty = function () {
      p.particles.array = [];
    }),
    (p.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(p.fn.checkAnimFrame),
        cancelRequestAnimFrame(p.fn.drawAnimFrame),
        (p.tmp.source_svg = void 0),
        (p.tmp.img_obj = void 0),
        (p.tmp.count_svg = 0),
        p.fn.particlesEmpty(),
        p.fn.canvasClear(),
        p.fn.vendors.start();
    }),
    (p.fn.interact.linkParticles = function (e, t) {
      var a = e.x - t.x,
        i = e.y - t.y,
        a = Math.sqrt(a * a + i * i);
      a <= p.particles.line_linked.distance &&
        0 <
        (i =
          p.particles.line_linked.opacity -
          a /
          (1 / p.particles.line_linked.opacity) /
          p.particles.line_linked.distance) &&
        ((a = p.particles.line_linked.color_rgb_line),
          (p.canvas.ctx.strokeStyle =
            "rgba(" + a.r + "," + a.g + "," + a.b + "," + i + ")"),
          (p.canvas.ctx.lineWidth = p.particles.line_linked.width),
          p.canvas.ctx.beginPath(),
          p.canvas.ctx.moveTo(e.x, e.y),
          p.canvas.ctx.lineTo(t.x, t.y),
          p.canvas.ctx.stroke(),
          p.canvas.ctx.closePath());
    }),
    (p.fn.interact.attractParticles = function (e, t) {
      var a = e.x - t.x,
        i = e.y - t.y;
      Math.sqrt(a * a + i * i) <= p.particles.line_linked.distance &&
        ((a = a / (1e3 * p.particles.move.attract.rotateX)),
          (i = i / (1e3 * p.particles.move.attract.rotateY)),
          (e.vx -= a),
          (e.vy -= i),
          (t.vx += a),
          (t.vy += i));
    }),
    (p.fn.interact.bounceParticles = function (e, t) {
      var a = e.x - t.x,
        i = e.y - t.y;
      Math.sqrt(a * a + i * i) <= e.radius + t.radius &&
        ((e.vx = -e.vx), (e.vy = -e.vy), (t.vx = -t.vx), (t.vy = -t.vy));
    }),
    (p.fn.modes.pushParticles = function (e, t) {
      p.tmp.pushing = !0;
      for (var a = 0; a < e; a++)
        p.particles.array.push(
          new p.fn.particle(p.particles.color, p.particles.opacity.value, {
            x: t ? t.pos_x : Math.random() * p.canvas.w,
            y: t ? t.pos_y : Math.random() * p.canvas.h,
          }),
        ),
          a == e - 1 &&
          (p.particles.move.enable || p.fn.particlesDraw(),
            (p.tmp.pushing = !1));
    }),
    (p.fn.modes.removeParticles = function (e) {
      p.particles.array.splice(0, e),
        p.particles.move.enable || p.fn.particlesDraw();
    }),
    (p.fn.modes.bubbleParticle = function (r) {
      function e() {
        (r.opacity_bubble = r.opacity), (r.radius_bubble = r.radius);
      }
      function t(e, t, a, i, n) {
        var s;
        e != t &&
          (p.tmp.bubble_duration_end
            ? null != a &&
            ((s =
              e +
              (e -
                (i - (v * (i - e)) / p.interactivity.modes.bubble.duration))),
              "size" == n && (r.radius_bubble = s),
              "opacity" == n && (r.opacity_bubble = s))
            : l <= p.interactivity.modes.bubble.distance
              ? (null != a ? a : i) != e &&
              ((s =
                i - (v * (i - e)) / p.interactivity.modes.bubble.duration),
                "size" == n && (r.radius_bubble = s),
                "opacity" == n && (r.opacity_bubble = s))
              : ("size" == n && (r.radius_bubble = void 0),
                "opacity" == n && (r.opacity_bubble = void 0)));
      }
      var a, i, n, s, c, o, l, v;
      p.interactivity.events.onhover.enable &&
        isInArray("bubble", p.interactivity.events.onhover.mode)
        ? ((c = r.x - p.interactivity.mouse.pos_x),
          (o = r.y - p.interactivity.mouse.pos_y),
          (a =
            1 -
            (l = Math.sqrt(c * c + o * o)) /
            p.interactivity.modes.bubble.distance),
          l <= p.interactivity.modes.bubble.distance
            ? 0 <= a &&
            "mousemove" == p.interactivity.status &&
            (p.interactivity.modes.bubble.size != p.particles.size.value &&
              (p.interactivity.modes.bubble.size > p.particles.size.value
                ? 0 <=
                (n = r.radius + p.interactivity.modes.bubble.size * a) &&
                (r.radius_bubble = n)
                : ((i = r.radius - p.interactivity.modes.bubble.size),
                  (n = r.radius - i * a),
                  (r.radius_bubble = 0 < n ? n : 0))),
              p.interactivity.modes.bubble.opacity !=
              p.particles.opacity.value &&
              (p.interactivity.modes.bubble.opacity >
                p.particles.opacity.value
                ? (s = p.interactivity.modes.bubble.opacity * a) >
                r.opacity &&
                s <= p.interactivity.modes.bubble.opacity &&
                (r.opacity_bubble = s)
                : (s =
                  r.opacity -
                  (p.particles.opacity.value -
                    p.interactivity.modes.bubble.opacity) *
                  a) < r.opacity &&
                s >= p.interactivity.modes.bubble.opacity &&
                (r.opacity_bubble = s)))
            : e(),
          "mouseleave" == p.interactivity.status && e())
        : p.interactivity.events.onclick.enable &&
        isInArray("bubble", p.interactivity.events.onclick.mode) &&
        (p.tmp.bubble_clicking &&
          ((c = r.x - p.interactivity.mouse.click_pos_x),
            (o = r.y - p.interactivity.mouse.click_pos_y),
            (l = Math.sqrt(c * c + o * o)),
            (v =
              (new Date().getTime() - p.interactivity.mouse.click_time) / 1e3) >
            p.interactivity.modes.bubble.duration &&
            (p.tmp.bubble_duration_end = !0),
            v > 2 * p.interactivity.modes.bubble.duration &&
            ((p.tmp.bubble_clicking = !1), (p.tmp.bubble_duration_end = !1))),
          p.tmp.bubble_clicking &&
          (t(
            p.interactivity.modes.bubble.size,
            p.particles.size.value,
            r.radius_bubble,
            r.radius,
            "size",
          ),
            t(
              p.interactivity.modes.bubble.opacity,
              p.particles.opacity.value,
              r.opacity_bubble,
              r.opacity,
              "opacity",
            )));
    }),
    (p.fn.modes.repulseParticle = function (a) {
      var e, t, i, n, s, r, c;
      p.interactivity.events.onhover.enable &&
        isInArray("repulse", p.interactivity.events.onhover.mode) &&
        "mousemove" == p.interactivity.status
        ? ((t = a.x - p.interactivity.mouse.pos_x),
          (i = a.y - p.interactivity.mouse.pos_y),
          (e = t / (r = Math.sqrt(t * t + i * i))),
          (t = i / r),
          (r = clamp(
            (1 / (i = p.interactivity.modes.repulse.distance)) *
            (-1 * Math.pow(r / i, 2) + 1) *
            i *
            100,
            0,
            50,
          )),
          (r = { x: a.x + e * r, y: a.y + t * r }),
          "bounce" == p.particles.move.out_mode
            ? (0 < r.x - a.radius && r.x + a.radius < p.canvas.w && (a.x = r.x),
              0 < r.y - a.radius && r.y + a.radius < p.canvas.h && (a.y = r.y))
            : ((a.x = r.x), (a.y = r.y)))
        : p.interactivity.events.onclick.enable &&
        isInArray("repulse", p.interactivity.events.onclick.mode) &&
        (p.tmp.repulse_finish ||
          (p.tmp.repulse_count++,
            p.tmp.repulse_count == p.particles.array.length &&
            (p.tmp.repulse_finish = !0)),
          p.tmp.repulse_clicking
            ? ((i = Math.pow(p.interactivity.modes.repulse.distance / 6, 3)),
              (n = p.interactivity.mouse.click_pos_x - a.x),
              (s = p.interactivity.mouse.click_pos_y - a.y),
              (c = (-i / (r = n * n + s * s)) * 1),
              r <= i &&
              (function () {
                var e,
                  t = Math.atan2(s, n);
                (a.vx = c * Math.cos(t)),
                  (a.vy = c * Math.sin(t)),
                  "bounce" == p.particles.move.out_mode &&
                  ((e = a.x + a.vx),
                    (t = a.y + a.vy),
                    (e + a.radius > p.canvas.w || e - a.radius < 0) &&
                    (a.vx = -a.vx),
                    (t + a.radius > p.canvas.h || t - a.radius < 0) &&
                    (a.vy = -a.vy));
              })())
            : 0 == p.tmp.repulse_clicking &&
            ((a.vx = a.vx_i), (a.vy = a.vy_i)));
    }),
    (p.fn.modes.grabParticle = function (e) {
      var t, a;
      p.interactivity.events.onhover.enable &&
        "mousemove" == p.interactivity.status &&
        ((a = e.x - p.interactivity.mouse.pos_x),
          (t = e.y - p.interactivity.mouse.pos_y),
          (a = Math.sqrt(a * a + t * t)) <= p.interactivity.modes.grab.distance &&
          0 <
          (t =
            p.interactivity.modes.grab.line_linked.opacity -
            a /
            (1 / p.interactivity.modes.grab.line_linked.opacity) /
            p.interactivity.modes.grab.distance) &&
          ((a = p.particles.line_linked.color_rgb_line),
            (p.canvas.ctx.strokeStyle =
              "rgba(" + a.r + "," + a.g + "," + a.b + "," + t + ")"),
            (p.canvas.ctx.lineWidth = p.particles.line_linked.width),
            p.canvas.ctx.beginPath(),
            p.canvas.ctx.moveTo(e.x, e.y),
            p.canvas.ctx.lineTo(
              p.interactivity.mouse.pos_x,
              p.interactivity.mouse.pos_y,
            ),
            p.canvas.ctx.stroke(),
            p.canvas.ctx.closePath()));
    }),
    (p.fn.vendors.eventsListeners = function () {
      "window" == p.interactivity.detect_on
        ? (p.interactivity.el = window)
        : (p.interactivity.el = p.canvas.el),
        (p.interactivity.events.onhover.enable ||
          p.interactivity.events.onclick.enable) &&
        (p.interactivity.el.addEventListener("mousemove", function (e) {
          var t;
          (e =
            p.interactivity.el == window
              ? ((t = e.clientX), e.clientY)
              : ((t = e.offsetX || e.clientX), e.offsetY || e.clientY)),
            (p.interactivity.mouse.pos_x = t),
            (p.interactivity.mouse.pos_y = e),
            p.tmp.retina &&
            ((p.interactivity.mouse.pos_x *= p.canvas.pxratio),
              (p.interactivity.mouse.pos_y *= p.canvas.pxratio)),
            (p.interactivity.status = "mousemove");
        }),
          p.interactivity.el.addEventListener("mouseleave", function (e) {
            (p.interactivity.mouse.pos_x = null),
              (p.interactivity.mouse.pos_y = null),
              (p.interactivity.status = "mouseleave");
          })),
        p.interactivity.events.onclick.enable &&
        p.interactivity.el.addEventListener("click", function () {
          if (
            ((p.interactivity.mouse.click_pos_x =
              p.interactivity.mouse.pos_x),
              (p.interactivity.mouse.click_pos_y = p.interactivity.mouse.pos_y),
              (p.interactivity.mouse.click_time = new Date().getTime()),
              p.interactivity.events.onclick.enable)
          )
            switch (p.interactivity.events.onclick.mode) {
              case "push":
                p.particles.move.enable ||
                  1 == p.interactivity.modes.push.particles_nb
                  ? p.fn.modes.pushParticles(
                    p.interactivity.modes.push.particles_nb,
                    p.interactivity.mouse,
                  )
                  : 1 < p.interactivity.modes.push.particles_nb &&
                  p.fn.modes.pushParticles(
                    p.interactivity.modes.push.particles_nb,
                  );
                break;
              case "remove":
                p.fn.modes.removeParticles(
                  p.interactivity.modes.remove.particles_nb,
                );
                break;
              case "bubble":
                p.tmp.bubble_clicking = !0;
                break;
              case "repulse":
                (p.tmp.repulse_clicking = !0),
                  (p.tmp.repulse_count = 0),
                  (p.tmp.repulse_finish = !1),
                  setTimeout(function () {
                    p.tmp.repulse_clicking = !1;
                  }, 1e3 * p.interactivity.modes.repulse.duration);
            }
        });
    }),
    (p.fn.vendors.densityAutoParticles = function () {
      var e;
      p.particles.number.density.enable &&
        ((e = (p.canvas.el.width * p.canvas.el.height) / 1e3),
          p.tmp.retina && (e /= 2 * p.canvas.pxratio),
          (e =
            (e * p.particles.number.value) /
            p.particles.number.density.value_area),
          (e = p.particles.array.length - e) < 0
            ? p.fn.modes.pushParticles(Math.abs(e))
            : p.fn.modes.removeParticles(e));
    }),
    (p.fn.vendors.checkOverlap = function (e, t) {
      for (var a = 0; a < p.particles.array.length; a++) {
        var i = p.particles.array[a],
          n = e.x - i.x,
          s = e.y - i.y;
        Math.sqrt(n * n + s * s) <= e.radius + i.radius &&
          ((e.x = t ? t.x : Math.random() * p.canvas.w),
            (e.y = t ? t.y : Math.random() * p.canvas.h),
            p.fn.vendors.checkOverlap(e));
      }
    }),
    (p.fn.vendors.createSvgImg = function (n) {
      var e = p.tmp.source_svg.replace(
        /#([0-9A-F]{3,6})/gi,
        function (e, t, a, i) {
          return n.color.rgb
            ? "rgba(" +
            n.color.rgb.r +
            "," +
            n.color.rgb.g +
            "," +
            n.color.rgb.b +
            "," +
            n.opacity +
            ")"
            : "hsla(" +
            n.color.hsl.h +
            "," +
            n.color.hsl.s +
            "%," +
            n.color.hsl.l +
            "%," +
            n.opacity +
            ")";
        },
      ),
        e = new Blob([e], { type: "image/svg+xml;charset=utf-8" }),
        t = window.URL || window.webkitURL || window,
        a = t.createObjectURL(e),
        i = new Image();
      i.addEventListener("load", function () {
        (n.img.obj = i),
          (n.img.loaded = !0),
          t.revokeObjectURL(a),
          p.tmp.count_svg++;
      }),
        (i.src = a);
    }),
    (p.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(p.fn.drawAnimFrame), a.remove(), (pJSDom = null);
    }),
    (p.fn.vendors.drawShape = function (e, t, a, i, n, s) {
      var r = n * s,
        s = n / s,
        s = (180 * (s - 2)) / s,
        c = Math.PI - (Math.PI * s) / 180;
      e.save(), e.beginPath(), e.translate(t, a), e.moveTo(0, 0);
      for (var o = 0; o < r; o++)
        e.lineTo(i, 0), e.translate(i, 0), e.rotate(c);
      e.fill(), e.restore();
    }),
    (p.fn.vendors.exportImg = function () {
      window.open(p.canvas.el.toDataURL("image/png"), "_blank");
    }),
    (p.fn.vendors.loadImg = function (e) {
      var t, a;
      (p.tmp.img_error = void 0),
        "" != p.particles.shape.image.src
          ? "svg" == e
            ? ((t = new XMLHttpRequest()).open(
              "GET",
              p.particles.shape.image.src,
            ),
              (t.onreadystatechange = function (e) {
                4 == t.readyState &&
                  (200 == t.status
                    ? ((p.tmp.source_svg = e.currentTarget.response),
                      p.fn.vendors.checkBeforeDraw())
                    : (console.log("Error pJS - Image not found"),
                      (p.tmp.img_error = !0)));
              }),
              t.send())
            : ((a = new Image()).addEventListener("load", function () {
              (p.tmp.img_obj = a), p.fn.vendors.checkBeforeDraw();
            }),
              (a.src = p.particles.shape.image.src))
          : (console.log("Error pJS - No image.src"), (p.tmp.img_error = !0));
    }),
    (p.fn.vendors.draw = function () {
      "image" == p.particles.shape.type
        ? "svg" == p.tmp.img_type
          ? p.tmp.count_svg >= p.particles.number.value
            ? (p.fn.particlesDraw(),
              p.particles.move.enable
                ? (p.fn.drawAnimFrame = requestAnimFrame(p.fn.vendors.draw))
                : cancelRequestAnimFrame(p.fn.drawAnimFrame))
            : p.tmp.img_error ||
            (p.fn.drawAnimFrame = requestAnimFrame(p.fn.vendors.draw))
          : null != p.tmp.img_obj
            ? (p.fn.particlesDraw(),
              p.particles.move.enable
                ? (p.fn.drawAnimFrame = requestAnimFrame(p.fn.vendors.draw))
                : cancelRequestAnimFrame(p.fn.drawAnimFrame))
            : p.tmp.img_error ||
            (p.fn.drawAnimFrame = requestAnimFrame(p.fn.vendors.draw))
        : (p.fn.particlesDraw(),
          p.particles.move.enable
            ? (p.fn.drawAnimFrame = requestAnimFrame(p.fn.vendors.draw))
            : cancelRequestAnimFrame(p.fn.drawAnimFrame));
    }),
    (p.fn.vendors.checkBeforeDraw = function () {
      "image" == p.particles.shape.type
        ? "svg" == p.tmp.img_type && null == p.tmp.source_svg
          ? (p.tmp.checkAnimFrame = requestAnimFrame(check))
          : (cancelRequestAnimFrame(p.tmp.checkAnimFrame),
            p.tmp.img_error || (p.fn.vendors.init(), p.fn.vendors.draw()))
        : (p.fn.vendors.init(), p.fn.vendors.draw());
    }),
    (p.fn.vendors.init = function () {
      p.fn.retinaInit(),
        p.fn.canvasInit(),
        p.fn.canvasSize(),
        p.fn.canvasPaint(),
        p.fn.particlesCreate(),
        p.fn.vendors.densityAutoParticles(),
        (p.particles.line_linked.color_rgb_line = hexToRgb(
          p.particles.line_linked.color,
        ));
    }),
    (p.fn.vendors.start = function () {
      isInArray("image", p.particles.shape.type)
        ? ((p.tmp.img_type = p.particles.shape.image.src.substr(
          p.particles.shape.image.src.length - 3,
        )),
          p.fn.vendors.loadImg(p.tmp.img_type))
        : p.fn.vendors.checkBeforeDraw();
    }),
    p.fn.vendors.eventsListeners(),
    p.fn.vendors.start();
};
(Object.deepExtend = function (e, t) {
  for (var a in t)
    t[a] && t[a].constructor && t[a].constructor === Object
      ? ((e[a] = e[a] || {}), arguments.callee(e[a], t[a]))
      : (e[a] = t[a]);
  return e;
}),
  (window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (e) {
      window.setTimeout(e, 1e3 / 60);
    }),
  (window.cancelRequestAnimFrame =
    window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    clearTimeout),
  (window.pJSDom = []),
  (window.particlesJS = function (e, t) {
    "string" != typeof e && ((t = e), (e = "particles-js")),
      (e = e || "particles-js");
    var a = document.getElementById(e),
      i = "particles-js-canvas-el",
      n = a.getElementsByClassName(i);
    if (n.length) for (; 0 < n.length;) a.removeChild(n[0]);
    var s = document.createElement("canvas");
    (s.className = i),
      (s.style.width = "100%"),
      (s.style.height = "100%"),
      null != document.getElementById(e).appendChild(s) &&
      pJSDom.push(new pJS(e, t));
  }),
  (window.particlesJS.load = function (t, e, a) {
    var i = new XMLHttpRequest();
    i.open("GET", e),
      (i.onreadystatechange = function (e) {
        4 == i.readyState &&
          (200 == i.status
            ? ((e = JSON.parse(e.currentTarget.response)),
              window.particlesJS(t, e),
              a && a())
            : (console.log("Error pJS - XMLHttpRequest status: " + i.status),
              console.log("Error pJS - File config not found")));
      }),
      i.send();
  });
var Stats = function () {
  function e(e) {
    return i.appendChild(e.dom), e;
  }
  function t(e) {
    for (var t = 0; t < i.children.length; t++)
      i.children[t].style.display = t === e ? "block" : "none";
    a = e;
  }
  var a = 0,
    i = document.createElement("div");
  (i.style.cssText =
    "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),
    i.addEventListener(
      "click",
      function (e) {
        e.preventDefault(), t(++a % i.children.length);
      },
      !1,
    );
  var n,
    s = (performance || Date).now(),
    r = s,
    c = 0,
    o = e(new Stats.Panel("FPS", "#0ff", "#002")),
    l = e(new Stats.Panel("MS", "#0f0", "#020"));
  return (
    self.performance &&
    self.performance.memory &&
    (n = e(new Stats.Panel("MB", "#f08", "#201"))),
    t(0),
    {
      REVISION: 16,
      dom: i,
      addPanel: e,
      showPanel: t,
      begin: function () {
        s = (performance || Date).now();
      },
      end: function () {
        c++;
        var e,
          t = (performance || Date).now();
        return (
          l.update(t - s, 200),
          r + 1e3 < t &&
          (o.update((1e3 * c) / (t - r), 100), (r = t), (c = 0), n) &&
          ((e = performance.memory),
            n.update(e.usedJSHeapSize / 1048576, e.jsHeapSizeLimit / 1048576)),
          t
        );
      },
      update: function () {
        s = this.end();
      },
      domElement: i,
      setMode: t,
    }
  );
};
(Stats.Panel = function (a, i, n) {
  var s = 1 / 0,
    r = 0,
    c = Math.round,
    o = c(window.devicePixelRatio || 1),
    l = 80 * o,
    e = 48 * o,
    v = 3 * o,
    p = 2 * o,
    d = 3 * o,
    m = 15 * o,
    u = 74 * o,
    y = 30 * o,
    b = document.createElement("canvas");
  (b.width = l), (b.height = e), (b.style.cssText = "width:80px;height:48px");
  var h = b.getContext("2d");
  return (
    (h.font = "bold " + 9 * o + "px Helvetica,Arial,sans-serif"),
    (h.textBaseline = "top"),
    (h.fillStyle = n),
    h.fillRect(0, 0, l, e),
    (h.fillStyle = i),
    h.fillText(a, v, p),
    h.fillRect(d, m, u, y),
    (h.fillStyle = n),
    (h.globalAlpha = 0.9),
    h.fillRect(d, m, u, y),
    {
      dom: b,
      update: function (e, t) {
        (s = Math.min(s, e)),
          (r = Math.max(r, e)),
          (h.fillStyle = n),
          (h.globalAlpha = 1),
          h.fillRect(0, 0, l, m),
          (h.fillStyle = i),
          h.fillText(c(e) + " " + a + " (" + c(s) + "-" + c(r) + ")", v, p),
          h.drawImage(b, d + o, m, u - o, y, d, m, u - o, y),
          h.fillRect(d + u - o, m, o, y),
          (h.fillStyle = n),
          (h.globalAlpha = 0.9),
          h.fillRect(d + u - o, m, o, c((1 - e / t) * y));
      },
    }
  );
}),
  "object" == typeof module && (module.exports = Stats);
