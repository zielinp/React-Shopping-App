import React, {Component} from 'react';
import emailjs from 'emailjs-com';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Summary extends Component {

  // EmailJS constructor
  constructor(props) {
  super(props);
  this.state = { from_name: 'Modren Shop', subscribe_email: '', first_name:'', last_name:'', address:'', city:'', country:''};
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}


  render() {

    //Disabled button when inputs are empty
    function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

    const {subscribe_email, first_name, last_name, address, city, country} = this.state;
    const isEnabled = subscribe_email.length > 0  && validateEmail(subscribe_email) &&
                      first_name.length > 0 && last_name.length > 0 &&
                      address.length > 0 && city.length > 0 && country.length > 0;


    // Products from cartReducer

    let addedItems = this.props.items.length ? ( this.props.items.map(item=>{
                return(


                    <li className="collection-item avatar" key={item.id}>

                                <div className="item-desc">
                                    <span className="title">{item.title}</span>
                                    <p><b>Price: {item.price}$</b></p>
                                    <p><b>Quantity: {item.quantity}</b></p>
                              </div>
                            </li>
                )
            })
        ): ( <p>Your cart is empty.</p> )

    return(
<div className="container">

<h5 className="center-align">Please complete the form and we will send you an e-mail with summary of your order.</h5>

  <div className="row">

    <form className="col s12">
      <div className="row">

      <div className="input-field col s12">
        <input id="email" type="email" className="validate "
        onChange={this.handleChange} required value={this.state.subscribe_email}
        name="subscribe_email"/>
        <label for="email">Email</label>
        <span className="helper-text" data-error="Invalid email adress"></span>
      </div>


      <div className="input-field col s6">
        <input id="first_name" type="text" className="validate"
        onChange={this.handleChange} required value={this.state.first_name}
        name="first_name"/>
        <label for="first_name">First Name</label>
      </div>

        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"
            onChange={this.handleChange} required value={this.state.last_name}
            name="last_name"/>
          <label for="last_name">Last Name</label>
        </div>

        <div className="input-field col s12">
          <input id="address" type="text" className="validate"
            onChange={this.handleChange} required value={this.state.address}
            name="address"/>
          <label for="address">Address</label>
        </div>

        <div className="input-field col s6">
          <input id="city" type="text" className="validate"
            onChange={this.handleChange} required value={this.state.city}
            name="city"/>
          <label for="city">City</label>
        </div>

          <div className="input-field col s6">
            <input id="country" type="text" className="validate"
              onChange={this.handleChange} required value={this.state.country}
              name="country"/>
            <label for="country">Country</label>
          </div>

          <Link to="/end"><button className="waves-effect waves-light btn btn--submit"
          onClick={this.handleSubmit} disabled={!isEnabled}>Order</button></Link>




      </div>
    </form>
    <ul className="collection">
        {addedItems}
    </ul>
      Total: {this.props.total} $
  </div>
</div>

  )
  }


// EmailJS functions
  handleChange(event) {
    // this.setState({subscribe_email: event.target.value})
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    });
  }

  handleSubmit(event) {
  //  event.preventDefault();

    const templateId = 'summary';

    this.sendFeedback(templateId, {
      mail_address: this.state.subscribe_email,
      from_name: this.state.from_name,
      to_name: this.state.first_name,
      last_name: this.state.last_name,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      items: this.props.items.map(item=>{
        return(
        // ["Model: ",item.title, "Price: ",item.price, "Quantity: ",item.quantity]
        `Model: ${item.title} -- Price: ${item.price}$ -- Quantity: ${item.quantity}`

      )}),



      total: this.props.total

    })
  }

  sendFeedback(templateId, variables) {
    //alert(this.state.addedItems);
    window.emailjs.send('gmail', templateId, variables).then(res => {
      console.log('Email successfully sent!')
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }


}
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
}
}
export default connect (mapStateToProps) (Summary)
