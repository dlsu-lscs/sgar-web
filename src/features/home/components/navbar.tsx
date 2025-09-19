import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header>
      <nav className="relative">
        <li className="bg-black sm:flex text-sm justify-between items-center">
          <ul>
            <Button variant="link">HOME</Button>
          </ul>
          <ul>
            <Button variant="link">MAP</Button>
          </ul>
        </li>
      </nav>
    </header>
  );
}
