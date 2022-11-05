import TextInput from "./Input";


const InputLayout = ({inputDescription, className, compType, value}) => {
    if(compType === "TextInput"){
    return (
        <div className={className}>
            {inputDescription}<TextInput value = {value}/>
        </div>
        );
        }
    }
  
 
 export default InputLayout;