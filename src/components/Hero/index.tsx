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
            Hey, I&apos;m Davi Taveira, the FullStack Developer that you are
            searching for
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-background text-lg sm:w-[80%] lg:w-[50%]">
            Adaptable to any tool and excel at solving problems with ease and
            efficiency.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Contact</Button>
          <p>intagram</p>
          <p>linkedin</p>
          <p>github</p>
        </CardFooter>
      </Card>
      <Card className="md:w-[40%]">
        <CardHeader>
          <CardTitle>Project In Progress...</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Follow the taks on GitHub:{" "}
            <a
              className="text-orange-500 font-bold"
              target="_blank"
              href="https://github.com/users/xtaveira/projects/1/views/1"
            >
              Tasks
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Hero;
