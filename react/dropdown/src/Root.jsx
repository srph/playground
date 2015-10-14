import React from 'react';
import Dropdown from './Dropdown';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <div style={{ marginBottom: 50 }}>
          <Dropdown trigger={<a href="#">More</a>}>
            <div className="c-dropdown">
              <ul className="c-dropdown__menu c-dropdown__menu--open c-dropdown__menu--right">
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </Dropdown>
        </div>

        <div style={{ marginBottom: 50 }}>
          <Dropdown trigger={<a href="#">More</a>} position={{ x: 'left', y: 'top' }}>
            <div className="c-dropdown">
              <ul className="c-dropdown__menu c-dropdown__menu--open c-dropdown__menu--right">
                <li><a href="#about">About</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </Dropdown>
        </div>
      </div>
    );
  }
}
