import React from 'react';
import CommunityLink from '../../Info/CommunityLink';
import Information from '../../Info/Infomation';
import styles from './index.scss';

const HotelInfo = () => (
    <div className={styles.hotelInfoBlock}>
        <div className={styles.linkMargin}>
            <CommunityLink />
        </div>
        <Information />
    </div>
);

export default HotelInfo;
