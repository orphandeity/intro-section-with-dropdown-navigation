import { Fragment, useState } from 'react';
import { Dialog, Disclosure } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  MenuIcon,
  CloseMenuIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  TodoIcon,
  CalendarIcon,
  RemindersIcon,
  PlanningIcon,
} from './Icons';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </button>
      <AnimatePresence>
        {isOpen && (
          <Dialog
            static
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <motion.div
              className="fixed inset-0 bg-_almost-black/30"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="fixed inset-0 flex justify-end">
              <Dialog.Panel
                as={motion.div}
                className="flex h-full w-2/3 flex-col bg-white p-4"
                initial={{ translateX: '100%' }}
                animate={{ translateX: '0%' }}
                exit={{ translateX: '100%' }}
                transition={{ duration: 0.5 }}
              >
                <button onClick={() => setIsOpen(false)} className="self-end">
                  <CloseMenuIcon />
                </button>
                <nav className="mt-8 flex flex-col gap-4 pl-2 text-sm text-_medium-gray">
                  <Features />
                  <Company />
                  <p>Careers</p>
                  <p>About</p>
                </nav>
                <button className="mt-8 text-sm font-normal text-_medium-gray transition-colors hover:text-_almost-black">
                  Login
                </button>
                <button className="mt-2 rounded-xl border-2 border-_medium-gray px-6 py-2 text-sm font-normal text-_medium-gray transition-colors hover:border-_almost-black hover:text-_almost-black">
                  Register
                </button>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}

const Features = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center gap-1">
            <p>Features</p>
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Disclosure.Button>
          <Disclosure.Panel className="flex flex-col gap-4 pl-4">
            <div className="flex gap-2">
              <div className="h-5 w-5">
                <TodoIcon />
              </div>
              <p>Todo</p>
            </div>
            <div className="flex gap-2">
              <div className="h-5 w-5">
                <CalendarIcon />
              </div>
              <p>Calendar</p>
            </div>
            <div className="flex gap-2">
              <div className="h-5 w-5">
                <RemindersIcon />
              </div>
              <p>Reminders</p>
            </div>
            <div className="flex gap-2">
              <div className="h-5 w-5">
                <PlanningIcon />
              </div>
              <p>Planning</p>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const Company = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex items-center gap-1">
            <p>Company</p>
            {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Disclosure.Button>
          <Disclosure.Panel className="flex flex-col gap-4 pl-4">
            <p>History</p>
            <p>Our Team</p>
            <p>Blog</p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
