export const getProductDiscount = (cartdata) => {
    let total = 0;
    cartdata?.items?.reduce((accumulator, item) =>{
        if(item.oldPrice !== item.newPrice){
            const oldPrice = item.oldPrice?.split("$")?.[1]
            const newPrice = item.newPrice?.split("$")?.[1]
            if(oldPrice && newPrice){
                total += (oldPrice - newPrice) * cartdata?.productIncrement?.[item.id]
            }
        }
        return accumulator
    },0)
    return total
  }

export  const getMRP = (cartdata) =>{
        let MRP = 0;
        cartdata?.items?.reduce((accumulator, item) =>{
        const oldPrice = item.oldPrice?.split("$")?.[1] 
        MRP += oldPrice * cartdata?.productIncrement?.[item.id]
        return accumulator
     }, 0)
        return MRP
  }