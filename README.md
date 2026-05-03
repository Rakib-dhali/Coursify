# Coursify

**Master New Skills, Online Anytime, Anywhere**

A modern, responsive online course platform built with Next.js. Browse, explore, and learn from world-class instructors with beautifully designed course cards, instructor profiles, and learning resources.

![Coursify Preview](./public/preview.png)

## 🌐 Live Demo

**[Visit Coursify →](https://coursify-rakib.vercel.app/)**
---

## ✨ Key Features

- **Modern & Responsive Design** — Clean UI optimized for all devices
- **Course Showcase** — Featured, popular, and new release sections
- **Course Detail Pages** — Instructor info, level, duration & rating
- **Live Search** — Filter courses by title in real time
- **Authentication** — Sign up, sign in, Google OAuth via Better Auth
- **Email Verification** — Powered by Resend
- **User Profiles** — View and update profile information
- **Smooth Animations** — Powered by Framer Motion and Lenis
- **Toast Notifications** — User feedback with react-hot-toast
- **Marquee Effects** — Eye-catching brand/sponsor sections
- **Dynamic Metadata** — SEO-ready per-page titles and descriptions

---

## 🛠️ Tech Stack & Packages

### Core
| Package | Purpose |
|---|---|
| `next` | React framework (App Router) |
| `react` / `react-dom` | UI library |
| `typescript` | Type safety |

### Styling & UI
| Package | Purpose |
|---|---|
| `tailwindcss` | Utility-first styling |
| `lucide-react` | Icon library |
| `react-icons` | Social & brand icons |

### Animations & UX
| Package | Purpose |
|---|---|
| `motion` | Animations |
| `lenis` | Smooth scrolling |
| `react-fast-marquee` | Horizontal marquee |
| `react-hot-toast` | Toast notifications |

### Auth & Database
| Package | Purpose |
|---|---|
| `better-auth` | Authentication (email + Google OAuth) |
| `mongodb` | Database (Atlas) |


---

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/Rakib-dhali/Coursify.git
cd Coursify

# 2. Install dependencies
npm install

# 3. Add environment variables
cp .env.example .env.local

# 4. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables

```env
MONGODB_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

## 📁 Project Structure
```
Coursify/
├── public/
│   ├── data.json
│   └── logo.png
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (main)/
│   │   │   ├── courses/
│   │   │   ├── course-details/[id]/
│   │   │   └── my-profile/
│   │   ├── api/
│   │   └── globals.css
│   ├── assets/
│   ├── components/
│   ├── lib/
│   ├── proxy.ts
│   └── type.ts
├── .env
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── next.config.js
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```
## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Made with ❤️ by [Rakib Dhali](https://github.com/Rakib-dhali) — Star the repo if you like it! ⭐