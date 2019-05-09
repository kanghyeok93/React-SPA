import { combineReducers } from "redux";
import M_R_Album_List from './M_R_Album_List';
import M_I_Album_List from './M_I_Album_List';
import modal from './modal';

export default combineReducers({
    M_R_Album_List,
    M_I_Album_List,
    modal
});