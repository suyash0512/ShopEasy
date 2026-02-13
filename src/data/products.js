// ===== IMPORT PRODUCT IMAGES =====
import headphones from "../assets/headphones.jpg";
import watch from "../assets/watch.jpg";
import mouse from "../assets/gamingmouse.jpg";
import keyboard from "../assets/keyboard.jpg";
import speaker from "../assets/speaker.jpg";
import laptopStand from "../assets/laptopstand.jpg";
import powerBank from "../assets/powerbank.jpg";
import webcam from "../assets/webcam.jpg";
import earbuds from "../assets/earbuds.jpg";
import monitor from "../assets/monitor.jpg";
import backpack from "../assets/backpack.jpg";
import deskLamp from "../assets/desklamp.jpg";
import headset from "../assets/headset.jpg";
import tripod from "../assets/tripod.jpg";
import router from "../assets/router.jpg";
import ssd from "../assets/ssd.jpg";
import usbHub from "../assets/usbhub.jpg";
import charger from "../assets/charger.jpg";
import hdmi from "../assets/hdmi.jpg";
import mousepad from "../assets/mousepad.jpg";
import coolingPad from "../assets/coolingpad.jpg";
import smartBulb from "../assets/smartbulb.jpg";
import smartPlug from "../assets/smartplug.jpg";
import tabletStand from "../assets/tabletstand.jpg";
import fitnessBand from "../assets/fitnessband.jpg";
import flashDrive from "../assets/flashdrive.jpg";
import ethernet from "../assets/ethernet.jpg";
import microphone from "../assets/microphone.jpg";
import projector from "../assets/projector.jpg";
import printer from "../assets/printer.jpg";

// ===== PRODUCTS DATA =====
export const products = [
  { id: 1, title: "Wireless Headphones", price: 1999, description: "High quality wireless headphones with noise cancellation.", image: headphones, rating: 4.5, inStock: true },
  { id: 2, title: "Smart Watch", price: 2999, description: "Smart watch with fitness tracking and notifications.", image: watch, rating: 4.2, inStock: true },
  { id: 3, title: "Gaming Mouse", price: 1499, description: "Ergonomic gaming mouse with customizable RGB lighting.", image: mouse, rating: 4.7, inStock: false },
  { id: 4, title: "Mechanical Keyboard", price: 3499, description: "Mechanical keyboard with tactile switches and RGB backlight.", image: keyboard, rating: 4.8, inStock: true },
  { id: 5, title: "Bluetooth Speaker", price: 2499, description: "Portable Bluetooth speaker with deep bass and clear sound.", image: speaker, rating: 4.1, inStock: true },
  { id: 6, title: "Laptop Stand", price: 1299, description: "Aluminium laptop stand for better posture and cooling.", image: laptopStand, rating: 4.3, inStock: false },
  { id: 7, title: "Power Bank 20000mAh", price: 1999, description: "High capacity power bank with fast charging support.", image: powerBank, rating: 4.6, inStock: true },
  { id: 8, title: "Full HD Webcam", price: 2199, description: "1080p webcam with built-in microphone for video calls.", image: webcam, rating: 4.0, inStock: true },
  { id: 9, title: "Wireless Earbuds", price: 2799, description: "True wireless earbuds with active noise cancellation.", image: earbuds, rating: 4.4, inStock: true },
  { id: 10, title: "24-inch Monitor", price: 10999, description: "Full HD monitor with slim bezel and vibrant display.", image: monitor, rating: 4.9, inStock: false },
  { id: 11, title: "Laptop Backpack", price: 2499, description: "Water-resistant backpack with padded laptop compartment.", image: backpack, rating: 4.3, inStock: true },
  { id: 12, title: "LED Desk Lamp", price: 1399, description: "Adjustable LED desk lamp with brightness control.", image: deskLamp, rating: 4.2, inStock: true },
  { id: 13, title: "Gaming Headset", price: 2299, description: "Over-ear gaming headset with surround sound.", image: headset, rating: 4.6, inStock: true },
  { id: 14, title: "Mobile Tripod", price: 999, description: "Lightweight tripod for mobile photography and video.", image: tripod, rating: 3.9, inStock: false },
  { id: 15, title: "WiFi Router", price: 1899, description: "High-speed WiFi router for stable internet connection.", image: router, rating: 4.4, inStock: true },
  { id: 16, title: "Portable SSD 500GB", price: 6999, description: "Ultra-fast portable SSD for quick file transfers.", image: ssd, rating: 4.8, inStock: true },
  { id: 17, title: "USB-C Hub", price: 1799, description: "Multi-port USB-C hub with HDMI and USB support.", image: usbHub, rating: 4.1, inStock: true },
  { id: 18, title: "Fast Charger", price: 1599, description: "Fast charging adapter compatible with multiple devices.", image: charger, rating: 4.0, inStock: false },
  { id: 19, title: "HDMI Cable", price: 399, description: "High-speed HDMI cable supporting Full HD and 4K.", image: hdmi, rating: 3.8, inStock: true },
  { id: 20, title: "Gaming Mouse Pad", price: 699, description: "Large gaming mouse pad with smooth surface.", image: mousepad, rating: 4.2, inStock: true },
  { id: 21, title: "Laptop Cooling Pad", price: 1599, description: "Cooling pad with dual fans to prevent overheating.", image: coolingPad, rating: 4.3, inStock: true },
  { id: 22, title: "Smart Bulb", price: 899, description: "WiFi smart bulb with app and voice control.", image: smartBulb, rating: 4.5, inStock: false },
  { id: 23, title: "Smart Plug", price: 1099, description: "Control home appliances remotely using smart plug.", image: smartPlug, rating: 4.4, inStock: true },
  { id: 24, title: "Tablet Stand", price: 799, description: "Adjustable stand for tablets and large phones.", image: tabletStand, rating: 4.0, inStock: true },
  { id: 25, title: "Fitness Band", price: 1999, description: "Fitness band with heart rate and sleep tracking.", image: fitnessBand, rating: 4.6, inStock: true },
  { id: 26, title: "USB Flash Drive 1TB", price: 1199, description: "High-speed USB flash drive for data storage.", image: flashDrive, rating: 4.2, inStock: false },
  { id: 27, title: "Ethernet Cable", price: 299, description: "High-speed ethernet cable for wired connectivity.", image: ethernet, rating: 3.7, inStock: true },
  { id: 28, title: "USB Microphone", price: 2499, description: "USB microphone for recording and streaming.", image: microphone, rating: 4.5, inStock: true },
  { id: 29, title: "Mini Projector", price: 7999, description: "Portable mini projector for home entertainment.", image: projector, rating: 4.7, inStock: true },
  { id: 30, title: "All-in-One Printer", price: 12999, description: "Multi-function printer for home and office use.", image: printer, rating: 4.3, inStock: false }
];
