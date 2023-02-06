import { faStar, faPen, faEye, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Information.module.scss';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import { postMethod } from '~/utils/fetchData';
import avatar from '~/assets/images/avatar_post.jpg';

const cx = classNames.bind(styles);

function Information() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleEditInformation = (e) => {
        e.preventDefault();
        const body = new FormData(e.target);
        postMethod('post/add', body)
            .then((res) => {
                if (res.success) {
                    // setProducts([...products, res.product]);
                    Swal.fire({
                        title: 'Success',
                        text: 'Edit information successfully',
                        icon: 'success',
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: res.message,
                        icon: 'error',
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
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
                            <button className={cx('container__wrapper-button')} onClick={handleEditInformation}>
                                <FontAwesomeIcon icon={faPen} />
                            </button>
                        </div>
                        <div className={cx('container__wrapper-content')}>
                            <form>
                                <div className={cx('container__form-group')}>
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        value={email}
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        className={cx('container__form-group-icon', 'hide-on-mobile')}
                                    />
                                </div>
                                <div className={cx('container__form-group')}>
                                    <label>Phone</label>
                                    <input
                                        type="number"
                                        value={phone}
                                        name="phone"
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        className={cx('container__form-group-icon', 'hide-on-mobile')}
                                    />
                                </div>
                                <div className={cx('container__form-group')}>
                                    <label>Gender</label>
                                    <input type="text" value="Male" name="gender" />
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        className={cx('container__form-group-icon', 'hide-on-mobile')}
                                    />
                                </div>
                                <div className={cx('container__form-group')}>
                                    <label>Birthday</label>
                                    <input type="text" value="18/03/2001" name="birthday" />
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        className={cx('container__form-group-icon', 'hide-on-mobile')}
                                    />
                                </div>
                                <div className={cx('container__form-group')}>
                                    <label>Sell</label>
                                    <input type="text" value="No" />
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        className={cx('container__form-group-icon', 'hide-on-mobile')}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Information;
