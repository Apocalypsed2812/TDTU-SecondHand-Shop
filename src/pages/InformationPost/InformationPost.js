import { faStar, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './InformationPost.module.scss';
// import { useState, useEffect } from 'react';

// import { getMethod } from '~/utils/fetchData';
import avatar from '~/assets/images/avatar_post.jpg';

const cx = classNames.bind(styles);

function InformationPost() {
    return (
        <>
            <div className={cx('container')}>
                <label htmlFor="navbar__mobile-header" className={cx('navigation__mobile')}>
                    <FontAwesomeIcon className={cx('header__item-icon', 'header__item-mobile')} icon={faBars} />
                </label>
                <div className={cx('container__header')}>
                    <img src={avatar} alt="" className={cx('container__header-img')} />
                    <div className={cx('container__header-avatar')}>
                        <p>Trần Thái Bảo</p>
                        <p>51900000</p>
                        <p>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </p>
                    </div>
                </div>
                <div className={cx('container__content')}>
                    <div className={cx('container__wrapper')}>
                        <div className={cx('container__wrapper-header')}>
                            <div>
                                <Link to="/information">Your Information</Link>
                            </div>
                            <div>
                                <Link to="/information_post">Your Post</Link>
                            </div>
                        </div>
                        <div className={cx('container__wrapper-choose')}>
                            <div className={cx('container__wrapper-item')}>
                                <span>Selling</span>
                                <FontAwesomeIcon className={cx('container__wrapper-icon')} icon={faChevronDown} />
                            </div>
                            <button className={cx('container__wrapper-button')}>Filter</button>
                        </div>
                        <div className={cx('container__wrapper-content')}>
                            <div className={cx('grid', 'wide')}>
                                <div className={cx('row')}>
                                    <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                                        <div className={cx('content__item')}></div>
                                    </div>
                                    <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                                        <div className={cx('content__item')}></div>
                                    </div>
                                    <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                                        <div className={cx('content__item')}></div>
                                    </div>
                                    <div className={cx('col', 'l-4', 'm-12', 'c-12')}>
                                        <div className={cx('content__item')}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InformationPost;
