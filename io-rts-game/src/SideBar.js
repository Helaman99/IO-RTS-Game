import React from 'react';

export default function SideBar({ currBlock }) {
    return (
        <div className="side-bar">
            <div className="menu">
                <div id="details">
                    { currBlock ? (
                        currBlock.occupant ? <p>{ currBlock.occupant.name }</p> : <p>{ currBlock.terrainType }</p>
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
                            <ul>
                                <li>Terrain: { currBlock.terrainType }</li>
                                <li>Coordinates: [{ currBlock.x + "," + currBlock.y }]</li>
                                <li>Destroyable: { currBlock.destroyable ? "True" : "False" }</li>
                                <li>Traversable: { currBlock.traversable ? "True" : "False" }</li>
                                <li>Health: { currBlock.health }</li>
                                <li>Color: { currBlock.color }</li>
                                <li>Occupant: { currBlock.occupant ? currBlock.occupant.name : "None" }</li>
                            </ul>
                        )
                    ) : (
                        <p>No unit selected.</p>
                    )}
                </div>
            </div>
        </div>
    );
}