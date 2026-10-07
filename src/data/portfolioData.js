/**
 * ==============================================================================
 * VINAY KUMAR - PORTFOLIO DATA STORE
 * ==============================================================================
 * This file contains all the data used across the portfolio website.
 * Any beginner can easily edit texts, add projects, or update skills here.
 */

export const portfolioData = {
  // ----------------------------------------------------------------------------
  // Personal & Hero Info
  // ----------------------------------------------------------------------------
  name: 'Vinay Kumar',

title: 'Digital Marketer / Performance Marketing Specialist',

heroTitle: 'I Turn Digital Marketing Into Real Results',

tagline: 'Performance Marketing • Lead Generation • Creative Strategy',

summary:
  'I help brands grow through performance-focused digital marketing — from Meta Ads and Google Ads to lead generation, social media, websites, and AI-powered creative content. With 2+ years of hands-on experience, I focus on building campaigns, testing creative ideas, managing multiple brands, and continuously improving performance to generate better reach, engagement, and quality leads.',
  
  // ----------------------------------------------------------------------------
  // Contact Details
  // ----------------------------------------------------------------------------
  contact: {
    phone: '+91 9901276130',
    displayPhone: '+91 99012 76130',
    email: 'vinaykumar39566@gmail.com',
    location: 'Delhi, India',
    whatsappMessage: 'Hi Vinay, I saw your portfolio and would like to discuss a project!',
  },

  // ----------------------------------------------------------------------------
  // Key Stats / Highlights (Used in Hero & About sections)
  // ----------------------------------------------------------------------------
  stats: [
    { value: '2+', label: 'Years Experience', hint: 'Performance & Paid Media' },
    { value: '15+', label: 'Brand Campaigns', hint: 'Automotive & Dealerships' },
    { value: '100+', label: 'AI Creatives & Reels', hint: 'High-Engagement Video' },
    { value: '6+', label: 'Dealership Brands', hint: 'Nissan, Bajaj, Leyland & more' },
  ],

  // ----------------------------------------------------------------------------
  // Services Offered (With assigned multi-light pastel card themes)
  // ----------------------------------------------------------------------------
  services: [
    {
      id: 'performance-marketing',
      name: 'Performance Marketing',
      category: 'MARKETING',
      description: 'Planning and executing paid campaigns with a razor-sharp focus on reach, CTR, conversion rates, and scalable lead generation.',
      colorTheme: 'ice-blue',
      icon: 'Target',
    },
    {
      id: 'google-ads',
      name: 'Google Ads',
      category: 'PAID MEDIA',
      description: 'End-to-end Search, Display, and Video campaigns configured with negative keywords, smart bidding, and conversion tracking.',
      colorTheme: 'cyan',
      icon: 'Search',
    },
    {
      id: 'meta-ads',
      name: 'Meta Ads',
      category: 'PAID MEDIA',
      description: 'Hyper-targeted Facebook & Instagram campaigns, custom audiences, retargeting funnels, and high-converting ad copy.',
      colorTheme: 'lavender',
      icon: 'Megaphone',
    },
    {
      id: 'social-media-marketing',
      name: 'Social Media Marketing',
      category: 'BRANDING',
      description: 'End-to-end multi-brand social account management, content calendar strategy, daily posting, and organic community engagement.',
      colorTheme: 'amber',
      icon: 'Share2',
    },
    {
      id: 'content-reels',
      name: 'Content & Reels',
      category: 'CREATIVE',
      description: 'Viral hooks research, storytelling, shooting, video editing with CapCut, and producing trend-setting short-form reels.',
      colorTheme: 'rose',
      icon: 'Video',
    },
    {
      id: 'wordpress-landing-pages',
      name: 'WordPress & Landing Pages',
      category: 'WEB',
      description: 'Modern WordPress website management, fast-loading sales landing pages, e-commerce catalog updates, and speed optimization.',
      colorTheme: 'mint',
      icon: 'Globe',
    },
  ],

  // ----------------------------------------------------------------------------
  // Selected Projects & Campaigns
  // ----------------------------------------------------------------------------
  projects: [
    {
      id: 'autoveer-2-wheeler',
      name: 'AutoVeer 2 Wheeler',
      category: 'AUTOMOTIVE CAMPAIGN',
      description: 'Comprehensive campaign and page marketing work across paid media, content planning, analytics reporting, and dealership marketing.',
      services: ['Meta Ads', 'Campaign Management', 'Lead Generation'],
      image: './projects/AutoVeer-2-Wheeler-Instagram.webp',
      colorTheme: 'ice-blue',
    },
    {
      id: 'autoveer-3-wheeler',
      name: 'AutoVeer 3 Wheeler',
      category: 'AUTOMOTIVE CAMPAIGN',
      description: 'Targeted digital marketing support for 3-Wheeler commercial campaigns, regional social content, and lead conversion reporting.',
      services: ['Meta Ads', 'Social Media Marketing', 'Performance'],
      image: './projects/AutoVeer-3-Wheeler-Instagram.webp',
      colorTheme: 'mint',
    },
    {
      id: 'ashok-leyland',
      name: 'Ashok Leyland',
      category: 'AUTOMOTIVE CAMPAIGN',
      description: 'Strategic campaign and page marketing work within the AutoVeer automotive portfolio, amplifying heavy vehicle reach.',
      services: ['Campaign Management', 'Content Creation', 'Dealership Ads'],
      image: './projects/Ashok-Leyland-Instagram.webp',
      colorTheme: 'amber',
    },
    {
      id: 'choudhary-tractor',
      name: 'Choudhary Tractor',
      category: 'AUTOMOTIVE CAMPAIGN',
      description: 'Regional dealership marketing support including paid hyper-local campaigns, page activity, video reels, and lead generation.',
      services: ['Meta Ads', 'Lead Generation', 'Regional Creatives'],
      image: './projects/Choudhary-Tractor-Instagram.webp',
      colorTheme: 'rose',
    },
    {
      id: 'ba-nissan',
      name: 'BA Nissan',
      category: 'AUTOMOTIVE CAMPAIGN',
      description: 'Premium automotive dealership page marketing work across high-impact social content, test drive leads, and digital campaigns.',
      services: ['Social Media Marketing', 'Campaign Management', 'Video Ads'],
      image: './projects/BA-Nissan-Instagram.webp',
      colorTheme: 'lavender',
    },
    {
      id: 'autoveer-group',
      name: 'AutoVeer Group',
      category: 'AUTOMOTIVE CAMPAIGN',
      description: 'Multi-vertical brand campaign and page marketing across the entire AutoVeer Group automotive dealership portfolio.',
      services: ['Performance Marketing', 'Reporting', 'Meta & Google Ads'],
      image: './projects/AutoVeer-Group-Instagram.webp',
      colorTheme: 'cyan',
    },
    {
      id: 'indraj-stay',
      name: 'Indraj Stay',
      category: 'SOCIAL MEDIA',
      description: 'Hospitality page marketing supported through engaging travel content planning, aesthetic reels publishing, and community engagement.',
      services: ['Social Media Marketing', 'Content Creation', 'Brand Awareness'],
      image: './projects/Indraj-Stay-Instagram.webp',
      colorTheme: 'ice-blue',
    },
    {
      id: 'bike-blazer',
      name: 'Bike Blazer',
      category: 'AUTOMOTIVE ACCESSORIES',
      description: 'Brand profile for Bike Blazer, an Indian maker of semi-automatic bike covers and portable car covers.',
      services: ['Social Media', 'Product Marketing', 'Brand Content'],
      image: './projects/insta-pages/bike-blazer-instagram.png',
      visualTone: 'blue',
    },
    {
      id: 'lf-fashion-outlet',
      name: 'LF Fashion Outlet',
      category: 'FASHION RETAIL',
      description: 'Fashion retail brand profile featuring menswear, store content, and social media marketing.',
      services: ['Social Media', 'Fashion Content', 'Brand Marketing'],
      image: './projects/insta-pages/lf-fashion-outlet-instagram.png',
      visualTone: 'rose',
    },
    {
      id: 'streetside',
      name: 'StreetSide',
      category: 'FOOD & HOSPITALITY',
      description: 'Restaurant brand profile featuring food, in-store experiences, and social media content.',
      services: ['Social Media', 'Food Content', 'Local Marketing'],
      image: './projects/insta-pages/streetside-instagram.png',
      visualTone: 'amber',
    },
  ],

  // ----------------------------------------------------------------------------
  // Freelance Projects
  // ----------------------------------------------------------------------------
  freelanceProjects: [
    {
      id: 'be-baddie',
      name: 'Be Baddie',
      category: 'FASHION CAMPAIGN',
      collection: 'Midnight Bloom',
      description: 'A six-colour lookbook and launch campaign for the Midnight Bloom floral kurti, pairing warm editorial imagery with a consistent fashion story.',
      services: ['Lookbook', 'Campaign Creative', 'Fashion Content'],
      variants: [
        { name: 'Black', swatch: '#242424', images: [
          { src: './projects/be-baddie/1.jpg', label: 'Look 01 · Front', alt: 'Front view of the Midnight Bloom black floral kurti' },
          { src: './projects/be-baddie/2.jpg', label: 'Look 02 · Side', alt: 'Side view of the Midnight Bloom black floral kurti' },
          { src: './projects/be-baddie/3.jpg', label: 'Look 03 · Back', alt: 'Back view of the Midnight Bloom black floral kurti' },
          { src: './projects/be-baddie/4.jpg', label: 'Campaign artwork', alt: 'Be Baddie Midnight Bloom black kurti campaign artwork' },
        ] },
        { name: 'Blue', swatch: '#4777a8', images: [1, 2, 3, 4].map((image) => ({ src: `./projects/be-baddie/variants/blue-${image}.jpg`, label: image === 4 ? 'Campaign artwork' : `Look 0${image}`, alt: `Midnight Bloom blue kurti ${image === 4 ? 'campaign artwork' : `look ${image}`}` })) },
        { name: 'Brown', swatch: '#77543f', images: [1, 2, 3, 4].map((image) => ({ src: `./projects/be-baddie/variants/brown-${image}.jpg`, label: image === 4 ? 'Campaign artwork' : `Look 0${image}`, alt: `Midnight Bloom brown kurti ${image === 4 ? 'campaign artwork' : `look ${image}`}` })) },
        { name: 'Dark Blue', swatch: '#243750', images: [1, 2, 3, 4].map((image) => ({ src: `./projects/be-baddie/variants/dark-blue-${image}.jpg`, label: image === 4 ? 'Campaign artwork' : `Look 0${image}`, alt: `Midnight Bloom dark blue kurti ${image === 4 ? 'campaign artwork' : `look ${image}`}` })) },
        { name: 'White', swatch: '#eee9df', images: [1, 2, 3, 4].map((image) => ({ src: `./projects/be-baddie/variants/white-${image}.jpg`, label: image === 4 ? 'Campaign artwork' : `Look 0${image}`, alt: `Midnight Bloom white kurti ${image === 4 ? 'campaign artwork' : `look ${image}`}` })) },
        { name: 'Yellow', swatch: '#d9ad3c', images: [1, 2, 3, 4].map((image) => ({ src: `./projects/be-baddie/variants/yellow-${image}.jpg`, label: image === 4 ? 'Campaign artwork' : `Look 0${image}`, alt: `Midnight Bloom yellow kurti ${image === 4 ? 'campaign artwork' : `look ${image}`}` })) },
      ],
      colorTheme: 'amber',
    },
  ],

  // ----------------------------------------------------------------------------
  // Professional Experience Timeline
  // ----------------------------------------------------------------------------
  experience: [
    {
      company: 'Autoveer',
      role: 'Digital Marketing Executive',
      period: 'Recent',
      colorTheme: 'ice-blue',
      responsibilities: [
        'Managed Meta Ads campaigns for lead generation and brand awareness.',
        'Managed multiple social media pages with daily content planning and publishing.',
        'Created AI-powered creatives and optimised them for social media.',
        'Shot, edited, and published high-performing Reels using CapCut.',
        'Worked on digital marketing campaigns, reporting, the WordPress website, and YouTube channel.',
        'Worked across automotive campaigns and dealership marketing for 2 Wheeler, 3 Wheeler, Ashok Leyland, Choudhary Tractor, BA Nissan, and AutoVeer Group.',
      ],
    },
    {
      company: 'Cyton MV',
      role: 'Digital Marketing Executive',
      period: 'Previous',
      colorTheme: 'mint',
      responsibilities: [
        'Managed Facebook, Instagram, and YouTube pages across multiple regional languages.',
        'Planned, edited, and published engaging social media content and Reels.',
        'Managed Meta Ads campaigns and closely monitored conversion KPIs.',
        'Updated WordPress websites and assisted with e-commerce product listings.',
        'Coordinated content creation, product photography, and targeted digital campaigns.',
      ],
    },
    {
      company: 'LF Fashion Studio',
      role: 'Social Media Executive',
      period: 'Previous',
      colorTheme: 'lavender',
      responsibilities: [
        'Managed end-to-end social media marketing for fashion collections.',
        'Planned and researched engaging Reel trends and styling concepts.',
        'Shot, edited, and published high-resolution video reels using CapCut.',
        'Managed Meta Ads campaigns and creative testing for apparel sales.',
        'Monitored campaign performance, audience demographics, and engagement rates.',
      ],
    },
    {
      company: 'Freelance Marketing',
      role: 'Digital Marketing Freelancer',
      period: 'Ongoing',
      colorTheme: 'amber',
      responsibilities: [
        'Built modern WordPress websites, custom blogs, and high-conversion landing pages.',
        'Managed Google Ads (Search/Display) and Meta Ads campaigns for diverse clients.',
        'Handled end-to-end social media management and brand voice development.',
        'Created, edited, and published creative Reels and promotional assets.',
        'Designed digital marketing banners, carousels, and promotional graphics.',
      ],
    },
  ],

  // ----------------------------------------------------------------------------
  // Skills by Category
  // ----------------------------------------------------------------------------
  skillGroups: [
    {
      title: 'Performance Marketing',
      category: 'PAID ADVERTISING',
      colorTheme: 'ice-blue',
      skills: [
        'Performance Marketing',
        'Google Ads',
        'Meta Ads',
        'PPC Campaign Management',
        'Conversion Tracking',
        'Lead Generation',
      ],
    },
    {
      title: 'Content & Social',
      category: 'CREATIVE STRATEGY',
      colorTheme: 'rose',
      skills: [
        'Social Media Marketing',
        'Content Strategy',
        'Video Editing (CapCut)',
        'Short-form Reels',
        'Viral Hooks Research',
      ],
    },
    {
      title: 'Web & Optimization',
      category: 'WEB & ANALYTICS',
      colorTheme: 'mint',
      skills: [
        'Landing Page Optimisation',
        'WordPress CMS',
        'Basic Analytics / Reporting',
        'A/B Creative Testing',
      ],
    },
    {
      title: 'AI & Creative Tech',
      category: 'AUTOMATION',
      colorTheme: 'lavender',
      skills: [
        'AI-powered Creative Creation',
        'ChatGPT & Prompt Engineering',
        'AI Video Generation',
        'Gemini & Claude Workflow',
      ],
    },
  ],

  // ----------------------------------------------------------------------------
  // Industry Tools & Technologies (Icons in /icons/)
  // ----------------------------------------------------------------------------
  tools: [
    { name: 'Google Ads', icon: './icons/googleads.webp', category: 'PPC & Search' },
    { name: 'Meta Ads', icon: './icons/metaads.webp', category: 'Paid Social' },
    { name: 'CapCut', icon: './icons/capcut.webp', category: 'Video Editing' },
    { name: 'ChatGPT', icon: './icons/chatgpt.webp', category: 'AI Copy & Ideas' },
    { name: 'Gemini', icon: './icons/gemini.webp', category: 'AI Intelligence' },
    { name: 'Google Analytics', icon: './icons/googleanalytics.webp', category: 'Web Insights' },
    { name: 'WordPress', icon: './icons/wordpress.webp', category: 'CMS & Web' },
    { name: 'Canva', icon: './icons/canva.webp', category: 'Graphic Design' },
    { name: 'Claude', icon: './icons/claude.webp', category: 'AI Analysis' },
    { name: 'Kapwing', icon: './icons/kapwing.webp', category: 'Video Production' },
    { name: 'Meta Business Suite', icon: './icons/metabusinesssuite.webp', category: 'Page Manager' },
    { name: 'SMM Panel One', icon: './icons/smmpanelone.webp', category: 'Social Tools' },
  ],

  // ----------------------------------------------------------------------------
  // Formal Education
  // ----------------------------------------------------------------------------
  education: [
    {
      qualification: 'Bachelor of Commerce (B.Com) — Pursuing',
      institution: 'Delhi University SOL',
      year: 'Pursuing',
      colorTheme: 'ice-blue',
    },
    {
      qualification: 'Senior Secondary (12th Grade)',
      institution: 'Central Board of Secondary Education (CBSE)',
      year: 'Completed',
      colorTheme: 'lavender',
    },
    {
      qualification: 'Secondary School (10th Grade)',
      institution: 'Central Board of Secondary Education (CBSE)',
      year: 'Completed',
      colorTheme: 'mint',
    },
  ],

  // ----------------------------------------------------------------------------
  // Creative Portfolio — grouped by brand / vehicle category.
  // `images` = number of creatives in /ai-images/<folder>/<folder>-NN.webp
  // `videos` = file names inside /ai-videos/ (posters live in /ai-videos/posters/)
  // ----------------------------------------------------------------------------
  gallery: [
    {
      id: 'meta-ads',
      label: 'Meta Ads',
      brand: 'Campaigns across automotive, hospitality & retail',
      folder: 'meta-ads',
      images: 21,
      files: Array.from({ length: 21 }, (_, index) => `meta-ads-${String(index + 1).padStart(2, '0')}.jpg`),
      videos: [],
    },
    {
      id: 'two-wheeler',
      label: '2 Wheeler',
      brand: 'Bajaj · AutoVeer',
      folder: 'two-wheeler',
      images: 26,
      videos: [
        'ai-reel-2-wheeler.mp4',
        'bajaj-platina-ai-onboarding.mp4',
        'bajaj-platina-ai-approach.mp4',
        'ai-platina.mp4',
        'platina-bajaj-ai.mp4',
        'platina-bajaj-1.mp4',
        'ai-engine-oil.mp4',
        'spark-plug.mp4',
      ],
    },
    {
      id: 'three-wheeler',
      label: '3 Wheeler',
      brand: 'GOGO · Maxima C · Ape Xtra',
      folder: 'three-wheeler',
      images: 25,
      videos: ['auto-service-ai.mp4'],
    },
    {
      id: 'ashok-leyland',
      label: 'Ashok Leyland',
      brand: 'Bada Dost · Dost+ · MITR',
      folder: 'ashok-leyland',
      images: 23,
      videos: ['post-purchase-al-ai-video.mp4'],
    },
    {
      id: 'nissan',
      label: 'Nissan',
      brand: 'Magnite · Tekton',
      images: 0,
      videos: [
        'nissan-magnite-approach.mp4',
        'nissan-magnite-day-2.mp4',
        'nissan-tekton-sales-reel.mp4',
        'nissan-tekton-day-2.mp4',
        'nissan-off-road-event.mp4',
      ],
    },
    {
      id: 'tractor',
      label: 'Tractor',
      brand: 'Choudhary Tractor',
      images: 0,
      videos: ['ai-tractor-video-rohtak.mp4', 'ai-tractor-video-karnal.mp4', 'ai-testimonial.mp4'],
    },
    {
      id: 'brand-films',
      label: 'Brand Films',
      brand: 'AutoVeer & more',
      images: 0,
      videos: ['pre-purchase-veera.mp4', 'ai-broadcast.mp4', 'namaste-india-handicraft.mp4', '80s-work-culture.mp4'],
    },
    {
      id: 'indraj-menu',
      label: 'Indraj Menu',
      brand: 'Indraj Stay · Food & menu creatives',
      folder: 'indraj-menu',
      images: 16,
      files: Array.from({ length: 16 }, (_, index) => `indraj-menu-${String(index + 1).padStart(2, '0')}.jpg`),
      videos: [],
    },
  ],
}
