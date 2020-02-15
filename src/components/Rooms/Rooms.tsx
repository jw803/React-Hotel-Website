import React from 'react';
import Spin from '../Spin';
import Banner from './Banner';
import styles from './index.scss';
import RoomInfo from '../../reducer/data';
import Room from './Room';
const Rooms = () => {
  const rooms = RoomInfo.rooms;
  return (
    <>
      <Spin />
      <div className={styles.roomsBlock}>
        <Banner />
        <div className={styles.roomsListOutsideBlock}>
          <div className={styles.roomListInsideBlock}>
            {rooms.map((room) => (
              <Room key={room.id} room={room} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
