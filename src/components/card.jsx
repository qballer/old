import React from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'
import * as icons from './icons'

export class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hover: false}
    }
    
    mouseOver () {
        this.setState({hover: true});
    }

    mouseOut () {
        this.setState({hover: false})
    }

    render(){
        const props = this.props
        const styles = reactCSS({
            'default': {
                card: Object.assign({
                    border: '1px solid white',
                    color: 'white',
                    width: '160px',
                    height:'170px',
                    display: 'inline-block'
                }, props.style)
            }
        }, props)
        return <div 
                onMouseOver={this.mouseOut.bind(this)} 
                onMouseOut={this.mouseOut.bind(this)} 
                style={styles.card}>
            {!this.state.hover ?  <Front cover={this.props.front}/> : 
                                  <Back cover={this.props.back} links={this.props.links}/>}
        </div>
    }
}

function ImgLink({link = null}) {
    return link && <div><img style={{width:'100%'}} src={link}/></div>
}
function Front(props) {
    return <ImgLink link={props.cover}/>
}

function Back(props) {
    return <div>    
            <ImgLink link={props.cover}/>
            <div>
                {
                    _.keys(props.links).map((key) => {
                        const LinkIcon = icons[key] || icons.default
                        return <LinkIcon link={props.links[key]}/>
                    })
                }
            </div>
    </div>
}