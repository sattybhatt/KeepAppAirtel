import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../css/main.css';
class Cardnew extends React.Component{

    constructor(props){
      super(props);
      this.state={
        value:""
      }
      this.handleOnDelete=this.handleOnDelete.bind(this);
    }
    handleOnDelete(e){
      console.log(e.target)
      e.preventDefault();
      console.log('Starting delete');
      console.log(e.target.value);
     
      this.props.handleForDelete(this.props.keynew);

  }
    render(){

        return(
            <Card className="carder" id={this.props.keynew}>
                <CardContent>
        <Typography  color="textSecondary" gutterBottom>
        {this.props.title}
        </Typography>
        <Typography variant="h5" component="h2">
        {this.props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <button onClick={this.handleOnDelete} keybtn={this.props.keynew} size="small">Delete</button>
      </CardActions>

                </Card>

        )
    }

}
export default Cardnew