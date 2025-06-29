# Deployment Guide

This guide covers deploying the Social Carry MVP to various platforms.

## 🚀 Quick Deploy on Vercel (Recommended)

### Prerequisites
- GitHub repository with your code
- Vercel account
- PostgreSQL database (can use Vercel Postgres, Supabase, or other providers)
- Clerk account configured

### Steps

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repository

2. **Configure Environment Variables**
   Add these environment variables in Vercel dashboard:
   ```
   DATABASE_URL=your_postgresql_connection_string
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
   CLERK_SECRET_KEY=sk_live_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your app

4. **Post-Deploy Setup**
   ```bash
   # Run database migration (from your local machine)
   npx prisma db push
   ```

## 🚂 Deploy on Railway

### Steps

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub account

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Add PostgreSQL Database**
   - In your Railway dashboard, click "New"
   - Select "Database" → "PostgreSQL"
   - Railway will create a database and provide connection details

4. **Configure Environment Variables**
   - Go to your app service
   - Add environment variables from the Vercel section above
   - Use the DATABASE_URL provided by Railway

5. **Deploy**
   - Railway will automatically deploy your app
   - Run `npx prisma db push` to set up database schema

## 🐋 Docker Deployment

### Dockerfile
Create a `Dockerfile` in your project root:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the app
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose (with PostgreSQL)
Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/social_carry
      - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
      - CLERK_SECRET_KEY=your_secret
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=social_carry
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

### Deploy with Docker
```bash
# Build and run
docker-compose up --build

# Run database migration
docker-compose exec app npx prisma db push
```

## ☁️ Manual VPS Deployment

### Prerequisites
- Ubuntu/CentOS VPS
- Node.js 18+
- PostgreSQL
- Nginx (recommended)
- PM2 (for process management)

### Steps

1. **Set up Server**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   
   # Install PostgreSQL
   sudo apt install postgresql postgresql-contrib -y
   ```

2. **Set up Database**
   ```bash
   sudo -u postgres psql
   CREATE DATABASE social_carry;
   CREATE USER social_carry_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE social_carry TO social_carry_user;
   \q
   ```

3. **Deploy Application**
   ```bash
   # Clone repository
   git clone your-repo-url
   cd social-carry-mvp
   
   # Install dependencies
   npm install
   
   # Set up environment variables
   cp .env.local.example .env.local
   # Edit .env.local with your values
   
   # Generate Prisma client and push schema
   npx prisma generate
   npx prisma db push
   
   # Build application
   npm run build
   
   # Start with PM2
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

4. **Set up Nginx (Optional)**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 📊 Database Options

### Vercel Postgres
- Integrated with Vercel
- Easy setup
- Automatic backups

### Supabase
- Free tier available
- Built-in auth (can complement Clerk)
- Real-time features

### PlanetScale
- MySQL-compatible
- Serverless
- Branching for schema changes

### Neon
- PostgreSQL-compatible
- Serverless
- Generous free tier

## 🔒 Security Checklist

- [ ] Use production Clerk keys
- [ ] Secure database with strong passwords
- [ ] Enable HTTPS/SSL
- [ ] Set up database backups
- [ ] Configure CORS properly
- [ ] Use environment variables for secrets
- [ ] Enable rate limiting
- [ ] Set up monitoring and logging

## 📝 Post-Deployment Tasks

1. **Test Core Functionality**
   - User registration/login
   - Bounty creation
   - Dashboard access
   - Database operations

2. **Monitor Performance**
   - Set up error tracking (Sentry)
   - Monitor response times
   - Check database performance

3. **Set up Backups**
   - Database backups
   - Environment configuration backups

## 🚨 Troubleshooting

### Common Issues

**Prisma Client Error**
```bash
# Regenerate Prisma client
npx prisma generate
```

**Database Connection Issues**
- Check DATABASE_URL format
- Verify database server is running
- Check firewall settings

**Clerk Authentication Issues**
- Verify API keys
- Check redirect URLs
- Ensure domain is whitelisted

**Build Failures**
- Check Node.js version compatibility
- Verify all dependencies are installed
- Check for TypeScript errors

---

Need help? Check the main README.md or create an issue in the repository. 