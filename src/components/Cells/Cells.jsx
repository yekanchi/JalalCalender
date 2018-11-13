import React from "react";
import moment from "moment-jalaali";

class Cells extends React.Component {

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  render() {
    let currentMonth = this.props.CurrentMonth;
    let selectedDate = this.props.SelectedDate;

    const dateFormat = "jD";

    let currentMonthStart = moment(currentMonth).startOf('jMonth');
    let currentMonthEnd = moment(currentMonth).endOf('jMonth');
    let boxStartDate = moment(currentMonthStart).startOf('week');
    let boxEndDate = moment(currentMonthEnd).endOf('week');
    const rows = [];
    let days = [];

    let day = moment(boxStartDate);
    let formattedDate =   "";

    while (day.isBefore(boxEndDate)) {
      for (let i = 0; i < 7; i++) {
        formattedDate = moment(day).format(dateFormat);
        const cloneDay = moment(day);
        days.push(
          <div
            className={`col cell ${
              !moment(day).isSame(currentMonthStart, 'jMonth')
                ? "disabled" :
                moment(day).isSame(moment(selectedDate), 'day') ? "selected" : ""
              } ${(day.day()/5===1) ? "off" : ""}`}
            key={day}
          onClick={() => this.props.DateClicked(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = moment(day.add(1, 'days'));
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return (<div className="body">{rows}</div>);
  };

}

export default Cells;