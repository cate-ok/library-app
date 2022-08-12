import './FilterBar.css';
import React from 'react';

function FilterBar(props) {

    return (
        <div className="filter-bar">
            <input type="checkbox" value={props.showAvailable} name="selectAvailableCbx" onChange={props.onShowAvailable} />
            <label htmlFor="selectAvailableCbx">Show available</label>
        </div>
    );
}

export default FilterBar;