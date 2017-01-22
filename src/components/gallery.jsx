import React from 'react'
import reactCSS from 'reactcss'
import {Card} from './card'

let cards = [{
        links: {hub:'https://github.com/qballer', twitter:'https://twitter.com/qbllr_'}, 
        back: '../public/assets/backDT.jpg',
        front: '../public/assets/frontDT.jpg'
    }]

export function Gallery(props) {
    const styles = reactCSS({
        'default': {
            gallery: {
                width: '100%',
                height:'100%'
            }
        }
    }, props)
    
    let children = cards.map(({links, back, front}, index) => 
                        <Card key={'card' + index} links={links} back={back} front={front}/>)
    
    return <div id='gallery' style={styles.gallery}>
            {children}
           </div>
}