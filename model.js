class Medication {
  static all = [
   {
    name: "Tylenol",
    startDate: "2021-02-24",
    id: 160,
    frequency: "Every 4 hours"
  },

  {
    name: "Metformin",
    startDate: "2021-02-27",
    id: 161,
    frequency: "Every 2 hours"
  }
  ];
  static _nextId = 100;

class Medication {
  static all = [
   {
    name: "Tylenol",
    startDate: "2021-02-24",
    id: 160,
    frequency: "Every 4 hours"
  },

  {
    name: "Metformin",
    startDate: "2021-02-27",
    id: 161,
    frequency: "Every 2 hours"
  }
  ];
  static _nextId = 100;

  constructor(name, startDate, frequency) {
    this.name = name;
    this.id = Medication._nextId++;
    this.startDate = startDate;
    this.frequency = frequency; 

    Medication.all.push(this);

  }

  addMed(name, startDate, frequency) {
    new Medication(name, startDate, frequency);

  }

  deleteMedication(id) {
    Medication.all = Medication.all.filter(med => med.id !== id);
  }
}

if (typeof module !== "undefined") {
  module.exports = {
    Medication
  };
}