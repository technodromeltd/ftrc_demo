import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import {connect} from 'react-redux'
import * as actions from '../../store/actions/actions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      password: ""
    }
   
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onLogin(this.state.userName,this.state.password)
    this.setState({})
  }
  onLoginFormChange= event => {
    // console.log([event.target.name],event.target.value)
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  componentDidUpdate() {
  
    if(this.props.loggedUserId) {
      this.props.history.replace('/')
    }
 

  }
render() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{textAlign:'center',padding:'1em'}}>
        {/* <p>Login functionality not fully implemented, use test/test  to login</p> */}
       
    
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form  onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="userName"
            autoComplete="email"
            autoFocus
            value={this.state.userName}
            onChange={(e)=> this.onLoginFormChange(e)}
            />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={this.state.password}
            onChange={(e)=> this.onLoginFormChange(e)}
            />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
            >
            Sign In
          </Button>
          
        </form>
      </div>
     
    </Container>
  );
}
}


const mapStateToProps = (state) => {
  return {
    loggedUserId : state.loggedUserId
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (userName,password) => dispatch(actions.tryLogin(userName,password))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)