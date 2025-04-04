import Image from "next/image";
import TestPic from "../../public/summer_holiday_5-wallpaper-2160x1440.jpg";
import TestPic2 from "../../public/winter_snow_ruka_peak_visit_finland-wallpaper-2560x1440.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div id="paper" className="flex flex-col justify-center">
      <div className="flex flex-col md:flex-row-reverse my-5 md:my-[70px]">
        <div className="md:w-1/2 pb-3">
          <Image
            alt="Test"
            src={TestPic}
            width={900}
            height={900}
            className="rounded hover:opacity-100"
          />
        </div>
        <div className="md:w-1/2 text-start flex flex-col justify-center gap-4 pb-3">
          <p className="text-3xl">Välkommen</p>
          <p className="text-xl font-medium md:pr-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            consectetur quibusdam, perspiciatis numquam quam id atque dolor ea,
            neque reiciendis rerum, aliquid fuga porro! Dicta at optio
            blanditiis nam cumque.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row my-10 md:my-[70px]">
        <div className="md:w-1/2 pb-3">
          <Image
            alt="Test"
            src={TestPic2}
            width={800}
            height={900}
            className="rounded hover:opacity-100"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4 pb-3 pl-3 md:justify-between">
          <p className="text-3xl md:pt-5">Kurser</p>
          <p className="text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            consectetur quibusdam, perspiciatis numquam quam id atque dolor ea,
            neque reiciendis rerum, aliquid fuga porro! Dicta at optio
            blanditiis nam cumque.
          </p>
          <div>
            <Link href={"/courses"}>
              <button className="standard-btn">Läs mer</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse my-10 md:my-[70px]">
        <div className="md:w-1/2 pb-3">
          <Image
            alt="Test"
            src={TestPic2}
            width={800}
            height={900}
            className="rounded hover:opacity-100"
          />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4 pb-3 pl-3 md:justify-between">
          <p className="text-3xl md:pt-5">Konst</p>
          <p className="text-xl font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            consectetur quibusdam, perspiciatis numquam quam id atque dolor ea,
            neque reiciendis rerum, aliquid fuga porro! Dicta at optio
            blanditiis nam cumque.
          </p>
          <div>
            <Link href={"/art"}>
              <button className="standard-btn">Titta in</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
