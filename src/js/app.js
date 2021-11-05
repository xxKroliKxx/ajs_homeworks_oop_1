import character from './character';

export class Bowman extends character {
    constructor(name) {
        super(name, 'Bowman');
    }
}

export class Swordsman extends character {
    constructor(name) {
        super(name, 'Swordsman');
    }
}

export class Magician extends character {
    constructor(name) {
        super(name, 'Magician');
    }
}

export class Daemon extends character {
    constructor(name) {
        super(name, 'Daemon');
    }
}

export class Undead extends character {
    constructor(name) {
        super(name, 'Undead');
    }
}

export class Zombie extends character {
    constructor(name) {
        super(name, 'Zombie');
    }
}
