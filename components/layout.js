import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: '/',
      title: 'Homepage',
    },
    {
      href: '/product',
      title: 'Products',
    },
    {
      href: '/user',
      title: 'Users',
    },
  ];

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-slate-800 sticky top-0 h-14 flex justify-center items-center font-bold text-xl text-white'>
        Tugas Tailwind CSS - Jessica Angelita - Binus
      </header>
      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='bg-slate-700 w-full md:w-60'>
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className='m-2' key={title}>
                  <Link href={href}>
                    <a
                      className={`flex p-2 bg-slate-600 rounded hover:bg-slate-400 cursor-pointer ${
                        router.asPath === href && 'bg-slate-600 text-white'
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className='flex-1'>{children}</main>
      </div>
    </div>
  );
}
