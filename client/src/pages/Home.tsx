import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Phone, Mail } from "lucide-react";
import logoImg from '@assets/Untitled_design_1768672215327.png';
import whatsappIcon from '@assets/logo_1768672400400.png';
import instagramIcon from '@assets/instagram_1768672404823.png';
import linkedinIcon from '@assets/linkedin_1768672408422.png';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-white">
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Logo/Title */}
          <div className="mb-8 flex flex-col items-center">
            <motion.img 
              src={logoImg} 
              alt="VIP Networks Logo" 
              className="w-80 h-auto mb-2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-8">
            <Link href="/services">
              <button className="group px-12 py-4 border-2 border-black text-black rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all flex items-center gap-3">
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            {/* Social Icons */}
            <div className="flex gap-8 mt-4">
              <a href="https://www.instagram.com/vip_networks/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src={instagramIcon} alt="Instagram" className="w-12 h-12" />
              </a>
              <a href="https://wa.me/919326144739" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src={whatsappIcon} alt="WhatsApp" className="w-12 h-12" />
              </a>
              <a href="https://linkedin.com/company/vipnetworks" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src={linkedinIcon} alt="LinkedIn" className="w-12 h-12" />
              </a>
            </div>

            {/* Rating Stars */}
            <div className="mt-4">
              <p className="text-gray-500 text-sm mb-3 uppercase tracking-widest font-medium">Rate Your Experience</p>
              <div className="flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <a 
                    key={i} 
                    href="https://g.page/r/your-google-review-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform cursor-pointer"
                  >
                    <Star size={28} className="text-blue-600 fill-blue-600" />
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-xs mt-3">Click to leave a Google review</p>
            </div>

            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-6 flex flex-col items-center gap-4 text-gray-700 text-base md:text-lg font-medium"
            >
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-600 shrink-0" />
                <a href="mailto:vip.itinfra@gmail.com" className="hover:text-blue-600 transition-colors">vip.itinfra@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-blue-600 shrink-0" />
                <a href="tel:+919326144739" className="hover:text-blue-600 transition-colors">+91 9326144739</a>
              </div>
              <div className="flex items-center justify-center gap-2 max-w-sm text-center">
                <MapPin size={20} className="text-blue-600 shrink-0" />
                <span>Jogeshwari East, Mumbai - 400060, Maharashtra.</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
