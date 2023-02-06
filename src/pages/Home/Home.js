import {
    faBars,
    faChevronDown,
    faEllipsis,
    faCircleXmark,
    faCaretLeft,
    faCaretRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import { useState, useContext } from 'react';

// import { getMethod } from '~/utils/fetchData';
import avatar from '~/assets/images/avatar_post.jpg';
import { GlobalState } from '~/context/GlobalState';
// import { TOKEN_NAME } from '~/credentials';

const cx = classNames.bind(styles);

function Home() {
    const state = useContext(GlobalState);
    const [posts, setPosts] = state.UserAPI.posts;

    const [showModalPost, setShowModalPost] = useState(false);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const hideModalPost = () => {
        setShowModalPost(false);
    };

    const handleShowPostDetail = (e) => {
        setName(e.target.getAttribute('data-name'));
        setPrice(e.target.getAttribute('data-price'));
        setShowModalPost(true);
    };

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
                    <div className={cx('')}>
                        <label htmlFor="navbar__mobile-header">
                            <FontAwesomeIcon className={cx('header__item-icon', 'header__item-mobile')} icon={faBars} />
                        </label>
                    </div>
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
                {posts.map((item, index) => (
                    <div className={cx('posts')} key={index}>
                        <div className={cx('posts__header')}>
                            <div className={cx('posts__header-left')}>
                                <img src={avatar} alt="" className={cx('posts__header-img')} />
                                <div className={cx('posts__header-left-avatar')}>
                                    <p>{item.name}</p>
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
                            <p className={cx('posts__title')}>{item.title}</p>
                            <p>Price : {item.price} VND</p>
                            <p>Merchandise type: Mertirial</p>
                        </div>
                        <div
                            className={cx('posts__button')}
                            onClick={handleShowPostDetail}
                            data-name={item.name}
                            data-price={item.price}
                        >
                            <p className={cx('posts__button-link')}>View Detail</p>
                        </div>
                    </div>
                ))}
            </div>

            {showModalPost && (
                <div className={cx('modal')}>
                    <div className={cx('modal__overlay')} onClick={hideModalPost}></div>
                    <div className={cx('modal__body')}>
                        <div className={cx('modal__container')}>
                            <div className={cx('wrapper')}>
                                <div className={cx('wrapper__icon')} onClick={hideModalPost}>
                                    <FontAwesomeIcon icon={faCircleXmark} className={cx('wrapper__icon-close')} />
                                </div>
                                <div className={cx('wrapper__content')}>
                                    <div className={cx('wrapper__content-img')}>
                                        <img src={avatar} alt="" />
                                        <FontAwesomeIcon
                                            icon={faCaretLeft}
                                            className={cx('wrapper__content-img-left')}
                                        />
                                        <FontAwesomeIcon
                                            icon={faCaretRight}
                                            className={cx('wrapper__content-img-right')}
                                        />
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
                                            Vai trò của báo cáo tài chính là cung cấp những thông tin hữu ích của công
                                            ty đối thủ, tình hình tài chính và những thay đổi trong tình hình tài chính
                                            cho các đối tượng sử dụng thông tin như nhà đầu tư, nhà cung cấp, người cho
                                            vay và các bên liên quan khác
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;
