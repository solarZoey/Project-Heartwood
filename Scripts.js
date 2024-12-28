function buildGameGrid() {
    console.log("STATE > building game grid...");

    // make grid string
    let i;
    let j;
    let cellCount = 0;
    const rows = 20;
    const cols = 40;
    let gridString = "";
    for (i = 0; i < rows; i++) {
        gridString += "<div class='grid-row' id='row-"+i.toString()+"'>\n"
        for (j = 0; j < cols; j++) {
            gridString +=
                "<p " +
                "class='grid-cell' " +
                "id='cell-"+cellCount.toString()+"'>" +
                cellCount.toString() +
                "</p>\n"
            cellCount++;
        }
        gridString += "</div>\n"
    }

    // add grid string to HTML
    document.getElementById("game-grid").innerHTML = gridString;
    console.log("STATE > game grid built");
    console.log(gridString);
}
