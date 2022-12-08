import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { faCaretLeft, faCaretRight, faClose } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';

import styles from './PostDetail.module.scss';
import { GlobalState } from '~/context/GlobalState';
import { getMethod, getMethodId, postMethod } from '~/utils/fetchData';
import avatar from '~/assets/images/avatar_post.jpg';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function PostDetail() {
    // const state = useContext(GlobalState);
    // const isLogin = state.UserAPI.login[0];
    // const [cart, setCart] = state.UserAPI.cart;

    // let navigate = useNavigate();

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('wrapper__icon')}>
                    <FontAwesomeIcon icon={faCircleXmark} className={cx('wrapper__icon-close')} />
                </div>
                <div className={cx('wrapper__content')}>
                    <div className={cx('wrapper__content-img')}>
                        <img src={avatar} alt="" />
                        <FontAwesomeIcon icon={faCaretLeft} className={cx('wrapper__content-img-left')} />
                        <FontAwesomeIcon icon={faCaretRight} className={cx('wrapper__content-img-right')} />
                    </div>
                    <div className={cx('wrapper__content-text')}>
                        <div className={cx('wrapper__content-avatar')}>
                            <img src={avatar} alt="" />
                            <p>Trần Thái Bảo</p>
                        </div>
                        <div className={cx('wrapper__content-time')}>
                            <span>19:30</span>
                            <span>25/12/2022</span>
                        </div>
                        <p className={cx('wrapper__content-title')}>Post's Title</p>
                        <p className={cx('wrapper__content-category')}>Merchandise Type</p>
                        <p className={cx('wrapper__content-price')}>12.000.000</p>
                        <p className={cx('wrapper__content-description')}>
                            Vai trò của báo cáo tài chính là cung cấp những thông tin hữu ích của công ty đối thủ, tình
                            hình tài chính và những thay đổi trong tình hình tài chính cho các đối tượng sử dụng thông
                            tin như nhà đầu tư, nhà cung cấp, người cho vay và các bên liên quan khác
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostDetail;
