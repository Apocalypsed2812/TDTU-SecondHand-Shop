import classNames from 'classnames/bind';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import styles from './Post.module.scss';
import { GlobalState } from '~/context/GlobalState';

const cx = classNames.bind(styles);

function Post() {
    const state = useContext(GlobalState);
    const [posts, setPosts] = state.UserAPI.posts;

    const [showView, setShowView] = useState(false);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleCloseView = () => setShowView(false);

    const handleShowView = (e) => {
        setName(e.target.getAttribute('data-name'));
        setPrice(e.target.getAttribute('data-price'));
        setDescription(e.target.getAttribute('data-description'));
        setShowView(true);
    };

    return (
        <>
            <div className={cx('container')}>
                <h1>Quản Lý Bài Đăng</h1>
                <div className={cx('wrapper')}>
                    <table className={cx('table-users')}>
                        <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Job title</th>
                                <th>Team</th>
                                <th>Manager</th>
                                <th>Email Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((item, index) => (
                                <tr key={index}>
                                    <td>Employee</td>
                                    <td class="job-title">
                                        Employee Employee Employee Employee Employee Employee Employee Employee Employee
                                        Employee
                                    </td>
                                    <td>Employee</td>
                                    <td>Employee</td>
                                    <td>
                                        <Link
                                            to=""
                                            className={cx('ml-8')}
                                            onClick={handleShowView}
                                            data-name={item.name}
                                            data-price={item.price}
                                            data-description={item.description}
                                        >
                                            Xem
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal show={showView} onHide={handleCloseView}>
                <Modal.Header closeButton>
                    <Modal.Title>Xem Bài Đăng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <div className={cx('form-group', 'text-center')}>
                        <img src={image} alt="" className={cx('home-img-view')} />
                    </div> */}
                    <div className={cx('form-group')}>
                        <span>
                            Tên món ăn: <b>{name}</b>
                        </span>
                    </div>
                    <div className={cx('form-group')}>
                        <span>
                            Giá: <i>{price} VND</i>
                        </span>
                    </div>
                    <div className={cx('form-group')}>
                        <span>Mô tả: {description}</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseView}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Post;
