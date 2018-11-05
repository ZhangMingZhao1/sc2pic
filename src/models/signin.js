
import * as api from '../services/api';
export default {

    namespace: 'signIn',
  
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *signin({ payload }, { call, put }) {  // eslint-disable-line
        const result = yield call(api.signIn(payload))
        yield put({ 
            type: 'signIn' 
        });
      },
    },
  
    reducers: {
      signIn(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  