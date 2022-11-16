import Link from 'next/link';
import { FC, useId } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface NavigationProps {
  links: NavLink[];
}

export const Navigation: FC<NavigationProps> = ({
  links,
}) => {
  const id = useId();

  return (
    <nav>
      {links.map((link, index) => (
        <Link
          key={`${id}${link}${index}`}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
