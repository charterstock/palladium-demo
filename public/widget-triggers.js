(function () {
  const iframe = document.getElementById("widget-f9e99163");
  if (!iframe) return;

  function toggleWidget(expanded) {
    if (expanded) {
      Object.assign(iframe.style, {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        margin: "auto",
        width: "400px",
        height: "600px",
        transform: "none",
      });
    } else {
      Object.assign(iframe.style, {
        position: "fixed",
        top: "auto",
        left: "auto",
        transform: "none",
        bottom: "20px",
        right: "20px",
        width: "360px",
        height: "200px",
      });
    }
  }

  window.addEventListener("message", function (e) {
    if (!e.data) return;
    var data = e.data;
    try {
      data = typeof data === "string" ? JSON.parse(data) : data;
    } catch (_) {}
    if (data.type === "WIDGET_EXPANDED") toggleWidget(true);
    if (data.type === "WIDGET_COLLAPSED") toggleWidget(false);
  });

  function waitForIframe(cb) {
    const i = setInterval(() => {
      if (iframe && iframe.contentWindow) {
        clearInterval(i);
        cb(iframe);
      }
    }, 300);
  }

  function showWidget() {
    iframe.style.opacity = "1";
  }

  iframe.addEventListener("load", showWidget);

  function init(iframe) {
    document.addEventListener("mouseout", function (e) {
      if (e.clientY <= 0) {
        iframe.contentWindow.postMessage({ type: "EXIT_INTENT" }, "*");
      }
    });
  }

  function start() {
    waitForIframe(init);
  }

  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    start();
  } else {
    document.addEventListener("DOMContentLoaded", start);
  }
})();
