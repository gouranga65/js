let student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
function delProp() {
  console.log(student);
  delete student.rollno;
  console.log(student);
}
delProp();
