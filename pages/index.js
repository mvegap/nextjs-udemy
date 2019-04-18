import React, {Component} from 'react'
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

class Index extends Component{

  render(){
    return(
      <React.Fragment>
        <h1>Home page</h1>
        <Header title={"Titulo mediante props"} />
        <Footer />
      </React.Fragment>
    );
  }

}

export default Index;