import React, {Component} from 'react'

class ProfileCard extends Component {
  render(){
    return(<div>
      <img src={this.props.image} />
      <p {this.props.titleText} />
      <p {this.props.subtext} />
      </div>
    )
  }
}

export default ProfileCard;
