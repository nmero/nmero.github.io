// ─────────────────────────────────────────────────────────────
// FOTOS — editá solo este archivo para agregar o modificar fotos
//
// Cada foto tiene:
//   img   → URL o ruta local (ej: "fotos/mi-foto.jpg")
//   tag   → categoría que aparece arriba en el reverso
//   cap   → texto principal del reverso
//   meta  → datos técnicos abajo (prompt, cámara, fecha, etc.)
// ─────────────────────────────────────────────────────────────

const FOTOS = [
  {
    img: "https://i.pinimg.com/736x/db/f3/6b/dbf36bd7068cd4201fdfdeb6a6190c2a.jpg",
    tag: "Fotografía · Paisaje",
    cap: "La cumbre se revela entre nubes, silenciosa y absoluta.",
    meta: "Canon EOS R5 · f/8 · 1/250s · ISO 100\nPrompt: mountain peak golden hour dramatic clouds"
  },
  {
    img: "https://thumbs.dreamstime.com/b/el-mejor-caf%C3%A9-para-su-rutina-diaria-muchacha-sensual-tomando-matutino-favorito-mujer-guapa-fresco-caliente-en-la-ventana-chica-160848126.jpg",
    tag: "Fotografía · Blanco y negro",
    cap: "Mujer bebiendo café en una taza.",
    meta: "Canon EOS R5 · f/8 · 1/250s · ISO 100\nPrompt: woman coffee window morning light"
  },
  {
    img: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?q=80&w=1920",
    tag: "Retrato · Studio",
    cap: "Luz lateral, sombra profunda. El rostro como territorio.",
    meta: "Vertex AI · Imagen 3\nPrompt: cinematic portrait side lighting deep shadow editorial"
  }
];
