import Image from 'next/image';
import React from 'react';
// import { BellIcon } from '@heroIcons/react/outline';
// import { ChatIcon } from '@heroIcons/react/outline';
// import { GlobeIcon } from '@heroIcons/react/outline';
// import { PlusIcon } from '@heroIcons/react/outline';
// import { SparklesIcon } from '@heroIcons/react/outline';
// import { SpeakerphoneIcon } from '@heroIcons/react/outline';
// import { VideoCameraIcon } from '@heroIcons/react/outline';

// import { ChevronDownIcon } from '@heroIcons/react/solid';
// import { HomeIcon } from '@heroIcons/react/solid';
// import { MenuIcon } from '@heroIcons/react/solid';
// import { SearchIcon } from '@heroIcons/react/solid';
import {
  BellOutline,
  ChatOutline,
  GlobeOutline,
  PlusOutline,
  SparklesOutline,
  SpeakerphoneOutline,
  VideoCameraOutline,
  ChevronDownSolid,
  HomeSolid,
  MenuSolid,
  SearchSolid
} from '@graywolfai/react-heroicons';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

function Header() {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Link href="/">
          <Image src="https://links.papareact.com/fqy" layout="fill" objectFit="contain" />
        </Link>
      </div>
      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeSolid className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownSolid className="h-5 w-5" />
      </div>
      <form className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1">
        <SearchSolid className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button hidden type="submit" />
      </form>
      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex ">
        <SparklesOutline className="icon" />
        <GlobeOutline className="icon" />
        <VideoCameraOutline className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatOutline className="icon" />
        <BellOutline className="icon" />
        <PlusOutline className="icon" />
        <SpeakerphoneOutline className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuSolid className="icon" />
      </div>
      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image src="https://links.papareact.com/23l" alt="" layout="fill" objectFit="contain" />
          </div>
          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400 ">1 Karma</p>
          </div>
          <ChevronDownSolid className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
          <div className="relative h-5 w-5 flex-shrink-0">
            <Image src="https://links.papareact.com/23l" alt="" layout="fill" objectFit="contain" />
          </div>
          <p className="text-gray-400 ">Sign In</p>
        </div>
      )}
    </div>
  );
}

export default Header;
