'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Instagram, Send } from 'lucide-react';
import { siteSettings } from '@/lib/mockData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#150b01] pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-300">
          <div className="flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-white">İletişim</span>
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h1 className="text-4xl lg:text-6xl font-light tracking-wider text-white mb-4">
            İletişim
          </h1>
          <p className="text-lg text-gray-300 tracking-wide max-w-2xl mx-auto">
            Sorularınız için bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-light tracking-wider text-white mb-8">
                İletişim Bilgileri
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-light text-white mb-1">Telefon</h3>
                    {siteSettings.contactPerson && (
                      <div className="text-white font-medium mb-2">{siteSettings.contactPerson}</div>
                    )}
                    <a
                      href={`tel:${siteSettings.contactPhone.replace(/\s/g, '')}`}
                      className="text-gray-300 hover:text-white transition-colors block"
                    >
                      {siteSettings.contactPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-light text-white mb-1">E-posta</h3>
                    <a
                      href={`mailto:${siteSettings.contactEmail}`}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {siteSettings.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-light text-white mb-1">Adres</h3>
                    {siteSettings.address && siteSettings.addressMapLink ? (
                      <a
                        href={siteSettings.addressMapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {siteSettings.address}
                      </a>
                    ) : (
                      <p className="text-gray-300">
                        Sultaniye Mahallesi, Doğan Araslı Blv. no:140/5<br />
                        34510 Esenyurt, İstanbul<br />
                        Türkiye
                      </p>
                    )}
                  </div>
                </div>

                {siteSettings.socialLinks.instagram && (
                  <div className="flex items-start space-x-4">
                    <Instagram className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-light text-white mb-1">Instagram</h3>
                      <a
                        href={siteSettings.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        @cemrebridal
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-black/20 p-8 border border-white/5">
              <h3 className="text-xl font-light tracking-wider text-white mb-4">
                Çalışma Saatlerimiz
              </h3>
              <div className="space-y-2 text-gray-300">
                <p className="flex justify-between">
                  <span>Haftaiçi:</span>
                  <span>10:00 - 20:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Cumartesi - Pazar:</span>
                  <span>11:00 - 20:00</span>
                </p>
              </div>
            </div>

            <div className="bg-black/20 p-8 border border-white/5">
              <h3 className="text-xl font-light tracking-wider text-white mb-4">
                Bizi Ziyaret Edin
              </h3>
              <p className="text-gray-300 mb-4">
                Koleksiyonumuzu görmek ve uzman ekibimizle tanışmak için atölyemizi ziyaret edebilirsiniz. 
                Randevu almak için lütfen önceden arayın.
              </p>
              <Link
                href="/appointments"
                className="inline-block text-white hover:opacity-60 transition-opacity uppercase tracking-wider text-sm border-b border-white pb-1"
              >
                Randevu Al →
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl lg:text-4xl font-light tracking-wider text-white mb-8">
              Mesaj Gönderin
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-gray-300 mb-2 uppercase tracking-wider">
                  Adınız Soyadınız
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-none h-12"
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-300 mb-2 uppercase tracking-wider">
                  E-posta
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-none h-12"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-light text-gray-300 mb-2 uppercase tracking-wider">
                  Telefon
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-none h-12"
                  placeholder="0555 123 45 67"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-light text-gray-300 mb-2 uppercase tracking-wider">
                  Konu
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-none h-12"
                  placeholder="Mesaj konusu"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light text-gray-300 mb-2 uppercase tracking-wider">
                  Mesajınız
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-none min-h-[160px]"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #c49832 0%, #e6b73a 25%, #f4c542 50%, #ffd84d 65%, #f4c542 80%, #d4a942 100%)',
                  padding: '1px',
                }}
              >
                <span
                  className="flex items-center justify-center gap-3 w-full px-12 py-5 uppercase tracking-widest text-sm font-light transition-all duration-500"
                  style={{ background: 'linear-gradient(135deg, #c49832 0%, #e6b73a 25%, #f4c542 50%, #ffd84d 65%, #f4c542 80%, #d4a942 100%)', color: '#150b01' }}
                >
                  <motion.span
                    className="flex items-center gap-3"
                    initial={false}
                    whileHover={{ x: 2 }}
                  >
                    Mesaj Gönder
                    <Send className="w-4 h-4" style={{ color: '#150b01' }} />
                  </motion.span>
                  {/* Shimmer overlay */}
                  <span
                    className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
                    }}
                  />
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

