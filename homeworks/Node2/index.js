const fs = require('fs');
const csvParser = require('csv-parser');
require('dotenv').config();

const Ifile = process.env.CSV_FILE;
const Ofile = 'results.txt';

let totalSalary = 0;
let totalCount = 0;
let minSalary = Infinity;
let maxSalary = -Infinity;
let minSalaryProfession = '';
let maxSalaryProfession = '';
let minAge = Infinity;
let maxAge = -Infinity;

fs.createReadStream(Ifile)
  .pipe(csvParser())
  .on('data', (row) => {
    const salary = parseInt(row.salary);
    const age = parseInt(row.age);
    const profession = row.profession;

    totalSalary += salary;
    totalCount++;

    if (salary < minSalary) {
      minSalary = salary;
      minSalaryProfession = profession;
    }

    if (salary > maxSalary) {
      maxSalary = salary;
      maxSalaryProfession = profession;
    }

    if (age < minAge) {
      minAge = age;
    }

    if (age > maxAge) {
      maxAge = age;
    }
  })
  .on('end', () => {
    const averageSalary = totalSalary / totalCount;

    const results = `
    Total Salary: ${totalSalary}
    Average Salary: ${averageSalary}
    Minimum Salary with the corresponding profession: ${minSalary} (${minSalaryProfession})
    Maximum Salary with the corresponding profession: ${maxSalary} (${maxSalaryProfession})
    Minimum Age: ${minAge}
    Maximum Age: ${maxAge}`;

    fs.writeFile(Ofile, results, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log(`Results written to ${Ofile}`);
      }
    });
  });
