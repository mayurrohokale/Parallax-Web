import { Parallax } from "react-parallax";
import earth1 from "../components/earth1.jpg";
import earth2 from "../components/earth2.jpg";
import earth3 from "../components/earth3.jpg"


export default function Home() {
  return (
    <div>
      <Parallax strength={600} bgImage={earth1}>
        <div className="content">
          <div className="text-content">
            <button className="bg-gray-500 text-white px-3 py-1 rounded-md ">
              Explore Space!
            </button>
          </div>
        </div>
      </Parallax>

      <Parallax strength={600} bgImage={earth2}>
        <div className="content">
          <div className="text-content">Explore Space!</div>
          <div className="bg-white p-8">
            <h1 className="text-center pb-6 ">FIRST CLASS TICKET</h1>
            <h3>
              Humanity has always looked to the skies with wonder, dreaming of
              what lies beyond our blue planet. Today, we stand on the brink of
              a new era of exploration. Space is no longer the final frontier;
              it is the next step in our journey as a species. From the desolate
              beauty of the Moon to the distant mysteries of Mars, our
              exploration of space is unlocking the secrets of the universe.
              Each mission brings us closer to understanding the cosmos and our
              place within it. As we venture farther into the unknown, we push
              the boundaries of science, technology, and human endurance.
            </h3>
          </div>
        </div>
      </Parallax>

      <Parallax strength={600} bgImage={earth3}>
        <div className="content">
          <div className="text-content">Explore Space!</div>
          <div className="bg-white p-8">
            <h1 className="text-center pb-6 ">FIRST CLASS TICKET</h1>
            <h3>
              Humanity has always looked to the skies with wonder, dreaming of
              what lies beyond our blue planet. Today, we stand on the brink of
              a new era of exploration. Space is no longer the final frontier;
              it is the next step in our journey as a species. From the desolate
              beauty of the Moon to the distant mysteries of Mars, our
              exploration of space is unlocking the secrets of the universe.
              Each mission brings us closer to understanding the cosmos and our
              place within it. As we venture farther into the unknown, we push
              the boundaries of science, technology, and human endurance.
            </h3>
          </div>
        </div>
      </Parallax>

    </div>
  );
}
