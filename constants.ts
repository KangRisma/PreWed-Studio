
export type StyleOption = {
  id: string;
  name_id: string;
  name_en: string;
};

export const PHOTO_TYPES: StyleOption[] = [
  { id: 'pre-wedding', name_id: 'Pre-wedding', name_en: 'Pre-wedding' },
  { id: 'wedding', name_id: 'Wedding', name_en: 'Wedding' },
];

export const OTHER_OPTION: StyleOption = { id: 'other', name_id: 'Lainnya (Tulis Sendiri)...', name_en: 'Other (Write your own)...' };
export const RANDOM_OUTFIT_OPTION: StyleOption = { id: 'random-outfit', name_id: 'Pakaian Acak (Kejutan dari AI)', name_en: 'Random Outfit (AI Surprise)' };
export const RANDOM_POSE_OPTION: StyleOption = { id: 'random-pose', name_id: 'Pose Acak (Kejutan dari AI)', name_en: 'Random Pose (AI Surprise)' };
export const RANDOM_BACKGROUND_OPTION: StyleOption = { id: 'random-background', name_id: 'Latar Acak (Kejutan dari AI)', name_en: 'Random Background (AI Surprise)' };
export const RANDOM_LIGHTING_OPTION: StyleOption = { id: 'random-lighting', name_id: 'Cahaya Acak (Kejutan dari AI)', name_en: 'Random Lighting (AI Surprise)' };


// === PRE-WEDDING STYLES ===
export const PREWEDDING_OUTFIT_STYLES: StyleOption[] = [
    RANDOM_OUTFIT_OPTION,
    { id: 'pw-outfit-casual', name_id: 'Kasual: Kaus & Jeans', name_en: 'Casual: T-shirt & Jeans' },
    { id: 'pw-outfit-smart-casual', name_id: 'Smart Casual: Kemeja & Celana Chino', name_en: 'Smart Casual: Shirt & Chino Pants' },
    { id: 'pw-outfit-bohemian', name_id: 'Bohemian: Dress Flowy & Kemeja Linen', name_en: 'Bohemian: Flowy Dress & Linen Shirt' },
    { id: 'pw-outfit-vintage', name_id: 'Vintage: Gaya Retro 70-an', name_en: 'Vintage: 70s Retro Style' },
    { id: 'pw-outfit-formal', name_id: 'Formal: Jas & Gaun Koktail', name_en: 'Formal: Suit & Cocktail Dress' },
    { id: 'pw-outfit-uniform', name_id: 'Seragam Profesi (cth: dokter, pilot)', name_en: 'Professional Uniforms (e.g., doctor, pilot)' },
    { id: 'pw-outfit-traditional', name_id: 'Pakaian Adat Daerah', name_en: 'Traditional Regional Attire' },
    { id: 'pw-outfit-sporty', name_id: 'Pakaian Olahraga (cth: basket, tenis)', name_en: 'Sportswear (e.g., basketball, tennis)' },
    { id: 'pw-outfit-monochrome', name_id: 'Monokromatik: Pakaian serba putih/hitam', name_en: 'Monochromatic: All-white/black outfits' },
    { id: 'pw-outfit-earth-tone', name_id: 'Earth Tone: Warna-warna alam', name_en: 'Earth Tone Colors' },
    { id: 'pw-outfit-pastel', name_id: 'Pastel: Warna-warna lembut', name_en: 'Pastel Colors' },
    { id: 'pw-outfit-edgy', name_id: 'Edgy: Jaket Kulit & Boots', name_en: 'Edgy: Leather Jackets & Boots' },
    { id: 'pw-outfit-winter', name_id: 'Musim Dingin: Sweater & Mantel', name_en: 'Winter Wear: Sweaters & Coats' },
    { id: 'pw-outfit-beach', name_id: 'Pantai: Kemeja Hawaii & Sundress', name_en: 'Beachwear: Hawaiian Shirt & Sundress' },
    { id: 'pw-outfit-pajamas', name_id: 'Piyama Sutra (indoor, nyaman)', name_en: 'Cozy Indoor: Silk Pajamas' },
    { id: 'pw-outfit-hanbok-kimono', name_id: 'Hanbok/Kimono Tradisional', name_en: 'Traditional Hanbok/Kimono' },
    { id: 'pw-outfit-streetwear', name_id: 'Gaya Streetwear: Hoodie & Sneakers', name_en: 'Streetwear: Hoodies & Sneakers' },
    { id: 'pw-outfit-themed', name_id: 'Pakaian Bertema (cth: bajak laut)', name_en: 'Themed Outfits (e.g., pirates)' },
    { id: 'pw-outfit-adventurer', name_id: 'Petualang: Kargo & Sepatu Hiking', name_en: 'Adventurer: Cargo & Hiking Boots' },
    { id: 'pw-outfit-classic', name_id: 'Elegan Klasik: Kemeja putih & rok/celana bahan', name_en: 'Classic Elegant: White shirt & skirt/trousers' },
    OTHER_OPTION,
];

