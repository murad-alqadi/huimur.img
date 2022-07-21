// Log to background console to confirm extension is running
console.log('Our extension is running.')
// Define default active tab
let active_tab_id = 0;

// If user does anything that ends up updating the tab property, execute a function
chrome.tabs.onActivated.addListener(tab => {
  // Can access tab properties
  chrome.tabs.get(tab.tabId, current_tab_info => {
    // Save active tabId to global variable
    active_tab_id = tab.tabId;
    // Background console current tab url
    console.log(current_tab_info.url)
    // Will only inject to foreground if website is added to permissions in our manifest
    chrome.tabs.insertCSS(null, { file: './styles.css' })
    chrome.tabs.executeScript(null, { file: './foreground.js' }, () => console.log('Attempting to inject foreground.'));
  });
});