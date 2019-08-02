import React from "react";

// Components
import OpacityImage from './OpacityImage';

class FrontImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className="col-lg-4 col-sm-6 col-xs-6">
        <div className="img-center">
          <a href={this.props.link}>
            <OpacityImage imageUrl={this.props.imageUrl}/>
          </a>
        </div>
        <a href={this.props.link}>
          <p>{this.props.text}</p>
        </a>
      </div>
      </div>
    );
  }
}
export default FrontImage;
