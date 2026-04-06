# Setup & Deployment Guide

## 🚀 Local Development Setup

### Step 1: Install Node.js & pnpm

**On Windows:**
1. Download Node.js from [nodejs.org](https://nodejs.org) (LTS version recommended)
2. Run the installer and follow the prompts
3. Open Command Prompt and verify installation:
   ```bash
   node --version
   npm --version
   ```

4. Install pnpm globally:
   ```bash
   npm install -g pnpm
   ```

### Step 2: Clone/Setup Project

```bash
# Navigate to the project directory
cd "HTML, CSS/ffsa cds"

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

### Build for Production

```bash
pnpm build
```

Output will be in `.next/` directory.

### Run Production Build Locally

```bash
pnpm build
pnpm start
```

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Most suitable for Next.js projects!**

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub/GitLab account

2. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <YOUR_GITHUB_REPO>
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`

**Advantages:**
- ✅ Zero configuration
- ✅ Automatic CI/CD
- ✅ Free tier available
- ✅ Built for Next.js
- ✅ Custom domain support

---

### Option 2: Netlify

**Works but requires manual build setup**

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

3. **Deploy**
   - Connect your GitHub repo
   - Set build command: `pnpm build`
   - Set publish directory: `.next`
   - Click "Deploy"

---

### Option 3: AWS Amplify

**For enterprise deployments**

1. **Create AWS Account**
   - Go to [aws.amazon.com](https://aws.amazon.com)

2. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

3. **Deploy**
   ```bash
   amplify init
   amplify publish
   ```

---

### Option 4: Docker (Advanced)

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy source code
COPY . .

# Build
RUN pnpm build

# Expose port
EXPOSE 3000

# Start
CMD ["pnpm", "start"]
```

Build and run:
```bash
docker build -t ffsa-cds .
docker run -p 3000:3000 ffsa-cds
```

---

## 🔧 Configuration for Production

### 1. Update Site Metadata

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "FFSA CDS - Official Tournament",
  description: "Your description",
};
```

### 2. Configure Analytics (Optional)

Add to `app/layout.tsx`:
```typescript
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 3. Enable Image Optimization

Already configured in `next.config.js` for external images.

### 4. Set Custom Domain

**On Vercel:**
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS setup instructions

**On Netlify:**
- Go to Site Settings → Domain management
- Add custom domain

---

## 🔍 Performance Optimization

### Check Performance

```bash
pnpm build
# Check bundle size
npm install -g webpack-bundle-analyzer
```

### Lighthouse Audit

1. Open website in Chrome
2. Press F12 → Lighthouse tab
3. Click "Analyze page load"

### Tips for Better Performance

- Images are already optimized
- CSS is minified by Tailwind
- JavaScript is code-split by Next.js
- Consider enabling caching headers

---

## 🚨 Environment Variables

Create `.env.local` for development:

```env
# Only used during build
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

For production, set these in:
- **Vercel**: Settings → Environment Variables
- **Netlify**: Settings → Build & Deploy → Environment

---

## 📊 Monitoring & Updates

### Monitor Deployment

**Vercel:**
- Analytics Dashboard → Performance tab
- Deployments → View logs

**Netlify:**
- Analytics tab
- Deploy log in Deploys section

### Update Website

```bash
# Make changes locally
git add .
git commit -m "Update features"
git push origin main

# Automatic deployment triggered!
```

---

## 🛡️ Security Checklist

- ✅ No API keys in code
- ✅ Use `.env` files for secrets
- ✅ Enable HTTPS (auto on Vercel/Netlify)
- ✅ Add security headers (Vercel handles this)
- ✅ Update dependencies regularly: `pnpm update`

---

## 📱 Testing Before Deployment

### Test Locally

```bash
pnpm dev
# Test on http://localhost:3000
```

### Test Production Build

```bash
pnpm build
pnpm start
# Test on http://localhost:3000
```

### Cross-browser Testing

- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

---

## 🚀 Performance Checklist

- [ ] Production build tested locally
- [ ] All pages responsive on mobile
- [ ] Links working correctly
- [ ] Images loading properly
- [ ] No console errors
- [ ] Analytics configured (if needed)
- [ ] Custom domain setup (if needed)
- [ ] SSL/HTTPS enabled
- [ ] Backup of source code created

---

## 💡 Troubleshooting Deployments

### Build fails on Vercel

Check logs:
```bash
pnpm build  # Test locally first
```

### Site shows 404

- Check build command: `pnpm build`
- Check output directory: `.next`
- Verify all imports are correct

### Slow performance

- Analyze bundle: Check Analytics tab
- Optimize images
- Enable caching headers
- Use CDN (Vercel/Netlify does this)

### Domain not working

- Wait 24-48 hours for DNS propagation
- Verify DNS records
- Check domain registrar settings

---

## 📞 Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Deployment Help**: Contact hosting provider support

---

## 🎉 Deployment Complete!

Your FFSA CDS tournament website is now live! 🏆

- Share the link with your community
- Promote on social media
- Monitor performance
- Keep content updated
