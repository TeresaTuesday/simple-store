<<<<<<< HEAD
import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {login} from '../../config/auth'

import '../../styles/Form.css'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pw: ''
    }
  }
  
  render() {
    return (
      <form className="flexBox"
            onSubmit= {
        async e => {
        e.preventDefault()
        await login(this.state.email, this.state.pw)
      }}>
        <TextField required floatingLabelText={`Email`} onChange={(e) => this.setState({ email: e.target.value })} />
        <TextField required type='password' floatingLabelText={`Password`} onChange={(e) => this.setState({ pw: e.target.value})} />
        <RaisedButton label='Enter' type='submit' />
      </form>
    )
  }
}

=======
import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'


export default class extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      emailHolder: this.props.emailHolder,
      confirmHolder: this.props.confirmHolder,
      emailValue: '',
      confirmValue: '',
      buttonText: this.props.buttonText,
      
    }
  }
  
  render(){
    const handleEmailChange = (event) => {
      this.setState({emailValue: event.target.value})
    }
    const handleConfirmChange = (event) => {
      this.setState({confirmValue: event.target.value})
    }
    const handleSubmit = (event) => {
      alert('Email: ' + this.state.emailValue + "\n" +
        'Password: ' + this.state.confirmValue)
      event.preventDefault();
    }
    return (
      <div>
        <Paper>
          <h3>Hello! Please login.</h3>
          <form onSubmit={handleSubmit}>
            <label for="Email">Email:
              <input id="Email" type="email" placeholder={this.state.emailHolder} onChange={handleEmailChange}/>
            </label>
            <br/>
            <label for="Password">Password: </label>
            <input name="Password" type="password" placeholder={this.state.confirmHolder} onChange={handleConfirmChange} />
            <br/>
            <RaisedButton label={this.state.buttonText} type="submit" secondary={true} /*onClick={handleClick}*//>
          </form>
        </Paper>
      </div>
    );
  }
}
>>>>>>> 7c8242624bc2467019df42ac86d3130da53bbce3
