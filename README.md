<a href="#">
  <img align="left" 
       alt="FOSS Hub Banner" 
       width="100%" 
       style="padding-right:10px;" 
       src="https://capsule-render.vercel.app/api?type=waving&height=250&color=0:00008B,100:00008B&text=Welcome%20to%20FOSS%20Hub&fontAlignY=45&fontSize=40&textBg=false&animation=twinkling&fontColor=ffffff" />
</a>

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?color=ffffff&size=30&width=900&height=80&lines=🌟+FOSS+Hub:+Discover+the+Best+Open+Source+Software" />
</p>

<div align="center" style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
  <img width="550" height="309" alt="image" src="https://github.com/user-attachments/assets/87a55ef6-cd29-4782-bfbe-d2c96350e967" />
  <img width="550" height="309" alt="image" src="https://github.com/user-attachments/assets/6fcce2f6-1538-4f73-84a4-a373d54a7c4f" />
</div>



## 🌐 Introduction

**FOSS Hub** is a modern, curated directory of high-quality Free and Open Source Software (FOSS) tools. It helps developers, designers, and tech enthusiasts **discover, explore, and celebrate open source software** with ease.

> 💻 Built for the open-source community. ⚡ Fast, intuitive, and modern UI. 🌍 Dark-themed & mobile-friendly.

---

## 🚀 Features

* 🎨 Modern Dark Theme & UI
* 🔍 Smart Search with instant filtering
* 📱 Fully responsive across all devices
* 🏷️ Browse tools by category
* ⚡ Lightning-fast performance with lazy loading
* 🔗 Direct links to official repositories & websites
* 📊 Tool Information: Descriptions, tags, logos, and categories
* 🎭 Smooth animations, hover effects, and gradients

---

## 🛠️ Tech Stack

| Component  | Technology           |
| ---------- | -------------------- |
| Framework  | React / Next.js      |
| Styling    | Tailwind CSS         |
| Animations | CSS3 & Framer Motion |
| Icons      | Lucide Icons         |
| Font       | Inter                |
| Build Tool | Vite / Next.js       |
| Deployment | Vercel / Netlify     |

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="55" height="55" />
  <img width="12" />
 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="55" height="55" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="55" height="55" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="55" height="55" />
</div>

---

## 📂 Project Structure

```
foss-hub/
├── public/
│   ├── images/         # Static images & tool logos
│   └── favicon.ico
├── src/
│   ├── components/     
│   │   ├── Layout/     
│   │   ├── Tools/      
│   │   └── UI/         
│   ├── data/          # Tool data & categories
│   ├── pages/         
│   │   ├── index.js   
│   │   ├── tools.js   
│   │   └── about.js   
│   ├── styles/        
│   └── utils/         
├── .env.local         
├── package.json       
├── README.md          
└── tailwind.config.js
```

---

## ⚙️ Getting Started

### Prerequisites

* Node.js v16+
* npm or yarn
* Git

### Installation

```bash
git clone https://github.com/yourusername/foss-hub.git
cd foss-hub
npm install  # or yarn install
npm run dev  # or yarn dev
```

Open in browser: `http://localhost:3000`

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

---

## 🔧 Adding New Tools

1. Edit `src/data/tools.js`
2. Add your tool entry:

```javascript
{
  id: 'unique-id',
  name: 'Tool Name',
  description: 'Brief description',
  category: 'Development', // or Design, Productivity
  url: 'https://official-site.com',
  github: 'https://github.com/org/repo',
  tags: ['tag1', 'tag2'],
  logo: '/images/tools/tool-logo.png',
  featured: false
}
```

3. Add logo in `public/images/tools/`
4. Submit a PR

**Tool Criteria:**

* OSI-approved license
* Active maintenance
* Stable release
* Clear documentation

---

## 🗺️ Roadmap

**Phase 1 (Current)**

* Homepage, Tools Directory, Search, Filtering, Responsive UI

**Phase 2 (Next)**

* Ratings & Reviews, Tool Comparison, Tool Submission Form

**Phase 3 (Future)**

* User Accounts, API, Community Forum, Blog, Tool Stats

**Phase 4 (Advanced)**

* Mobile App, Browser Extension, Alternative Suggestions, Contribution Tracking

---

## 🤝 Contributing

1. Fork the repo
2. Create branch: `git checkout -b feature/AmazingFeature`
3. Commit: `git commit -m 'Add AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. Open PR

[Contributing Guidelines](CONTRIBUTING.md)

---
## Thanks to all Contributors 💪

Thanks a lot for spending your time helping the project grow. Thanks a lot! Keep rocking 🍻
	 
<p>
  <img src="https://api.vaunt.dev/v1/github/entities/Unnimaya6122004/repositories/foss-hub/contributors?format=svg&limit=54" width="600" height"250" />
</p>

![Contributors](https://contrib.rocks/image?repo=Unnimaya6122004/foss-hub)
---

---
<div align="center" style="margin-top: 30px;">
  <h3 style="color: #ffffff;">Show some ❤️ by starring this repository!</h3>
  <a href="https://github.com/Unnimaya6122004/foss-hub/stargazers">
    <img src="https://img.shields.io/github/stars/Unnimaya6122004/foss-hub?style=social&labelColor=00008B&color=00FF99" />
  </a>
</div>

<p align="center" style="margin-top: 20px;">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=200&color=0:00008B,100:00008B&section=footer&text=⚙️+Thanks+for+exploring+FOSS+Hub!&fontAlignY=60&fontSize=30&fontColor=ffffff" />
</p>





