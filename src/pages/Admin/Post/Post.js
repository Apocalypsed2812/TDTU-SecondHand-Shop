import classNames from 'classnames/bind';

import styles from './Post.module.scss';

const cx = classNames.bind(styles);

function Post() {
    return (
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
                        <tr>
                            <td>Employee</td>
                            <td class="job-title">
                                Employee Employee Employee Employee Employee Employee Employee Employee Employee
                                Employee
                            </td>
                            <td>Employee</td>
                            <td>Employee</td>
                            <td>Employee</td>
                        </tr>
                        <tr>
                            <td>Employee</td>
                            <td class="job-title">Employee Employee Employee</td>
                            <td>Employee</td>
                            <td>Employee</td>
                            <td>Employee</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Post;
