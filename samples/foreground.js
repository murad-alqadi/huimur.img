// Select something from DOM with its id or class and manipulate it
document.querySelector('._8eso').innerText = 'Sup';
// We injected CSS into the foreground from our background, so we can access its properties
document.querySelector('._8eso').classList.add('hellooo');
// We can add objects to the DOM as well
const clickMe = document.createElement('button');
clickMe.innerText = 'Send to background';
document.querySelector('body').appendChild(clickMe);
clickMe.addEventListener('click', () => {
  // We can store data into a chrome's built in state management tools for extensions
    // chrome.storage.sync will store state in user's account to access across multiple devices
    // chrome.storage.local will store state locally on current device
  chrome.storage.local.set({ 'murad': 'hui' });
  console.log('Data stored locally.');
  // We can send data to the background from the foreground as well
  console.log('Data sent to background.');
  chrome.runtime.sendMessage(
    { message: 'Hello, background.' }, 
    // We can also receive a response and do something with it in second parameter
    res => console.log('Response from background: ', res.message)
  );
});

// Listen for messages from background
chrome.runtime.onMessage.addListener((req, send, res) => {
  console.log('Foreground listener received message from background: ', req.message);
  res({ message: 'Received final bow from forground.' })
});