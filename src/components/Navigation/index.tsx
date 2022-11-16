import Link from 'next/link';
import { FC, useId } from 'react';

interface LinkProps {
  href: string;
  label: string;
}

export const Navigation: FC = () => {
  const id = useId();

  const links: LinkProps[] = [
    {label: "Home", href: 'dashboard'},
    {label: "Profile", href: 'profile'},
    {label: "Add product", href: 'add-product'},
    {label: "Update product", href: 'update-product'},
  ];

  const setLink = (incomingHref: string) => {
    return incomingHref === "dashboard" ? 'dashboard' : `/dashboard/${incomingHref}`
  };

  return (
    <nav>
      {links.map((link, index) => (
        <Link
          key={`${id}${link}${index}`}
          href={setLink(link.href)}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
