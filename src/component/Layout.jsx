import React from 'react'
import {Helmet} from "react-helmet";
import Navbar from './Navbar';


const Layout = ({children,title}) => {
    
  return (
    <div>
    <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            
            </Helmet>
            <Navbar/>
            <div>

                {children}
            </div>
    </div>
  )
}

export default Layout
