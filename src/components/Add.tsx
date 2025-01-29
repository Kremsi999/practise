import { useState } from "react";
import InputField from "./inputField"



interface InputState{
  title:string;
  price:number;
  description:string;
  category:string;
  submit:string;
}
const Add=()=>{
  const [inputValue, setInputValue] = useState<InputState>({title:"",price:0,description : "",category :"",submit:""});
  const { title,price,description,category } = inputValue;
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const regexPatterns = {
    title: /^[A-Za-z\s]+$/, 
    price:/^(?:\d+|\d+\.\d{1,2})?$/, 
    description: /^.{1,100}$/, 
    category: /^[A-Za-z\s]+$/, 
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; 

    const regex = regexPatterns[name as keyof typeof regexPatterns];
    if (regex && !regex.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: `Invalid ${name}` }));
      return;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
    setInputValue((prevState) => ({
    ...prevState,
    [name]: name === "price" ? parseFloat(value) || 0 : value, 
  }));
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
        value={title}
        placeholder="Title"
        label="Write Title"
        onChange={handleChange}
        />
         {errors.title && <span className="text-red-500 mx-35">{errors.title}</span>}
        <InputField
        type="number"
        name="price"
        value={price}
        placeholder="Price"
        label="Write Price"
        onChange={handleChange}
        />
         {errors.price && <span className="text-red-500 mx-35">{errors.price}</span>}
         <InputField
        type="text"
        name="description"
        value={description}
        placeholder="Description"
        label="Write Description"
        onChange={handleChange}
        />
         {errors.description && <span className="text-red-500 mx-30">{errors.description}</span>}
         <InputField
        type="text"
        name="category"
        value={category}
        placeholder="Category"
        label="Write Category"
        onChange={handleChange}
        />
         {errors.category && <span className="text-red-500 mx-30">{errors.category}</span>}

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