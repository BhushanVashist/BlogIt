import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div>
            <h2>Sorry! This Page doesn't exist.</h2>
            <Link to="/">Go back to home.</Link>
        </div>
    );
}
 
export default Error;