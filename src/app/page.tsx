
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex items-left mt-18 ml-0">
        <Carousel />
      </div>
    </div>
  );
}
