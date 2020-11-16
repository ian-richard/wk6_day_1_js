//var
// var name = "Chris"
var secretNumbers = function(){
    var pinCode = [1, 1, 1, 1];
    // console.log('name inside function:', name);
}
secretNumbers();
// console.log('name from outside function:', name);

var filterNamesByFirstLetter = function(names, letter) {
    var filteredNames = [];
    for (let name of names) {
        if (name[0] === letter) {
            filteredNames.push(name)
        }
    }
    console.log('name after looping', name);
    return  filteredNames
}

var students = ["Kenney", "Katie", "Ian", "Chris"]

var filteredStudents = filterNamesByFirstLetter(students, "K");

// console.log('filteredStudents:', filteredStudents);

// example using let rather than var
let isItFive = function(num) {
    let result;
    if (num === 5) {
        result = true;
    } else {
        result = false;
    }
    return result;
}