import React,{useState} from 'react'
import ProductsSidebar from '../ProductSideBar/ProductsSidebar'
import Productscards from '../ProductCard/Productscards'
import Footer from '../Footer/Footer'
import styles from './ProductContainer.module.scss'

function ProductContainers() {

  const[value, setValue]= useState("All")
  return (
    <div className={styles.container_main_div}>

      
       <ProductsSidebar setValue={setValue}/>
       
       <Productscards value={value}/>

      
       
    </div>
  )
}

export default ProductContainers