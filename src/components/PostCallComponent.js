import React from "react";
import { withTaskContext } from '@twilio/flex-ui';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';



class PostCallComponent extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      destinationNumber: ""

    }


  }

  updateCall = () => {
  
    var callSID = this.props.task.attributes.conference.participants.customer;
    axios.get(`https://brass-chicken-6161.twil.io/postCallRedirect?callSID=${callSID}&to=${this.state.destinationNumber}`);
                                                                    
  }

    handleNameChange = (event) => {
    this.setState({destinationNumber: event.target.value});
  };
  
  render() {



    return (
    <div>
         <TextField
              onChange={this.handleNameChange}
              name='numberField'
              id='numberField'
              value={this.state.destinationNumber}
              label='type destination number'
              
          />
          <br/>
          <br/>
          <Button
            color="primary"
            variant="contained"
            onClick={() => this.updateCall()}
            size="small"
          >
          Send call to IVR
          </Button>


    </div>
    )
  }
}


export default withTaskContext(PostCallComponent);
