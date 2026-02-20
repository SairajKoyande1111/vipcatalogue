import { Link } from "wouter";
import { motion } from "framer-motion";
import { Star, MapPin, Phone, Mail } from "lucide-react";
import { useEffect } from "react";
import logoImg from '@assets/Untitled_design_1768672215327.png';

export default function Home() {
  useEffect(() => {
    const playWelcome = () => {
      const audio = new Audio("/welcome.mp3");
      audio.play().catch(error => {
        console.log("Autoplay prevented or error:", error);
      });
    };
    
    // Attempt to play on mount
    playWelcome();
  }, []);

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
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <img 
                src={logoImg} 
                alt="VIP Networks Logo" 
                className="w-[24rem] md:w-[28rem] lg:w-[32rem] h-auto"
              />
            </motion.div>
          </div>

          {/* CTA Button Section */}
          <div className="w-full max-w-xs mb-8">
            <Link href="/services">
              <button 
                className="w-full py-4 bg-[#0F172A] text-white rounded-full font-bold text-lg hover:bg-[#1a2b4a] transition-all shadow-lg flex items-center justify-center"
              >
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
                  <Star size={28} className="text-[#0F172A] fill-[#0F172A]" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center w-full max-w-4xl"
          >
            <div className="flex flex-row items-start justify-center gap-4 md:gap-32 w-full">
              {/* Address */}
              <div className="flex flex-col items-center flex-1 w-full">
                <div className="px-6 md:px-12 py-2 border border-[#0F172A] rounded-full mb-4">
                  <span className="text-[#0F172A] font-bold tracking-widest text-[13px] md:text-base uppercase">ADDRESS</span>
                </div>
                <p className="text-gray-700 text-[14px] md:text-xl font-medium text-center leading-tight md:leading-normal">
                  Jogeshwari East,<br className="md:hidden" /> Mumbai 400060,<br />
                  Maharashtra.
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col items-center flex-1 w-full text-center">
                <div className="px-6 md:px-12 py-2 border border-[#0F172A] rounded-full mb-4">
                  <span className="text-[#0F172A] font-bold tracking-widest text-[13px] md:text-base uppercase">CONTACT</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <a href="tel:+919326144739" className="text-gray-700 text-[14px] md:text-xl font-medium hover:text-[#0F172A] transition-colors whitespace-nowrap">+91 9326144739</a>
                  <a href="mailto:vip.itinfra@gmail.com" className="text-gray-700 text-[13px] md:text-xl font-medium hover:text-[#0F172A] transition-colors break-all md:break-normal">vip.itinfra@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center gap-1">
              <span className="text-gray-700 text-[14px] md:text-xl font-medium">Website</span>
              <a href="https://vipnetworks.netlify.app" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-[14px] md:text-xl font-medium hover:text-[#0F172A] transition-colors">vipnetworks.netlify.app</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
