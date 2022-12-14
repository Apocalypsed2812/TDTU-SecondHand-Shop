import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';
import { faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';

import { getMethod, postMethod } from '~/utils/fetchData';
import { GlobalState } from '~/context/GlobalState';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

let cartProduct = true;

function Cart() {
    const state = useContext(GlobalState);
    const [cart, setCart] = state.UserAPI.cart;
    const [cartList, setCartList] = useState([]);
    const globalProducts = state.ProductAPI.products[0];

    useEffect(() => {
        const getCart = async () => {
            const res = await getMethod('get-user');
            return res;
        };
        getCart()
            .then((res) => {
                if (res.success) {
                    setCartList(res.user.cart);
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
    }, []);

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const hanldeCloseModal = () => {
        setShowModal(false);
    };

    let products = [];
    if (cart.length > 0) {
        // setCartProduct(true);
        globalProducts.forEach((product) => {
            cartList.forEach((p) => {
                console.log(p);
                if (p.id === product._id) {
                    products.push({ ...product, quantity: p.quantity });
                }
            });
        });
    }

    let totalPrice = 0;
    products.forEach((product) => {
        totalPrice += Math.floor((product.price - (product.sale / 100) * product.price) * product.quantity);
    });

    const handleDelete = (e) => {
        let id = e.target.getAttribute('data-id');
        postMethod('delete-product', { product_id: id })
            .then((res) => {
                if (res.success) {
                    setCart(res.user.cart);
                    setCartList(res.user.cart);
                    Swal.fire({
                        title: 'Success',
                        text: 'Delete product from cart successfully',
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
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row', 'pt-16')}>
                    <div className={cx('col', 'l-12')}>
                        <span className={cx('cart')}>GI??? H??NG</span>
                    </div>
                </div>

                {cartList.length > 0 ? (
                    <>
                        <div className={cx('row', 'pt-16')}>
                            <div className={cx('col', 'l-9')}>
                                <div className={cx('above-product')}>
                                    <input type="checkbox" />
                                    <div className={cx('all-product')}>
                                        T???t c??? (<span>1</span> s???n ph???m)
                                    </div>
                                    <div className={cx('price-product')}>????n gi??</div>
                                    <div className={cx('quantity-product')}>S??? l?????ng</div>
                                    <div className={cx('buy-product')}>Th??nh ti???n</div>
                                    <FontAwesomeIcon icon={faTrashCan} className={cx('delete-product')} />
                                </div>
                            </div>
                            <div className={cx('col', 'l-3')}>
                                <div className={cx('sale-code')} onClick={handleShowModal}>
                                    Ch???n ho???c nh???p khuy???n m??i kh??c
                                </div>
                            </div>
                        </div>
                        <div className={cx('row', 'mt-16')}>
                            <div className={cx('col', 'l-9')}>
                                <div className={cx('row')}>
                                    {products.map((item, index) => (
                                        <div className={cx('col', 'l-12')} key={index}>
                                            <div className={cx('product')}>
                                                <input type="checkbox" />
                                                <div className={cx('product-content')}>
                                                    <img src={item.image_url} alt={item.name} />
                                                    <div className={cx('content')}>
                                                        <h3 className={cx('heading')}>{item.name}</h3>
                                                        <span>
                                                            <span className={cx('owner')}>Apple Company</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={cx('price')}>
                                                    <div className={cx('new-price')}>{item.price} ??</div>
                                                    <div className={cx('old-sale')}>
                                                        <div className={cx('old-price')}>10.023.456 ??</div>
                                                        <div className={cx('sale-price')}>-19%</div>
                                                    </div>
                                                </div>
                                                <div className={cx('quantity')}>
                                                    <button className={cx('sub')}>-</button>
                                                    <button className={cx('current')}>{item.quantity}</button>
                                                    <button className={cx('add')}>+</button>
                                                </div>
                                                <div className={cx('buy-price')}>{item.price * item.quantity} ??</div>
                                                <Link to="" data-id={item._id} onClick={(e) => handleDelete(e)}>
                                                    {/* <FontAwesomeIcon
                                                        icon={faTrashCan}
                                                        className={cx('delete-product')}
                                                    /> */}
                                                    X??a
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={cx('col', 'l-3')}>
                                <div className={cx('row')}>
                                    <div className={cx('col', 'l-12')}>
                                        <div className={cx('price')}>
                                            <div className={cx('temp')}>
                                                <p>T???m T??nh</p>
                                                <p>{totalPrice} ??</p>
                                            </div>
                                            <div className={cx('separate')}></div>
                                            <div className={cx('buy')}>
                                                <p>Th??nh Ti???n</p>
                                                <div className={cx('buy-price')}>
                                                    <p>{totalPrice} ??</p>
                                                    <p>(???? bao g???m VAT n???u c??)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('row', 'mt-16')}>
                                    <div className={cx('col', 'l-12')}>
                                        <button className={cx('button')}>Ti???n H??nh ?????t H??ng</button>
                                    </div>
                                </div>

                                <div className={cx('row', 'mt-16')}>
                                    <div className={cx('col', 'l-12')}>
                                        <div className={cx('sale')}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className={cx('row', 'mt-16')}>
                        <div className={cx('col', 'l-12')}>
                            <div className={cx('no-product')}>
                                <div>
                                    <img
                                        className={cx('no-product-img')}
                                        src="https://salt.tikicdn.com/desktop/img/mascot@2x.png"
                                        alt=""
                                    />
                                    <p className={cx('no-product-text')}>Kh??ng c?? s???n ph???m n??o ????? hi???n th???</p>
                                    <div className={cx('no-product-btn')}>
                                        <Link to="/">Ti???p t???c mua s???m</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {showModal && (
                <div className={cx('modal')}>
                    <div className={cx('modal__overlay')} onClick={hanldeCloseModal}></div>
                    <div className={cx('modal__body')}>
                        <div className={cx('auth-form')}>
                            <div className={cx('auth-form__container')}>
                                <div className={cx('auth-form__header')}>
                                    <h2>Tiki khuy???n m??i</h2>
                                    <FontAwesomeIcon
                                        icon={faXmark}
                                        className={cx('auth-form__header-icon')}
                                        onClick={hanldeCloseModal}
                                    />
                                </div>

                                <div className={cx('auth-form__form')}>
                                    <div className={cx('auth-form__group')}>
                                        <input
                                            type="text"
                                            className={cx('auth-form__input')}
                                            placeholder="Nh???p m?? gi???m gi??"
                                        />
                                        <button className={cx('auth-form__btn')}>??p d???ng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
