import React from 'react'
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
const Login = () => {

    const navigate = useNavigate();


    const responseGoogle = (response) => {
        localStorage.setItem('user', JSON.stringify(response.profileObj))
        const isAuthenticated = localStorage.getItem("user")
        if (isAuthenticated) {
            navigate("/")
        }
    }

    return (
        <div className="google_login">
            <p className="text_title">BLINDSIDE</p>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                render={(renderprops) => (
                    <button
                        type='button'
                        className='button_login'
                        onClick={renderprops.onClick}
                        disabled={renderprops.disabled}
                    >
                        <FcGoogle className='' /> Sign in with Google
                    </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy='single_host_origin'
            />
        </div>
    )
}

export default Login