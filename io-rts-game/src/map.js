class GridBlock {
    constructor(terrainType) {
        this.occupant = null;
        this.terrainType = terrainType;
        switch (terrainType) {
            case 'grass':
                this.destroyable = false;
                this.traversable = true;
                this.health = 0;
                this.color = "green";
                break;
            case 'water':
                this.destroyable = false;
                this.traversable = false;
                this.health = 0;
                this.color = "blue";
                break;
            case 'sand':
                this.destroyable = false;
                this.traversable = true;
                this.health = 0;
                this.color = "yellow";
                break;
            default:
                this.destroyable = false;
                this.traversable = true;
                this.health = 0;
                this.color = "gray";
                break;
        }
    }

    selectOccupant() {
        if (this.occupant) {
            console.log("Occupant selected");
        }
        else {
            console.log("No occupant!")
        }
    }

    takeDamage(damage) {
        if (this.destroyable) {
            this.health -= damage;
        }
        if (this.occupant) {
            this.occupant.health -= damage;
        }
    }
}


export default function generateGrid(mapType, rows = 15, cols = 36, mapGrid = []) {
    switch (mapType) {
        case "riverInTheMiddle":
            for (let i = 0; i < rows; i++) {
                mapGrid[i] = [];
                for (let j = 0; j < cols; j++) {
                    j === 17 ? mapGrid[i][j] = new GridBlock('water') : mapGrid[i][j] = new GridBlock('grass');
                }
            }
            break;
        default:
            for (let i = 0; i < rows; i++) {
                mapGrid[i] = [];
                for (let j = 0; j < cols; j++) {
                    mapGrid[i][j] = new GridBlock('grass');
                }
            }
            break;
    }

    return mapGrid;
}