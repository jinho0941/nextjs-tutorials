import { Navbar } from './_components/navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className='pt-16 min-h-screen max-w-screen-2xl'>{children}</main>
    </>
  )
}

export default Layout
