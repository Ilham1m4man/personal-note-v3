import React from "react";
import PropTypes from "prop-types";
import { MdArchive } from "react-icons/md";

function ArchiveButton({ id, onArchive }) {
    return <button className="action" type="button" title="Archive" onClick={() => onArchive(id)}><MdArchive /></button>
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired
}

export default ArchiveButton;