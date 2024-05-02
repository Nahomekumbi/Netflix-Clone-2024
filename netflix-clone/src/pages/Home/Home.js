import React from 'react'
import Heade from '../../components/Heade/Heade'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import RowList from '../../components/Rows/RowList/RowList'

const Home = () => {
  return (
    <div>
        <Heade/>
        <Banner/>
        <RowList/>
        <Footer/>
    </div>
  )
}

export default Home