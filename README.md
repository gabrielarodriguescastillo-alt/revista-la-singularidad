# LA SINGULARIDAD — Portal Web de la Revista Científica UFV

Sitio web estático editorial de la revista **La Singularidad**, publicación científica oficial de la Sociedad de Física de la Universidad Francisco de Vitoria (UFV Madrid).

---

## ⚡ Guía Rápida: Publicar en GitHub Pages en 2 Minutos

La web está diseñada con arquitectura estática pura (HTML5 semántico, CSS3 moderno y Vanilla JavaScript con renderizado KaTeX), lo que permite que se aloje de forma **gratuita, ultra-rápida y permanente** en GitHub Pages sin necesidad de servidores ni bases de datos.

### Paso 1: Subir la carpeta a tu repositorio en GitHub
Si ya tienes un repositorio para la Sociedad de Física o creas uno nuevo (ej. `revista-la-singularidad` o en la rama `gh-pages`):

```bash
cd /Users/gabrielarodriguescastillo/Desktop/SOCIEDAD_FISICA/revista_web

# Inicializar git si es un repositorio independiente
git init
git add .
git commit -m "feat: Lanzamiento inicial web La Singularidad Vol. 1"

# Conectar con tu repositorio remoto de GitHub
git remote add origin https://github.com/TU_USUARIO_O_ORGANIZACION/revista-la-singularidad.git
git branch -M main
git push -u origin main
```

> **Consejo:** Si todo el proyecto de la Sociedad de Física está en un único repositorio raíz, simplemente haz `git add revista_web && git commit -m "Lanzamiento web La Singularidad" && git push`.

---

### Paso 2: Activar GitHub Pages en el panel de control
1. Abre tu repositorio en GitHub en el navegador.
2. Entra en la pestaña **Settings** (Configuración) en la barra superior.
3. En el menú lateral izquierdo, haz clic en **Pages** (dentro de la sección *Code and automation*).
4. En **Build and deployment**:
   - **Source**: Selecciona `Deploy from a branch`.
   - **Branch**: Selecciona `main` (o la rama que uses) y en la carpeta elige `/ (root)` si subiste directamente `revista_web`, o `/revista_web` si está en un subdirectorio.
5. Haz clic en **Save**.

¡Listo! En menos de 60 segundos, GitHub te dará la URL pública:  
`https://TU_USUARIO.github.io/revista-la-singularidad/`

---

## 💻 Visualización y Pruebas en Local

Para ver y editar la revista en tu ordenador antes de publicar:

1. Ejecuta el script de inicio en terminal:
   ```bash
   /Users/gabrielarodriguescastillo/Desktop/SOCIEDAD_FISICA/start_revista.sh
   ```
2. O lanza directamente un servidor local Python:
   ```bash
   cd /Users/gabrielarodriguescastillo/Desktop/SOCIEDAD_FISICA/revista_web
   python3 -m http.server 8085
   ```
3. Abre en tu navegador: [http://localhost:8085](http://localhost:8085)

---

## 🌟 Características Técnicas del Portal

* **Cero dependencias pesadas:** No requiere Node.js, Webpack ni librerías complejas. Funciona directamente en cualquier navegador moderno.
* **Renderizado Matemático KaTeX:** Fórmulas físicas complejas (ecuaciones de Euler, Grad-Shafranov, métrica de Kerr, derivadas parciales) renderizadas con tipografía vectorial matemática impecable.
* **Buscador instantáneo:** Filtrado en tiempo real por título, autor, sección o palabras clave.
* **Filtros por sección:** Acceso directo a Editorial, En el Horizonte, Physics Lab, Voces de la Ciencia, Física Pop, Tribuna Estudiantil y Reto de Fermi.
* **Lector in-depth (Modal):** Experiencia de lectura inmersiva con entradilla, cajas destacadas (*boxouts*), conclusiones (*takeaways*) y bibliografía.
* **Estilos de Impresión (`@media print`):** Al pulsar *Imprimir* o `Ctrl+P / Cmd+P`, los elementos web y botones se ocultan automáticamente para generar un documento limpio en PDF o papel físico listo para encuadernar.
* **Paleta oficial UFV:**
  - `Deep Space Navy` (`#071426`)
  - `Scientific Cyan` (`#65D9E8`)
  - `Radiant Gold` (`#F3C969`)
  - `Stellar White` (`#F8FAFC`)

---

## 👥 Créditos Editoriales

* **Dirección General:** Gabriela Rodrigues Castillo (Presidenta SF-UFV)
* **Coordinación Operativa:** Alejandro Gómez Serrano (Vicepresidente)
* **Dirección Científica:** Lucía Martínez Alonso
* **Desarrollo Web & Automatización:** Carlos Vega Ruiz
* **Comunicación & Redacción:** Elena Morales Vidal
* **Edición:** Sociedad de Física — Universidad Francisco de Vitoria (Madrid)
