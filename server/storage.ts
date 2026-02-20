import { type Service } from "@shared/schema";

export interface IStorage {
  // Services (Brochure Content)
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
}

export class MemStorage implements IStorage {
  private services: Service[];

  constructor() {
    this.services = [
      {
        id: 1,
        title: "AI-Powered Video Surveillance & Enterprise Networking",
        description: "Deployment of HD/IP surveillance systems with NVR/DVR integration, multi-site central monitoring, and AI analytics.",
        detailedDescription: "Deployment of HD/IP surveillance systems with NVR/DVR integration, multi-site central monitoring, and ONVIF-compliant camera configurations. Includes AI analytics (face detection, intrusion, object tracking), VLAN-based network segmentation, enterprise Wi-Fi, structured cabling, and LAN/WAN architecture with secure routing, switching, and rack-mounted server solutions.",
        bullets: [
          "HD / IP surveillance cameras with central monitoring",
          "AI-enabled analytics: face recognition, intrusion alerts",
          "Enterprise-grade Wi-Fi & LAN/WAN deployment",
          "Network security, server & rack solutions",
          "Wireless & Long-Range Connectivity",
          "Secure Network Architecture for CCTV",
          "Smart Video Management Systems"
        ],
        icon: "lottie:cctv"
      },
      {
        id: 2,
        title: "Intelligent Thermal Imaging & Smart Fire Detection",
        description: "Advanced heat-sensing technology with intelligent early-warning systems to protect critical infrastructure.",
        detailedDescription: "Our Thermal & Fire Detection solutions combine advanced heat-sensing technology with intelligent early-warning systems to protect people, infrastructure, and critical assets. We deploy AI-enabled thermal cameras, addressable fire alarm panels, and high-precision sensors that detect smoke, heat, or flame at the earliest stage—even in challenging environments where traditional detectors fail.",
        bullets: [
          "AI-Powered Fire & Smoke Detection",
          "Thermal Imaging Cameras (24/7 Heat Monitoring)",
          "Aspirating Smoke Detection (ASD – Early Warning Tech)",
          "Addressable Fire Alarm Systems",
          "Smart Fire Suppression Integration",
          "Wireless Fire Alarm Mesh Network",
          "Evacuation & Safety AI"
        ],
        icon: "lottie:thermal"
      },
      {
        id: 3,
        title: "Unified Intercom, IP-PBX & VoIP Communication",
        description: "IP-based Intercom & IPBX systems enabling centralized multi-extension communication and SIP voice routing.",
        detailedDescription: "IP-based Intercom & IPBX systems enable centralized multi-extension communication. SIP voice routing ensures secure and seamless calling across the facility. Video door phones and intercom units integrate directly over LAN/WAN. PoE endpoints and IPBX servers provide stable and uninterrupted operation.",
        bullets: [
          "SIP-based Intercom & IPBX communication architecture",
          "Multi-extension calling with centralized call management",
          "Video door phones with secure access communication",
          "Cloud telephony integration for remote call handling",
          "PoE-enabled indoor/outdoor intercom stations",
          "Automated IVR, call routing & call logs",
          "High-availability IPBX servers with failover support"
        ],
        icon: "lottie:tech"
      },
      {
        id: 4,
        title: "Biometric Authentication & Smart Access Control",
        description: "Biometric access systems with fingerprint, RFID, and facial recognition for secure, role-based access.",
        detailedDescription: "Deployment of biometric access systems with fingerprint, RFID, and facial recognition controllers for secure, role-based access. Supports centralized user management, time–attendance integration, and real-time event monitoring across multi-site locations. Includes IoT-enabled smart locks, mobile-app access, and encrypted credential storage. Features PoE-powered door terminals, fail-safe/fail-secure locking mechanisms, and secure TCP/IP communication for reliable, tamper-proof operations.",
        bullets: [
          "AI-driven Facial, Fingerprint & RFID Access Control",
          "Centralized Multi-Door Management with Role-Based Permissions",
          "Secure Mobile-App & QR Code Entry with Encrypted Credentials",
          "Integrated Attendance & Visitor Management with Real-Time Logs",
          "IoT-Enabled Smart Locks with Remote Lock/Unlock Capability",
          "PoE Access Controllers with Fail-Safe / Fail-Secure Mechanisms",
          "Instant Access Alerts & Comprehensive Audit Trails"
        ],
        icon: "lottie:biometrics"
      },
      {
        id: 5,
        title: "Advanced Public Address & Voice Evacuation Systems",
        description: "IP-based PA systems with multi-zone paging and centralized announcement control for facility-wide communication.",
        detailedDescription: "IP-based PA systems with multi-zone paging and centralized announcement control. SIP-enabled speakers, digital amplifiers, and PoE audio devices for seamless facility-wide communication. Supports emergency alerts, automated evacuation messaging, and real-time broadcasts over secure LAN/WAN. Redundant controllers with priority override ensure reliable and uninterrupted PA operations.",
        bullets: [
          "IP/SIP-based multi-zone paging for building-wide communication",
          "Centralized announcement control with priority override",
          "PoE-powered speakers and digital amplifiers for seamless deployment",
          "Automated emergency alerts and evacuation messaging",
          "Real-time broadcast capability over secure LAN/WAN networks",
          "Redundant controllers for uninterrupted PA operations",
          "Integration with fire systems, access control, and CCTV platforms"
        ],
        icon: "lottie:pa"
      },
      {
        id: 6,
        title: "Intelligent Audio-Visual & Smart Room Automation",
        description: "Smart room automation systems designed to enhance collaboration, communication, and user experience.",
        detailedDescription: "We offer cutting-edge Audio-Visual integration and smart room automation systems designed to enhance collaboration, communication, and user experience. Our solutions include interactive displays, conference room AV setups, digital signage, integrated sound systems, lighting and climate automation, and centralized control platforms. With scalable and intuitive technologies, we transform meeting rooms, classrooms, auditoriums, and commercial spaces into intelligent environments that deliver seamless performance and operational efficiency.",
        bullets: [
          "Smart Meeting Room Integration",
          "LED Displays, Projectors & Interactive Panels",
          "Digital Signage & Video Walls",
          "Boardroom & Training Room AV Design",
          "Smart Lighting Control & Dimming Systems",
          "Motorized Curtains & Blinds Automation",
          "Occupancy Sensors & Auto-Energy Management"
        ],
        icon: "monitor-play"
      },
      {
        id: 7,
        title: "High-Resolution Projection & Digital Display Solutions",
        description: "Advanced projector and display solutions for corporate boardrooms, classrooms, and retail showrooms.",
        detailedDescription: "We provide a wide range of advanced projector and display solutions designed for corporate boardrooms, classrooms, retail showrooms, control rooms, and large-scale events. Our expertise includes installation, calibration, and integration of LED walls, interactive displays, laser projectors, and video conferencing displays. With high-resolution visuals and reliable performance, we ensure seamless presentations and impactful visual experiences tailored to your space and requirements.",
        bullets: [
          "LED / LCD / Smart TV Display Integration",
          "Commercial Display & Video Wall Solutions",
          "AI-Based Smart Classroom Displays",
          "Interactive & Touch Display Boards",
          "Retail Digital Signage & Kiosk Displays",
          "Edge Blending & Projection Mapping",
          "Cloud & IoT-Based Remote Monitoring"
        ],
        icon: "projector"
      },
      {
        id: 8,
        title: "Enterprise IT Hardware / Software Solutions",
        description: "Complete IT hardware solutions including printers, desktops, laptops, and accessories with maintenance support.",
        detailedDescription: "We specialize in providing complete IT hardware solutions, including Printers, Desktops, Laptops, and Accessories. Our services cover new product sales, AMC support, repair & maintenance, software installation, and parts replacement for all major brands. With a skilled technical team and quick response service model, we ensure smooth operations and minimal downtime for our customers. We are committed to delivering reliable products, cost-effective solutions, and excellent after-sales support to businesses and individuals.",
        bullets: [
          "Printer Cartridge / Toner Supply Management",
          "Annual Maintenance Contracts (AMC)",
          "Asset Management & Device Inventory Tracking",
          "Green IT Solutions (Energy Efficiency & E-Waste Guidance)",
          "High-end Workstation Setup for Power Users",
          "Integrated Peripheral Support (Scanners, Plotters, POS Devices)"
        ],
        icon: "printer"
      },
      {
        id: 9,
        title: "Smart Power Backup, UPS & Energy Storage",
        description: "Reliable power backup solutions with advanced monitoring to ensure uninterrupted operations.",
        detailedDescription: "Reliable power backup solutions to ensure uninterrupted operations for critical infrastructure. Comprehensive UPS and battery management systems. Includes online & line-interactive UPS systems, battery health monitoring, and enterprise power backup solutions with remote alerts.",
        bullets: [
          "Online & Line-Interactive UPS Systems",
          "Battery Health Monitoring & Management",
          "Enterprise Power Backup Solutions",
          "Surge Protection & Voltage Stabilization",
          "Scalable Battery Banks for Extended Runtime",
          "Remote Monitoring & Alerts",
          "Eco-friendly & Energy Efficient Power Systems"
        ],
        icon: "battery-charging"
      },
      {
        id: 10,
        title: "IoT-Enabled Cloud, Software & Automation Platforms",
        description: "Smart device integration with real-time data monitoring and secure cloud infrastructure.",
        detailedDescription: "Smart device integration with real-time data monitoring and automation. Secure cloud infrastructure for scalable storage and remote management. Custom software applications to streamline workflows and enhance system performance. End-to-end digital solutions enabling efficient, connected, and data-driven operations.",
        bullets: [
          "Serverless Computing",
          "Hybrid & Multi-Cloud Architecture",
          "Scalable storage & computing",
          "Real-time data dashboards",
          "Secure cloud backups",
          "Cloud migration"
        ],
        icon: "cloud"
      },
      {
        id: 11,
        title: "High-Performance Network Expansion & Signal Optimization",
        description: "Enhance network performance by improving speed, stability, and coverage across your facility.",
        detailedDescription: "Enhances your existing network performance by improving speed, stability, and coverage. Optimizes bandwidth distribution, reduces latency, and eliminates dead zones using advanced signal-routing and load-balancing technology.",
        bullets: [
          "AI-Optimized Traffic Routing",
          "Edge-Based Signal Amplification",
          "Adaptive Mesh Networking",
          "Network Security Boost (Zero Trust + Threat Detection)",
          "Wi-Fi 6E / Wi-Fi 7 Performance Upgrade",
          "Wireless Mesh Network Optimization"
        ],
        icon: "lottie:network"
      }
    ];
  }

  async getServices(): Promise<Service[]> {
    return this.services;
  }

  async getService(id: number): Promise<Service | undefined> {
    return this.services.find(s => s.id === id);
  }
}

export const storage = new MemStorage();
