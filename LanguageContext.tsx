import React, { createContext, useContext, useState } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    'site.name': 'الفخامة للإيجار',
    'nav.contact': 'اتصل بنا',
    'nav.about': 'من نحن',
    'hero.title': 'استأجر سيارتك أو عقارك المثالي',
    'hero.subtitle': 'نقدم أفضل السيارات والعقارات الفاخرة في المملكة العربية السعودية',
    'hero.search': 'ابحث عن سيارة أو عقار...',
    'tabs.cars': 'سيارات',
    'tabs.properties': 'عقارات',
    'car.type.luxury': 'فاخرة',
    'car.type.suv': 'دفع رباعي',
    'car.type.sedan': 'سيدان',
    'car.price.perDay': 'ريال / يوم',
    'property.price.perMonth': 'ريال / شهر',
    'property.bedrooms': 'غرف نوم',
    'button.bookNow': 'احجز الآن',
    'contact.title': 'اتصل بنا',
    'footer.rights': '© 2024 الفخامة للإيجار. جميع الحقوق محفوظة',
  },
  en: {
    'site.name': 'Al-Fakhama Rentals',
    'nav.contact': 'Contact Us',
    'nav.about': 'About Us',
    'hero.title': 'Rent Your Perfect Car or Property',
    'hero.subtitle': 'We offer the finest luxury cars and properties in Saudi Arabia',
    'hero.search': 'Search for a car or property...',
    'tabs.cars': 'Cars',
    'tabs.properties': 'Properties',
    'car.type.luxury': 'Luxury',
    'car.type.suv': 'SUV',
    'car.type.sedan': 'Sedan',
    'car.price.perDay': 'SAR / day',
    'property.price.perMonth': 'SAR / month',
    'property.bedrooms': 'Bedrooms',
    'button.bookNow': 'Book Now',
    'contact.title': 'Contact Us',
    'footer.rights': '© 2024 Al-Fakhama Rentals. All rights reserved',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}