/** @format */

import { Dispatch, Fragment, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '../../assets/logo/logo.svg';
import Q1Icon from '../../assets/icon/Q1.svg';
import Q2Icon from '../../assets/icon/Q2.svg';

const navigation = [
  { name: 'Question 1', href: '/', icon: Q1Icon },
  { name: 'Question 2', href: '/projects', icon: Q2Icon },
];

export default function SidebarMenu({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();

  return (
    <>
      <div>
        {/* mobile sidebar drawer */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 flex z-40 md:hidden'
            onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'>
              <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-slate-200	'>
                <div className='flex-shrink-0 flex items-center px-4'>
                  <span className='text-white font-roboto font-bold text-2xl'>
                    <Logo />
                  </span>
                </div>
                <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                  <nav className='px-2 space-y-1'>
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href} passHref>
                        <button
                          className={`${
                            item.href === router.pathname
                              ? 'bg-slate-200 text-sky-400'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-sky-400	'
                          } group w-full flex items-center px-2 py-2 text-base font-medium rounded-md transition
                        `}>
                          <item.icon
                            className={`${
                              item.href === router.pathname
                                ? 'text-sky-400'
                                : 'text-sky-400 group-hover:text-sky-400'
                            }
                            mr-4 flex-shrink-0 h-6 w-6
                          `}
                            aria-hidden='true'
                          />
                          {item.name}
                        </button>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className='flex-shrink-0 w-14' aria-hidden='true'></div>
          </Dialog>
        </Transition.Root>

        <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
          <div className='flex-1 flex flex-col min-h-0 bg-slate-200'>
            <div className='flex items-center h-16 flex-shrink-0 px-4 bg-slate-200'>
              <span className='text-white font-roboto font-bold text-2xl'>
                <Logo />
              </span>
            </div>
            <div className='flex-1 flex flex-col overflow-y-auto'>
              <nav className='flex-1 px-2 py-4 space-y-1'>
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} passHref>
                    <button
                      className={`
                      ${
                        item.href === router.pathname
                          ? 'bg-slate-300 text-sky-400'
                          : 'bg-slate-200 hover:bg-slate-300 hover:text-sky-400'
                      } group w-full flex items-center px-2 py-2 text-sm font-medium rounded-md
                    `}>
                      <item.icon
                        className={`${
                          item.href === router.pathname
                            ? 'text-gray-400'
                            : 'text-gray-400 group-hover:text-gray-400'
                        } mr-3 flex-shrink-0 h-6 w-6`}
                        aria-hidden='true'
                      />
                      {item.name}
                    </button>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
