import Footer from '@/components/Footer';
import Header from '@/components/Header'
import '@/styles/index.scss';


export const metadata = {
  title: 'CNA - Центр Недвижимости Аркалык'
};

export default function ClientLayout({ children }) {
  return (
    <>
        <Header />
        <main>
          {children}
        </main>
         <Footer />
    </>
  )
}
