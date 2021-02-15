import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import {rootWatcher} from "./rootWatcher";
import {composeWithDevTools} from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)
