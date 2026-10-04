import advisorsImg from '../assets/projects/advisors.webp'
import ecommerceImg from '../assets/projects/ecommerce.webp'
import { profile } from '../data/profile.js'

export const strings = {
  en: {
    name: profile.name.en,
    tagline: profile.tagline.en,
    meta: 'Alexandria, Egypt',
    jobSuccess: '100% Job Success',
    rating: '5.0 client rating',
    save: 'Save Contact',
    whatsapp: 'WhatsApp',
    email: 'Email',
    work: 'Selected work',
    visit: 'Visit site',
    visitArrow: '↗',
    links: 'Links',
    portfolio: 'Full portfolio',
    toast: 'Contact saved, check your downloads',
    toggle: 'ع',
    toggleLabel: 'Switch to Arabic',
    whatsappMessage: "Hi Mahmoud, I saw your card and I'd like to talk about a project",
  },
  ar: {
    name: profile.name.ar,
    tagline: profile.tagline.ar,
    meta: 'مطوّر مواقع وتطبيقات (Full Stack) · الإسكندرية، مصر',
    jobSuccess: 'نسبة نجاح 100%',
    rating: 'تقييم 5.0',
    save: 'احفظ جهة الاتصال',
    whatsapp: 'واتساب',
    email: 'البريد الإلكتروني',
    work: 'من أعمالي',
    visit: 'زيارة الموقع',
    visitArrow: '↖',
    links: 'روابط',
    portfolio: 'الموقع الكامل',
    toast: 'تم حفظ جهة الاتصال، شوف التنزيلات',
    toggle: 'EN',
    toggleLabel: 'Switch to English',
    whatsappMessage: 'أهلاً محمود، شفت الكارت بتاعك وحابب أتكلم معاك عن مشروع',
  },
}

export const projects = [
  {
    title: { en: 'Advisors Platform', ar: 'منصة المستشارين' },
    description: {
      en: 'A platform where clients meet expert advisors through video calls and chat.',
      ar: 'منصة يتواصل فيها العملاء مع مستشارين متخصصين بمكالمات فيديو ومحادثة.',
    },
    url: 'https://advisors.startupkit.io',
    image: advisorsImg,
    imagePosition: 'object-center',
  },
  {
    title: { en: 'Janelle Online Store', ar: 'متجر Janelle الإلكتروني' },
    description: {
      en: 'An online beauty store for a brand in Egypt: products, cart and checkout.',
      ar: 'متجر إلكتروني لبراند مستحضرات تجميل في مصر: منتجات وسلة مشتريات ودفع.',
    },
    url: 'https://janelle-eg.com',
    image: ecommerceImg,
    imagePosition: 'object-top',
  },
]
