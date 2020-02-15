import React, { useState } from 'react';
import Logo from '../Logo';
import HotelInfo from './HotelInfo';
import RoomList from './RoomList';
import Spin from '../Spin';
import styles from './index.scss';
const Home = (): JSX.Element => {
  const [currentRoom, setCurrentRoom] = useState({ imageUrl: '', name: '' });
  return (
    <>
      <Spin />
      <div
        className={styles.home}
        style={{
          backgroundImage: `url(${currentRoom.imageUrl})`
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
          <RoomList currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />
          <HotelInfo />
        </div>
      </div>
    </>
  );
};

export default Home;
