import React from "react";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      <i
        className={
          alert.alertType === "danger"
            ? "fas fa-exclamation"
            : alert.alertType === "warning"
            ? "far fa-regular"
            : "far fa-check"
        }
      />
      <span className="ml-2">{alert.msg}</span>
    </div>
  ));

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
