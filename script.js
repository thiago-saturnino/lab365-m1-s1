var student = [
  {
    name: "Joao",
    age: 18,
    height: 1.79,
    sex: "masculino",
    room: "Trindade",
    matematica: 5,
  },
  {
    name: "Maria",
    age: 19,
    height: 1.6,
    sex: "feminino",
    room: "Trindade",
    matematica: 4,
  },
  {
    name: "Carlos",
    age: 21,
    height: 1.8,
    sex: "masculino",
    room: "Trindade",
    matematica: 9,
  },
  {
    name: "Pedro",
    age: 22,
    height: 1.75,
    sex: "masculino",
    room: "Trindade",
    matematica: 7,
  },
  {
    name: "Joana",
    age: 19,
    height: 1.65,
    sex: "feminino",
    room: "Trindade",
    matematica: 10,
  },
];

function medias() {
  var total = 0;
  for (var i = 0; i < student.length; i++) {
    total = total + student[i].matematica;
  }
  return total / 5;
}

function aprovado() {
  for (var i = 0; i < student.length; i++) {
    if (student[i].matematica >= 7) {
      console.log(
        `${student[i].name} foi aprovado com nota ${student[i].nota}`
      );
    } else {
      console.log(
        `${student[i].name} foi reprovado com nota ${student[i].nota}`
      );
    }
  }
}

console.log(student);
console.log("A média das notas é:" + medias());
aprovado();
