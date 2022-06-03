module.exports = class Monster{
    constructor(incomingObj = {}) {
        let {monsterName = 'Unknown', minimumLife = 0, currentLife = 100} = incomingObj;
        this.monsterName = monsterName;
        this.minimumLife = minimumLife;
        this.currentLife = currentLife;
        this.isAlive = currentLife >= minimumLife;
    }
    updateLife(lifeChangeAmount = 0) {
        this.currentLife += lifeChangeAmount;
        this.currentLife < 0 ? this.currentLife = 0: void(0);
        this.isAlive = this.currentLife < this.minimumLife ? false : true;
    }
    randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
        if (minimumLifeDrain < maximumLifeDrain) {
            let drain = this.getRandomInteger(minimumLifeDrain, maximumLifeDrain);
            console.log(`${this.monsterName} random power drain of ${drain}`);
            this.updateLife(drain * -1);
        }
    }
    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}