import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore
} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import {
  authReducer,
  contentReducer,
  courseReducer,
  myCourseReducer,
  studentReducer
} from "../Reducers";

const rootReducer = combineReducers({
  auth: authReducer,
  students: studentReducer,
  courses: courseReducer,
  myCourses: myCourseReducer,
  content: contentReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
