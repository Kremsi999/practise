interface InputFields{
    name:string;
    value:string | number;
    label?:string;
    placeholder:string;
    type:string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField=({name, value, label, placeholder, type, onChange }:InputFields)=>{
    return (
        <div className="form-group mx-auto  p-2  w-90  grid grid-cols-2 gap-4">
          {label && <label htmlFor="input-field" className="text-center">{label}</label>}
          <input
            type={type}
            value={value}
            name={name}
            className="form-control border-1 text-center delay-[trans]"
            placeholder={placeholder}
            onChange={onChange}
            
          />
        </div>
      );
}

export default InputField