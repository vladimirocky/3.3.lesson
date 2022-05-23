// различие стрелочной и обычной функции
const speed = 80 // скорость авто в км/ч
const distance = 900 // расстояние в км
// обыкновенная функция
function calcTravelTime(speed, distance) {
    return distance/speed
}
// переменной присваиваем стрелочную функцию
const travelTime = (speed, distance) => distance/speed

console.log(calcTravelTime(speed, distance)); // 11.25
console.log(travelTime(speed, distance)); // 11.25
