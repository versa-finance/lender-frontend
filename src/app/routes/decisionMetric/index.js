import React from 'react';
import {connect} from 'react-redux';
import {getDecisionMetric} from "actions";

class decisionMetric extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount(){
        this.props.getDecisionMetric
    }


    render(){
        return (
            <div>
                hello
            </div>
        )
    }
}

export default connect(null, {getDecisionMetric})(decisionMetric);