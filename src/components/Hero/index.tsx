import {
  DownloadIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Hero = () => {
  return (
    <div className="w-[96%] md:justify-between flex md:flex-row flex-col gap-3  items-center">
      <Card
        className="md:w-[58%] flex flex-col justify-between py-8 
  bg-[#d7742e]
bg-gradient-to-t from-[#d7742e] to-[#f97316]

"
      >
        <CardHeader>
          <CardTitle className="text-background text-3xl sm:w-[70%] lg:w-[60%]">
            Hey, I&apos;m Davi Taveira, the FullStack Developer that you were
            searching for
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-background text-lg sm:w-[80%] lg:w-[50%]">
            Adaptable to any tool and excel at solving problems with ease and
            efficiency.
          </p>
        </CardContent>
        <CardFooter className="gap-4">
          <a
            target="_blank"
            href="https://linkedin.com/in/xtaveira"
            className="cursor:pointer hover:text-orange-500 text-background bg-foreground rounded-full h-9 w-9 flex items-center justify-center"
          >
            <LinkedinIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/xtaveira"
            className="cursor:pointer hover:text-orange-500 text-background bg-foreground rounded-full h-9 w-9 flex items-center justify-center"
          >
            <GithubIcon />
          </a>
          <a
            target="_blank"
            href="https://instagram.com/xtaveira"
            className="cursor:pointer hover:text-orange-500 text-background bg-foreground rounded-full h-9 w-9 flex items-center justify-center"
          >
            <InstagramIcon />
          </a>
          <a
            target="_blank"
            href="https://drive.usercontent.google.com/download?id=1H1uw8HnWJLDzjkRrwnu85wdWRuJjVCUn&export=download&authuser=1&confirm=t&uuid=c356ac3d-a921-49a4-96bd-dd69627dc0f7&at=APvzH3p2bUlj5XR9v_uDz55LnzwI:1735740835320"
          >
            <Button variant="outline" className="hover:text-orange-500">
              Resume
              <DownloadIcon />
            </Button>
          </a>
        </CardFooter>
      </Card>
      <Card className="md:w-[40%] bg-personal-bg bg-cover bg-top"></Card>
    </div>
  );
};

export default Hero;
