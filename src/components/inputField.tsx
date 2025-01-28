interface InputFields{
    name:string;
    value:string | number;
    label?:string;
    placeholder:string;
    type:string;
    onChange:(value1:string,value:string)=>void;
}
const InputField=({name, value, label, placeholder, type, onChange }:InputFields)=>{
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange(name,e.target.value);
      };
    return (
        <div className="form-group mx-auto  p-2  w-90  grid grid-cols-2 gap-4">
          {label && <label htmlFor="input-field" className="text-center">{label}</label>}
          <input
            type={type}
            value={value}
            className="form-control border-1 text-center delay-[trans]"
            placeholder={placeholder}
            onChange={handleChange}
            
          />
        </div>
      );
}

export default InputField