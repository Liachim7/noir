# NOIR — практическая работа (React + JSX)

## Запуск

1. Установите зависимости: `pnpm install`.
2. В одном терминале запустите json-server: `pnpm exec json-server db.json --host 0.0.0.0 --port 3000`.
3. В другом терминале запустите приложение: `pnpm run dev`.

Vite перенаправляет запросы `/products` и `/categories` на json-server.

## Практика 7 — useParams и props

- Карточка товара ведёт на `/product/:id`.
- `ProductPage` получает `id` через `useParams()` и в `useEffect` загружает товар по адресу `/products/:id`.
- После получения товара страница запрашивает его категорию по `categoryId`.
- Загруженные `product` и `category` передаются компоненту `ProductDetails` через props.
- Для списков и состояний загрузки используются React state и рендеринг через `map`.
- Общие стили находятся в `src/global.css`, стили компонентов и страниц — в соседних `.module.css` файлах.
- Компоненты экспортируются именованно.
