# Welcome to FossHub project

# 🚀 FOSS Hub - Open Source Software Directory

<div align="center">
  <img src="https://img.shields.io/badge/Built%20with-Lovable-ff69b4?style=for-the-badge" alt="Built with Lovable">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License">
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge" alt="PRs Welcome">
  <img src="https://img.shields.io/badge/Maintained%3F-yes-green?style=for-the-badge" alt="Maintained">
</div>

<div align="center">
  <h3>🌟 Discover, Explore, and Celebrate Open Source Software 🌟</h3>
  <p>A modern, dark-themed directory showcasing the best Free and Open Source Software (FOSS) tools across various categories.</p>
  
  [Live Demo](https://your-website-url.com) • [Report Bug](https://github.com/yourusername/foss-hub/issues) • [Request Feature](https://github.com/yourusername/foss-hub/issues)
</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Contributing](#-contributing)
- [Adding New Tools](#-adding-new-tools)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Contact](#-contact)
- [Acknowledgments](#-acknowledgments)

## 🎯 About The Project

FOSS Hub is a curated directory of high-quality open source software tools designed to help developers, designers, and tech enthusiasts discover powerful alternatives to proprietary software. Built with a modern, dark-themed interface, the platform celebrates the open source philosophy while providing an intuitive browsing experience.

### Why FOSS Hub?

- **Discoverability**: Find the best open source alternatives easily
- **Community-Driven**: Curated by and for the FOSS community
- **Modern Design**: Professional dark theme with smooth animations
- **Comprehensive**: Tools across development, design, productivity, and more
- **Direct Access**: Quick links to official project sites and repositories

## ✨ Features

### Current Features
- 🎨 **Modern Dark Theme** - Professional developer-focused design
- 🔍 **Smart Search** - Instant search with real-time filtering
- 📱 **Fully Responsive** - Seamless experience across all devices
- 🏷️ **Category Filtering** - Browse tools by category
- ⚡ **Lightning Fast** - Optimized performance with lazy loading
- 🔗 **Direct Links** - Quick access to official tool websites
- 📊 **Tool Information** - Comprehensive details for each tool
- 🎭 **Smooth Animations** - Subtle effects and transitions

### Design Highlights
- Glassmorphism card effects
- Custom gradient overlays
- Hover animations and glow effects
- Clean typography with Inter font
- Emerald green (#10b981) accent colors

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) / [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: CSS3 & Framer Motion
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter)
- **Build Tool**: [Vite](https://vitejs.dev/) / Next.js
- **Deployment**: [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/foss-hub.git
   cd foss-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application running.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration (if applicable)
NEXT_PUBLIC_API_URL=your_api_url

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📁 Project Structure

```
foss-hub/
├── public/
│   ├── images/         # Static images and logos
│   └── favicon.ico     # Site favicon
├── src/
│   ├── components/     # Reusable React components
│   │   ├── Layout/     # Layout components
│   │   ├── Tools/      # Tool-related components
│   │   └── UI/         # UI components
│   ├── data/          # Tool data and categories
│   ├── pages/         # Page components
│   │   ├── index.js   # Homepage
│   │   ├── tools.js   # Tools directory
│   │   └── about.js   # About page
│   ├── styles/        # Global styles
│   └── utils/         # Utility functions
├── .env.local         # Environment variables
├── package.json       # Project dependencies
├── README.md          # Project documentation
└── tailwind.config.js # Tailwind configuration
```

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a PR.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Use ESLint and Prettier for code formatting
- Follow the existing code structure
- Write meaningful commit messages
- Add comments for complex logic

## 🔧 Adding New Tools

To add a new FOSS tool to the directory:

1. **Edit the tools data file** (`src/data/tools.js`)
2. **Add your tool entry**:
   ```javascript
   {
     id: 'unique-id',
     name: 'Tool Name',
     description: 'Brief description of the tool',
     category: 'Development', // or Design, Productivity, etc.
     url: 'https://official-tool-website.com',
     github: 'https://github.com/org/repo',
     tags: ['tag1', 'tag2'],
     logo: '/images/tools/tool-logo.png',
     featured: false // Set to true for homepage feature
   }
   ```
3. **Add the tool logo** to `public/images/tools/`
4. **Submit a PR** with your changes

### Tool Submission Criteria
- Must be genuinely open source (OSI-approved license)
- Active maintenance (recent commits)
- Stable release available
- Clear documentation
- No malicious code

## 🗺️ Roadmap

### Phase 1 (Current)
- [x] Homepage with featured tools
- [x] Tools directory with filtering
- [x] About page
- [x] Search functionality
- [x] Category filtering
- [x] Responsive design

### Phase 2 (Q1 2025)
- [ ] User ratings and reviews
- [ ] Tool comparison feature
- [ ] Advanced filtering options
- [ ] Tool submission form
- [ ] Newsletter integration

### Phase 3 (Q2 2025)
- [ ] User accounts and favorites
- [ ] API for tool data
- [ ] Blog section
- [ ] Community forum
- [ ] Tool statistics dashboard

### Phase 4 (Q3 2025)
- [ ] Mobile app
- [ ] Browser extension
- [ ] Tool alternatives suggestions
- [ ] Integration with package managers
- [ ] Contribution tracking

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

Project Maintainer - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/foss-hub](https://github.com/yourusername/foss-hub)

Website: [https://your-website-url.com](https://your-website-url.com)

## 🙏 Acknowledgments

- [Lovable](https://lovable.dev) - For the amazing development platform
- [Open Source Initiative](https://opensource.org/) - For promoting open source software
- [All FOSS Contributors](https://github.com/yourusername/foss-hub/graphs/contributors) - For their valuable contributions
- The entire open source community for creating amazing tools

---

<div align="center">
  <p>Made with ❤️ by the FOSS Community</p>
  <p>
    <a href="https://github.com/yourusername/foss-hub/stargazers">⭐ Star us on GitHub</a> •
    <a href="https://twitter.com/intent/tweet?text=Check%20out%20FOSS%20Hub%20-%20A%20modern%20directory%20for%20open%20source%20software!&url=https://your-website-url.com">📢 Share on Twitter</a>
  </p>
</div>

## Project info

**URL**: https://lovable.dev/projects/38cd0e89-1cff-4c3d-b805-59ec299c0eb9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/38cd0e89-1cff-4c3d-b805-59ec299c0eb9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/38cd0e89-1cff-4c3d-b805-59ec299c0eb9) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
