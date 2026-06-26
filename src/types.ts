/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  project: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  location: string;
  message: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}
