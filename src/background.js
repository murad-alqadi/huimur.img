// Log to background console to confirm extension is running
console.log('Our extension is running.')

chrome.runtime.onMessage.addListener((req, sender, res) => {
  if (req.message === 'arrayRequest') res({ type: 'array', data: ['success'] });
});