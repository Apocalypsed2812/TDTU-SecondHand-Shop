import { useState, useEffect } from 'react';
import { getMethod } from '../utils/fetchData';

function PostAPI() {
    const [posts, setPosts] = useState([]);
    // const [productsShow, setProductsShow] = useState([])
    useEffect(() => {
        const getPosts = async () => {
            let response = await getMethod('post');
            return response;
        };
        getPosts()
            .then((res) => {
                if (res.success) {
                    setPosts(res.posts);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return {
        posts: [posts, setPosts],
        // productsShow: [productsShow, setProductsShow],
    };
}

export default PostAPI;
