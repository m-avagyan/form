import React, { Component } from 'react'
import './css/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'


export default class App extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='container'>
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </div>
        )
    }
}

