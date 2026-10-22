# NOIR — практическая работа №1 (React + JSX)

## Запуск
```bash
npm install
npm run dev
```

## Структура компонентов
Каждый компонент находится в своей папке, рядом со своим CSS Module:

```text
src/
├── App.jsx
├── main.jsx
├── global.css
└── components/
    ├── Header/
    │   ├── Header.jsx
    │   └── Header.module.css
    ├── Hero/
    │   ├── Hero.jsx
    │   └── Hero.module.css
    ├── PopularProducts/
    │   ├── PopularProducts.jsx
    │   └── PopularProducts.module.css
    ├── ProductCard/
    │   ├── ProductCard.jsx
    │   └── ProductCard.module.css
    ├── Newsletter/
    │   ├── Newsletter.jsx
    │   └── Newsletter.module.css
    └── Footer/
        ├── Footer.jsx
        └── Footer.module.css
```

Компоненты сразу экспортируются через `export default function ComponentName()`.
`global.css` содержит только общие стили и тёмную палитру; стили блоков лежат в CSS Modules рядом с компонентами.
