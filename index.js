const array = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function (array){
    return array.slice(0, 2)
}
const returnLastTwoDrivers = function (array){
    return array.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function (n){
    return (function(fare){
        return fare * n
    })
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers (array, func){
    return func(array);
}