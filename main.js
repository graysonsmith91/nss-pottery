/*
    Define function named buyClay. Needs no parameters. Return 
    object with no properties on it yet.
*/

const buyClay = () => {
    const clayObject = { }
    return clayObject
}

const newClay = buyClay()
console.log(newClay)



/*
    Define function named makePottery. Pass it the empty object
    that buyClay produced. Needs single parameter.
    Add new property named shape, value should be "Bowl".
    Return object after property added.
*/

const makePottery = (clayObject) => {
    clayObject.shape = "Bowl"
    return clayObject
}

const newPottery = makePottery(newClay)
console.log(newPottery)

// When a function returns a value, store that value in a variable



/*
    Define function named bisqueFire. Give it object that makePottery
    produced (1 parameter). Function should add new property named
    readyForGlazing, value should be true.
    Return object after property added.
*/

const bisqueFire = (clayObject) => {
    clayObject.readyForGlazing = true
    return clayObject
}

const newPotteryBisqueFire = bisqueFire(newPottery)
console.log(newPotteryBisqueFire)



/*
    Define function named glazePottery. Give it object that bisqueFire
    produced, 1 parameter. Function should check if pottery has been
    bisque fired already and is ready for glazing. If not then log
    "Make sure you bisque fire the pottery before you glaze it."
    If it has been bisque fired, then add new property named glazing
    with a value of "Midnight Blue".
    Return object after property added.
*/


const glazePottery = (clayObject) => {
    if (clayObject.bisqueFire === false) {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    } else {
        clayObject.glazing = "Midnight Blue"
    }
    return clayObject
}

const newPotteryGlazed = glazePottery(newPotteryBisqueFire)
console.log(newPotteryGlazed)



/*
    Define function named finalFiring. Give it object that glazePottery
    produced. Also needs temperature of kiln, needs TWO parameters.
    Function should add new property named cracked, if temp is greater
    than 1200 cracked should be set to true. If temp less than 1200
    cracked should be set to false.
    Return object after property added.
*/

const finalFiring = (clayObject, temp) => {
    if (temp > 1200) {
        clayObject.cracked = true
    } else {
        clayObject.cracked = false
    }
    return clayObject
}

const newPotteryFired = finalFiring(newPotteryGlazed, 1200)
console.log(newPotteryFired)