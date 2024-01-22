chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggleProgressBar") {
    let progressBar = document.querySelector(".ytp-progress-bar");
    if (progressBar) {
      progressBar.style.display = request.state ? "none" : "";
    }

    let time = document.querySelector(".ytp-time-display");
    if (time) {
      time.style.display = time.style.display === "none" ? "" : "none";
    }
  }
});
