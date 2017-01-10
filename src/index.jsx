import React from 'react';
// This is interesting.. it's like it's
// making this variable render be ReactDom.render()
import {render} from 'react-dom';


import LikeButton from './like-button.jsx';
import Clock from './clock.jsx';

class Test extends React.Component {
    render() {return(
        <main>
            <h1>Hello, wordld.</h1>
            <LikeButton />
            <Clock/>
        </main>
    );}
}

function TestTwo(props) {
    return (
        <main>
            <h1>Hello, worldddd.</h1>
            <LikeButton/>
        </main>
    );
}

const test = <main><h1>Hello, world.</h1><LikeButton/></main>
render(<Test/>,document.getElementById('root'));
// render(<TestTwo/>,document.getElementById('root'));
// render(test,document.getElementById('root'));
