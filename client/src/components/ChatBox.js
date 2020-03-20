import React, { Component } from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'

export default class ChatBox extends Component {
    constructor(props) {
        super(props)
        this.state = { data: [] };

        this.addChat = this.addChat.bind(this);
        this.completeChat = this.completeChat.bind(this);
    }

    addChat(title) {
        this.setState((state) => ({
            data: [...state.data, { id: Date.now().toString(), title, complete: false }]
        }))
    }

    completeChat(id) {
        this.setState((state) => ({
            data: state.data.map(item => {
                if (item.id === id) {
                    item.complete = true;
                }
                return item
            })
        }))
    }

    render() {
        return (
            <div align="center">
                <h1>Jdulud</h1>
                <ChatList data={this.state.data} complete={this.completeChat} />
                <ChatForm data={this.addChat} />
            </div>
        )
    }
}

