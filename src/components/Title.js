'use strict'

import React from 'react';

// const Title = React.createClass({
//     getDefaultProps : function () {
//         return {
//             name: {first:'Usuário', last:'Desconhecido'},
//             profession: 'Dev'
//             year: '2077'
//         }
//     },

//     render: function () {
//         return (
//             <h1>
//             Olá {this.props.profession +  " " 
//                + this.props.name.first +  " " 
//                + this.props.name.last}! Estamos no ano {this.props.year}!!</h1> // pode ser <h1> Olá {this.props.profession}! || 'Dev'</h1>
//         )
//     }
// });

const Title = ({profession, name, year}) => (
    <h1>Olá {`${profession} ${name.first} ${name.last}`}!, estamos no ano {year}</h1>
);

Title.defaultProps = {
    name: {first:'Usuário', last:'Desconhecido'},
    profession : "",
    year: '2077'
}

export default Title;