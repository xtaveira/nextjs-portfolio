import { ModeToggle } from "../ModeToggle";

export default function Header() {
  return (
    <header className="py-2 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <div className="bg-orange-500 rounded-full h-7 w-7"></div>
        <p>TAVEIRA</p>
      </div>
      <div className="flex items-center gap-4">
        <p>Home</p>
        <p>About</p>
        <p>Work</p>
        <p>Contact</p>
        <ModeToggle />
      </div>
    </header>
  );
}
