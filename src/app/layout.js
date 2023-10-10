import './globals.css'
import {whitney, inter} from './fonts';
import Header from '../components/Header';
import Footer from '../components/Footer';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-white bg-none text-black'>
      <header className={`bg-white ${whitney.className}`}>
      <Header />
      </header>
      {children}
      </body>
      <footer className={whitney.className}>
      <Footer  />
      </footer>
    </html>
  )
}
