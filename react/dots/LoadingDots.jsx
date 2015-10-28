import React from 'react';

export default class LoadingDots extends React.Component {
  static propTypes = {
    count: (props, propName) => {
      const value = props[propName];

      if ( isNaN(value) ) {
        return new Error(
          `Prop \`count\` ${value} must be a number, ` +
          `\`${value}\` supplied.`
        );
      }

      if ( value < 1 ) {
        return new Error(
          `Prop \`count\` cannot have a value less than 1, ` +
          `defaults to 3, ${value} supplied.`
        );
      }
    },

    speed: PropTypes.number
  };

  static defaultProps = {
    count: 3,
    speed: 250
  };

  state = {
    length: 1;
  };

  componentDidMount() {
    this.$timeout = setInterval(() => {
      this.setState(state => ({
        length: state.length === this.props.count
          ? 0
          : state.length + 1
      }));
    }, this.props.speed);
  }

  componentWillUnmount() {
    cancelInterval(this.$timeout);
  }

  render() {
    let dots = '';

    for ( let i = 0; i <= this.state.length; i++ ) {
      dots += '.';
    }

    return dots;
  }
}
