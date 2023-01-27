import SignupForm from "../components/SignupForm";
import axios from "axios";
import { URL } from "../config/api"

function Signup() {
    const signup = (values) => {
        console.log(values)
        var config = {
            method: 'post',
            url: `${URL}/api/users`,
            data: values
        };
        axios(config)
            .then((res) => {
                console.log("res--->", res)
            })
            .catch(err => console.log("err", err.response.data))
    }
    return (
        <div className="container">
            <div className="full-height row justify-content-center">
                <div className="col-6">
                    <SignupForm signup={signup} />
                </div>
            </div>
        </div>
    )
}

export default Signup;