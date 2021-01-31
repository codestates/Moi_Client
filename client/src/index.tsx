import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//* Import_package_about_redux
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import * as actions from './modules/socialLoginField/user/actions';

//* set saga middle-ware & create_store
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

function loadUser() {
  try {
    const currentUser = localStorage.getItem('current_user');
    if (!currentUser) return;

    store.dispatch(actions.checkUser.request(''));
  } catch (e) {
    throw Error(e);
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
