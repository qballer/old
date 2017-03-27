import React from 'react'
import reactCSS from 'reactcss'


export function hub (props) {
  const styles = reactCSS({
    'default': {
      img: {
        border: '1px solid white',
        backgroundSize: 'contain',
        width: '100%',
        height: '100%'
      }
    }
  })

  return <span >
      <a href={props.link}><img style={styles.img} src='./public/assets/octocat.png' /></a>
    </span>
}

export function med (props) {
  return <div><a style={{
    float:'left',
    left:'50%',
    position:'relative',
    top:'50%',
    color:'red'}}
    href={props.link}>med</a></div>
}
