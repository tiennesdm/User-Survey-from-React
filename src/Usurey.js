import React, { Component } from 'react';


var firebase= require('firebase');
var uuid=require('uuid');

var config = {
  apiKey: "AIzaSyDuWrLPHveIABDFVsg39zgV2kBV9KICZNU",
  authDomain: "user-survey-5eddf.firebaseapp.com",
  databaseURL: "https://user-survey-5eddf.firebaseio.com",
  projectId: "user-survey-5eddf",
  storageBucket: "user-survey-5eddf.appspot.com",
  messagingSenderId: "443620300147"
};
firebase.initializeApp(config);




class Usurvey extends Component {
  nameSubmit(event){
    var studentName=this.refs.name.value;
    this.setState({studentName:studentName},function(){
      console.log(this.state);
    })
  }
  constructor(props){
    super(props);

    this.state = {
      uid:uuid.v1(),
      studentName:'',
      answer:{
        answer1:'',
        answer2:'',
        answer3:''
      },
      isSubmitted:false
    };
    this.nameSubmit=this.nameSubmit.bind();
  }
  render(){
    var studentName;
    var questions;
    if(this.state.studentName==='' && this.state.isSubmitted===false){
      studentName=<div>
<h1> hey student enter your name:</h1>
<form onSubmit={this.nameSubmit}>
<input type="text" placeholder="enter your name" ref="name" className="namy"/>
</form>
      </div>;
      questions=''
    }
    else if(this.state.studentName!== '' && this.state.isSubmitted===false){
      studentName=<h1> welcome to you survey,{this.state.studentName}</h1>;
      questions=<p1>hey</p1>

    }

    return(
      <div>
      { studentName }
      -------------------
      {questions}

      </div>
    );
  }
}
export default Usurvey;
