
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  rating: number;
  images: string[];
  featured?: boolean;
  createdAt: string;
  reviews?: Array<{
    id: number;
    name: string;
    rating: number;
    date: string;
    comment: string;
    avatar?: string;
  }>;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ultra Thin Laptop Pro",
    description: "A powerful laptop with a sleek design, perfect for professionals. Features a 15.6\" display, 16GB RAM, and 512GB SSD storage.",
    price: 999.99,
    originalPrice: 1299.99,
    discount: 23,
    category: "electronics",
    rating: 4.8,
    featured: true,
    createdAt: "2023-10-15",
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ],
    reviews: [
      {
        id: 101,
        name: "Alex Johnson",
        rating: 5,
        date: "2023-12-10",
        comment: "This laptop exceeded my expectations! The speed is amazing and the display is crystal clear. I'm using it for both work and gaming and it handles everything I throw at it. Highly recommend!"
      },
      {
        id: 102,
        name: "Sarah Miller",
        rating: 4,
        date: "2023-11-25",
        comment: "Great laptop for the price. The battery life could be a bit better, but overall I'm very satisfied with my purchase."
      },
      {
        id: 103,
        name: "David Chen",
        rating: 5,
        date: "2023-11-02",
        comment: "The build quality is exceptional and the performance is outstanding. I use it primarily for video editing and it handles 4K footage without any lag."
      }
    ]
  },
  {
    id: 2,
    name: "Wireless Noise-Cancelling Headphones",
    description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and comfortable over-ear design.",
    price: 249.99,
    category: "electronics",
    rating: 4.5,
    createdAt: "2023-09-20",
    images: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    ],
    reviews: [
      {
        id: 104,
        name: "Jennifer Lee",
        rating: 5,
        date: "2023-12-15",
        comment: "These headphones are incredible! The noise cancellation works perfectly in noisy environments, and the sound quality is rich and balanced."
      },
      {
        id: 105,
        name: "Michael Brown",
        rating: 4,
        date: "2023-10-30",
        comment: "Good sound and comfortable fit. The app could use some improvements, but the headphones themselves are great."
      }
    ]
  },
  {
    id: 3,
    name: "Smart Fitness Watch",
    description: "Track your fitness goals with this smart watch featuring heart rate monitoring, GPS, and water resistance up to 50m.",
    price: 179.99,
    originalPrice: 199.99,
    discount: 10,
    category: "electronics",
    rating: 4.3,
    createdAt: "2023-11-05",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ]
  },
  {
    id: 4,
    name: "Designer Leather Backpack",
    description: "Elegant and functional leather backpack with multiple compartments and laptop sleeve. Perfect for daily commute or weekend getaways.",
    price: 129.99,
    category: "fashion",
    rating: 4.7,
    featured: true,
    createdAt: "2023-08-12",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ],
    reviews: [
      {
        id: 106,
        name: "Emma Wilson",
        rating: 5,
        date: "2023-11-20",
        comment: "Beautiful backpack that goes with everything! The leather is high quality and the compartments are well designed."
      }
    ]
  },
  {
    id: 5,
    name: "Aromatherapy Essential Oil Diffuser",
    description: "Create a calming atmosphere with this elegant diffuser featuring multiple light settings and automatic shut-off.",
    price: 39.99,
    category: "home",
    rating: 4.2,
    createdAt: "2023-10-18",
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    ]
  },
  {
    id: 6,
    name: "Premium Organic Skincare Set",
    description: "A luxury set featuring cleanser, toner, serum, and moisturizer made with all-natural, organic ingredients.",
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    category: "beauty",
    rating: 4.9,
    featured: true,
    createdAt: "2023-11-10",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    ],
    reviews: [
      {
        id: 107,
        name: "Olivia Garcia",
        rating: 5,
        date: "2023-12-01",
        comment: "This skincare set transformed my skin in just two weeks. The products smell amazing and feel luxurious."
      },
      {
        id: 108,
        name: "Sophia Martinez",
        rating: 4,
        date: "2023-11-15",
        comment: "Great products overall. The moisturizer is my favorite item from the set."
      }
    ]
  },
  {
    id: 7,
    name: "Smart Home Security Camera",
    description: "Keep your home secure with this HD camera featuring motion detection, two-way audio, and night vision.",
    price: 79.99,
    category: "electronics",
    rating: 4.1,
    createdAt: "2023-09-05",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ]
  },
  {
    id: 8,
    name: "Stylish Winter Coat",
    description: "Stay warm and fashionable with this premium winter coat featuring water-resistant material and multiple pockets.",
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    category: "fashion",
    rating: 4.6,
    createdAt: "2023-10-25",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ],
    reviews: [
      {
        id: 109,
        name: "Ryan Thompson",
        rating: 5,
        date: "2023-12-05",
        comment: "Excellent coat! It's very warm yet not too bulky. I've received many compliments on it already."
      },
      {
        id: 110,
        name: "Isabella King",
        rating: 4,
        date: "2023-11-28",
        comment: "Good quality and stylish design. It runs a bit large, so consider sizing down."
      }
    ]
  },
  {
    id: 9,
    name: "Modern Coffee Table",
    description: "Elevate your living space with this contemporary coffee table featuring a sleek wooden top and metal legs.",
    price: 229.99,
    category: "home",
    rating: 4.4,
    featured: true,
    createdAt: "2023-08-20",
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ]
  },
  {
    id: 10,
    name: "Professional Makeup Brush Set",
    description: "A complete set of 15 high-quality makeup brushes with soft synthetic bristles and ergonomic handles.",
    price: 49.99,
    originalPrice: 69.99,
    discount: 28,
    category: "beauty",
    rating: 4.7,
    createdAt: "2023-11-15",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    ]
  },
  {
    id: 11,
    name: "Wireless Gaming Mouse",
    description: "Ultra-responsive gaming mouse with programmable buttons, RGB lighting, and long battery life.",
    price: 59.99,
    category: "electronics",
    rating: 4.5,
    createdAt: "2023-10-10",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ]
  },
  {
    id: 12,
    name: "Designer Sunglasses",
    description: "Protect your eyes in style with these UV-blocking sunglasses featuring a timeless design.",
    price: 119.99,
    category: "fashion",
    rating: 4.3,
    createdAt: "2023-09-15",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    ]
  }
];
