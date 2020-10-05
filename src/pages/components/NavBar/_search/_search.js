import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function _search() {
    return (
        <div className="search">
            <div className="search__input">
                <input placeholder="Search..." className="input" type="text"/>
            </div>
            <FontAwesomeIcon className="search__icon" icon={faSearch}/>
        </div>
    )
}

export default _search
