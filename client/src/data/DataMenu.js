import { FaDesktop, FaPlaystation, FaXbox, FaGamepad } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { TfiAndroid } from "react-icons/tfi";

export const platformsList = {
  name: "PLATAFORMAS",
  path: "/platforms",
  data: [
    { name: "PC", icon: FaDesktop },
    { name: "PlayStation 4", icon: FaPlaystation },
    { name: "Xbox One", icon: FaXbox },
    { name: "Nintendo Switch", icon: BsNintendoSwitch },
    { name: "iOS", icon: MdOutlinePhoneIphone },
    { name: "Android", icon: TfiAndroid },
  ],
};
export const genresList = {
  name: "GENEROS",
  path: "/genres",
  data: [
    { name: "Free Online Games", icon: FaGamepad },
    { name: "Action", icon: FaGamepad },
    { name: "Strategy", icon: FaGamepad },
    { name: "RPG", icon: FaGamepad },
    { name: "Shooter", icon: FaGamepad },
    { name: "Adventure", icon: FaGamepad },
    { name: "Puzzle", icon: FaGamepad },
    { name: "Racing", icon: FaGamepad },
    { name: "Sports", icon: FaGamepad },
  ],
};
