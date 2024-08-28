import { Parallax } from "react-parallax";
import hill from "../components/hill1.png";

export default function Home() {
  return (
    <div>
      <Parallax strength={600} bgImage={hill}>
        <div className="content">
          <div className="text-content">Normal Content</div>
        </div>
      </Parallax>
      <div className="content">

      </div>
    </div>
  );
}
