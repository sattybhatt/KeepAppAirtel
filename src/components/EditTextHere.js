import React, { Component } from 'react';
//import TextField from '@material-ui/core/TextField';
import { TextField } from '@material-ui/core';
import '../css/main.css';

class EditTexthere extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value:"",
            opacity:true,
            content:[]
        }
        this.handleOnChange=this.handleOnChange.bind(this);
        this.handleOnClick=this.handleOnClick.bind(this);
        this.submitNote=this.submitNote.bind(this);
    }

    handleOnChange(e){
        console.log(e.target.value)
        this.setState({
            value:e.target.value
        })
       // this.content.concat(e.target.value)
        // this.setState({carder
        //     (stringnew) => ({
        //         content:stringold.content.concat(stringnew)
        //     })
            
        // })
        
    }
    handleOnClick(e){
        console.log('hello');
        console.log(this.state.opacity);
        if(this.state.opacity=true){
        this.setState({
            opacity:!this.state.opacity
        })
    }

    }

    submitNote(e){
        console.log('Submitted');
        e.preventDefault();
        this.props.handleForSubmit(this.state.value);

    }

    render(){
        let btn_id=this.state.opacity?"classop1":"classop2";
        return (<div>
        <form noValidate autoComplete="off">
        <TextField className={btn_id}
             id={btn_id}
          label={this.props.desc}
          margin="normal"
          variant="outlined"
          onChange={this.handleOnChange}
        />
        <TextField className="classop2"
          label={this.props.desc2}
          margin="normal"
          variant="outlined"
          onChange={this.handleOnChange}
          onClick={this.handleOnClick} 
        />
        <button className="sbtbtn" onClick={this.submitNote}>Submit</button>
        
        
        </form>
        </div>)
    }
}
export default EditTexthere