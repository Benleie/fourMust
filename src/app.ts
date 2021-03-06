
(function(win: any, lib) {
    let 
     doc: any = win.document,
     docEl: any = doc.documentElement,
     metaEl: any = doc.querySelector('meta[name="viewport"]'),
     flexibleEl: any = doc.querySelector('meta[name="flexible"]'),
     dpr: number = 0,
     scale: number = 0,
     tid: any,
     flexible: any = lib.flexible || (lib.flexible = {});
  
    if (metaEl) {
      console.warn("将根据已有的meta标签来设置缩放比例");
      var match = metaEl
        .getAttribute("content")
        .match(/initial\-scale=([\d\.]+)/);
      if (match) {
        scale = parseFloat(match[1]);
        dpr = parseInt(`${1 / scale}`);
      }
    } else if (flexibleEl) {
      var content = flexibleEl.getAttribute("content");
      if (content) {
        var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
        var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
        if (initialDpr) {
          dpr = parseFloat(initialDpr[1]);
          scale = parseFloat((1 / dpr).toFixed(2));
        }
        if (maximumDpr) {
          dpr = parseFloat(maximumDpr[1]);
          scale = parseFloat((1 / dpr).toFixed(2));
        }
      }
    }
  
    if (!dpr && !scale) {
      var isAndroid = win.navigator.appVersion.match(/android/gi);
      var isIPhone = win.navigator.appVersion.match(/iphone/gi);
      var devicePixelRatio = win.devicePixelRatio;
      if (isIPhone) {
        // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
        if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
          dpr = 3;
        } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
          dpr = 2;
        } else {
          dpr = 1;
        }
      } else {
        // 其他设备下，仍旧使用1倍的方案
        dpr = 1;
      }
      scale = 1 / dpr;
    }
  
    docEl.setAttribute("data-dpr", dpr);
    if (!metaEl) {
      metaEl = doc.createElement("meta");
      metaEl.setAttribute("name", "viewport");
      metaEl.setAttribute(
        "content",
        "initial-scale=" +
          scale +
          ", maximum-scale=" +
          scale +
          ", minimum-scale=" +
          scale +
          ", user-scalable=no"
      );
      if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(metaEl);
      } else {
        var wrap = doc.createElement("div");
        wrap.appendChild(metaEl);
        doc.write(wrap.innerHTML);
      }
    }
  
    function refreshRem() {
      // var width = window.screen.width;
      // var rem = width / 19.2;
      var height = document.documentElement.clientHeight
      var rem = height / 10.8;
      docEl.style.fontSize = rem + "px";
      flexible.rem = win.rem = rem;
      console.log(rem);
      
    }
  
    win.addEventListener(
      "resize",
      function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
      },
      false
    );
    win.addEventListener(
      "pageshow",
      function(e: any) {
        if (e.persisted) {
          clearTimeout(tid);
          tid = setTimeout(refreshRem, 300);
        }
      },
      false
    );
  
    if (doc.readyState === "complete") {
      doc.body.style.fontSize = 12 * dpr + "px";
    } else {
      doc.addEventListener(
        "DOMContentLoaded",
        function() {
          doc.body.style.fontSize = 12 * dpr + "px";
        },
        false
      );
    }
  
    refreshRem();
  
    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function(d: any) {
      let val: any = parseFloat(d) * this.rem;
      if (typeof d === "string" && d.match(/rem$/)) {
        val += "px";
      }
      return val;
    };
    flexible.px2rem = function(d: any) {
      let val: any = parseFloat(d) / this.rem;
      if (typeof d === "string" && d.match(/px$/)) {
        val += "rem";
      }
      return val;
    };
})(window, (window as any)['lib'] || ((window as any)['lib'] = {}));
  


// (() => {
//   const height = document.documentElement.clientHeight
//   const rem = height / 10.8;
//   document.documentElement.style.fontSize = `${rem}px`;
// })()