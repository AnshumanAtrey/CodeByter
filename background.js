let timer;

function startTimer() {
  const targetTime = new Date();
  targetTime.setHours(11, 30, 0, 0); // Set the target time to 11:30 AM

  timer = setInterval(() => {
    const now = new Date();
    if (
      now.getHours() === targetTime.getHours() &&
      now.getMinutes() === targetTime.getMinutes()
    ) {
      chrome.tabs.query(
        { url: "https://letsupgrade.coderbyte.com/candidate-assessment" },
        (tabs) => {
          if (tabs.length > 0) {
            chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              files: ["content.js"],
            });
          }
        }
      );
    }
  }, 60000); // Check every minute
}

chrome.runtime.onInstalled.addListener(() => {
  startTimer();
});
