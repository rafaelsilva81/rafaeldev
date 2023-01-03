import { useAtom } from "jotai";
import useSWR from "swr";
import { URL } from "url";
import { preferredLanguageAtom } from "../../lib/atoms";
import BoldText from "../common/BoldText";
import ProjectCard from "../ProjectCard";

const ProjectsContent = () => {
  const [lang] = useAtom(preferredLanguageAtom);
  function fetcher(url: URL) {
    return fetch(url).then((r) => r.json());
  }
  // Fetch projects from API
  const { data, error, isLoading } = useSWR("/api/projects", fetcher);

  if (isLoading) return <div className="text-xl">Loading...</div>;

  if (error) return <div className="text-xl">Failed to load</div>;

  return (
    <>
      {/* Projects */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {data.map((project: Project, index: number) => (
          <ProjectCard key={index} project={project} lang={lang} />
        ))}
      </div>
    </>
  );
};

export default ProjectsContent;
