import Image from "next/image";
import Link from "next/link";

interface Props {
  altText?: string;
  bgImgSrc?: string;
  href: string;
  label: string;
}

export default function SquareBlock({
  altText = "",
  bgImgSrc = "",
  href,
  label,
}: Props) {
  return (
    <div className="relative flex items-center justify-center h-full overflow-hidden aspect-w-1 aspect-h-1">
      <Link href={href}>
        <Image
          src={bgImgSrc}
          alt={altText}
          fill
          className="z-0 object-cover transition-all duration-500 opacity-80 hover:opacity-100"
        />
        <div className="absolute z-10 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h2 className="mb-4 text-3xl text-white">{label}</h2>
        </div>
      </Link>
    </div>
  );
}