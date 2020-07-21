import React from "react";
import {render} from "react-dom";
import {makeData} from "../Utils.js";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import '../index.css';

class DefaultSorting extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }

    render() {
        const {data} = this.state;
        console.log('data', data)
        return (
            <div>
                <ReactTable
                    data={data}
                    columns={[
                        {
                            Header: "Name",
                            columns: [
                                {
                                    Header: "First Name",
                                    accessor: "firstName"
                                },
                                {
                                    Header: "Last Name",
                                    accessor: "lastName"
                                }
                            ]
                        },
                        {
                            Header: "Info",
                            columns: [
                                {
                                    Header: "Age",
                                    accessor: "age"
                                }
                            ]
                        }
                    ]}
                    defaultSorted={[
                        {
                            id: "age",
                            desc: true
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
        );
    }
}

export default DefaultSorting;