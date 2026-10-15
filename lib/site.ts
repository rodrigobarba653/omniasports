export const nav = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#talento", label: "Talento" },
  { href: "/#oportunidades", label: "Oportunidades" },
  { href: "/#contacto", label: "Contacto" },
] as const;

export const footerNav = nav.filter((item) => item.href !== "/#inicio");

export const contact = {
  name: "André Villamizar",
  role: "Co-founder & Chief Commercial Officer",
  email: "andre@omniasprts.com",
  phone: "+52 55 1849 6974",
  whatsapp: "https://wa.me/525518496974",
};

export const contactTypes = [
  "Deportista",
  "Marca",
  "Club o academia",
  "Otro",
] as const;

export type ContactType = (typeof contactTypes)[number];

export const players = [
  {
    slug: "charlyn",
    name: "Charlyn Corral",
    nickname: "La Goleadora",
    position: "Delantera",
    club: "Pachuca",
    keywords: ["Desempeño", "Resiliencia", "Ambición"],
    description:
      "Referente histórico del fútbol femenil mexicano, con una trayectoria internacional y un legado construido a través de goles, disciplina y perseverancia.",
    image: "/images/players/charlyn.png",
    width: 585,
    height: 540,
  },
  {
    slug: "kenti",
    name: "Kenti Robles",
    nickname: "La Pionera",
    position: "Defensa",
    club: "Pachuca",
    keywords: ["Experiencia", "Liderazgo", "Legado"],
    description:
      "Pionera del fútbol femenil mexicano, con una trayectoria en clubes como Barcelona, Atlético de Madrid y Real Madrid.",
    image: "/images/players/kenti.png",
    width: 570,
    height: 590,
  },
  {
    slug: "rebeca",
    name: "Rebeca Bernal",
    nickname: "La Capitana",
    position: "Defensa",
    club: "Manchester United",
    keywords: ["Liderazgo", "Confianza", "Consistencia"],
    description:
      "Referente de liderazgo del fútbol mexicano con proyección internacional y experiencia como capitana de la selección nacional.",
    image: "/images/players/rebeca.png",
    width: 239,
    height: 511,
  },
  {
    slug: "jacqueline",
    name: "Jacqueline Ovalle",
    nickname: "La Maga",
    position: "Delantera",
    club: "Orlando Pride",
    keywords: ["Creatividad", "Excelencia", "Ambición"],
    description:
      "Una de las figuras más destacadas del fútbol femenil mexicano, reconocida por su talento ofensivo y su histórica transferencia internacional.",
    image: "/images/players/jacqueline.png",
    width: 376,
    height: 457,
  },
  {
    slug: "alexia",
    name: "Alexia Delgado",
    nickname: "La Organizadora",
    position: "Mediocampista",
    club: "Tigres UANL",
    keywords: ["Inteligencia", "Balance", "Adaptabilidad"],
    description:
      "Futbolista que combina desarrollo académico y deportivo, demostrando que el éxito también se construye fuera de la cancha.",
    image: "/images/players/alexia.png",
    width: 275,
    height: 475,
  },
  {
    slug: "alice",
    name: "Alice Soto",
    nickname: "El Futuro",
    position: "Mediocampista",
    club: "Monterrey",
    keywords: ["Juventud", "Evolución", "Potencial"],
    description:
      "Talento emergente del fútbol mexicano con experiencia internacional desde categorías juveniles.",
    image: "/images/players/alice.png",
    width: 321,
    height: 460,
  },
  {
    slug: "montserrat",
    name: "Montserrat Saldívar",
    nickname: "Valiente",
    position: "Delantera",
    club: "América",
    keywords: ["Juventud", "Energía", "Identidad"],
    description:
      "Una de las nuevas caras del fútbol mexicano, con una trayectoria de evolución constante desde su debut profesional a temprana edad.",
    image: "/images/players/montserrat.png",
    width: 245,
    height: 495,
  },
] as const;

export const services = [
  {
    n: "01",
    title: "Desarrollo y representación",
    description:
      "Identificamos talento, diseñamos planes de carrera y conectamos futbolistas con clubes, academias y oportunidades profesionales.",
    items: ["Scouting", "Representación", "Transferencias", "Gestión de carrera"],
  },
  {
    n: "02",
    title: "Imagen y oportunidades comerciales",
    description:
      "Desarrollamos el potencial comercial de cada deportista a través de estrategias de marca personal, patrocinios, derechos de imagen y alianzas comerciales.",
    items: ["Marketing", "Patrocinios", "Comunicación", "Derechos de imagen"],
  },
  {
    n: "03",
    title: "Protección y bienestar integral",
    description:
      "Acompañamos a nuestros deportistas más allá del juego, facilitando asesoría especializada, preparación física y apoyo personal para cada etapa de su carrera.",
    items: [
      "Asesoría contractual",
      "Bienestar",
      "Movilidad",
      "Futuro profesional",
    ],
  },
] as const;

export const audiences = [
  {
    title: "Para deportistas",
    description:
      "Construimos una ruta para desarrollar tu potencial, impulsar tu carrera y proteger tu futuro profesional.",
    cta: "Haz crecer tu carrera",
    tipo: "Deportista" as const,
    image: "/images/opp-athletes.jpg",
  },
  {
    title: "Para marcas",
    description:
      "Conectamos marcas con deportistas e historias auténticas a través de embajadores, campañas, contenido y experiencias.",
    cta: "Conecta con nuestro talento",
    tipo: "Marca" as const,
    image: "/images/opp-brands.jpg",
  },
  {
    title: "Para clubes y academias",
    description:
      "Facilitamos la identificación de talento, conexiones estratégicas y oportunidades de colaboración deportiva.",
    cta: "Exploremos oportunidades",
    tipo: "Club o academia" as const,
    image: "/images/opp-clubs.jpg",
  },
] as const;

export const markets = [
  { name: "México", note: "Base" },
  { name: "Estados Unidos", note: "Expansión" },
  { name: "Latinoamérica", note: "Visión" },
  { name: "Europa", note: "Visión" },
] as const;

export const values = [
  "Representación",
  "Desarrollo",
  "Proyección",
  "Protección",
] as const;
