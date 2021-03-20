import React, { Component } from 'react';
import { Card, Header, Form, Input, Icon } from 'semantic-ui-react';
import './myTaskList.css';


class MyTaskList extends Component {
    constructor(props){
        super(props);

        this.state = {
            task: '',
            tasklist: []
        };
    }

    componentDidMount = () => {
        this.getTask();
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () => {
        if(this.state.task) {
            let tasklist = JSON.parse(localStorage.getItem('tasklist'));

            if(tasklist == null) {
                tasklist = [];
            }

            let task = {
                task: `? ${this.state.task}`,
                status: false
            };

            tasklist.push(task);

            localStorage.setItem('tasklist', JSON.stringify(tasklist));

            this.setState({ task: ''});

            this.getTask();
        }
    };

    //get all task
    getTask = () => {
        let tasklist = JSON.parse(localStorage.getItem('tasklist'));

        if(tasklist) {
            tasklist = tasklist.sort((a, b) => {
                if(a.status) {
                    return 1;
                } else if(b.status) {
                    return -1
                }
                return 0;
            });
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default MyTaskList