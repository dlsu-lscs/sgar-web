interface Props {
  name: string;
}
export default function Dept({ name }: Props) {
  return (
    <div className="col-start-1 row-start-1 absolute inset-0 sm:top-170 top-120 w-full z-10">
      <h2 className="text-xl font-bold text-white mb-4 px-8 sm:px-16">
        {name}
      </h2>
    </div>
  );
}
