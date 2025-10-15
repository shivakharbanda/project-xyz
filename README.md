# social.i Consultancy Website

A professional, modern static website for **social.i Consultancy** - a boutique creative marketing consultancy transforming visionary ideas into purposeful brands.

## 🎨 Overview

This website serves as a pitch-ready presentation for social.i Consultancy, showcasing their services, brand identity, and value proposition. Built with TailwindCSS for a professional, responsive design with advanced features including dark mode support, container queries, and sophisticated visual effects.

## 📁 Project Structure

```
website/
├── index.html              # Home page with hero, client logos, case studies, testimonials
├── services.html           # Services page with timeline decorators and FAQ
├── about.html              # About page with team photos, values, process timeline, awards
├── contact.html            # Contact form with two-column layout
├── insights.html           # Blog/insights page with category filters and article cards
├── assets/
│   ├── css/
│   │   └── style.css       # Legacy CSS (not actively used)
│   ├── js/
│   │   └── main.js         # JavaScript for interactions
│   └── images/
│       └── brand_logo.avif # Company logo
└── README.md               # This file
```

## 🚀 Features

- **TailwindCSS Framework**: Utility-first CSS via CDN for rapid, consistent styling
- **Responsive Design**: Mobile-first approach with advanced breakpoints (sm, md, lg, xl)
- **Dark Mode Support**: Complete dark mode implementation with toggle capability
- **Container Queries**: Advanced responsive layouts for component-level responsiveness
- **Timeline Decorators**: Custom CSS for vertical timeline visualization in process sections
- **Image Integration**: Professional placeholder images from Unsplash
- **SVG Icon System**: Phosphor icons embedded as inline SVG for crisp visuals
- **Glass Morphism**: Backdrop blur effects on sticky headers
- **Advanced Hover Effects**: Grayscale filters, scale transforms, shadow transitions
- **SEO-Friendly**: Semantic HTML with proper meta tags
- **Accessibility**: WCAG-compliant structure and navigation

## 🎨 Brand Colors

- **Primary**: `#e25b32` (Coral Orange)
- **Background Light**: `#f8f6f6` (Off-white)
- **Background Dark**: `#211511` (Deep Brown)
- **Text Dark**: `#211511`
- **Text Light**: `#f8f6f6`

## 📄 Pages

### 1. Home (`index.html`)
- **Hero Section**: Full-width background image with gradient overlay and compelling headline
- **Client Logos Grid**: 6 client logos with grayscale filter that removes on hover
- **Services Overview**: 5 service cards with custom SVG icons and hover effects
- **Case Study Snapshots**: Featured case studies with metrics, images, and CTAs
- **Testimonials**: Client testimonials with headshots and company information
- **Newsletter Signup**: Email capture section with call-to-action
- **Sticky Header**: Backdrop blur effect with smooth scroll behavior

### 2. Services (`services.html`)
- **Services Hero**: Engaging header with background image
- **Detailed Service Breakdown**: All 5 services with icons:
  - Branding & Brand Awareness
  - Content Strategy & Creation
  - Public & Media Relations
  - Digital Marketing
  - Creative Design
- **Timeline Decorators**: Vertical line connecting service cards with custom CSS
- **Deliverables**: Bulleted lists of what's included in each service
- **FAQ Section**: Expandable accordion-style questions and answers
- **Process Visualization**: Step-by-step workflow display

### 3. About (`about.html`)
- **About Hero**: Introduction with mission statement
- **Team Section**: 4 team members with circular photo avatars (Founder/CEO, Creative Director, PR Lead, Digital Strategist)
- **Core Values**: 4 value cards with SVG icons (Bespoke Approach, Purpose-Driven, Results-Oriented, Transparent)
- **Process Timeline**: 5-step process with vertical timeline decorator
- **Awards & Certifications**: Grid display of recognitions and achievements
- **Brand Story**: Detailed narrative about company origins and mission

### 4. Contact (`contact.html`)
- **Two-Column Layout**: Form on left, contact info on right
- **Contact Form**: Name, email, company, and message fields with validation
- **Contact Information**: Email and location with SVG icons
- **Why Work With Us**: Benefits section with checkmark bullet points
- **Responsive Design**: Stacks vertically on mobile devices

### 5. Insights (`insights.html`)
- **Category Filters**: Buttons for All, Branding, Content Strategy, Digital Trends, PR
- **Blog Article Cards**: 4 featured articles with:
  - Hero images from Unsplash
  - Category tags
  - Titles and descriptions
  - Read time and publish dates
  - Read More links with arrow icons
- **Hover Effects**: Card shadows and image scaling on hover
- **Container Queries**: Responsive card layouts using @container

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with proper document structure
- **TailwindCSS v3**: Utility-first CSS framework via CDN
  - Configured with custom color palette
  - Dark mode support enabled
  - Container queries plugin
  - Forms plugin for styled form elements
- **Custom CSS**: Minimal custom CSS for timeline decorators and special effects
- **JavaScript (Vanilla)**: Mobile menu, smooth scrolling, form validation, dark mode toggle
- **Google Fonts**: Work Sans font family (weights: 400, 500, 600, 700, 800, 900)
- **Phosphor Icons**: SVG icon system embedded inline
- **Unsplash**: Professional placeholder images for team, case studies, and blog posts

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚦 Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser to view the website.

