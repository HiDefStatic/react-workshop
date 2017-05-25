import React, {Component} from 'react'

class ProfileCard extends Component {
  render(){
    return(<div>
      <img src={this.props.imagesrc} className="projectCard" />
      <p> {this.props.titleText} </p>
      <p> {this.props.subtext} </p>
      </div>
    )
  }
}

export default ProfileCard;
