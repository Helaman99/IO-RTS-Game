import React from 'react';

export default function SideBar({ currBlock }) {
    return (
        <div className="side-bar">
            <div className="menu">
                <div id="details">
                    { currBlock ? (
                        currBlock.occupant ? <p>{ currBlock.occupant.name }</p> : <p>No unit selected.</p>
                    ) : (
                        <p>No unit selected.</p>
                    )}
                </div>
                <div id="options">
                    { currBlock ? (
                        currBlock.occupant ? (
                            <ul>
                                <li>{ currBlock.occupant.name }</li>
                                <li>Health: { currBlock.occupant.health }</li>
                            </ul>
                        ) : (
                            <p>No unit selected.</p>
                        )
                    ) : (
                        <p>No unit selected.</p>
                    )}
                </div>
            </div>
        </div>
    );
}