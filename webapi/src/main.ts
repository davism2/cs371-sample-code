import axios, { AxiosResponse } from "axios";
import { PlayerStats, PlayerAttributes } from "./datatypes";

const limitInput: Element | null = document.getElementById("input1");
const select = document.getElementById("playerRatings") as HTMLSelectElement;
const fetchBtn1 = document.getElementById("btn1");
const fetchBtn2 = document.getElementById("btn2");
const statsTable = document.getElementById("mars");
const arrtibutesTable = document.getElementById("juiptor");

// Define a click listener on the button
fetchBtn1?.addEventListener("click", () => {
    removeOldData();
    fetchNewData();
});

// Define a click listener on the button
fetchBtn2?.addEventListener("click", () => {
    removeOldData();
    fetchNewData();
});

function removeOldData() {
    // Use the class name fromAPI to select all the rows
    // in the table which are generated axios data
    const rows: NodeListOf<HTMLTableRowElement> =
        document.querySelectorAll(".fromAPI");

    for (let k = 0; k < rows.length; k++) {
        // Remove the row from the parent (myTable)
        statsTable?.removeChild(rows[k]);
    }

    // Use the class name fromAPI to select all the rows
    // in the table which are generated axios data
    const rowsRatings: NodeListOf<HTMLTableRowElement> =
        document.querySelectorAll(".fromAPIRatings");

    for (let k = 0; k < rowsRatings.length; k++) {
        // Remove the row from the parent (myTable)
        arrtibutesTable?.removeChild(rowsRatings[k]);
    }
}

function fetchNewData() {
    // Use the user input to control the number of random users to fetch
    const fetchLimit = (limitInput as HTMLInputElement)?.value ?? 10;
    let value = parseInt(fetchLimit)

    axios
        .request({
            method: "GET",
            url: "https://index.simulationhockey.com/api/v1/players/stats",
            //   params: { results: fetchLimit },
        })
        .then((r: AxiosResponse) => r.data)
        .then((ru: PlayerStats[]) => {
            // Sort data by total number of points
            ru.sort((a, b) => b.points - a.points)

            for (let k = 0; k < value; k++) {
                const aRow = document.createElement("tr");
                const player = ru[k]
                // Use a unique class name so it is easy to remove rows later
                aRow.setAttribute("class", "fromAPI");
                statsTable?.appendChild(aRow);

                // Create a table data cell to show first name and last name
                const nameCell = document.createElement("td");
                nameCell.innerText = player.name;
                aRow.appendChild(nameCell);

                // Create a table data cell to show first name and last name
                const gamesCell = document.createElement("td");
                gamesCell.innerText = `${player.gamesPlayed}`
                aRow.appendChild(gamesCell);

                // Create a table data cell to show number of goals
                const goalCell = document.createElement("td");
                goalCell.innerText = `${player.goals}`;
                aRow.appendChild(goalCell);

                // Create a table data cell to show number of assists
                const assistsCell = document.createElement("td");
                assistsCell.innerText = `${player.assists}`;
                aRow.appendChild(assistsCell);

                // Create a table data cell to show total number of poitns
                const pointsCell = document.createElement("td");
                pointsCell.innerText = `${player.points}`;
                aRow.appendChild(pointsCell);
            }
        });

    axios
        .request({
            method: "GET",
            url: "https://index.simulationhockey.com/api/v1/players/ratings",
            //   params: { results: fetchLimit },
        })
        .then((r: AxiosResponse) => r.data)
        .then((ru: PlayerAttributes[]) => {
            // Create a table data cell to show the rating of the selected attribute
            if (select.value === "passing") {
                ru.sort((a, b) => b.passing - a.passing);
            }
            else if (select.value === "shootingRange") {
                ru.sort((a, b) => b.shootingRange - a.shootingRange);
            }
            else if (select.value === "shootingAccuracy") {
                ru.sort((a, b) => b.shootingAccuracy - a.shootingAccuracy);
            }
            else if (select.value === "checking") {
                ru.sort((a, b) => b.checking - a.checking);
            }
            else if (select.value === "stickChecking") {
                ru.sort((a, b) => b.stickChecking - a.stickChecking);
            }
            else if (select.value === "faceoffs") {
                ru.sort((a, b) => b.faceoffs - a.faceoffs);
            }
            else if (select.value === "speed") {
                ru.sort((a, b) => b.speed - a.speed);
            }
            else if (select.value === "strength") {
                ru.sort((a, b) => b.strength - a.strength);
            }
            else {
                ru.sort((a, b) => b.fighting - a.fighting);
            }
            for (let k = 0; k < 10; k++) {
                const aRow = document.createElement("tr");
                const player = ru[k]

                // Use a unique class name so it is easy to remove rows later
                aRow.setAttribute("class", "fromAPIRatings");
                arrtibutesTable?.appendChild(aRow);

                // Create a table data cell to show first name and last name
                const nameCell = document.createElement("td");
                nameCell.innerText = player.name;
                aRow.appendChild(nameCell);

                // Create a table data cell to show team of the player
                const teamCell = document.createElement("td");
                teamCell.innerText = player.team;
                aRow.appendChild(teamCell);

                // Create a table data cell to show the rating of the selected attribute
                const ratingCell = document.createElement("td");
                if (select.value === "passing") {
                    ratingCell.innerText = `${player.passing}`;
                }
                else if (select.value === "shootingRange") {
                    ratingCell.innerText = `${player.shootingRange}`;
                }
                else if (select.value === "shootingAccuracy") {
                    ratingCell.innerText = `${player.shootingAccuracy}`;
                }
                else if (select.value === "checking") {
                    ratingCell.innerText = `${player.checking}`;
                }
                else if (select.value === "stickChecking") {
                    ratingCell.innerText = `${player.stickChecking}`;
                }
                else if (select.value === "faceoffs") {
                    ratingCell.innerText = `${player.faceoffs}`;
                }
                else if (select.value === "speed") {
                    ratingCell.innerText = `${player.speed}`;
                }
                else if (select.value === "strength") {
                    ratingCell.innerText = `${player.strength}`;
                }
                else {
                    ratingCell.innerText = `${player.fighting}`;
                }
                aRow.appendChild(ratingCell);
            }
        });
}

fetchNewData();
axios
  .request({
    method: "GET",
    url: "https://hans-express-demo.herokuapp.com",
  })
  .then((r: AxiosResponse) => {
    console.log(r.headers);
    console.log("Response", r.data);
  });
