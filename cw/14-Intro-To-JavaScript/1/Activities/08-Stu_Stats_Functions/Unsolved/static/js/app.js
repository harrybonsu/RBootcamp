var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

function mean(arr) {
    var total = 0;
    for (var i=0; i < arr.length; i++) {
        total += arr[i]
    }
    var meanValue = total/arr.length;

    return meanValue
}
console.log(`fhfhdhdsad segdfh ${mean(movieScore)}`)