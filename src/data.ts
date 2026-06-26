/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, GalleryItem, Testimonial } from './types';

// High-quality, reliable CDN images from Unsplash representing master joinery work
const joineryHero = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop';
const bespokeStaircase = 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop';
const timberDecking = 'https://images.unsplash.com/photo-1595514535415-bc4e8e604085?q=80&w=800&auto=format&fit=crop';

export const COMPANY_INFO = {
  name: 'LCG Joinery',
  tagline: 'All aspects of Joinery with 20+ years experience.',
  experience: '20+ Years',
  location: 'South Yorkshire, Doncaster, United Kingdom',
  servingAreas: ['Doncaster', 'Sheffield', 'Rotherham', 'Barnsley', 'Worksop', 'South Yorkshire'],
  phone: '07496 513727',
  phoneFormatted: '07496 513727',
  email: 'LCGJoinery@gmail.com',
  heroBg: joineryHero,
  facebookUrl: 'https://facebook.com', // placeholder link for general trust building
  whatsappUrl: 'https://wa.me/447496513727',
};

export const SERVICES: Service[] = [
  {
    id: 'kitchens-bedrooms',
    title: 'Custom Kitchens & Bedrooms',
    description: 'Fully bespoke kitchen planning, supply, and expert installation tailored to your space.',
    longDescription: 'Turn your culinary dreams into reality. We handle everything from hand-crafted bespoke cabinetry to precision fitting of pre-manufactured kitchens, custom larders, integrated appliances, and premium solid wood or laminate worktops. We also design and build luxury custom wardrobes and bedroom storage solutions.',
    iconName: 'ChefHat',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'doors-windows-staircases',
    title: 'Doors, Windows & Staircases',
    description: 'Beautiful timber staircases, bespoke handrails, and perfect door installation.',
    longDescription: 'Make a lasting impression with hand-fitted internal and external doors, custom timber frame windows, and architectural staircases. Whether you need a modern oak and glass staircase renovation, structural spindles, or heavy duty solid timber front doors, we bring precision and structural integrity to every joint.',
    iconName: 'DoorOpen',
    image: bespokeStaircase,
  },
  {
    id: 'bespoke-furniture',
    title: 'Bespoke Furniture',
    description: 'Custom fitted wardrobes, alcove shelving, storage, and handmade furniture.',
    longDescription: 'Maximize every corner of your home with tailored furniture that fits your lifestyle. We craft beautiful alcove units, custom floating shelving, fitted media walls, unique storage solutions, and freestanding solid timber tables designed to become family heirlooms.',
    iconName: 'Hammer',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'decking-pergolas',
    title: 'Timber Decking & Pergolas',
    description: 'Luxury outdoor living spaces, premium timber decking, and custom wooden pergolas.',
    longDescription: 'Extend your living space into the outdoors with premium timber decking and bespoke pergolas. Designed to weather the British climate, our outdoor timber works are built using treated timber or composite boards, featuring flawless joins, durable framing, and stunning timber features.',
    iconName: 'Fence',
    image: timberDecking,
  },
  {
    id: 'garden-buildings',
    title: 'Garden Buildings & Sheds',
    description: 'Custom home offices, summer houses, high-end sheds, and bespoke outbuildings.',
    longDescription: 'Enhance your garden with high-end timber buildings. From fully insulated, double-glazed outdoor home offices to durable custom sheds and leisure summerhouses, we build custom structural garden assets from scratch with premium timber cladding and solid roofing.',
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'internal-external',
    title: 'Internal & External Joinery',
    description: 'Architraves, skirting boards, wall panelling, flooring, fascias, and soffits.',
    longDescription: 'The finishing touches that define a home. Our internal joinery includes skirting boards, decorative wall panelling, architraves, picture rails, and premium engineered wood or solid wood flooring. Our external joinery protects your property with custom cladding, timber fascias, and structural bargeboards.',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'renovations',
    title: 'Renovations & Refurbishments',
    description: 'Complete property carpentry upgrades, joist repairs, and loft boarding.',
    longDescription: 'Breathing new life into older properties. We perform structural timber work, roof joist repairs, wall partitioning, ceiling lowering, loft boarding, and general timber renovations to turn dated spaces into structurally sound, modern rooms.',
    iconName: 'Layout',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'commercial',
    title: 'Commercial Joinery',
    description: 'Office fit-outs, shop counters, restaurant timber fixtures, and partition walls.',
    longDescription: 'Reliable joinery services for businesses in Doncaster and South Yorkshire. We specialize in high-quality shopfitting, custom bars and counters, reception desks, partition walls, and durable commercial timber installations that withstand high foot traffic.',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Luxury Bespoke Oak Staircase',
    category: 'Staircases',
    imageUrl: bespokeStaircase,
    description: 'Crafted solid oak staircase featuring sleek glass balustrades and integrated LED channel lighting.',
  },
  {
    id: 'g2',
    title: 'Premium Contemporary Fitted Kitchen',
    category: 'Kitchens',
    imageUrl: joineryHero,
    description: 'Custom painted shaker-style cabinets with brass handles, complete with an integrated solid oak kitchen island.',
  },
  {
    id: 'g3',
    title: 'Custom Timber Decking & Pergola',
    category: 'Outdoor',
    imageUrl: timberDecking,
    description: 'Seamless raised treated timber deck with a bespoke hand-jointed modern cedar pergola for outdoor dining.',
  },
  {
    id: 'g4',
    title: 'Fitted Living Room Alcove Units',
    category: 'Bespoke Furniture',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    description: 'Traditional twin alcove units with integrated warm floating shelves and shaker cabinet doors below.',
  },
  {
    id: 'g5',
    title: 'Bespoke Timber Garden Office',
    category: 'Garden Buildings',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
    description: 'Fully insulated premium cedar cladding garden room with double glazing and custom timber deck wrap.',
  },
  {
    id: 'g6',
    title: 'Crafted Hardwood Main Entry Door',
    category: 'Doors & Windows',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    description: 'Solid walnut bespoke external door with secure five-lever deadlock mortice and brushed steel hardware.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Robert Harris',
    location: 'Doncaster',
    text: 'LCG Joinery fitted our custom kitchen last month and did an absolutely incredible job. The attention to detail around the crown moulding and the solid oak worktop joints is outstanding. Very professional, tidy, and finished on schedule.',
    rating: 5,
    project: 'Custom Shaker Kitchen Fitting',
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    location: 'Sheffield',
    text: 'We had an old wooden banister replaced with a modern oak and glass staircase. It has completely transformed our hallway! You can tell LCG has 20+ years of joinery experience – the handrail curves and joints are flawless.',
    rating: 5,
    project: 'Bespoke Oak & Glass Staircase',
  },
  {
    id: 't3',
    name: 'David Moore',
    location: 'Rotherham',
    text: 'Highly recommend LCG Joinery. They constructed a large timber deck and pergola in our garden. Very strong construction, completely level despite our sloping garden, and beautifully finished. A true tradesman.',
    rating: 5,
    project: 'Cedar Pergola & Redwood Decking',
  },
  {
    id: 't4',
    name: 'Claire Thomson',
    location: 'Barnsley',
    text: 'We hired them for alcove shelving and media cupboards. Communication was fantastic, price was very competitive, and the clean finish they achieved is second to none. We will definitely be using LCG for our future renovation work.',
    rating: 5,
    project: 'Custom Living Room Alcoves',
  },
];
