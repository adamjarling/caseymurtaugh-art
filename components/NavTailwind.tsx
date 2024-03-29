"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ECDH } from "crypto";

const aboutItems = [
  {
    name: "Work",
    description: "Mixed media artwork",
    href: "/work",
  },
  {
    name: "Photos",
    description: "Photos of travel, art, and more",
    href: "/photos",
  },
];

const educatorItems = [
  {
    name: "Process",
    description: "The process of making art with students",
    href: "/process",
  },
  {
    name: "Student Artwork",
    description: "Portfolio of student artwork",
    href: "/student-artwork",
  },
  {
    name: "Curriculum",
    description: "Presentations and curriculum",
    href: "/curriculum",
  },
];

interface PWProps {
  label: string;
  items: {
    name: string;
    description: string;
    href: string;
  }[];
}

const PopOverWrapper: React.FC<PWProps> = ({ label, items }) => {
  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center text-sm font-semibold leading-6 text-gray-900 uppercase gap-x-1">
        {label}
        <ChevronDownIcon
          className="flex-none w-5 h-5 text-gray-400"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 overflow-hidden bg-white shadow-lg -right-16 top-full rounded-3xl ring-1 ring-gray-900/5">
          <div className="p-4">
            {items.map((item) => (
              <div
                key={item.name}
                className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
              >
                <div className="flex-auto">
                  <a
                    href={item.href}
                    className="block font-semibold text-gray-900"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600 normal-case">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

const DisclosureWrapper: React.FC<{
  label: string;
  items: {
    name: string;
    description: string;
    href: string;
  }[];
}> = ({ label, items }) => {
  return (
    <Disclosure as="div" className="-mx-3">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
            {label}
            <ChevronDownIcon
              className={classNames(
                open ? "rotate-180" : "",
                "h-5 w-5 flex-none"
              )}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {[...items].map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavTailwind() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="uppercase bg-white">
      <nav
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 font-medium">
            Casey Murtaugh
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a
            href="/about"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </a>
          <PopOverWrapper label="Artist" items={aboutItems} />
          <PopOverWrapper label="Educator" items={educatorItems} />
          <a
            href="/cv"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            CV
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 uppercase font-medium">
              Casey Murtaugh
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <a
                  href="/about"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  About
                </a>

                <DisclosureWrapper label="Artist" items={aboutItems} />
                <DisclosureWrapper label="Educator" items={educatorItems} />

                <a
                  href="/cv"
                  className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                >
                  CV
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
