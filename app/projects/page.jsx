import { projectList } from '@/app/data/projects';
import Description from '@/components/description';
import Heading from '@/components/heading';
import ProjectCard from '@/components/project-card';

export const metadata = {
  title: 'Projects',
  description:
    "A showcase of Varun Dineshan’s Generative AI projects, demonstrating expertise in building intelligent, scalable AI systems using modern cloud platforms and LLM-powered architectures."
};

export default function Projects() {
  return (
    <section>
      <Heading text={'Featured AI Projects'} />
      <Description text="Discover a collection of projects highlighting my journey as a Generative AI developer" />

      <div className="space-y-10">
        {projectList.map((project, idx) => (
          <ProjectCard key={project.id} leftAlign={(idx + 1) % 2 === 0} {...project} />
        ))}
      </div>
    </section>
  );
}
