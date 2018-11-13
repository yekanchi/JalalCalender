import React from "react";
import moment from "moment-jalaali";


import Auxx from "../../hoc/Auxx/Auxx"

import Header from "../Header/Header";
import WeekDays from "../WeekDays/WeekDays";
import Cells from "../Cells/Cells";

moment.loadPersian()

class Calendar extends React.Component {
  state = {
    currentMonth: moment(),
    selectedDate: moment()
  };

  onDateClick = (day) => {
    this.setState({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: moment(this.state.currentMonth).add(1, 'jMonth')
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: moment(this.state.currentMonth).add(-1, 'jMonth')
    });
  };


  render() {
    return (
      <Auxx>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossOrigin="anonymous" />
        <div className="calendar">
          <Header
            currentMonth={this.state.currentMonth}
            AddOneMonth={this.nextMonth}
            MinusOneMonth={this.prevMonth} />
          <WeekDays />
          <Cells CurrentMonth={this.state.currentMonth} SelectedDate={this.state.selectedDate} DateClicked={this.onDateClick} />
        </div>
      </Auxx>

    );
  }
}

export default Calendar;