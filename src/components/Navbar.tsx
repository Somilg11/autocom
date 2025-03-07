
import { ModeToggle } from '@/components/mode-toggle'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Button } from './ui/button';
import Link from 'next/link';


export default function Navbar() {
  return (
    <>
      <div className='flex items-center justify-between p-5'>
        <h1 className='flex items-center font-bold text-lg md:text-2xl'>autocom</h1>
            <div className='flex items-center gap-2 md:gap-4 text-sm font-medium'>
                <Link href='/features'>Features</Link>
                <Link href='/pricing'>Pricing</Link>
                <Link href='/about'>About</Link>
            </div>
        <div className='flex items-center gap-4'>
          <ModeToggle/>
          <SignedOut>
            <Button variant={'default'}>
            {/* <SignInButton /> */}
            <Link href={'/sign-in'}>Sign In</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
}
