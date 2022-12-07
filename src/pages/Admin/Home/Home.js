// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faPen, faStar, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { useState, useEffect, useRef } from 'react';
// import { getDatabase, ref, child, get, set, remove } from 'firebase/database';
// import { list, getDownloadURL, listAll, ref as refStorage, uploadBytes } from 'firebase/storage';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

//import { storage } from '~/firebase.js';
import styles from './Home.module.scss';
import { getMethod } from '~/utils/fetchData';
import { HeaderAdmin } from '~/layouts/components/HeaderAdmin';

const cx = classNames.bind(styles);

function Home({ isAdmin }) {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // if (!isAdmin) {
        //     navigate('/');
        // }
    }, []);
    return (
        <>
            <HeaderAdmin />
        </>
    )
}

export default Home;
