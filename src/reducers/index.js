import { createStore, combineReducers } from "redux";
import courseSessionReducer from "./CourseSessionReducer";
import SelectionReducer from "./SelectionReducer";

const rootReducer = combineReducers({
  courseSessions: courseSessionReducer,
  selectedAssignmentId: SelectionReducer
});

export default createStore(rootReducer);
