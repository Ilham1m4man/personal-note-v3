import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

function DetailedNote({ note }) {
    const { title, createdAt, body } = note;
    return (
        <>
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <div className="detail-page__body">{body}</div>
        </>
    )
}

DetailedNote.propTypes = {
    note: PropTypes.object.isRequired,
}

export default DetailedNote;