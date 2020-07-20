import React from 'react';

class OrderTableCell extends React.Component {

    render() {
        console.log(this.props.data);
        const {id, title, content, faq_category} = this.props.data;
        const index = this.props.index
       // const statusStyle = status.includes("Completed") ? "text-white bg-success" : status.includes("On Hold") ? "bg-amber" : status.includes("Delayed") ? "text-white bg-danger" : "text-white bg-grey";
        return (
            <tr
                tabIndex={-1}
                key={id}
            >
                <td></td>
                <td>{title}</td>
                <td>{content}</td>
                <td>{faq_category}</td>
                <td className="status-cell text-right">
                    <div onClick={() => this.props.onclick('edit', index, 'aboutLender')}>Edit</div>
{/*
                    <div className={` badge text-uppercase ${statusStyle}`}>{status}</div>
*/}
                </td>
            </tr>

        );
    }
}

export default OrderTableCell;
