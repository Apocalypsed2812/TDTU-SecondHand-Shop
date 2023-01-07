import { faChevronDown, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
// import { useState, useEffect } from 'react';

// import { getMethod } from '~/utils/fetchData';
import avatar from '~/assets/images/avatar_post.jpg';
import { TOKEN_NAME } from '~/credentials';

const cx = classNames.bind(styles);

function Home() {
    // const [productList, setProductList] = useState([]);

    // const quantityProduct = 6;

    // useEffect(() => {
    //     const getProducts = async () => {
    //         let response = await getMethod('product');
    //         return response;
    //     };
    //     getProducts()
    //         .then((res) => {
    //             if (res.success) {
    //                 console.log(res.products);
    //                 setProductList(res.products);
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);
    // let data = localStorage.getItem(TOKEN_NAME);
    // data = JSON.parse(data);

    return (
        <>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <div className={cx('header__item')}>{/* <span>Người dùng: {data.name}</span> */}</div>
                    <div className={cx('header__item')}>
                        <span>Mertirial</span>
                        <FontAwesomeIcon className={cx('header__item-icon')} icon={faChevronDown} />
                    </div>
                    <div className={cx('header__item')}>
                        <span>Down</span>
                        <FontAwesomeIcon className={cx('header__item-icon')} icon={faChevronDown} />
                    </div>
                    <div className={cx('header__item')}>
                        <span>Newest</span>
                        <FontAwesomeIcon className={cx('header__item-icon')} icon={faChevronDown} />
                    </div>
                    <button className={cx('header__button')}>Search</button>
                </div>
                <div className={cx('posts')}>
                    <div className={cx('posts__header')}>
                        <div className={cx('posts__header-left')}>
                            <img src={avatar} alt="" className={cx('posts__header-img')} />
                            <div className={cx('posts__header-left-avatar')}>
                                <p>Trần Thái Bảo</p>
                                <p>8/10/2022</p>
                            </div>
                        </div>
                        <div className={cx('posts__header-right')}>
                            <FontAwesomeIcon className={cx('header__item-icon')} icon={faEllipsis} />
                        </div>
                    </div>
                    <img src="/images/hp.jpg" alt="" className={cx('posts__img')} />
                    <div className={cx('posts__content')}>
                        <span className={cx('posts__like')}>Like</span>
                        <span>Comment</span>
                        <p>12 lượt thích</p>
                        <p className={cx('posts__title')}>Post's title</p>
                        <p>Price : XXXXX VND</p>
                        <p>Merchandise type: Mertirial</p>
                    </div>
                    <div className={cx('posts__button')}>
                        <Link to="/post_detail" className={cx('posts__button-link')}>
                            View Detail
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
