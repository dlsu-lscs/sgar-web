import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

export default function ImageBox({ src, alt }: Props) {
  return (
    <div className="relative w-full h-full transition-colors">
      {src ? (
        <Image
          src={src}
          fill
          alt={alt}
          loading="lazy"
          priority={false}
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gray-200" />
      )}
      <div className="absolute inset-0 bg-black/30 items-center flex justify-center hover:bg-black/0 transition-colors duration-200 ease-in-out" />
    </div>
  );
}
