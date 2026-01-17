import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import cctvAnimationUrl from "@/assets/cctv.dotlottie?url";
import networkAnimationUrl from "@/assets/network.dotlottie?url";
import techAnimationUrl from "@/assets/tech.dotlottie?url";
import thermalAnimationUrl from "@/assets/thermal.dotlottie?url";
import biometricsAnimationUrl from "@/assets/biometrics.dotlottie?url";
import paAnimationUrl from "@/assets/pa.dotlottie?url";
import { 
  Shield, 
  Server, 
  Wifi, 
  Video, 
  Flame, 
  Lock, 
  Cpu, 
  Globe, 
  HardDrive, 
  Activity, 
  Zap, 
  Radio, 
  Fingerprint, 
  Phone, 
  Megaphone, 
  MonitorPlay, 
  Projector, 
  Printer, 
  BatteryCharging, 
  Cloud 
} from "lucide-react";

interface ServiceIconProps {
  iconName: string;
  className?: string;
}

export function ServiceIcon({ iconName, className = "w-6 h-6" }: ServiceIconProps) {
  if (iconName.startsWith("lottie:")) {
    const animationName = iconName.split(":")[1];
    let animationUrl = "";
    
    if (animationName === "cctv") {
      animationUrl = cctvAnimationUrl;
    } else if (animationName === "network") {
      animationUrl = networkAnimationUrl;
    } else if (animationName === "tech") {
      animationUrl = techAnimationUrl;
    } else if (animationName === "thermal") {
      animationUrl = thermalAnimationUrl;
    } else if (animationName === "biometrics") {
      animationUrl = biometricsAnimationUrl;
    } else if (animationName === "pa") {
      animationUrl = paAnimationUrl;
    }

    if (animationUrl) {
      return (
        <div className={className}>
          <DotLottieReact
            src={animationUrl}
            autoplay
            loop
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      );
    }
  }

  // Map backend strings to Lucide components
  const icons: Record<string, React.ElementType> = {
    "cctv": Video,
    "flame": Flame,
    "lock": Lock,
    "server": Server,
    "wifi": Wifi,
    "shield": Shield,
    "harddrive": HardDrive,
    "globe": Globe,
    "fingerprint": Fingerprint,
    "zap": Zap,
    "radio": Radio,
    "activity": Activity,
    "phone": Phone,
    "megaphone": Megaphone,
    "monitor-play": MonitorPlay,
    "projector": Projector,
    "printer": Printer,
    "battery-charging": BatteryCharging,
    "cloud": Cloud,
    // Fallback
    "default": Cpu
  };

  const IconComponent = icons[iconName.toLowerCase()] || icons["default"];

  return <IconComponent className={className} />;
}
