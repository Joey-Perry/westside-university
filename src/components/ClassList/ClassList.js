import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      students: [],
    }
    
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(({data}) => {
        // console.log(data);
        this.setState({ students: data });
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    
    return (
      <div className="box">
        <Link className='back-btn' to={'/'}>BACK</Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
      {this.state.students.map(student => {
        return <Link to={`/student/${student.id}`} key={student.id}><h3>{student.first_name} {student.last_name}</h3></Link>
      })}
      </div>
    )
  }
}