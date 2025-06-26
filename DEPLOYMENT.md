# Deployment Guide - HillsView Next.js Portfolio

## Quick Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial Next.js portfolio setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Select the repository
   - Configure build settings (auto-detected)
   - Deploy!

## Environment Setup

### Required Environment Variables
```env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Optional: Form handling
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint
```

### Build Configuration
```javascript
// next.config.js
const nextConfig = {
  images: {
    domains: ['github.com', 'hillsviewproduction.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}
```

## Performance Checklist

- ✅ Image optimization with next/image
- ✅ Static site generation (SSG)
- ✅ Bundle optimization
- ✅ CSS optimization with Tailwind
- ✅ Font optimization
- ✅ SEO metadata
- ✅ Mobile responsive design

## Custom Domain Setup

1. **Add Custom Domain in Vercel**
   - Go to Project Settings > Domains
   - Add your domain (e.g., hillsviewproduction.com)

2. **Update DNS Records**
   ```
   Type: CNAME
   Name: www
   Value: your-project.vercel.app
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

## Content Management

### Adding New Projects
Update `src/app/portfolio/page.tsx`:
```typescript
const portfolioItems = [
  {
    id: 1,
    title: "New Project",
    category: "Wedding",
    // ... other properties
  }
]
```

### Updating Services
Update `src/components/services.tsx`:
```typescript
const services = [
  {
    title: "New Service",
    price: "From $XXX",
    // ... other properties
  }
]
```

## Analytics & Monitoring

### Google Analytics
Add to `src/app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
      </body>
    </html>
  )
}
```

### Performance Monitoring
- Vercel Analytics (built-in)
- Core Web Vitals tracking
- Real User Monitoring (RUM)

## Backup & Version Control

### Git Workflow
```bash
# Development
git checkout -b feature/new-feature
git add .
git commit -m "Add new feature"
git push origin feature/new-feature

# Merge to main
git checkout main
git merge feature/new-feature
git push origin main
```

### Database Backup (if using)
- Regular automated backups
- Version-controlled schema
- Test restore procedures

## Security Best Practices

- ✅ HTTPS enforced
- ✅ Security headers configured
- ✅ Input validation
- ✅ Rate limiting on forms
- ✅ CORS properly configured

## Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for vulnerabilities
npm audit

# Fix issues
npm audit fix
```

### Content Updates
- Regular portfolio updates
- Service price adjustments
- Contact information updates
- Blog posts (if added)

## Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   npm run build
   # Check for TypeScript errors
   # Verify all imports
   ```

2. **Styling Issues**
   ```bash
   # Purge Tailwind cache
   rm -rf .next
   npm run dev
   ```

3. **Performance Issues**
   ```bash
   # Analyze bundle
   npm run build && npm run analyze
   ```

## Support

For deployment issues:
- Check Vercel documentation
- Review build logs
- Contact: julius@hillsviewproduction.com

---

🚀 Your Next.js portfolio is ready for the world!
