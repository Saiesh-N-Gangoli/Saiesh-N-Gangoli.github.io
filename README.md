# Saiesh N Gangoli - Personal Portfolio

A modern, responsive portfolio website built with React, Vite, and TailwindCSS. Features a beautiful UI with dark/light theme toggle, smooth animations, and mobile-responsive design.

## Features

- **Modern UI/UX** with gradient designs and smooth animations
- **Dark/Light Theme Toggle** with system preference detection
- **Fully Responsive** design that works on all devices
- **Smooth Scrolling** navigation with header offset
- **Interactive Components** with hover effects and transitions
- **Mobile-First** responsive navigation menu
- **Semantic HTML5** structure for accessibility
- **Component-Based Architecture** for maintainability

## Technologies Used

- **React 18** - Modern JavaScript framework
- **Vite** - Fast development server and build tool
- **TailwindCSS** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript features
- **CSS3 Animations** - Smooth transitions and micro-interactions

## Project Structure

```
personal-website/
{
  "src": {
    "components": {
      "Navbar.jsx": "Navigation with theme toggle",
      "Hero.jsx": "Hero section with call-to-action",
      "About.jsx": "Personal about section",
      "Skills.jsx": "Technical skills showcase",
      "Experience.jsx": "Professional experience timeline",
      "Projects.jsx": "Project portfolio",
      "Contact.jsx": "Contact form and information",
      "Footer.jsx": "Footer with links and social"
    },
    "contexts": {
      "ThemeContext.jsx": "Theme management context"
    },
    "utils": {
      "smoothScroll.js": "Smooth scroll utilities"
    },
    "App.jsx": "Main application component",
    "main.jsx": "Application entry point",
    "index.css": "Global styles and Tailwind imports"
  },
  "public": "Static assets",
  "index.html": "HTML template",
  "package.json": "Dependencies and scripts",
  "tailwind.config.js": "Tailwind configuration",
  "vite.config.js": "Vite build configuration"
}
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization

### Personal Information

Update the following files with your personal information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name and professional titles
   - Modify call-to-action buttons

2. **About Section** (`src/components/About.jsx`):
   - Add your personal bio
   - Update location and availability status

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add your technical skills
   - Organize by categories (Frontend, Backend, Tools)

4. **Experience Section** (`src/components/Experience.jsx`):
   - Add your work experience
   - Include achievements and responsibilities

5. **Projects Section** (`src/components/Projects.jsx`):
   - Add your portfolio projects
   - Include technologies and live/demo links

6. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Add social media links

7. **Footer** (`src/components/Footer.jsx`):
   - Update social media links
   - Modify contact information

### Theme Customization

The theme colors can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'primary': '#3b82f6',    // Primary blue
      'secondary': '#1e40af',  // Secondary blue
    }
  }
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add the component to `App.jsx`
3. Add navigation link to `Navbar.jsx`
4. Update smooth scroll utility if needed

## Deployment

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist/` directory.

### Deploy to Netlify

1. Run `npm run build`
2. Upload the `dist/` folder to Netlify
3. Set up custom domain if needed

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy
3. Configure custom domain if needed

## Performance

The website is optimized for performance with:

- **Code Splitting** - Automatic with Vite
- **Tree Shaking** - Unused code removal
- **CSS Optimization** - Purged unused Tailwind styles
- **Image Optimization** - Use WebP format when possible
- **Lazy Loading** - Implement for images and components

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: saiesh.gangoli@example.com
- LinkedIn: linkedin.com/in/saiesh-gangoli
- GitHub: github.com/saiesh-gangoli

---

Built with React & TailwindCSS | © 2024 Saiesh N Gangoli
