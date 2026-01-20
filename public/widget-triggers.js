(function () {
  function waitForIframe(cb) {
    const i = setInterval(() => {
      const iframe = document.getElementById("widget-f9e99163");
      if (iframe && iframe.contentWindow) {
        clearInterval(i);
        cb(iframe);
      }
    }, 300);
  }

  const iframe = document.getElementById("widget-f9e99163");
  iframe.addEventListener("load", () => {
    setTimeout(() => {
      iframe.style.opacity = "1";
    }, 1000);
  });

  function init(iframe) {
    /* EXIT INTENT */
    document.addEventListener("mouseout", (e) => {
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
