import TextInput from "./input";


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