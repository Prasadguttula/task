import React, { Component } from 'react'

export class Application extends Component {
    state={
            
                uname:'',
                mob:'',
                pan:''
            
            
    }
    onChange=(e)=>{
        
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addUser(this.state.uname,this.state.mob,this.state.pan)
        
    
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="card">
                <div className="card-header bg-info text-center"><strong>Register</strong></div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <label htmlFor="uname">Name:</label>
                            <input type="textbox" className="form-control" placeholder="Enter username"
                             name="uname"
                             value={this.state.uname}
                             onChange={this.onChange}
                              id="uname"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="mob">Mobile:</label>
                            <input type="number" className="form-control" placeholder="Enter mobile number"
                             name="mob"
                             value={this.state.mob}
                             onChange={this.onChange} 
                             id="mob"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pan">PAN number:</label>
                            <input type="number" className="form-control" placeholder="Enter pan number"
                             name="pan"
                             value={this.state.pan}
                             onChange={this.onChange}
                             id="pan"/>
                        </div>
                        <button type="submit" value="Submit" className="btn btn-sm btn-primary">Submit</button>
                    </form> 
                </div>
                </div>
            </div>
        )
    }
}

export default Application
