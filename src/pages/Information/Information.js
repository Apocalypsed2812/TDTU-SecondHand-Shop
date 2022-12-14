import { faStar, faPen, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';
import styles from './Information.module.scss';
// import { useState, useEffect } from 'react';

// import { getMethod } from '~/utils/fetchData';
import avatar from '~/assets/images/avatar_post.jpg';

const cx = classNames.bind(styles);

function Information() {
    return (
        <>
            <div className={cx('container')}>
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
                            <div>Your Information</div>
                            <div>Your Post</div>
                        </div>
                        <div className={cx('container__wrapper-choose')}>
                            <button className={cx('container__wrapper-button')}>
                                <FontAwesomeIcon icon={faPen} />
                            </button>
                        </div>
                        <div className={cx('container__wrapper-content')}>
                            <div className={cx('container__form-group')}>
                                <label>Email</label>
                                <input type="text" value="ediphone@gmail.com" />
                                <FontAwesomeIcon icon={faEye} className={cx('container__form-group-icon')} />
                            </div>
                            <div className={cx('container__form-group')}>
                                <label>Phone</label>
                                <input type="text" value="123456789" />
                                <FontAwesomeIcon icon={faEye} className={cx('container__form-group-icon')} />
                            </div>
                            <div className={cx('container__form-group')}>
                                <label>Gender</label>
                                <input type="text" value="Male" />
                                <FontAwesomeIcon icon={faEye} className={cx('container__form-group-icon')} />
                            </div>
                            <div className={cx('container__form-group')}>
                                <label>Birthday</label>
                                <input type="text" value="18/03/2001" />
                                <FontAwesomeIcon icon={faEye} className={cx('container__form-group-icon')} />
                            </div>
                            <div className={cx('container__form-group')}>
                                <label>Sell</label>
                                <input type="text" value="No" />
                                <FontAwesomeIcon icon={faEye} className={cx('container__form-group-icon')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Information;
