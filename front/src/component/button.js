const Button = ({className,buttonContent, onClick}) => {
    return (<button className = {className} onClick = {onClick}>{buttonContent}</button>
    );
 }
 
 export default Button;