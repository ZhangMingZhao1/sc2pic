
import * as api from '../services/api';

export default {

    namespace: 'getPic',
  
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetchPic({ payload }, { call, put }) {  // eslint-disable-line
        const picResult = yield call( api.getPic );
        yield put({
          type: 'getPic',
          payload: {
            data: picResult.data
          }
        })
      },
    },
  
    reducers: {
      getPic(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  