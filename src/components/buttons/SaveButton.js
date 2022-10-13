import React from "react";
import { HiCheck } from "react-icons/hi";

function SaveButton() {
    return (
        <div className="add-new-page__action">
            <button className="action" type="submit" title="Save"><HiCheck /></button>
        </div>
    )
}

export default SaveButton;