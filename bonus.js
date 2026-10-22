import {students} from "./data.js";
import withStatus from "./report.js";

const result = withStatus(students);

result.forEach((student) => {
  console.log(`${student.name}: ${student.status}`);
});

console.log(students[0].status);
