
interface Props {
    children: string
    color?:"primary" | "secondary" | "danger"; 
    onClick: () => void;
    
}
const Button = ({children}: Props) => {
  return (
    <button type="button" className="btn btn-primary">{children}</button>
  
)
}

export default Button  