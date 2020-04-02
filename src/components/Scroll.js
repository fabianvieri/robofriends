import React, { Component } from 'react'

export default class Scroll extends Component {
    render() {
        return (
            <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px' }}>
                {this.props.children}
            </div>
        )
    }
}
