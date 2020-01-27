import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap'
export class Details extends Component {
    
    state={
        show:false,
        id:'',
        uname:''
    }
    onChange=(e)=>{
        this.setState({uname:e.target.value})
    }
    handleShow=(id) =>{
        this.setState({show:true})
        this.setState({id})
    }
    handleClose=() =>{
        this.setState({show:false})
    }
    saveChange=()=>{
        const {id,uname}=this.state;
        this.props.nameChange(id,uname)
        this.setState({show:false})
    }
    
    
    render() {

        return (
            
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Serial No.</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>PAN number</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(user=>{
                            
                           return( <tr key={user.id}>
                                <td>{user.id}</td>
                                <td >{user.uname}</td>

                                <td>{user.mob}</td>
                                <td>{user.pan}</td>
                                <td>
                                    <button type="button" onClick={this.handleShow.bind(this,user.id)} className="btn btn-sm btn-info">Edit</button>{' '}
                                    <button type="button" onClick={this.props.delUser.bind(this,user.id)} className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Modal size="sm" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Edit name here...</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>Enter name:</label>&nbsp;
                        <input type="textbox" name="uname"
                         onChange={this.onChange} value={this.state.uname}/>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.saveChange}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Details
