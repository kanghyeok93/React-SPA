import { Map, List } from 'immutable';
import { handleActions } from 'redux-actions';

const initialState = List([
    Map({
        "id" : "I_1",
        "name" : "미아",
        "genre" : "Ballad",
        "release" : "2008.09.23",
        "img" : "images/I_1.jpg",
        "rsc" : "https://www.youtube.com/watch?v=0ZukHxqOA0o"
    }),
    Map({
        "id" : "I_2",
        "name" : "마쉬멜로우",
        "genre" : "Dance",
        "release" : "2009.11.12",
        "img" : "images/I_2.jpg",
        "rsc" : "https://www.youtube.com/watch?v=slT80EySpKk"
    }),
    Map({
        "id" : "I_3",
        "name" : "좋은날",
        "genre" : "Dance",
        "release" : "2010.12.09",
        "img" : "images/I_3.jpg",
        "rsc" : "https://www.youtube.com/watch?v=jeqdYqsrsA0"
    }),
    Map({
        "id" : "I_4",
        "name" : "금요일에 만나요",
        "genre" : "Ballad",
        "release" : "2013.12.20",
        "img" : "images/I_4.jpg",
        "rsc" : "https://www.youtube.com/watch?v=EiVmQZwJhsA"
    }),
    Map({
        "id" : "I_5",
        "name" : "봄 사랑 벚꽃 말고",
        "genre" : "Ballad",
        "release" : "2014.04.08",
        "img" : "images/I_5.jpg",
        "rsc" : "https://www.youtube.com/watch?v=ouR4nn1G9r4"
    }),
    Map({
        "id" : "I_6",
        "name" : "나의 옛날이야기",
        "genre" : "Ballad",
        "release" : "2014.05.16",
        "img" : "images/I_6.jpg",
        "rsc" : "https://www.youtube.com/watch?v=npttud7NkL0"
    }),
    Map({
        "id" : "I_7",
        "name" : "소격동",
        "genre" : "Electronica ",
        "release" : "2014.10.02",
        "img" : "images/I_7.jpg",
        "rsc" : "https://www.youtube.com/watch?v=GHu39FEFIks"
    }),
    Map({
        "id" : "I_8",
        "name" : "스물셋",
        "genre" : "Dance",
        "release" : "2015.10.23",
        "img" : "images/I_8.jpg",
        "rsc" : "https://www.youtube.com/watch?v=42Gtm4-Ax2U"
    }),
    Map({
        "id" : "I_9",
        "name" : "밤편지",
        "genre" : "Ballad",
        "release" : "2017.03.24",
        "img" : "images/I_9.jpg",
        "rsc" : "https://www.youtube.com/watch?v=BzYnNdJhZQw"
    }),
    Map({
        "id" : "I_10",
        "name" : "삐삐",
        "genre" : "R&B/urban",
        "release" : "2018.10.10",
        "img" : "images/I_10.jpg",
        "rsc" : "https://www.youtube.com/watch?v=nM0xDI5R50E"
    })


]);

export default handleActions({

},initialState)