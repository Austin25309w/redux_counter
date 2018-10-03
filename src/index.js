import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import{ createStore } from 'redux'

const initialState = {
    count: 1
}
// reducer takes state and action to manage the state
function firstReducer(state = initialState, action){
    if(action.type === "INCREMENT"){
        //pure function that doesn't have any side effect
        let copy = { ...state };
        copy.count++;
        return copy
    } else if (action.type === "DECREMENT") {
        let copy = { ...state};
        copy.count--;
        return copy
    }
    return state;

}

//Store that stores the reducer
const myFirstStore = createStore(firstReducer);



ReactDOM.render(
    <Provider store={myFirstStore}>
        <App/>
    
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
