import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import ImagesContainer from './containers/ImagesContainer.jsx';
const axios = require('axios').default;

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: ['url'],
      retrieved: false
    }
    console.log(this.state);
    this.runScript = this.runScript.bind(this);
    this.download = this.download.bind(this);
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

  runScript = () => {
    if (!this.state.retrieved) {
      window.chrome.runtime.sendMessage({ message: "image_array_request" }, 
      (res) => this.setState({ imgs: JSON.parse(res).imgs, retrieved: true }));
    } else {
      this.state.imgs.forEach(el => {
        console.log(el);
        this.download(el);
      });
    }
  }

  render() {
    let button;
    this.state.retrieved ? button = 'download all images' : button = 'retrieve images';

    return (
      <div className='popupContainer'>
        <div>
          <h1>huimur.img</h1>
        </div>
        <button onClick={this.runScript}>
          {button}
        </button>
        <ImagesContainer 
          imgs={this.state.imgs} 
          retrieved={this.state.retrieved}
        />
      </div>
    );
  }
}

createRoot(document.querySelector('#popup')).render(<Popup />);