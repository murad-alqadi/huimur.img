import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import PopupContainer from './containers/PopupContainer.jsx';
const fg = require('./foreground.js')

console.log(fg);

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: null
    }
  }

  render() {
    return (
      <div>
        <PopupContainer />
        <div>{this.state.imgs}</div>
      </div>
    );
  }

  componentDidMount() {
    const port = chrome.runtime.connect({ name: 'arrayFlow' });
    port.postMessage({ message: "arrayRequest" });
    console.log('true')
    port.onMessage.addListener((res) => {
      console.log('true')
      if(res.type == 'array') {
        this.setState({
          imgs: res.data
        });
      }
      return true;
    });
    console.log(this.state.imgs);
  }
}

createRoot(document.querySelector('#popup')).render(<Popup />);