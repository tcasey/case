! function() {
  "use strict";

  function t(t) {
    return {
      restrict: "CA",
      scope: {
        data: "=",
        labels: "=",
        options: "=",
        series: "=",
        colours: "=",
        chartType: "=",
        legend: "@",
        click: "="
      },
      link: function(o, e) {
        function i(r) {
          if (r && r.length) {
            var a = t || o.chartType;
            a && (n && n.destroy(), n = l(a, o, e))
          }
        }
        var n, g = document.createElement("div");
        g.className = "chart-container", e.replaceWith(g), g.appendChild(e[0]), "object" == typeof G_vmlCanvasManager && null !== G_vmlCanvasManager && "function" == typeof G_vmlCanvasManager.initElement && G_vmlCanvasManager.initElement(e[0]), o.$watch("data", function(i, g) {
          if (i && i.length && (!Array.isArray(i[0]) || i[0].length)) {
            var f = t || o.chartType;
            if (f) {
              if (n) {
                if (r(i, g)) return a(n, i, o);
                n.destroy()
              }
              n = l(f, o, e)
            }
          }
        }, !0), o.$watch("series", i, !0), o.$watch("labels", i, !0), o.$watch("chartType", function(t) {
          t && (n && n.destroy(), n = l(t, o, e))
        })
      }
    }
  }

  function r(t, r) {
    return t && r && t.length && r.length ? Array.isArray(t[0]) ? t.length === r.length && t[0].length === r[0].length : r.reduce(o, 0) > 0 ? t.length === r.length : !1 : !1
  }

  function o(t, r) {
    return t + r
  }

  function l(t, r, o) {
    if (r.data && r.data.length) {
      var l = o[0],
        a = l.getContext("2d"),
        i = Array.isArray(r.data[0]) ? n(r.labels, r.data, r.series || [], r.colours) : f(r.labels, r.data, r.colours),
        g = new Chart(a)[t](i, r.options || {});
      return r.click && (l.onclick = function(t) {
        var o = g.getPointsAtEvent || g.getBarsAtEvent || g.getSegmentsAtEvent;
        if (o) {
          var l = o.call(g, t);
          r.click(l, t), r.$apply()
        }
      }), r.legend && "false" !== r.legend && e(o, g), g
    }
  }

  function e(t, r) {
    var o = t.parent(),
      l = o.find("chart-legend"),
      e = "<chart-legend>" + r.generateLegend() + "</chart-legend>";
    l.length ? l.replaceWith(e) : o.append(e)
  }

  function a(t, r, o) {
    Array.isArray(o.data[0]) ? t.datasets.forEach(function(t, l) {
      o.colours && i(t, o.colours[l]), (t.points || t.bars).forEach(function(t, o) {
        t.value = r[l][o]
      })
    }) : t.segments.forEach(function(t, l) {
      t.value = r[l], o.colours && i(t, o.colours[l])
    }), t.update()
  }

  function i(t, r) {
    t.fillColor = r.fillColor, t.highlightColor = r.highlightColor, t.strokeColor = r.strokeColor, t.pointColor = r.pointColor, t.pointStrokeColor = r.pointStrokeColor
  }

  function n(t, r, o, l) {
    return l = l || Chart.defaults.global.colours, {
      labels: t,
      datasets: r.map(function(t, r) {
        var e = g(l[r]);
        return e.label = o[r], e.data = t, e
      })
    }
  }

  function g(t) {
    var r = {};
    for (var o in t) t.hasOwnProperty(o) && (r[o] = t[o]);
    return r
  }

  function f(t, r, o) {
    return o = o || Chart.defaults.global.colours, t.map(function(t, l) {
      return {
        label: t,
        value: r[l],
        color: o[l].strokeColor,
        highlight: o[l].pointHighlightStroke
      }
    })
  }
  Chart.defaults.global.responsive = !0, Chart.defaults.global.multiTooltipTemplate = "<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>", Chart.defaults.global.colours = [{
    fillColor: "rgba(151,187,205,0.2)",
    strokeColor: "rgba(151,187,205,1)",
    pointColor: "rgba(151,187,205,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(151,187,205,0.8)"
  }, {
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,0.8)"
  }, {
    fillColor: "rgba(247,70,74,0.2)",
    strokeColor: "rgba(247,70,74,1)",
    pointColor: "rgba(247,70,74,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(247,70,74,0.8)"
  }, {
    fillColor: "rgba(70,191,189,0.2)",
    strokeColor: "rgba(70,191,189,1)",
    pointColor: "rgba(70,191,189,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(70,191,189,0.8)"
  }, {
    fillColor: "rgba(253,180,92,0.2)",
    strokeColor: "rgba(253,180,92,1)",
    pointColor: "rgba(253,180,92,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(253,180,92,0.8)"
  }, {
    fillColor: "rgba(148,159,177,0.2)",
    strokeColor: "rgba(148,159,177,1)",
    pointColor: "rgba(148,159,177,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(148,159,177,0.8)"
  }, {
    fillColor: "rgba(77,83,96,0.2)",
    strokeColor: "rgba(77,83,96,1)",
    pointColor: "rgba(77,83,96,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(77,83,96,1)"
  }], angular.module("chart.js", []).directive("chartBase", function() {
    return t()
  }).directive("chartLine", function() {
    return t("Line")
  }).directive("chartBar", function() {
    return t("Bar")
  }).directive("chartRadar", function() {
    return t("Radar")
  }).directive("chartDoughnut", function() {
    return t("Doughnut")
  }).directive("chartPie", function() {
    return t("Pie")
  }).directive("chartPolarArea", function() {
    return t("PolarArea")
  })
}();