export const PREWEDDING_POSE_STYLES: StyleOption[] = [
    RANDOM_POSE_OPTION,
    { id: 'pw-holding-hands-walking', name_id: 'Bergandengan Tangan Sambil Berjalan', name_en: 'Holding Hands While Walking' },
    { id: 'pw-forehead-kiss', name_id: 'Ciuman di Kening', name_en: 'Forehead Kiss' },
    { id: 'pw-back-hug', name_id: 'Pelukan dari Belakang', name_en: 'Back Hug' },
    { id: 'pw-dancing-twirling', name_id: 'Menari & Berputar', name_en: 'Dancing & Twirling' },
    { id: 'pw-looking-at-each-other', name_id: 'Saling Menatap Penuh Cinta', name_en: 'Looking Lovingly at Each Other' },
    { id: 'pw-sitting-on-bench', name_id: 'Duduk Santai di Bangku Taman', name_en: 'Sitting Relaxed on a Park Bench' },
    { id: 'pw-picnic-relax', name_id: 'Piknik Santai di Atas Rumput', name_en: 'Relaxing Picnic on the Grass' },
    { id: 'pw-under-umbrella', name_id: 'Berbagi Payung', name_en: 'Sharing an Umbrella' },
    { id: 'pw-lifting-partner', name_id: 'Mengangkat Pasangan', name_en: 'Lifting Partner' },
    { id: 'pw-whispering-secrets', name_id: 'Berbisik Mesra', name_en: 'Whispering Sweet Nothings' },
    { id: 'pw-leaning-on-shoulder', name_id: 'Bersandar di Bahu', name_en: 'Leaning on a Shoulder' },
    { id: 'pw-candid-laughing', name_id: 'Tertawa Lepas (Candid)', name_en: 'Candid Laughing' },
    { id: 'pw-playing-instrument', name_id: 'Bermain Alat Musik Bersama', name_en: 'Playing an Instrument Together' },
    { id: 'pw-reading-book', name_id: 'Membaca Buku Bersama', name_en: 'Reading a Book Together' },
    { id: 'pw-riding-vespa', name_id: 'Naik Vespa Klasik', name_en: 'Riding a Classic Vespa' },
    { id: 'pw-making-silly-faces', name_id: 'Pose Wajah Konyol', name_en: 'Making Silly Faces' },
    { id: 'pw-stargazing', name_id: 'Menatap Bintang di Malam Hari', name_en: 'Stargazing at Night' },
    { id: 'pw-silhouette-kiss', name_id: 'Siluet Berciuman', name_en: 'Silhouette Kiss' },
    { id: 'pw-sharing-drink', name_id: 'Berbagi Minuman', name_en: 'Sharing a Drink' },
    { id: 'pw-cooking-together', name_id: 'Memasak Bersama di Dapur', name_en: 'Cooking Together in a Kitchen' },
    OTHER_OPTION,
];

