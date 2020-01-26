import React, { Component } from 'react'
import Logo from './tcs-logo.png';
export class Header extends Component {
    render() {
        return (
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-sm bg-light justify-content-center text-primary">
                        <h3 className="navbar-brand" href="#"><img src={Logo} alt="Tcs Logo" className="App-logo" /></h3>
                        <h3>Tata Consultancy Services<sup>&reg;</sup></h3>
                    </nav>
                </div>
           
        )
    }
}

export default Header
