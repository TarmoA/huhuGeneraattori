var React = require('react');
var Generator = require('./Generator.js');
var LineDisplayer = require('./LineDisplayer.js');
var Form = require('./Form.js');


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
        if (!isNaN(parsed)) {
            this.setState({nOfLines: Math.min(parsed, this.state.maxLines)});
        } else {
            this.setState({nOfLines: 0});
        }
    }

    render() {
        return (
            <div>
                <h1>Huhugeneraattori</h1>
                <Form onClick={this.changeContent} onFieldChange={this.changeLineCount}/>
                <LineDisplayer content={this.state.content}/>
            </div>
        );
    }
}

module.exports = App;
