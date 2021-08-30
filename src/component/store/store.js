import { createStore } from "redux";
import BlockReducer from "./reducer";

const store =createStore(BlockReducer);
export default store;