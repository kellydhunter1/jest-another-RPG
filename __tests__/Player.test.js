
const Player = require('../lib/Player');
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');

test('creates a player object', () => {
    const player = new Player('Dave');
  
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
        );
});

test('creates player health value', () => {
    const player = new Player('Dave');
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test('check if player is alive', () => {
    const player = new Player('Dave');
    expect(player.isAlive()).toBeTruthy();
    player.health= 0;
    expect(player.isAlive()).toBeFalsy();
});

test("subtracts from player's health", () => {
    const player = new Player('Dave');
    const oldHealth = player.health;
  
    player.reduceHealth(5);
    expect(player.health).toBe(oldHealth - 5);
// additional value to make sure health does not go negative
    player.reduceHealth(99999);
    expect(player.health).toBe(0);
  });