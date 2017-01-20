import React from 'react'
import reactCSS from 'reactcss'

export function Card(props) {
    const styles = reactCSS({
        'default': {
            card: Object.assign({
                border: '1px solid white',
                color: 'white',
                width: '100px',
                height:'100px',
            }, props.style)
        }
    }, props)
    return <div id='card' style={styles.card}>Hello Card !!!</div>
}