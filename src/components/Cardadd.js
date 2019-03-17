import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Cardadd extends React.Component{
    render(){

        return(
            <div>
            <Card>
                <CardContent>
        <Typography  color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
         Notes1
        </Typography>
        <Typography color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>

                </Card>

            </div>
        )
    }

}
export default Card
