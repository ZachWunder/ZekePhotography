import Image from "next/image";
import NavBar from "./components/NavBar";
import ImageSlideshow from "./components/ImageSlideshow";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <ImageSlideshow />
      <NavBar />
    </div>
  );
}
