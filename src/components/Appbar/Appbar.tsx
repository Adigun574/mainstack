import './Appbar.css';
import icon1 from '../../assets/images/app-bar-list-1.png';
import icon2 from '../../assets/images/app-bar-list-2.png';
import icon3 from '../../assets/images/app-bar-list-3.png';
import icon4 from '../../assets/images/app-bar-list-4.png';
import type { IAppBarIcon } from '../../models/appbar.model';

const AppBar = () => {

  const icons: IAppBarIcon[] = [
    { id: 1, img: icon1, label: 'Link in Bio' },
    { id: 2, img: icon2, label: 'Store' },
    { id: 3, img: icon3, label: 'Media Kit' },
    { id: 4, img: icon4, label: 'Invoicing' },
  ];

  return (
    <div className='app-bar'>
      {icons.map((icon) => (
          <div className="app-bar-icon">
            <img src={icon.img} alt='Icon' />
          </div>
      ))}
    </div>
  );
};

export default AppBar;
