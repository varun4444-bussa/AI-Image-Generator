# 🎨 AI Image Generator

A modern, responsive web application for generating AI-powered images using the Pollinations AI API. Built with React, TypeScript, and Tailwind CSS.

![AI Image Generator](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-blue?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0-blue?style=for-the-badge&logo=vite)

## ✨ Features

- 🎨 **AI Image Generation**: Create stunning images using Pollinations AI API
- 🔐 **User Authentication**: Secure login and registration system
- 📱 **Responsive Design**: Beautiful UI that works on all devices
- 🎯 **Trending Prompts**: Quick access to popular image prompts
- 💾 **Image Gallery**: Save and manage your generated images
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development
- 🎨 **Modern UI**: Clean, modern interface with smooth animations
- 📊 **User Dashboard**: Track your generation usage and stats

## 🚀 Live Demo

[View Live Demo](https://your-vercel-url.vercel.app) *(Add your Vercel URL after deployment)*

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom gradients and animations
- **Icons**: Lucide React, React Icons
- **Image Generation**: Pollinations AI API
- **Authentication**: Local storage-based (mock system)
- **Deployment**: Vercel (recommended)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/varun4444-bussa/AI-Image-Generator.git
   cd AI-Image-Generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 Usage

### Generating Images
1. **Sign up/Login** to your account
2. **Navigate to Dashboard** from the main menu
3. **Enter a prompt** describing the image you want to generate
4. **Click "Generate Image"** and wait for the AI to create your masterpiece
5. **Download, copy URL, or save** the generated image

### Trending Prompts
- Click on any trending prompt to quickly fill the generation form
- Use these as inspiration for your own creative prompts

### Managing Images
- **Save to Gallery**: Keep your favorite images for later
- **Download**: Save images directly to your device
- **Copy URL**: Share image links with others

## 🏗️ Project Structure

```
AIimagegenerator/
├── src/
│   ├── components/
│   │   ├── auth/          # Authentication components
│   │   ├── layout/        # Layout and navigation
│   │   └── ui/           # Reusable UI components
│   ├── contexts/         # React contexts (Auth, Theme)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Application pages
│   │   └── auth/        # Authentication pages
│   ├── services/        # API services
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── public/              # Static assets
└── dist/               # Build output
```

## 🎨 Key Features Explained

### AI Image Generation
- Uses Pollinations AI API for high-quality image generation
- Supports various image styles and resolutions
- Real-time generation with loading indicators

### User Dashboard
- Track daily generation limits
- View subscription status
- Monitor total images created
- Responsive stats cards with hover effects

### Authentication System
- Mock authentication system using localStorage
- User session management
- Protected routes for authenticated users

### Responsive Design
- Mobile-first approach
- Beautiful gradients and animations
- Smooth hover effects and transitions
- Optimized for all screen sizes

## 🔧 Configuration

### Environment Variables
Currently, the project uses the Pollinations AI API which doesn't require API keys. If you want to switch to other APIs:

1. Create a `.env` file in the root directory
2. Add your API keys:
   ```env
   VITE_POLLINATIONS_API_URL=https://image.pollinations.ai
   ```

### Customization
- **Colors**: Modify Tailwind config in `tailwind.config.js`
- **Styling**: Update CSS variables in `src/index.css`
- **API**: Change image generation service in `src/services/imageGeneration.ts`

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration
4. Deploy with one click

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to GitHub Pages
1. Add `gh-pages` dependency
2. Configure build script in `package.json`
3. Deploy using GitHub Actions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Pollinations AI](https://pollinations.ai/) for the image generation API
- [React](https://reactjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the beautiful styling
- [Vite](https://vitejs.dev/) for the fast build tool
- [Lucide React](https://lucide.dev/) for the beautiful icons

## 📞 Support

If you have any questions or need help:
- Create an issue on GitHub
- Contact: [Your Email]
- Project URL: [https://github.com/varun4444-bussa/AI-Image-Generator](https://github.com/varun4444-bussa/AI-Image-Generator)

---

⭐ **Star this repository if you found it helpful!**
