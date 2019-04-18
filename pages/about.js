import React, {Component} from 'react'
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

class About extends Component{

  render(){
    return(
      <React.Fragment>
        <h1>About page</h1>
        <Header/>
        <Footer/>
      </React.Fragment>
    );
  }

}

export default About;