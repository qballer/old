import React from 'react'
import {Card} from './card'

let cards = [{
  links: {
    Hub: 'https://github.com/qballer',
    Twitter: 'https://twitter.com/qbllr_'
  },
  back: 'https://avatars0.githubusercontent.com/u/1002622?v=3&s=460',
  front: './public/assets/enigma.jpg'
}]

export function Gallery (props) {
  const styles = {
      gallery: {
        width: '100%',
        height: '100%'
      }
  }
  let children = cards.map(({links, back, front}, index) =>
    <Card key={'card' + index} links={links} back={back} front={front} />)

  return <div id='gallery' style={styles.gallery}>
    {children}
  </div>
}

function AboutMe(props) { 
  let links = {
    hub:'https://www.github.com/qballer',
    twitter: 'https://www.twitter.com/qbllr_'
  }
  let back  = ''
  let front = ''
  return <Card id='AboutMe' links={links}  />
}