export const PREWEDDING_BACKGROUNDS: StyleOption[] = [
    RANDOM_BACKGROUND_OPTION,
    { id: 'pw-bg-beach-sunset', name_id: 'Pantai Saat Matahari Terbenam', name_en: 'Beach at Sunset' },
    { id: 'pw-bg-flower-field', name_id: 'Padang Bunga Warna-warni', name_en: 'Colorful Flower Field' },
    { id: 'pw-bg-pine-forest', name_id: 'Hutan Pinus yang Rindang', name_en: 'Lush Pine Forest' },
    { id: 'pw-bg-city-rooftop', name_id: 'Atap Gedung Pemandangan Kota', name_en: 'Rooftop with City View' },
    { id: 'pw-bg-vintage-cafe', name_id: 'Kafe dengan Interior Vintage', name_en: 'Cafe with Vintage Interior' },
    { id: 'pw-bg-library', name_id: 'Perpustakaan Klasik', name_en: 'Classic Library' },
    { id: 'pw-bg-mountain-view', name_id: 'Pemandangan Pegunungan Megah', name_en: 'Majestic Mountain View' },
    { id: 'pw-bg-savanna', name_id: 'Padang Rumput Savana', name_en: 'Savanna Grassland' },
    { id: 'pw-bg-night-street', name_id: 'Jalanan Kota Malam Hari', name_en: 'City Street at Night' },
    { id: 'pw-bg-tea-plantation', name_id: 'Perkebunan Teh Hijau', name_en: 'Green Tea Plantation' },
    { id: 'pw-bg-lake-dock', name_id: 'Dermaga di Tepi Danau', name_en: 'Lakeside Dock' },
    { id: 'pw-bg-old-train-station', name_id: 'Stasiun Kereta Tua', name_en: 'Old Train Station' },
    { id: 'pw-bg-amusement-park', name_id: 'Taman Hiburan', name_en: 'Amusement Park' },
    { id: 'pw-bg-botanical-garden', name_id: 'Kebun Raya Tropis', name_en: 'Tropical Botanical Garden' },
    { id: 'pw-bg-waterfall', name_id: 'Air Terjun yang Indah', name_en: 'Beautiful Waterfall' },
    { id: 'pw-bg-art-gallery', name_id: 'Galeri Seni Modern', name_en: 'Modern Art Gallery' },
    { id: 'pw-bg-campus-university', name_id: 'Area Kampus Universitas', name_en: 'University Campus Area' },
    { id: 'pw-bg-traditional-market', name_id: 'Pasar Tradisional', name_en: 'Traditional Market' },
    { id: 'pw-bg-greenhouse', name_id: 'Rumah Kaca (Greenhouse)', name_en: 'Greenhouse' },
    { id: 'pw-bg-desert-dunes', name_id: 'Gurun Pasir', name_en: 'Desert Dunes' },
    OTHER_OPTION,
];

