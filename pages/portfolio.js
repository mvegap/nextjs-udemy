import React, {Component} from 'react'
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

class Portfolio extends Component{

  render(){
    return(
      <React.Fragment>
        <h1>Portfolio page</h1>
        <Header/>
        <Footer/>
      </React.Fragment>
    );
  }

}

export default Portfolio;