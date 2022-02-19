export const sliderItems = [
  {
    id: 1,
    img: '/assets/images/backgrounds/chopstix-front.jpg',
    title: 'PHO CHOPSTIX',
    desc: 'We offer a variety of true Vietnamese Dishes from Rare Beef Pho to Vermicelli Bowl',
  },
  {
    id: 2,
    img: '/assets/images/gallery/4.jpg',
    title: 'PHO CHOPSTIX',
    desc: 'Try our tasty Deep Fried Spring Roll, Pho or Vermicelli Bowl, etc',
  },
  {
    id: 3,
    img: '/assets/images/gallery/10.jpg',
    title: 'PHO CHOPSTIX',
    desc: 'Come see what we have to offer for you today',
  },
];

export const contactInfo = {
  address: '137 Princess St, Kingston, ON K7L 1A8',
  phone: '(613) 766-3368',
  openingHours: [
    {
      days: 'Monday - Thursday:',
      hours: '11 a.m - 8 p.m',
    },
    {
      days: 'Friday - Saturday:',
      hours: '11 a.m - 8:30 p.m',
    },
    {
      days: 'Sunday:',
      hours: '12 p.m - 8 p.m',
    },
  ],
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.795822337863!2d-76.48584684788013!3d44.23186187900318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2ab67435a4d85%3A0x337f399f99690a71!2sPho%20Chopstix!5e0!3m2!1sen!2sca!4v1642244680314!5m2!1sen!2sca',
  facebook: 'https://www.facebook.com/profile.php?id=100076502762476',
  instagram: 'https://www.instagram.com/phochopstix.ca/',
};

export const about = {
  title: 'Welcome to Phở Chopstix',
  desc: 'Phở Chopstix serves a variety of Vietnamese food from Phở to Vermicelli Bowl and Rice Dishes. Our goal is to provide tasty food, exceptional service and a friendly atmosphere to all our customers. If you are in the mood for Vietnamese food in Kingston, you are welcome to come to Pho Chopstix.',
  features: [
    {
      title: 'Quality Food',
      desc: 'Authentic Vietnamese Food with Quality Ingredients',
    },
    {
      title: 'Friendly Service',
      desc: 'A Cozy and Friendly Atmosphere',
    },
    {
      title: 'Food Delivery & Take Out',
      desc: 'Fantuan Delivery app or Call Us at',
    },
  ],
};

