export const profile = {
  name: { en: 'Mahmoud Elsharawy', ar: 'محمود الشعراوي' },
  firstName: 'Mahmoud',
  lastName: 'Elsharawy',
  title: 'Full Stack Developer',
  tagline: {
    en: 'I build websites and apps for businesses',
    ar: 'أصمم وأطوّر مواقع وتطبيقات للأعمال',
  },
  location: { city: 'Alexandria', country: 'Egypt' },
  email: 'mahmoudelsharawy92@gmail.com',
  phone: {
    primary: '+201226034294',
    secondary: '+201157229382',
    // How the WhatsApp number is printed on the Arabic card
    local: '0122 603 4294',
  },
  links: {
    upwork: 'https://www.upwork.com/freelancers/mahmoudelsharawy',
    linkedin: 'https://www.linkedin.com/in/mahmoud-elsharawy-dev',
    github: 'https://github.com/MahmoudElsh3rawy',
  },
}

export const whatsappUrl = (message) =>
  `https://wa.me/${profile.phone.primary.replace('+', '')}?text=${encodeURIComponent(message)}`
