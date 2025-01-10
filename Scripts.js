function buildGamePanel() {
    console.log("STATE > building initial game panel...");

    let panel = "<p>hello</p>"

    // add grid string to HTML
    document.getElementById("game-grid").innerHTML = panel;
    console.log("STATE > game panel built");
    console.log(panel);
}

function initState() {
    // inital state upon load with no save file
    // player position
    // player inventory
    // text sidebar (current quest, flavor text, etc.)
    // load map

}

function loadState() {
    // load from save file
    // player position
    // player inventory
    // text sidebar (current quest, flavor text, etc.)
    // load map
}

function displayMap(mapState) {
    // change background of grid cells to display current map
}