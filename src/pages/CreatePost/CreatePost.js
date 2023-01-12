import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';
import styles from './CreatePost.module.scss';
// import { useState, useEffect } from 'react';

// import { getMethod } from '~/utils/fetchData';
import avatar from '~/assets/images/avatar_post.jpg';

const cx = classNames.bind(styles);

function CreatePost() {
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('container__header')}>
                    <label htmlFor="navbar__mobile-header">
                        <FontAwesomeIcon className={cx('header__item-icon', 'header__item-mobile')} icon={faBars} />
                    </label>
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
                            <input type="text" id="title" />
                            <div className={cx('container__form-group')}>
                                <label htmlFor="merchandise">Merchandise Type</label>
                                <select id="merchandise">
                                    <option>Matiral</option>
                                </select>
                            </div>
                            <div className={cx('container__form-group')}>
                                <label htmlFor="price">Price</label>
                                <input type="text" id="price" />
                            </div>
                            <div className={cx('container__form-group')}>
                                <label htmlFor="description" className={cx('label__des')}>
                                    Description
                                </label>
                                <textarea rows="20" id="description" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreatePost;
