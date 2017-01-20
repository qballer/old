import ReactDOM from 'react-dom';
import React from 'react';
import {Card} from './components'
import reactCSS from 'reactcss'

const override = reactCSS({
    'default':{
        card: {
            background: 'blue'
        }
    }

})
ReactDOM.render(<Card style={override.card}/>, document.getElementById('qbllr-root'));