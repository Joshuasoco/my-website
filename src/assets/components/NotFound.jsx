import { Link } from "react-router-dom";
import Logo404 from './images/logo404.svg'
import BackError from './images/bg404.png';
export default function NotFoundPage() {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${BackError})` }}>
      <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-100">
        <img 
          src={Logo404} 
          alt="404 Logo" 
          className="absolute w-120 top-0 h-auto"
        />
        <p 
          className="text-base tracking-[0.15em] font-semibold text-gray-700 text-center" 
          style={{ fontFamily: 'Rubik, sans-serif', marginTop: '22rem' }}
        >
          OOPS! PAGE NOT FOUND
        </p>
        <Link 
          to="/" 
          className="mt-10 px-8 py-2 bg-cyan-500 text-white rounded-full text-base tracking-wider
          hover:bg-cyan-900 transition-transform transform hover:scale-105">
          BACK TO HOME
        </Link>
      </main>
    </div>
  );
}