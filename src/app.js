'use strict'
import React, { Component } from 'react';
import Title from './components/Title';
import Square from './components/Square';
import Button from './components/Button';
import LikeButton from './components/Like-Button';
import Timer from './components/Timer';
import PropTypes from './components/PropTypes';



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
    // constructor () {
    //     console.log('constructor app')
    //     super()
    //     this.state = {
    //         text: 'aperte aqui',
    //         color: 'green',
    //         showTimer: true,
    //         time: 0
    //     }
    // }
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

    // componentWillMount() {
    //     console.log('componentWillMount app');
    //     // pode ser executado no lado do servidor: não fazer manipulação de DOM
    // }
    // componentDidMount () {
    //     console.log('componentDidMount app');
    //     // executado somente no cliente: pode fazer manipulação de DOM
    // }
    // componentWillUnmount () {
    //     // Olhar o componente Timer
    // }
    // render () {
    //     console.log('render app');
    //     return (
    //         <div className='container'>
    //             {/* {this.state.showTimer && <Timer time={this.state.time}/>}
    //             <Button handleClick={() => {
    //                 this.setState({showTimer: !this.state.showTimer})
    //             }}>Show/Hide Timer</Button> */}

    //             <Timer time={this.state.time} />

    //             <button onClick={() => {
    //                 this.setState({time: this.state.time + 10})
    //             }}>Change Props</button>
    //         </div>
    //     )
    // }

    /* propTypes */
    // render () {
    //     return (
    //         <div>
    //             {/* <PropTypes handleClick='string'>Aperte aqui</PropTypes> */}
    //             {/* <PropTypes>Aperte aqui</PropTypes> */}
    //             <PropTypes handleClick={() => console.log('clicou')}>Aperte aqui</PropTypes>
    //         </div>
    //     )
    // }

    /* Forms */
    constructor () {
        super()
        this.state = {
            text: 'valor inicial',
            checked: false,
            option: '2'
        }
    }
    render () {
        return (
        // <form className='forms'>
        //     {/* <input type='text' value={this.state.text} onChange={(e) => {
        //         this.setState({text: e.target.value});
        //     }}/>

        //     <label>
        //         <input type='checkbox'
        //         checked={this.state.checked}
        //         onChange={(e) => {
        //             this.setState({checked: e.target.checked});
        //         }}
        //         />
        //             Checkbox
        //     </label>

        //     <input type='radio' name='rd' value='1' defaultChecked/> Radio 1
        //     <input type='radio' name='rd' value='2' /> Radio 2 */}

        //     {/* <select value={this.state.option}
        //     onChange={e => {
        //         this.setState({option: e.target.value})
        //     }}
        //     >
        //         <option value='1'>Opção 1</option>
        //         <option value='2'>Opção 2</option>
        //         <option value='3'>Opção 3</option>
        //     </select> */}

        //     {/* <textarea value={this.state.text}
        //      onChange={e => {
        //         this.setState({text: e.target.value});
        //     }}/> */}


        // </form>

        <form 
        className='forms'
        onSubmit={e => {
            e.preventDefault()
            console.log('evet ', e);
        }}

        onChange={e => {
            console.log('name', e.target.name);
            console.log('value', e.target.value);
        }}
        >
            <textarea name='textarea' value={this.state.text}
              onChange={e => {
                 this.setState({text: e.target.value});
             }}/>

             <button type='subtmit'>Enviar</button>
        </form>
        )
    }

}


export default App