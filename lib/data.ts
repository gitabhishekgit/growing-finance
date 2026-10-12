export const siteConfig = {
  name: "Growing Finance",
  nameHindi: "ग्रोइंग फाइनेंस",
  domain: "growingfinance.co.in",
  tagline: "Your Partner in Financial Growth",
  taglineHindi: "आपका वित्तीय विकास साथी",
  description:
    "Growing Finance offers comprehensive financial solutions including loans, investments, tax planning, insurance, GST compliance, and IT returns filing.",
  descriptionHindi:
    "ऋण, निवेश, कर, बीमा, जीएसटी और आईटी रिटर्न — संपूर्ण वित्तीय समाधान एक छत के नीचे।",
};

export const contactInfo = {
  phone: "+91 83688 56402",
  phoneRaw: "+918368856402",
  whatsapp: "+91 83688 56402",
  whatsappNumber: "918368856402",
  whatsappMessage: "Hi, I'm interested in Growing Finance services. Please contact me.",
  email: "abhishek.sarwan90@gmail.com",
  supportEmail: "abhishek.sarwan90@gmail.com",
  gst: "27AABCG1234F1Z5",
  address: {
    line1: "4th Floor, Hariom Tower",
    line2: "",
    city: "Ranchi",
    state: "Jharkhand",
    pincode: "",
    country: "India",
  },
  hours: "Mon – Sat: 9:00 AM – 6:00 PM",
};

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message ?? contactInfo.whatsappMessage);
  return `https://wa.me/${contactInfo.whatsappNumber}?text=${text}`;
}

export function getFullAddress() {
  const { line1, line2, city, state, pincode } = contactInfo.address;
  const parts = [line1, line2, city, state, pincode].filter(Boolean);
  return parts.join(", ");
}

export const navLinks = [
  { href: "/", label: "Home", labelHindi: "होम" },
  { href: "/about", label: "About", labelHindi: "हमारे बारे में" },
  { href: "/services", label: "Services", labelHindi: "सेवाएं" },
  { href: "/contact", label: "Contact", labelHindi: "संपर्क" },
];

export const services = [
  {
    id: "loans",
    title: "Loans",
    titleHindi: "ऋण",
    subtitle: "All Types of Financing",
    description:
      "From personal and home loans to business and vehicle financing — we connect you with the best rates and fastest approvals.",
    features: [
      "Personal & Home Loans",
      "Business & MSME Loans",
      "Vehicle & Education Loans",
      "Loan Against Property",
      "Balance Transfer & Top-up",
    ],
    icon: "loan",
  },
  {
    id: "investments",
    title: "Investments",
    titleHindi: "निवेश",
    subtitle: "Grow Your Wealth",
    description:
      "Expert-guided investment solutions across mutual funds, fixed deposits, bonds, and portfolio management for every risk profile.",
    features: [
      "Mutual Funds & SIPs",
      "Fixed Deposits & Bonds",
      "Portfolio Advisory",
      "Retirement Planning",
      "Wealth Management",
    ],
    icon: "investment",
  },
  {
    id: "tax",
    title: "Tax Planning",
    titleHindi: "कर योजना",
    subtitle: "Optimize Your Tax Liability",
    description:
      "Strategic tax planning and compliance services to help individuals and businesses minimize liability while staying fully compliant.",
    features: [
      "Tax Planning & Advisory",
      "TDS & TCS Compliance",
      "Tax Audit Support",
      "Capital Gains Planning",
      "Corporate Tax Strategy",
    ],
    icon: "tax",
  },
  {
    id: "insurance",
    title: "Insurance",
    titleHindi: "बीमा",
    subtitle: "Protect What Matters",
    description:
      "Comprehensive life, health, and general insurance solutions tailored to safeguard you, your family, and your business.",
    features: [
      "Life & Term Insurance",
      "Health & Mediclaim",
      "Motor Insurance",
      "Business Insurance",
      "Claim Assistance",
    ],
    icon: "insurance",
  },
  {
    id: "gst",
    title: "GST Services",
    titleHindi: "जीएसटी सेवाएं",
    subtitle: "Complete GST Compliance",
    description:
      "End-to-end GST registration, filing, reconciliation, and advisory services for businesses of all sizes.",
    features: [
      "GST Registration",
      "Monthly/Quarterly Filing",
      "GST Reconciliation",
      "Input Tax Credit Optimization",
      "GST Audit & Notice Support",
    ],
    icon: "gst",
  },
  {
    id: "it-returns",
    title: "IT Returns",
    titleHindi: "आईटी रिटर्न",
    subtitle: "Hassle-Free Filing",
    description:
      "Accurate and timely income tax return filing for individuals, professionals, and businesses with maximum refund optimization.",
    features: [
      "Individual ITR Filing",
      "Business & Professional ITR",
      "Form 16 Processing",
      "Refund Tracking",
      "Notice Response Support",
    ],
    icon: "itr",
  },
];

export const stats = [
  { value: "5,000+", label: "Happy Clients", labelHindi: "खुश ग्राहक" },
  { value: "₹500Cr+", label: "Loans Facilitated", labelHindi: "ऋण सुविधा" },
  { value: "15+", label: "Years Experience", labelHindi: "वर्षों का अनुभव" },
  { value: "98%", label: "Client Satisfaction", labelHindi: "ग्राहक संतुष्टि" },
];

export const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Business Owner, Mumbai",
    quote:
      "Growing Finance helped us secure a business loan within 48 hours. Their team is professional, transparent, and truly cares about client success.",
  },
  {
    name: "Priya Sharma",
    role: "Software Engineer, Pune",
    quote:
      "I had been putting off my tax filing for months. They handled everything — ITR, investments, and insurance — in one consultation. Highly recommended!",
  },
  {
    name: "Amit Patel",
    role: "Retailer, Ahmedabad",
    quote:
      "Their GST compliance service saved us hours every month. Accurate filings, timely reminders, and excellent support whenever we have questions.",
  },
];

export const whyChooseUs = [
  {
    title: "Trusted Expertise",
    description:
      "Our team of certified financial advisors brings decades of combined experience across banking, taxation, and investments.",
  },
  {
    title: "One-Stop Solution",
    description:
      "From loans to insurance, tax to GST — manage all your financial needs under one roof with a dedicated relationship manager.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden charges. We believe in clear, upfront pricing so you always know exactly what you're paying for.",
  },
  {
    title: "Personalized Approach",
    description:
      "Every client gets a customized financial plan based on their goals, risk appetite, and life stage — not a one-size-fits-all solution.",
  },
];

export const partners = [
  "HDFC Bank",
  "ICICI Bank",
  "SBI",
  "Axis Bank",
  "LIC",
  "Max Life",
  "HDFC Life",
  "Star Health",
];
