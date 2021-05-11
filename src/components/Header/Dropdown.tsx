import * as React from 'react';
import { Link } from 'gatsby'
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {
  visible,
  hidden,
  dropdown,
  dropdown__link,
  dropdown__toggle,
  dropdown__items
} from './Dropdown.module.scss';

type Props = {
  children?: React.ReactNode
  list: {
    url: string
    text: string
  }[]
};

const Dropdown: React.FC<Props & React.HTMLAttributes<HTMLElement>> = (props: Props) => {
  const { buttonProps, isOpen } = useDropdownMenu(2);

  return (
    <div className={dropdown}>
      <button type="button" {...buttonProps} className={dropdown__toggle}>
        <span>{props.children}</span>
        <ExpandMore fontSize="small" />
      </button>
      <div
        className={`${isOpen ? visible : hidden} ${dropdown__items}`}
        role='menu'
      >
        {props.list.map(item => {
          return (
            <Link
              to={item.url}
              role="menuitem"
              className={dropdown__link}
            >
              {item.text}
            </Link>
          )
        })}
      </div>
    </div >
  );
};

export default Dropdown;
