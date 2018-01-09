import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <p className="list-group-item">{this.props.city.name}</p>
    )
  }
}

export default City;
