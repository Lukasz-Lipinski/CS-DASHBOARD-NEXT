import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export interface LinkProps {
  href: string;
  label: string;
}

export const NavLink = ({
  href,
  label,
}: LinkProps) => {
  const { pathname } = useRouter();

  const setHref = useMemo(() => {
    return href === 'dashboard'
      ? '/dashboard'
      : `/dashboard/${href}`;
  }, [href]);

  const isActive = useMemo(() => {
    return pathname === setHref ? 'active' : '';
  }, [pathname, setHref]);

  return (
    <Link
      href={setHref}
      className={`nav-link ${isActive}`}
    >
      {label}
    </Link>
  );
};
