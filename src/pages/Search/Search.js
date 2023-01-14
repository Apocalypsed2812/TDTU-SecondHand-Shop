import { faChevronDown, faCommentDots, faBars, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';
import styles from './Search.module.scss';
// import { useState, useEffect } from 'react';

// import { getMethod } from '~/utils/fetchData';
import avatar from '~/assets/images/avatar_post.jpg';

const cx = classNames.bind(styles);

function Search() {
    return (
        <>
            <div className={cx('container')}>
                <label htmlFor="navbar__mobile-header" className={cx('navigation__mobile')}>
                    <FontAwesomeIcon className={cx('header__item-icon', 'header__item-mobile')} icon={faBars} />
                </label>
                <div className={cx('header')}>
                    <div className={cx('header__search-box')}>
                        <FontAwesomeIcon icon={faSearch} className={cx('header__search-icon')} />
                        <input type="text" placeholder="Search here..." />
                    </div>
                </div>
                <div className={cx('info')}>
                    <div className={cx('info__left')}>
                        <img src={avatar} alt="" className={cx('info__left-img')} />
                        <div className={cx('info__left-avatar')}>
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
                    <div className={cx('info__right')}>
                        <div className={cx('info__right-top')}>
                            <FontAwesomeIcon icon={faCommentDots} />
                        </div>
                        <div className={cx('info__right-bottom')}>
                            <div className={cx('info__right-item')}>
                                <span>Down</span>
                                <FontAwesomeIcon className={cx('info__right-icon')} icon={faChevronDown} />
                            </div>
                            <button className={cx('info__right-button')}>Filter</button>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('grid', 'wide')}>
                        <div className={cx('row')}>
                            <div className={cx('col', 'l-6')}>
                                <div className={cx('content__item')}></div>
                            </div>
                            <div className={cx('col', 'l-6')}>
                                <div className={cx('content__item')}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;
