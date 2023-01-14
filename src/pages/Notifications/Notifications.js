import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';
import styles from './Notifications.module.scss';
// import { useState, useEffect } from 'react';

// import { getMethod } from '~/utils/fetchData';
import avatar from '~/assets/images/avatar_post.jpg';

const cx = classNames.bind(styles);

function Notifications() {
    return (
        <>
            <div className={cx('container')}>
                <label htmlFor="navbar__mobile-header" className={cx('navigation__mobile')}>
                    <FontAwesomeIcon className={cx('header__item-icon', 'header__item-mobile')} icon={faBars} />
                </label>
                <h3 className={cx('container__title')}>Notifications</h3>
                <div className={cx('container__wrapper')}>
                    <div className={cx('container__wrapper-item')}>
                        <p>Vote rating for NHÀ BẢO 2000m2</p>
                        <button>Vote</button>
                    </div>
                    <div className={cx('container__wrapper-item')}>
                        <p>Vote rating for NHÀ BẢO 2000m2</p>
                        <button>Vote</button>
                    </div>
                    <div className={cx('container__wrapper-item')}>
                        <p>Vote rating for NHÀ BẢO 2000m2</p>
                        <button>Vote</button>
                    </div>
                    <div className={cx('container__wrapper-item')}>
                        <p>Vote rating for NHÀ BẢO 2000m2</p>
                        <button>Vote</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notifications;
