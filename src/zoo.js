const data = require('./data');

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
  // seu código aqui
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

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

function increasePrices(percentage) {
  // seu código aqui
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
