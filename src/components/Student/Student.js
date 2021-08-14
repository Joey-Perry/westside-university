import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './student.css';

export default class Student extends Component {
  constructor(props) {
    super(props)

    this.state = {
      studentInfo: {},
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(({data}) => this.setState({ studentInfo: data }))
      .catch(err => console.log(err))
  }

  render() {
    const { first_name, last_name, email, grade } = this.state.studentInfo;

    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{first_name} {last_name}</h1>
        <h3>Grade: {grade}</h3>
        <h3>Email: {email} </h3>
        <Link className='back-btn' to={`/classlist/${this.state.studentInfo.class}`}>BACK</Link>
      </div>
    )
  }
}