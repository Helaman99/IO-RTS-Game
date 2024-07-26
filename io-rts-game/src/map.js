class GridBlock {
    constructor(terrainType, x, y) {
        this.terrainType = terrainType;
        this.x = x;
        this.y = y;
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
            case 'cement':
                this.destroyable = false;
                this.traversable = true;
                this.health = 0;
                this.color = "gray";
                break;
            default:
                break;
        } // End switch
        this.occupant = null;
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


export default function generateGrid(mapType, rows = 64, cols = 64, mapGrid = []) {
    switch (mapType) {
        case "riverInTheMiddle":
            for (let i = 0; i < rows; i++) {
                mapGrid[i] = [];
                for (let j = 0; j < cols; j++) {
                    j === 17 ? mapGrid[i][j] = new GridBlock('water', j, i) : mapGrid[i][j] = new GridBlock('grass', j, i);
                }
            }
            break;
        case "allGrass":
            for (let i = 0; i < rows; i++) {
                mapGrid[i] = [];
                for (let j = 0; j < cols; j++) {
                    mapGrid[i][j] = new GridBlock('grass', j, i);
                }
            }
            break;
        default:
            for (let i = 0; i < rows; i++) {
                mapGrid[i] = [];
                for (let j = 0; j < cols; j++) {
                    mapGrid[i][j] = new GridBlock('cement', j, i);
                }
            }
            break;
    }

    return mapGrid;
}