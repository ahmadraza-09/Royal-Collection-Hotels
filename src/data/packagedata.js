// src/data/packageData.js

import LongWeekendPackage from '../assets/packages/package-banner1.jpg';
import JungleSafariPackage from '../assets/packages/package-banner2.jpg';
import HoneymoonPackage from '../assets/packages/package-banner3.jpg';
import DelhiCorbettDelhi from '../assets/packages/package-banner4.jpg';

import Hotel from '../assets/icons/resort.png';
import Food from '../assets/icons/dinner.png';
import Coffee from '../assets/icons/coffee-cup.png';
import Bonfire from '../assets/icons/bonfire.png';
import Activity from '../assets/icons/dance.png';

import LongWeekendPackageGallery1 from '../assets/packages/long-weekend-package/long-weekend-package1.jpg'
import LongWeekendPackageGallery2 from '../assets/packages/long-weekend-package/long-weekend-package2.jpg'
import LongWeekendPackageGallery3 from '../assets/packages/long-weekend-package/long-weekend-package3.jpg'
import LongWeekendPackageGallery4 from '../assets/packages/long-weekend-package/long-weekend-package4.jpg'

import ShimlaVolvoPackage from '../assets/packages/shimla-volvo-package.jpg';
import ShimlaCarPackage from '../assets/packages/shimla-car-package.jpg';

import ShimlaVolvoPackageGallery1 from '../assets/packages/travel-package-gallery/shimla-volvo-package-gallery1.jpg';
import ShimlaVolvoPackageGallery2 from '../assets/packages/travel-package-gallery/shimla-volvo-package-gallery2.jpg';
import ShimlaVolvoPackageGallery3 from '../assets/packages/travel-package-gallery/shimla-volvo-package-gallery3.jpg';
import ShimlaVolvoPackageGallery4 from '../assets/packages/travel-package-gallery/shimla-volvo-package-gallery4.jpg';

import ShimlaCarPackageGallery1 from '../assets/packages/travel-package-gallery/shimla-car-package-gallery1.jpg';
import ShimlaCarPackageGallery2 from '../assets/packages/travel-package-gallery/shimla-car-package-gallery2.jpg';
import ShimlaCarPackageGallery3 from '../assets/packages/travel-package-gallery/shimla-car-package-gallery3.jpg';
import ShimlaCarPackageGallery4 from '../assets/packages/travel-package-gallery/shimla-car-package-gallery4.jpg';

