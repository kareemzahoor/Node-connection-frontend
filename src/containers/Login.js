import LoginForm from "../components/Login";
import { URL } from "../config/api"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()

    const parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

    const login = (values) => {
        var config = {
            method: 'post',
            url: `${URL}/api/users/login`,
            headers: {},
            data: values
        };

        axios(config)
            .then((response) => {
                console.log(parseJwt(response.data.token))
                localStorage.setItem("token", response.data.token)
                window.location.reload();
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    }
    return (
        <div className="container">
            <div className="full-height row justify-content-center">
                <div className="col-6">
                    <LoginForm login={login} />
                </div>
            </div>
        </div>
    )
}

export default Login;