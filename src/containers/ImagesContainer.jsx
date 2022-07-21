import React, { Component } from 'react';
import ImageBoxes from '../components/ImageBoxes.jsx';

class ImagesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const boxes = [];
    console.log(this.props.imgs)
    this.props.imgs.forEach((el, i) => {
      boxes.push(
      <ImageBoxes 
        src={el}
        id={i}
        key={i}
        unmountMe={this.props.unmountMe}
      />
      );
    });
    return(
      <div>
        {boxes}
      </div>
    );
  }
}

export default ImagesContainer;