import { useLocation } from "react-router-dom";


const SuccessPage = ()=>{
    const location = useLocation();
    const { firstName } = location.state || {};
    return(
        <h1> Thank {firstName} you for submiting the form </h1>
    )
}


export default SuccessPage