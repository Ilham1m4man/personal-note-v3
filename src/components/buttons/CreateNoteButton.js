import React from "react";
import { Link } from "react-router-dom";
import { MdCreate } from "react-icons/md";

function CreateButton() {
    return (
        <Link to="/create">
            <div className="homepage__action">
                <button className="action" type="button" title="Create note"><MdCreate /></button>
            </div>
        </Link>
    )
}

export default CreateButton;