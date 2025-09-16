import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Generate from './components/Generate';
import Gallery from './components/Gallery';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex items-left mt-18 ml-8">
        <Carousel />
      </div>
      <div><Generate /></div>
      <div className="-mt-16"><Gallery /></div>
    </div>
  );
}
