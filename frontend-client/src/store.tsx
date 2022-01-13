import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';

import thunk from 'redux-thunk';
import reducer from './reducers';
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'appState',
    storage:storage
};
const pReducer = persistReducer(persistConfig, reducer);

const logger = createLogger({});
const middleware = applyMiddleware(thunk,logger);

const store = createStore(pReducer,middleware);

const persistor = persistStore(store);

export {persistor,store};
