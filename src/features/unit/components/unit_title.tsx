import lscs from "../data/placeholder";

export default function OrgTitle() {
  return (
    <div className="h-70 bg-gradient-to-t from-[var(--card-tertiary-foreground)] to-transparent  w-full flex items-center justify-center">
      <h1 className="sm:text-5xl text-4xl font-sans text-center uppercase">
        {lscs.title}
      </h1>
    </div>
  );
}
