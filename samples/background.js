// Listen for messages from the foreground
chrome.runtime.onMessage.addListener((req, send, res) => {
  // We can send messages to the message listener in foreground
  // You can use global variables as below
  chrome.tabs.sendMessage(active_tab_id, { message: 'Background sending message to foreground event listener.' }, res => console.log(res.message));
  if(req.message == 'Hello, background.') {
    // If message key contains correct data, console log the value
    chrome.storage.local.get('murad', val => console.log('Accessed from local storage: ', val))
    // Send response back to foreground
    res({ message: 'Background accessed local storage.' });
  } else { 
    console.log('Background did not receive valid request.');
  }
});