import { Map, List } from 'immutable';
import { handleActions } from 'redux-actions';

const initialState = List([
    Map({
        "id" : "R_1",
        "name" : "1집 정규 Growing Up",
        "genre" : "Dance",
        "release" : "2009.04.23",
        "img" : "images/R_1.jpg",
        "rsc" : "https://www.youtube.com/watch?v=RDQEbMcKCd8"
    }),
    Map({
        "id" : "R_2",
        "name" : "2집 정규 Last Fantasy",
        "genre" : "Dance",
        "release" : "2011.11.29",
        "img" :"images/R_2.jpg",
        "rsc" : "https://www.youtube.com/watch?v=sSJz7xnKGjE&list=PLgA8PQBu3V3aSBFE8HOLL1ERDpQsIdeC4&index=13"
    }),
    Map({
        "id" : "R_3",
        "name" : "3집 정규 Modern Times",
        "genre" : "Dance",
        "release" : "2013.10.08",
        "img" :"images/R_3.jpg",
        "rsc" : "https://www.youtube.com/watch?v=TMT8CS01zFU"
    }),
    Map({
        "id" : "R_4",
        "name" : "4집 정규 Palette",
        "genre" : "Ballad, R&B/urban",
        "release" : "2017.04.21",
        "img" :"images/R_4.jpg",
        "rsc" : "https://www.youtube.com/watch?v=0p8lHxqfskQ"
    })
]);

export default handleActions({

},initialState)