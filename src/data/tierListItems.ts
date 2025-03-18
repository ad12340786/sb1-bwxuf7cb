import { Gamepad, Joystick, Trophy, Dice1, Puzzle, TowerControl as Controller, Ghost, Sword, Target, Dumbbell, Music, Headphones, Mic, Radio, Piano, Guitar, Drum, Microscope as Microphone, Speaker, PlayCircle, Film, Tv, Clapperboard, Video, MonitorPlay, Camera, Theater, Popcorn, Ticket, Camera as VideoCamera, Medal, FolderRoot as Football, ShoppingBasket as Basketball, Baseline as Baseball, Tent as Tennis, Bike, Minimize as Swimming, FileWarning as Running, Bold as Golf, Box as Boxing, Book, BookOpen, Library, Bookmark, BookMarked, Newspaper, ScrollText, Files, FileText, FileSearch, Utensils, Pizza, Coffee, Beer, Sandwich, Apple, IceCream, Cake, Soup, Carrot, Shirt, ShoppingBag, Scissors, Crown, Glasses, Watch, BellRing as Ring, Shovel as Shoe, Hand as Handbag, Diamond, Palette, PaintBucket, Brush, Image, Frame, Caravan as Canvas, Baseline as Easel, Sticker as ColorPicker, CircuitBoard as ArtBoard, GalleryVertical as Gallery, Globe, Plane, Mountain, Map, Compass, Hotel, Bean as Beach, Train, Car, Import as Passport, Users, User, Group, PersonStanding, UserCircle, UserPlus, UserCheck, UserCog, UserMinus, UsersRound } from 'lucide-react';

export interface TierListItem {
  id: string;
  content: string;
  icon: any;
}

export const categoryIcons = {
  games: Gamepad,
  music: Music,
  movies: Film,
  sports: Trophy,
  books: Book,
  food: Utensils,
  fashion: Shirt,
  art: Palette,
  travel: Globe,
  people: Users,
};

const createItems = (category: string, items: Array<{ name: string; icon: any }>): TierListItem[] => {
  return items.map((item, index) => ({
    id: `${category}-${index + 1}`,
    content: item.name,
    icon: item.icon
  }));
};

