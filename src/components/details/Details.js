import React, { Component } from 'react'

export class Details extends Component {
     

    render() {
        
        return (
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>PAN number</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(user=>{
                            
                           return( <tr key={user.id}>
                                <td>{user.uname}</td>
                                <td>{user.mob}</td>
                                <td>{user.pan}</td>
                                <td>
                                    <button  className="btn btn-sm btn-info">Edit</button>{' '}
                                    <button onClick={this.props.delUser.bind(this,user.id)} className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Details
