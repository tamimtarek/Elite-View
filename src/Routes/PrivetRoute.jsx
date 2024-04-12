import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(!user){
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivetRoute;