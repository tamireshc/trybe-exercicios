const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const nigthTurnInLesson2 = (object, key, value) => {
  object[key] = value;
};
nigthTurnInLesson2(lesson2, 'turno', 'noite');
console.log(lesson2);

const listObjectKeys = (object) => {
  return Object.keys(object);
};
console.log(listObjectKeys(lesson2));

const objectLength = (object) => {
  return listObjectKeys(object).length;
};

console.log(objectLength(lesson2));

const listObjectValues = (object) => {
  return Object.values(object);
};
console.log(listObjectValues(lesson2));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

function countStudent(object) {
  let objectLength = Object.keys(object).length;
  let objectInUse = Object.keys(object);
  console.log(objectLength);
  console.log(objectInUse);
  let students = [];
  let total;
  for (let i = 0; i < objectInUse.length; i += 1) {
    students.push(object[objectInUse[i]].numeroEstudantes);
  }
  total = students.reduce((a, b) => a + b);
  return total;
}

console.log(countStudent(allLessons));
//lesson1.numeroEstudantes;

const getValueByNumber = (lesson, position) => {
  let arrayKeys = Object.values(lesson);
  return arrayKeys[position];
};

console.log(getValueByNumber(lesson1, 0));

const verifyPair = (lesson, key, value) => {
  let values = Object.values(lesson);
  let keys = Object.keys(lesson);

  console.log(values, keys);

  let indexKey = keys.findIndex((n) => n === key);

  if (values[indexKey] === value) {
    return true;
  } else {
    return false;
  }
};

console.log(verifyPair(lesson3, 'turno', 'noite'));

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
