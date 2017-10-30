var React = require('react');
// var data = require( '../data/words.json');
var data = require('../data/words');


class HuhuGen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {parsedJson: data}
        this.randomIndex = this.randomIndex.bind(this);
        this.generateHuhu = this.generateHuhu.bind(this);
    }
    randomIndex(i) {
        return Math.floor(Math.random()*i);
    }


    generateHuhu() {
        var parsed = this.state.parsedJson;
        var subjSingularSize = parsed.subjects.singular.length;
        var totalSubjSize = subjSingularSize + parsed.subjects.plural.length;
        var subjI = this.randomIndex(totalSubjSize);
        var singular = subjI < subjSingularSize;
        var subjI = singular ? subjI : subjI - subjSingularSize;
        var subj = singular ? parsed.subjects.singular[subjI] : parsed.subjects.plural[subjI];

        var verbArr = singular ? parsed.verbs.singular : parsed.verbs.plural;
        var verb = verbArr[this.randomIndex(verbArr.length)];

        var objArr = singular ? parsed.objects.singular : parsed.objects.plural;
        objArr = objArr.concat(parsed.objects.both);
        var obj = objArr[this.randomIndex(objArr.length)];

        return "..."+ subj + " " + verb + " " + obj
    }

    render() {
        return null;
    }

}
module.exports = HuhuGen;
