/**
 * Centralized Editable Wedding Information Configuration
 * 
 * All wedding details, dates, venues, coordinates, messages, family hosts,
 * and gallery images can be customized directly from this file.
 */

export interface WeddingData {
  brideName: string;
  groomName: string;
  tagline: string;
  shortSubtitle: string;
  weddingDateISO: string; // ISO string for countdown calculation
  weddingDateFormatted: string;
  weddingDay: string;
  traditionalDate: string;
  traditionalDateMalayalam: string;
  groomParents: string;
  groomHouse: string;
  contactNumber: string;
  contactName: string;
  contactWhatsApp: string;
  ceremony: {
    title: string;
    malayalamTitle: string;
    date: string;
    day: string;
    time: string;
    muhurtham: string;
    venueName: string;
    subVenue: string;
    fullAddress: string;
    mapsUrl: string;
    description: string;
  };
  reception: {
    title: string;
    malayalamTitle: string;
    date: string;
    day: string;
    time: string;
    venueName: string;
    fullAddress: string;
    mapsUrl: string;
    description: string;
  };
  invitationMessage: {
    heading: string;
    bodyParagraphs: string[];
    malayalamSnippet: string;
    closingBlessing: string;
  };
  coupleStory: {
    heading: string;
    subheading: string;
    quote: string;
    brideBio: string;
    groomBio: string;
  };
  familyBlessings: {
    heading: string;
    subheading: string;
    hostName: string;
    hostRelation: string;
    houseName: string;
    place: string;
    note: string;
  };
  gallery: Array<{
    id: string;
    url: string;
    caption: string;
    aspect: 'portrait' | 'landscape' | 'square';
    alt: string;
  }>;
  audio: {
    title: string;
    artist: string;
    autoPlayPrompt: string;
  };
}

export const weddingData: WeddingData = {
  brideName: "Sreekutty",
  groomName: "Pranav",
  tagline: "Two hearts. One beautiful beginning.",
  shortSubtitle: "We invite you to witness our sacred union and shower us with your blessings.",
  
  // 13 September 2026 at 08:45 AM Indian Standard Time (UTC+5:30)
  weddingDateISO: "2026-09-13T08:45:00+05:30",
  weddingDateFormatted: "13 September 2026",
  weddingDay: "Sunday",
  traditionalDate: "1202 Chingam 28",
  traditionalDateMalayalam: "1202 ചിങ്ങം 28",

  groomParents: "Shri. Sivan K. K. & Smt. Sajitha Sivan",
  groomHouse: "Kuppatt House, Purakkad",
  contactNumber: "9447918719",
  contactName: "Shri. Sivan K. K.",
  contactWhatsApp: "919447918719",

  ceremony: {
    title: "The Wedding Ceremony",
    malayalamTitle: "വിവാഹ മുഹൂർത്തം",
    date: "13 September 2026",
    day: "Sunday",
    time: "Between 8:45 AM and 9:30 AM",
    muhurtham: "8:45 AM – 9:30 AM",
    venueName: "Chengaloor Melchurath Sreekurumba Bhagavathi Temple",
    subVenue: "Sooryagramam",
    fullAddress: "Chengaloor Melchurath Sreekurumba Bhagavathi Temple, Sooryagramam, Kerala",
    mapsUrl: "https://maps.google.com/?q=Chengaloor+Melchurath+Sreekurumba+Bhagavathi+Temple+Sooryagramam",
    description: "The sacred traditional wedding rituals and auspicious Muhurtham ceremony performed amidst Vedic hymns and divine blessings."
  },

  reception: {
    title: "The Wedding Reception",
    malayalamTitle: "സ്നേഹവിരുന്ന്",
    date: "13 September 2026",
    day: "Sunday",
    time: "Following the Wedding Ceremony",
    venueName: "Chengaloor Bamburaj Auditorium",
    fullAddress: "Chengaloor Bamburaj Auditorium, Chengaloor, Thrissur, Kerala",
    mapsUrl: "https://maps.google.com/?q=Chengaloor+Bamburaj+Auditorium",
    description: "Join us with your family for the traditional grand celebratory wedding feast (Sadhya) and share your warm wishes."
  },

  invitationMessage: {
    heading: "Together with our Families",
    bodyParagraphs: [
      "With the divine grace and blessings of the Almighty, we warmly invite you and your family to celebrate the auspicious wedding of",
      "As they tie the sacred knot and embark upon a lifetime of love, companionship, and shared dreams, your esteemed presence and heartfelt blessings will make this joyous occasion complete.",
      "We look forward to welcoming you to both the sacred ceremony at the temple and the celebratory reception that follows."
    ],
    malayalamSnippet: "ഞങ്ങളുടെ മകൾ ശ്രീകുട്ടിയും പ്രണവും തമ്മിലുള്ള വിവാഹ മംഗളകർമ്മങ്ങളിലേക്കും തുടർന്ന് നടക്കുന്ന സ്നേഹവിരുന്നിലേക്കും താങ്കളെയും കുടുംബത്തെയും സാദരം ക്ഷണിക്കുന്നു.",
    closingBlessing: "With best compliments and warm regards from all family members, relatives, and well-wishers."
  },

  coupleStory: {
    heading: "A Union Blessed by Tradition",
    subheading: "A New Chapter of Love & Harmony",
    quote: "“In the sacred glow of the Nilavilakku and the sweet fragrance of jasmine, two souls unite to walk the path of life hand in hand.”",
    brideBio: "Beloved daughter, stepping gracefully into a lifetime of cherished vows and happiness.",
    groomBio: "Son of Shri. Sivan K. K. & Smt. Sajitha Sivan (Kuppatt House, Purakkad), beginning this sacred journey with devotion and joy."
  },

  familyBlessings: {
    heading: "With Love & Blessings from the Family",
    subheading: "Cordially Invited By",
    hostName: "Shri. Sivan K. K. & Smt. Sajitha Sivan",
    hostRelation: "Parents of the Groom",
    houseName: "Kuppatt House",
    place: "Purakkad",
    note: "For travel guidance, auspicious timings, or venue inquiries, please feel free to reach out."
  },

  gallery: [
    {
      id: "1",
      url: "/images/couple_hero_portrait_1787138053178.jpeg",
      caption: "Sreekutty & Pranav • Together in golden harmony",
      aspect: "portrait",
      alt: "Sreekutty and Pranav wedding portrait in traditional Kerala Kasavu attire"
    },
    {
      id: "2",
      url: "/images/couple_candid_smile_1787138065161.jpg",
      caption: "Shared smiles and pure joy as the sacred day draws near",
      aspect: "landscape",
      alt: "Kerala wedding couple smiling together happily"
    },
    {
      id: "3",
      url: "/images/couple_traditional_hands_1787138078852.jpg",
      caption: "Sacred bond of togetherness, adorned with fragrant jasmine",
      aspect: "portrait",
      alt: "Close up of couple holding hands with traditional wedding garland"
    },
    {
      id: "4",
      url: "/images/temple_ceremony_ambiance_1787138090184.jpg",
      caption: "Chengaloor Melchurath Temple • A sacred abode of divine blessings",
      aspect: "landscape",
      alt: "Traditional Kerala temple courtyard illuminated with Nilavilakku lamps"
    }
  ],

  audio: {
    title: "Traditional Kerala Wedding Shehnai & Nadaswaram Raga",
    artist: "Auspicious Temple Harmony",
    autoPlayPrompt: "Tap to hear traditional wedding music"
  }
};
