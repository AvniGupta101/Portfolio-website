<<<<<<< HEAD
# 🚀 Avni Gupta's Portfolio

A modern, animated 3D developer portfolio built with React, Three.js, TailwindCSS, and motion effects — showcasing full-stack development, AI/ML, and IoT projects.

![Portfolio Preview](https://github.com/AvniGupta101/Portfolio-Avni/assets/coding-pov.png)
=======
# 🌐 Avni Gupta — Portfolio Website

Welcome to my personal portfolio website!  
This site showcases my projects, skills, and achievements — designed to reflect both my technical experience and creative work.
>>>>>>> 7fc5ab820c74d0651b952c08981a7534638963b4

---

## ✨ Features
<<<<<<< HEAD

- 🔥 3D visuals powered by **React Three Fiber** and **Drei**
- ⚡ Smooth transitions and scroll-based animations using **Framer Motion**
- 🎨 Clean, responsive UI with **TailwindCSS**
- 💌 Working contact form using **EmailJS**
- 🧱 Beautiful UI enhancements with **Aceternity UI** and **Magic UI**
- 🚀 Lightning-fast development with **Vite**
- 📱 Fully responsive design
- 🎯 SEO optimized with meta tags
- 🛡️ Error boundaries for better UX

---

## 🛠 Tech Stack

| Tech              | Description                           |
|-------------------|---------------------------------------|
| React             | Front-end JavaScript library          |
| Vite              | Fast bundler and dev environment      |
| TailwindCSS       | Utility-first CSS framework           |
| React Three Fiber | 3D rendering with Three.js in React   |
| Drei              | Helpers and abstractions for R3F      |
| Framer Motion     | Animation library for React           |
| EmailJS           | Form handling and email integration   |
| Aceternity UI     | Custom UI components                  |
| Magic UI          | Prebuilt UI elements and design extras|

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the Repository**
```bash
git clone https://github.com/AvniGupta101/Portfolio-Avni.git
cd Portfolio-Avni
```

2. **Install Dependencies**
```bash
npm install
```

3. **Run the Development Server**
```bash
npm run dev
```
The app will be available at http://localhost:3000.

---

## 📦 Build for Production

```bash
npm run build
```

This will create a `dist` folder with the production build.

---

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

2. **Push to main branch**
   - The GitHub Actions workflow will automatically build and deploy your site
   - Your site will be available at `https://avnigupta101.github.io/Portfolio-Avni/`

### Other Deployment Options

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
# Upload the dist folder to Netlify
```

#### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init hosting
npm run build
firebase deploy
```

---

## 📁 Project Structure

```bash
├── public/
│   ├── assets/             # Images, textures, models
│   ├── models/             # 3D Astronaut model
│   ├── intern.png          # Certificate
│   └── resume.pdf          # Resume file
├── src/
│   ├── components/         # Reusable components
│   │   ├── ErrorBoundary.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── ...
│   ├── constants/          # Reusable data
│   ├── sections/           # Portfolio sections
│   ├── App.jsx             # Main app file
│   ├── index.css           # Tailwind CSS
│   └── main.jsx            # Entry point
├── .github/workflows/      # GitHub Actions
├── tailwind.config.js
└── vite.config.js
```

---

## 🔧 Configuration

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the service details in `src/sections/Contact.jsx`:
   - `service_79b0nyj` → Your service ID
   - `template_17us8im` → Your template ID
   - `pn-Bw_mS1_QQdofuV` → Your public key

### Customization
- Update personal information in `src/constants/index.js`
- Modify colors in `tailwind.config.js`
- Add your own projects, experiences, and credentials

---

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

---

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: '#1e293b',
  secondary: '#3b82f6',
  // Add your custom colors
}
```

### Content
- **Projects**: Edit `myProjects` in `src/constants/index.js`
- **Experiences**: Update `experiences` array
- **Credentials**: Modify `credentials` array
- **Social Links**: Update `mySocials` array

---

## 🐛 Troubleshooting

### Common Issues

1. **Build fails**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **3D models not loading**
   - Ensure model files are in `public/models/`
   - Check file paths in components

3. **EmailJS not working**
   - Verify service configuration
   - Check browser console for errors

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

---

## 📬 Contact

**Avni Gupta**
- Email: avnigupta06@gmail.com
- LinkedIn: [avni-gupta101](https://www.linkedin.com/in/avni-gupta101/)
- GitHub: [AvniGupta101](https://github.com/AvniGupta101)

---

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

Made with ❤️ by [Avni Gupta](https://github.com/AvniGupta101)
=======
- 🎨 Modern and responsive design
- ⚡ Built with fast and lightweight technologies
- 🧑‍💻 Showcases projects, skills, and contact information
- 🚀 Deployed seamlessly on [Vercel](https://vercel.com)

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript (or React / Next.js)
- **Styling:** Tailwind CSS / CSS Modules / Styled Components
- **Deployment:** [Vercel](https://vercel.com)
- **Version Control:** Git & GitHub

---

## ⚙️ Setup Instructions

### 1️⃣ Clone this repository
```bash
git clone https://github.com/avni-gupta/portfolio.git
cd portfolio
>>>>>>> 7fc5ab820c74d0651b952c08981a7534638963b4
