import Image from "next/image";

export default function ExecBoard() {
  const n = 3;
  const boxes = Array.from({ length: n });

  return (
    <div className="flex relative flex-col mt-2 items-center justify-center w-full">
      <div className="w-full h-20 text-2xl text-center">EXECUTIVE BOARD</div>

      <div className="flex flex-wrap justify-center gap-10 max-w-[47.5rem]">
        {boxes.map((_, i) => (
          <div key={i} className="flex flex-col gap-2 text-center relative">
            <div className="w-50 h-60 flex items-center justify-center text-white rounded-md border-white border-2 relative">
              <Image
                src="/assets/pfp.webp"
                fill
                alt="Executive Board Image"
                className="object-cover"
              />
            </div>

            {/*placeholder*/}
            <p className="font-bold text-xs">BATCH REPRESENTATIVE</p>
            <p className="text-xs">John Doe</p>
          </div>
        ))}
      </div>
    </div>
  );
}
