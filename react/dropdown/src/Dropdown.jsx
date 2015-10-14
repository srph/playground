import React, { PropTypes, cloneElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import DropdownUtils from './DropdownUtils';

const ESC_KEY = 27;
const TRIGGER_REF = Symbol();

// Dropdown specific for our case.
// Unfortunately, our `render` function returns the `li`
// because React doesn't support returning of multiple components.
// http://stackoverflow.com/q/22287957/2698227
export default class Dropdown extends React.Component {
  static propTypes = {
    /**
     * The element used to trigger the open state
     */
    trigger: PropTypes.element.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      top: 0,
      left: 0
    };

    this._handleClick = ::this._handleClick;
    this._handleEsc = ::this._handleEsc;
  }

  // Register click and keydown event listeners
  componentDidMount() {
    this.mountDropdownContainer();
    window.addEventListener('click', this._handleClick);
    window.addEventListener('keydown', this._handleEsc);
  }

  // Unregister all event listeners
  componentWillUnmount() {
    this.unmountDropdownContainer();
    window.removeEventListener('click', this._handleClick);
    window.removeEventListener('keydown', this._handleEsc);
  }

  componentDidUpdate() {
    if ( !this.state.open ) {
      this.unmountDropdown()
    } else {
      this.mountDropdown();
    }
  }

  render() {
    return cloneElement(this.props.trigger, { ref: TRIGGER_REF });
  }

  mountDropdown() {
    if ( !this.$container ) {
      throw new Error('Container does not exist. It may have been removed, or whatever');
    }

    this.$dropdown = render(
      cloneElement(this.props.children, {
        style: {
          top: this.state.top,
          left: this.state.left
        }
      }),
      this.$container
    );
  }

  unmountDropdown() {
    unmountComponentAtNode(this.$container);
    this.$dropdown = null;
  }

  mountDropdownContainer() {
    this.$container = document.createElement('div');
    document.body.appendChild(this.$container);
  }

  unmountDropdownContainer() {
    if ( this.$container ) {
      document.body.removeChild(this.$container);
      this.$container = null;
    }
  }

  setPosition() {
    const offset = DropdownUtils.calculatePosition(
      this.refs[TRIGGER_REF],
      this.$dropdown
    );

    this.setState(offset);
  }

  _handleEsc(evt) {
    if ( this.state.open && evt.keyCode === ESC_KEY ) {
      this.setState({ open: false });
    }
  }

  _handleClick(evt) {
    let open = null;
    let triggerNode = this.refs[TRIGGER_REF];

    if ( open && evt.target !== triggerNode ) {
      open = false;
    } else if ( evt.target === triggerNode ) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      open = !this.state.open;
    }

    this.setState({ open }, () => {
      this.setPosition();
    });
  }
}