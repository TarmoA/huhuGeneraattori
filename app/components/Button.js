var React = require('react');

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.text}</button>
        );
    }
}

module.exports = Button;
