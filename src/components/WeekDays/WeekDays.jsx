import React from "react"
import moment from "moment-jalaali";

moment.loadPersian()


const WeekDays = (props) => {
    const days = [];
    let weekStart = moment().startOf('jWeek');
    for (let i = 0; i < 7; i++) {
        days.push(
            <div className="col col-center" key={i}>
                {moment(weekStart).add(i, 'days').format("dddd")}
            </div>
        );
    }
    return <div className="days row">{days}</div>;
}


export default WeekDays