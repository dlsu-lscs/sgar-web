import lscs from "../data/placeholder";

export default function OrgTitle() {
  return (
    <div className="h-70 bg-gradient-to-t from-[var(--card-tertiary-foreground)] to-transparent  w-full flex items-center justify-center">
      <div className="sm:text-5xl text-4xl  text-center uppercase mx-3 font-bold">
        {lscs.title}
      </div>
    </div>
  );
}
