const triangularFacesTemplate = [
    [0, 1, 2],
    [0, 2, 3],
    [4, 0, 3],
    [4, 3, 7],
    [5, 4, 7],
    [5, 7, 6],
    [1, 5, 6],
    [1, 6, 2],
    [4, 5, 1],
    [4, 1, 0],
    [2, 6, 7],
    [2, 7, 3],
];

const vertices = [
    [20, 20, 20],
    [-20, 20, 20],
    [-20, -20, 20],
    [20, -20, 20],
    [20, 20, -20],
    [-20, 20, -20],
    [-20, -20, -20],
    [20, -20, -20],
];

const calculationCoordinates = (initX, initY, initZ) => {
    const coordinates = [];
    
    for (j = 0; j < 4; j++) {
        if (j === 0) {
            coordinates[0] = [initX, initY, initZ];
            continue;
        }

        let pastCoordinate = coordinates[j - 1];
        let [x, y, z] = pastCoordinate;

        if (x > 0 && y > 0) {
            x = 0 - x;
        } else if (x < 0 && y > 0) {
            y = 0 - y;
        } else if (x < 0 && y < 0) {
            x = initX;
        }

        coordinates[j] = [x, y, z];
    }

    return coordinates;
}

const identifyVertices = ({ width, height, depth }) => {
    let vertices = [];

    for (let i = 0; i < 2; i++) {
        let coordinates = [];

        if (i === 0) {
            coordinates = calculationCoordinates(width, height, depth);
        } else {
            coordinates = calculationCoordinates(width, height, 0 - depth);
        }

        vertices = [...vertices, ...coordinates];
    }

    return vertices;
}

const initialData = () => {
    return { triangularFacesTemplate, vertices };
}

module.exports = {
    identifyVertices,
    initialData
}