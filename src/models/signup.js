
import * as api from '../services/api';
export default {

    namespace: 'example',
  
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *signup({ payload }, { call, put }) {  // eslint-disable-line
        const result = yield call(api.doSignUp,payload)
        yield put({ type: 'sign' });
      },
    },
  
    reducers: {
        sign(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  