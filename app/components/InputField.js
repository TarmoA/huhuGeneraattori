var React = require('react');

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    handleUserInput(e) {
        this.props.onChange(e);
    }


    render() {
        return (
            <input type="text"
            onChange={this.handleUserInput}
            value={this.props.value}
            placeholder={this.props.placeholder}
            />
        );
    }
}

module.exports = InputField;
