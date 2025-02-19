import React from "react";
import Card from "./Cards";

function CardList() {
  return (
    <>
      <div className="text-center p-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-700">
          Maha Kumbh Mela 2025
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Experience the world's largest spiritual gathering, where millions of
          devotees come together to take a sacred dip in the holy rivers,
          seek blessings, and immerse themselves in India's rich cultural heritage.
        </p>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-center">
        <Card
          img="https://cdn.shopify.com/s/files/1/0525/5285/9819/files/Maha_kumbh_mela_01_1024x1024.jpg?v=1736769922"
          title="Maha Kumbh Mela 2025"
          details="The grandest Hindu pilgrimage, held once every 12 years, where millions gather to take a sacred dip in the holy rivers."
        />
        <Card
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-ETV9SIb_nLeZpYPtd33rWQusBtiAKWi6g&s"
          title="Kumbh Mela Guide"
          details="Your ultimate guide to the Maha Kumbh Mela 2025 – important dates, rituals, accommodations, and must-visit places."
        />
        <Card
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6i1iBlVBiOcJv8h9xZZrFNyzr0qV4PGMQow&s"
          title="Spiritual Significance"
          details="A once-in-a-lifetime opportunity to experience spirituality, devotion, and cultural heritage at the largest religious gathering."
        />
        <Card
          img="https://cdn.shopify.com/s/files/1/0525/5285/9819/files/Maha_kumbh_mela_01_1024x1024.jpg?v=1736769922"
          title="Key Rituals & Holy Bath"
          details="Participate in the Shahi Snan, one of the most sacred rituals where saints and devotees take a dip in the holy river."
        />
        <Card
          img="/public/hero.jpeg"
          title="Akhadas & Saints"
          details="Meet Naga Sadhus, sages, and spiritual leaders from various Akhadas who gather to share wisdom and blessings."
        />
        <Card
          img="/public/hero2.jpg"
          title="Ganga Aarti Experience"
          details="Witness the mesmerizing Ganga Aarti, a divine ritual performed on the riverbanks with lamps, chants, and prayers."
        />
        <Card
          img="https://cdn.shopify.com/s/files/1/0525/5285/9819/files/Maha_kumbh_mela_01_1024x1024.jpg?v=1736769922"
          title="How to Reach & Stay"
          details="Plan your journey to the Kumbh Mela 2025 with information on transport, accommodations, and travel tips."
        />
        <Card
          img="https://media.istockphoto.com/id/1186151353/photo/kumbh-scenes-at-prayagraj.jpg?s=612x612&w=0&k=20&c=_miOMiPHp4tcfpqnibT-T0a7Suw-nFD6HzKg8XCAR8E="
          title="Local Attractions & Temples"
          details="Explore nearby temples, historic sites, and cultural hubs around the Kumbh Mela location."
        />
      </div>
    </>
  );
}

export default CardList;