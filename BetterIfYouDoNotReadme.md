# BetterIfYouDoNotReadme.md

## 📐 Guía de Estilo — Portafolio de Francisco José Montes Belloso

---

### ✨ Estética General: *Acero & Cristal*

Este portafolio está construido bajo la idea visual de **acero industrial con acabados de cristal**, usando:

- Fondos oscuros, texturas metálicas (como la imagen de fondo en `bd.jpg`)
- Brillos, transparencias (`rgba`, `backdrop-filter`)
- Sombras sutiles para profundidad
- Colores neón como acento visual

Se trabaja con un diseño **mobile-first**, totalmente responsive, limpio, visualmente moderno y centrado en **accesibilidad**.

---

### 🎨 Paleta de Colores (definida en `:root`)

| Variable CSS          | HEX        | Uso                                     |
|-----------------------|------------|------------------------------------------|
| `--color-fondo`       | `#0d0d0d`  | Fondo base del sitio                     |
| `--color-oscuro`      | `#c1fc36`  | Colores de impacto (líneas, bordes)      |
| `--color-claro`       | `#1a1a1a`  | Tarjetas, bloques internos               |
| `--color-acento`      | `#00ffc3`  | Hover, enlaces, efectos animados         |
| `--color-destacado`   | `#bfff00`  | Títulos llamativos, elementos destacados |
| `--color-texto`       | `#f2f2f2`  | Color general del texto                  |

Los colores anteriores están pensados para brillar sobre un fondo oscuro y generar contraste sin perder accesibilidad.

---

### 🔡 Tipografías Usadas

- **Primaria (general)**: `'Roboto', sans-serif`
- **Títulos y header**: `'Orbitron', sans-serif`  
  - Importada vía Google Fonts:  
    [`https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700`](https://fonts.google.com/specimen/Orbitron)

---

### 📁 Estructura del Proyecto

```
mi-porfolio/
├── index.html
├── about.html
├── projects.html
├── contact.html
│
├── assets/
│   ├── images/     # Fotos de perfil y proyectos
│   ├── icons/      # Iconos SVG personalizados
│
├── styles/
│   ├── style.css   # Variables y reset base
│   ├── header.css  # Estilos del header (responsive + animado)
│   ├── main.css    # Hero, skills, proyectos, educación, etc.
│   ├── footer.css  # Pie de página + redes
│
├── scripts/
│   ├── claro-oscuro.js  # Alternancia de tema
```

---

### 📸 Logo Personal

Actualmente es textual, definido como:

```html
<div class="logo">Mi Portfolio</div>
```

Con efectos `text-shadow` en colores neón (`--color-acento`) para reflejar la estética futurista.  
👉 Se planea reemplazar por un SVG animado con estilo "tech".

---

### 💎 Efectos Visuales y Animaciones

Usas animaciones personalizadas en `main.css` para dar vida a la página:

- `@keyframes moverCodigo`: efecto de texto de código que se desplaza detrás del hero.
- `romperCristal`: animación hover que simula ruptura visual.
- `girarEsfera`: giro 3D continuo para tarjetas de proyectos.

Además, todos los botones importantes tienen `backdrop-filter` y transparencias para estilo **glassmorphism**.

---

### 📚 Recursos y Librerías Usadas

- [Google Fonts – Orbitron](https://fonts.google.com/specimen/Orbitron)
- [Devicon](https://devicon.dev/) – iconos tecnológicos
- [Glassmorphism Generator](https://hype4.academy/tools/glassmorphism-generator)
- [CSS Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [FontAwesome](https://fontawesome.com/) *(planeado)*

---

### ⚙️ Problemas Técnicos y Soluciones

#### 📱 Adaptabilidad en móviles
- **Problema**: El diseño inicial no se ajustaba al iPhone SE.
- **Solución**: Rediseño **mobile-first** completo con `flexbox`, `grid` y unidades relativas (`rem`, `vw`, `vh`).

#### 🌙 Tema claro/oscuro
- **Problema**: El botón de alternancia perdía el estado.
- **Solución**: Uso de `localStorage` para guardar preferencias entre sesiones (`claro-oscuro.js`).

#### 🎯 Falta de jerarquía visual
- **Problema**: Demasiado contenido sin diferenciar.
- **Solución**: Uso de fondos translúcidos, bordes, y separadores por secciones (`.education`, `.projects`, `.testimonials`...).

#### 🧠 Accesibilidad
- **Problema**: Contrastes insuficientes y estructura visual desordenada.
- **Solución**: Mejora del contraste con colores intensos, uso correcto de `alt`, `aria-label`, `tabindex`, y semántica HTML.

#### 🖼️ Imágenes pesadas
- **Problema**: Lenta carga en móvil.
- **Solución**: Compresión, ajuste de tamaño y uso de `loading="lazy"`.

---

### ✅ Buenas Prácticas Aplicadas

- Código modular (CSS dividido en `header`, `main`, `footer`)
- Variables CSS bien organizadas
- Tipografías importadas desde Google Fonts
- Separación clara de HTML, CSS y JS
- Comentarios internos útiles como planificación (`/* Cosas para el próximo trabajo */`)
- Responsive 100% funcional en móviles

---

### 🧑‍💻 Autor

**Francisco José Montes Belloso**  
📍 Desarrollador Web  
🌐 [GitHub](https://github.com/FMontes-alt)  
🔗 [LinkedIn](https://www.linkedin.com/in/francisco-jos%C3%A9-montes-belloso-82a246350/)

---

> "No todo el código se escribe para que lo entiendan las máquinas. A veces, es para que lo entienda tu yo del futuro."
