import { useState, createContext } from 'react';
import UserAPI from './UserAPI';
import CartAPI from './CartAPI';
import ProductAPI from './ProductAPI';
import PostAPI from './PostAPI';
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const state = {
        loading: [loading, setLoading],
        UserAPI: UserAPI(),
        CartAPI: CartAPI(),
        ProductAPI: ProductAPI(),
        PostAPI: PostAPI(),
    };
    return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
