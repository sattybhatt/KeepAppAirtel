import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:""
        }
        this.handleOnChange=this.handleOnChange.bind(this);
        this.submitLogin=this.submitLogin.bind(this);
        this.registerUser=this.registerUser.bind(this);

    }

    handleOnChange(e){
        console.log(e.target.value)
        this.setState({
            value:e.target.value
         } )
    }

    submitLogin(e){
        e.preventDefault();
        this.props.handleOnSubmitLogin(this.state.value)

    }
    registerUser(e){
        console.log('Registered started');
        e.preventDefault();
        this.props.handleOnRegisterUser(this.state.value)
    }

    render(){
        console.log(this.props.classprop)
        return(
            <div className={this.props.classprop}>
            <form noValidate autoComplete="off">
        <TextField className="classop2"
          label="Email-id"
          margin="normal"
          variant="outlined"
          onChange={this.handleOnChange}
        />
        <TextField className="classop2"
          label="Password"
          margin="normal"
          variant="outlined"
         // onChange={this.handleOnChange}
         // onClick={this.handleOnClick} 
        />
        <button className="btnlogin" onClick={this.submitLogin}>Login</button>
        <button className="btnlogin" onClick={this.registerUser}>Sign Up</button>
        
        
        </form>
        </div>
            
        )
    }


}
export default Login