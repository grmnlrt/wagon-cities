import React, { Component } from 'react';

class ActiveCity extends Component {
  render() {
    const style = {
      width: '100%'
    }

    return (
      <div className="active-city">
        <h3>{this.props.city.name}</h3>
        <p>{this.props.city.address}</p>
        <img src={"https://kitt.lewagon.com/placeholder/cities/" + this.props.city.slug} style={style}/>
      </div>
    )
  }
}

export default ActiveCity;
