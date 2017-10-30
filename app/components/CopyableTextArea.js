var React = require('react');
var Button = require('./Button.js');
var PropTypes = require('prop-types');


const textAreaStyles = {
    maxWidth:"100%"
}


class CopyableTextArea extends React.Component {

    render() {
        var maxSize = 0
        return (
            this.props.content.length != 0 && <textarea
            readOnly={true}
            style={textAreaStyles}
            value={this.props.content.reduce( ((s1, s2) => s1 + "\n" + s2) )}
            rows={10}
            cols={80}/>
        );
    }
}

CopyableTextArea.propTypes = {
    content: PropTypes.arrayOf(PropTypes.string)
}

module.exports = CopyableTextArea;
