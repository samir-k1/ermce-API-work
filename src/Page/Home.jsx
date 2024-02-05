import React, { useEffect, useState } from 'react'
import Layout from '../component/layout'
import axios from 'axios'
import { FallingLines } from 'react-loader-spinner'

const Home = () => {
    const[data,setData]=useState([]);
     const gitData= async ()=>{
        const data1 = await axios.get('https://dummyjson.com/products');
         setData(data1.data.products);
     }
     useEffect(()=>{
        gitData()
       
     },[])
     console.log(data)
  return (
    <div>
      <Layout title={'home'}>
        {
         data ? data?.map((item)=>(
            <div>
                <a href={`/product-detail/${item.id}`}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <img src={item.images[1]} alt="" />
                </a>
            </div>
         )):<FallingLines
         color="#4fa94d"
         width="100"
         visible={true}
         ariaLabel="falling-circles-loading"
         />
         }
      </Layout>
    </div>
  )
}

export default Home
