import React from 'react';
const BandIndex = require('./band_index_component')

export default class BandInput extends React.Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({type: 'ADD_BAND', payload: {title: e.target.children[1].value}})
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Enter Band: </label>
          <input />
          <button type="submit">Submit</button>
        </form>

        <h1>Bands</h1>
        <ul>
          {this.props.store.getState().map((band, index) => {
            return <BandIndex key={index} band={band} />})}
        </ul>
      </div>
    )
  }
}
