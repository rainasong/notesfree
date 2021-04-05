import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-labels';

const PieChart = (props) => {
    return (
        <div>
            <Pie
                data={{
                    labels: [
                    'Japan Xinchipa',
                    'Btics Chang',
                    'Alice Tan'
                    ],
                    datasets: [{
                    label: 'My First Dataset',
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                    hoverOffset: 4
                    }]
                }}
                width={500}
                height={500}
                options={{
                    responsive: true,
                    fontColor: 'white',
                    maintainAspectRatio: false,
                    plugins:{
                        labels: {
                            render: 'percentage',
                            fontColor: 'white',
                            fontSize: 14,
                            precision: 2
                        }
                        },
                    onClick: (e, element) => {
                        if (element.length > 0) {
                          var index = element[0]._index;
                          var label = element[0]._chart.data.labels[index];
                          props.data.showKeywords(label, index);
                        }
                      },
                }}
            />
        </div>
    );
}

export default PieChart;
