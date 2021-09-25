
import courseUploadReducer from "./courseUpload.reducer";
import courseVideoReducer from "./courseVideo.reducer";

const persistConfig = {
  key: "devsprime",
  storage,
  whiteList: ["user", "courses", "cart"],
};

const rootReducer = combineReducers({
  login: LoginReducer,
});

export default persistReducer(persistConfig, rootReducer)