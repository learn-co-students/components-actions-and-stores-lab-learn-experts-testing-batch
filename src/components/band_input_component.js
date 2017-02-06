import React, { Component } from 'react'
import BandIndex from './band_index_component'

class BandInputComponent extends Component {

  onSubmit(e){
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      payload: {
        title: e.target.children[1].value
      }
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Enter Band: </label>
          <input />
          <button type="submit">Submit</button>
        </form>

        <h1>Bands</h1>
        <ul>
          {this.props.store.getState().map((band, i) =>
            <BandIndex key={i} band={band} />
          )}
        </ul>
      </div>
    )
  }
}

module.exports = BandInputComponent;
