import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';
import styles from './CreatePost.module.scss';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import { postMethod } from '~/utils/fetchData';
import avatar from '~/assets/images/avatar_post.jpg';

const cx = classNames.bind(styles);

function CreatePost() {
    //Thêm dữ liệu
    const handleAddPost = (e) => {
        e.preventDefault();
        const body = new FormData(e.target);
        postMethod('post/add', body)
            .then((res) => {
                if (res.success) {
                    // setProducts([...products, res.product]);
                    Swal.fire({
                        title: 'Success',
                        text: 'Add post successfully',
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
                    {/* <label htmlFor="navbar__mobile-header">
                        <FontAwesomeIcon className={cx('header__item-icon', 'header__item-mobile')} icon={faBars} />
                    </label> */}
                    <h3 className={cx('container__title')}>Create your post</h3>
                </div>
                <form>
                    <div className={cx('container__left')}>
                        <div className={cx('container__file')}>
                            <div className={cx('container__file-image')}>
                                <h3>Upload Image</h3>
                                <div className={cx('container__file-choose')}>
                                    <input type="file" />
                                </div>
                            </div>
                            <div className={cx('container__file-video')}>
                                <h3>Upload Video</h3>
                                <div className={cx('container__file-choose')}>
                                    <input type="file" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('container__right')}>
                        <div className={cx('container__text')}>
                            <div className={cx('container__text-header')}>
                                <label htmlFor="title">Title</label>
                                <button className={cx('container__text-sell')}>
                                    <span>sell</span>
                                    Sold
                                </button>
                            </div>
                            <input type="text" id="title" name="title" />
                            <div className={cx('container__form-group')}>
                                <label htmlFor="merchandise">Merchandise Type</label>
                                <select id="merchandise" name="merchandise">
                                    <option>Matiral</option>
                                </select>
                            </div>
                            <div className={cx('container__form-group')}>
                                <label htmlFor="price">Price</label>
                                <input type="text" id="price" name="price" />
                            </div>
                            <div className={cx('container__form-group')}>
                                <label htmlFor="description" className={cx('label__des')}>
                                    Description
                                </label>
                                <textarea rows="20" id="description" name="description" />
                            </div>
                        </div>
                        <button onClick={handleAddPost}>Add</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreatePost;
