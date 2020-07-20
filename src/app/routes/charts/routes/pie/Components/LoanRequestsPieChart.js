import React from 'react';
import { ResponsiveContainer } from 'recharts';
import CanvasJSReact from './canvasjs-2.3.2/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LoanRequestsPieChart = (data) => {
    const {pending_loan_requests, approved_loan_requests, declined_loan_requests} = data.data;

    const options = {
        animationEnabled: true,
        exportEnabled: false,
        theme: "light1", // "light1", "dark1", "dark2"
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}",
            startAngle: -90,
            dataPoints: [
                {y: pending_loan_requests, label: "Pending"},
                {y: approved_loan_requests, label: "Approved"},
                {y: declined_loan_requests, label: "Declined"}
            ]
        }]
    };

    return (
        <ResponsiveContainer width="100%" height="100%">
            <CanvasJSChart options = {options}
                /* onRef={ref => this.chart = ref} */
            />
        </ResponsiveContainer>
    )

};

export default LoanRequestsPieChart