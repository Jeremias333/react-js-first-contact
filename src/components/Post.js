import React from "react";
import '../App.css';

export default class Post extends React.Component{
    render(){
        return (
            <h1 className="post">{this.props.title}</h1>
        );
    }
}