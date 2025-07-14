const semestres = {
  "Semestre I": [
    "Biología Celular",
    "Anatomía Funcional",
    "Epistemología",
    "Cátedra Unilibrista",
    "Constitución Política",
    "Socioantropología",
    "Ética y Legislación en Enfermería",
    "Psicología General",
    "Electiva I"
  ],
  "Semestre II": [
    "Microbiología",
    "Bioquímica",
    "Fisiología",
    "Psicología Social",
    "Bioestadística y Demografía",
    "Historia de la Enfermería",
    "Inglés I",
    "Electiva II"
  ],
  "Semestre III": [
    "Farmacología en Enfermería",
    "Enfermería Básica en Atención Primaria",
    "Pedagogía y Educación en Salud",
    "Epidemiología Básica",
    "Epistemología del Cuidado de la Enfermería",
    "Inglés II"
  ],
  "Semestre IV": [
    "Genética y Embriología",
    "Enfermería en Salud Mental y Psiquiatría",
    "Semiología Clínica y Taxonomía en Enfermería",
    "Enfermería Básica Asistencial",
    "Salud Ocupacional",
    "Inglés III"
  ],
  "Semestre V": [
    "Enfermería en la Madre y el Recién Nacido",
    "Enfermería en Emergencias y Desastres",
    "Investigación I",
    "Inglés IV",
    "Electiva III"
  ],
  "Semestre VI": [
    "Enfermería en el Niño y el Adolescente",
    "Informática y Métodos Aplicados a Enfermería",
    "Investigación II",
    "Inglés V",
    "Electiva IV"
  ],
  "Semestre VII": [
    "Enfermería en el Adulto y el Anciano",
    "Enfermería en Administración y Planeación en Salud",
    "Investigación III",
    "Electiva V"
  ],
  "Semestre VIII": [
    "Enfermería en Trauma",
    "Gerencia de Servicios de Enfermería",
    "Investigación IV"
  ],
  "Semestre IX": [
    "Prácticas Integradas Clínicas y Comunitarias"
  ]
};

const contenedor = document.getElementById("malla");

for (let semestre in semestres) {
  const divSemestre = document.createElement("div");
  divSemestre.classList.add("semestre");

  const titulo = document.createElement("h2");
  titulo.textContent = semestre;
  divSemestre.appendChild(titulo);

  semestres[semestre].forEach(curso => {
    const divCurso = document.createElement("div");
    divCurso.classList.add("curso");
    divCurso.textContent = curso;
    divSemestre.appendChild(divCurso);
  });

  contenedor.appendChild(divSemestre);
}

