import React, {Component} from 'react'
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

class Cv extends Component{

  render(){
    return(
      <React.Fragment>
        <h1>CV Page</h1>
        <Header/>
        <Footer/>
      </React.Fragment>
    );
  }

}

export default Cv;