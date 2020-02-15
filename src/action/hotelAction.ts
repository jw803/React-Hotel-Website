import { call, put, select, takeEvery } from 'redux-saga/effects';
export const GET_ROOMS = 'GET_ROOMS';
export const GET_ROOMS_SUCCESS = 'GET_ROOMS_SUCCESS';

export function* getRooms() {
  const hotel = yield select((state) => state.hotel);
  const {
    data: { items }
  } = yield call(hotel.getRooms);
  yield put({ type: GET_ROOMS_SUCCESS, payload: { items } });
}

function* mySaga() {
  yield takeEvery(GET_ROOMS, getRooms);
}

export default mySaga;
