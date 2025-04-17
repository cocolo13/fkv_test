// profile-menu.tsx
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './profile-menu.module.scss';

interface ProfileMenuUIProps {
  handleLogout: () => void;
}

export const ProfileMenuUI: FC<ProfileMenuUIProps> = ({ handleLogout }) => {
  const { pathname } = useLocation();

  return (
    <div className={styles.menu}>
      <NavLink
        to={'/profile'}
        className={({ isActive }) =>
          `text text_type_main-medium text_color_inactive pt-4 pb-4 ${
            styles.link
          } ${isActive ? styles.link_active : ''}`
        }
        end
      >
        Профиль
      </NavLink>
      <NavLink
        to={'/profile/orders'}
        className={({ isActive }) =>
          `text text_type_main-medium text_color_inactive pt-4 pb-4 ${
            styles.link
          } ${isActive ? styles.link_active : ''}`
        }
      >
        История заказов
      </NavLink>
      <button
        className={`text text_type_main-medium text_color_inactive pt-4 pb-4 ${styles.button}`}
        onClick={handleLogout}
      >
        Выход
      </button>
      <p className='pt-20 text text_type_main-default text_color_inactive'>
        {pathname === '/profile'
          ? 'В этом разделе вы можете изменить свои персональные данные'
          : 'В этом разделе вы можете просмотреть свою историю заказов'}
      </p>
    </div>
  );
};
