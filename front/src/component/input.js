import InputLayout from "./inputLayout";

const TextInput = ({placeHolder, onChange, value, type, className, domainInputAvailability}) => {
    
    if(className === "emailDomain__input" && domainInputAvailability === true) {
        return (<input input className = {className} type={type} placeholder={placeHolder} value = {value} onChange={onChange}></input>);
    }

    else if(className === "emailDomain__input") {
        return (<input input className = {className} type={type} placeholder={placeHolder} value = {value} onChange={onChange} disabled></input>);
    }
 
    else if(!type) {
        return (<input className = {className} type="text" placeholder={placeHolder} value = {value} onChange={onChange}></input>);
    }

    return (<input input className = {className} type={type} placeholder={placeHolder} value = {value} onChange={onChange}></input>);
 }
 
 export default TextInput;