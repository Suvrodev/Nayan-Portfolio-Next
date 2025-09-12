// import { configureStore } from "@reduxjs/toolkit";
// import portfolioCategoryReducer from "./features/PortfolioApi/portfolioSlice";
// import { baseApi } from "./apis/baseApi";

// console.log("In Store");
// export const store = configureStore({
//   reducer: {
//     [baseApi.reducerPath]: baseApi.reducer,
//     portfolioCategories: portfolioCategoryReducer,
//   },
//   middleware: (getDefaultMiddlewares) =>
//     getDefaultMiddlewares().concat(baseApi.middleware),
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/auth/authSlics";
import portfolioCategoryReducer from "./features/PortfolioApi/portfolioSlice";
import drawerReducer from "./features/drawer/drawerSlice";
import modalReducer from "./features/customModal/customModalSlice";
import { baseApi } from "./apis/baseApi";
const persistConfig = {
  key: "auth",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    // auth: authReducer,
    auth: persistedReducer,
    portfolioCategories: portfolioCategoryReducer,
    drawer: drawerReducer,
    customModalStore: modalReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
