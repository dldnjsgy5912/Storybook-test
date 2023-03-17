import { Action, configureStore, EnhancedStore, Store, ThunkAction } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import counterReducer from "@/store/counterReducer";
import logger from "redux-logger";
import answerReducer from "./answerReducer";

// rootReducer 병합
const rootReducer = combineReducers({
    counter: counterReducer,
    answer: answerReducer,
});

// persist 를 이용해 스토리지 저장
const persistConfig = {
    key: "root",
    storage: storageSession,
    whitelist: ["counter", "answer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//스토어
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
            .prepend()
            // prepend and concat calls can be chained
            .concat(),
});

export const persistor = persistStore(store);

// wrapper 세팅
const setupStore = (context: any): EnhancedStore => store;
const makeStore: MakeStore<any> = (context) => setupStore(context);
export const wrapper = createWrapper<Store>(makeStore);

//리덕스 타입
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
