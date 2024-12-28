import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col ">
      <Header />
      <Separator />
      <Hero />
    </div>
  );
}
