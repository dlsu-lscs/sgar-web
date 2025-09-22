import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

export default function ImageBox({ src, alt }: Props) {
  return (
    <div className="relative w-full h-full">
      <Image src={src} fill alt={alt} className="object-cover" />
      <div className="absolute inset-0 bg-black/30 items-center flex justify-center" />
    </div>
  );
}
