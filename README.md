# HillsView Productions - Next.js Portfolio

A modern, professional portfolio website for HillsView Productions, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

### ✨ Modern Tech Stack
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Three Fiber** for 3D elements
- **next-themes** for dark/light mode
- **Lucide React** for icons

### 🎨 Design & UX
- Responsive mobile-first design
- Dark/light mode support
- Smooth animations and transitions
- Professional photography-focused layout
- Modern gradient and glass-morphism effects

### 📱 Pages & Sections
- **Homepage** - Hero, About, Services, Portfolio, Contact
- **Services** - Detailed service offerings with pricing
- **Portfolio** - Categorized project showcase
- **Contact** - Contact form with business information

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── services/           # Services page
│   ├── portfolio/          # Portfolio page
│   └── contact/            # Contact page
├── components/             # React components
│   ├── navbar.tsx          # Navigation
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── services.tsx        # Services section
│   ├── portfolio.tsx       # Portfolio section
│   ├── contact.tsx         # Contact section
│   ├── footer.tsx          # Footer
│   └── theme-provider.tsx  # Theme context
├── lib/                    # Utilities
│   └── utils.ts            # Helper functions
└── public/                 # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Emerald green (#10b981)
- **Background**: Dynamic (white/dark)
- **Text**: Dynamic contrast colors
- **Accent**: Emerald variations

### Typography
- **Primary**: Inter (system font)
- **Headings**: Bold weights
- **Body**: Regular weight
- **Code**: JetBrains Mono

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   ```bash
   Build Command: npm run build
   Output Directory: .next
   ```
3. Add environment variables if needed
4. Deploy!

### Manual Deployment
```bash
npm run build
npm start
```

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component
- **Static Generation**: SSG for static pages
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Components and images
- **Bundle Analysis**: Built-in Next.js analyzer

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration

## 📝 Content Management

### Adding New Portfolio Items
1. Update the `portfolioItems` array in `src/app/portfolio/page.tsx`
2. Add images to the `public/` directory
3. Update metadata as needed

### Updating Services
1. Modify the `services` array in `src/components/services.tsx`
2. Update pricing and features
3. Add new service pages if needed

### Contact Information
Update contact details in:
- `src/components/contact.tsx`
- `src/components/footer.tsx`
- `src/app/contact/page.tsx`

## 🎯 SEO Optimization

- **Metadata**: Configured in each page
- **Open Graph**: Social media preview
- **Structured Data**: Rich snippets
- **Sitemap**: Auto-generated
- **Performance**: Lighthouse optimized

## 🔒 Best Practices

- TypeScript for type safety
- ESLint for code quality
- Responsive design patterns
- Accessibility compliance
- Performance monitoring
- Error boundaries

## 📞 Support

For technical support or customization requests:
- Email: julius@hillsviewproduction.com
- Portfolio: [hillsviewproduction.com](https://hillsviewproduction.com)

---

Built with ❤️ by HillsView Productions Portfolio 
 Creating a website for my portfolio and also company

- Responsive Personal Portfolio Website Design Using HTML CSS & JavaScript
- Includes a light and dark theme.
- Contains animations when scrolling.
- Includes a form to send emails.
- Developed first with the Mobile First methodology, then for desktop.
- Compatible with all mobile devices and with a beautiful and pleasant user interface.


 
# 💼 Responsive Personal Portfolio Website
## [Watch it on youtube](https://youtu.be/5-_2z-DdWng)
### 💼 Responsive Personal Portfolio Website

💙 Join the channel to see more videos like this. [Bedimcode](https://www.youtube.com/c/Bedimcode)

![preview img](/preview.png)
