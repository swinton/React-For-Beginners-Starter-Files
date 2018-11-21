import React from "react";
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  store = React.createRef();

  goToStore = (event) => {
    // Don't submit the form
    event.preventDefault();
    // Load the store, using the "this.store" ref to reference the DOM to get the picked store
    this.props.history.push(`/store/${this.store.value.value}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore }>
        <h2>Please Enter A Store</h2>
        <input type="text" ref={this.store} required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
