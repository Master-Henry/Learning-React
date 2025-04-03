import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Alert = ({children, onClose}: any ) => {
  return (
    <div className="alert alert-primary alert-dismissible">
        {children}
        <button type="button" className="btn-close" onClick={onClose()}data-bs-dismiss="alert"/>
        
        </div>
  )
}

export default Alert