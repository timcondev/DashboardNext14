import styles from './sidebar.module.css';
import { menuItems } from '../../../data/menuItems';
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import { MdLogout } from 'react-icons/md';
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/noavatar.png" alt="" width="50" height="50" />
        <div className={styles.userDetail}>
          <span className={styles.userName}>John Joe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key="title">
            <span className={styles.category}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};
export default Sidebar;
