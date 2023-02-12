import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import clsx from 'clsx';
import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PlanningIcon,
  RemindersIcon,
  TodoIcon,
} from './Icons';

function Company() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button
          className={clsx(
            'flex items-center gap-1 text-xs transition-colors hover:text-_almost-black',
            open ? 'text-_almost-black' : 'text-_medium-gray'
          )}
        >
          Company
          {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        align="start"
        sideOffset={16}
        className="flex flex-col gap-3 rounded-lg bg-white py-4 px-6 text-_medium-gray shadow-xl"
      >
        <DropdownMenu.Item asChild className="cursor-pointer">
          <p className="text-xs">History</p>
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild className="cursor-pointer">
          <p className="text-xs">Our Team</p>
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild className="cursor-pointer">
          <p className="text-xs">Blog</p>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default Company;
