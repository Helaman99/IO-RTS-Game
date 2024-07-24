import React from 'react';
import generateGrid from './map';

let instance = null;

export default class GameManager extends React.Component {
    constructor(props) {
        super(props);
        if (!instance) { 
            instance = this; 
            this.state = { mapGrid: generateGrid('riverInTheMiddle') };
        }
        return instance;
    }

    handleBlockClick(rowIndex, colIndex) {
        console.log(`Block clicked at row ${rowIndex}, column ${colIndex}`);
        console.log(`terrainType: ${this.state.mapGrid[rowIndex][colIndex].terrainType}`);
        console.log(`occupant: ${this.state.mapGrid[rowIndex][colIndex].occupant}`);
        console.log(`destroyable: ${this.state.mapGrid[rowIndex][colIndex].destroyable}`);
        console.log(`traversable: ${this.state.mapGrid[rowIndex][colIndex].traversable}`);
        console.log(`health: ${this.state.mapGrid[rowIndex][colIndex].health}`);
        this.state.mapGrid[rowIndex][colIndex].selectOccupant();
    }    
    
    renderMap() {
        const { mapGrid } = this.state;
        return (
            <div className="map">
                { mapGrid.map(( row, rowIndex ) => (
                    <div key = {rowIndex} className = "row">
                        { row.map(( gridBlock, colIndex ) => (
                            <div
                                key = {`${ rowIndex }-${ colIndex }`}
                                id = {`${ rowIndex }-${ colIndex }`}
                                className = "grid-block"
                                onClick = {() => this.handleBlockClick( rowIndex, colIndex )}
                                style = {{
                                    backgroundColor: gridBlock.color
                                }}
                            >
                                {/* Render terrain, buildings, and units here */}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }    

    render() {
        return this.renderMap();
    }
}