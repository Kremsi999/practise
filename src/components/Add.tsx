import { useState } from "react";
import InputField from "./inputField"



interface InputState{
  name:string;
  price:number;
  description:string;
  category:string;
  submit:string;
}
const Add=()=>{
  const [inputValue, setInputValue] = useState<InputState>({ name: "",price:0,description : "",category :"",submit:""});
  const { name,price,description,category } = inputValue;
  const handleChange = (inputValue:string) => {
    setInputValue((prevState)=>({
      ...prevState,
      [name]: name==="price" ? parseFloat(inputValue) || 0 :inputValue
    }))
  };
    return(
      <div >
         <h1 className="mt-30 text-xl font-bold text-center hover:text-style123  ">
          Form to add new product
        </h1>
        <form className="mx-auto border-2 p-2 my-20 w-100  ">
       
        <InputField
        type="text"
        name="title"
        value={name}
        placeholder="Title"
        label="Write Title"
        onChange={handleChange}
        />
        <InputField
        type="number"
        name="price"
        value={price}
        placeholder="Price"
        label="Write Price"
        onChange={handleChange}
        />
         <InputField
        type="text"
        name="description"
        value={description}
        placeholder="Description"
        label="Write Description"
        onChange={handleChange}
        />
         <InputField
        type="text"
        name="category"
        value={category}
        placeholder="Category"
        label="Write Category"
        onChange={handleChange}
        />

        <InputField
        type="submit"
        name="submit"
        value="submit"
        placeholder="Submit"
        onChange={handleChange}
        />
         
        
        </form>
        
      </div>
      
   
    )
}

export default Add