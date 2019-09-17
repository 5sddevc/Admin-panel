import Chance from 'chance'

export const lineGraph = () => {
    const chance = new Chance();
    const data = {
        name: chance.weekday(),
        Login: chance.prime({ min: 1, max: 20 }),
        Signup: chance.prime({ min: 1, max: 20 }),
    }
    return data;
}