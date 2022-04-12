const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];
// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

function studentAverage(arrayStudent, arrayGrades) {
  const newArray = [];
  for (let i = 0; i < arrayGrades.length; i += 1) {
    newArray.push(arrayGrades[i].reduce((a, b) => a + b));
  }
  const newArrayAverace = newArray.map((item) => item / grades[0].length);
  const result = arrayStudent.map((item, index) => ({
    name: item,
    average: newArrayAverace[index],
  }));
  return result;
}

console.log(studentAverage(students, grades));
