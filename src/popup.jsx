import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import ImagesContainer from './containers/ImagesContainer.jsx';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: ['url']
    }
    console.log(this.state);
    this.runScript = this.runScript.bind(this);
    this.unmountMe = this.unmountMe.bind(this);
  }

  runScript = () => {
    window.chrome.runtime.sendMessage({ message: "image_array_request" }, 
    (res) => this.setState({ imgs: JSON.parse(res).imgs }));
  }

  unmountMe(id) {
    const arr = [];
    this.state.imgs.forEach(el => arr.push(el));
    arr.splice(id, 1);
    this.setState({ imgs : arr });
  }

  render() {
    return (
      <div className='popupContainer'>
        <div>
          <h1>huimur.img</h1>
        </div>
        <button onClick={this.runScript}>
          retrieve images
        </button>
        <ImagesContainer 
          retrieve={this.runScript} 
          imgs={this.state.imgs} 
          unmountMe={this.unmountMe}
        />
      </div>
    );
  }
}

createRoot(document.querySelector('#popup')).render(<Popup />);