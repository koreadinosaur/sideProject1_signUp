const TextArea = ({className, onChange, value}) => {
    return (
    <textarea className={className} value = {value} onChange={onChange}/>
    );
 }
 
 export default TextArea;