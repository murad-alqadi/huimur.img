// Log to background console to confirm extension is running
console.log('Our extension is running.')

// Define default active tab
let active_tab_id = 0;
chrome.tabs.onActivated.addListener(tab => {
  chrome.tabs.get(tab.tabId, current_tab_info => {
    active_tab_id = tab.tabId;
    console.log(current_tab_info.url)
    injectForeground();
  });
});

chrome.tabs.onUpdated.addListener(() => injectForeground());

chrome.runtime.onMessage.addListener((req, sender, res) => {
  if (req.message === 'image_array_request') {
    res(localStorage.getItem('imgArray'));
  }
});

const injectForeground = () => {
  chrome.tabs.executeScript(null, 
    { file: './foreground.js' }, 
    () => {
      console.log('Inject foreground script.')
      chrome.storage.local.get(['imgs'], (result) => localStorage.setItem('imgArray', JSON.stringify(result)));
    }
  );
}