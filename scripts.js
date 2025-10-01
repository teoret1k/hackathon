
document.addEventListener("scroll", () => {
  document.querySelectorAll("[data-aos]").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});


fetch("professions.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("professions-list");
    data.forEach((prof, i) => {
      container.innerHTML += `
        <div class="col-md-4" data-aos="zoom-in" data-aos-delay="${i*100}">
          <div class="card h-100 shadow border-0 text-center p-4 profession-card">
            <i class="bi ${prof.icon} fs-1 text-primary"></i>
            <h5 class="mt-3">${prof.title}</h5>
            <p>${prof.desc}</p>
          </div>
        </div>
      `;
    });
  });

document.getElementById("register-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Спасибо за регистрацию, " + document.getElementById("name").value + "!");
  e.target.reset();
});
const professions = [
  { title: "Программист", desc: "Создает приложения, игры и сайты.", icon: "bi-code-slash" },
  { title: "Аналитик данных", desc: "Работает с большими массивами данных, ищет закономерности.", icon: "bi-graph-up" },
  { title: "Кибербезопасность", desc: "Защищает компании от хакеров и вирусов.", icon: "bi-shield-lock" },
  { title: "UX/UI дизайнер", desc: "Делает интерфейсы удобными и красивыми.", icon: "bi-palette" },
  { title: "Сетевой инженер", desc: "Настраивает интернет и серверы.", icon: "bi-hdd-network" },
  { title: "Разработчик ИИ", desc: "Создает умные алгоритмы и нейросети.", icon: "bi-robot" }
];

const container = document.getElementById("professions-list");
professions.forEach((prof, i) => {
  container.innerHTML += `
    <div class="col-md-4" data-aos="zoom-in" data-aos-delay="${i*100}">
      <div class="card h-100 shadow border-0 text-center p-4 profession-card">
        <i class="bi ${prof.icon} fs-1 text-primary"></i>
        <h5 class="mt-3">${prof.title}</h5>
        <p>${prof.desc}</p>
      </div>
    </div>
  `;
});