// === WEDDING STYLES ===
export const WEDDING_OUTFIT_STYLES: StyleOption[] = [
    RANDOM_OUTFIT_OPTION,
    { id: 'w-outfit-classic', name_id: 'Gaun Putih Klasik & Tuksedo Hitam', name_en: 'Classic White Gown & Black Tuxedo' },
    { id: 'w-outfit-javanese', name_id: 'Adat Jawa: Beskap & Kebaya', name_en: 'Javanese Attire: Beskap & Kebaya' },
    { id: 'w-outfit-sundanese', name_id: 'Adat Sunda: Jas Beludru & Kebaya', name_en: 'Sundanese Attire: Velvet Suit & Kebaya' },
    { id: 'w-outfit-balinese', name_id: 'Adat Bali: Safari & Kebaya Bali', name_en: 'Balinese Attire: Safari & Balinese Kebaya' },
    { id: 'w-outfit-mermaid', name_id: 'Gaun Mermaid & Jas Slim-fit', name_en: 'Mermaid Gown & Slim-fit Suit' },
    { id: 'w-outfit-ballgown', name_id: 'Gaun Ball Gown & Tuksedo Dasi Kupu-kupu', name_en: 'Ball Gown & Bow Tie Tuxedo' },
    { id: 'w-outfit-rustic', name_id: 'Gaya Rustic: Gaun Renda & Jas Coklat', name_en: 'Rustic Style: Lace Dress & Brown Suit' },
    { id: 'w-outfit-minimalist', name_id: 'Modern Minimalis: Gaun Simpel & Jas Terang', name_en: 'Modern Minimalist: Simple Dress & Light-colored Suit' },
    { id: 'w-outfit-contrast', name_id: 'Gaun Hitam & Jas Putih (kontras)', name_en: 'Contrast: Black Gown & White Suit' },
    { id: 'w-outfit-cheongsam', name_id: 'Cheongsam Merah & Setelan Changshan', name_en: 'Red Cheongsam & Changshan Suit' },
    { id: 'w-outfit-indian', name_id: 'Sari & Sherwani India', name_en: 'Indian Attire: Sari & Sherwani' },
    { id: 'w-outfit-bohemian', name_id: 'Gaun Bohemian & Jas Linen', name_en: 'Bohemian Gown & Linen Suit' },
    { id: 'w-outfit-short-dress', name_id: 'Gaun Pendek & Setelan Santai', name_en: 'Short Wedding Dress & Casual Suit' },
    { id: 'w-outfit-jumpsuit', name_id: 'Jumpsuit Pengantin Wanita & Jas Berwarna', name_en: 'Bridal Jumpsuit & Colored Suit' },
    { id: 'w-outfit-all-white', name_id: 'Serba Putih untuk Keduanya', name_en: 'All-White for Both' },
    { id: 'w-outfit-color-accent', name_id: 'Gaun Aksen Warna & Jas Serasi', name_en: 'Gown with Color Accent & Matching Suit' },
    { id: 'w-outfit-royal', name_id: 'Gaya Kerajaan: Gaun Megah & Jas Berekor', name_en: 'Royal Style: Grand Gown & Tailcoat' },
    { id: 'w-outfit-syari', name_id: 'Pakaian Pernikahan Islami (Syar\'i)', name_en: 'Islamic Wedding Attire (Syar\'i)' },
    { id: 'w-outfit-beach', name_id: 'Pernikahan Pantai: Gaun Ringan & Kemeja Linen', name_en: 'Beach Wedding: Light Dress & Linen Shirt' },
    { id: 'w-outfit-gatsby', name_id: 'Gaya Vintage 1920-an (Gatsby)', name_en: '1920s Vintage Style (Gatsby)' },
    OTHER_OPTION,
];

export const WEDDING_POSE_STYLES: StyleOption[] = [
    RANDOM_POSE_OPTION,
    { id: 'w-first-look', name_id: 'Momen "First Look"', name_en: '"First Look" Moment' },
    { id: 'w-exchanging-vows', name_id: 'Mengucapkan Janji Pernikahan', name_en: 'Exchanging Vows' },
    { id: 'w-exchanging-rings', name_id: 'Tukar Cincin', name_en: 'Exchanging Rings' },
    { id: 'w-the-first-kiss', name_id: 'Ciuman Pertama sebagai Suami Istri', name_en: 'The First Kiss as a Married Couple' },
    { id: 'w-walking-down-aisle', name_id: 'Berjalan Menyusuri Lorong Gereja/Pelaminan', name_en: 'Walking Down the Aisle' },
    { id: 'w-cutting-the-cake', name_id: 'Memotong Kue Pernikahan', name_en: 'Cutting the Wedding Cake' },
    { id: 'w-first-dance', name_id: 'Dansa Pertama', name_en: 'First Dance' },
    { id: 'w-champagne-toast', name_id: 'Toast Sampanye', name_en: 'Champagne Toast' },
    { id: 'w-showing-the-rings', name_id: 'Menunjukkan Cincin ke Kamera', name_en: 'Showing the Rings to the Camera' },
    { id: 'w-dipping-kiss', name_id: 'Ciuman dengan Pose Dip', name_en: 'Dipping Kiss' },
    { id: 'w-in-front-of-wedding-car', name_id: 'Di Depan Mobil Pengantin', name_en: 'In Front of the Wedding Car' },
    { id: 'w-bride-sitting-groom-standing', name_id: 'Pengantin Wanita Duduk, Pria Berdiri', name_en: 'Bride Sitting, Groom Standing' },
    { id: 'w-confetti-toss', name_id: 'Lempar Konfeti', name_en: 'Confetti Toss' },
    { id: 'w-holding-bouquet', name_id: 'Memegang Buket Bunga Bersama', name_en: 'Holding the Bouquet Together' },
    { id: 'w-groom-fixing-dress', name_id: 'Pria Merapikan Gaun Wanita', name_en: 'Groom Fixing the Bride\'s Dress' },
    { id: 'w-wedding-party-group', name_id: 'Foto Grup dengan Bridesmaid/Groomsmen', name_en: 'Group Photo with Bridesmaids/Groomsmen' },
    { id: 'w-farewell-wave', name_id: 'Lambaian Perpisahan di Akhir Acara', name_en: 'Farewell Wave at the End of the Event' },
    { id: 'w-under-the-veil', name_id: 'Di Bawah Kerudung Pengantin Wanita', name_en: 'Under the Bride\'s Veil' },
    { id: 'w-signing-marriage-certificate', name_id: 'Menandatangani Surat Nikah', name_en: 'Signing the Marriage Certificate' },
    { id: 'w-running-hand-in-hand', name_id: 'Berlari Bergandengan Tangan', name_en: 'Running Hand in Hand' },
    OTHER_OPTION,
];

