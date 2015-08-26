import React, { PropTypes } from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';

export default class Resolver extends React.Component {
  static propTypes = {
    /**
     * Resolves
     */
    resolves: PropTypes.object.isRequired,

    /**
     *
     */
    render:PropTypes.func
  };

  state = {
    /**
     * Flag whether all promises
     * have been resolved
     */
    resolved: false
  };

  resolved = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { resolves } = this.props;

    const promises = Object.keys(resolves).map((key) => {
      const resolve = resolves[key]();

      Promise.resolve(resolve)
        .then((value) => {
          this.resolved[key] = value;
          // not returning anything
          // cuz we ain't needin it
        });

      return resolve;
    });

    Promise.all(promises)
      .then(() => {
        this.setState({ resolved: true });
      });
  }

  render() {
    const { resolved } = this;
    const { children, render } = this.props;

    if ( !this.state.resolved ) {
      return null;
    }

    if ( render !== undefined) {
      return render(resolved);
    }

    return cloneWithProps(children, resolved);
  }
}

function isPromise(v) {
  return v && typeof v === "object" && v.then !== undefined;
}