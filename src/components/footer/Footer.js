import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-sm bg-info justify-content-center fixed-bottom">
                    <h6 >All rights reserved<sup>&copy;</sup>.</h6>
                </nav>
            </div>
        )
    }
}

export default Footer
