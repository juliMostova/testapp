function createPlayer(name){
   let goal =0;
    return function goalCount(){
        goal++;
        return `${name}- ${goal} очков !`
    }
}
const playerOne = createPlayer('Денис');
const playerTwo = createPlayer('Артем');

console.log(playerOne);
console.log(playerTwo); 