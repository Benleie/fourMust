import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import * as api from '../services/common';
import { message } from 'antd';

export interface CommonModelState {

}

export interface CommonModelType {
  namespace: 'common';
  state: CommonModelState;
  effects: {

  };
  reducers: {
    updateState: Reducer<CommonModelState>;
  };
  subscriptions: { setup: Subscription };
}

const CommonModel: CommonModelType = {
  namespace: 'common',
  state: {

  },
  effects: {

  },
  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // const rootNode: HTMLElement =  document.getElementById('root') as HTMLElement
      // rootNode.style.height = `${window.screen.height}px`
      // return history.listen(({ pathname }) => {
      //   // if (pathname === '/') {
      //   //   dispatch({
      //   //     type: 'query',
      //   //   })
      //   // }
      // });
    }
  }
};
export default CommonModel;