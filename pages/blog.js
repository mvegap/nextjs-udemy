import React, {Component} from 'react'
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';

class Blog extends Component{

  render(){
    return(
      <React.Fragment>
        <h1>Blog page</h1>
        <Header/>
        <Footer/>
      </React.Fragment>
    );
  }

}

export default Blog;