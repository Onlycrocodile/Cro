import React, { useState } from 'react';
import { Building2, Car, Search, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';

type ListingType = 'cars' | 'properties';
type Vehicle = {
  id: number;
  name: { ar: string; en: string };
  price: number;
  image: string;
  type: { ar: string; en: string };
};

type Property = {
  id: number;
  name: { ar: string; en: string };
  price: number;
  location: { ar: string; en: string };
  bedrooms: number;
  image: string;
};

function App() {
  const [activeTab, setActiveTab] = useState<ListingType>('cars');
  const { language, setLanguage, t } = useLanguage();

  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: {
        ar: 'مرسيدس بنز S-Class 2024',
        en: 'Mercedes-Benz S-Class 2024'
      },
      price: 1200,
      image: 'https://images.unsplash.com/photo-1622200984485-a229f857c05c',
      type: {
        ar: 'فاخرة',
        en: 'Luxury'
      }
    },
    {
      id: 2,
      name: {
        ar: 'بي إم دبليو X7 2024',
        en: 'BMW X7 2024'
      },
      price: 1000,
      image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e',
      type: {
        ar: 'دفع رباعي',
        en: 'SUV'
      }
    },
    {
      id: 3,
      name: {
        ar: 'لكزس ES 2024',
        en: 'Lexus ES 2024'
      },
      price: 800,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb',
      type: {
        ar: 'سيدان',
        en: 'Sedan'
      }
    }
  ];

  const properties: Property[] = [
    {
      id: 1,
      name: {
        ar: 'فيلا فاخرة في الرياض',
        en: 'Luxury Villa in Riyadh'
      },
      price: 15000,
      location: {
        ar: 'حي السفارات، الرياض',
        en: 'Diplomatic Quarter, Riyadh'
      },
      bedrooms: 5,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811'
    },
    {
      id: 2,
      name: {
        ar: 'شقة حديثة في جدة',
        en: 'Modern Apartment in Jeddah'
      },
      price: 8000,
      location: {
        ar: 'الشاطئ، جدة',
        en: 'Al Shati, Jeddah'
      },
      bedrooms: 3,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00'
    },
    {
      id: 3,
      name: {
        ar: 'بنتهاوس في الخُبر',
        en: 'Penthouse in Khobar'
      },
      price: 12000,
      location: {
        ar: 'الكورنيش، الخبر',
        en: 'Corniche, Khobar'
      },
      bedrooms: 4,
      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd'
    }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 ${language === 'ar' ? 'text-right' : 'text-left'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className={`flex items-center ${language === 'ar' ? 'space-x-4 space-x-reverse' : 'space-x-4'}`}>
              <Building2 className="h-8 w-8 text-emerald-600" />
              <h1 className="text-2xl font-bold text-gray-800">{t('site.name')}</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="mr-6 flex items-center text-gray-600 hover:text-emerald-600"
              >
                <Globe className="h-5 w-5 mr-1" />
                {language === 'ar' ? 'English' : 'العربية'}
              </button>
              <nav className={`flex ${language === 'ar' ? 'space-x-6 space-x-reverse' : 'space-x-6'}`}>
                <a href="#contact" className="text-gray-600 hover:text-emerald-600">{t('nav.contact')}</a>
                <a href="#about" className="text-gray-600 hover:text-emerald-600">{t('nav.about')}</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582501367134-98b4893c7294)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h2 className="text-5xl font-bold mb-4">{t('hero.title')}</h2>
              <p className="text-xl mb-8">{t('hero.subtitle')}</p>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className={`flex items-center ${language === 'ar' ? 'space-x-4 space-x-reverse' : 'space-x-4'}`}>
                  <Search className="h-6 w-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t('hero.search')}
                    className={`w-full bg-transparent border-none focus:outline-none text-gray-800 ${language === 'ar' ? 'text-right' : 'text-left'}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full shadow-md p-1">
            <button
              onClick={() => setActiveTab('cars')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'cars' ? 'bg-emerald-600 text-white' : 'text-gray-600'
              }`}
            >
              <span className="flex items-center">
                <Car className={`h-5 w-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                {t('tabs.cars')}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('properties')}
              className={`px-6 py-2 rounded-full ${
                activeTab === 'properties' ? 'bg-emerald-600 text-white' : 'text-gray-600'
              }`}
            >
              <span className="flex items-center">
                <Building2 className={`h-5 w-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                {t('tabs.properties')}
              </span>
            </button>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'cars' ? (
            vehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={vehicle.image} alt={vehicle.name[language]} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{vehicle.name[language]}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.type[language]}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-600 font-bold">{vehicle.price} {t('car.price.perDay')}</span>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700">
                      {t('button.bookNow')}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={property.image} alt={property.name[language]} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{property.name[language]}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className={`h-4 w-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                    {property.location[language]}
                  </div>
                  <p className="text-gray-600 mb-4">{property.bedrooms} {t('property.bedrooms')}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-600 font-bold">{property.price} {t('property.price.perMonth')}</span>
                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700">
                      {t('button.bookNow')}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-12" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t('contact.title')}</h2>
          <div className={`flex justify-center ${language === 'ar' ? 'space-x-8 space-x-reverse' : 'space-x-8'}`}>
            <div className="flex items-center">
              <Phone className={`h-6 w-6 ${language === 'ar' ? 'ml-2' : 'mr-2'} text-emerald-600`} />
              <span>+966 12 345 6789</span>
            </div>
            <div className="flex items-center">
              <Mail className={`h-6 w-6 ${language === 'ar' ? 'ml-2' : 'mr-2'} text-emerald-600`} />
              <span>info@alfakhama.sa</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>{t('footer.rights')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;