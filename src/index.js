import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import { rootReducer } from './redux/rootReducer.js'

const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const app = <Provider store={store}>
                <App />
            </Provider>

ReactDOM.render(
    app,
    document.getElementById('root')
)