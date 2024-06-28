import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  roadmap1,
  searchMd,
  slack,
  telegram,
  twitter,
  apiImage,
  gamingImage,
  userImage,
  laptop
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "How It Works",
    url: "#howItWorks",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#price",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Contact",
    url: "#signup",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const roadmap = [
  {
    id: "0",
    title: "Voice integration",
    text: "Implementing AI powered voice integration for enterprise applications",
    date: "June 2024",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Adding game-like elements, such as badges, leaderboards, and mini-games to create fun user experiences",
    date: "May 2023",
    status: "done",
    imageUrl: gamingImage,
  },
  {
    id: "2",
    title: "User customization",
    text: "Allow users to customize the appearance and behavior of applications, making it more engaging and fun to interact with",
    date: "June 2024",
    status: "progress",
    imageUrl: userImage,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the website to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations",
    date: "February 2023",
    status: "done",
    imageUrl: apiImage,
  },
];

export const collabText =
  "Empower your projects with our seamless integration and robust security—work smarter and safer";

export const collabContent = [
  {
    id: "0",
    title: "Initial Collaboration",
    text: "Begin your journey with a personalized meeting where we explore your vision and establish project goals",
  },
  {
    id: "1",
    title: "Design Phase",
    text: "We translate your ideas into tangible designs, meticulously crafting the layout and functionality that align with your objectives",
  },
  {
    id: "2",
    title: "Build Phase",
    text: "Dive deep into the creation process as we develop and refine your website’s features, ensuring every component performs optimally and matches your specifications",
  },
  {
    id: "3",
    title: "Ongoing Support",
    text: "We continue to enhance, update, and optimize your website post-launch, ensuring it remains dynamic, secure, and aligned with the latest trends and technologies",
  },
];


export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Tailored Solutions",
    text: "We start with a detailed consultation to ensure every solution is tailored to your specific business needs, guaranteeing a personalized service",
    backgroundUrl: "benefits/card-1.svg",
    iconUrl: "benefits/icon-1.svg",
    imageUrl: "benefits/image-2.png",
  },
  {
    id: "1",
    title: "Transparent Process",
    text: "From clear proposals to regular updates, we keep you informed every step of the way, ensuring a seamless and transparent project journey",
    backgroundUrl: "benefits/card-2.svg",
    iconUrl: "benefits/icon-2.svg",
    imageUrl: "benefits/image-2.png",
    light: true,
  },
  {
    id: "2",
    title: "Streamlined Communication",
    text: "Use our modern project management tools to check real-time progress and communicate effortlessly, making project coordination simple",
    backgroundUrl: "benefits/card-3.svg",
    iconUrl: "benefits/icon-3.svg",
    imageUrl: "benefits/image-2.png",
  },
  {
    id: "3",
    title: "Efficient Milestone Tracking",
    text: "We set clear milestones and meet them, ensuring your project is always on track and delivered on time",
    backgroundUrl: "benefits/card-4.svg",
    iconUrl: "benefits/icon-4.svg",
    imageUrl: "benefits/image-2.png",
    light: true,
  },
  {
    id: "4",
    title: "Professional Growth",
    text: "We believe in continuous improvement and staying ahead with the latest web technologies to deliver cutting-edge solutions",
    backgroundUrl: "benefits/card-5.svg",
    iconUrl: "benefits/icon-1.svg",
    imageUrl: "benefits/image-2.png",
  },
  {
    id: "5",
    title: "Quality Assured",
    text: "Focus on delivering high-quality, robust web solutions that not only meet but exceed your expectations, ensuring total satisfaction",
    backgroundUrl: "benefits/card-6.svg",
    iconUrl: "benefits/icon-2.svg",
    imageUrl: "benefits/image-2.png",
  },
];

export const pricing = [
  {
    id: "0",
    title: "Standard",
    description: "Optimized and mobile responsive website suitable for small businesses and personal portfolios",
    price: "1500",
    features: [
      "Single-page static website",
      "Up to 5 content sections",
      "Mobile-responsive design",
      "Basic SEO optimization"
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced website capabilities including multimedia integration, perfect for growing businesses",
    price: "3500",
    features: [
      "Everything in standard tier plus",
      "Up to 5 web pages",
      "Advanced SEO and analytics setup",
      "Interactive UI/UX elements",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Full-scale web solutions with extensive custom features tailored for large corporations and high-traffic sites",
    price: null,
    features: [
      "Custom design and development",
      "High-end security and data protection",
      "Scalability and performance optimization",
      "Payment gateway integration",
      "Database design and management"
    ],
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
