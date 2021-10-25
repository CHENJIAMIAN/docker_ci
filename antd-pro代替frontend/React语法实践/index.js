import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import LifeCyclePage from "./LifeCyclePage";
import PureComponentPage from './PureComponentPage';
// import HookPage from "./HookPage";
// import FunctionComponent from "./FunctionComponent";
// import ClassComponent from "./ClassComponent";
// import ReduxPage from "./ReduxPage";
// import ReactReduxPage from "./ReactReduxPage";
// import RouterPage from "./RouterPage";
// import CustomHookPage from "./CustomHookPage";
// import UseMemoPage from "./UseMemoPage";
// import UseCallbackPage from "./UseCallbackPage";

//定义state初始化和修改规则,reducer是一个纯函数
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'MINUS':
      return state - 1;
    default:
      return state;
  }
}
const store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <PureComponentPage />
    </div>
  </Provider>,
  document.getElementById('root')
);
