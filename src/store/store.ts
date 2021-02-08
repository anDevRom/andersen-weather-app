import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import {rootWatcher} from "./rootWatcher";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)
