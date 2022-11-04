'use strict'
import React, { Component } from 'react';
import Title from './components/Title';
import Square from './components/Square';
import Button from './components/Button';
import LikeButton from './components/Like-Button';

class App extends Component{
    constructor () {
        super()
        this.state = {
            text: 'aperte aqui'
        }
    }
    render () {
        return (
            <div className='container'>
                {/* <h1  onClick={function (e) {
                alert('clicou!')
                }}>Aplicação</h1> */}

                {/* <Title profession='Dev' name={{first:'Leonardo', last:'Aspas'}} year={2022}/> */}
                
                {/* {['blue', 'red', 'green'].map((color, index) => (
                    <Square key={index} color={color}/>
                ))} */}

                {/* <Button>
                    <i>Texto qualquer</i>
                    Outra texto tambem
                </Button> */}

                {/* <LikeButton /> */}
                
                <Button handleClick={() => (this.setState({
                    text: 'isso é sobre state'
                }))}>{this.state.text}</Button>
            </div>
        )
    }
}

// const App = React.createClass({
//     render: function() {
//         return (
//             <div className='container'>
//                 <h1>Aplicação</h1>
//                 <Title profession='Dev' name={{first:'Leonardo', last:'Aspas'}} year={2022}/* props*//>
//             </div>
//         )
//     }
// });

export default App