import React, { Component } from 'react'

export class Todos extends Component {




    state = {
        Lists: ''
    }

    handleClick = (e) => {
        this.setState({
            Lists: [e.target.value]

        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.AddTodos(this.state);

        this.setState({
            Lists: ''
        })
    }

    render() {
        // console.log(this.state.value);
        return (
            <div className="todos container my-5">

                <div className="container ">
                    <form className="row g-3" onSubmit={this.handleSubmit}>

                        <div className="text-center">
                            <label htmlFor="inputPassword2" className="visually-hidden"></label>
                            <input type="text" onChange={this.handleClick} className="form-control" value={this.state.Lists} id="inputPassword2" placeholder="Add your Todos here and press submit" />
                        </div>
                        <div className="text-center">
                            <button type="submit " className="btn btn-primary mb-3">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default Todos
