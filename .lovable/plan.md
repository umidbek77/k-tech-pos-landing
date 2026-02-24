

# K-TECH POS Landing Page

## Overview
A modern, high-conversion landing page for K-TECH POS system targeting Uzbekistan's retail market. Multi-language support (UZ/RU/EN), dark/light theme, smooth animations, and lead generation form.

## Design System
- **Primary Color**: Emerald Green (growth/success)
- **Secondary Color**: Royal Blue (trust/technology)
- **Background**: White / Light Gray
- **Style**: Clean, modern, glassmorphism accents
- **Typography**: Bold headlines, clean body text

---

## Sections to Build

### 1. Sticky Header with Glassmorphism
- "K-TECH" logo with POS terminal icon
- Navigation: WhyUs, Solutions, Hardware, Pricing, FAQ (smooth scroll)
- 3-language switcher (UZ 🇺🇿, RU 🇷🇺, EN 🇬🇧) — all text content translatable
- Dark/Light theme toggle
- "Start Free Demo" CTA button
- Mobile hamburger menu

### 2. Hero Section
- Bold headline & subheadline in Uzbek (translatable)
- Trust badge: "O'rnatish 1 kun, o'rganish 1 soat. 100% aniq hisob-kitob."
- Hero illustration/visual of POS terminal in use
- Two CTAs: "Mutaxassis bilan bog'lanish" (primary) + "Demo videoni ko'rish" (secondary, opens video modal)

### 3. Problem & Solution Cards
- Three animated cards showing pain points → solutions
- Queues → Fast checkout, Accounting chaos → Accurate inventory, Theft risk → Full transparency

### 4. How It Works — Visual Workflow
- Horizontal stepper with icons: Scan → Auto-Check → Inventory Update → Real-time Report
- Animated step progression on scroll

### 5. AI-Powered WhyUs Grid (2×2)
- AI Forecast (stock prediction)
- Offline Mode (auto-sync)
- Telegram Bot (24/7 analytics)
- Multi-Terminal (manage 10+ stores)
- Each card with icon, title, description

### 6. Industry Use Cases
- Tab-based layout: Supermarkets, Clothing Stores, Pharmacies
- Each tab shows tailored benefits and features

### 7. Hardware Bundle Showcase
- Visual display of: Monoblok + Thermal Printer + Scanner + Cash Drawer
- "1-year official warranty" badge

### 8. Analytics Dashboard Mockup
- Mobile app UI mockup showing: Profit/Loss graphs, Top Products, Employee Performance
- Clean card-based design with sample charts

### 9. Comparison Table
- "Daftar/Excel" vs "K-TECH POS" 
- Columns: Speed, Accuracy, Growth potential
- Visual checkmarks and crosses

### 10. Social Proof & Pricing
- "100+ stores already automated" counter/badge
- Three pricing cards: Start, Business, Enterprise
- "No hidden fees" note

### 11. Support & FAQ
- Service guarantee banner (15-min response, free training)
- Accordion FAQ: data migration, tax/GNK integration, offline capabilities

### 12. Footer
- Contact info: Phone, Email, Address (Urgench, Khorezm)
- Social links: Telegram, Instagram, YouTube
- Slogan: "K-TECH — Kelajak texnologiyasi bugun."

### 13. Lead Generation
- "Request Demo" form modal/section with name, phone, business type
- Form validation with Zod
- Success toast notification

---

## Technical Approach
- **Internationalization**: Context-based i18n system for UZ/RU/EN translations
- **Theme**: Dark/light mode via CSS variables and next-themes
- **Animations**: Framer Motion for scroll-triggered animations and transitions
- **Responsive**: Mobile-first design across all breakpoints
- **Performance**: Optimized images, lazy loading, smooth scroll behavior

