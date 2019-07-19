import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 import SignedInLinks from './SignedInLinks'
 import SignedOutLinks from './SignedOutLinks'
 import { connect } from 'react-redux'
import $ from 'jquery'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";


class Navbar extends Component {

    render(){
      const { auth, profile } = this.props;
      // console.log(auth);
      const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo left">FlatShare</Link>
          <ul >
          {links}
          </ul>
          {/* <a href="#" class="sidenav-trigger right" data-target="mobile-links" >
          <i className="material-icons">menu</i>
          </a>
          <ul class="sidenav" id="mobile-links">
          {links}
         </ul> */}
        </div>
      </nav>
    
     
    )
    }
  }


  const mapStateToProps=(state)=>{
    //console.log(state)
       return{
          auth:state.firebase.auth,
          profile:state.firebase.profile
        }
  }

  export default connect(mapStateToProps)(Navbar)
