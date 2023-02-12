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

function Features() {
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
          Features
          {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        align="end"
        sideOffset={16}
        className="flex flex-col gap-3 rounded-lg bg-white px-6 py-4 text-_medium-gray shadow-xl"
      >
        <DropdownMenu.Item className="flex cursor-pointer items-center justify-start gap-2">
          <div className="h-5 w-5">
            <TodoIcon />
          </div>
          <p className="text-xs">Todo List</p>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="flex cursor-pointer items-center justify-start gap-2">
          <div className="h-5 w-5">
            <CalendarIcon />
          </div>
          <p className="text-xs">Calendar</p>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="flex cursor-pointer items-center justify-start gap-2">
          <div className="h-5 w-5">
            <RemindersIcon />
          </div>
          <p className="text-xs">Reminders</p>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="flex cursor-pointer items-center justify-start gap-2">
          <div className="h-5 w-5">
            <PlanningIcon />
          </div>
          <p className="text-xs">Planning</p>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

export default Features;
