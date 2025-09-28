type UnitTitleProps = {
  name: string;
};

export default function UnitTitle({ name }: UnitTitleProps) {
  return (
    <div className="h-80 bg-gradient-to-t from-[var(--card-tertiary-foreground)] to-transparent w-full flex items-center justify-center">
      <div className="sm:text-5xl text-4xl text-center uppercase mx-3 font-bold">
        {name}
      </div>
    </div>
  );
}
