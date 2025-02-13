import { companies, institutions } from '@/app/data/data';
import { skills } from '@/app/data/skills';
import EduCard from '@/components/educard';
import Heading from '@/components/heading';
import SkillCap from '@/components/skill-cap';

export const metadata = {
  title: 'About',
  description:
    "Discover Shahriar Shafin's journey in web development, from his foundational education in Computer Science to his professional experience as a software engineer. Skilled in technologies like JavaScript, React, Next.js, and more."
};

export default function About() {
  return (
    <>
      <section>
        <Heading text={'Tech Stack'} />

        <div className="flex flex-wrap w-full gap-4 mt-3 lg:px-5">
          {skills.map((item) => (
            <SkillCap key={item.id} {...item} />
          ))}
        </div>
      </section>

      <section>
        <Heading text={'Career'} />

        <div className="mt-3 space-y-4 lg:px-5">
          {companies.map((edu) => (
            <EduCard key={edu.id} {...edu} />
          ))}
        </div>
      </section>

      <section>
        <Heading text={'Education'} />

        <div className="mt-3 space-y-4 lg:px-5">
          {institutions.map((edu) => (
            <EduCard key={edu.id} {...edu} />
          ))}
        </div>
      </section>
    </>
  );
}
