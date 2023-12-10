import { createStoreHook } from "react-redux";
import reducer from "./ReduxCrude/Reducer";

const Store = createStoreHook(reducer);

export default Store; 