console.log('lkj;lkjljk');
 document.addEventListener("DOMContentLoaded", () => {
  const app = new Medication();
  // Must call this function after add any medications.
  const refreshMedList = () => {
    document.querySelector("#med-list").innerHTML = Medication.all
      .map((med) => `<li>${med.name} #${med.id} Date: ${med.startDate} Frequency: ${med.frequency}</li>`)
      .join("\n");
    console.log("Added med", Medication.all);

  };

  // Adds Medications
  const addMedForm = document.querySelector("#add-med");
  console.log('adding event listener');
  addMedForm.addEventListener("submit", (submitMed) => {
    console.log('helloo');
    submitMed.preventDefault();
    const name = document.querySelector("#add-med-name").value;
    const startDate = document.querySelector("#add-med-date").value;
    const frequency = document.querySelector("#add-med-freq").value;
    const med = app.addMed(name, startDate, frequency);
    refreshMedList();
    addMedForm.reset();

  });

});
