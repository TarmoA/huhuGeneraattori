var React = require('react');

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>Generoi!</button>
        );
    }
}

module.exports = Button;
