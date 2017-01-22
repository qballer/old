import React from 'react'
import reactCSS from 'reactcss'
import {Card} from './card'

export function Gallery(props) {
    const styles = reactCSS({
        'default': {
            gallery: {
                width: '100%',
                height:'100%'
            }
        }
    }, props)
    
    return <div id='gallery' style={styles.gallery}>
            <Card/>
        </div>
}