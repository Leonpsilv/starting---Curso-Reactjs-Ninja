'use strict'
import React, { Component } from 'react';
import Title from './components/Title';
import Square from './components/Square';
import Button from './components/Button';
import LikeButton from './components/Like-Button';
import Timer from './components/Timer';

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

class App extends Component{
    constructor () {
        console.log('constructor app')
        super()
        this.state = {
            text: 'aperte aqui',
            color: 'green',
            showTimer: true,
            time: 0
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
        console.log('componentWillMount app');
        // pode ser executado no lado do servidor: não fazer manipulação de DOM
    }
    componentDidMount () {
        console.log('componentDidMount app');
        // executado somente no cliente: pode fazer manipulação de DOM
    }
    componentWillUnmount () {
        // Olhar o componente Timer
    }
    render () {
        console.log('render app');
        return (
            <div className='container'>
                {/* {this.state.showTimer && <Timer time={this.state.time}/>}
                <Button handleClick={() => {
                    this.setState({showTimer: !this.state.showTimer})
                }}>Show/Hide Timer</Button> */}

                <Timer time={this.state.time} />

                <button onClick={() => {
                    this.setState({time: this.state.time + 10})
                }}>Change Props</button>
            </div>
        )
    }
}


export default App