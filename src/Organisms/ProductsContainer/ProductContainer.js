import React,{useState} from 'react'
import ProductsSidebar from '../productsidebar/ProductsSidebar'
import Productscards from '../productCard/Productscards'
// import Footer from '../Footer/Footer'
import styles from './productContainer.module.scss'

function ProductContainers() {

  const sidebardata = [
    { id: 0, name: "All" , img:"https://pbs.twimg.com/media/FS-UkSNagAAVdtt?format=png&name=900x900" },
    { id: 1, name: "Fresh Vegetables" , img:"https://seed2plant.in/cdn/shop/products/carrotseeds_800x.jpg?v=1604032858" },
    { id: 2, name: "Fresh Fruits", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12-ZKcoBDFxln0RGUo5Dd2gRGVleff35T0VzJ1JeERFV_xPDcjt-QjE7skXYvvuPWRU0&usqp=CAU"},
    { id: 3, name: "Seasonal", img:"https://m.media-amazon.com/images/I/31cXlUcvRVL._AC_UF1000,1000_QL80_.jpg" },
    { id: 4, name: "Milk", img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/products/sliding_image/19925a.jpg?ts=1698663584" },
    { id: 5, name: "Snacks", img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/images/products/full_screen/pro_496687.jpg?ts=1689854750" },
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