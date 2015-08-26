import React from 'react';
import cloneWithProps from 'react/lib/cloneWithProps';
import { Resolver } from 'react-resolver';

// import Resolver from './Resolver/Resolver';
import APIUtil from '../util/APIUtil';
import FriendsIndex from './FriendsIndex';

class Friends extends React.Component {
  static displayName = 'Friends';
  
  constructor(props) {
    super(props);
  }

  render() {
    const { children, ...other } = this.props;

    // return (
    //   <Resolver
    //     resolves={{
    //       friends() {
    //         return APIUtil.friends();
    //       }
    //     }}
    //     render={(props) => {
    //       return (
    //         <div>
    //           {children ? cloneWithProps(children, props) : <FriendsIndex {...props} />}
    //         </div>
    //       );
    //     }} />
    // );
    return (
      <div>
        {children ? cloneWithProps(children, other) : <FriendsIndex {...other} />}
      </div>
    );
  }
}

// export default Friends;

export default Resolver.createContainer(Friends, {
  resolve: {
    friends() {
      return APIUtil.friends();
    }
  }
});