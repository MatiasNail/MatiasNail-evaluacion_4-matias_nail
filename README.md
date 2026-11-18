# Portafolio Profesional — Matías Nail (React + TypeScript)

Migración y modularización del portafolio personal de la Evaluación N°2 hacia una Single Page Application (SPA) desarrollada con **React**, **TypeScript**, **Vite** y **React Router**.

## Referencia Visual (E2 vs E4)
El diseño conserva la estructura asimétrica de dos columnas (barra lateral fija de navegación y contenido principal), paleta cromática (`#0f172a` y acentos `#5eead4`), tipografía y accesibilidad del portafolio original documentado en [`docs/captura-e2.png`](docs/captura-e2.png).

## Contrato Técnico de la API Utilizada
- **API seleccionada:** GitHub REST API.
- **Endpoint:** `https://api.github.com/users/MatiasNail/repos?sort=updated&per_page=6`
- **Justificación:** Permite sincronizar automáticamente los repositorios públicos más recientes del autor sin requerir autenticación ni exponer claves privadas.
- **Estructura JSON esperada (`GitHubRepo[]`):**
  ```json
  [
    {
      "id": 123456,
      "name": "nombre-repositorio",
      "description": "Descripción del proyecto",
      "html_url": "[https://github.com/MatiasNail/nombre-repositorio](https://github.com/MatiasNail/nombre-repositorio)",
      "language": "TypeScript",
      "stargazers_count": 0,
      "updated_at": "2026-11-18T12:00:00Z"
    }
  ]