export const WEDDING_BACKGROUNDS: StyleOption[] = [
    RANDOM_BACKGROUND_OPTION,
    { id: 'w-bg-altar', name_id: 'Altar Pernikahan Penuh Bunga', name_en: 'Wedding Altar Full of Flowers' },
    { id: 'w-bg-reception-hall', name_id: 'Aula Resepsi yang Elegan', name_en: 'Elegant Reception Hall' },
    { id: 'w-bg-church', name_id: 'Di dalam Gereja Klasik', name_en: 'Inside a Classic Church' },
    { id: 'w-bg-garden-party', name_id: 'Taman Pesta Pernikahan (Garden Party)', name_en: 'Wedding Garden Party' },
    { id: 'w-bg-grand-staircase', name_id: 'Tangga Megah di Hotel/Gedung', name_en: 'Grand Staircase in a Hotel/Building' },
    { id: 'w-bg-beach-ceremony', name_id: 'Upacara di Tepi Pantai', name_en: 'Beachside Ceremony' },
    { id: 'w-bg-ballroom', name_id: 'Ballroom Hotel Mewah', name_en: 'Luxury Hotel Ballroom' },
    { id: 'w-bg-rustic-barn', name_id: 'Lumbung Pedesaan (Rustic Wedding)', name_en: 'Rustic Barn (Rustic Wedding)' },
    { id: 'w-bg-vineyard', name_id: 'Kebun Anggur', name_en: 'Vineyard' },
    { id: 'w-bg-historic-building', name_id: 'Gedung Bersejarah', name_en: 'Historic Building' },
    { id: 'w-bg-chapel', name_id: 'Kapel Kecil yang Romantis', name_en: 'Small Romantic Chapel' },
    { id: 'w-bg-in-front-of-mosque', name_id: 'Di Depan Masjid Megah', name_en: 'In Front of a Grand Mosque' },
    { id: 'w-bg-rooftop-ceremony', name_id: 'Upacara di Atap Gedung', name_en: 'Rooftop Ceremony' },
    { id: 'w-bg-forest-clearing', name_id: 'Area Terbuka di Tengah Hutan', name_en: 'Forest Clearing' },
    { id: 'w-bg-decorated-tent', name_id: 'Tenda Pernikahan yang Dihias', name_en: 'Decorated Wedding Tent' },
    { id: 'w-bg-castle', name_id: 'Kastil atau Istana', name_en: 'Castle or Palace' },
    { id: 'w-bg-dance-floor', name_id: 'Lantai Dansa dengan Lampu Sorot', name_en: 'Dance Floor with Spotlights' },
    { id: 'w-bg-photobooth', name_id: 'Photobooth dengan Dekorasi Unik', name_en: 'Photobooth with Unique Decorations' },
    { id: 'w-bg-ceremonial-gate', name_id: 'Gerbang Upacara (Pelaminan)', name_en: 'Ceremonial Gate (Pelaminan)' },
    { id: 'w-bg-poolside', name_id: 'Tepi Kolam Renang Villa', name_en: 'Villa Poolside' },
    OTHER_OPTION,
];

