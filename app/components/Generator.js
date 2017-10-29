var React = require('react');
var HuhuGen = require('./HuhuGen.js');

class Generator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { huhuGen: new HuhuGen}
        this.generateLines = this.generateLines.bind(this);
    }

    //generate a list of lists of strings, max 100 lines per list
    generateLines(lineCount) {
        var lines = [];
        for (var j = 0; j <= Math.floor(lineCount/100); j++) {
            var column = [];
            for (var i = 0; i < Math.min(lineCount - j * 100, 100); i++) {
                column.push(this.state.huhuGen.generateHuhu());
            }
            lines.push(column);
        }
        return lines;
    }

    render() {
        return null;
    }
}

module.exports = Generator;
