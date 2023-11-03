import React,{useState} from 'react'
import ProductsSidebar from '../productsidebar/ProductsSidebar'
import Productscards from '../productCard/Productscards'
// import Footer from '../Footer/Footer'
import styles from './productContainer.module.scss'

function ProductContainers() {

  const sidebardata = [
    { id: 0, name: "All" },
    { id: 1, name: "Fresh Vegetables" },
    { id: 2, name: "Fresh Fruits" },
    { id: 3, name: "Seasonal" },
    { id: 4, name: "Milk" },
    { id: 5, name: "Snacks" },
  ];

const[value, setValue]= useState(sidebardata[0])
  return (
  <div className={styles.container_main_div}>
    <div>
      <ProductsSidebar sidebardata={sidebardata}  setValue={setValue}/>
    </div>
       <Productscards sidebardata={sidebardata} value={value}/>
  </div>
  )
}

export default ProductContainers