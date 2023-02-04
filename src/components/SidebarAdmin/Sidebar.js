import {
    faBell,
    faBuilding,
    faCalendarPlus,
    faCartShopping,
    faCircleUser,
    faCommentDots,
    faHome,
    faRightFromBracket,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { GlobalState } from '~/context/GlobalState';
import styles from './Sidebar.module.scss';
import './Sidebar.css';

const cx = classNames.bind(styles);

function Sidebar() {
    const navigate = useNavigate();
    const state = useContext(GlobalState);
    const setIsLogin = state.UserAPI.login[1];
    const setIsAdmin = state.UserAPI.admin[1];

    const handleLogout = () => {
        localStorage.clear();
        setIsLogin(false);
        setIsAdmin(false);
        navigate('/login');
    };
    return (
        <>
            <input type="checkbox" id="navbar__mobile-header" className={cx('nav__input-header')} />
            <label htmlFor="navbar__mobile-header" className={cx('container__header-overlay')}></label>
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
                            <NavLink to="/home" activeClassName={cx('active')}>
                                <FontAwesomeIcon icon={faHome} className={cx('icon')} />
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/post" activeClassName={cx('active')}>
                                <FontAwesomeIcon icon={faSearch} className={cx('icon')} />
                                <span>Post</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/user" activeClassName={cx('active')}>
                                <FontAwesomeIcon icon={faCommentDots} className={cx('icon')} />
                                <span>User</span>
                            </NavLink>
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
        </>
    );
}

export default Sidebar;
