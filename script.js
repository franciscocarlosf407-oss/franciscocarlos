const projetos = [
    {
        id: 1,
        titulo: "Sistema de Gestão",
        descricao: "Aplicação web para gerenciamento de tarefas com interface intuitiva e responsiva.",
        tecnologias: ["HTML5", "CSS3", "JavaScript"],
        icon: "fas fa-tasks",
        linkDemo: "#",
        linkRepo: "#"
    },
    {
        id: 2,
        titulo: "Landing Page Moderna",
        descricao: "Página de captura com design glassmorphism e animações suaves.",
        tecnologias: ["HTML5", "CSS3", "Flexbox"],
        icon: "fas fa-paint-brush",
        linkDemo: "#",
        linkRepo: "#"
    },
    {
        id: 3,
        titulo: "API de Consulta",
        descricao: "Interface para consumo de API REST com tratamento de dados dinâmico.",
        tecnologias: ["JavaScript", "Fetch API", "JSON"],
        icon: "fas fa-server",
        linkDemo: "#",
        linkRepo: "#"
    },
    {
        id: 4,
        titulo: "Portfólio Pessoal",
        descricao: "Este próprio site! Desenvolvido com design moderno e totalmente responsivo.",
        tecnologias: ["HTML5", "CSS3 Grid", "JavaScript"],
        icon: "fas fa-user-circle",
        linkDemo: "#",
        linkRepo: "#"
    }
];
function renderizarProjetos() {
    const container = document.getElementById('projectsContainer');
    
    const projetosHTML = projetos.map(projeto => `
        <article class="project-card" data-aos="fade-up">
            <div class="project-icon">
                <i class="${projeto.icon}"></i>
            </div>
            <h3 class="project-title">${projeto.titulo}</h3>
            <p class="project-description">${projeto.descricao}</p>
            <div class="project-tech">
                ${projeto.tecnologias.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${projeto.linkDemo}" class="project-btn btn-primary" target="_blank">
                    <i class="fas fa-eye"></i> Ver Demo
                </a>
                <a href="${projeto.linkRepo}" class="project-btn btn-secondary" target="_blank">
                    <i class="fab fa-github"></i> Código
                </a>
            </div>
        </article>
    `).join('');
    
    container.innerHTML = projetosHTML;
}

function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeToggle');
    
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        btn.textContent = '🌙';
           } else {
        btn.textContent = '☀️';
    }
}
function initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s, transform 0.6s';
        observer.observe(card);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    renderizarProjetos();
    initScrollAnimation();
        document.getElementById('themeToggle').addEventListener('click', toggleTheme);
});
