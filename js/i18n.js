/* =============================================================================
   i18n.js — Bilingual dictionary (Portuguese-BR default, English toggle)
   -----------------------------------------------------------------------------
   Every visible string on the page has a key here, referenced in index.html
   via a `data-i18n="key"` attribute. main.js reads this object to swap text.
   Keep PT and EN in sync: if you add a key to one, add it to the other.
   ========================================================================== */

const I18N = {
  pt: {
    /* ---- Document / SEO ---- */
    "doc.title": "Octagon Solutions — A ponte entre a sua empresa e o Estado brasileiro",
    "doc.description":
      "Habilitamos empresas a vender para o governo brasileiro, transformando a complexidade regulatória em acesso real ao mercado público.",

    /* ---- Navigation ---- */
    "nav.challenge": "O desafio",
    "nav.services": "O que fazemos",
    "nav.process": "Como atuamos",
    "nav.cases": "Cases",
    "nav.founder": "Fundador",
    "nav.contact": "Contato",
    "nav.cta": "Fale conosco",
    "nav.langToggle": "Mudar idioma para inglês",

    /* ---- Hero ---- */
    "hero.eyebrow": "GovTech · Estratégia · Jurídico",
    "hero.title": "A ponte entre a sua empresa e o Estado brasileiro.",
    "hero.subhead":
      "Habilitamos empresas a vender para o governo brasileiro — transformando a complexidade regulatória em acesso real ao mercado público.",
    "hero.ctaPrimary": "Agende uma conversa",
    "hero.ctaSecondary": "O que fazemos",
    "hero.meta": "Lei 14.133 · LC 182 · Lei 13.303 · Inexigibilidade",

    /* ---- Accessibility ---- */
    "a11y.skip": "Pular para o conteúdo",

    /* ---- The challenge ---- */
    "challenge.eyebrow": "O desafio",
    "challenge.title": "Vender para o governo é difícil. Nós tornamos navegável.",
    "challenge.body":
      "O mercado público brasileiro é um dos maiores do mundo — e um dos mais complexos. Licitações, credenciamentos e exigências regulatórias afastam justamente quem tem a melhor tecnologia. Conhecemos os instrumentos legais que abrem essas portas e os usamos a favor da sua empresa.",
    "challenge.i1.term": "Lei 14.133/2021",
    "challenge.i1.desc": "Nova Lei de Licitações e Contratos Administrativos.",
    "challenge.i2.term": "LC 182/2021",
    "challenge.i2.desc": "Marco Legal das Startups e o CPSI — Contrato Público para Solução Inovadora.",
    "challenge.i3.term": "Lei 13.303/2016",
    "challenge.i3.desc": "Estatuto das estatais: como contratam empresas públicas e de economia mista.",
    "challenge.i4.term": "Inexigibilidade",
    "challenge.i4.desc": "Contratação direta quando a competição é inviável — o caminho da solução única.",

    /* ---- What we do ---- */
    "services.eyebrow": "O que fazemos",
    "services.title": "Cinco frentes para colocar a sua solução dentro do governo.",
    "services.s1.title": "Estratégia Go-to-Government",
    "services.s1.desc":
      "Desenhamos o caminho da sua empresa até o comprador público: priorização de órgãos, posicionamento e plano de entrada no mercado.",
    "services.s2.title": "Engenharia regulatória",
    "services.s2.desc":
      "Estruturamos a tese jurídica — inclusive inexigibilidade — que sustenta a contratação da sua solução com segurança.",
    "services.s3.title": "Relações institucionais",
    "services.s3.desc":
      "Conexão com PRODESP, EMTEC, EMPREL e os decisores que de fato movem a contratação pública.",
    "services.s4.title": "Certificação e credenciamento",
    "services.s4.desc":
      "Habilitamos a sua empresa nos cadastros, certificações e credenciamentos exigidos para contratar com o setor público.",
    "services.s5.title": "Capacitação C-level e jurídica",
    "services.s5.desc":
      "Preparamos a liderança e o jurídico da sua empresa para operar com fluência no ambiente público.",

    /* ---- How we work ---- */
    "process.eyebrow": "Como atuamos",
    "process.title": "Três modelos de engajamento, conforme o seu momento.",
    "process.m1.title": "Projetos de escopo fechado",
    "process.m1.desc":
      "Entregas pontuais e bem delimitadas — uma tese de inexigibilidade, um credenciamento, um plano de entrada.",
    "process.m2.title": "Success fees",
    "process.m2.desc":
      "Remuneração atrelada a resultado. Nosso sucesso acontece quando o contrato público é fechado.",
    "process.m3.title": "Retainers mensais",
    "process.m3.desc":
      "Acompanhamento contínuo da sua operação de vendas ao governo, com cadência e prioridades definidas.",

    /* ---- Cases ---- */
    "cases.eyebrow": "Cases",
    "cases.title": "Resultados reais no setor público.",
    "cases.hero.tag": "Operação atual",
    "cases.hero.title": "inup.ai / PressCont",
    "cases.hero.desc":
      "Nossa operação de GovTech em curso, gerando acesso concreto ao mercado público:",
    "cases.hero.p1": "R$200 mil em patrocínio público captados.",
    "cases.hero.p2": "5 clientes públicos de longo prazo.",
    "cases.hero.p3": "Certificações institucionais com GOV MG, PRODESP e CAIXA.",
    "cases.hero.p4":
      "Legislação complexa transformada em checklists digitais para gestores públicos (PressCont).",
    "cases.hero.p5": "Soluções de patrocínio para o SEBRAE.",
    "cases.track.label": "Trajetória do fundador",
    "cases.track.t1.org": "PwC Brasil",
    "cases.track.t1.desc":
      "Direito tributário corporativo para Petrobras, Santander e British American Tobacco.",
    "cases.track.t2.org": "Rocket Internet (ZEN Rooms)",
    "cases.track.t2.desc":
      "Crescimento de 15 → 1.500 quartos em um ano; aquisição de USD 15M pela Yanolja.",
    "cases.track.t3.org": "Draper Startup House",
    "cases.track.t3.desc":
      "Liderou o rebrand global após o investimento de USD 3,5M de Tim Draper; 8 unidades remotamente.",
    "cases.track.t4.org": "Plum Food (Sydney)",
    "cases.track.t4.desc":
      "Custos −30%, volume diário +600% (50 → 350) como Country Manager.",

    /* ---- Founder ---- */
    "founder.eyebrow": "Fundador",
    "founder.name": "Vitor Carrão",
    "founder.role": "Advogado (OAB) e operador · GovTech",
    "founder.body":
      "Advogado de formação e operador de carreira, Vitor uniu o rigor jurídico do direito público à experiência de escalar empresas globalmente. Da consultoria tributária à expansão internacional de startups, hoje aplica essa dupla competência para conectar tecnologia de ponta ao Estado brasileiro.",

    /* ---- Mission & vision ---- */
    "mv.mission.label": "Missão",
    "mv.mission.text":
      "Habilitar empresas a vender para o setor público brasileiro, transformando a complexidade regulatória em acesso real ao mercado governamental, com segurança jurídica e relações institucionais sólidas.",
    "mv.vision.label": "Visão",
    "mv.vision.text":
      "Um Brasil em que a melhor tecnologia chega ao poder público. Onde o Estado compra de quem constrói o futuro.",

    /* ---- Contact ---- */
    "contact.eyebrow": "Contato",
    "contact.title": "Vamos abrir o mercado público para a sua empresa.",
    "contact.subhead":
      "Conte o seu desafio. Respondemos rápido e com clareza sobre o caminho.",
    "contact.whatsapp": "Falar no WhatsApp",
    "contact.email": "Enviar e-mail",
    "contact.label.email": "E-mail",
    "contact.label.phone": "Telefone / WhatsApp",
    "contact.label.location": "Localização",
    "contact.location.value": "Juiz de Fora – MG, Brasil",

    /* ---- Footer ---- */
    "footer.tagline": "A ponte entre a sua empresa e o Estado brasileiro.",
    "footer.rights": "Todos os direitos reservados.",

    /* ---- Dynamic / pre-filled messages ---- */
    "wa.message": "Olá! Vim pelo site da Octagon Solutions e gostaria de conversar sobre vender para o governo.",
    "email.subject": "Contato via site — Octagon Solutions",
  },

  en: {
    /* ---- Document / SEO ---- */
    "doc.title": "Octagon Solutions — The bridge between your company and the Brazilian State",
    "doc.description":
      "We enable companies to sell to the Brazilian government, turning regulatory complexity into real access to the public market.",

    /* ---- Navigation ---- */
    "nav.challenge": "The challenge",
    "nav.services": "What we do",
    "nav.process": "How we work",
    "nav.cases": "Cases",
    "nav.founder": "Founder",
    "nav.contact": "Contact",
    "nav.cta": "Get in touch",
    "nav.langToggle": "Switch language to Portuguese",

    /* ---- Hero ---- */
    "hero.eyebrow": "GovTech · Strategy · Legal",
    "hero.title": "The bridge between your company and the Brazilian State.",
    "hero.subhead":
      "We enable companies to sell to the Brazilian government — turning regulatory complexity into real access to the public market.",
    "hero.ctaPrimary": "Book a conversation",
    "hero.ctaSecondary": "What we do",
    "hero.meta": "Law 14.133 · LC 182 · Law 13.303 · Inexigibility",

    /* ---- Accessibility ---- */
    "a11y.skip": "Skip to content",

    /* ---- The challenge ---- */
    "challenge.eyebrow": "The challenge",
    "challenge.title": "Selling to government is hard. We make it navigable.",
    "challenge.body":
      "Brazil's public market is one of the largest in the world — and one of the most complex. Tenders, credentialing and regulatory requirements keep out exactly the companies with the best technology. We know the legal instruments that open those doors, and we use them in your favour.",
    "challenge.i1.term": "Law 14.133/2021",
    "challenge.i1.desc": "Brazil's new Public Procurement and Administrative Contracts Law.",
    "challenge.i2.term": "LC 182/2021",
    "challenge.i2.desc": "The Startups Legal Framework and the CPSI — Public Contract for Innovative Solutions.",
    "challenge.i3.term": "Law 13.303/2016",
    "challenge.i3.desc": "The state-owned enterprises statute: how public and mixed-economy companies contract.",
    "challenge.i4.term": "Inexigibility",
    "challenge.i4.desc": "Direct contracting when competition is unfeasible — the path for a unique solution.",

    /* ---- What we do ---- */
    "services.eyebrow": "What we do",
    "services.title": "Five fronts to place your solution inside government.",
    "services.s1.title": "Go-to-Government strategy",
    "services.s1.desc":
      "We design your company's path to the public buyer: agency prioritisation, positioning and a market-entry plan.",
    "services.s2.title": "Regulatory engineering",
    "services.s2.desc":
      "We structure the legal thesis — including inexigibility — that sustains the contracting of your solution with confidence.",
    "services.s3.title": "Institutional relations",
    "services.s3.desc":
      "Connection with PRODESP, EMTEC, EMPREL and the decision-makers who actually move public contracting.",
    "services.s4.title": "Certification & credentialing",
    "services.s4.desc":
      "We qualify your company across the registries, certifications and credentials required to contract with the public sector.",
    "services.s5.title": "C-level & legal enablement",
    "services.s5.desc":
      "We prepare your leadership and legal team to operate fluently in the public environment.",

    /* ---- How we work ---- */
    "process.eyebrow": "How we work",
    "process.title": "Three engagement models, matched to your moment.",
    "process.m1.title": "Fixed-scope projects",
    "process.m1.desc":
      "Well-defined, one-off deliverables — an inexigibility thesis, a credentialing, a market-entry plan.",
    "process.m2.title": "Success fees",
    "process.m2.desc":
      "Compensation tied to results. Our success happens when the public contract closes.",
    "process.m3.title": "Monthly retainers",
    "process.m3.desc":
      "Ongoing support for your government-sales operation, with defined cadence and priorities.",

    /* ---- Cases ---- */
    "cases.eyebrow": "Cases",
    "cases.title": "Real results in the public sector.",
    "cases.hero.tag": "Current operation",
    "cases.hero.title": "inup.ai / PressCont",
    "cases.hero.desc":
      "Our ongoing GovTech operation, generating concrete access to the public market:",
    "cases.hero.p1": "R$200k in public sponsorship secured.",
    "cases.hero.p2": "5 long-term public-sector clients.",
    "cases.hero.p3": "Institutional certifications with GOV MG, PRODESP and CAIXA.",
    "cases.hero.p4":
      "Complex legislation turned into digital checklists for public managers (PressCont).",
    "cases.hero.p5": "Sponsorship solutions for SEBRAE.",
    "cases.track.label": "Founder's track record",
    "cases.track.t1.org": "PwC Brazil",
    "cases.track.t1.desc":
      "Corporate tax law for Petrobras, Santander and British American Tobacco.",
    "cases.track.t2.org": "Rocket Internet (ZEN Rooms)",
    "cases.track.t2.desc":
      "Grew 15 → 1,500 rooms in a year; USD 15M acquisition by Yanolja.",
    "cases.track.t3.org": "Draper Startup House",
    "cases.track.t3.desc":
      "Led the global rebrand after Tim Draper's USD 3.5M investment; 8 locations remotely.",
    "cases.track.t4.org": "Plum Food (Sydney)",
    "cases.track.t4.desc":
      "Costs −30%, daily volume +600% (50 → 350) as Country Manager.",

    /* ---- Founder ---- */
    "founder.eyebrow": "Founder",
    "founder.name": "Vitor Carrão",
    "founder.role": "Lawyer (OAB) & operator · GovTech",
    "founder.body":
      "A lawyer by training and an operator by career, Vitor combines the rigour of public law with hands-on experience scaling companies globally. From tax advisory to international startup expansion, he now applies that dual expertise to connect cutting-edge technology to the Brazilian State.",

    /* ---- Mission & vision ---- */
    "mv.mission.label": "Mission",
    "mv.mission.text":
      "Enable companies to sell to the Brazilian public sector, turning regulatory complexity into real access to the government market, with legal certainty and solid institutional relationships.",
    "mv.vision.label": "Vision",
    "mv.vision.text":
      "A Brazil where the best technology reaches the public sector. Where the State buys from those who build the future.",

    /* ---- Contact ---- */
    "contact.eyebrow": "Contact",
    "contact.title": "Let's open the public market for your company.",
    "contact.subhead":
      "Tell us your challenge. We reply fast and with clarity about the path forward.",
    "contact.whatsapp": "Message on WhatsApp",
    "contact.email": "Send an email",
    "contact.label.email": "Email",
    "contact.label.phone": "Phone / WhatsApp",
    "contact.label.location": "Location",
    "contact.location.value": "Juiz de Fora – MG, Brazil",

    /* ---- Footer ---- */
    "footer.tagline": "The bridge between your company and the Brazilian State.",
    "footer.rights": "All rights reserved.",

    /* ---- Dynamic / pre-filled messages ---- */
    "wa.message": "Hi! I came from the Octagon Solutions website and I'd like to talk about selling to government.",
    "email.subject": "Website enquiry — Octagon Solutions",
  },
};

// Expose globally for main.js (no modules/build step in this project).
window.I18N = I18N;