// === LIGHTING STYLES (Can be used for both) ===
export const LIGHTING_STYLES: StyleOption[] = [
    RANDOM_LIGHTING_OPTION,
    { id: 'light-golden-hour', name_id: 'Golden Hour (Cahaya Senja Keemasan)', name_en: 'Golden Hour' },
    { id: 'light-soft-natural', name_id: 'Cahaya Alami yang Lembut (Siang Hari)', name_en: 'Soft Natural Light (Daytime)' },
    { id: 'light-dramatic-sunset', name_id: 'Siluet Saat Matahari Terbenam', name_en: 'Sunset Silhouette' },
    { id: 'light-romantic-candlelight', name_id: 'Cahaya Lilin Romantis', name_en: 'Romantic Candlelight' },
    { id: 'light-bright-airy', name_id: 'Terang & Cerah (Bright and Airy)', name_en: 'Bright and Airy' },
    { id: 'light-moody-cinematic', name_id: 'Sinematik & Dramatis (Moody)', name_en: 'Moody & Cinematic' },
    { id: 'light-twinkling-fairy-lights', name_id: 'Lampu Kelap-kelip (Fairy Lights)', name_en: 'Twinkling Fairy Lights' },
    { id: 'light-classic-studio', name_id: 'Pencahayaan Studio Klasik', name_en: 'Classic Studio Lighting' },
    { id: 'light-night-neon', name_id: 'Lampu Neon Malam Hari', name_en: 'Night Neon Lights' },
    { id: 'light-backlight-glow', name_id: 'Backlight (Cahaya dari Belakang)', name_en: 'Backlight Glow' },
    { id: 'light-soft-window', name_id: 'Cahaya Lembut dari Jendela', name_en: 'Soft Window Light' },
    { id: 'light-dappled-sunlight', name_id: 'Cahaya Matahari di Sela Pepohonan', name_en: 'Dappled Sunlight Through Trees' },
    { id: 'light-black-and-white', name_id: 'Hitam Putih Kontras Tinggi', name_en: 'High-Contrast Black and White' },
    { id: 'light-vintage-sepia', name_id: 'Filter Sepia (Vintage)', name_en: 'Vintage Sepia Filter' },
    { id: 'light-spotlight-focus', name_id: 'Lampu Sorot (Spotlight)', name_en: 'Spotlight Focus' },
    { id: 'light-blue-hour', name_id: 'Blue Hour (Setelah Matahari Terbenam)', name_en: 'Blue Hour (After Sunset)' },
    { id: 'light-fireworks', name_id: 'Cahaya Kembang Api', name_en: 'Fireworks Light' },
    { id: 'light-lanterns', name_id: 'Lentera Gantung', name_en: 'Hanging Lanterns' },
    { id: 'light-hazy-foggy', name_id: 'Berkabut (Hazy/Foggy)', name_en: 'Hazy/Foggy Atmosphere' },
    { id: 'light-lens-flare', name_id: 'Efek Lens Flare Artistik', name_en: 'Artistic Lens Flare Effect' },
    OTHER_OPTION,
];

