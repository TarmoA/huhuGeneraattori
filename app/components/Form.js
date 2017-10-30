var React = require('react');
var Button = require('./Button.js');
var InputField = require('./InputField.js');

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userInput: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({userInput: e.target.value});
        this.props.onFieldChange(e.target.value);
    }
    handleClick() {
        this.props.onClick();
    }


    render() {
        return (
            <div>
            <p>Kuinka monta huhua haluat?</p>
            <InputField onChange={this.handleChange} value={this.state.userInput} placeholder={"max 1000"}/><br/>
            <Button onClick={this.handleClick} text={"Generoi!"}/>
            </div>
        );
    }
}

module.exports = Form;
