import * as React from 'react';
import Logo from '../Logo';
import styles from './index.scss';
const Home = (): JSX.Element => (
    <>
        <div
            className={styles.home}
            style={{
                backgroundImage:
                    'url(https://images.unsplash.com/photo-1558976825-6b1b03a03719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)'
            }}
        >
            <div className={styles.left}>
                <div>
                    <Logo />
                    <div className={styles.promptText}>點擊 Logo 進入網站</div>
                </div>
                <div className={styles.roomInfo}>
                    <div className={styles.roomNo}>01</div>
                    <div className={styles.roomName}>SingleRoom</div>
                </div>
            </div>
            <div className={styles.right}>
                <div className="roomList"></div>
                <div className="HotelInfo"></div>
            </div>
        </div>
    </>
);

export default Home;
