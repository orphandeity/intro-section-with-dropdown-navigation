import React from 'react';
import clsx from 'clsx';

type Props = {
  className?: string;
};

function Header({ className }: Props) {
  return (
    <header className={clsx('flex items-center gap-12 px-8 py-6', className)}>
      <h1 className="text-4xl font-bold text-_almost-black">snap</h1>
      <nav className="flex gap-8 text-xs text-_medium-gray">
        <div>Features</div>
        <div>Company</div>
        <div>Careers</div>
        <div>About</div>
      </nav>
      <div className="flex flex-1 items-center justify-end gap-8">
        <button className="text-xs text-_medium-gray">Login</button>
        <button className="rounded-xl border-2 border-_medium-gray px-6 py-3 text-xs text-_medium-gray">
          Register
        </button>
      </div>
    </header>
  );
}

export default Header;
