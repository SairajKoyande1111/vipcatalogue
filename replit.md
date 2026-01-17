# VIP Networks Digital Catalogue

## Overview

This is an interactive digital catalogue/corporate brochure for VIP Networks, an IT infrastructure and security solutions company. The application presents services in a premium, mobile-first brochure format rather than a traditional website. It features smooth animations, touch-friendly interactions, and a dark luxury theme designed to showcase enterprise technology services including CCTV surveillance, thermal detection, networking, and related IT infrastructure solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing (pages: Home, Services, ServiceDetail, Contact, Partners)
- **State Management**: TanStack React Query for server state and data fetching
- **Styling**: Tailwind CSS with custom dark luxury theme (deep slate blues with azure accents)
- **Animations**: Framer Motion for page transitions and interactive elements
- **UI Components**: Shadcn/ui component library with Radix primitives (New York style variant)

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **API Design**: RESTful endpoints defined in `shared/routes.ts` with Zod validation
- **Current Endpoints**: 
  - `GET /api/services` - List all services
  - `GET /api/services/:id` - Get single service details
- **Storage**: Memory storage implementation (`MemStorage` class) with interface for future database migration

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Defined in `shared/schema.ts` with services table (id, title, description, bullets array, icon)
- **Validation**: Drizzle-zod for schema-to-validation integration
- **Current State**: Schema defined but using in-memory storage; database can be provisioned when needed

### Build System
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Vite builds client to `dist/public`, esbuild bundles server to `dist/index.cjs`
- **Path Aliases**: `@/` for client source, `@shared/` for shared modules, `@assets/` for attached assets

### Design Patterns
- **Shared Types**: TypeScript types and API route definitions shared between client and server
- **Component Structure**: Feature components in `components/`, UI primitives in `components/ui/`
- **Custom Hooks**: Data fetching hooks (`use-services.ts`) wrap React Query with typed API calls
- **Icon System**: ServiceIcon component maps string identifiers to Lucide icons, supports Lottie animations

## External Dependencies

### UI/Animation Libraries
- Framer Motion for animations
- Lottie-react for animated icons (JSON animation files in assets)
- Lucide React for static icons
- React Icons for social media icons

### Database & ORM
- Drizzle ORM with PostgreSQL dialect
- pg (node-postgres) driver
- connect-pg-simple for session storage (available but not currently used)

### Environment Requirements
- `DATABASE_URL`: PostgreSQL connection string (required for database features)
- Database schema push via `npm run db:push`

### Asset Management
- Generated images stored in `attached_assets/` directory
- Video backgrounds for home page
- Lottie JSON animations for service icons

### Third-Party Font Services
- Google Fonts: Montserrat (display), Inter (body)