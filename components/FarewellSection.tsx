'use client';

import { motion } from 'framer-motion';

export default function FarewellSection() {
  return (
    <section 
      id="farewell-message"
      className="relative bg-gradient-to-b from-[#150b01] via-[#1a0e04] to-[#150b01] py-20 lg:py-32"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#c9a869] to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative"
        >
          <div 
            className="absolute inset-0 border border-[#c9a869]/20 pointer-events-none" 
            style={{ 
              boxShadow: '0 0 30px rgba(201, 168, 105, 0.1)',
              margin: '-20px'
            }} 
          />
          
          <div className="relative bg-[#1a0e04]/50 backdrop-blur-sm p-8 lg:p-12">
            <div className="w-12 h-[1px] bg-[#c9a869] mb-6" />
            
            <h2 className="text-3xl lg:text-5xl font-light tracking-wide text-[#f3eadb] mb-6 leading-tight">
              Birlikte biriktirdiğimiz bütün güzel anlara teşekkürler.
            </h2>
            
            <p className="text-xl lg:text-2xl text-[#d5b982] font-light mb-8 leading-relaxed">
              Sizin hikâyenizde yer almak, bizim en güzel hatıramız.
            </p>

            <div className="space-y-5 text-[#d5cabb] text-lg leading-relaxed">
              <p>
                Cemre Bridal, bir annenin kızının adını verdiği, yılların emeğini ve sevgisini taşıyan bir hayalle başladı. 
                Siz bize en özel günlerinizi emanet ettiniz. Biz de her dikişe, her provaya, her son dokunuşa bu güvenin 
                kıymetini bilerek yaklaştık.
              </p>
              
              <p>
                Birlikte gelinlikler seçtik, heyecanlar paylaştık. Aynanın karşısındaki ilk gülümsemenize, sevdiklerinizin 
                gözlerindeki mutluluğa tanıklık ettik. Zamanla bizim hikâyemiz, sizin hatıralarınızla büyüdü.
              </p>
              
              <p>
                Bugün, içinde bulunduğumuz ekonomik koşullar nedeniyle{' '}
                <strong className="text-[#f3eadb] font-semibold">
                  Cemre Bridal&apos;ın faaliyetlerini 2026 yılının bitmesiyle beraber sonlandırıyor
                </strong>{' '}
                ve sizlere veda ediyoruz. Emek verdiğimiz bu hayale veda etmek zor. Yine de geriye dönüp baktığımızda, 
                yollarımızın sizinle kesişmiş olmasına büyük bir minnet duyuyoruz.
              </p>
              
              <p>
                Bize güvendiğiniz, emeğimize değer verdiğiniz ve hayatınızda bize yer açtığınız için teşekkür ederiz.
              </p>
              
              <div className="mt-8 pt-6 pl-6 border-l-2 border-[#c9a869] bg-gradient-to-r from-[#c9a869]/5 to-transparent">
                <p className="text-[#e7cf9f] text-xl lg:text-2xl font-light leading-relaxed">
                  Yıllar sonra fotoğraflarınıza baktığınızda, o günkü mutluluğunuzun yeniden yüzünüze yansımasını dileriz. 
                  O gülümsemede küçük bir payımız varsa, bizim için hep çok kıymetli kalacak.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-[#c9a869]/30">
              <p className="text-[#d5b982] text-lg mb-2">Sevgi ve minnetle,</p>
              <p 
                className="text-[#e7cf9f] text-4xl font-light" 
                style={{ fontFamily: 'Allura, cursive' }}
              >
                Cemre Bridal
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#c9a869] to-transparent" />
    </section>
  );
}
