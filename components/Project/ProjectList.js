import ProjectItem from "./ProjectItem";

export default function ProjectList({ projects, count }) {
  projects.sort((a, b) => new Date(b.matter.date) - new Date(a.matter.date));
  if (count) {
    projects = projects.slice(0, count);
  }
  return (
    <div className='my-8 grid grid-cols-1 gap-8 px-[20vw] sm:grid-cols-2 sm:px-[10vw] md:grid-cols-3 md:px-4 lg:grid-cols-4'>
      {projects.map((project) => {
        return <ProjectItem key={project.slug} project={project} />;
      })}
    </div>
  );
}
