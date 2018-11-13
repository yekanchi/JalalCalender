import React from "react";
import moment from "moment-jalaali";
import "./DateInput.css";


class DatInput extends React.Component {
    render() {
        return (
            <div width='20px' className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">انتخاب</span>
                </div>
                <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" >
                    {moment(this.props.currentDate)}
                </input>
            </div>
        )
    }

}

export default DateInput;