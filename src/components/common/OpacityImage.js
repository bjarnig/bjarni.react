import React from "react";

class OpacityImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { style:{ opacity:'0.0', border: '10px' }, className: "img-responsive" };
  }

  handleImageLoaded() {
    this.setState({ style:{ opacity:'1.0' } });
  }

  handleImageErrored() {
    console.log('failed to load image');
  }

  render() {
    return (
      <div>
        <img
          style={{...this.state.style, cursor: this.props.onClick ? 'pointer' : 'default'}}
          className={this.state.className}
          src={this.props.imageUrl}
          alt={this.props.alt || ""}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}
export default OpacityImage;
