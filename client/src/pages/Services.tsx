import { Link } from "wouter";
import { motion } from "framer-motion";
import { useServices } from "@/hooks/use-services";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ArrowRight, Loader2 } from "lucide-react";
import Lottie from "lottie-react";
import cctvAnimation from "@/assets/cctv.json";

// Import generated images
import cctvImg from '@assets/generated_images/modern_cctv_security_cameras_setup.png';
import thermalImg from '@assets/generated_images/thermal_and_fire_detection_system.png';
import networkingImg from '@assets/generated_images/modern_server_room_networking_equipment.png';
import wifiImg from '@assets/generated_images/wireless_access_point_networking_device.png';
import defaultImg from '@assets/stock_images/it_infrastructure_an_c2bc155e.jpg';

// Import Lottie animations
import isometricData from "@/assets/lottie/isometric_data.json";
import dashboards from "@/assets/lottie/dashboards.json";
import wifiPrinter from "@/assets/lottie/wifi_printer.json";
import carBattery from "@/assets/lottie/car_battery.json";
import iotAnimation from "@/assets/lottie/iot.json";

const lottieAnimations: Record<number, any> = {
  6: isometricData,
  7: dashboards,
  8: wifiPrinter,
  9: carBattery,
  10: iotAnimation,
};

// Map internal Lottie image paths to public URLs
const patchLottie = (data: any) => {
  if (!data || !data.assets) return data;
  const newData = JSON.parse(JSON.stringify(data));
  newData.assets.forEach((asset: any) => {
    if (asset.p) {
      // Ensure the asset path is correctly resolved relative to the public root
      asset.u = "/images/";
    }
  });
  return newData;
};

const patchedLottieAnimations: Record<number, any> = {
  6: patchLottie(isometricData),
  7: patchLottie(dashboards),
  8: patchLottie(wifiPrinter),
  9: patchLottie(carBattery),
  10: patchLottie(iotAnimation),
};

const serviceImages: Record<number, string> = {
  1: cctvImg,
  2: thermalImg,
  3: networkingImg,
  4: defaultImg,
  5: networkingImg,
  6: defaultImg,
  7: defaultImg,
  8: defaultImg,
  9: defaultImg,
  10: networkingImg,
  11: wifiImg,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export default function Services() {
  const { data: services, isLoading, error } = useServices();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-primary animate-spin" />
          <p className="text-gray-400 font-display tracking-widest uppercase text-sm">Loading Catalogue...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-6">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Unavailable</h2>
          <p className="text-gray-500">Unable to load services at this time. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase inline-block border-b-2 border-primary pb-2">
            Our Services
          </h1>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services?.map((service) => {
            const displayImage = serviceImages[service.id] || defaultImg;
            const isWhiteCard = [1, 11, 3, 2, 4, 5, 6, 7, 8, 9, 10].includes(service.id);
            const isLottieCard = [6, 7, 8, 9, 10].includes(service.id);
            const lottieData = patchedLottieAnimations[service.id];

            return (
              <Link key={service.id} href={`/services/${service.id}`}>
                <motion.div 
                  variants={item}
                  className={`group relative h-full border border-white/5 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center text-center shadow-xl ${isWhiteCard ? 'bg-white' : 'bg-[#1e293b]'}`}
                >
                  {!isWhiteCard && (
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                      <img src={displayImage} alt="" className="w-full h-full object-cover grayscale" />
                    </div>
                  )}
                  <div className="relative z-10 flex flex-col items-center h-full w-full">
                    {/* Icon / Animation */}
                    <div className={`flex items-center justify-center mb-6 transition-colors ${isWhiteCard ? 'w-full h-48' : 'w-32 h-32 rounded-full bg-[#0f172a]/80 group-hover:bg-primary/10 border border-white/5'}`}>
                      {isLottieCard ? (
                        <Lottie animationData={lottieData} loop={true} className="w-full h-full" />
                      ) : (
                        <ServiceIcon iconName={service.icon} className={isWhiteCard ? 'w-full h-full' : 'w-24 h-24 text-primary'} />
                      )}
                    </div>
                    
                    {/* Content */}
                    <h3 className={`text-2xl font-display font-bold mb-3 transition-colors uppercase ${isWhiteCard ? 'text-black' : 'text-white group-hover:text-primary'}`}>
                      {service.title}
                    </h3>
                    {!isWhiteCard && !isLottieCard && service.description && (
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {service.description}
                      </p>
                    )}
                    
                    <div className={`mt-auto flex items-center gap-2 text-sm font-bold ${isWhiteCard ? 'text-black' : 'text-primary'}`}>
                      View Details
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
