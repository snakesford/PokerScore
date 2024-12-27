

const names = ['Papa', 'UncleBrian', 'Elliott', 'Emmett']
const scores = [
    {
        "date": "Thrusday December 26, 2024",
        "score": [714, 500, 296, 490]
    },
    {
        "date": "Tuesday December 17, 2024",
        "score": [416, 398, 714, 472]
    },
    {
        "date": "Monday Noveember 25, 2024",
        "score": [145, 500, 1089, 266]
    },
    {
        "date": "Wednesday November 20, 2024",
        "score": [345, 500, 689, 466]
    },
    {
        "date": " November 13, 2024",
        "score": [632, 347, 576, 445]
    },
    {
        "date": " November 6, 2024",
        "score": [489, 478, 441, 592]
    },
    {
        "date": "Wednesday October 23, 2024",
        "score": [860, 113, 489, 538]
    },
    {
        "date": "October 16, 2024",
        "score": [300, 700, 435, 565]
    },
    {
        "date": "October 9, 2024",
        "score": [358, 500, 496, 646]
    },
    {
        "date": "October 2, 2024",
        "score": [677, 500, 481, 342]
    },
    {
        "date": "September 25, 2024",
        "score": [424, 500, 764, 312]
    },
    {
        "date": "September 20, 2024",
        "score": [644, 500, 439, 417]
    },
    {
        "date": "September 5, 2024",
        "score": [772, 238, 374, 617]
    },
    {
        "date": "August 29, 2024",
        "score": [398, 687, 387, 528]
    },
    {
        "date": "August 22, 2024",
        "score": [450, 500,  549, 501]
    },
    {
        "date": "July 18, 2024",
        "score": [291, 341, 527, 841]
    },
    {
        "date": "2024",
        "score": [508, 308, 446, 716]
    },
    {
        "date": "2024",
        "score": [374, 275, 700, 651]
    },
    {
        "date": "2024",
        "score": [1045, 326, 325, 404]
    },
    {
        "date": "2024",
        "score": [53, 500, 1149, 298]
    },
    {
        "date": "2024",
        "score": [434, 340, 988, 238]
    },
    {
        "date": "2024",
        "score": [985, 326, 311, 378]
    },
    {
        "date": "2024",
        "score": [478, 500, 229, 793]
    },
    {
        "date": "2024",
        "score": [412, 815, 452, 321]
    },
    {
        "date": "2024",
        "score": [508, 500, 403, 591]
    },
    {
        "date": "2024",
        "score": [259, 385, 272, 1172]
    },
    {
        "date": "2024",
        "score": [300, 500, 260, 940]
    },
    {
        "date": "2024",
        "score": [522, 588, 342, 664]
    },
    {
        "date": "2024",
        "score": [296, 500, 987, 217]
    }
]

//ChatGPT function. I added the forEach and changed what the scoresCell.textContent was being asigned to
function addTableRow(date, scores) {
    const tableBody = document.querySelector("#tfoot"); // Get the tbody element

    const newRow = document.createElement("tr"); // Create a new row

    // Create and append the Date cell
    const dateCell = document.createElement("td");
    dateCell.textContent = date; // Set the text content
    newRow.appendChild(dateCell); // Append to the row

    // Create and append the Scores cell
    scores.forEach((item) => {
        const scoresCell = document.createElement("td");
        scoresCell.textContent = item // Convert scores array to a string
        newRow.appendChild(scoresCell); // Append to the row
    })

    // Append the new row to the table body
    tableBody.appendChild(newRow);
}

const findHighest = (totals) => {
    // Step 1: Pair totals with their original indices
    const indexedTotals = totals.map((total, index) => ({ total, index }));

    // Step 2: Sort by score in descending order while keeping original indices
    const sortedTotals = [...indexedTotals].sort((a, b) => b.total - a.total);

    // Step 3: Create a new array, reordered by the highest total scorer
    const newArr = sortedTotals.map(item => {
        // Use the original index to extract all scores for this person
        return scores.map(entry => ({
            date: entry.date,
            score: entry.score[item.index] // Keep only this person's scores
        }));
    });

    console.log("Original Totals:", totals);
    console.log("Sorted Totals with Indices:", sortedTotals);
    console.log("Reordered Scores by Person:", newArr);

    return newArr;
};

function calculateTotals(scores) {
    const totals = [0, 0, 0, 0]; // Initialize totals for each person

    scores.forEach(entry => {
        // entry.score the array [1, 2, 3, 4]
        //forEach((score, index)) 1, 2, 3, 4, It's the individual soce in the array and comes with an index
        //totals[index] += score gets the index of the score and adds it to the totals array with the matching index
        entry.score.forEach((score, index) => {
            totals[index] += score; // Add the score to the corresponding total
        });
    });
    findHighest(totals)

    // Update the totals in the table footer
    totals.forEach((total, index) => {
        document.querySelector(`#${names[index]}`).textContent = total;
    });
}

