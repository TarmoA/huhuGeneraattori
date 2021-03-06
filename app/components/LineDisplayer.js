var React = require('react');


const ulStyle = {
    float:"left"
}
const liStyle = {
    listStyleType: "none"
}

class LineDisplayer extends React.Component {
    render() {
        var lines = this.props.content;
        var list = lines.map( (column, j) =>
            <ul key={"outer_"+j} style={ulStyle}>{ column.map( (str,i) =>
                    <li key={"li_"+i} style={liStyle}>{str}</li>
            )}</ul>
        );
        return (
            lines.length != 0 && lines[0].length != 0 && (<div>
            <p>Huhutaan että...</p>
                {list}
            </div>)
        );
    }
}

module.exports = LineDisplayer;
