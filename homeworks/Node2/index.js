const fs = require('fs');
const csvParser = require('csv-parser');
require('dotenv').config();

const Ifile = process.env.CSV_FILE;
const Ofile = 'results.txt';

function CalculateTotalSalary(data) {
  const salaries = data.map((item) => parseInt(item.salary));
  const totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);
  return totalSalary;
}

function AverageSalary(data) {
  return CalculateTotalSalary(data) / data.length;
}

const dataArray = []; // Store parsed data

fs.createReadStream(Ifile)
  .pipe(csvParser())
  .on('data', (row) => {
    dataArray.push(row); // Store each row in the data array
  })
  .on('end', () => {
    const totalSalary = CalculateTotalSalary(dataArray);
    const averageSalary = AverageSalary(dataArray);

    const salaries = dataArray.map((item) => parseInt(item.salary));
    const minSalary = Math.min(...salaries);
    const maxSalary = Math.max(...salaries);

    const minSalaryProfession = dataArray.find((item) => parseInt(item.salary) === minSalary).profession;
    const maxSalaryProfession = dataArray.find((item) => parseInt(item.salary) === maxSalary).profession;

    const minAge = Math.min(...dataArray.map((item) => parseInt(item.age)));
    const maxAge = Math.max(...dataArray.map((item) => parseInt(item.age)));

    const results = `
    Total Salary: ${totalSalary}
    Average Salary: ${averageSalary}
    Minimum Salary with the corresponding profession: ${minSalary} (${minSalaryProfession})
    Maximum Salary with the corresponding profession: ${maxSalary} (${maxSalaryProfession})
    Minimum Age: ${minAge}
    Maximum Age: ${maxAge}`;

    // Write results to file
    fs.writeFile(Ofile, results, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log(`Results written to ${Ofile}`);
      }
    });
  });
