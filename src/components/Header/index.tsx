import { ModeToggle } from "../ModeToggle";

export default function Header() {
  const items = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="py-2 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <div className="bg-orange-500 rounded-full h-7 w-7"></div>
        <p>TAVEIRA</p>
      </div>
      <div className="flex items-center gap-4">
        {items.map((item, index) => (
          <a key={index} href={item.href}>
            {item.name}
          </a>
        ))}
        <ModeToggle />
      </div>
    </header>
  );
}
