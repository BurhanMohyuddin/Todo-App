import React from 'react';
import "./UserInput.css";
export default class UserInput extends React.Component {

    constructor (props) {
        super(props);
        
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange (e) {
          this.setState({value: e.target.value});
      }

      handleSubmit (todo) {
          if(todo.length > 0) {
            this.props.handleSubmit(todo);
          }
          
      }
      

    render() {
    return (
        <form>
            <label>
                <h4>What needs to be done ?</h4>
            </label>
            <input className="form-control" value = {this.state.value} type="text" placeholder="Enter" onChange = {this.handleChange}/>
            <button className = "btn btn-primary" type = "button" onClick ={() =>this.handleSubmit(this.state.value)}>
                Add # {this.props.nextid}
            </button>
        </form>
    )
    }
}
 