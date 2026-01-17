import { useRoute, Link } from "wouter";
import { useService } from "@/hooks/use-services";
import { motion } from "framer-motion";
import { ServiceIcon } from "@/components/ServiceIcon";
import { ArrowLeft, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

// Import generated images
import defaultImg from '@assets/stock_images/it_infrastructure_an_c2bc155e.jpg';

// Import new generated images
import img1 from '@assets/generated_images/modern_high-tech_cctv_security_surveillance_system_with_ai_monitoring..png';
import img2 from '@assets/generated_images/advanced_thermal_imaging_and_fire_detection_sensor_system..png';
import img3 from '@assets/generated_images/modern_enterprise_ip_intercom_and_ipbx_communication_system..png';
import img4 from '@assets/generated_images/facial_recognition_and_biometric_access_control_door_lock..png';
import img5 from '@assets/generated_images/professional_ip-based_public_address_speakers_in_a_modern_lobby..png';
import img6 from '@assets/generated_images/smart_boardroom_with_integrated_av_and_room_automation..png';
import img7 from '@assets/generated_images/modern_large-scale_high-resolution_led_video_wall..png';
import img8 from '@assets/generated_images/enterprise_it_hardware_setup_with_printers_and_laptops..png';
import img9 from '@assets/generated_images/enterprise_ups_and_battery_backup_system_in_a_data_center..png';
import img10 from '@assets/generated_images/cloud_computing_and_iot_data_visualization_dashboard..png';
import img11 from '@assets/generated_images/high-performance_network_signal_booster_and_mesh_antenna..png';

const serviceImages: Record<number, string> = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
  9: img9,
  10: img10,
  11: img11,
};

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:id");
  const id = params ? parseInt(params.id) : 0;
  const { data: service, isLoading, error } = useService(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] gap-4">
        <AlertCircle className="w-12 h-12 text-destructive" />
        <h2 className="text-xl font-bold text-white">Service Not Found</h2>
        <Link href="/services" className="text-primary hover:underline">Return to Catalogue</Link>
      </div>
    );
  }

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/services";
    }
  };

  const displayImage = serviceImages[service.id] || defaultImg;

  return (
    <div className="min-h-screen bg-[#0f172a] text-foreground">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Panel - Visual/Hero */}
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-screen bg-[#1e293b] overflow-hidden flex items-center justify-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${displayImage})` }}
          />
        </div>

        {/* Right Panel - Content */}
        <div className="lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-[#0f172a]">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8">
              {service.title}
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed mb-12 border-l-2 border-primary/30 pl-6">
              {service.description}
            </p>

            {service.detailedDescription && (
              <div className="mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-6 uppercase tracking-wider border-l-4 border-primary pl-4">
                  Overview
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
                  {service.detailedDescription}
                </p>
              </div>
            )}

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">Key Features & Benefits</h3>
              
              <ul className="space-y-4">
                {service.bullets.map((bullet, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className="mt-1 bg-primary/20 p-1 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-300 font-medium">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <a 
                href={`https://wa.me/919326144739?text=${encodeURIComponent(`Hi, I'm interested in inquiring about your ${service.title} service. Please provide more details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:brightness-110 active:scale-[0.99] transition-all">
                  Inquire About This Service
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
