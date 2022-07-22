console.log("We have accessed the foreground.");
// const qsImg=document.querySelectorAll("img"),imgSrcs=[];for(let e=0;e<qsImg.length;e++)imgSrcs.push(qsImg[e].src);
// chrome.storage.local.set({images:imgSrcs});
// Retrieve all img and store in array

function imgSrcsByParams(maxH = 300, maxW = 300, minH = 150, minW = 150, maxCount = 50) {
  const qsImg = document.querySelectorAll('img');
  const imgSrcs = [];
  let count = 0;
  for (let i = 0; i < qsImg.length; i++) {
      let currImg = qsImg[i];
      if (count < maxCount && currImg.height < maxH && currImg.width < maxW && currImg.height > minH && currImg.width > minW) {
          imgSrcs.push(currImg.src);
          count++;
      }
  }
  return imgSrcs;
}

/* download by selecting */
function imgSrcsBySelect() {
  const imgSrcsSelect = [];
  let countSelect = 0;
  const maxSelect = 8;
  while (true) {
    window.addEventListener('click', e => {
        imgSrcsSelect.push(e.target.currentSrc);
        countSelect++;
    if (countSelect > maxSelect) {
        console.log('data written????');
        return imgSrcsSelect;
      };
  });
}};

chrome.storage.local.set({ 'imgs': imgSrcsByParams() });