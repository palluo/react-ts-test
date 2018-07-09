import React, { Component } from 'react'
import './style/index.less'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    public render() {
        return (
            <div className='container'>
                <div> ReactGIS </div>
            </div>
        )
    }

}

export default Header