export const foods = [
  {
    id: 1,
    category: '🍢Appetizer',
    name: 'Deep Fried Spring Roll',
    desc: '2 Rolls',
    price: '5.50',
    img: '/assets/images/foods/1.jpg',
    note: '* Pick your sauce: Fish sauce, Peanut sauce, Tamarind sauce',
  },
  {
    id: 2,
    category: '🍢Appetizer',
    name: 'Fresh Salad Roll Wrap in Rice Paper',
    desc: '2 rolls - 4 choices',
    choice: [
      { name: '🍤 Shrimp', price: '6.50' },
      { name: '🥩 Grill Pork', price: '6.75' },
      { name: '🍗 Grilled Chicken', price: '6.75' },
      { name: '🧈 Fried Tofu', price: '5.95' },
    ],
    price: '5.95',
    sauce: ['Fish Sauce', 'Peanut Sauce', 'Tamarind Sauce'],
    img: '',
    note: '* Pick your sauce: Fish sauce, Peanut sauce, Tamarind sauce',
  },
  {
    id: 3,
    category: '🍜Noodle Soup - Pho',
    name: 'Rice Noodle in Beef Broth',
    desc: '5 choices',
    choice: [
      {
        name: '🥩 Rare beef',
        size: ['Small', 'Large', 'Extra Large'],
        price: ['11.50', '13.00', '16.00'],
      },
      {
        name: '🔥 Spicy rare beef',
        size: ['Small', 'Large', 'Extra Large'],
        price: ['11.95', '13.95', '16.95'],
      },
      {
        name: '🥩 Rare beef, brisket, tripe, beef ball',
        size: ['Small', 'Large', 'Extra Large'],
        price: ['13.00', '15.50', '18.50'],
      },
      {
        name: '🥦 Tofu & Vegetable',
        size: ['Small', 'Large', 'Extra Large'],
        price: ['11.95', '13.95', '16.95'],
      },
      {
        name: '🍖 Special Pho Chopstix with Short Rib',
        size: ['1 Size'],
        price: ['18.95'],
      },
    ],
    price: ['11.50', '13.00', '16.00'],
    img: '/assets/images/gallery/3.jpg',
    note: '* Only Large size available for takeout and delivery',
  },
  {
    id: 4,
    category: '🍜Noodle Soup - Pho',
    name: 'Bò Kho - Beef Stew',
    desc: 'Rice Noodle/Bread',
    price: 14.95,
    img: '/assets/images/gallery/4.jpg',
  },
  {
    id: 5,
    category: '🍜Noodle Soup - Pho',
    name: 'Phở Gà - Rice Noodle in Chicken Broth With Chicken Breast',
    desc: '',
    choice: [
      {
        size: ['Small'],
        price: ['11.50'],
      },
      {
        size: ['Large'],
        price: ['13.00'],
      },
    ],
    img: '',
    note: '* Only Large size available for takeout and delivery',
  },
  {
    id: 6,
    category: '🍜Noodle Soup - Pho',
    name: 'Hủ Tíu - Vietnamese Style Rice Noodle Soup',
    desc: '2 choices',
    choice: [
      {
        name: 'Chicken & Shrimp',
        size: ['Small', 'Large'],
        price: ['13.00', '14.95'],
      },
      {
        name: 'Pork & Shrimp',
        size: ['Small', 'Large'],
        price: ['13.00', '14.95'],
      },
    ],
    img: '',
    note: '* Only Large size available for takeout and delivery',
  },

  {
    id: 7,
    category: '🍜Noodle Soup - Pho',
    name: 'Hủ Tíu Khô -Vietnamese Dry Noodle in Special Sauce',
    desc: 'Soup on the side - 2 choices ',
    choice: [
      {
        name: 'Chicken & Shrimp',
        size: ['Small', 'Large'],
        price: ['13.50', '15.50'],
      },
      {
        name: 'Pork & Shrimp',
        size: ['Small', 'Large'],
        price: ['13.50', '15.50'],
      },
    ],
    img: '',
    note: '* Only Large size available for takeout and delivery',
  },
  {
    id: 8,
    category: '🍚Rice Plate',
    name: 'Grilled Chicken, Fried Eggs',
    desc: '',
    price: '15.50',
    img: 'assets/images/foods/8.jpg',
  },
  {
    id: 9,
    category: '🍚Rice Plate',
    name: 'Waterfall Fried Chicken',
    desc: '',
    price: '15.50',
    img: '/assets/images/foods/9.jpg',
  },
  {
    id: 10,
    category: '🍚Rice Plate',
    name: 'Grilled Chicken & Shrimp',
    desc: '',
    price: '16.50',
    img: 'assets/images/foods/10.jpg',
  },
  {
    id: 11,
    category: '🍚Rice Plate',
    name: 'Fried Rice',
    desc: '4 choices',
    choice: [
      {
        name: '🍗Grilled Chicken',
        size: '',
        price: '15.50',
      },
      {
        name: '🍤Grilled Shrimp',
        size: '',
        price: '15.50',
      },
      {
        name: '🥩Grilled Pork',
        size: '',
        price: '15.50',
      },
      {
        name: '🧈Fried Tofu',
        size: '',
        price: '14.95',
      },
    ],
    img: '',
  },
  {
    id: 12,
    category: '🍚Rice Plate',
    name: '🔥Spicy Stir Fried Lemongrass',
    desc: 'Chicken/Beef/Tofu',
    price: '14.50',
    img: '',
  },
  {
    id: 13,
    category: '🍚Rice Plate',
    name: '🔥Spicy Vietnamese Style Stir Fried Chinese Eggplant & Vegetable with',
    desc: 'Beef/Chicken/Shrimp/Tofu',
    choice: [
      {
        name: '🥩Beef',
        price: '15.95',
      },
      {
        name: '🍗Chicken',
        price: '15.95',
      },
      {
        name: '🍤Shrimp',
        price: '15.95',
      },
      {
        name: '🧈Tofu',
        price: '15.95',
      },
    ],
    img: '/assets/images/foods/13.jpg',
  },

  {
    id: 14,
    category: '🍚Rice Plate',
    name: '🔥Spicy Thai Style Stir Fried Chinese Eggplant & Vegetables, Coconut Milk with',
    desc: 'Beef/Chicken/Shrimp/Tofu',
    choice: [
      {
        name: '🥩Beef',
        price: '15.95',
      },
      {
        name: '🍗Chicken',
        price: '15.95',
      },
      {
        name: '🍤Shrimp',
        price: '15.95',
      },
      {
        name: '🧈Tofu',
        price: '15.95',
      },
    ],
    img: '',
  },
  {
    id: 15,
    category: '🍝Vermicelli',
    name: 'Vermicelli - Bún Thịt Nướng Chả Giò',
    desc: '6 choices - Served with spring rolls, lettuce, cucumber, bean sprout, peanut',
    choice: [
      {
        name: '🍗 Grilled Chicken',
        price: '15.95',
      },
      {
        name: '🥩 Stir-Fried Beef',
        price: '15.95',
      },
      {
        name: '🥩 Grilled Pork',
        price: '15.95',
      },
      {
        name: '🍗 Stir-Fried Chicken',
        price: '15.95',
      },
      {
        name: '🍤 Grilled Shrimp',
        price: '15.95',
      },
      {
        name: '🧈 Fried Tofu',
        price: '15.95',
      },
    ],
    img: '/assets/images/gallery/15.jpg',
  },
  {
    id: 30,
    name: '🥩 Meat',
    category: '🍳Extras',
    price: '4.75',
  },
  {
    id: 31,
    name: '🍤 Shrimp',
    category: '🍳Extras',
    price: '4.50',
  },
  {
    id: 32,
    name: '🧈 Fried Tofu',
    category: '🍳Extras',
    price: '4.25',
  },
  {
    id: 33,
    name: '🥦 Vegetable',
    category: '🍳Extras',
    price: '4.25',
  },
  {
    id: 34,
    name: '🍲 Soup',
    category: '🍳Extras',
    price: '2.00',
  },
  {
    id: 35,
    name: '🍚 Rice',
    category: '🍳Extras',
    price: '2.25',
  },
  {
    id: 36,
    name: '🍜 Noodle',
    category: '🍳Extras',
    price: '2.25',
  },
  {
    id: 37,
    name: '🍳 Fried Egg',
    category: '🍳Extras',
    price: '3.00',
  },
  {
    id: 100,
    category: '🥤 Beverage',
    name: '🥤 Coke/Diet Coke/Ginger Ale/Sprite/Water',
    price: '2.00',
    img: '/assets/images/foods/100.png',
  },
  {
    id: 101,
    category: '🥤 Beverage',
    name: '❄ Iced Tea',
    price: '2.50',
    img: '',
  },
  {
    id: 102,
    category: '🥤 Beverage',
    name: '🍊 Orange Juice',
    price: '3.00',
    img: '',
  },
  {
    id: 103,
    category: '☕Tea & Coffee',
    name: '🍵 Green Tea',
    price: '2.75',
    img: '',
  },
  {
    id: 104,
    category: '☕Tea & Coffee',
    name: '🍵 Fresh Ginger Green Tea',
    price: '3.00',
    img: '',
  },
  {
    id: 105,
    category: '☕Tea & Coffee',
    name: '☕ Vietnamese Hot Coffee',
    price: '4.75',
    img: '',
  },
  {
    id: 106,
    category: '☕Tea & Coffee',
    name: '☕ Vietnamese Iced Coffee',
    price: '5.25',
    img: '',
  },
];

export const galleryItems = [
  {
    id: 1,
    original: 'assets/images/gallery/3.jpg',
    thumbnail: 'assets/images/gallery/3-thumb.jpg',
  },
  {
    id: 2,
    original: 'assets/images/gallery/4.jpg',
    thumbnail: 'assets/images/gallery/4-thumb.jpg',
  },
  {
    id: 3,
    original: 'assets/images/gallery/10.jpg',
    thumbnail: 'assets/images/gallery/10-thumb.jpg',
  },
  {
    id: 4,
    original: 'assets/images/gallery/15.jpg',
    thumbnail: 'assets/images/gallery/15-thumb.jpg',
  },
  {
    id: 5,
    original: 'assets/images/gallery/2.jpg',
    thumbnail: 'assets/images/gallery/2-thumb.jpg',
  },
  {
    id: 6,
    original: 'assets/images/gallery/13.jpg',
    thumbnail: 'assets/images/gallery/13-thumb.jpg',
  },
  {
    id: 7,
    original: 'assets/images/gallery/8.jpg',
    thumbnail: 'assets/images/gallery/8-thumb.jpg',
  },
];
