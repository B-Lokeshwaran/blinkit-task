import React,{useState} from 'react'
import ProductsSidebar from '../ProductSideBar/ProductsSidebar'
import Productscards from '../ProductCard/Productscards'
import Footer from '../Footer/Footer'
import './ProductContainer.css'

function ProductContainers() {

  const[value, setValue]= useState("All")
  return (
    <div className="container-main-div">

      
       <ProductsSidebar setValue={setValue}/>
       
       <Productscards value={value}/>

      
       
    </div>
  )
}

export default ProductContainers