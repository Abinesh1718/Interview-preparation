const changeValue = document.getElementById("hello")

let arr = ["abui", "bala", "shakthi"]

// changeValue.onclick = () => {
//     arr.map(value => {
//         changeValue.innerHTML = value
//     })
// }   


changeValue.onclick = () => {
    let content = ""; // Initialize an empty string to accumulate the values
    arr.forEach(value => {
        content += value + "<br>"; // Append each value and a line break
    });
    changeValue.innerHTML = content; // Set the innerHTML once
};