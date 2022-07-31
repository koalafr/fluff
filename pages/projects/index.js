import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import Page from "../../components/Page/Page";
import Title from "../../components/Page/Title";
import ProjectList from "../../components/Project/ProjectList";
// local imports
import { useRouter } from "next/router";
import { getTranslation } from "../../lib/locales";

export default function Projects({ projectList }) {
  const router = useRouter();
  const tr = getTranslation(router);
  return (
    <Page>
      <div className='container mx-auto max-w-screen-lg'>
        <div className='container'>
          <Title
            title={tr.taglines.projects.title}
            description={tr.taglines.projects.description}
          />
          <ProjectList projects={projectList} />
        </div>
      </div>
    </Page>
  );
}

export const getStaticProps = async () => {
  const projectsDir = path.join(process.cwd(), "pages/projects");
  const filenames = await fs.readdir(projectsDir);
  const projects = filenames.filter((project) => /\.mdx?$/.test(project));
  const projectList = await Promise.all(
    projects.map(async (project) => {
      const fullProjectPath = path.join(projectsDir, project);
      const source = await fs.readFile(fullProjectPath);
      const { data } = matter(source);
      return {
        path: project,
        slug: project.replace(/\.mdx?$/, ""),
        matter: data,
      };
    })
  );

  return {
    props: { projectList },
  };
};
