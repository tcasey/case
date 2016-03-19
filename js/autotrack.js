(function() {
  var f = !0,
    g = this;

  function h(a, c) {
    var b = a.split("."),
      d = g;
    !(b[0] in d) && d.execScript && d.execScript("var " + b[0]);
    for (var e; b.length && (e = b.shift());) !b.length && void 0 !== c ? d[e] = c : d = d[e] ? d[e] : d[e] = {}
  }

  function k(a, c, b) {
    return a.call.apply(a.bind, arguments)
  }

  function m(a, c, b) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var b = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(b, d);
        return a.apply(c, b)
      }
    }
    return function() {
      return a.apply(c, arguments)
    }
  }

  function n(a, c, b) {
    n = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? k : m;
    return n.apply(null, arguments)
  }
  Function.prototype.bind = Function.prototype.bind || function(a, c) {
    if (1 < arguments.length) {
      var b = Array.prototype.slice.call(arguments, 1);
      b.unshift(this, a);
      return n.apply(null, b)
    }
    return n(this, a)
  };

  function p(a) {
    this.a = a || {};
    this.pathname = window.location.pathname;
    window._gaq = window._gaq || [];
    this.h = f;
    if (!1 === this.a.tracklinks || !1 === this.a.trackClicks) this.h = !1;
    this.a.trackQueryParams && (this.n = f);
    this.m = void 0 === this.a.adsDbCompatible ? f : this.a.adsDbCompatible;
    this.c = this.a.tracker ? this.a.tracker + "." : "";
    this.g = this.a.cookiePath || /^(.*\/)/.exec(this.pathname)[0];
    this.e = this.a.cookiePathCopy || [];
    this.prefix = this.a.prefix || "";
    this.j = this.a.defaultEventName;
    this.i = this.a.defaultAction;
    this.k = this.a.defaultLabel;
    this.b([this.c + "_setAccount", this.a.profile]);
    this.b([this.c + "_setCookiePath", this.g]);
    this.a.domainName && this.b([this.c + "_setDomainName", this.a.domainName]);
    this.b([this.c + "_setAllowAnchor", f]);
    if (this.m && (window.location.hash || window.location.search)) a = window.location.href, this.b([this.c + "_setCampIdKey", "cid"]), -1 == a.indexOf("utm_campaign=") && this.b([this.c + "_setCampNameKey", "sourceid"]), -1 == a.indexOf("utm_medium=") && this.b([this.c + "_setCampMediumKey", "medium"]), -1 == a.indexOf("utm_source=") && this.b([this.c +
      "_setCampSourceKey", "subid"
    ]), -1 == a.indexOf("utm_term=") && this.b([this.c + "_setCampTermKey", "term"]), -1 == a.indexOf("utm_content=") && this.b([this.c + "_setCampContentKey", "content"]);
    var c = this.a.commands;
    if (c) {
      a = 0;
      for (var b; b = c[a]; a++) b[0] = b[0] && this.c + b[0], this.b(b)
    }
    if (this.e) {
      a = 0;
      for (c = this.e.length; a < c; a++) 0 > this.g.indexOf(this.e[a]) && this.b([this.c + "_cookiePathCopy", this.e[a]])
    }
    a = this.a.pageviewPath;
    a || (a = this.prefix + this.pathname, this.n && (a += window.location.search));
    this.b([this.c + "_trackPageview",
      a
    ]);
    window._gat || (a = document.createElement("script"), a.type = "text/javascript", a.async = f, a.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js", c = document.getElementsByTagName("script")[0], c.parentNode.insertBefore(a, c));
    q(this, this.l, this);
    this.a.trackUnload && r(window, "unload", this.o, this);
    if ((this.d = this.a.trackEventCallback) && "function" !== typeof this.d) this.d = void 0;
    s = f
  }
  var s = !1;
  p.prototype.l = function() {
    this.h && t(this);
    this.a.heatMapper && u(this)
  };
  p.prototype.o = function() {
    this.f("AutoTrack: Navigation", "Unload", window.location.href)
  };

  function t(a) {
    r(document.body, "click", function(a) {
      a = a || window.event;
      a = a.target || a.srcElement;
      a = 3 == a.nodeType ? a.parentNode : a;
      do {
        if (Boolean("a" == a.nodeName.toLowerCase() || a.getAttribute("data-g-event") || a.getAttribute("data-g-action") || a.getAttribute("data-g-label"))) {
          var b = v(this, "eventname", a),
            d = v(this, "action", a),
            e = v(this, "label", a);
          this.f(b, d, e)
        }
        a.parentNode && (a = a.parentNode)
      } while (a.parentNode)
    }, a)
  }

  function u(a) {
    r(document.body, "click", function(a) {
      this.f("AutoTrack: Heatmap", "Click", a.clientX + "," + a.clientY)
    }, a)
  }
  p.prototype.f = function(a, c, b) {
    this.prefix && (b = this.prefix + b);
    this.b([this.c + "_trackEvent", a, c, b]);
    this.d && this.d(a, c, b)
  };

  function v(a, c, b) {
    function d(a) {
      return "string" == typeof a ? a : "function" == typeof a ? a(b) : ""
    }
    return "eventname" == c ? b.getAttribute("data-g-event") || d(a.j) || ("a" == b.tagName.toLowerCase() ? b.hostname == window.location.hostname ? "AutoTrack: Link Click" : "AutoTrack: Outbound Click" : "AutoTrack: Element Click") : "action" == c ? b.getAttribute("data-g-action") || d(a.i) || b.getAttribute("href") || "AutoTrack: Element Click" : "label" == c ? b.getAttribute("data-g-label") || d(a.k) || a.pathname : ""
  }

  function r(a, c, b, d) {
    d && (b = n(b, d));
    a.addEventListener ? a.addEventListener(c, b, !1) : a.attachEvent && a.attachEvent("on" + c, b)
  }

  function q(a, c, b) {
    b && (c = n(c, b));
    if (document.addEventListener) try {
        r(document, "DOMContentLoaded", c, a)
      } catch (d) {
        r(window, "load", c, a)
      } else if (!document.uniqueID && document.expando) var e = document.createElement("tempnode"),
        l = window.setInterval(function() {
          try {
            e.doScroll("left")
          } catch (a) {
            return
          }
          window.clearInterval(l);
          l = e = null;
          b && (c = n(c, b));
          c()
        }, 50);
      else "readyState" in document ? l = window.setInterval(function() {
          /loaded|complete/.test(document.readyState) && (window.clearInterval(l), l = null, b && (c = n(c, b)), c())
        }, 50) :
        r(window, "load", c, a)
  }
  p.prototype.b = function(a) {
    a instanceof Array && window._gaq.push(a)
  };
  h("gweb.analytics.AutoTrack", p);
  p.prototype.trackEvent = p.prototype.f;
  p.prototype.pushCommand = p.prototype.b;
  h("gweb.analytics.AutoTrack.hasInstance", function() {
    return s
  });
})()
