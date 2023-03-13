"use client";
import { motion } from "framer-motion";

export default function CurriculumItem({ item, i }: { item: any; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      key={i}
      className="mb-12"
    >
      <div className="aspect-[16/9]">
        <iframe
          src={item.src}
          width="100%"
          height="100%"
          allowFullScreen={true}
        ></iframe>
        <div className="text-right">
          <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>
          <p className="font-light">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
