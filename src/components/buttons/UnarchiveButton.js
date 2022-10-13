import React from "react";
import PropTypes from "prop-types";
import { MdUnarchive } from "react-icons/md";

function UnarchiveButton({ id, onUnarchive }) {
    return <button className="action" type="button" title="Unarchive" onClick={() => onUnarchive(id)}><MdUnarchive /></button>
}

UnarchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onUnarchive: PropTypes.func.isRequired
}

export default UnarchiveButton;