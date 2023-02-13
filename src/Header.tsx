import clsx from 'clsx';
import { LogoIcon, MenuIcon, CloseMenuIcon } from './Icons';
import Features from './Features';
import Company from './Company';
import useWindowDimensions from './useWindowDimensions';
import MobileNav from './MobileNav';

type Props = {
  className?: string;
};

export default function Header({ className }: Props) {
  const width = useWindowDimensions();

  const breakpoint = 1440;

  return breakpoint <= width ? (
    <DesktopHeader className={className} />
  ) : (
    <MobileHeader className={className} />
  );
}

const DesktopHeader = ({ className }: Props) => {
  return (
    <header className={clsx('flex items-center gap-12 px-8 py-6', className)}>
      <LogoIcon />
      <nav className="flex flex-1 justify-between">
        <div className="flex items-center gap-6 text-xs text-_medium-gray">
          <Features />
          <Company />
          <p>Careers</p>
          <p className="cursor-pointer transition-colors hover:text-_almost-black">
            About
          </p>
        </div>
        <Login />
      </nav>
    </header>
  );
};

const MobileHeader = ({ className }: Props) => {
  return (
    <header className="flex items-start justify-between overflow-hidden px-4 py-6">
      <LogoIcon />
      <MobileNav />
    </header>
  );
};

const Login = () => {
  return (
    <div className="items-center justify-end gap-8 desktop:flex">
      <button className="text-xs text-_medium-gray transition-colors hover:text-_almost-black">
        Login
      </button>
      <button className="rounded-xl border-2 border-_medium-gray px-6 py-3 text-xs text-_medium-gray transition-colors hover:border-_almost-black hover:text-_almost-black">
        Register
      </button>
    </div>
  );
};
