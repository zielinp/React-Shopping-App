import React, {Component} from 'react';
import BrandLogo from '../images/brand_logo.png'

class Main extends Component {
  render() {
    return (<div>

      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={BrandLogo} alt="Brand logo"/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">Brand Story<i class="material-icons right">more_vert</i>
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">Brand Story<i className="material-icons right">close</i>
          </span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  )
  }
}
export default Main
