const RadioButton = ({className,name, onClick}) => {
    return (
    <label className={className}>
        <div className="gender__tag">남</div><input className="gender__click" name ={name} type="radio" value="남" onClick={onClick}></input>
        <div className="gender__tag">여</div><input className="gender__click"name ={name} type="radio" value="여" onClick={onClick}></input>
    </label>

    );
 }
 
 export default RadioButton;