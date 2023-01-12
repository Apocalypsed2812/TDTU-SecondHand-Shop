import { faStar, faPen, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';
import styles from './Policy.module.scss';
// import { useState, useEffect } from 'react';

// import { getMethod } from '~/utils/fetchData';
import avatar from '~/assets/images/avatar_post.jpg';

const cx = classNames.bind(styles);

function Policy() {
    return (
        <>
            <div className={cx('container')}>
                <h3 className={cx('container__title')}>Policy</h3>
                <div className={cx('container__wrapper')}>
                    <div className={cx('container__wrapper-heading')}>
                        Hàng hóa và dịch vụ bị cấm theo pháp luật Việt Nam
                    </div>
                    <ul>
                        <li>
                            <b>Hàng hóa bất hợp pháp: </b>Các hàng hóa bị cấm buôn bán theo luật pháp Việt Nam, bao gồm:
                            <ul>
                                <li>Ma túy.</li>
                                <li>Hàng hóa có chứa hình ảnh liên quan đến cần sa, hoa anh túc.</li>
                                <li>
                                    Vũ khí và các sản phẩm thuộc lĩnh vực quân sự, an ninh quốc phòng khác, bao gồm
                                    nhưng không giới hạn bởi quân trang, quân hiệu, phù hiệu, thiết bị quân sự, cấp
                                    hiệu.
                                </li>
                                <li>Bộ phận cơ thể người.</li>
                                <li>Thực vật, Động vật nguy cấp, quý hiếm.</li>
                            </ul>
                        </li>
                        <li>
                            <b>Hàng giả, hàng nhập lậu, hàng vi phạm bản quyền: </b>Tất cả các sản phẩm sau đây khi đăng
                            tin trên TDTU SecondHand Shop phải được chứng thực là hàng chính hãng:
                            <ul>
                                <li>Sản phẩm có thương hiệu.</li>
                                <li>CD/VCD/DVD.</li>
                                <li>Chương trình máy vi tính/ máy chơi trò chơi.</li>
                            </ul>
                        </li>
                        <li>
                            <b>
                                Danh mục sản phẩm, hàng hóa chuyên ngành công nghệ thông tin và truyền thông không có
                                chứng nhận hợp quy và công bố hợp quy theo quy định pháp luật
                            </b>
                            Vui lòng tham khảo Danh sách các thiết bị vô tuyến điện không có chứng nhận hợp quy, cấm sử
                            dụng tại Việt Nam (như các thiết bị âm thanh không dây, micro không dây, loa kéo không dây…)
                            theo đường link: www.rfd.gov.vn/tin-tuc/pages/thong-bao.aspx?ItemID=2126 của Cục Tần số Vô
                            tuyến Điện – Bộ Thông tin & Truyền thông.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Policy;
