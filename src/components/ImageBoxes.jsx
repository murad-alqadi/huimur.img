import React, { Component } from 'react';
const axios = require('axios').default;

class ImageBoxes extends Component {
  constructor(props) {
    super(props);
  }

  download(url) {
    axios({
        url: url,
        method:'GET',
        responseType: 'blob'
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'image.jpg');
        document.body.appendChild(link);
        link.click();
      });
  }
  
  render() {
    let src;
    /(http(s?)):\/\//i.test(this.props.src) ? src = this.props.src : src = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley';
    let left = 'murad';
    let right = 'hui';
    if (this.props.retrieved) {
      left = 'save'
      right = 'open in new tab'
    }

    return(
      <div className='imageBoxes'>
        {/* TO DOWNLOAD WHEN YOU RENDER */}
        {/* <a href="/path/to/your/receipt.pdf" download> In the latest versions of Chrome, you cannot download cross-origin files (they have to be hosted on the same domain).*/}
        <img src={this.props.src} onError = {
          (event => {
            event.target.parentNode.style = 'display: hidden';
            event.target.src = '';
          })
        }
        />
        {/* button over a picture, hover effect */}
        <button type='button' onClick={() => this.download(this.props.src)} id='left'>{left}</button>
        {/* click event: open on a new tab */}
        <button type='button' onClick={() => window.open(src, '_blank')} id='right'>{right}</button>
      </div>
    );
  }
}

export default ImageBoxes;