import { projectList } from '@/app/data/projects';
import { projectDetails } from '@/app/data/project-details';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return projectList.map((project) => ({
    id: project.id.toString()
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectList.find((p) => p.id.toString() === id);
  
  if (!project) {
    return {
      title: 'Project Not Found'
    };
  }

  return {
    title: `${project.title} | Varun Dineshan`,
    description: project.des
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const projectId = parseInt(id);
  const project = projectList.find((p) => p.id === projectId);
  const details = projectDetails[projectId];

  if (!project || !details) {
    notFound();
  }

  return (
    <section className="min-h-screen">
      {/* Back Button */}
      <Link 
        href="/projects" 
        className="inline-flex items-center gap-2 text-sh-blue hover:text-sh-blue/80 transition-colors mb-8"
      >
        <ArrowLeft size={20} />
        Back to Projects
      </Link>

      {/* Project Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-sh-white">
          {details.fullTitle || project.title}
        </h1>
        <p className="text-xl text-sh-white-500 mb-6">{details.subtitle}</p>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech.map((tech, idx) => (
            <span 
              key={idx}
              className="px-4 py-2 bg-sh-dark rounded-lg text-sm text-sh-blue border border-sh-dark"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Architecture Diagram */}
      {details.diagram && (
        <div className="mb-16 rounded-lg overflow-hidden border-2 border-sh-dark bg-sh-dark-500">
          <div className="p-4 bg-sh-dark border-b border-sh-dark">
            <h2 className="text-2xl font-bold text-sh-white">Architecture Diagram</h2>
          </div>
          <div className="p-8 flex justify-center items-center bg-gradient-to-br from-sh-dark-500 to-[#171923]">
            <Image
              src={details.diagram}
              alt={`${project.title} Architecture`}
              width={1200}
              height={800}
              className="rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Project Details Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {/* What I Built Section */}
        <div className="mb-12 p-6 rounded-lg bg-sh-dark-500 border-2 border-sh-dark">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎯</span>
            <h2 className="text-3xl font-bold text-sh-white m-0">What I Built</h2>
          </div>
          <p className="text-sh-white-500 text-lg leading-relaxed mb-3">
            {details.whatIBuilt.description}
          </p>
          {details.whatIBuilt.context && (
            <p className="text-sh-white-500 text-base leading-relaxed italic">
              {details.whatIBuilt.context}
            </p>
          )}
        </div>

        {/* The Problem Section */}
        <div className="mb-12 p-6 rounded-lg bg-sh-dark-500 border-2 border-sh-dark">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">💡</span>
            <h2 className="text-3xl font-bold text-sh-white m-0">The Problem</h2>
          </div>
          <p className="text-sh-white-500 text-lg leading-relaxed mb-4">
            {details.theProblem.intro}
          </p>
          {details.theProblem.challenges && (
            <>
              <h3 className="text-xl font-semibold text-sh-white mb-3">Common challenges include:</h3>
              <ul className="space-y-2 mb-4">
                {details.theProblem.challenges.map((challenge, idx) => (
                  <li key={idx} className="text-sh-white-500">{challenge}</li>
                ))}
              </ul>
            </>
          )}
          {details.theProblem.demonstrates && (
            <>
              <h3 className="text-xl font-semibold text-sh-white mb-3">This project demonstrates how to:</h3>
              <ul className="space-y-2">
                {details.theProblem.demonstrates.map((item, idx) => (
                  <li key={idx} className="text-sh-white-500">{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Tech Stack Section */}
        <div className="mb-12 p-6 rounded-lg bg-sh-dark-500 border-2 border-sh-dark">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🛠️</span>
            <h2 className="text-3xl font-bold text-sh-white m-0">Tech Stack</h2>
          </div>
          <div className="grid gap-3">
            {Object.entries(details.techStack).map(([key, value]) => (
              <div key={key} className="flex items-start gap-3">
                <span className="font-semibold text-sh-blue min-w-[120px]">{key}:</span>
                <span className="text-sh-white-500">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-12 p-6 rounded-lg bg-sh-dark-500 border-2 border-sh-dark">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">⚡</span>
            <h2 className="text-3xl font-bold text-sh-white m-0">Key Features</h2>
          </div>
          <div className="space-y-6">
            {details.keyFeatures.map((feature, idx) => (
              <div key={idx}>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-xl">{feature.icon}</span>
                  <h3 className="text-xl font-semibold text-sh-white m-0">{feature.title}</h3>
                </div>
                {feature.points && (
                  <ul className="ml-9 space-y-1">
                    {feature.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-sh-white-500">{point}</li>
                    ))}
                  </ul>
                )}
                {feature.description && (
                  <p className="ml-9 text-sh-white-500">{feature.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Highlights Section */}
        <div className="mb-12 p-6 rounded-lg bg-sh-dark-500 border-2 border-sh-dark">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🏗️</span>
            <h2 className="text-3xl font-bold text-sh-white m-0">Architecture Highlights</h2>
          </div>
          <ul className="space-y-2">
            {details.architectureHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sh-white-500">
                <span className="text-sh-blue mt-1">✅</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Data Flow Section */}
        <div className="mb-12 p-6 rounded-lg bg-sh-dark-500 border-2 border-sh-dark">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🔄</span>
            <h2 className="text-3xl font-bold text-sh-white m-0">Data Flow</h2>
          </div>
          <ol className="space-y-3">
            {details.dataFlow.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sh-white-500">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-sh-blue text-white flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Security Implementation Section */}
        <div className="mb-12 p-6 rounded-lg bg-sh-dark-500 border-2 border-sh-dark">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🔐</span>
            <h2 className="text-3xl font-bold text-sh-white m-0">Security Implementation</h2>
          </div>
          <ul className="space-y-2">
            {details.security.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sh-white-500">
                <span className="text-sh-blue mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Achievements Section */}
        <div className="mb-12 p-6 rounded-lg bg-sh-dark-500 border-2 border-sh-dark">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📊</span>
            <h2 className="text-3xl font-bold text-sh-white m-0">Technical Achievements</h2>
          </div>
          <ul className="space-y-2">
            {details.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sh-white-500">
                <span className="text-sh-blue mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges Overcome Section */}
        <div className="mb-12 p-6 rounded-lg bg-sh-dark-500 border-2 border-sh-dark">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🌟</span>
            <h2 className="text-3xl font-bold text-sh-white m-0">Technical Challenges Overcome</h2>
          </div>
          <ul className="space-y-2">
            {details.challenges.map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sh-white-500">
                <span className="text-sh-blue mt-1">•</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Real-World Applications Section */}
        <div className="mb-12 p-6 rounded-lg bg-sh-dark-500 border-2 border-sh-dark">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🚀</span>
            <h2 className="text-3xl font-bold text-sh-white m-0">Real-World Applications</h2>
          </div>
          <ul className="space-y-2">
            {details.applications.map((app, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sh-white-500">
                <span className="text-sh-blue mt-1">•</span>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cost Analysis Section */}
        {details.costAnalysis && (
          <div className="mb-12 p-6 rounded-lg bg-sh-dark-500 border-2 border-sh-dark">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💰</span>
              <h2 className="text-3xl font-bold text-sh-white m-0">Cost Analysis (Approx.)</h2>
            </div>
            <ul className="space-y-2">
              {details.costAnalysis.map((cost, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sh-white-500">
                  <span className="text-sh-blue mt-1">•</span>
                  <span>{cost}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Future Enhancements Section */}
        <div className="mb-12 p-6 rounded-lg bg-sh-dark-500 border-2 border-sh-dark">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🌟</span>
            <h2 className="text-3xl font-bold text-sh-white m-0">Future Enhancements</h2>
          </div>
          <ul className="space-y-2">
            {details.futureEnhancements.map((enhancement, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sh-white-500">
                <span className="text-sh-blue mt-1">•</span>
                <span>{enhancement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Back Button at Bottom */}
      <div className="mt-16 pt-8 border-t border-sh-dark">
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-sh-blue hover:text-sh-blue/80 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>
      </div>
    </section>
  );
}
