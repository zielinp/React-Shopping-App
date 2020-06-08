import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions.js'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Home extends Component{

  handleClick = (id,title)=>{
         this.props.addToCart(id);
     }

  render(){

    let itemList = this.props.items.map(item =>{
      return(
        <div className="card" key={item.id}>
                       <div className="card-image">
                           <img src={item.img} alt={item.title}/>

                             <span to="/" className="btn btn-floating halfway-fab waves-effect waves-light red"
                               onClick={()=>{this.handleClick(item.id)}}>
                                <i className="material-icons"> add </i>
                           </span>

                           </div>

                           <div className="card-content">
                             <span className="card-title">{item.title}</span>

                           <p>{item.desc}</p>
                           <p><b>Price: {item.price}$</b></p>

                       </div>
                </div>
      )
    })
    return(
      <div className="container">
                 <h4 className="center">Products</h4>
                 <div className="box">
                     {itemList}
                 </div>

                 <ToastContainer
                      position="bottom-left"
                      autoClose={5000}
                      hideProgressBar
                      newestOnTop
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover={false}
                      />
             </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    addToCart: (id) =>{dispatch(addToCart(id))}
  }
}

const mapStateToProps = (state)=>{
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home)
