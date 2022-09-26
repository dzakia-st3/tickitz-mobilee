import React from 'react'
import Navbar from '../components/navbar'
// import Footer from '../components/footer'

const Layout = ({children}) => {
  return (
  <>
    <Navbar/>
        {children}
  </>
  )
}

export default Layout