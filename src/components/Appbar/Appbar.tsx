import './Appbar.css';
import type { IAppBarIcon } from '../../models/appbar.model';
import { appbarIcons } from '../../data/appbar';

const AppBar = () => {

  const icons: IAppBarIcon[] = [...appbarIcons];

  return (
    <nav className='app-bar'>
      {icons.map((icon) => (
          <div key={icon.id} className="app-bar-icon tooltip-container">
            <img src={icon.img} alt={icon.label} />
            <span className="tooltip">{icon.label}</span>
          </div>
      ))}
    </nav>
  );
};

export default AppBar;
