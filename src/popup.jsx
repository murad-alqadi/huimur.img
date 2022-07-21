import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import PopupContainer from './containers/PopupContainer.jsx';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: null
    }
  }

  runScript () {
    window.chrome.runtime.sendMessage({ message: "arrayRequest" }, (res) => {
      console.log(res.data);
    });
    console.log('attempted')
    return 'true'
  }

  render() {
    return (
      <div>
        <button onClick={this.runScript}>
          Inject Foreground
        </button>
        <PopupContainer />
      </div>
    );
  }
}

createRoot(document.querySelector('#popup')).render(<Popup />);