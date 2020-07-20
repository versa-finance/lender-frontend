import React from 'react';
import {Button} from "reactstrap";

class TextFields extends React.Component {

    render() {

        return (
            <form className="row" noValidate autoComplete="off">

                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Discounted Sum Of Account Balance</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1"/>
                    </div>
                </div>

                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Discounted Sum Of Airtime Recharge Balance</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1"/>
                    </div>
                </div>

                <div className="col-md-12 col-12">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Default Message Rule Count Cap</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1"/>
                    </div>
                </div>

                <h5 style={{fontWeight: 'bold', marginTop: 20}}>Cap Reached? (Weightings B)</h5>

                <div className="col-md-12 col-12 mt-4">
                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="exampleFormControlInput1">Airtime Discounted Value</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col">
                            <label htmlFor="exampleFormControlInput1">Account Discounted Value</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                </div>

                <h5 style={{fontWeight: 'bold', marginTop: 30}}>Cap Not Reached? (Weightings C)</h5>

                <div className="col-md-12 col-12 mt-4">
                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="exampleFormControlInput1">Airtime Discounted Value</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col">
                            <label htmlFor="exampleFormControlInput1">Account Discounted Value</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-12 mt-4">
                    <Button color="primary" className="jr-btn jr-btn-label left">
                        <i className="zmdi zmdi-save zmdi-hc-fw"/>
                        <span>Save</span>
                    </Button>
                </div>
            </form>
        );
    }
}


export default TextFields;