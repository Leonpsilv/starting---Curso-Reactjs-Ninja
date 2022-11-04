'use strict'
import React, { Component } from 'react';
import Title from './components/Title';
import Square from './components/Square';
import Button from './components/Button';
import LikeButton from './components/Like-Button';
import Timer from './components/Timer';

class App extends Component{
    constructor () {
        console.log('constructor')
        super()
        this.state = {
            text: 'aperte aqui',
            color: 'green',
            showTimer: true
        }
    }
    // render () {
    //     return (
    //         <div className='container'>
    //             {/* <h1  onClick={function (e) {
    //             alert('clicou!')
    //             }}>Aplicação</h1> */}

    //             {/* <Title profession='Dev' name={{first:'Leonardo', last:'Aspas'}} year={2022}/> */}
                
    //             {/* {['blue', 'red', 'green'].map((color, index) => (
    //                 <Square key={index} color={color}/>
    //             ))} */}

    //             {/* <Button>
    //                 <i>Texto qualquer</i>
    //                 Outra texto tambem
    //             </Button> */}

    //             {/* <LikeButton /> */}

    //             {/* <Button handleClick={ () => this.setState({ text: 'isso é sobre state'}) }>
    //                 {this.state.text}
    //             </Button> */}

    //             {/* <Square color={this.state.color} />
    //             {['red', 'green', 'blue'].map((color, index) => (
    //                 <Button key={index} handleClick={ () => {this.setState({color})} }> {color} </Button>
    //             ))} */}


    //         </div>
    //     )
    // }
    componentWillMount() {
        console.log('componentWillMount');
        // pode ser executado no lado do servidor: não fazer manipulação de DOM
    }
    componentDidMount () {
        console.log('componentDidMount');
        // executado somente no cliente: pode fazer manipulação de DOM
    }
    componentWillUnmount () {
        // Olhar o componente Timer
    }
    render () {
        console.log('render');
        return (
            <div className='container'>
                {this.state.showTimer && <Timer />}
                <Button handleClick={() => {
                    this.setState({showTimer: !this.state.showTimer})
                }}>Show/Hide Timer</Button>
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