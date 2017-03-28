import React from 'react'
import _ from 'lodash'
import * as icons from './icons'

let id = 0
export class Card extends React.Component {
  constructor (props) {
    super(props)
    this.state = {hover: false}
    this.backID = Card.getID()
    this.frontID = Card.getID()
  }

  static getID () {
    return ++id
  }

  render () {
    const props = this.props
    const styles = {
        card: {
          border: '1px solid white',
          color: 'white',
          width: '229px',
          height: '230px',
          display: 'inline-block',
          ...props.style}
    } 
    return <div
      onMouseEnter={()=> this.setState({hover: true})}
      onMouseLeave={()=> this.setState({hover: false})}
      style={styles.card}>
      {
        !this.state.hover ? 
          <Front key={'front' + this.frontID} cover={this.props.front} /> 
          :<Back key={'back' + this.backID} cover={this.props.back} links={this.props.links} />
      }
    </div>
  }
}

function Front (props) {
  return props.cover && <div><img style={{width: '100%', height:'100%'}} src={props.cover} /></div>
}

function Back (props) {
  return <div>
      {props.cover && <div><img style={{width: '100%', height:'86%'}} src={props.cover} /></div>}
      <div style={{ width:'100%', height:'14%', display:'inline-flex'}}>
        {
          _.keys(props.links)
          .map((key, index, arr) => {
            const LinkIcon = icons[key] || icons.Med
            
            return <div style={{minWidth:`${Math.floor(100/arr.length)}%`,
                                 maxWidth:`${Math.floor(100/arr.length)}%`}}>
              <LinkIcon 
                key={props.key + 'icon' + index} 
                link={props.links[key]} />
            </div>
          })
        }
      </div>
  </div>
}
