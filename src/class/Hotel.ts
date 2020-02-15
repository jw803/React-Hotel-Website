import axios from 'axios';
import { apiUrl, token } from '../asset';
import { IHotel } from '../interface/IHotel';

const headers = {
  Authorization: `Bearer ${token}`,
  accept: 'application/json'
};

class Hotel implements IHotel {
  getRooms = (): any =>
    axios.request({
      url: `${apiUrl}/rooms`,
      headers
    });

  getRoom = (id: string): any =>
    axios.request({
      url: `${apiUrl}/room/${id}`,
      headers
    });
}

export default Hotel;
