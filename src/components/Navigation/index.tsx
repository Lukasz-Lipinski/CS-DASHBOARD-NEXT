import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useId, useMemo } from 'react';
import { LinkProps, NavLink } from './NavLink';

export const Navigation: FC = () => {
  const id = useId();

  const links: LinkProps[] = [
    { label: 'Home', href: 'dashboard' },
    { label: 'Profile', href: 'profile' },
    { label: 'Add product', href: 'add-product' },
    {
      label: 'Update product',
      href: 'update-product',
    },
  ];

  return (
    <nav className='nav navbar justify-content-between border-bottom border-1 rounded-2 px-2'>
      <div className='d-flex nav-pills nav-fill'>
        {links.map((link, index) => (
          <NavLink
            key={`${id}${link}${index}`}
            {...link}
          />
        ))}
      </div>
      <div>
        <button className='btn btn-outline-danger'>
          Log out
        </button>
      </div>
    </nav>
  );
};
