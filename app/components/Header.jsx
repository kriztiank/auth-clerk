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
    </nav>
  )
}
export default Header
