import classNames from 'classnames/bind';

import styles from './LayoutSidebar.module.scss';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Sidebar from '../components/Sidebar';
import SidebarUser from '../components/SidebarUser';

const cx = classNames.bind(styles);

function LayoutSidebar({ children }) {
    return (
        <div>
            <SidebarUser />
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default LayoutSidebar;
