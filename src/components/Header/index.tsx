import { ModeToggle } from "../ModeToggle";

export default function Header() {
  const options = [
    { label: "home", value: "home" },
    { label: "about", value: "about" },
    { label: "work", value: "work" },
    { label: "contact", value: "contact" },
  ];

  return (
    <header className="py-2 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <div className="bg-orange-500 rounded-full h-7 w-7"></div>
        <p>taveira</p>
      </div>
      <div className="flex items-center gap-4">
        {options.map((option) => (
          <p
            key={option.value}
            id={`#${option.value}`}
            className="cursor-pointer"
          >
            {option.label}
          </p>
        ))}
        <ModeToggle />
      </div>
    </header>
  );
}