export const OUTFIT_RECOMMENDATIONS: Record<string, { poseId: string; backgroundId: string; lightingId: string; }> = {
    // Pre-wedding Recommendations
    'pw-outfit-casual': { poseId: 'pw-sitting-on-bench', backgroundId: 'pw-bg-vintage-cafe', lightingId: 'light-soft-natural' },
    'pw-outfit-smart-casual': { poseId: 'pw-holding-hands-walking', backgroundId: 'pw-bg-city-rooftop', lightingId: 'light-golden-hour' },
    'pw-outfit-bohemian': { poseId: 'pw-dancing-twirling', backgroundId: 'pw-bg-flower-field', lightingId: 'light-dappled-sunlight' },
    'pw-outfit-vintage': { poseId: 'pw-riding-vespa', backgroundId: 'pw-bg-old-train-station', lightingId: 'light-vintage-sepia' },
    'pw-outfit-formal': { poseId: 'pw-forehead-kiss', backgroundId: 'pw-bg-art-gallery', lightingId: 'light-classic-studio' },
    'pw-outfit-uniform': { poseId: 'pw-looking-at-each-other', backgroundId: 'pw-bg-campus-university', lightingId: 'light-bright-airy' },
    'pw-outfit-traditional': { poseId: 'pw-leaning-on-shoulder', backgroundId: 'pw-bg-botanical-garden', lightingId: 'light-soft-window' },
    'pw-outfit-sporty': { poseId: 'pw-candid-laughing', backgroundId: 'pw-bg-amusement-park', lightingId: 'light-bright-airy' },
    'pw-outfit-monochrome': { poseId: 'pw-silhouette-kiss', backgroundId: 'pw-bg-night-street', lightingId: 'light-black-and-white' },
    'pw-outfit-earth-tone': { poseId: 'pw-back-hug', backgroundId: 'pw-bg-pine-forest', lightingId: 'light-dappled-sunlight' },
    'pw-outfit-pastel': { poseId: 'pw-sharing-drink', backgroundId: 'pw-bg-tea-plantation', lightingId: 'light-soft-natural' },
    'pw-outfit-edgy': { poseId: 'pw-making-silly-faces', backgroundId: 'pw-bg-night-street', lightingId: 'light-night-neon' },
    'pw-outfit-winter': { poseId: 'pw-under-umbrella', backgroundId: 'pw-bg-pine-forest', lightingId: 'light-moody-cinematic' },
    'pw-outfit-beach': { poseId: 'pw-holding-hands-walking', backgroundId: 'pw-bg-beach-sunset', lightingId: 'light-golden-hour' },
    'pw-outfit-pajamas': { poseId: 'pw-reading-book', backgroundId: 'pw-bg-library', lightingId: 'light-soft-window' },
    'pw-outfit-hanbok-kimono': { poseId: 'pw-looking-at-each-other', backgroundId: 'pw-bg-botanical-garden', lightingId: 'light-bright-airy' },
    'pw-outfit-streetwear': { poseId: 'pw-leaning-on-shoulder', backgroundId: 'pw-bg-city-rooftop', lightingId: 'light-moody-cinematic' },
    'pw-outfit-themed': { poseId: 'pw-lifting-partner', backgroundId: 'pw-bg-amusement-park', lightingId: 'light-spotlight-focus' },
    'pw-outfit-adventurer': { poseId: 'pw-back-hug', backgroundId: 'pw-bg-mountain-view', lightingId: 'light-dappled-sunlight' },
    'pw-outfit-classic': { poseId: 'pw-dancing-twirling', backgroundId: 'pw-bg-library', lightingId: 'light-classic-studio' },
    // Wedding Recommendations
    'w-outfit-classic': { poseId: 'w-the-first-kiss', backgroundId: 'w-bg-church', lightingId: 'light-soft-window' },
    'w-outfit-javanese': { poseId: 'w-exchanging-vows', backgroundId: 'w-bg-ceremonial-gate', lightingId: 'light-golden-hour' },
    'w-outfit-sundanese': { poseId: 'w-showing-the-rings', backgroundId: 'w-bg-reception-hall', lightingId: 'light-bright-airy' },
    'w-outfit-balinese': { poseId: 'w-bride-sitting-groom-standing', backgroundId: 'w-bg-beach-ceremony', lightingId: 'light-soft-natural' },
    'w-outfit-mermaid': { poseId: 'w-first-dance', backgroundId: 'w-bg-ballroom', lightingId: 'light-spotlight-focus' },
    'w-outfit-ballgown': { poseId: 'w-dipping-kiss', backgroundId: 'w-bg-grand-staircase', lightingId: 'light-classic-studio' },
    'w-outfit-rustic': { poseId: 'w-running-hand-in-hand', backgroundId: 'w-bg-rustic-barn', lightingId: 'light-twinkling-fairy-lights' },
    'w-outfit-minimalist': { poseId: 'w-first-look', backgroundId: 'w-bg-art-gallery', lightingId: 'light-bright-airy' },
    'w-outfit-contrast': { poseId: 'w-under-the-veil', backgroundId: 'w-bg-photobooth', lightingId: 'light-black-and-white' },
    'w-outfit-cheongsam': { poseId: 'w-champagne-toast', backgroundId: 'w-bg-reception-hall', lightingId: 'light-romantic-candlelight' },
    'w-outfit-indian': { poseId: 'w-exchanging-rings', backgroundId: 'w-bg-decorated-tent', lightingId: 'light-golden-hour' },
    'w-outfit-bohemian': { poseId: 'w-holding-bouquet', backgroundId: 'w-bg-garden-party', lightingId: 'light-dappled-sunlight' },
    'w-outfit-short-dress': { poseId: 'w-confetti-toss', backgroundId: 'w-bg-rooftop-ceremony', lightingId: 'light-bright-airy' },
    'w-outfit-jumpsuit': { poseId: 'w-walking-down-aisle', backgroundId: 'w-bg-historic-building', lightingId: 'light-soft-natural' },
    'w-outfit-all-white': { poseId: 'w-showing-the-rings', backgroundId: 'w-bg-beach-ceremony', lightingId: 'light-bright-airy' },
    'w-outfit-color-accent': { poseId: 'w-cutting-the-cake', backgroundId: 'w-bg-reception-hall', lightingId: 'light-classic-studio' },
    'w-outfit-royal': { poseId: 'w-groom-fixing-dress', backgroundId: 'w-bg-castle', lightingId: 'light-soft-window' },
    'w-outfit-syari': { poseId: 'w-signing-marriage-certificate', backgroundId: 'w-bg-in-front-of-mosque', lightingId: 'light-soft-natural' },
    'w-outfit-beach': { poseId: 'w-running-hand-in-hand', backgroundId: 'w-bg-beach-ceremony', lightingId: 'light-golden-hour' },
    'w-outfit-gatsby': { poseId: 'w-first-dance', backgroundId: 'w-bg-ballroom', lightingId: 'light-moody-cinematic' },
};

