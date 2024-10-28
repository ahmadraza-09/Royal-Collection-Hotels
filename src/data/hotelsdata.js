
import HotelKahkashan from '../assets/1.jpg'
import ShivalikHills from '../assets/shivalik2.jpeg'
import HotelApsara from '../assets/3.jpg'
import AppleOrchard from '../assets/appleorchardresort.jpg'
import HotelAroma from '../assets/8.jpg'
import PalaceBelvedere from '../assets/palace.jpg'
import ManuMaharani from '../assets/manu.jpeg'
import HotelLohaghat from '../assets/lohaghat-hotel.jpeg'
import VanasthaliJungle from '../assets/15.jpg'
import CorbettAroma from '../assets/corbettaroma.jpg'
import ManaliGrand from '../assets/20.jpg'
import SitaraInternational from '../assets/21.jpg'
import ArtiVilla from '../assets/45.jpg'
import NehaPalace from '../assets/22.jpg'
import HotelNitesh from '../assets/23.jpg'
import RigzinNest from '../assets/24.jpg'
import SarthakRegency from '../assets/25.jpg'
import SarthakResort from '../assets/26.jpg'
import CkInternational from '../assets/ck.jpg'
import MahaveerShimla from '../assets/mahaveer1.jpeg'
import GrandMadhushala from '../assets/madhushala.jpg'
import TriundDharamshala from '../assets/30.jpg'
import TriundHeights from '../assets/31.jpg'
import RcRegency from '../assets/32.jpg'
import Trance from '../assets/33.jpg'
import HotelChandani from '../assets/34.jpg'
import SevenSeas from '../assets/35.jpg'
import SnowArk from '../assets/36.jpg'
import RockVilla from '../assets/37.jpg'
import MohanPalace from '../assets/38.jpg'
import Hotel42 from '../assets/39.jpeg'
import RvContinental from '../assets/40.jpg'
import HotelShagun from '../assets/41.jpg'
import HotelClarion from '../assets/42.jpeg'
import SailaniResort from '../assets/44.jpg'
import GirNightResort from '../assets/girnightresort.jpeg'
import MayaRegency from '../assets/mayaregency.jpeg'
import NaturesValley from '../assets/17.jpg'
import FloraHaridwar from '../assets/19.jpg'
import SunResort from '../assets/43.jpg'
import PineAndDine from '../assets/11.jpg'
import MountainParadiseResort from '../assets/mountainparadise.jpg'
import SatpanthResort from '../assets/satopanth.jpg'
import ManaliQueen from '../assets/manali-queen.jpg'
import ParijatRetret from '../assets/parijatresorts.jpg'
import YonitInn from '../assets/yonit-inn.jpg'
import OakViewShimla from '../assets/oak view shimla.jpeg'
import ManlaHomeResort from '../assets/manla-home-resort.webp'
import LaurantBanon from '../assets/laurant-banon.jfif'
import HotelSukon from '../assets/hotel-sukon.jpg'
import SnowValleyResort from '../assets/snow-valley-resort.webp'
import Shilton from '../assets/6.jpg'


