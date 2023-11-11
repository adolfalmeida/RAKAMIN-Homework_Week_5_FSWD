class Applicant {
  constructor(name, age, allowance) {
    this.name = name;
    this.age = age;
    this.allowance = allowance;
  }
}

const applicants = [];

const registrationForm = document.getElementById("registrationForm");
const applicantsTableBody = document.getElementById("applicants-table-body");
const applicantsTableFooter = document.getElementById(
  "applicants-table-footer"
);

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const allowance = document.getElementById("allowance").value;

  if (
    name.length >= 10 &&
    age >= 25 &&
    allowance >= 100000 &&
    allowance <= 1000000
  ) {
    const newApplicant = new Applicant(name, age, allowance);
    applicants.push(newApplicant);
    addApplicantToTable(newApplicant);
    countAverage();
  } else {
    alert(
      "Please check the form entries. Name must be at least 10 characters, age must be at least 25, and allowance must be between 100,000 and 1,000,000."
    );
  }

  registrationForm.reset();
});

function addApplicantToTable(applicant) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${applicants.length}</td><td>${applicant.name}</td><td>${applicant.age}</td><td>${applicant.allowance}</td>`;
  applicantsTableBody.appendChild(newRow);
  registrationForm.reset();
}

function countAverage() {
  const totalAllowance = applicants.reduce(
    (total, applicant) => total + parseInt(applicant.allowance),
    0
  );
  const totalAge = applicants.reduce(
    (total, applicant) => total + parseInt(applicant.age),
    0
  );

  const allowanceAverage = totalAllowance / applicants.length;
  const ageAverage = totalAge / applicants.length;

  applicantsTableFooter.innerHTML = `<tr><td></td><td>Average</td><td>${ageAverage.toFixed(
    2
  )}</td><td>${allowanceAverage.toFixed(2)}</td></tr>`;
}
