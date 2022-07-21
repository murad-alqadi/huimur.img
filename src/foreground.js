console.log("We have accessed the foreground.");const qsImg=document.querySelectorAll("img"),imgSrcs=[];for(let e=0;e<qsImg.length;e++)imgSrcs.push(qsImg[e].src);
chrome.storage.local.set({images:imgSrcs});

// let test = 'hello';
// chrome.runtime.sendMessage(test)

// chrome.runtime.sendMessage(
//   { type: 'array', data: imgSrcs },
//   res => console.log('React loaded images: ', res.message)
// );

chrome.runtime.onConnect.addListener((port) => {
  console.assert(port.name === 'arrayFlow');
  port.onMessage.addListener((req) => {
    if(req.message == 'arrayRequest') {
      port.postMessage({ type: 'array', data: imgSrcs })
    }
  });
  return true;
});

module.exports = imgSrcs;