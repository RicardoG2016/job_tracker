import React, {Component} from 'react';
import {connectProfile} from '../../auth0/auth';
import {Link} from 'react-router';
import {grey200} from 'material-ui/styles/colors';

class Home extends Component {
  static propTypes = {
    ...connectProfile.PropTypes
  };

  render() {

    const homeIntro = {
      fontSize: "large",
      margin: '0px auto',
    };

    return (
        <div>
          <div style={homeIntro}>
            Landing Page Coming Soon
          </div>
        </div>
    );
  }
}

export default connectProfile(Home);
