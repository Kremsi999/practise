import axios from "axios";
import { useEffect, useState } from "react";
interface Product{
    id:number;
    title:string;
    description:string;
    category:string;
    image:string;
    price:number;
    rating: Rate;
}
  
interface Rate{
rate:number;
count:number;
}
function Product(){

    const [data, setData] = useState<Product[]>([]);
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        localStorage.setItem('data',JSON.stringify(response.data))
        setData(response.data);
        console.log(response.data)
      })
     
      .catch(error => {
        console.error(error);
      });
  }, []);
    return(
      <>
        <div className="flex flex-wrap p-3 xs:p-20">
      
            {data.map((product)=>(
            <div key={product.id} className=" justify-items-center border box-border size-39 border-indigo-600 my-4 mx-17 h-auto w-md">
              <h2 className="font-bold w-auto ">{product.title}</h2>
              <img className=" object-contain h-90 " src={product.image} />
              <p className="text-red-300">Price:{product.price}</p>
              <p>Count: {product.rating.count}</p>
              <p>Rate: {product.rating.rate}</p>
            </div>
          ))}
         
        </div>
        <div className="">
          <button  className="bg-teal-500 py-2 my-3 w-50 hover:bg-amber-100 mx-180" >Add</button>
        </div>
      </>
    )
}

export default Product