export const hotelsData = {
    mussoorie: [
        {
            id: 1,
            image: HotelKahkashan,
            name: "Hotel Kahkashan",
            price: 3999,
            rating: 3,
            description: "Kahkashan Mussoorie is situated in Mussoorie, a picturesque hill station that offers enchanting view of capacious green grasslands and snow clad Himalayas. The hotel is located at an accessible distance of 550m from Library Bus Stand.",
            rooms: 18,
            website: "https://hotelkahkashan.com",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2499 },
                    { type: "CPAI", price: 2999 },
                    { type: "MAPAI", price: 3499 }
                ]
            },
            contactDetails: {
                phone: "8743000182",
                email: "booking@rchronline.com"
            }
        },
        {
            id: 2,
            image: ShivalikHills,
            name: "Shivalik Hills Mussoorie",
            price: 5999,
            rating: 3,
            description: "Shivalik Hills Mussoorie By Royal Collection Hotels is one of the elegantly designed luxury hotel in Mussoorie . We offers our guests premium luxury in Stay . Hotel is special attraction for families , corporates , honeymooners and Leisure groups .",
            rooms: 46,
            website: "https://shivalikhillsmussoorie.com/",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 3299 },
                    { type: "CPAI", price: 3799 },
                    { type: "MAPAI", price: 4299 }
                ]
            },
            contactDetails: {
                phone: "9971834101",
                email: "kgm@royalcollectionhotels.com"
            }
        },
        {
            id: 3,
            image: HotelApsara,
            name: "Hotel Apsara Mussoorie",
            price: 4499,
            rating: 3,
            description: "Occupying a part of the main road, lying right opposite to the Picture Palace you can find Apsara Hotel Mussoorie. It is near to the bus or taxi stand and its location is easily found as it is situated on a busy road.",
            rooms: 25,
            website: "https://hotelapsaramussoorie.com/",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2299 },
                    { type: "CPAI", price: 2799 },
                    { type: "MAPAI", price: 3299 }
                ]
            },
            contactDetails: {
                phone: "8743000182",
                email: "mussoorie@rchr.in"
            }
        },
        {
            id: 4,
            image: Shilton,
            name: "Hotel Shilton Mussoorie",
            price: 6999,
            rating: 4,
            description: "The hotel at the heart of the town (Library Chowk, Mussoorie) will spell bound you with the picturesque view of the Doon valley. The hotel reflects true value of warmth, luxury and comfort with hospitable staff and flawless service.",
            rooms: 49,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2299 },
                    { type: "CPAI", price: 2799 },
                    { type: "MAPAI", price: 3299 }
                ]
            },
            contactDetails: {
                phone: "8743000182",
                email: "mussoorie@rchr.in"
            }
        }
    ],
    dhanaulti: [
        {
            id: 1,
            image: AppleOrchard,
            name: "Apple Orchard Resort",
            price: 3999,
            rating: 3,
            description: "Apple Orchard Resort, set in the stunning Himalayas, features 20 elegant guest rooms and 4 Luxury Swiss Tent Houses, all with breathtaking views. Enjoy the crisp air, fresh spring water, and a rejuvenating escape in nature.",
            rooms: 20,
            website: "https://www.appleorchardresort.com/",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 3499 },
                    { type: "CPAI", price: 3999 },
                    { type: "MAPAI", price: 4499 }
                ]
            },
            contactDetails: {
                phone: "9958140101",
                email: "booking@rchronline.com"
            }
        },
    ],
    nainital: [
        {
            id: 1,
            image: HotelAroma,
            name: "Hotel Aroma Nainital",
            price: 7999,
            rating: 3,
            description: "A complete family hotel Aroma Hotel established in 1967 is located in the tranquil woods of Ayarpata Nainital (approx. 300 mtrs from the Naini Lake).",
            rooms: 35,
            website: "https://hotelaromanainital.com/",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2999 },
                    { type: "CPAI", price: 3499 },
                    { type: "MAPAI", price: 3999 }
                ]
            },
            contactDetails: {
                phone: "8743000120",
                email: "booking@rchronline.com"
            }
        },
        {
            id: 2,
            image: PalaceBelvedere,
            name: "The Palace Belvedere",
            price: 8999,
            rating: 4,
            description: "The palace belvedere, The summer palace of the erstwhile Rajas of awagarh, It is reminiscent of the bygone days of the 'Raj Era built nearly a century ago by Raja Balwant Singh OBE of Awagarh in the year 1897.",
            rooms: 26,
            website: "https://www.thepalacebelvedere.com/",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 5499 },
                    { type: "CPAI", price: 5999 },
                    { type: "MAPAI", price: 6499 }
                ]
            },
            contactDetails: {
                phone: "9971845270",
                email: "booking@rchronline.com"
            }
        },
        {
            id: 3,
            image: ManuMaharani,
            name: "Manu Maharani Regency",
            price: 8999,
            rating: 3,
            description: "Manu Maharani Regency in Nainital is a luxurious hotel that offers an unparalleled experience of hospitality and comfort. Nestled amidst the picturesque mountains of Nainital, this hotel is one of the most sought-after destinations for tourists from all around the world.",
            rooms: 12,
            website: "https://manumaharaniregency.com/",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 3999 },
                    { type: "CPAI", price: 4499 },
                    { type: "MAPAI", price: 4999 }
                ]
            },
            contactDetails: {
                phone: "7835834101",
                email: "booking@rchronline.com"
            }
        },
    ],
    lohaghat: [
        {
            id: 1,
            image: HotelLohaghat,
            name: "Hotel Lohaghat Regency",
            price: 3999,
            rating: 3,
            description: "Discover the magic of Hotel Lohaghat Regency, where luxury and relaxation await. Book now for an unforgettable experience focused on your comfort and satisfaction.",
            rooms: 8,
            website: "https://www.lohaghatregency.com/",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2699 },
                    { type: "CPAI", price: 3199 },
                    { type: "MAPAI", price: 3499 }
                ]
            },
            contactDetails: {
                phone: "7669834101",
                email: "booking@rchronline.com"
            }
        },
    ],
    auli: [
        {
            id: 1,
            image: SatpanthResort,
            name: "Satopanth The Auli Resort",
            price: 6500,
            rating: 4,
            description: "Satopanth The Auli Resort, nestled in the dense oak forests of Chamoli, Uttarakhand, offers a serene escape just 10-15 minutes from Auli Slopes. Spanning 33,000 sq. ft., guests can enjoy stargazing, candlelight dinners, and bonfires away from city hustle.",
            rooms: 12,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2699 },
                    { type: "CPAI", price: 3199 },
                    { type: "MAPAI", price: 3499 }
                ]
            },
            contactDetails: {
                phone: "7669834101",
                email: "booking@rchronline.com"
            }
        },
    ],
    corbett: [
        {
            id: 1,
            image: VanasthaliJungle,
            name: "Vanasthali Jungle Resort",
            price: 4999,
            rating: 3,
            description: "Vanasthali Resort Jim Corbett, Ramnagar offers air-conditioned accommodation in Ramnagar. Among the facilities of this property are a restaurant, a 24-hour front desk and room service. Free private parking is available.",
            rooms: 14,
            website: "https://vanasthalicorbett.com/",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 3499 },
                    { type: "CPAI", price: 3999 },
                    { type: "MAPAI", price: 4499 }
                ]
            },
            contactDetails: {
                phone: "9717534101",
                email: "vanasthali@royalcollectionhotels.com"
            }
        },
        {
            id: 2,
            image: CorbettAroma,
            name: "Corbett Aroma Park",
            price: 5999,
            rating: 3,
            description: "Corbett Aroma Park is ideal for a relaxing both in summer and winter holidays; nestled on the edge of beautiful mountains its splendid view of the Corbett guarantees the calming of frayed urban nerves.",
            rooms: 18,
            website: "https://www.aromaparkcorbett.com/",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 3499 },
                    { type: "CPAI", price: 3999 },
                    { type: "MAPAI", price: 4499 }
                ]
            },
            contactDetails: {
                phone: "9958866101",
                email: "aromacorbett@royalcollectionhotels.com"
            }
        },
    ],
    manali: [
        {
            id: 1,
            image: ManaliGrand,
            name: "Hotel Manali Grand",
            price: 3999,
            rating: 3,
            description: "Manali Grand has fascinating view from its rooms & terrace. The sunset visible from hotels premises is soul stirring with a view of river Beas just flowing next to hotel premises adjoining nearby",
            rooms: 32,
            website: "https://hotelmanaligrand.com/",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2699 },
                    { type: "CPAI", price: 2999 },
                    { type: "MAPAI", price: 3499 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        {
            id: 2,
            image: SitaraInternational,
            name: "Hotel Sitara International",
            price: 3999,
            rating: 3,
            description: "Hotel Sitara International is a great choice for travellers looking for a 3 star star hotel in Manali. This Hotel stands out as one of the highly recommended hotel in Manali. Hotel is rated 3.9 out of 5, which is considered as very good.",
            rooms: 32,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 1899 },
                    { type: "CPAI", price: 2299 },
                    { type: "MAPAI", price: 2699 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        // {
        //     id: 3,
        //     image: ArtiVilla,
        //     name: "Arti Villa Manali",
        //     price: 0,
        //     rating: 3,
        //     description: "This charming property has everything required to make your stay memorable. It is exclusively designed with travelers requirements in mind. It encloses a comfortably furnished bedroom, with a snuggly bed covered with spotless linen.",
        //     rooms: 0
        // },
        {
            id: 4,
            image: NehaPalace,
            name: "Hotel Neha Palace",
            price: 3599,
            rating: 3,
            description: "Neha Palace is one of the ventures of Group of Royal Hotels having been into Hospitality business from the last many years offering quality services to its guests. Today Manali is the main tourist destination of Kullu Valley.",
            rooms: 32,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 1899 },
                    { type: "CPAI", price: 2299 },
                    { type: "MAPAI", price: 2699 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        {
            id: 5,
            image: HotelNitesh,
            name: "Hotel Nitesh Manali",
            price: 3599,
            rating: 3,
            description: "Hotel Nitesh is located near Siyali Mahadev Temple(0.7 mi) and Ghatotkach Tree Temple(0.8 mi).It offers a 24-hour front desk, room service, a sun terrace, and an on- site restaurant, along with free parking.",
            rooms: 16,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 1899 },
                    { type: "CPAI", price: 2299 },
                    { type: "MAPAI", price: 2699 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        {
            id: 6,
            image: ManaliQueen,
            name: "Hotel Manali Queen",
            price: 1299,
            rating: 3,
            description: "Hotel Manali Queen, Manali is a great choice for travellers looking for a 3 star star hotel in Manali. This Hotel stands out as one of the highly recommended hotel in Manali. Hotel is rated out of 5, which is considered as very good.",
            rooms: 20,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 1899 },
                    { type: "CPAI", price: 2299 },
                    { type: "MAPAI", price: 2699 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        {
            id: 7,
            image: LaurantBanon,
            name: "Laurent & Banon Resorts",
            price: 2599,
            rating: 4,
            description: "The Laurent and Banon by wishlist hospitality is a great choice for travellers looking for a 4 star star hotel in Manali. This Hotel stands out as one of the highly recommended hotel in Manali. Hotel is rated 4.2 out of 5, which is considered as very good.",
            rooms: 23,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 1899 },
                    { type: "CPAI", price: 2299 },
                    { type: "MAPAI", price: 2699 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        // {
        //     id: 6,
        //     image: RigzinNest,
        //     name: "Rigzin Nest Cottage",
        //     price: 3599,
        //     rating: 3,
        //     description: "Rigzin Nest Cottage Manali is located in Manali. Vashist Springs is a local attraction and if an activity is on the agenda, Mall Road and Solang Valley are worth checking out",
        //     rooms: 16
        // },
        // {
        //     id: 7,
        //     image: SarthakRegency,
        //     name: "Hotel Sarthak Regency",
        //     price: 3999,
        //     rating: 3,
        //     description: "Hotel Sarthak Regency, Manali, features immaculate rooms for leisure and business travelers.Choose from Premium Rooms or those with balconies offering hill or Beas views, all ensuring a classy stay.",
        //     rooms: 16
        // },
        // {
        //     id: 8,
        //     image: SarthakResort,
        //     name: "Hotel Sarthak Resort",
        //     price: 3999,
        //     rating: 3,
        //     description: "Sarthak Resorts is a well-known chain being run by the elites of the hospitality industry. The group has grand properties in Manali. All the properties under this chain are well-appointed and decked out with all contemporary amenities for a delightful staying experience.",
        //     rooms: 8
        // },
    ],
    shimla: [
        {
            id: 1,
            image: CkInternational,
            name: "Hotel CK International",
            price: 5599,
            rating: 3,
            description: "Hotel CK Internation Shimla is within a 15-minute drive of Viceregal Lodge and Himachal Pradesh University. This hotel is 2.5 KM from Shimla Mall and 2 KM State Museum.",
            rooms: 41,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2999 },
                    { type: "CPAI", price: 3499 },
                    { type: "MAPAI", price: 3999 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        {
            id: 2,
            image: MahaveerShimla,
            name: "Mahaveer Shimla",
            price: 4999,
            rating: 3,
            description: "Mahaveer Shimla by Royal Collection Hotels is an experience, not just a stay. Reconnect with nature and rejuvenate your senses in luxurious accommodations with exceptional service. It truly is the best hotel in Shimla.",
            rooms: 14,
            website: "https://mahaveershimla.com/",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2299 },
                    { type: "CPAI", price: 2699 },
                    { type: "MAPAI", price: 2999 }
                ]
            },
            contactDetails: {
                phone: "8743064101",
                email: "shimla@rchr.in"
            }
        },
        {
            id: 3,
            image: GrandMadhushala,
            name: "The Grand Madhushala",
            price: 4999,
            rating: 3,
            description: "The Grand Madhushala is Located in the beautiful city of Shimla, Hotel has 25 well furnished rooms with balcony and other modern amenities. If you are looking for a fun filled holiday in the heart of Shimla.It is an exceptional blend of affordability",
            rooms: 25,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 3299 },
                    { type: "CPAI", price: 3599 },
                    { type: "MAPAI", price: 3999 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        {
            id: 4,
            image: OakViewShimla,
            name: "Oak View Shimla",
            price: 1299,
            rating: 3,
            description: "Oak View in Shimla offers 3-star accommodation with free WiFi, parking, and a restaurant, just 5.7 km from Victory Tunnel and 4.6 km from Tara Devi Mandir. Circular Road is 7.2 km away, and Simla Airport is 18 km, with each room featuring a flat-screen TV and private bathroom.",
            rooms: 6,
            website: "https://oakview.in/",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 1899 },
                    { type: "CPAI", price: 2299 },
                    { type: "MAPAI", price: 2699 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "shimla@rchr.in"
            }
        },
        {
            id: 5,
            image: ManlaHomeResort,
            name: "Manla Home Resort",
            price: 0,
            rating: 3,
            description: "Manla Homes offers three- star accommodation near Shimla, featuring hotel rooms, huts, and villas with stunning Himalayan views and modern amenities.The resort includes a gym, spa, restaurant, and is 14 miles from central Shimla.",
            rooms: 0,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 1899 },
                    { type: "CPAI", price: 2299 },
                    { type: "MAPAI", price: 2699 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },

    ],
    dharamshala: [
        // {
        //     id: 1,
        //     image: TriundDharamshala,
        //     name: "Hotel Triund Dharamshala",
        //     price: 4999,
        //     rating: 3,
        //     description: "Situated just 2 kms from the tourist destination of Mcleodganj, the hotel offers accommodation in spacious rooms. All rooms are fully-furnished and offer complete rooms facilities.",
        //     rooms: 21
        // },
        {
            id: 2,
            image: TriundHeights,
            name: "Hotel Triund Heights",
            price: 6599,
            rating: 3,
            description: "Hotel Triund Heights is a speciality lodging in McLeod Ganj. It has free parking service with air conditioning room and flat screen TV.",
            rooms: 16,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 3799 },
                    { type: "CPAI", price: 4199 },
                    { type: "MAPAI", price: 4799 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        {
            id: 3,
            image: RcRegency,
            name: "Hotel RC Regency",
            price: 4999,
            rating: 3,
            description: "Far far away, behind the word mountains, far from the countries",
            rooms: 16,
            website: "https://rcregencydharamshala.com/",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2299 },
                    { type: "CPAI", price: 2499 },
                    { type: "MAPAI", price: 2899 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        {
            id: 4,
            image: Trance,
            name: "The Trance",
            price: 7299,
            rating: 4,
            description: "RC Regency Dharamshala is a newly built luxury property in Dharamshala. Set high above the city, amidst open spaces and high-tech facilities, its a private zone. Mcleodganj is a hill station near Dharamshala, popular among trekkers.",
            rooms: 32,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 1899 },
                    { type: "CPAI", price: 2299 },
                    { type: "MAPAI", price: 2699 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        // {
        //     id: 5,
        //     image: HotelChandani,
        //     name: "Hotel Chandani",
        //     price: 3999,
        //     rating: 3,
        //     description: "Provides excellent service and takes care of guest so that they face no issue and are always happy with the hotel's service. This hotel is situated at an excellent location wherein one can spend their time in the hotel in the best possible manner that they desire",
        //     rooms: 16
        // },
        {
            id: 6,
            image: SevenSeas,
            name: "Hotel Seven Seas",
            price: 4999,
            rating: 3,
            description: "Located in the heart of Upper Dharamshala, Hotel Seven Seas is a budget property known for its warm hospitality. The property is established in the lap of nature and provides a perfect retreat away from the city din.",
            rooms: 30,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 1899 },
                    { type: "CPAI", price: 2299 },
                    { type: "MAPAI", price: 2699 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
    ],
    dalhousie: [
        {
            id: 1,
            image: SnowArk,
            name: "Hotel Snow Ark",
            price: 3999,
            rating: 3,
            description: "Hotel Snow Ark Dalhousie is located in Dalhousie. Khajji Naga Shrine and Panjpula are local attractions and Garam Sadak is worth checking out if an activity is on the agenda",
            rooms: 8,
            website: "https://hotelsnowark.com/",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 1899 },
                    { type: "CPAI", price: 2299 },
                    { type: "MAPAI", price: 2699 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        // {
        //     id: 2,
        //     image: RockVilla,
        //     name: "Hotel Rock Villa",
        //     price: 4999,
        //     rating: 4,
        //     description: "Rock Villa is a heaven located on Dalhousie-Chamba Road. We have captured the romance of luxury rooms which have always been an important part of exotic lifestyle.",
        //     rooms: 10
        // },
        {
            id: 3,
            image: MohanPalace,
            name: "Hotel Mohan Palace",
            price: 6999,
            rating: 3,
            description: "Hotel MOHAN Palace – Dalhousie is best choice for your stay in Dalhousie. Located on Khajiar Road, walking distance from Gandhi Chowk of Dalhousie.",
            rooms: 10,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 1899 },
                    { type: "CPAI", price: 2299 },
                    { type: "MAPAI", price: 2699 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
    ],
    amritsar: [
        {
            id: 1,
            image: Hotel42,
            name: "Hotel 42",
            price: 3999,
            rating: 3,
            description: "Hotel 42 Amritsar is the most exclusive address, now a world of luxury, elegance & gracious efficiency. Amritsar Airport, Railway Station, Bus Stand and Golden Temple in Amritsar are just minutes away from the Hotel",
            rooms: 5,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2699 },
                    { type: "CPAI", price: 3299 },
                    { type: "MAPAI", price: 3999 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        {
            id: 2,
            image: RvContinental,
            name: "Hotel RV Continental",
            price: 4599,
            rating: 4,
            description: "Hotel RV Continental is an excellent choice for travellers visiting Amritsar, offering a family-friendly environment alongside many helpful amenities designed to enhance your stay.",
            rooms: 32,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 1899 },
                    { type: "CPAI", price: 2299 },
                    { type: "MAPAI", price: 2699 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        {
            id: 3,
            image: YonitInn,
            name: "Hotel Belofte Yonit Inn",
            price: 2000,
            rating: 3,
            description: "Belofte Yonit Inn, Amritsar, is 750 meters from Amritsar Junction and near attractions like the Golden Temple. Rooms have flat-screen TVs and mini fridges. Amenities include internet, room service, and a restaurant serving local cuisine.",
            rooms: 25,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2699 },
                    { type: "CPAI", price: 3299 },
                    { type: "MAPAI", price: 3999 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
    ],
    chandigarh: [
        {
            id: 1,
            image: HotelShagun,
            name: "Hotel Shagun",
            price: 4599,
            rating: 3,
            description: "Far far away, behind the word mountains, far from the countries",
            rooms: 60,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2999 },
                    { type: "CPAI", price: 3499 },
                    { type: "MAPAI", price: 3999 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        {
            id: 2,
            image: HotelClarion,
            name: "Hotel Clarion",
            price: 4999,
            rating: 3,
            description: "Clarion Inn Sevilla is a part of the choice hotel international, the largest chain of hotels with 6300 hotels in 30 countries all over the world.",
            rooms: 105,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2999 },
                    { type: "CPAI", price: 3499 },
                    { type: "MAPAI", price: 3999 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
        // {
        //     id: 3,
        //     image: SailaniResort,
        //     name: "Sailani Resort",
        //     price: 0,
        //     rating: 3,
        //     description: "Sailani Resort at Kala Amb is not just a routine holiday resort.It is a paradise reserved for the connoisseurs only.",
        //     rooms: 0
        // },
    ],
    ranikhet: [
        {
            id: 1,
            image: ParijatRetret,
            name: "Hotel Parijat Retreat",
            price: 3000,
            rating: 3,
            description: "PARIJAT RETREAT (30 KM FROM RANIKHET TOWARDS JIM CORBET) is a great choice for travellers looking for a 3 star star hotel in Khatoli. This Hotel stands out as one of the highly recommended hotel in Khatoli. Hotel is rated 4.2 out of 5, which is considered as very good.",
            rooms: 12,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 3499 },
                    { type: "CPAI", price: 3999 },
                    { type: "MAPAI", price: 4499 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
    ],
    // gujarat: [
    //     {
    //         id: 1,
    //         image: GirNightResort,
    //         name: "Gir Night Resort",
    //         price: 10499,
    //         rating: 3,
    //         description: "Perfectly situated in the heart of Gir Forest, The Gir Resort offers stunning views of the Hiran River and the surrounding jungle. Located on the Junagadh-Sasan Highway, it provides a unique experience for leisure and nature-loving travelers.",
    //         rooms: 20
    //     },
    // ],
    bhimtal: [
        {
            id: 1,
            image: MayaRegency,
            name: "Maya Regency Bhimtal",
            price: 3999,
            rating: 3,
            description: "Hotel Maya Regency boasts a unique architectural style that reflects its exceptional hospitality.With 18 spacious, well- furnished rooms equipped with modern amenities, it ensures a comfortable and memorable stay for all guests.",
            rooms: 18,
            website: "https://hotelmayaregency.com/",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2999 },
                    { type: "CPAI", price: 3499 },
                    { type: "MAPAI", price: 3999 }
                ]
            },
            contactDetails: {
                phone: "9650709101",
                email: "booking@rchronline.com"
            }
        },
    ],
    kausani: [
        {
            id: 1,
            image: NaturesValley,
            name: "Nature's Valley Resort",
            price: 3999,
            rating: 3,
            description: "Natures Valley Resort features spotlessly clean and furnished rooms equipped with cable television, intercom facility, tea/coffee maker, refrigerator, ironing board, direct dial phone surcharge, sofa unit and room heater",
            rooms: 18,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2999 },
                    { type: "CPAI", price: 3499 },
                    { type: "MAPAI", price: 3999 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
    ],
    haridwar: [
        {
            id: 1,
            image: FloraHaridwar,
            name: "Hotel Flora Haridwar",
            price: 3699,
            rating: 3,
            description: "Nestled in the city famous for its temples and ghats, Hotel Flora is one of the finest property in Haridwar. The nearest airport is the Jolly Grant Airport and the closest rail-head is the Haridwar Railway Station.",
            rooms: 15,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 2499 },
                    { type: "CPAI", price: 2999 },
                    { type: "MAPAI", price: 3499 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
    ],
    bandhavgarh: [
        {
            id: 1,
            image: SunResort,
            name: "The Sun Resort",
            price: 3999,
            rating: 3,
            description: "Our fully furnished rooms feature modern amenities such as climate control, Western toilets, power backup, satellite TV, Wi-Fi, and intercom. Enjoy home comforts in a traditional setting, with packages available for both weekend breaks and longer holidays.",
            rooms: 18,
            website: "",
            priceDetails: {
                validityDates: ["07th-Jan to 19th-Dec", ""],
                roomPrices: [
                    { type: "EPAI", price: 2499 },
                    { type: "CPAI", price: 2999 },
                    { type: "MAPAI", price: 3499 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
    ],
    almora: [
        // {
        //     id: 1,
        //     image: PineAndDine,
        //     name: "Hotel Pine and Dine",
        //     price: 3999,
        //     rating: 3,
        //     description: "Hotel Pine and Dine in Almora offers rooms with cable TV, private bathrooms, and wardrobes. Enjoy a continental breakfast each morning (subject to availability). The reception can provide local tips, and Pantnagar Airport is 63 km away.",
        //     rooms: 8,
        //     website: ""
        // },
        {
            id: 2,
            image: MountainParadiseResort,
            name: "The Mountain Paradise Resort",
            price: 4999,
            rating: 3,
            description: "The Mountain Paradise Resort in Almora Binsar offers luxurious amenities amidst jungle surroundings, featuring a lawn and the multi- cuisine restaurant Pine & Peak, just 2 km from Almora Mall Road.",
            rooms: 9,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 1899 },
                    { type: "CPAI", price: 2299 },
                    { type: "MAPAI", price: 2699 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },
    ],
    mukteshwar: [
        {
            id: 1,
            image: HotelSukon,
            name: "Hotel Sukon",
            price: 2999,
            rating: 3,
            description: "Located within 38 km of Bhimtal Lake and 47 km of Naini Lake in Mukteswar, Sukoon Retreat offers accommodation with seating area. This villa provides free private parking and a 24-hour front desk. The villa features family rooms.",
            rooms: 0,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 1899 },
                    { type: "CPAI", price: 2299 },
                    { type: "MAPAI", price: 2699 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },

    ],
    chail: [
        {
            id: 1,
            image: SnowValleyResort,
            name: "Snow Valley Resort",
            price: 0,
            rating: 3,
            description: "Snow Valley Resorts Shimla is a modern hotel in a peaceful hilltop village, offering air-conditioned rooms with mountain views, a games room, and an on-site restaurant. It’s 2 km from Sankat Mochan Temple and 4 km from the city center, with free parking available.",
            rooms: 0,
            website: "",
            priceDetails: {
                validityDates: ["15th-July to 25-Oct", "7th-Jan to 31st-March"],
                roomPrices: [
                    { type: "EPAI", price: 1899 },
                    { type: "CPAI", price: 2299 },
                    { type: "MAPAI", price: 2699 }
                ]
            },
            contactDetails: {
                phone: "9971834111",
                email: "booking@rchronline.com"
            }
        },

    ],
};
