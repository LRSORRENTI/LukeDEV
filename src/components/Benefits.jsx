import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useState } from 'react';
import { hoverImg1, hoverImg2, hoverImg3 } from '../assets/'; // Adjust the import path as necessary

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-3xl text-center"
          title="Enhancing your web presence with expert solutions"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <BenefitItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Section>
  );
};

const BenefitItem = ({ item }) => {
  const [imageUrl, setImageUrl] = useState(item.imageUrl);

  const images = [hoverImg1, hoverImg2, hoverImg3];

  const handleMouseEnter = () => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImageUrl(randomImage);
  };

  return (
    <div
      className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
      style={{
        backgroundImage: `url(../${item.backgroundUrl})`,
      }}
    >
      <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
        <h5 className="h5 mb-5">{item.title}</h5>
        <p className="body-2 mb-6 text-n-3">{item.text}</p>
        <div className="flex items-center mt-auto">
          <img
            src={item.iconUrl}
            width={48}
            height={48}
            alt={item.title}
          />
          <p className="ml-auto font-code text-xs font-bold text-transparent uppercase tracking-wider">
            Explore more
          </p>
          <Arrow />
        </div>
      </div>

      {item.light && <GradientLight />}

      <div
        className="absolute inset-0.5 bg-n-8"
        style={{ clipPath: "url(#benefits)" }}
        onMouseEnter={handleMouseEnter}
      >
        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
          {imageUrl && (
            <img
              src={imageUrl}
              width={380}
              height={362}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <ClipPath />
    </div>
  );
};

export default Benefits;
