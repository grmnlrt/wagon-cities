import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render() {
    const style = {
      width: '100%'
    }

    if(this.props.city === null) {
      return (
        <div className="active-city">
          <p>Select a city</p>
        </div>
      )
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

function mapStateToProps(state) {
  return {
    city: state.selectCity
  };
}

export default connect(mapStateToProps, null)(ActiveCity);
