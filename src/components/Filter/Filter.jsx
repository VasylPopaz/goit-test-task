import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { changeFilter } from 'storeRedux';
import { useUsers } from 'hooks';
import { statuses } from 'constants';

import s from './Filter.module.css';

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { filter } = useUsers();

  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleIconClick = e => {
    e.stopPropagation();
    handleToggle();
  };

  const handleOptionClick = option => {
    dispatch(changeFilter(option));
    setIsOpen(false);
  };

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div className={s.filterContainer} ref={dropdownRef}>
      <div className={s.filterToggle} onClick={handleToggle}>
        {filter}
        {isOpen ? (
          <MdKeyboardArrowUp size={20} onClick={e => handleIconClick(e)} />
        ) : (
          <MdKeyboardArrowDown size={20} onClick={e => handleIconClick(e)} />
        )}
      </div>
      {isOpen && (
        <ul className={s.list}>
          {statuses.map((item, index) => (
            <li
              key={index}
              className={`${s.listItem} ${
                item === filter ? 'active-status' : ''
              }`}
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
