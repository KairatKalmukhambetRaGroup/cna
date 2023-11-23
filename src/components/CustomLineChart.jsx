'use client';

import { LAST_MONTH, LAST_WEEK, LAST_YEAR } from "@/constants";
import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, PointElement, LineElement, scales } from "chart.js";
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const CustomLineChart = ({data,data2, timePeriod}) => {
    return (
        <div className="chart-item">
            <Line
                data={{
                    labels: data.map((i)=> convert(i._id, timePeriod)),
                    datasets: [
                        {
                            id: 1,
                            label: 'Посещения сайта',
                            data: data.map((i)=>i.count),
                            borderColor: "#121e2d",
                            backgroundColor: "#121e2d",
                        },
                        {
                            id: 2,
                            label: 'Посещения справочника',
                            data: data2.map((i)=>i.count),
                            borderColor: "#2a81dd",
                            backgroundColor: "#2a81dd",
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: "Посещяемость сайта"
                        }
                    },
                    aspectRatio: 3/1,
                    scales: {
                        y: {
                            beginAtZero: true,
                            min: 0,
                            ticks:{
                                callback: function(value) {if (value % 1 === 0) {return value;}}
                            }
                        }
                    }
                }}
            />

        </div>
    );
}

export default CustomLineChart;

const months = ['', 'янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'];

function convert(dt, timePeriod) {
    let d = dt.split('.');
    const thisYear = new Date().getFullYear();

    switch(timePeriod){
        case LAST_MONTH:

        let year = d[1];
        let week = d[0];

        // first date of year
        let firstDateOfYear = new Date(year, 0, 1);
        // get the day of first date in the year
        let firstDayOfYear = firstDateOfYear.getDay();

        let timeofOneDay = 60 * 60 * 24 * 1000;
        let timeofOneWeek = 60 * 60 * 24 * 7 * 1000;
        // last day of the week, 6 days later
        let timeof6Day = 60 * 60 * 24 * 6 * 1000;

        // if week start from Monday
        let timeOfFirstDay = firstDateOfYear.getTime() - (timeofOneDay * (firstDayOfYear - 1)) + timeofOneWeek * (week - 1);
        let timeOfLastDay = timeOfFirstDay + timeof6Day;
        let start = new Date(timeOfFirstDay);
        start = `${start.getDate()}.${start.getMonth()}${start.getFullYear() === thisYear ? '' : `.${start.getFullYear()}`}`;
        let end = new Date(timeOfLastDay);
        end = `${end.getDate()}.${end.getMonth()}${end.getFullYear() === thisYear ? '' : `.${end.getFullYear()}`}`;
        return `${start} - ${end}`;

        case LAST_YEAR:
            return `${months[(Number)(d[0])]} ${thisYear == d[1] ? '' : d[1]}`;
        default:
            return dt;
    }
}