import React from "react"
import moment from "moment-jalaali";

const Header = (props) => {
    return (
        <div className="header row flex-middle">
            <div className="col col-start">
                <div className="icon" onClick={props.MinusOneMonth}>
                    L
                  </div>
            </div>
            <div className="col col-center">
                <span>{moment(props.currentMonth).format("jMMMM jYYYY")}</span>
            </div>
            <div className="col col-end">
                <div className="icon" onClick={props.AddOneMonth}>
                    R
                  </div>
            </div>
        </div>
    );
}

export default Header;