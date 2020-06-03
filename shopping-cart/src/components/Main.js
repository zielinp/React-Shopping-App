import React, {Component} from 'react';
import { Slide } from 'react-slideshow-image';

import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'

import emailjs from 'emailjs-com';


const slideImages = [
  Item1,
  Item2,
  Item3
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};



class Main extends Component {
  constructor(props) {
	super(props);
	this.state = { name: 'Modren Shop', subscribe_email: '' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
}

  render() {
    return (

      <div className = "container">
      <div className="slide-container">
          <Slide {...properties}>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>

              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>

              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>

              </div>
            </div>
          </Slide>
        </div>

        <div className="container">


                    <div className="row">
                      <form className="col s12">
                        <div className="row">
                          <div className="input-field col s10">
                            <input id="email"
                              type="email"
                              class="validate"
                              onChange={this.handleChange}
                	             required value={this.state.subscribe_email}/>
                            <label for="email">Email</label>
                            <span className="helper-text" data-error="Invalid email adress" data-success="OK!"></span>
                            </div>
                          <div className="col s2">

                              <span type="button" className="btn btn--submit" onClick={this.handleSubmit}>
                              <i class="large material-icons">email</i>
                              </span>
                            </div>


                        </div>
                      </form>
                    </div>

                </div>



        </div>
  )
  }


handleChange(event) {
  this.setState({subscribe_email: event.target.value})
}

handleSubmit(event) {
  const templateId = 'subscribe';

  this.sendFeedback(templateId, {
    mail_adress: this.state.subscribe_email,
    from_name: this.state.name,

  })
}

sendFeedback(templateId, variables) {
  window.emailjs.send('gmail', templateId, variables).then(res => {
    console.log('Email successfully sent!')
  })
  // Handle errors here however you like, or use a React error boundary
  .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
}




}
export default Main
