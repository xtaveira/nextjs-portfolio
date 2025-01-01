export default function Progress() {
  return (
    <div className="w-full flex flex-col gap-4 items-center py-24">
      <h3>Project In Progress...</h3>
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
    </div>
  );
}
