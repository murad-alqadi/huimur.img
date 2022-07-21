// If permissions are correct, this script should run
console.log('We have accessed the foreground.');

// Retrieve all img and store in array
const qsImg = document.querySelectorAll('img')  //.map((el) => el.src);
const imgSrcs = [];
for (let i = 0; i < qsImg.length; i++) imgSrcs.push(qsImg[i].src);
console.log(imgSrcs);
chrome.storage.local.set({ 'images': imgSrcs });