'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DateWheelPicker } from '@/components/ui/date-wheel-picker';

const TIME_SLOTS = {
  weekday: [
    '10:00 - 13:00',
    '13:00 - 16:00',
    '16:00 - 19:00',
  ],
  weekend: [
    '11:00 - 14:00',
    '14:00 - 17:00',
    '17:00 - 20:00',
  ],
};

export default function AppointmentsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [showDateError, setShowDateError] = useState(false);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
   
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    setAvailableTimeSlots(isWeekend ? TIME_SLOTS.weekend : TIME_SLOTS.weekday);
    setSelectedTimeSlot('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const checkDate = new Date(selectedDate);
    checkDate.setHours(0, 0, 0, 0);
    
    if (checkDate < today) {
      setShowDateError(true);
      return;
    }
 
    const formattedDate = selectedDate.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long'
    });
  
    const whatsappMessage = `Merhaba Cemre Bridal ekibi, randevu almak istiyorum.

Ad Soyad: ${formData.name}
E-posta: ${formData.email}
Tarih: ${formattedDate}
Saat Aralığı: ${selectedTimeSlot}
${formData.message ? `\nMesaj: ${formData.message}` : ''}`;

    const whatsappNumber = '905389120604';
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#150b01] pt-24 lg:pt-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <nav className="mb-8 text-sm text-gray-300">
          <div className="flex items-center space-x-2">
            <Link href="/" className="hover:text-white transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-white">Randevu Al</span>
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-light tracking-wider text-white mb-4">
            Randevu Al
          </h1>
          <p className="text-base text-gray-300 max-w-xl mx-auto">
            Koleksiyonumuzu görmek için randevu oluşturun
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
                E-posta (Opsiyonel)
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-none h-12"
                placeholder="ornek@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-light text-gray-300 mb-4 uppercase tracking-wider">
                Tarih Seçin
              </label>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <DateWheelPicker
                  value={selectedDate}
                  onChange={handleDateChange}
                  locale="tr-TR"
                  showYear={false}
                  size="md"
                />
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Seçilen: {selectedDate.toLocaleDateString('tr-TR', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric',
                  weekday: 'long'
                })}
              </p>
            </div>

            {availableTimeSlots.length > 0 && (
              <div>
                <label htmlFor="timeSlot" className="block text-sm font-light text-gray-300 mb-2 uppercase tracking-wider">
                  Saat Aralığı
                </label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  required
                  value={selectedTimeSlot}
                  onChange={(e) => setSelectedTimeSlot(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-none h-12 px-4"
                >
                  <option value="" className="bg-[#150b01]">Saat aralığı seçin</option>
                  {availableTimeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-[#150b01]">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label htmlFor="message" className="block text-sm font-light text-gray-300 mb-2 uppercase tracking-wider">
                Mesajınız (Opsiyonel)
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-none min-h-[100px]"
                placeholder="Notlarınız..."
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
                className="flex items-center justify-center w-full px-12 py-4 text-sm uppercase tracking-widest font-light transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #c49832 0%, #e6b73a 25%, #f4c542 50%, #ffd84d 65%, #f4c542 80%, #d4a942 100%)', color: '#150b01' }}
              >
                <motion.span
                  initial={false}
                  whileHover={{ x: 2 }}
                >
                  WhatsApp ile Gönder
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center text-sm text-gray-400"
        >
          <p>Haftaiçi 10:00-20:00 | Cumartesi-Pazar 11:00-20:00</p>
          <p className="mt-2">
            <a href="tel:+905389120604" className="hover:text-white transition-colors">
              0538 912 06 04
            </a>
          </p>
        </motion.div>
      </div>

      {showDateError && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#150b01] border border-[#c9a869]/30 rounded-lg p-8 max-w-md w-full"
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">⏰</div>
              <h3 className="text-2xl font-light text-white mb-2">Zamanı Geri Alamayız</h3>
            </div>
            <p className="text-gray-300 text-center mb-6">
              Geçmişe nasıl gideceksiniz? Lütfen uygun bir tarih seçin.
            </p>
            <motion.button
              onClick={() => setShowDateError(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#c9a869] to-[#f4c542] hover:from-[#d4a942] hover:to-[#ffd84d] text-[#150b01] font-semibold py-3 rounded-lg transition-all"
            >
              Anladım
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
