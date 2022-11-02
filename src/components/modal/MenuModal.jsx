import React, { useCallback } from 'react';
import { Link } from 'react-scroll';
import styles from './MenuModal.module.css';
import { sectionTitles } from '../../enums';

const MenuModal = ({ setIsOpen }) => {
  const sectionArray = Object.values(sectionTitles);
  const modalRef = React.useRef();

  const menuItemClickHandler = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div ref={modalRef} className={[styles.modal]}>
      <div onClick={menuItemClickHandler} className={styles.modal_close}>
        X Close
      </div>
      <div className={styles.modal_text}>
        {sectionArray.map((menuItem, index) => (
          <Link
            to={`${menuItem}`}
            smooth={true}
            offset={0}
            duration={(index + 1) * 250}
            onClick={menuItemClickHandler}
            className={styles.modal_item}
            key={menuItem}
          >
            {menuItem}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuModal;
