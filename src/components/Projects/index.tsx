import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Projects = () => {
  return (
    <div className="w-[96%] md:justify-between flex md:flex-row flex-col gap-3  items-center">
      <Card className="md:w-[49%]">
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
      <Card className="md:w-[49%]">
        <CardHeader>
          <CardTitle>Project In Progress...</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Follow the tasks on GitHub:{" "}
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

export default Projects;
