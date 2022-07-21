import React, { Component } from 'react';

class ImageBoxes extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
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
        <button type='button' onClick='' id='left'>save</button>
        {/* click event: open on a new tab */}
        <button type='button' id='right'>open in new tab</button>
      </div>
    );
  }
}

export default ImageBoxes;