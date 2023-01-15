import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';
import { faStar, faBars } from '@fortawesome/free-solid-svg-icons';

// import { getMethod, postMethod } from '~/utils/fetchData';
// import { GlobalState } from '~/context/GlobalState';
import styles from './History.module.scss';

const cx = classNames.bind(styles);

function History() {
    return (
        <div className={cx('container')}>
            <label htmlFor="navbar__mobile-header" className={cx('navigation__mobile')}>
                <FontAwesomeIcon className={cx('header__item-icon', 'header__item-mobile')} icon={faBars} />
            </label>
            <h3 className={cx('container__title')}>Product is bought</h3>
            <div className={cx('container__wrapper')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('container__wrapper-header')}>
                            <div className={cx('col', 'l-4')}>
                                <p>Name</p>
                            </div>
                            <div className={cx('col', 'l-4')}>
                                <p>Price</p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <p>Your rate</p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <p>Action</p>
                            </div>
                        </div>
                        <div className={cx('container__wrapper-item')}>
                            <div className={cx('col', 'l-4')}>
                                <p>Vote rating for NHÀ BẢO 2000m2</p>
                            </div>
                            <div className={cx('col', 'l-4')}>
                                <p>12,000,000,000</p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <p>
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                </p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <button>View Detail</button>
                            </div>
                        </div>
                        <div className={cx('container__wrapper-item')}>
                            <div className={cx('col', 'l-4')}>
                                <p>Vote rating for NHÀ BẢO 2000m2</p>
                            </div>
                            <div className={cx('col', 'l-4')}>
                                <p>12,000,000,000</p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <p>
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                </p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <button>View Detail</button>
                            </div>
                        </div>
                        <div className={cx('container__wrapper-item')}>
                            <div className={cx('col', 'l-4', 'hide-on-mobile')}>
                                <p>Vote rating for NHÀ BẢO 2000m2</p>
                            </div>
                            <div className={cx('col', 'l-4')}>
                                <p>12,000,000,000</p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <p>
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                </p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <button>View Detail</button>
                            </div>
                        </div>
                        <div className={cx('container__wrapper-item')}>
                            <div className={cx('col', 'l-4')}>
                                <p>Vote rating for NHÀ BẢO 2000m2</p>
                            </div>
                            <div className={cx('col', 'l-4')}>
                                <p>12,000,000,000</p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <p>
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                </p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <button>View Detail</button>
                            </div>
                        </div>
                        <div className={cx('container__wrapper-item')}>
                            <div className={cx('col', 'l-4')}>
                                <p>Vote rating for NHÀ BẢO 2000m2</p>
                            </div>
                            <div className={cx('col', 'l-4')}>
                                <p>12,000,000,000</p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <p>
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                </p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <button>View Detail</button>
                            </div>
                        </div>
                        <div className={cx('container__wrapper-item')}>
                            <div className={cx('col', 'l-4')}>
                                <p>Vote rating for NHÀ BẢO 2000m2</p>
                            </div>
                            <div className={cx('col', 'l-4')}>
                                <p>12,000,000,000</p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <p>
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                </p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <button>View Detail</button>
                            </div>
                        </div>
                        <div className={cx('container__wrapper-item')}>
                            <div className={cx('col', 'l-4')}>
                                <p>Vote rating for NHÀ BẢO 2000m2</p>
                            </div>
                            <div className={cx('col', 'l-4')}>
                                <p>12,000,000,000</p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <p>
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                </p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <button>View Detail</button>
                            </div>
                        </div>
                        <div className={cx('container__wrapper-item')}>
                            <div className={cx('col', 'l-4')}>
                                <p>Vote rating for NHÀ BẢO 2000m2</p>
                            </div>
                            <div className={cx('col', 'l-4')}>
                                <p>12,000,000,000</p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <p>
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                    <FontAwesomeIcon icon={faStar} className={cx('icon__star')} />
                                </p>
                            </div>
                            <div className={cx('col', 'l-2')}>
                                <button>View Detail</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;
