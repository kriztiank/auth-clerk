import Link from 'next/link'
// import { UserButton, auth } from '@clerk/nextjs'

const Header = () => {
  return (
    <nav className='flex items-center justify-between px-6 py-4 mb-5 bg-blue-700'>
      <div className='flex items-center'>
        <Link href='/'>
          <div className='text-lg font-bold text-white uppercase'>
            Clerk App
          </div>
        </Link>
      </div>
      <>
        <Link href='sign-in' className='text-gray-300 hover:text-white mr-4'>
          Sign In
        </Link>
        <Link href='sign-up' className='text-gray-300 hover:text-white mr-4'>
          Sign Up
        </Link>
      </>
    </nav>
  )
}
export default Header
