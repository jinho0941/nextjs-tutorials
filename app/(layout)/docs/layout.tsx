import { Sidebar } from './_components/sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <section className='pl-[280px]'>
        <div className='p-8'>{children}</div>
      </section>
    </>
  )
}

export default Layout
