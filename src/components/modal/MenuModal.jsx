import React, { useCallback } from 'react';
import styles from './MenuModal.module.css';
import { sectionTitles } from '../../enums';

const MenuModal = ({ setIsOpen }) => {
  const sectionArray = Object.values(sectionTitles);
  const modalRef = React.useRef();

  const menuItemClickHandler = useCallback(() => {
    if (modalRef?.current) {
      modalRef.current.classList.add(styles.modal__isHidden);
    }
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div ref={modalRef} className={[styles.modal]}>
      <div onClick={menuItemClickHandler} className={styles.modal_close}>
        X Close
      </div>
      <div className={styles.modal_text}>
        {sectionArray.map((menuItem) => (
          <a
            onClick={menuItemClickHandler}
            href={`#${menuItem}`}
            className={styles.modal_item}
            key={menuItem}
          >
            {menuItem}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MenuModal;
