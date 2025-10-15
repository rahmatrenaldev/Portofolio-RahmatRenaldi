// Efek teks ketik
document.addEventListener("DOMContentLoaded", () => {
  new Typed(".typed", {
    strings: ["Frontend Developer", "Designer", "Freelancer"],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });

  // Toggle menu mobile
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
    toggle.innerHTML = nav.classList.contains("show")
      ? '<i class="bi bi-x"></i>'
      : '<i class="bi bi-list"></i>';
  });

  // 🎯 Animasi skill bar saat muncul di layar
  const skillBars = document.querySelectorAll(".progress-fill");
  const skillSection = document.getElementById("skills");

  function showSkills() {
    const rect = skillSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      skillBars.forEach((bar) => {
        const percent = bar.getAttribute("data-percent");
        bar.style.width = percent + "%";
      });
      window.removeEventListener("scroll", showSkills);
    }
  }

  window.addEventListener("scroll", showSkills);
});
