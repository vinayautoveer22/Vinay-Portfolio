/**
 * ==============================================================================
 * AKSHAY KUMAR - PORTFOLIO DATA STORE
 * ==============================================================================
 * This file contains all the data used across the portfolio website.
 * Any beginner can easily edit texts, add projects, or update skills here.
 */

export const portfolioData = {
  // ----------------------------------------------------------------------------
  // Personal & Hero Info
  // ----------------------------------------------------------------------------
  name: 'Akshay Kumar',

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
    whatsappMessage: 'Hi Akshay, I saw your portfolio and would like to discuss a project!',
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
  // Meta Ads campaign snapshots shared for the portfolio case study.
  // Each row keeps the reporting figures from its own Ads Manager snapshot;
  // avoid summing campaigns because their date ranges and objectives differ.
  // ----------------------------------------------------------------------------
  campaignSnapshots: [
    { id: 'tafe-copy', name: 'Tafe | Campaign – Copy', status: 'Active', objective: 'Lead generation', resultType: 'Leads', results: 12, reach: 24527, frequency: 1.67, costPerResult: 109.58, impressions: 41089, cpm: 32.04, linkClicks: 430, cpcLink: 3.06, ctrLink: 1.05, allClicks: 526, ctrAll: 1.28, cpcAll: 2.50 },
    { id: 'tafe-campaign', name: 'Tafe | Campaign', status: 'Active', objective: 'Lead generation', resultType: 'Leads', results: 28, reach: 31483, frequency: 1.64, costPerResult: 52.46, impressions: 51677, cpm: 28.45, linkClicks: 479, cpcLink: 3.07, ctrLink: 0.93, allClicks: 631, ctrAll: 1.22, cpcAll: 2.33 },
    { id: 'ashok-parivartan', name: 'Ashok Leyland | Parivartan | Campaign', status: 'Active', objective: 'Lead generation', resultType: 'Leads', results: 93, reach: 27146, frequency: 2.50, costPerResult: 26.27, impressions: 67847, cpm: 36.03, linkClicks: 796, cpcLink: 3.07, ctrLink: 1.17, allClicks: 1083, ctrAll: 1.60, cpcAll: 2.26 },
    { id: 'nissan-gravite-active', name: 'Nissan Gravite Campaign', status: 'Active', objective: 'Lead generation', resultType: 'Leads', results: 80, reach: 13601, frequency: 1.64, costPerResult: 18.63, impressions: 22325, cpm: 66.87, linkClicks: 366, cpcLink: 4.08, ctrLink: 1.64, allClicks: 494, ctrAll: 2.21, cpcAll: 3.02 },
    { id: 'nissan-magnite', name: 'Nissan Magnite Campaign', status: 'Active', objective: 'Lead generation', resultType: 'Leads', results: 14, reach: 12882, frequency: 2.50, costPerResult: 180.27, impressions: 32233, cpm: 78.34, linkClicks: 247, cpcLink: 10.22, ctrLink: 0.77, allClicks: 320, ctrAll: 0.99, cpcAll: 7.89 },
    { id: 'nissan-tekton-active', name: 'Nissan Tekton Campaign', status: 'Active', objective: 'Lead generation', resultType: 'Leads', results: 7, reach: 9947, frequency: 1.73, costPerResult: 224.90, impressions: 17290, cpm: 91.19, linkClicks: 156, cpcLink: 10.11, ctrLink: 0.90, allClicks: 192, ctrAll: 1.11, cpcAll: 8.21 },
    { id: 'nissan-tekton-lead', name: 'Nissan Tekton Lead Ad', status: 'Off', objective: 'Lead generation', resultType: 'Leads', results: 210, reach: 76278, frequency: 4.08, costPerResult: 121.61, impressions: 310923, cpm: 82.14, linkClicks: 2644, cpcLink: 9.66, ctrLink: 0.85, allClicks: 3752, ctrAll: 1.21, cpcAll: 6.81 },
    { id: 'nissan-tekton-launch', name: 'Nissan Tekton Launch', status: 'Off', objective: 'Reach', resultType: 'People reached', results: 515696, reach: 515696, frequency: 1.33, costPerResult: 3.14, impressions: 684253, cpm: 2.37, linkClicks: 852, cpcLink: 1.90, ctrLink: 0.12, allClicks: 1021, ctrAll: 0.15, cpcAll: 1.59 },
    { id: 'three-wheeler-new', name: '3 Wheeler New Ad', status: 'Off', objective: 'Lead generation', resultType: 'Leads', results: 152, reach: 56050, frequency: 1.82, costPerResult: 13.97, impressions: 102127, cpm: 20.79, linkClicks: 957, cpcLink: 2.22, ctrLink: 0.94, allClicks: 1399, ctrAll: 1.37, cpcAll: 1.52 },
    { id: 'housekeeping-leads', name: 'Housekeeping Hiring Leads', status: 'Off', objective: 'Lead generation', resultType: 'Leads', results: 106, reach: 5768, frequency: 1.38, costPerResult: 6.19, impressions: 7955, cpm: 82.48, linkClicks: 216, cpcLink: 3.04, ctrLink: 2.72, allClicks: 353, ctrAll: 4.44, cpcAll: 1.86 },
    { id: 'housekeeping-whatsapp', name: 'Housekeeping Hiring WhatsApp', status: 'Off', objective: 'Messaging', resultType: 'Conversations', results: 412, reach: 19084, frequency: 1.88, costPerResult: 3.78, impressions: 35809, cpm: 43.50, linkClicks: 850, cpcLink: 1.83, ctrLink: 2.37, allClicks: 1102, ctrAll: 3.08, cpcAll: 1.41 },
    { id: 'housekeeping-call', name: 'Housekeeping Hiring Call', status: 'Off', objective: 'Calls', resultType: 'Calls placed', results: 305, reach: 27130, frequency: 1.52, costPerResult: 5.42, impressions: 41140, cpm: 40.19, linkClicks: 742, cpcLink: 2.23, ctrLink: 1.80, allClicks: 1152, ctrAll: 2.80, cpcAll: 1.44 },
    { id: 'autoveer-hospitality', name: 'AutoVeer Hospitality Leads', status: 'Off', objective: 'Lead generation', resultType: 'Leads', results: 138, reach: 9071, frequency: 2.90, costPerResult: 66.01, impressions: 26327, cpm: 346.73, linkClicks: 388, cpcLink: 23.53, ctrLink: 1.47, allClicks: 619, ctrAll: 2.35, cpcAll: 14.75 },
    { id: 'gravite-june-copy', name: 'Nissan Gravite June Campaign – Copy', status: 'Off', objective: 'Lead generation', resultType: 'Leads', results: 75, reach: 86816, frequency: 3.41, costPerResult: 321.37, impressions: 295916, cpm: 81.45, linkClicks: 1693, cpcLink: 14.24, ctrLink: 0.57, allClicks: 2181, ctrAll: 0.74, cpcAll: 11.05 },
    { id: 'gravite-june', name: 'Nissan Gravite June Campaign', status: 'Off', objective: 'Lead generation', resultType: 'Leads', results: 6, reach: 39688, frequency: 2.42, costPerResult: 1687.19, impressions: 96120, cpm: 105.32, linkClicks: 236, cpcLink: 42.89, ctrLink: 0.25, allClicks: 422, ctrAll: 0.44, cpcAll: 23.99 },
    { id: 'hospitality-hiring', name: 'Hospitality Hiring', status: 'Off', objective: 'Lead generation', resultType: 'Leads', results: 177, reach: 11353, frequency: 1.91, costPerResult: 10.00, impressions: 21734, cpm: 81.44, linkClicks: 397, cpcLink: 4.46, ctrLink: 1.83, allClicks: 693, ctrAll: 3.19, cpcAll: 4.55 },
    { id: 'sales-consultant-may', name: 'Sales Consultant – MAY', status: 'Off', objective: 'Lead generation', resultType: 'Leads', results: 102, reach: 41353, frequency: 4.21, costPerResult: 62.93, impressions: 174168, cpm: 36.85, linkClicks: 819, cpcLink: 7.84, ctrLink: 0.47, allClicks: 1465, ctrAll: 0.84, cpcAll: 4.38 },
    { id: 'two-wheeler-new', name: '2W, NEW AD', status: 'Off', objective: 'Lead generation', resultType: 'Leads', results: 115, reach: 61039, frequency: 2.77, costPerResult: 58.83, impressions: 169233, cpm: 39.98, linkClicks: 1011, cpcLink: 6.69, ctrLink: 0.60, allClicks: 1562, ctrAll: 0.92, cpcAll: 4.33 },
    { id: 'nissan-gravite', name: 'Nissan Gravite', status: 'Off', objective: 'Lead generation', resultType: 'Leads', results: 37, reach: 15645, frequency: 2.95, costPerResult: 89.66, impressions: 46136, cpm: 71.91, linkClicks: 295, cpcLink: 11.25, ctrLink: 0.64, allClicks: 406, ctrAll: 0.88, cpcAll: 8.17 },
    { id: 'video-editor-hiring', name: 'Video Editor Hiring', status: 'Off', objective: 'Lead generation', resultType: 'Leads', results: 579, reach: 34308, frequency: 3.58, costPerResult: 9.44, impressions: 122744, cpm: 44.54, linkClicks: 1406, cpcLink: 3.89, ctrLink: 1.15, allClicks: 2415, ctrAll: 1.97, cpcAll: 2.26 },
    { id: 'prem-technicians', name: 'Prem Technicians Hiring Campaign', status: 'Off', objective: 'Lead generation', resultType: 'Leads', results: 193, reach: 82618, frequency: 3.29, costPerResult: 48.62, impressions: 271766, cpm: 34.53, linkClicks: 1477, cpcLink: 6.35, ctrLink: 0.54, allClicks: 2017, ctrAll: 0.74, cpcAll: 4.65 },
    { id: 'mohit-field-sales', name: 'Mohit Field Sales Executive', status: 'Off', objective: 'Lead generation', resultType: 'Leads', results: 413, reach: 100401, frequency: 3.64, costPerResult: 36.49, impressions: 365131, cpm: 41.27, linkClicks: 1905, cpcLink: 7.91, ctrLink: 0.52, allClicks: 3066, ctrAll: 0.84, cpcAll: 4.92 },
    { id: 'digital-marketing', name: 'Digital Marketing Campaign', status: 'Off', objective: 'Lead generation', resultType: 'Leads', results: 392, reach: 9501, frequency: 1.73, costPerResult: 3.14, impressions: 16451, cpm: 74.91, linkClicks: 690, cpcLink: 1.79, ctrLink: 4.19, allClicks: 1558, ctrAll: 9.47, cpcAll: 0.79 },
    { id: 'hr-recruiters-whatsapp', name: 'HR Recruiters WhatsApp 36', status: 'Off', objective: 'Messaging', resultType: 'Conversations', results: 36, reach: 23947, frequency: 1.85, costPerResult: 373.39, impressions: 44211, cpm: 67.66, linkClicks: 227, cpcLink: 13.18, ctrLink: 0.51, allClicks: 389, ctrAll: 0.88, cpcAll: 7.69 },
    { id: 'two-wheeler-feb-copy', name: '2W Campaign February – Copy', status: 'Off', objective: 'Lead generation', resultType: 'Leads', results: 59, reach: 64324, frequency: 2.00, costPerResult: 124.57, impressions: 128834, cpm: 57.05, linkClicks: 676, cpcLink: 10.87, ctrLink: 0.52, allClicks: 941, ctrAll: 0.73, cpcAll: 6.08 },
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
