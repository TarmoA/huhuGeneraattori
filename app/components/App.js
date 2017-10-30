var React = require('react');
var Generator = require('./Generator.js');
var LineDisplayer = require('./LineDisplayer.js');
var Form = require('./Form.js');
var CopyableTextArea = require('./CopyableTextArea.js');
var PropTypes = require('prop-types');


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: [],//list of lists of strings
            generator: new Generator,
            nOfLines: 0,
            maxLines: 1000
        }
        this.changeContent = this.changeContent.bind(this);
        this.changeLineCount = this.changeLineCount.bind(this);
    }

    changeContent() {
        var newLines = this.state.generator.generateLines(this.state.nOfLines);
        this.setState({content: newLines});
    }
    changeLineCount(lineCount) {
        const parsed = parseInt(lineCount, 10);
        if (!isNaN(parsed) && parsed.toString() === lineCount && parsed >= 0) {
            this.setState({nOfLines: Math.min(parsed, this.state.maxLines) });
        } else {
            this.setState({nOfLines: 0});
        }
    }

    render() {
        return (
            <div>
                <h1>Huhugeneraattori</h1>
                <Form onClick={this.changeContent} onFieldChange={this.changeLineCount}/>
                <CopyableTextArea content={this.state.content.reduce( ((a, b) => a.concat(b)), [] )}/><br/>
                <LineDisplayer content={this.state.content}/>
            </div>
        );
    }
}

App.propTypes = {
    content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    nOflines: PropTypes.number,

}


module.exports = App;
