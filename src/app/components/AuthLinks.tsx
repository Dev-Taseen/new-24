'use client'
import Link from 'next/link';
import React from 'react';
import { signOut, useSession } from '@/lib/auth-client';

const AuthLinks = () => {
    const { data: session } = useSession();

    const handleSignOut = async () => {
        await signOut();
    };

    const user = session?.user;

    return (
        <>
            {user ? (
                <div className='flex items-center gap-2 sm:gap-3'>
                    <Link
                        href='/profile'
                        title={user.name}
                        className='flex min-w-0 items-center gap-2'
                    >
                        {user.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={user.image}
                                alt={user.name}
                                className='h-8 w-8 sm:h-9 sm:w-9 shrink-0 rounded-full border border-gray-300 object-cover'
                            />
                        ) : (
                            <div className='flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-red-700 text-sm font-semibold text-white'>
                                {user.name?.charAt(0).toUpperCase()}
                            </div>
                        )}
                        <span className='hidden max-w-[8rem] truncate md:inline lg:max-w-[12rem]'>
                            {user.name}
                        </span>
                    </Link>

                    <button
                        onClick={handleSignOut}
                        className='cursor-pointer whitespace-nowrap rounded border border-gray-400 bg-red-700 px-2 py-1 text-xs text-white sm:p-1.5 sm:text-[14px]'
                    >
                        সাইন আউট
                    </button>
                </div>
            ) : (
                <div className='flex items-center gap-1.5 sm:gap-2'>
                    <Link
                        href='/sign-in'
                        className='btn rounded whitespace-nowrap px-3 text-xs sm:px-4 sm:text-sm'
                    >
                        সাইন ইন
                    </Link>
                    <Link
                        href='/sign-up'
                        className='btn rounded whitespace-nowrap bg-red-600 px-3 text-xs text-white sm:px-4 sm:text-sm'
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </>
    );
};

export default AuthLinks;