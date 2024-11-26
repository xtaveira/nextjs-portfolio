import Header from "@/components/Header";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col ">
      <Header />
      <Separator />

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