/*
if names.total.papa is greater than UncleBrian

get totals. if total[0]
order by total 
*/

scores.forEach((item) => {
    addTableRow(item.date, item.score)
})

calculateTotals(scores)


// Names and scores data
// const names = ['Papa', 'UncleBrian', 'Elliott', 'Emmett']
// // const names = ['Papa', 'Pinky', 'Frank', 'Crazy'];
// const scores = [
//     { "date": "Tuesday December 17, 2024", "score": [416, 398, 714, 472] },
//     { "date": "Monday Noveember 25, 2024", "score": [145, 500, 1089, 266] },
//     { "date": "Wednesday November 20, 2024", "score": [345, 500, 689, 466] },
//     { "date": " November 13, 2024", "score": [632, 347, 576, 445] },
//     { "date": " November 6, 2024", "score": [489, 478, 441, 592] },
//     { "date": "Wednesday October 23, 2024", "score": [860, 113, 489, 538] },
//     { "date": "October 16, 2024", "score": [300, 700, 435, 565] },
//     { "date": "October 9, 2024", "score": [358, 500, 496, 646] },
//     { "date": "October 2, 2024", "score": [677, 500, 481, 342] },
//     { "date": "September 25, 2024", "score": [424, 500, 764, 312] },
//     { "date": "September 20, 2024", "score": [644, 500, 439, 417] },
//     { "date": "September 5, 2024", "score": [772, 238, 374, 617] },
//     { "date": "August 29, 2024", "score": [398, 687, 387, 528] },
//     { "date": "August 22, 2024", "score": [450, 500, 549, 501] },
//     { "date": "July 18, 2024", "score": [291, 341, 527, 841] },
//     { "date": "2024", "score": [508, 308, 446, 716] },
//     { "date": "2024", "score": [374, 275, 700, 651] },
//     { "date": "2024", "score": [1045, 326, 325, 404] },
//     { "date": "2024", "score": [53, 500, 1149, 298] },
//     { "date": "2024", "score": [434, 340, 988, 238] },
//     { "date": "2024", "score": [985, 326, 311, 378] },
//     { "date": "2024", "score": [478, 500, 229, 793] },
//     { "date": "2024", "score": [412, 815, 452, 321] },
//     { "date": "2024", "score": [508, 500, 403, 591] },
//     { "date": "2024", "score": [259, 385, 272, 1172] },
//     { "date": "2024", "score": [300, 500, 260, 940] },
//     { "date": "2024", "score": [522, 588, 342, 664] },
//     { "date": ", 2024", "score": [296, 500, 987, 217] }
// ];

// // Function to calculate totals for each person
// const calculateTotals = (scores) => {
//     const totals = [0, 0, 0, 0]; // Initialize totals for each person
//     scores.forEach(entry => {
//         entry.score.forEach((score, index) => {
//             totals[index] += score; // Add the score to the corresponding total
//         });
//         totals.forEach((total, index) => {
//             document.querySelector(`#${names[index]}`).textContent = total;
//         });
//     });
//     return totals;
// };

// // Function to find the highest scorer and reorder scores
// const findHighest = (totals) => {
//     // Step 1: Pair totals with their original indices
//     const indexedTotals = totals.map((total, index) => ({ total, index }));

//     // Step 2: Sort by score in descending order while keeping original indices
//     const sortedTotals = [...indexedTotals].sort((a, b) => b.total - a.total);

//     // Step 3: Create a new array with all scores reordered based on the sorted totals
//     const newArr = sortedTotals.map(({ index }) => {
//         // Extract all scores for this person using their original index
//         return scores.map(entry => ({
//             date: entry.date,
//             score: entry.score[index] // Use the person's index to get their scores
//         }));
//     });

//     return newArr;
// };

// // Calculate totals
// const totals = calculateTotals(scores);

// // Reorder the dataset based on the highest scorer
// const reorderedScores = findHighest(totals);

// // Output the reordered scores
// console.log("Original Totals:", totals);
// reorderedScores.forEach((personScores, personIndex) => {
//     console.log(`Person ${personIndex + 1}:`);
//     personScores.forEach(entry => {
//         console.log(`${entry.date}\t${entry.score}`);
        
//     });
// });


// function calculateTotals(scores) {
//     const totals = [0, 0, 0, 0]; // Initialize totals for each person

//     scores.forEach(entry => {
//         // entry.score the array [1, 2, 3, 4]
//         //forEach((score, index)) 1, 2, 3, 4, It's the individual soce in the array and comes with an index
//         //totals[index] += score gets the index of the score and adds it to the totals array with the matching index
//         entry.score.forEach((score, index) => {
//             totals[index] += score; // Add the score to the corresponding total
//         });
//     });
//     // findHighest(totals)
//     totals.forEach((total, index) => {
//         document.querySelector(`#${names[index]}`).textContent = total;
//     });
//     return totals;

//     // Update the totals in the table footer
// }
