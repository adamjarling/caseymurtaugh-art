import Image from "next/image";

type HeroImageProps = {
  imageUrl: string;
  altText: string;
};

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, altText }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image src={imageUrl} alt={altText} fill className="z-0 object-cover" />
      <div className="absolute z-10 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          Your Hero Headline
        </h1>
        <p className="text-lg text-white md:text-xl">
          Your hero subheadline goes here
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
