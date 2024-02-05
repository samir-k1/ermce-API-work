import React, { useEffect, useState } from 'react'
import Layout from '../component/layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';



const ProductDetail = () => {
    const id=useParams().id;
    const [detail,setDetail]=useState({});

    const details =async(id)=>{
        const data= await axios.get(`https://dummyjson.com/products/${id}`)
        setDetail(data.data)
    }
    useEffect(()=>{
details(id)

    },[id])
    console.log(detail)
    // const id = params()
  return (
    <div>
      <Layout title='Prduct Detail'>
        <div>
            
        <h1>{detail?.title}</h1>
        <p>{detail?.description}</p>
        <p>price : {detail?.price}</p>
        <p>brand :{detail?.brand}</p>
        <p>category:{detail?.category}</p>
       
        {detail?.images?.map((item)=>( <img src={item} alt="" />))}
        </div>
     
      </Layout>

    </div>
  )
}

export default ProductDetail
