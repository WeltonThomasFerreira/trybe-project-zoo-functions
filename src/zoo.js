const data = require('./data');
const schedule = require('./schedule');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((specie) => specie.name === animal)
    .residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  if (employeeName) {
    return data.employees.find(
      (employee) =>
        employee.firstName === employeeName
        || employee.lastName === employeeName,
    );
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees
    .map((employee) => employee.managers)
    .some((manager) => manager.includes(id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  if (species) {
    return data.species.find((animal) => animal.name === species).residents
      .length;
  }
  return data.species.reduce((acc, currentValue) => {
    const { name } = currentValue;
    const count = currentValue.residents.length;
    acc[name] = count;
    return acc;
  }, {});
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined') {
    return 0;
  }
  if (Object.keys(entrants).length === 0 && entrants.constructor === Object) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return (
    Adult * data.prices.Adult
    + Senior * data.prices.Senior
    + Child * data.prices.Child
  );
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  if (dayName) {
    return schedule.getScheduleOfTheDay(data, dayName);
  }
  return schedule.getFullSchedule(data);
}

function getOldestFromFirstSpecies(id) {
  const animal = data.employees.find((employee) => employee.id === id)
    .responsibleFor[0];
  const residents = data.species
    .find((specie) => specie.id === animal)
    .residents.sort((a, b) => a.age - b.age);
  const theOldest = residents[residents.length - 1];
  return [theOldest.name, theOldest.sex, theOldest.age];
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((element) => {
    let result = data.prices[element] + data.prices[element] * (percentage / 100);
    result = parseFloat((result + 0.001).toFixed(2));
    data.prices[element] = result;
  });
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
