export interface CardData {
  src?: string;
  title: string;
  description: string;
  price?: string;
}

const cardData: CardData[] = [
  {
    src: 'https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720',
    title: 'Online Experiences',
    description: 'Unique activities we can do together, led by a world of hosts.',
  },
  {
    src: 'https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720',
    title: 'Unique stays',
    description: 'Spaces that are more than just a place to sleep.',
  },
  {
    src: 'https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720',
    title: 'Entire homes',
    description: 'Comfortable private places, with room for friends or family.',
  },
  {
    src: 'https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg',
    title: '3 Bedroom Flat in Bournemouth',
    description: 'Superhost with a stunning view of the beachside in Sunny Bournemouth',
    price: '£130/night',
  },
  {
    src: 'https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg',
    title: 'Penthouse in London',
    description: 'Enjoy the amazing sights of London with this stunning penthouse',
    price: '£350/night',
  },
  {
    src: 'https://media.nomadicmatt.com/2018/apartment.jpg',
    title: '1 Bedroom apartment',
    description: 'Superhost with great amenities and a fabolous shopping complex nearby',
    price: '£70/night',
  },
];

const searchButtonText: string[] = [
  'Stays nearby',
  'Cancellation Flexibility',
  'Type of place',
  'Price',
  'Rooms and beds',
  'More filters',
];

export interface SearchResultData extends CardData {
  img: string;
  location: string;
  star: number;
  total: string;
}

const searchResultData: SearchResultData[] = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU',
    location: 'Private room in center of London',
    title: 'Stay at this spacious Edwardian House',
    description: '1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine',
    star: 4.73,
    price: '£30 / night',
    total: '£117 total',
  },
  {
    img: 'https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg',
    location: 'Private room in center of London',
    title: 'Independant luxury studio apartment',
    description: '2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen',
    star: 4.3,
    price: '£40 / night',
    total: '£157 total',
  },
  {
    img: 'https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg',
    location: 'Private room in center of London',
    title: 'London Studio Apartments',
    description: '4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine',
    star: 3.8,
    price: '£35 / night',
    total: '£207 total',
  },
  {
    img:
      'https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI',
    location: 'Private room in center of London',
    title: '30 mins to Oxford Street, Excel London',
    description: '1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine',
    star: 4.1,
    price: '£55 / night',
    total: '£320 total',
  },
  {
    img:
      'https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg',
    location: 'Private room in center of London',
    title: 'Spacious Peaceful Modern Bedroom',
    description: '3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning',
    star: 5.0,
    price: '£60 / night',
    total: '£450 total',
  },
  {
    img:
      'https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937',
    location: 'Private room in center of London',
    title: 'The Blue Room In London',
    description: '2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine',
    star: 4.23,
    price: '£65 / night',
    total: '£480 total',
  },
  {
    img: 'https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp',
    location: 'Private room in center of London',
    title: '5 Star Luxury Apartment',
    description: '3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine',
    star: 3.85,
    price: '£90 / night',
    total: '£650 total',
  },
];

export { cardData, searchButtonText, searchResultData };
