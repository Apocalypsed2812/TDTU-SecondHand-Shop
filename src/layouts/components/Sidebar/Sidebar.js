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
        <nav className={cx('sidebar')}>
            <header>
                <div className={cx('image-text')}>
                    <div className={cx('text', 'header-text')}>
                        <span className={cx('name')}>TDTU</span>
                        <span className={cx('name')}>Secondhand</span>
                        <span className={cx('name')}>Shop</span>
                    </div>
                </div>
            </header>

            <div className={cx('menu-bar')}>
                <div className={cx('menu')}>
                    <ul className={cx('menu-links')}>
                        {/* <li className={cx('search-box')}>
                            <FontAwesomeIcon icon={faSearch} className={cx('icon')} />
                            <input type="search" placeholder="Search..." />
                        </li> */}
                        <li>
                            <Link to="/">
                                <FontAwesomeIcon icon={faHome} className={cx('icon')} />
                                <span className={cx('text', 'nav-text')}>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/search">
                                <FontAwesomeIcon icon={faSearch} className={cx('icon')} />
                                <span className={cx('text', 'nav-text')}>Search</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <FontAwesomeIcon icon={faCommentDots} className={cx('icon')} />
                                <span className={cx('text', 'nav-text')}>Message</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/create_post">
                                <FontAwesomeIcon icon={faCalendarPlus} className={cx('icon')} />
                                <span className={cx('text', 'nav-text')}>Create Post</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <FontAwesomeIcon icon={faCartShopping} className={cx('icon')} />
                                <span className={cx('text', 'nav-text')}>History</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <FontAwesomeIcon icon={faBell} className={cx('icon')} />
                                <span className={cx('text', 'nav-text')}>Notifications</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <FontAwesomeIcon icon={faBuilding} className={cx('icon')} />
                                <span className={cx('text', 'nav-text')}>Policy</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/information">
                                <FontAwesomeIcon icon={faCircleUser} className={cx('icon')} />
                                <span className={cx('text', 'nav-text')}>My Information</span>
                            </Link>
                        </li>
                        <li onClick={handleLogout}>
                            <Link to="">
                                <FontAwesomeIcon icon={faRightFromBracket} className={cx('icon')} />
                                <span className={cx('text', 'nav-text')}>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={cx('bottom-content')}>
                    {/* <li className={cx('mode')}>
                        <div className={cx('moon-sun')}>
                            <i className="bx bx-moon icon moon"></i>
                            <i className="bx bx-sun icon sun"></i>
                        </div>
                        <span className={cx('mode-text text')}>Dark Mode</span>
                        <div className={cx('toggle-switch')}>
                            <span className={cx('switch')}></span>
                        </div>
                    </li> */}
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
