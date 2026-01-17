import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, MapPin, Phone, Mail } from "lucide-react";
import logoImg from '@assets/Untitled_design_1768672215327.png';
import whatsappIcon from '@assets/logo_1768672400400.png';
import instagramIcon from '@assets/instagram_1768672404823.png';
import linkedinIcon from '@assets/linkedin_1768672408422.png';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-start bg-white pt-10 pb-10">
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          {/* Logo Section */}
          <div className="mb-0 flex flex-col items-center -mt-20">
            <motion.img 
              src={logoImg} 
              alt="VIP Networks Logo" 
              className="w-[24rem] md:w-[28rem] lg:w-[32rem] h-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>

          {/* Social Icons Section */}
          <div className="flex gap-6 mb-4 -mt-10">
            <a href="https://www.instagram.com/vip_networks/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src={instagramIcon} alt="Instagram" className="w-10 h-10" />
            </a>
            <a href="https://wa.me/919326144739" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10" />
            </a>
            <a href="https://linkedin.com/company/vipnetworks" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10" />
            </a>
          </div>

          {/* CTA Button Section */}
          <div className="w-full max-w-xs mb-8">
            <Link href="/services">
              <button className="w-full py-4 bg-[#0F172A] text-white rounded-full font-bold text-lg hover:bg-[#1a2b4a] transition-all shadow-lg flex items-center justify-center">
                EXPLORE OUR SERVICES
              </button>
            </Link>
          </div>

          {/* Rating Section */}
          <div className="mb-8">
            <p className="text-gray-600 text-sm mb-3">Click to Rate us on Google</p>
            <div className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <a 
                  key={i} 
                  href="https://g.page/r/your-google-review-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform cursor-pointer"
                >
                  <Star size={28} className="text-[#FFD700] fill-[#FFD700]" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center w-full max-w-md"
          >
            {/* Address */}
            <div className="mb-6 flex flex-col items-center">
              <div className="px-8 py-1.5 border border-[#0F172A] rounded-full mb-4">
                <span className="text-[#0F172A] font-bold tracking-widest text-xs uppercase">ADDRESS</span>
              </div>
              <p className="text-gray-700 text-sm md:text-base font-medium text-center px-4">
                Jogeshwari East, Mumbai 400060,<br />
                Maharashtra.
              </p>
            </div>

            {/* Contact Details */}
            <div className="mb-6 flex flex-col items-center">
              <div className="px-8 py-1.5 border border-[#0F172A] rounded-full mb-4">
                <span className="text-[#0F172A] font-bold tracking-widest text-xs uppercase">CONTACT</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <a href="tel:+919326144739" className="text-gray-700 font-medium hover:text-[#0F172A] transition-colors">+91 9326144739</a>
                <a href="mailto:vip.itinfra@gmail.com" className="text-gray-700 font-medium hover:text-[#0F172A] transition-colors">vip.itinfra@gmail.com</a>
                <a href="https://www.vipnetworks.in" target="_blank" rel="noopener noreferrer" className="text-gray-700 font-medium hover:text-[#0F172A] transition-colors">www.vipnetworks.in</a>
              </div>
            </div>

            {/* Footer Branding */}
            <div className="mt-4 flex flex-col items-center">
              <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-1">Developed By</p>
              <p className="text-[#0F172A] text-xs font-bold tracking-widest">
                AIRAVATA TECHNOLOGIES
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
