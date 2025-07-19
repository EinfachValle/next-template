# Next.js Fullstack Template

A modern, scalable fullstack template using:

- **Next.js (App Router)**
- **MongoDB** via Mongoose
- **Socket.IO** (client & server)
- **Redux** (classic structure with actions/reducers)
- **Material-UI (MUI)**
- **i18n** with `next-i18next`
- **TypeScript**

---

## 📁 Project Structure

```
src/
├── app/                # Next.js App Router structure
│   └── auth/           # Auth pages
├── components/         # Shared UI components
├── constants/          # Static app-wide values
├── hooks/              # Custom React hooks
├── lib/
│   ├── config/         # Init and configuration files
│   ├── logger/         # Client/server logging
│   └── services/       # MongoDB, Socket.IO etc.
├── locales/            # i18n translation files
├── server/             # Custom server logic (optional)
├── store/              # Redux store, actions, reducers
├── theme/              # MUI theming and overrides
├── types/              # Global TypeScript types
├── utils/              # Utility functions
└── middleware.ts       # Next.js Edge Middleware
```

---

## 🧰 Scripts

```bash
yarn dev          # Start dev server
yarn build        # Build for production
yarn start        # Start production server
```

---

## 🌐 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
MONGODB_URI=
NEXT_PUBLIC_SOCKET_URL=
```

---

## 🌍 i18n

Localized via `next-i18next` under `public/locales/{lang}`. Default: `en`, `de`.

---

## 🧠 Redux

Redux is split by feature (classic style):

- `store/actions`
- `store/reducers`
- `store/types`

---

## 🔌 Socket.IO

Socket client setup is under `lib/services/socketClient.ts`.
Server socket handling in `server/index.ts`.

---

## 🧪 Testing (Optional)

This template is test-ready. Add:

- Jest / Vitest for unit tests
- Cypress / Playwright for e2e tests

---

## ✅ License

MIT — free to use and modify.