### Option 2: Local Server (Recommended)
For the best experience and to test all features:

```bash
# Using Python 3
cd website
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js http-server
npx http-server -p 8000
```

Then visit `http://localhost:8000` in your browser.

## ✨ Customization

### Updating Content
- Edit HTML files directly to change text content
- Update service descriptions in `services.html`
- Modify team member information and photos in `about.html`
- Add new blog articles in `insights.html`
- Replace Unsplash placeholder images with actual photos

### Changing Colors
Edit the TailwindCSS configuration in each HTML file's `<script>` tag:

```javascript
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#e25b32",
                "background-light": "#f8f6f6",
                "background-dark": "#211511",
            },
        },
    },
};
```

### Updating Images
1. **Team Photos**: Replace Unsplash URLs in `about.html` with actual team member photos
2. **Case Studies**: Update case study images in `index.html`
3. **Blog Images**: Replace featured images in `insights.html`
4. **Hero Backgrounds**: Update background image URLs in hero sections
5. **Logo**: Replace `assets/images/brand_logo.avif` with actual company logo

### Adding New Sections
1. Add HTML in the appropriate page
2. Use TailwindCSS utility classes for styling
3. Maintain consistent spacing with Tailwind spacing scale (p-4, p-6, p-8, etc.)
4. Add interactions in `main.js` if needed
5. Ensure dark mode support by adding `dark:` variants

### TailwindCSS Class Patterns Used
- **Spacing**: `p-{size}` (padding), `m-{size}` (margin), `gap-{size}` (gap)
- **Colors**: `text-{color}`, `bg-{color}`, `border-{color}`
- **Dark Mode**: `dark:bg-{color}`, `dark:text-{color}`
- **Responsive**: `md:{class}`, `lg:{class}`, `xl:{class}`
- **Hover Effects**: `hover:bg-{color}`, `hover:scale-{scale}`
- **Transitions**: `transition-{property}`, `duration-{time}`

## 📝 Form Handling

The contact form currently shows a success alert. To connect it to a backend:

1. **Option 1: FormSpree**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Option 2: Netlify Forms**
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```

3. **Option 3: Custom Backend**
   - Update form action to your API endpoint
   - Modify JavaScript in `main.js` to handle API calls

## 🎯 Deployment Options

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Select main branch / docs folder

### Netlify
1. Drag and drop the `website` folder to Netlify
2. Site is live instantly with HTTPS

### Vercel
1. Import repository or drag and drop folder
2. Automatic deployment with custom domain support

### Traditional Hosting
1. Upload all files via FTP/SFTP
2. Ensure file permissions are correct
3. Point domain to the hosting

## 🔧 Maintenance

### Regular Updates
- Update copyright year in footer (currently 2024)
- Keep services and pricing current in `services.html`
- Add new case studies with real metrics in `index.html`
- Add new blog articles in `insights.html`
- Update team information and photos in `about.html`
- Replace all Unsplash placeholder images with actual company photos

### Performance Optimization
- **Images**: Optimize and compress images before adding (use WebP or AVIF format)
- **TailwindCSS**: For production, consider using Tailwind CLI to generate minimal CSS
- **JavaScript**: Minify `main.js` for production
- **Server Configuration**: Enable gzip/brotli compression
- **CDN**: Consider self-hosting TailwindCSS instead of using CDN for production
- **Lazy Loading**: Add `loading="lazy"` to images below the fold

### Production Checklist
- [ ] Replace all Unsplash placeholder images with real photos
- [ ] Update all content with actual company information
- [ ] Test all forms and ensure backend is connected
- [ ] Test dark mode toggle functionality
- [ ] Verify responsive design on all breakpoints
- [ ] Run Lighthouse audit for performance, accessibility, SEO
- [ ] Minify CSS/JS files
- [ ] Set up proper analytics tracking
- [ ] Configure proper meta tags and Open Graph images
- [ ] Test cross-browser compatibility

## 🎯 Key Technical Highlights

### Timeline Decorator Implementation
Custom CSS creates vertical connecting lines between process steps:
```css
.timeline-decorator::before {
    content: '';
    position: absolute;
    top: 1.75rem;
    bottom: 0;
    left: 1rem;
    width: 2px;
    background-color: #e25b32;
}
```

### Container Queries Usage
Advanced responsive layouts for blog cards:
```html
<article class="group @container">
    <div class="@xl:flex-row">
        <!-- Content adapts based on container size -->
    </div>
</article>
```

### Grayscale Hover Effect
Client logos with smooth color transition:
```html
<img class="grayscale hover:grayscale-0 transition-all duration-300" />
```

### Dark Mode Implementation
TailwindCSS dark mode classes throughout:
```html
<div class="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
```

## 📞 Support & Resources

For questions or issues with this website template, please refer to:
- **TailwindCSS Documentation**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **HTML/CSS Reference**: [MDN Web Docs](https://developer.mozilla.org/)
- **JavaScript Guide**: [JavaScript.info](https://javascript.info/)
- **Phosphor Icons**: [phosphoricons.com](https://phosphoricons.com/)

## 📄 License

This website is created for social.i Consultancy. All rights reserved.

---

**Built with TailwindCSS for social.i Consultancy**

*Last Updated: October 2024*
*Version: 2.0 (TailwindCSS Professional Edition)*
