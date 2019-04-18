import React,{Component} from 'react'
import Link from 'next/link'

class Header extends Component{

  render(){

    const title = this.props.title

    return(
      <React.Fragment>
        <p>{title}</p>
        <ul>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
          <li><Link href="/blog"><a>Blog</a></Link></li>
          <li><Link href="/cv"><a>CV</a></Link></li>
        </ul>
      </React.Fragment>
    )

  }

}

export default Header;