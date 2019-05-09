import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const SHOW = 'modal/SHOW';
const HIDE = 'modal/HIDE';

export const show = createAction(SHOW);
export const hide = createAction(HIDE);

const initialState = Map({
    visible : false,
    album : Map({
        id : null,
        name :'',
        genre : '',
        release : '',
        rsc : '',
    })
});

export default handleActions({
    [SHOW]: (state, action) => {
        const { album } = action.payload;

        return state.set('visible',true).set('album',Map(album))
    },
    [HIDE]: (state) => state.set('visible', false)
},initialState)