// feetToMile
function feetToMile(feet) {
    if(feet == 0 || feet == -1){  // It's for bonus marks....
        return 'Please inpute a valid number'; 
    }
    var mileConvert = feet / 5280;
    var floatFix = mileConvert.toFixed(2);
    return floatFix;
}


// woodCalculator
function woodCalculator(chair, table, bed) {
    if(chair == null || table == null || bed == null){ // It's for bonus marks....
        return 'Please tell me the correct ammound';
    }
    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;
    return woodForChair + 'qf ,' + woodForTable+ 'qf ,' + woodForBed + 'qf';
}


// brickCalculator
function brickCalculator(floor){
    if(floor == 0 || floor == -1) { // It's for bonus marks....
        return 'Tell me the correct floor';
    } else if(floor <= 10) {
        var brickCount = 15 * 1000 * floor;
    } else if(floor <= 30) {
        brickCount = (floor - 10) * (12 * 1000) + 150000 ;
    } else {
        brickCount = (floor - 30) * (10 * 1000) + 390000 ;
    }
    return brickCount;
}

// tinyFriend
var friendsName = ['Rofik', 'Sofik', 'Jobbar', 'Borkot', 'Abul', 'Kolimuddin', 'Kulsum Begum'];

function tinyFriends(name) {
    var tinyName = '';
    for(var i = 1; i < name.length; i++) {
        if(name[i].length < name[i-1].length){
            tinyName = (name[i]);
        }
    }
    return tinyName;
}
    
