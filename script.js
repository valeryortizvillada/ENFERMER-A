const cursos = [
  { nombre: "Matemáticas I", semestre: 1 },
  { nombre: "Física I", semestre: 1 },
  { nombre: "Programación", semestre: 1 },
  { nombre: "Matemáticas II", semestre: 2 },
  { nombre: "Física II", semestre: 2 },
  { nombre: "Estructuras de Datos", semestre: 2 },
  // Puedes agregar más cursos aquí
];

const malla = document.getElementById("malla");

for (let i = 1; i <= 8; i++) {
  cursos
    .filter(curso => curso.semestre === i)
    .forEach(curso => {
      const div = document.createElement("div");
      div.classList.add("curso");
      div.textContent = curso.nombre;
      malla.appendChild(div);
    });
}
