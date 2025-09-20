# Apple iPhone 15 Pro Website Clone

A pixel-perfect recreation of Apple's iPhone 15 Pro product page featuring cutting-edge web technologies and immersive 3D experiences. This project showcases advanced React development with Three.js integration, delivering a premium user experience that mirrors Apple's signature design philosophy.

![iPhone 15 Pro Clone](https://img.shields.io/badge/React-18.2.0-blue) ![Three.js](https://img.shields.io/badge/Three.js-0.162.0-green) ![GSAP](https://img.shields.io/badge/GSAP-3.12.5-orange) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-cyan)

## ✨ Features

- **Interactive 3D Model Viewer** - Rotate and explore the iPhone 15 Pro in 3D space
- **Real-time Colour Customisation** - Switch between different titanium finishes
- **Smooth GSAP Animations** - Scroll-triggered animations and transitions
- **Video Carousel** - Synchronised video content with progress indicators
- **Responsive Design** - Optimised for all device sizes
- **Performance Optimised** - Efficient rendering and smooth 60fps animations
- **Modern React Patterns** - Hooks, functional components, and best practices

## 🚀 Technologies Used

### Frontend Framework
- **React 18.2.0** - Modern React with hooks and functional components
- **Vite 5.1.6** - Fast build tool and development server

### 3D Graphics & Animation
- **Three.js 0.162.0** - 3D graphics library for WebGL
- **@react-three/fiber 8.16.1** - React renderer for Three.js
- **@react-three/drei 9.103.0** - Useful helpers for react-three-fiber
- **GSAP 3.12.5** - Professional-grade animation library
- **@gsap/react 2.1.0** - React integration for GSAP

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.35** - CSS post-processor

### Development Tools
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **Sentry** - Error tracking and performance monitoring

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/AppleWebsiteClone.git
   cd AppleWebsiteClone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx        # Hero section with video
│   ├── Model.jsx       # 3D model viewer
│   ├── ModelView.jsx   # 3D model container
│   ├── IPhone.jsx      # 3D iPhone model
│   ├── Features.jsx    # Product features section
│   ├── Highlights.jsx  # Video carousel section
│   ├── HowItWorks.jsx  # A17 Pro chip showcase
│   ├── VideoCarousel.tsx # Interactive video carousel
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   └── Loader.jsx      # Loading component
├── constants/          # Application constants
├── utils/             # Utility functions and animations
└── App.jsx           # Main application component
```

## 🎯 Key Components

### 3D Model Viewer
- Interactive iPhone 15 Pro model with realistic materials
- Real-time colour switching between titanium finishes
- Smooth camera controls and rotation
- Optimised for performance with proper loading states

### Video Carousel
- Synchronised video playback with scroll position
- Interactive progress indicators
- Play/pause controls with smooth transitions
- Responsive video sizing

### Animations
- GSAP-powered scroll-triggered animations
- Smooth page transitions and micro-interactions
- Performance-optimised animation sequences
- Responsive animation timing

## 🎨 Design Features

- **Apple-inspired Design** - Faithful recreation of Apple's design language
- **Premium Typography** - Carefully selected fonts and spacing
- **Smooth Interactions** - Polished user experience with attention to detail
- **Accessibility** - Proper semantic HTML and keyboard navigation
- **Performance** - Optimised for fast loading and smooth animations

## 📱 Responsive Design

The website is fully responsive and optimised for:
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (320px - 767px)

## 🚀 Performance Optimisations

- **Lazy Loading** - 3D models and videos load on demand
- **Code Splitting** - Efficient bundle splitting with Vite
- **Image Optimisation** - Optimised media assets
- **Animation Performance** - 60fps animations with GSAP
- **Error Monitoring** - Sentry integration for production monitoring

## 📄 License

This project is for educational and portfolio purposes. All Apple trademarks and product names are property of Apple Inc.

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork and create your own version!