export const SYSTEM_PROMPT_TEMPLATE = `**PERINTAH UTAMA:** Anda adalah seorang fotografer AI profesional. Tugas Anda adalah membuat satu foto {{photo_type}} yang sangat realistis dan berkualitas tinggi.

**INPUT:**
- Foto 1: Berisi Subjek A (orang pertama).
- Foto 2: Berisi Subjek B (orang kedua).

**ATURAN PALING KRITIS (WAJIB DIIKUTI):**
1.  **GABUNGKAN DUA ORANG:** Foto hasil akhir HARUS menampilkan Subjek A dan Subjek B secara bersamaan dalam satu adegan yang kohesif. JANGAN hanya menampilkan satu orang. JANGAN menggabungkan fitur wajah mereka menjadi satu orang. Pastikan ada DUA orang yang berbeda di hasil akhir.
2.  **JAGA IDENTITAS ASLI:** Wajah, bentuk tubuh, warna kulit, gaya rambut, dan semua ciri khas fisik dari Subjek A dan Subjek B HARUS SAMA PERSIS seperti di foto asli mereka. JANGAN mengubah penampilan atau identitas orang-orang ini sama sekali.
3.  **GANTI PAKAIAN:** Satu-satunya perubahan besar yang diizinkan pada subjek adalah mengganti pakaian mereka agar sesuai dengan gaya yang diminta di bawah ini.

**PANDUAN GAYA FOTO:**
- **Jenis Foto:** {{photo_type}}
- **Gaya Pakaian:** {{outfit_style}}
- **Gaya Pose:** {{pose_style}} (Pastikan pose ini melibatkan interaksi yang natural antara DUA orang).
- **Latar Belakang:** {{background_style}}
- **Gaya Pencahayaan:** {{lighting_style}}
- **Instruksi Tambahan:** {{extra_instructions}}

**INSTRUKSI AKHIR:**
- Ciptakan komposisi yang indah dan seimbang seolah-olah diambil oleh fotografer sungguhan. Berikan sedikit variasi pada sudut kamera atau ekspresi di setiap generasi agar hasilnya tidak monoton.
- {{watermark_instruction}}
- Hanya hasilkan gambar final. JANGAN tambahkan teks atau deskripsi apa pun ke dalam gambar.
`;
