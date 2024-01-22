let isExtensionActive = false;

chrome.action.onClicked.addListener((tab) => {
  isExtensionActive = !isExtensionActive;
  chrome.action.setIcon({
    path: isExtensionActive ? "icon-on.png" : "icon-off.png",
    tabId: tab.id,
  });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: toggleProgressBar,
    args: [isExtensionActive],
  });
});

function toggleProgressBar(isActive) {
  let progressBar = document.querySelector(".ytp-progress-bar");
  if (progressBar) {
    progressBar.style.display = isActive ? "none" : "";
  }
  let time = document.querySelector(".ytp-time-display");
  if (time) {
    time.style.display = isActive ? "none" : "";
  }
}
