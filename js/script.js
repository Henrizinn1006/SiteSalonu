console.log("Site rodando");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') {
            return;
        }

        e.preventDefault();

        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const cards = document.querySelectorAll('.path-card');

if (cards[0]) {
    cards[0].addEventListener('click', () => {
        const target = document.querySelector('#voce');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

if (cards[1]) {
    cards[1].addEventListener('click', () => {
        const target = document.querySelector('#empresas');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

const emailDestino = "salonubr@gmail.com";

document.querySelectorAll(".card-email").forEach(card => {
    card.addEventListener("click", e => {
        e.preventDefault();

        const servico = card.getAttribute("data-servico");
        const subject = encodeURIComponent(`Solicitação - ${servico}`);
        const body = encodeURIComponent(`Olá, tudo bem?

Tenho interesse no serviço: ${servico}.

Gostaria de mais informações sobre valores, prazos e próximos passos.

Aguardo retorno.
Obrigado!`);

        window.location.href = `mailto:${emailDestino}?subject=${subject}&body=${body}`;
    });
});

const togglePilar = pilar => {
    const ativo = pilar.classList.toggle("ativo");
    pilar.setAttribute("aria-expanded", String(ativo));
};

const pilarDesktopHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

document.querySelectorAll(".pilar").forEach(pilar => {
    if (pilarDesktopHover) {
        pilar.classList.remove("ativo");
        pilar.removeAttribute("role");
        pilar.removeAttribute("tabindex");
        pilar.removeAttribute("aria-expanded");
        return;
    }

    pilar.setAttribute("role", "button");
    pilar.setAttribute("tabindex", "0");
    pilar.setAttribute("aria-expanded", "false");

    pilar.addEventListener("click", () => {
        togglePilar(pilar);
    });

    pilar.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            togglePilar(pilar);
        }
    });
});
