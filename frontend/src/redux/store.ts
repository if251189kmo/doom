import { configureStore, Middleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import config from "../../dev-config.json";

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      const middlewares = getDefaultMiddleware({
        serializableCheck: false,
      });

      if (process.env.NODE_ENV === "development" && config.logger)
        middlewares.push(logger as Middleware);

      return middlewares;
    },
  });
};

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore["dispatch"];
type ThunkAPIType = { dispatch: AppDispatch; state: RootState };

export type { RootState, AppStore, AppDispatch, ThunkAPIType };
