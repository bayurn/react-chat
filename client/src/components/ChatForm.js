import React, { Component } from 'react'

export default class ChatForm extends Component {
    constructor(props) {
        super(props);
        this.state = { title: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleSubmit(event) {
        this.props.add(this.state.title);
        this.setState({ title: '' });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div col-sm-8>
                        <label>
                            name
                            <input class="form-control" type="text" value={this.state.title} onChange={this.handleChange} />
                        </label>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}

