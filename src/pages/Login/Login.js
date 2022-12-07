import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import { postMethod } from '../../utils/fetchData';
import { GlobalState } from '../../context/GlobalState';
import { TOKEN_NAME } from '../../credentials';
import google from '~/assets/images/google.jpg';

const cx = classNames.bind(styles);

function Login() {
    let navigate = useNavigate();
    const state = useContext(GlobalState);

    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState({ username: '', password: '' });
    const handleChangeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const { login } = state.UserAPI;
    const { admin } = state.UserAPI;
    const [isLogin, setIsLogin] = login;
    const [isAdmin, setIsAdmin] = admin;
    console.log(user);
    const handleLogin = () => {
        postMethod('login', user)
            .then((response) => {
                console.log(response);
                if (response.success) {
                    localStorage.setItem(TOKEN_NAME, response.token);
                    if (response.user.role === 'admin') {
                        setIsLogin(true);
                        setIsAdmin(true);
                        navigate('/admin');
                    } else {
                        setIsLogin(true);
                        navigate('/');
                    }
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: response.message,
                        icon: 'error',
                    });
                }
            })
            .catch((err) => {
                Swal.fire({
                    title: 'Error',
                    text: 'Invalid Username Or Password',
                    icon: 'error',
                });
            });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.username.trim() === '') {
            Swal.fire({
                title: 'Error',
                text: 'Username can not be empty',
                icon: 'error',
            });
            return;
        }
        if (user.password.trim() === '') {
            Swal.fire({
                title: 'Error',
                text: 'Password can not be empty',
                icon: 'error',
            });
            return;
        }
        handleLogin();
    };

    return (
        <div className={cx('container')}>
            <div className={cx('container__left')}>
                <h1>tdtu secondhand shop</h1>
            </div>
            <div className={cx('container__right')}>
                <div className={cx('container__right-wrapper')}>
                    <h2>Log in</h2>
                    <button>
                        <img src={google} alt="google" className={cx('icon__google')} />
                        <span>Login with TDTU email</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
