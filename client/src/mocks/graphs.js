import Chance from 'chance'

export const lineGraph = () => {
  const chance = new Chance();
  const data = [
    {
      id: chance.natural({ min: 1}),
      name: chance.weekday(),
      Login: chance.prime({ min: 1, max: 20 }),
      Signup: chance.prime({ min: 1, max: 20 }),
      Leaves: chance.prime({ min: 1, max: 25 }),
      Forgot: chance.prime({ min: 1, max: 25 }),
    }
  ]
  return data;
}

export const pieChart = () => {
  const chance = new Chance();
  const data = [
    {
      id: chance.natural({ min: 1}),
      name: `Class: ${chance.letter({casing: 'upper'})}`,
      Login: chance.prime({ min: 1, max: 20 }),
    }
  ]
  return data;
}