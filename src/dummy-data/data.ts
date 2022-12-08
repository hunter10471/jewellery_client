import { IProduct } from './../interfaces/Product.interface';
export const carouselData = [
  {
    img: 'https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80',
    heading: 'Discover our diamond collection',
    description:
      'Our diamond collection is the most prestige in the world-wide market of jewellers, we guarantee nothing less than perfect for you and your loved ones.',
  },
  {
    img: 'https://images.unsplash.com/photo-1599475211349-f4c81b3216bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    heading: 'Exquisite Gold that truly matches',
    description:
      'Our Gold collection is the most prestige in the world-wide market of jewellers, we guarantee nothing less than perfect for you and your loved ones.',
  },
];

export const collectionData = [
  {
    img: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'earrings collection',
  },
  {
    img: 'https://images.unsplash.com/photo-1654963974852-79f30d5b289d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80',
    title: 'necklace collection',
  },
  {
    img: 'https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    title: 'ring collection',
  },
  {
    img: 'https://images.unsplash.com/photo-1611107683227-e9060eccd846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'bracelet collection',
  },
];

export const bestSellerCarouselData = [
  {
    price: '3180',
    title: "Harrington's Earrings",
    img: 'https://images.unsplash.com/photo-1623303179820-de8ec58b03dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  },
  {
    price: '5590',
    title: "Gloria's Bracelets",
    img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    price: '3580',
    title: 'Reverend Jewels',
    img: 'https://images.unsplash.com/photo-1591210244853-ea68b6126edf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

export const OurStoryItems = [
  {
    title: 'Professional Designing',
    description:
      'The process of jewellery designing requires professionals to create a technical sketch of the jewellery piece that is being made.',
    img: 'https://images.unsplash.com/photo-1655111396188-8dd88ceb8b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'Craftsmanship',
    description:
      'Jewellery design is the first step in our jewellery-making process. Everything begins with a sketch which is brought to life on paper.',
    img: 'https://images.unsplash.com/photo-1624588057318-5f1b2eb81012?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: 'Gold & Diamonds',
    description:
      'In certain parts of the world, gold is considered a form of currency, which is not true for diamonds. In this sense, gold could be in-demand.',
    img: 'https://images.unsplash.com/photo-1518049655356-4b957c5e604a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80',
  },
];

export const products: IProduct[] = [
  {
    title: 'Princess-Cut Channel Set Wedding Band Ring (18K)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/20221203_1706181_1600x.jpg?v=1670106752',
    category: 'ring',
    description: '',
    id: 0,
    price: 3000,
    rating: {
      count: 400,
      rate: 4.5,
    },
    stripePrice: 'price_1MCnU6SJbpeK7y2B77jceJUg',
  },
  {
    title: 'Baguettes Milgrain Cuban Ring (14K)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/20221130_162454_1600x.jpg?v=1669844368',
    category: 'ring',
    description: '',
    id: 1,
    price: 2200,
    rating: {
      count: 220,
      rate: 4.1,
    },
  },
  {
    title: 'Zirconia 5-Rows Rhombus Pattern Ring (Silver)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/5RowsRhombusCZRing_Silver_SS410M-SY_1600x.jpg?v=1668989516',
    category: 'ring',
    description: '',
    id: 2,
    price: 1600,
    rating: {
      count: 460,
      rate: 4.4,
    },
  },
  {
    title: 'Pave Floral Setting Engagement Ring (Silver)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/20221120_172806_cbb48df7-5b18-4e3a-afa4-80680b617870_1600x.jpg?v=1668989462',
    category: 'ring',
    description: '',
    id: 3,
    price: 1200,
    rating: {
      count: 180,
      rate: 4.2,
    },
  },
  {
    title: 'Icy Blossom Flower Ring (Silver)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/20221120_172639_eb5cbcb2-2f3a-4531-a7a7-b424c0163d4f_1600x.jpg?v=1668989963',
    category: 'ring',
    description: '',
    id: 4,
    price: 1900,
    rating: {
      count: 273,
      rate: 3.9,
    },
  },
  {
    title: 'Diamond Pave Round Charm Necklace (14K)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/Screenshot2022-11-07154854_1600x.jpg?v=1667854936',
    category: 'necklace',
    description: '',
    id: 5,
    price: 3500,
    rating: {
      count: 125,
      rate: 4.8,
    },
    stripePrice: 'price_1MCnVlSJbpeK7y2Bkn1ey6vh',
  },
  {
    title: 'Diamond Horseshoe Pendant Necklace (14K)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/20191207_174005-Recovered_1600x.jpg?v=1575765088',
    category: 'necklace',
    description: '',
    id: 6,
    price: 4200,
    rating: {
      count: 275,
      rate: 4.75,
    },
  },
  {
    title: 'Diamond Hoop Necklace (14K)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/MOPR04493Y0_1600x.jpg?v=1667836922',
    category: 'necklace',
    description: '',
    id: 7,
    price: 3850,
    rating: {
      count: 295,
      rate: 4.35,
    },
  },
  {
    title: 'Hamsa Charm Necklace (14K)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/goldhamsa_1600x.jpg?v=1655649186',
    category: 'necklace',
    description: '',
    id: 8,
    price: 2600,
    rating: {
      count: 95,
      rate: 3.8,
    },
  },
  {
    title: 'Pearl and Rolo Combination Necklace (14K)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/14k-gold-Pearl-and-Rolo-Combination-Necklace-main_1600x.jpg?v=1638748713',
    category: 'necklace',
    description: '',
    id: 9,
    price: 4500,
    rating: {
      count: 425,
      rate: 4.6,
    },
  },
  {
    title: 'Freshwater Cultured Pink Pearls Necklace (Silver)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/14k-gold-Freshwater-Cultured-Pink-Pearls-Necklace-main_1600x.jpg?v=1642626710',
    category: 'necklace',
    description: '',
    id: 10,
    price: 3150,
    rating: {
      count: 378,
      rate: 4.3,
    },
  },
  {
    title: 'Concave Square Dome Diamond Stud Earrings (10K)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/417_10_karat_Yellow_Gold_Concave_Square_Dome_Diamond_Stud_Earrings_front_angle_view_web_product_Popular_Jewelry_New_York_1600x.png?v=1552426339',
    category: 'earrings',
    description:
      'Concave surfaces covered by white diamonds are enclosed by a frame of diamonds secured on pointy four-prong stud earrings. The earrings back are screw type for added security to such a impressive piece of jewelry.',
    id: 11,
    price: 2150,
    rating: {
      count: 375,
      rate: 4.1,
    },
  },
  {
    title: 'Round Diamond Stud Earrings (14K)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/ROUNDEARRINGS_e92b1dec-fc74-4540-bea6-9ed2083f3b9e_1600x.jpg?v=1628442700',
    category: 'earrings',
    description: '',
    id: 12,
    price: 3250,
    rating: {
      count: 315,
      rate: 4.4,
    },
  },
  {
    title: 'Bamboo Hoops Earrings',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/14K-Yellow-Gold-Bamboo-Hoops-Earrings-Main-Large_1600x.jpg?v=1609719960',
    category: 'earrings',
    description: '',
    id: 13,
    price: 3000,
    rating: {
      count: 305,
      rate: 4.0,
    },
  },
  {
    title: 'Thin Seamless Hoop Piercings (14K)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/Slim_Lightweight_Hoops_Earrings_14K_E60LA-GY_050_1600x.jpg?v=1561500807',
    category: 'earrings',
    description: '',
    id: 14,
    price: 2650,
    rating: {
      count: 295,
      rate: 3.95,
    },
  },
  {
    title: 'Single-Row Round Diamond Tennis Bracelet (14K)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/IMG-0911_1600x.jpg?v=1568750048',
    category: 'bracelet',
    description: '',
    id: 15,
    price: 2250,
    rating: {
      count: 215,
      rate: 4.25,
    },
  },
  {
    title: 'Diamond Cuts Fancy Bracelet (14K)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/DaimondCutsFancyBracelet_14K_14K480KUYL-FOW5008INCH_1600x.jpg?v=1607730359',
    category: 'bracelet',
    description: '',
    id: 16,
    price: 2050,
    rating: {
      count: 205,
      rate: 4.75,
    },
  },
  {
    title: 'Diamond XOXO Lady Bracelet (14K)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/IMG_20220509_101722_1600x.jpg?v=1652115361',
    category: 'bracelet',
    description: '',
    id: 17,
    price: 2750,
    rating: {
      count: 235,
      rate: 4.45,
    },
  },
  {
    title: '[2.0 mm] VS Diamond Tennis Bracelet (14K)',
    image:
      'https://cdn.shopify.com/s/files/1/1329/1267/products/20221015_145505_1600x.jpg?v=1665864098',
    category: 'bracelet',
    description: '',
    id: 18,
    price: 2950,
    rating: {
      count: 375,
      rate: 4.75,
    },
  },
];