const packageData = [
    {
        state: 'Uttarakhand',
        packages: [
            {
                image: LongWeekendPackage,
                name: 'Long Weekend Package',
                description: 'Escape the hustle and unwind with our exclusive long weekend package, featuring cozy stays, exciting activities, and gourmet dining. Perfect for couples, families, or solo travelers—book now for an unforgettable getaway!',
                icons: [
                    { iconImage: Hotel, iconName: 'Hotel' },
                    { iconImage: Food, iconName: 'Food' },
                    { iconImage: Coffee, iconName: 'Coffee' },
                    { iconImage: Bonfire, iconName: 'Bonfire' },
                    { iconImage: Activity, iconName: 'Activity' }
                ],
                packageInclusive: [
                    '02 Breakfast, 02 Lunch & 02 Dinner',
                    '02 Nights/03 Days Stay',
                    'Bonfire with Light Music',
                    'Hi-Tea with Snacks(01 Veg)'
                ],
                packageExclusive: [
                    'Photography Services',
                    'Personal Expenses',
                    'Activity',
                    'Safari',
                    'Dj Sound',
                    'Pickup & Drop',
                ],
                packageGallery: [
                    LongWeekendPackageGallery1,
                    LongWeekendPackageGallery2,
                    LongWeekendPackageGallery3,
                    LongWeekendPackageGallery4
                ]
            },
            {
                image: JungleSafariPackage,
                name: 'Jungle Safari Package',
                description: 'Embark on an unforgettable adventure with our Jungle Safari Package—explore lush landscapes, encounter wildlife up close, and relax in nature-inspired accommodations. Perfect for thrill-seekers and nature lovers alike!',
                icons: [
                    { iconImage: Hotel, iconName: 'Hotel' },
                    { iconImage: Food, iconName: 'Food' },
                    { iconImage: Coffee, iconName: 'Coffee' },
                    { iconImage: Bonfire, iconName: 'Bonfire' },
                    { iconImage: Activity, iconName: 'Activity' }
                ],
                packageInclusive: [
                    '02 Breakfast, 02 Lunch & 02 Dinner',
                    '03 Nights/04 Days Stay',
                    'Jungle Safari',
                    'Hi-Tea with Snacks(01 Veg)',
                    'Bonfire with Light Music'
                ],
                packageExclusive: [
                    'Photography Services',
                    'Personal Expenses',
                    'Activity',
                    'Dj Sound',
                    'Pickup & Drop',
                ],
                packageGallery: [
                    LongWeekendPackageGallery1,
                    LongWeekendPackageGallery2,
                    LongWeekendPackageGallery3,
                    LongWeekendPackageGallery4
                ]
            },
            {
                image: HoneymoonPackage,
                name: 'Honeymoon Package',
                description: 'Celebrate love with our Honeymoon Package—romantic stays, candlelight dinners, and unforgettable experiences crafted just for you. Begin your forever with moments to cherish!',
                icons: [
                    { iconImage: Hotel, iconName: 'Hotel' },
                    { iconImage: Food, iconName: 'Food' },
                    { iconImage: Coffee, iconName: 'Coffee' },
                    { iconImage: Bonfire, iconName: 'Bonfire' },
                    { iconImage: Activity, iconName: 'Activity' }
                ],
                packageInclusive: [
                    '02 Breakfast, 01 Candlelight Dinner',
                    '02 Nights/03 Days Stay',
                    'Candle Light Dinner',
                    'Room Decaoration with Cake',
                    'Hi-Tea with Snacks(01 Veg)',
                    'Bonfire with Light Music',
                ],
                packageExclusive: [
                    'Photography Services',
                    'Personal Expenses',
                    'Activity',
                    'Safari',
                    'Dj Sound',
                    'Pickup & Drop',
                ],
                packageGallery: [
                    LongWeekendPackageGallery1,
                    LongWeekendPackageGallery2,
                    LongWeekendPackageGallery3,
                    LongWeekendPackageGallery4
                ]
            },
            {
                image: DelhiCorbettDelhi,
                name: 'Delhi - Corbett - Delhi',
                description: 'Experience the perfect getaway with our Delhi-Corbett-Delhi package—explore the vibrant city life of Delhi, unwind amidst the natural beauty of Jim Corbett, and enjoy a hassle-free return. A blend of adventure and relaxation awaits you!',
                icons: [
                    { iconImage: Hotel, iconName: 'Hotel' },
                    { iconImage: Food, iconName: 'Food' },
                    { iconImage: Coffee, iconName: 'Coffee' },
                    { iconImage: Bonfire, iconName: 'Bonfire' },
                    { iconImage: Activity, iconName: 'Activity' }
                ],
                packageDuration: '08 Nights / 09 Days',
                packageInclusive: [
                    'Welcome Drinks on Arrival',
                    'Daily Breakfast & Dinner at hotel',
                    'Jeep Safari',
                    '02 Night Acommodation at Resort',
                    'All transfers & Sightseeing by Dzire/Etios',
                    'Toll Tax & Parking',
                    'Pickup & Drop - Ex Delhi'
                ],
                packageExclusive: [
                    'Photography Services',
                    'Personal Expenses',
                    'Activity',
                    'Safari',
                    'Dj Sound',
                ],
                packageGallery: [
                    LongWeekendPackageGallery1,
                    LongWeekendPackageGallery2,
                    LongWeekendPackageGallery3,
                    LongWeekendPackageGallery4
                ],
                packageDestinations: [
                    {
                        name: 'Nainital',
                        hotelName: 'Hotel Aroma Nainital',
                        food: 'Breakfast & Dinner',
                        duration: '02 Night',
                        descriptionLists:
                            [
                                'Experience the cool climate and scenic beauty of Nainital.',
                                'Relax by the serene Naini Lake and enjoy boating.',
                                'Stroll along Mall Road for shopping and local cuisines.',
                                'Visit Snow View Point for breathtaking mountain views.',
                                'Explore nearby attractions like Nainital Zoo and Eco Cave Garden.'
                            ]
                    },
                    {
                        name: 'Kausani',
                        hotelName: 'Nature’s Valley Resort',
                        food: 'Breakfast & Dinner',
                        duration: '01 Night',
                        descriptionLists:
                            [
                                'Witness the mesmerizing views of the Himalayan peaks.',
                                'Enjoy the peace and tranquility of Nature’s Valley.',
                                'Visit the famous Anasakti Ashram for spiritual vibes.',
                                'Explore the ancient Baijnath Temple complex.',
                                'Relish beautiful sunsets at the Kausani Tea Estate.'
                            ]
                    },
                    {
                        name: 'Jim Corbett',
                        hotelName: 'Hotel Aroma Park',
                        food: 'Breakfast & Dinner',
                        duration: '01 Night',
                        descriptionLists: 
                        [
                            'Discover wildlife at Jim Corbett National Park.',
                            'Go on thrilling jeep safaris to spot tigers and elephants.',
                            'Explore the Corbett Museum for a historical touch.',
                            'Enjoy birdwatching and photography in lush surroundings.',
                            'Relax amidst nature with peaceful walks and picnics.'
                        ]
                    },
                    {
                        name: 'Mussoorie',
                        hotelName: 'Hotel Apsara',
                        food: 'Breakfast & Dinner',
                        duration: '02 Night',
                        descriptionLists: 
                        [
                            'Revel in the charm of Mussoorie, the Queen of Hills.',
                            'Visit the famous Kempty Falls for a refreshing experience.',
                            'Explore Gun Hill and enjoy panoramic views of the valley.',
                            'Shop for souvenirs and enjoy local food at Mall Road.',
                            'Visit Camel’s Back Road for serene nature walks.'
                        ]
                    },
                    {
                        name: 'Haridwar',
                        hotelName: 'Hotel Flora',
                        food: 'Breakfast & Dinner',
                        duration: '01 Night',
                        descriptionLists: 
                        [
                            'Dive into the spiritual ambiance of Haridwar.',
                            'Attend the divine Ganga Aarti at Har Ki Pauri.',
                            'Visit temples like Mansa Devi and Chandi Devi for blessings.',
                            'Explore the vibrant local markets for handicrafts and sweets.',
                            'Relax by the serene banks of the Ganges River.'
                        ]
                    },
                    {
                        name: 'Rishikesh',
                        hotelName: 'Hotel Blis Ganga',
                        food: 'Breakfast & Dinner',
                        duration: '01 Night',
                        descriptionLists: 
                        [
                            'Experience peace and adventure in Rishikesh.',
                            'Try river rafting and other thrilling activities.',
                            'Visit iconic landmarks like Laxman Jhula and Ram Jhula.',
                            'Explore ashrams for yoga, meditation, and spiritual growth.',
                            'Enjoy the serene Ganga Aarti at Triveni Ghat.'
                        ]
                    },
                ]
            },
        ],
    },
    {
        state: 'Himachal Pradesh',
        packages: [
            {
                image: ShimlaVolvoPackage,
                name: 'Shimla Volvo Package',
                description: 'Experience a relaxing getaway with our Shimla Volvo Package, featuring luxury Volvo travel, cozy stays, and visits to top attractions like Mall Road, Christ Church, and Kufri. Enjoy scenic views, delicious meals, and a hassle-free vacation in the Queen of Hills. Perfect for families and couples!',
                icons: [
                    { iconImage: Hotel, iconName: 'Hotel' },
                    { iconImage: Food, iconName: 'Food' },
                    { iconImage: Coffee, iconName: 'Coffee' },
                    { iconImage: Bonfire, iconName: 'Bonfire' },
                    { iconImage: Activity, iconName: 'Activity' }
                ],
                packageInclusive: [
                    'Welcome drink on arrival',
                    '2 Breakfast & 2 Dinner',
                    'One day Kufri Tour',
                    'Accommodation for 2 days in Deluxe room',
                    'All transfers and sightseeing by non-AC vehicle',
                    'Delhi – Shimla – Delhi transfers by AC Volvo bus',
                    'One day local sightseeing of Shimla',
                ],
                packageExclusive: [
                    'Any meal other than those mentioned above',
                    'Heater charges',
                    'Any adventure activity (Paragliding, Snow Skating, Horse riding, River crossing, Rafting, etc.) & entrance fees for any monument',
                    'Any personal expense',
                ],
                packageGallery: [
                    ShimlaVolvoPackageGallery1,
                    ShimlaVolvoPackageGallery2,
                    ShimlaVolvoPackageGallery3,
                    ShimlaVolvoPackageGallery4,
                ],
            },
            {
                image: ShimlaCarPackage,
                name: 'Shimla Car Package',
                description: 'Discover the beauty of Shimla with our Shimla Car Package, offering private car travel, comfortable stays, and visits to top attractions like Mall Road, Jakhoo Temple, and Kufri. Enjoy a personalized journey, stunning views, and a relaxing vacation in the Queen of Hills. Perfect for families and couples seeking convenience and comfort!',
                icons: [
                    { iconImage: Hotel, iconName: 'Hotel' },
                    { iconImage: Food, iconName: 'Food' },
                    { iconImage: Coffee, iconName: 'Coffee' },
                    { iconImage: Bonfire, iconName: 'Bonfire' },
                    { iconImage: Activity, iconName: 'Activity' }
                ],
                packageInclusive: [
                    'Welcome drink on arrival',
                    '2 Breakfast & 2 Dinner',
                    'One day Kufri Tour',
                    'Accommodation for 2 days in Deluxe room',
                    'All transfers and sightseeing by car',
                    'Delhi – Shimla – Delhi transfers by car',
                    'One day local sightseeing of Shimla',
                ],
                packageExclusive: [
                    'Any meal other than those mentioned above',
                    'Heater charges',
                    'Any adventure activity (Paragliding, Snow Skating, Horse riding, River crossing, Rafting, etc.) & entrance fees for any monument',
                    'Any personal expense',
                ],
                packageGallery: [
                    ShimlaCarPackageGallery1,
                    ShimlaCarPackageGallery2,
                    ShimlaCarPackageGallery3,
                    ShimlaCarPackageGallery4,
                ],
            },
        ],
    },
];

export default packageData;
