import React, {Component} from 'react';
import BrandLogo from '../images/brand_logo.png'

class Card extends Component {
  render() {

    return(


      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={this.props.img} alt={this.props.alt_img}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{this.props.title}<i class="small material-icons right">more_vert</i>
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{this.props.title}<i className="small material-icons right">close</i>
          </span>
          <p>{this.props.desc}</p>
        </div>
      </div>
    

  )
  }
}


export default Card
