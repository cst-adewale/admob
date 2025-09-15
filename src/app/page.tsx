
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex items-left mt-20 ml-6">
        <Carousel />
      </div>
    </div>
  );
}
