import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { TextField } from '@material-ui/core';
import SideBar from './SideBar';
import Cardnew from './Cardnew';


import EditTexthere from './EditTextHere';
import '../css/main.css';
import CardList from './CardList';
import Login from './Login';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  });
class KeepApp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            id:'neelanjan.sen@gmail.com',
            data:{},
            tasks:[],
            users:[],
            login:false
        }
        this.fetchdetails().then((data) => {
            console.log(data);
            this.setState(
                (currState)=>({
                      tasks:  currState.tasks.concat(data[0].tasks),
                      users:  data
                })
                )
        });
        this.handleForSubmit=this.handleForSubmit.bind(this);
        this.handleForDelete=this.handleForDelete.bind(this);
        this.fetchdetails=this.fetchdetails.bind(this);
        this.handleOnLogin=this.handleOnLogin.bind(this);
        this.handleOnSubmitLogin=this.handleOnSubmitLogin.bind(this);
        this.fetchUserdetailser=this.fetchUserdetailser.bind(this);
        this.setAray=this.setAray.bind(this);
        this.registeUser=this.registeUser.bind(this);
        this.handleOnRegisterUser=this.handleOnRegisterUser.bind(this);

    }
async fetchUserdetailser(emailId){
        let myData = {};
         await fetch('http://localhost:3000/users/'+emailId).then(function(response){
            return response.json()
            .then(data => {
                myData = data
            });
            });
            return myData;
        } 
    fetchdetails(){
        return  fetch('http://localhost:3000/users/').then(function(response){
            return response.json();
            });
        } 
async postMyNotes(){
            this.saveData={
                "tasks":this.state.tasks
            }
            console.log(this.state.id);
            console.log(this.saveData);
         await fetch('http://localhost:3000/users/'+this.state.id, 
            {
                
                method: 'PUT', // or 'PUT'
                body: JSON.stringify(this.saveData), // data can be `string` or {object}!
                headers:{
                  'Content-Type': 'application/json'
                }
            })
        }

        registeUser(){
            // this.saveData={
            //     this.state.users
            // }
            console.log('Sending');
            console.log(JSON.stringify(this.state.users));

            return fetch('http://localhost:3000/users/', 
            {
                
                method: 'POST', // or 'PUT'
                body: JSON.stringify(this.state.users), // data can be `string` or {object}!
                headers:{
                  'Content-Type': 'application/json'
                }
            })

        }
    async handleForSubmit(task){
        const newState={
            id:Math.random()*340293842,
            noteDescription:task,
            noteTitle:task
        }
        console.log("new state is ",newState);
        await this.setState(
            (currState)=>({
                tasks:currState.tasks.concat(newState)
            })
        )
        this.postMyNotes();
        console.log(this.state.tasks)
    }

    handleForDelete(tasker){
        console.log(tasker);
       let myArr=[];
       myArr=this.state.tasks;
        console.log('Delete in main app');
        for (var i = myArr.length - 1; i >= 0; --i) {
            if (myArr[i].id== tasker) {
                myArr.splice(i,1);
            }
        }
        this.setState(
            (currState)=>({
                tasks:myArr
            })
                
            )
        console.log(this.state.tasks)
        this.postMyNotes();
       
    }
    setAray(tasking){
        this.setState(
            (currState)=>({
                  tasks:  tasking
            })
            )
    }

    async handleOnSubmitLogin(taskp){
        //let data = {};
        console.log('SUBMIT STARTED');
        console.log(taskp);
       this.state.data =  await this.fetchUserdetailser(taskp);
       console.log(this.state.data);
       console.log("id", this.state.data.id);
       this.state.id=this.state.data.id;
       this.state.tasks=this.state.data.tasks;
       
       this.handleOnLogin();

    }

    handleOnRegisterUser(tasknew){
        console.log(tasknew);
        console.log(this.state.users);
        console.log('Register user init');
        const newState={
            id:tasknew,
            tasks:[]
        }
        console.log("new state is ",newState);
        console.log(this.state.users);
        this.state.users=newState;
        // this.setState(
        //     (currState)=>({
        //         users:currState.users.concat(newState)
        //     })
        // )
        console.log(this.state.users)
        this.registeUser();


    }
    
    handleOnLogin(taskin){
        console.log(taskin);
        console.log('logined');
            this.setState({
                login:!this.state.login
            })

        console.log(this.state.login);
    }
    
    render(){
        let maincl=this.state.login?"op":"nop"
        let logincl=this.state.login?"nopl":"op"
       // console.log(logincl);
        return(
        <div color="primary" variant="inherit" >
        <Login classprop={logincl} handleOnSubmitLogin={this.handleOnSubmitLogin} handleOnRegisterUser={this.handleOnRegisterUser} onClick={this.handleOnLogin} />
        <div className={maincl}>
    <AppBar position="static" className="AppBar">
         <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
          <MenuIcon ></MenuIcon>
     </IconButton>
        <Typography variant="h6" color="inherit" >
        StickyNotes
     </Typography>
     
     <TextField color="inherit" placeholder="Search here...." className="textField"></TextField>
     <Button color="inherit" onClick={this.handleOnLogin} className="headerbtn">Login/SignUp</Button>
    </Toolbar>
    
    </AppBar>
    <div className="content">
    <div className="editor">
    <EditTexthere handleForSubmit={this.handleForSubmit} desc="Title" desc2="Take a note...."/>
    </div>
    <CardList tasks={this.state.tasks} handleForDelete={this.handleForDelete}></CardList>

    </div>
    
</div>
           
        </div>


        )
    }
}
export default KeepApp