import {
    faBell,
    faBuilding,
    faCalendarPlus,
    faCartShopping,
    faCircleUser,
    faCommentDots,
    faGift,
    faHome,
    faRightFromBracket,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { GlobalState } from '~/context/GlobalState';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    const navigate = useNavigate();
    const state = useContext(GlobalState);
    const [isLogin, setIsLogin] = state.UserAPI.login;
    const [isAdmin, setIsAdmin] = state.UserAPI.admin;

    const handleLogout = () => {
        localStorage.clear();
        setIsLogin(false);
        setIsAdmin(false);
        navigate('/login');
    };
    return (
        <section className={cx('sidebar')}>
            <header>
                <div className={cx('image-text')}>
                    <div className={cx('text', 'header-text')}>
                        <span className={cx('name')}>TDTU</span>
                        <span className={cx('name')}>Secondhand</span>
                        <span className={cx('name')}>Shop</span>
                    </div>
                </div>
            </header>
            <div className={cx('sidebar__menu')}>
                <ul>
                    <li>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} className={cx('icon')} />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/search">
                            <FontAwesomeIcon icon={faSearch} className={cx('icon')} />
                            <span>Search</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/chat">
                            <FontAwesomeIcon icon={faCommentDots} className={cx('icon')} />
                            <span>Message</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/create_post">
                            <FontAwesomeIcon icon={faCalendarPlus} className={cx('icon')} />
                            <span>Create Post</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/history">
                            <FontAwesomeIcon icon={faCartShopping} className={cx('icon')} />
                            <span>History</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/notifications">
                            <FontAwesomeIcon icon={faBell} className={cx('icon')} />
                            <span>Notifications</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <FontAwesomeIcon icon={faBuilding} className={cx('icon')} />
                            <span>Policy</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/information">
                            <FontAwesomeIcon icon={faCircleUser} className={cx('icon')} />
                            <span>My Information</span>
                        </Link>
                    </li>
                    <li onClick={handleLogout}>
                        <Link to="">
                            <FontAwesomeIcon icon={faRightFromBracket} className={cx('icon')} />
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Sidebar;
