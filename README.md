# 🧠 Perplexity Chat App

A sleek, minimal clone of Perplexity.ai built using **Next.js 14**, **Tailwind CSS**, **TypeScript**, and **PERPLEXITY API**. This app features a chat interface that mimics the functionality of modern AI assistants, with citations, a dark theme, and a responsive design.

---

## 🚀 Demo

https://preplexai.vercel.app/

---

<img width="1440" alt="Screenshot 2025-07-07 at 3 04 40 PM" src="https://github.com/user-attachments/assets/8916e15e-a067-42a2-b60c-92fe3f38815a" />

---

<img width="1440" alt="Screenshot 2025-07-07 at 3 04 04 PM" src="https://github.com/user-attachments/assets/2fa66759-e031-4666-aa87-d20f2f0c94b9" />




---

## 🚀 Features

- ✨ Perplexity-style AI chat interface
- 🌙 Theme toggler (dark/light)
- 🧱 Modular UI components using `shadcn/ui`
- 🧠 Connects to PERPLEXITY Sonar models via API
- 📄 Displays source citations
- 🧩 Built with App Router and TypeScript

---

## 📦 Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (Radix UI + Tailwind components)
- **Perplexity Api**
- **Vercel (for deployment)**

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/xtfaisal07/preplexai.git
cd perplexity-chat-app
```

### 2. Install Dependencies

```bash
# Using npm
npm install --legacy-peer-deps

# OR using pnpm
pnpm install
```

### 3. Create `.env.local`

```env
# .env.local
PERPLEXITY_API_KEY=your_perplexity_api_key_here
NEXT_PUBLIC_APP_NAME=Perplexity Chat Clone
```

> Replace `your_perplexity_api_key_here` with your Perplexity Api secret key.

### 4. Run the Development Server

```bash
npm run dev
# or
pnpm dev
```

Then visit [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
perplexity-chat-app/
├── app/                # App Router Pages and Layouts
├── components/         # UI and custom components
├── public/             # Static assets
├── styles/             # Global styles
├── .env.local          # Environment config (you create this)
├── tailwind.config.ts  # Tailwind setup
├── package.json        # Project metadata
```

---

## 🔒 Environment Variables

| Key               | Description                  |
|------------------|------------------------------|
| `PERPLEXITY_API_KEY` | Your Perplexity secret API key   |
| `NEXT_PUBLIC_APP_NAME` | App name for metadata   |

---

## 🧪 Coming Soon

- 🔍 Search chat history
- 📁 Chat history sidebar
- 📊 Toggleable text/table views
- 📱 Mobile UX improvements

---

## 📤 Deployment

You can deploy this project easily to **Vercel**:

```bash
npx vercel
```

---

## 🧑‍💻 Author

**Faisal Naseer**  
© 2025 Faisal Naseer. All rights reserved.

---

## 📜 License

MIT License