export const categoryItems: Record<string, TierListItem[]> = {
  games: createItems('games', [
    { name: 'The Legend of Zelda', icon: Sword },
    { name: 'Super Mario', icon: Joystick },
    { name: 'Minecraft', icon: Puzzle },
    { name: 'Grand Theft Auto', icon: Controller },
    { name: 'Dark Souls', icon: Ghost },
    { name: 'Call of Duty', icon: Target },
    { name: 'FIFA', icon: Trophy },
    { name: 'Pokemon', icon: Gamepad },
    { name: 'Resident Evil', icon: Dice1 },
    { name: 'God of War', icon: Dumbbell }
  ]),
  music: createItems('music', [
    { name: 'Rock', icon: Guitar },
    { name: 'Hip Hop', icon: Mic },
    { name: 'Jazz', icon: Piano },
    { name: 'Classical', icon: Music },
    { name: 'Electronic', icon: Speaker },
    { name: 'Pop', icon: Microphone },
    { name: 'Blues', icon: Drum },
    { name: 'Country', icon: Radio },
    { name: 'Metal', icon: Headphones },
    { name: 'Indie', icon: PlayCircle }
  ]),
  movies: createItems('movies', [
    { name: 'Action', icon: Sword },
    { name: 'Comedy', icon: Theater },
    { name: 'Drama', icon: Clapperboard },
    { name: 'Horror', icon: Ghost },
    { name: 'Sci-Fi', icon: MonitorPlay },
    { name: 'Romance', icon: Film },
    { name: 'Documentary', icon: Camera },
    { name: 'Animation', icon: Video },
    { name: 'Thriller', icon: Popcorn },
    { name: 'Fantasy', icon: VideoCamera }
  ]),
  sports: createItems('sports', [
    { name: 'Football', icon: Football },
    { name: 'Basketball', icon: Basketball },
    { name: 'Baseball', icon: Baseball },
    { name: 'Tennis', icon: Tennis },
    { name: 'Swimming', icon: Swimming },
    { name: 'Cycling', icon: Bike },
    { name: 'Running', icon: Running },
    { name: 'Golf', icon: Golf },
    { name: 'Boxing', icon: Boxing },
    { name: 'Olympics', icon: Medal }
  ]),
  books: createItems('books', [
    { name: 'Fiction', icon: Book },
    { name: 'Non-Fiction', icon: BookOpen },
    { name: 'Mystery', icon: Library },
    { name: 'Fantasy', icon: Bookmark },
    { name: 'Science', icon: BookMarked },
    { name: 'Biography', icon: ScrollText },
    { name: 'History', icon: Newspaper },
    { name: 'Poetry', icon: Files },
    { name: 'Self-Help', icon: FileText },
    { name: 'Comics', icon: FileSearch }
  ]),
  food: createItems('food', [
    { name: 'Italian', icon: Pizza },
    { name: 'Japanese', icon: Utensils },
    { name: 'Mexican', icon: Sandwich },
    { name: 'Chinese', icon: Soup },
    { name: 'Indian', icon: Coffee },
    { name: 'French', icon: Beer },
    { name: 'Desserts', icon: IceCream },
    { name: 'Healthy', icon: Apple },
    { name: 'Bakery', icon: Cake },
    { name: 'Vegetarian', icon: Carrot }
  ]),
  fashion: createItems('fashion', [
    { name: 'Casual', icon: Shirt },
    { name: 'Formal', icon: Crown },
    { name: 'Streetwear', icon: ShoppingBag },
    { name: 'Accessories', icon: Glasses },
    { name: 'Designer', icon: Scissors },
    { name: 'Watches', icon: Watch },
    { name: 'Jewelry', icon: Ring },
    { name: 'Footwear', icon: Shoe },
    { name: 'Bags', icon: Handbag },
    { name: 'Luxury', icon: Diamond }
  ]),
  art: createItems('art', [
    { name: 'Painting', icon: Palette },
    { name: 'Sculpture', icon: Frame },
    { name: 'Photography', icon: Image },
    { name: 'Digital Art', icon: PaintBucket },
    { name: 'Traditional', icon: Brush },
    { name: 'Modern', icon: Canvas },
    { name: 'Contemporary', icon: Easel },
    { name: 'Abstract', icon: ColorPicker },
    { name: 'Street Art', icon: ArtBoard },
    { name: 'Installations', icon: Gallery }
  ]),
  travel: createItems('travel', [
    { name: 'Europe', icon: Globe },
    { name: 'Asia', icon: Plane },
    { name: 'Americas', icon: Mountain },
    { name: 'Africa', icon: Map },
    { name: 'Adventure', icon: Compass },
    { name: 'Luxury', icon: Hotel },
    { name: 'Beach', icon: Beach },
    { name: 'City', icon: Train },
    { name: 'Road Trip', icon: Car },
    { name: 'Backpacking', icon: Passport }
  ]),
  people: createItems('people', [
    { name: 'Artists', icon: Users },
    { name: 'Athletes', icon: PersonStanding },
    { name: 'Musicians', icon: Group },
    { name: 'Scientists', icon: UserCircle },
    { name: 'Influencers', icon: User },
    { name: 'Leaders', icon: UserPlus },
    { name: 'Entrepreneurs', icon: UserCheck },
    { name: 'Innovators', icon: UserCog },
    { name: 'Activists', icon: UserMinus },
    { name: 'Educators', icon: UsersRound }
  ])
};

export const findMatchingIcon = (category: string, itemName: string): any => {
  // Default to the category's main icon if no specific match
  return categoryIcons[category] || categoryIcons.games;
};