
import { ModeToggle } from '@/components/mode-toggle'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Button } from './ui/button';


export default function Navbar() {
  return (
    <>
      <div className='flex items-center justify-between p-5'>
        <h1 className='flex font-bold text-2xl'>autocom</h1>
        <div className='flex items-center gap-4'>
          <ModeToggle/>
          <SignedOut>
            <Button variant={'default'}>
            <SignInButton />
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
