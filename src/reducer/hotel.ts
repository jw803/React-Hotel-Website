import * as actions from '../action/hotelAction';
import Hotel from '../class/Hotel';
import { IState } from '../interface/IState';

const initRoom = {
  room: [
    {
      amenities: {
        'Air-Conditioner': false,
        Breakfast: false,
        'Child-Friendly': false,
        'Great-View': false,
        'Mini-Bar': false,
        'Pet-Friendly': false,
        Refrigerator: false,
        'Room-Service': false,
        'Smoke-Free': false,
        Sofa: false,
        Television: false,
        'Wi-Fi': false
      },
      checkInAndOut: {
        checkInEarly: '--:--',
        checkInLate: '--:--',
        checkOut: '--:--'
      },
      description: '...',
      descriptionShort: {
        Bed: ['--', '--'],
        Footage: 0,
        GuestMax: 0,
        GuestMin: 0,
        'Private-Bath': 0
      },
      holidayPrice: 0,
      id: '',
      imageUrl: ['', '', ''],
      name: '',
      normalDayPrice: 0
    }
  ],
  booking: []
};

const initialState: IState = {
  rooms: [],
  room: { ...initRoom },
  reservationResult: '',
  hotel: new Hotel()
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actions.GET_ROOMS_SUCCESS:
      return { ...state, rooms: action.payload.items };

    default:
      return state;
  }
};
