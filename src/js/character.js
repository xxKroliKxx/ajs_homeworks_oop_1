export default class Character {

    defaultType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']

    health = 100
    level = 1

    constructor(name, type) {
        this.setCharInformation()
        this.name = name
        this.type = type
    }

    set name(value) {
        if (value.length < 2 || value.length > 10) {
            throw new Error('incorrect name length')
        }
        this._name = value;
    }

    get name() {
        return this._name
    }

    set type(value) {
        if (!this.defaultType.includes(value)) {
            throw new Error('type not found')
        }
        this._type = value
        let char = this.charInformation.get(value)
        this.attack = char.attack
        this.defense = char.defense
    }

    get type() {
        return this._type
    }

    setCharInformation() {
        this.charInformation = new Map();
        this.charInformation.set('Bowman', {attack: 25, defense: 25})
        this.charInformation.set('Swordsman', {attack: 40, defense: 10})
        this.charInformation.set('Magician', {attack: 10, defense: 40})
        this.charInformation.set('Daemon', {attack: 25, defense: 25})
        this.charInformation.set('Undead', {attack: 40, defense: 10})
        this.charInformation.set('Zombie', {attack: 10, defense: 40})

    }
}