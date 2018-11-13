import React from "react"
import moment from "moment-jalaali";
import axios from 'axios'

class Header extends React.Component {
    componentDidMount(){

    }
    render() {
        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.props.MinusOneMonth}>
                        L
                  </div>
                </div>
                <div className="col col-center">
                    <span>{moment(this.props.currentMonth).format("jMMMM jYYYY")}</span>
                </div>
                <div className="col col-end">
                    <div className="icon" onClick={this.props.AddOneMonth}>
                        R
                  </div>
                </div>
            </div>
        )
    }

}

export default Header;