import {
  Bowman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../js/app';
import Character from '../js/character';

test('character name length test', () => {
  expect(() => {
    new Character('1', 'Magician');
  }).toThrow(new Error('incorrect name length'));
});

test('character type test', () => {
  expect(() => {
    new Character('test1', 'incorrectType');
  }).toThrow(new Error('type not found'));
});

test('character get name', () => {
  const name = 'test1';
  expect(new Character(name, 'Magician').name).toBe(name);
});

test('character get type', () => {
  const type = 'Magician';
  expect(new Character('name', type).type).toBe(type);
});

test.each([
  { name: 'Bowman', type: 'Bowman' },
  { name: 'Swordsman', type: 'Swordsman' },
  { name: 'Magician', type: 'Magician' },
  { name: 'Daemon', type: 'Daemon' },
  { name: 'Undead', type: 'Undead' },
  { name: 'Zombie', type: 'Zombie' },
])(('characters test'),
  (object) => {
    /* eslint-disable no-unused-vars */
    const f = () => {
      let element;
      switch (object.name) {
        case 'Bowman':
          element = new Bowman(object.name);
          break;
        case 'Swordsman':
          element = new Swordsman(object.name);
          break;
        case 'Magician':
          element = new Magician(object.name);
          break;
        case 'Daemon':
          element = new Daemon(object.name);
          break;
        case 'Undead':
          element = new Undead(object.name);
          break;
        case 'Zombie':
          element = new Zombie(object.name);
          break;
        default:
          break;
      }
    };
    expect(f).not.toThrow();
  });
