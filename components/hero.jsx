import Avatar from './avatar';
import GreetingSwitcher from './greeting-switcher';

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <Avatar />
        <div className="ml-0 md:ml-16">
          <GreetingSwitcher />

          <h1 className="text-2xl font-normal leading-10">
            <span className="block">
              I am{' '}
              <span className="animate-up cursor-default bg-gradient-to-r from-sh-purple to-sh-purple font-bold tracking-widest">
                Varun Dineshan
              </span>
              , an AI Engineer
            </span>
            from Canada who is passionate about leveraging Machine Learning, Generative AI, and Data Science to drive business impact.
            <span className="mt-5 block">
              I specialize in solving complex problems, building AI-powered solutions, and optimizing decision-making through data.
            </span>
          </h1>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[70rem] bg-gradient-to-tr from-sh-purple to-sh-blue opacity-[0.15]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 90% 61.6%, 90.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 59.5% 27.5%, 74.2% 61.4%, 29.4% 68.1%, 65% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 10.1% 40.9%, 17.9% 100%, 77.6% 78%, 76.1% 83.7%, 86.1% 50%)'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
