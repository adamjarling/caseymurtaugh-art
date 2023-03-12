import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="relative flex items-center justify-center h-full overflow-hidden aspect-w-1 aspect-h-1"
    >
      <Link href={href}>
        <Image
          src={bgImgSrc}
          alt={altText}
          fill
          className="z-0 object-cover transition-all duration-500 opacity-80 hover:opacity-100"
        />
        {/* <div className="absolute z-10 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <h2
            className="mb-4 text-xl font-semibold text-white"
            style={{ textShadow: "2px 2px #000" }}
          >
            {label}
          </h2>
        </div> */}
        <div className="absolute z-10 -bottom-1 right-5">
          <motion.h2
            className="mb-4 text-2xl font-semibold text-white"
            style={{ textShadow: "2px 2px #000" }}
          >
            {label}
          </motion.h2>
        </div>
      </Link>
    </motion.div>
  );
}
