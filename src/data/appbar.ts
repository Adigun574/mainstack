import type { IAppBarIcon } from "../models/appbar.model";
import icon1 from '../assets/images/app-bar-list-1.png';
import icon2 from '../assets/images/app-bar-list-2.png';
import icon3 from '../assets/images/app-bar-list-3.png';
import icon4 from '../assets/images/app-bar-list-4.png';

export const appbarIcons: IAppBarIcon[] = [
    { id: 1, img: icon1, label: "Link in Bio" },
    { id: 2, img: icon2, label: "Store" },
    { id: 3, img: icon3, label: "Media Kit" },
    { id: 4, img: icon4, label: "Invoicing" },
];