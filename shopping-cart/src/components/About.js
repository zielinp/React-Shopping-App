import React, {Component} from 'react';
import BrandLogo from '../images/brand_logo.png'
import Card from './Card'

class About extends Component {
  render() {

    return(

      <div className="container">
        <h4></h4>
      <div className = "cont">
        <div><Card title="Brand Story" desc="This is a card about brand story" img={BrandLogo} alt_img="Brand Logo"/></div>
        <div><Card title="Our Team" desc="This is a card about our team" img={BrandLogo} alt_img="Our Team"/></div>
        <div><Card title="Contact" desc="This is a card about how to contact with us" img={BrandLogo} alt_img="Contact"/></div>
    </div>
    </div>
  )
  }
}


export default About
