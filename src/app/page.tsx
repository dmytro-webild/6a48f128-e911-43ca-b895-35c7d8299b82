"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Home } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmall"
        background="noise"
        cardStyle="subtle-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About",          id: "#about"},
        {
          name: "Amenities",          id: "#amenities"},
        {
          name: "Experiences",          id: "#experiences"},
        {
          name: "Gallery",          id: "#gallery"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/flat-glamping-logo_23-2149388576.jpg"
      logoAlt="Cozy Beachfront Villa Logo"
      brandName="Cozy Beachfront Villa"
      button={{
        text: "Book Now",        href: "#contact"}}
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      title="Your Tropical Paradise Awaits"
      description="Discover the magic of Zanzibar from Cozy Beachfront Villa, where luxury meets local charm. Wake up to ocean breezes, pristine sands, and endless tranquility."
      testimonials={[
        {
          name: "Amina S.",          handle: "@AminaTravels",          testimonial: "An absolutely magical stay! The villa offered breathtaking views and privacy, exactly what we needed. Zanzibar is a dream, and this villa made it perfect.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/asian-woman-talking-phone-beach_1303-15686.jpg"},
        {
          name: "David M.",          handle: "@IslandExplorer",          testimonial: "From the stunning infinity pool to the authentic Swahili touches, every moment was pure bliss. Truly a hidden gem on the coast of Zanzibar.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-man-relaxing-beach_107420-9877.jpg"},
        {
          name: "The Johnsons",          handle: "@FamilyGetaway",          testimonial: "Our family had an unforgettable experience. The kids loved the beach, and we cherished the serene evenings. Highly recommend Cozy Beachfront Villa!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-man-with-long-beard-wearing-hat-wearing-striped-shirt-showing-gesture-blue_1150-17102.jpg"},
        {
          name: "Chris P.",          handle: "@BeachVibes",          testimonial: "Absolutely stunning! The villa provides the perfect blend of luxury and authentic island life. Highly recommend booking a direct escape here.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-young-woman-beautiful-water-villa-maldives-island-travel-vacation-outdoor-shot_1232-4458.jpg"},
        {
          name: "Sophia G.",          handle: "@WanderlustSophia",          testimonial: "This villa is pure bliss. Waking up to the ocean every day was a dream come true. Zanzibar's beauty is unmatched, and this stay captured it perfectly.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/lady-ocean-summertime-woman-vacation_1232-3861.jpg"},
      ]}
      testimonialRotationInterval={5000}
      buttons={[
        {
          text: "Book Your Escape",          href: "#contact"},
        {
          text: "Explore The Villa",          href: "#about"},
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E543k7mmlNwQSu5VjRAqB31ICi/uploaded-1780582566790-3pex80b1.jpg"
      imageAlt="Luxury beachfront villa in Zanzibar with a private pool and ocean view"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Sanctuary"
      title="Experience Zanzibari Elegance"
      description="Cozy Beachfront Villa is a haven of peace, blending traditional Swahili architecture with modern comforts. Enjoy private access to the pristine white sands, panoramic ocean views, and the soothing rhythm of the Indian Ocean."
      subdescription="Each detail, from handcrafted furnishings to lush tropical gardens, invites you to unwind and immerse yourself in the authentic island experience. Your unforgettable retreat starts here."
      icon={Home}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E543k7mmlNwQSu5VjRAqB31ICi/uploaded-1780582566789-ony8kujo.jpg"
      imageAlt="Traditional Zanzibari architecture interior of Cozy Beachfront Villa"
      mediaAnimation="opacity"
    />
  </div>

  <div id="amenities" data-section="amenities">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Infinity Pool",          description: "Relax in our stunning infinity pool, seamlessly blending with the ocean horizon.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E543k7mmlNwQSu5VjRAqB31ICi/uploaded-1780582566789-z22aq9wv.jpg",          imageAlt: "Infinity pool overlooking the ocean"},
        {
          title: "Outdoor Rain Shower",          description: "Embrace the tropical air with our refreshing outdoor rain shower amidst lush greenery.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E543k7mmlNwQSu5VjRAqB31ICi/uploaded-1780582566789-o704d61l.jpg",          imageAlt: "Outdoor rain shower in a tropical setting"},
        {
          title: "High-Speed Wi-Fi",          description: "Stay connected with complimentary high-speed internet access throughout the villa.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-sitting-bed_23-2149647891.jpg",          imageAlt: "Wifi symbol with tropical background"},
        {
          title: "Gourmet Kitchen",          description: "A fully equipped modern kitchen awaits your culinary adventures, perfect for self-catering.",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-kitchen-interior-design_23-2150976544.jpg",          imageAlt: "Modern fully equipped kitchen"},
        {
          title: "Snorkeling Gear",          description: "Explore the vibrant underwater world right from your doorstep with complimentary snorkeling gear.",          imageSrc: "http://img.b2bpic.net/free-photo/bag-beach-accessories-kept-sand_1252-478.jpg",          imageAlt: "Snorkeling gear on a tropical beach"},
      ]}
      title="Thoughtfully Curated Amenities"
      description="Every detail at Cozy Beachfront Villa is designed for your ultimate comfort and enjoyment."
      tag="Villa Comforts"
    />
  </div>

  <div id="experiences" data-section="experiences">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "exp1",          name: "Stone Town Tour",          price: "Upon Request",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E543k7mmlNwQSu5VjRAqB31ICi/uploaded-1780582566790-qtztkjhw.jpg",          imageAlt: "Historic Stone Town streets"},
        {
          id: "exp2",          name: "Spice Farm Exploration",          price: "Upon Request",          imageSrc: "http://img.b2bpic.net/free-photo/african-children-enjoying-life_23-2151447874.jpg",          imageAlt: "Zanzibar spice farm"},
        {
          id: "exp3",          name: "Sunset Dhow Cruise",          price: "Upon Request",          imageSrc: "http://img.b2bpic.net/free-photo/mother-son-outdoors-sunset-with-copy-space_1249-612.jpg",          imageAlt: "Traditional Dhow boat at sunset"},
        {
          id: "exp4",          name: "Kite Surfing Lessons",          price: "Upon Request",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-posing-sitting-surfboard-ocean_72229-743.jpg",          imageAlt: "Person kitesurfing on the ocean"},
        {
          id: "exp5",          name: "Fresh Seafood Dining",          price: "Upon Request",          imageSrc: "http://img.b2bpic.net/free-photo/dried-smoked-fish-served-with-lemon-wooden-platter_140725-5801.jpg",          imageAlt: "Platter of fresh seafood"},
        {
          id: "exp6",          name: "Jozani Forest Excursion",          price: "Upon Request",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-holding-cocoa-bean_23-2149142855.jpg",          imageAlt: "Red Colobus monkeys in Jozani Forest"},
      ]}
      title="Immersive Local Experiences"
      description="Beyond the villa, Zanzibar beckons with unforgettable adventures and cultural discoveries tailored just for you."
      tag="Island Adventures"
    />
  </div>

  <div id="gallery" data-section="gallery">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Moments from Paradise"
      description="Explore the beauty and tranquility captured at Cozy Beachfront Villa and around Zanzibar."
      tag="Visual Journey"
      blogs={[
        {
          id: "gal1",          category: "Views",          title: "Sunrise on the Deck",          excerpt: "Wake up to breathtaking views as the sun paints the sky over the Indian Ocean.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E543k7mmlNwQSu5VjRAqB31ICi/uploaded-1780582566789-z22aq9wv.jpg",          imageAlt: "Sunrise view from the villa deck",          authorName: "Villa Team",          authorAvatar: "http://img.b2bpic.net/free-vector/flat-glamping-logo_23-2149388576.jpg",          date: "Jan 2024"},
        {
          id: "gal2",          category: "Interiors",          title: "Cozy Living Area",          excerpt: "Relax in our elegantly designed living space, blending comfort with Zanzibari charm.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E543k7mmlNwQSu5VjRAqB31ICi/uploaded-1780582566789-ony8kujo.jpg",          imageAlt: "Interior of the villa living area",          authorName: "Villa Team",          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ka9803",          date: "Feb 2024"},
        {
          id: "gal3",          category: "Interiors",          title: "Serene Bedroom Retreat",          excerpt: "Drift into peaceful slumber in our luxurious bedrooms, designed for ultimate relaxation.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E543k7mmlNwQSu5VjRAqB31ICi/uploaded-1780582566789-o704d61l.jpg",          imageAlt: "Bedroom interior with tropical decor",          authorName: "Villa Team",          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4xdkes",          date: "Mar 2024"},
        {
          id: "gal4",          category: "Outdoors",          title: "Beachfront Patio Bliss",          excerpt: "Enjoy direct access to the sands and panoramic ocean views from your private patio.",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E543k7mmlNwQSu5VjRAqB31ICi/uploaded-1780582566790-3pex80b1.jpg",          imageAlt: "Beachfront patio with seating",          authorName: "Villa Team",          authorAvatar: "http://img.b2bpic.net/free-photo/aerial-view-red-blue-beach-huts-rye-shoreline_1308-189441.jpg",          date: "Apr 2024"},
        {
          id: "gal5",          category: "Culture",          title: "Local Market Visit",          excerpt: "Immerse yourself in vibrant local culture with a visit to a bustling Zanzibari market.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sour-fresh-tangerines-with-lemons-plums-light-white-desk_140725-115437.jpg",          imageAlt: "Local market scene in Zanzibar",          authorName: "Villa Team",          authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=aasmxn",          date: "May 2024"},
        {
          id: "gal6",          category: "Experiences",          title: "Romantic Sunset Dinner",          excerpt: "Indulge in a private sunset dinner setup right on the beach, a truly magical experience.",          imageSrc: "http://img.b2bpic.net/free-photo/puts-glass-waiter-hand-gloves-worker-is-engaged-serving-table_146671-14409.jpg",          imageAlt: "Romantic sunset dinner setup on the beach",          authorName: "Villa Team",          authorAvatar: "http://img.b2bpic.net/free-photo/aerial-top-down-view-boat-navigating-broadbeach-waters-canal_1308-189365.jpg",          date: "Jun 2024"},
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Sarah & Tom R.",          imageSrc: "http://img.b2bpic.net/free-photo/young-smiling-happy-man-woman-sunglasses-sitting-sand-beach-taking-selfie-photo-phone-camera_285396-737.jpg"},
        {
          id: "t2",          name: "Jessica L.",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businesswoman-standing-airport_107420-63594.jpg"},
        {
          id: "t3",          name: "The Kim Family",          imageSrc: "http://img.b2bpic.net/free-photo/asian-young-happy-family-enjoy-vacation-beach-evening-dad-mom-kid-relax-running-together-near-sea-while-silhouette-sunset-lifestyle-travel-holiday-vacation-summer-concept_7861-2447.jpg"},
        {
          id: "t4",          name: "Michael S.",          imageSrc: "http://img.b2bpic.net/free-photo/handsome-shirtless-man-posing-with-wearing-swimming-goggles_23-2148221965.jpg"},
        {
          id: "t5",          name: "Eleanor & George V.",          imageSrc: "http://img.b2bpic.net/free-photo/trendy-woman-with-short-hair-hat-black-sunglasses-striped-blouse-smiling-holding-card-posing-with-grey-haired-man-with-camera-park_197531-19158.jpg"},
      ]}
      cardTitle="Cherished Guest Experiences"
      cardTag="Hear From Our Guests"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      text="Ready to escape to your dream beachfront villa? Inquire about your stay at Cozy Beachfront Villa and let us craft your perfect Zanzibar getaway. Enjoy guaranteed best rates and complimentary airport pickup when you book direct."
      buttons={[
        {
          text: "Inquire Now",          href: "mailto:info@cozybeachfrontvilla.com"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Explore",          items: [
            {
              label: "Home",              href: "#home"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Amenities",              href: "#amenities"},
          ],
        },
        {
          title: "Experiences",          items: [
            {
              label: "Local Tours",              href: "#experiences"},
            {
              label: "Photo Gallery",              href: "#gallery"},
            {
              label: "Guest Reviews",              href: "#testimonials"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "Book Direct",              href: "#contact"},
            {
              label: "Privacy Policy",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Cozy Beachfront Villa. All rights reserved."
      bottomRightText="Zanzibar beach villa | Tanzania vacation rental | oceanfront stay in Kiwengwa"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}