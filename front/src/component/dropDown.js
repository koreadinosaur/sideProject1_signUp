const DropDown = (props) => {
    return (
    <select onChange={props.onChange}>
        {props.list.map((item)=> <option key={item} className={`option__${item}`}>{item}</option>)}
    </select>

    );
 }
 
 export default DropDown;