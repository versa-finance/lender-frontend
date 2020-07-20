import React from 'react';
import { ResponsiveContainer } from 'recharts';
import CanvasJSReact from './canvasjs-2.3.2/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LoanRepaysPieChart = (data) => {
    const {fully_paid_loan, not_fully_paid_loan} = data.data;

    const options = {
        animationEnabled: true,
        exportEnabled: false,
        theme: "light1", // "light1", "dark1", "dark2"
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}",
            startAngle: -90,
            dataPoints: [
                {y: fully_paid_loan, label: "Fully Repayment"},
                {y: not_fully_paid_loan, label: "Pending Repayment"}
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

export default LoanRepaysPieChart