import React, {Component} from 'react';


class Footer extends Component {
  render() {
    return(

              <footer className="page-footer">
                <div className="container">
                  <div className="row">
                    <div className="col l6 s12">
                      <h5 className="white-text">Footer Content</h5>
                      <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                    </div>
                  </div>
                </div>

                <div className="footer-copyright">
                  <div className="container">

                  <ul className="row">
                      <li> <div className="col s6 grey-text text-lighten-4"> © 2020 Copyright zielinp </div> </li>
                      <li> <a className="col s1 grey-text text-lighten-4 right" href="https://github.com/zielinp"> Github </a> </li>
                      <li> <a className="col s1 grey-text text-lighten-4 right" href="https://www.linkedin.com/in/zielinp/"> Linkedin </a> </li>
                  </ul>

                  </div>
                </div>

              </footer>

  )
  }
}
export default Footer
