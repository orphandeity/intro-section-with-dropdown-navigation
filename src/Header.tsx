import React from 'react';
import clsx from 'clsx';
import Features from './Features';
import Company from './Company';

type Props = {
  className?: string;
};

function Header({ className }: Props) {
  return (
    <header className={clsx('flex items-center gap-12 px-8 py-6', className)}>
      <h1 className="text-3xl font-bold text-_almost-black">snap</h1>
      <nav className="flex items-center gap-6 text-xs text-_medium-gray">
        <Features />
        <Company />
        <p>Careers</p>
        <p className="cursor-pointer transition-colors hover:text-_almost-black">
          About
        </p>
      </nav>
      <div className="flex flex-1 items-center justify-end gap-8">
        <button className="text-xs text-_medium-gray transition-colors hover:text-_almost-black">
          Login
        </button>
        <button className="rounded-xl border-2 border-_medium-gray px-6 py-3 text-xs text-_medium-gray transition-colors hover:border-_almost-black hover:text-_almost-black">
          Register
        </button>
      </div>
    </header>
  );
}

export default Header;
