chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // First, validate the message’s structure.
  if (msg.subject === "DOMInfo") {
    const location = window.location.href;
    const title = window.document.title;
    response({ location, title });
  }
});
