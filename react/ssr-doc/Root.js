import React from 'react';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      doc: null
    };

    this.handleSetDoc = this.handleSetDoc.bind(this);
  }

  componentDidMount() {
    this.handleSetDoc();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSetDoc}>Refresh</button>
        {this.state.doc ? <span>We got a doc!</span> : <div>Oops</div>}
      </div>
    );
  }

  handleSetDoc() {
    this.setState({ doc: document });
    console.log(document);
  }
}