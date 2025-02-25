import { socialMedia } from '@/app/data/data';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mx-auto w-full max-w-[50rem] px-10 py-2 md:px-0">
      <div className="flex flex-col items-center justify-between gap-2 p-4 md:flex-row">
        <p className="order-2 md:order-1">© {new Date().getFullYear()} Varun Dineshan</p>
        <div className="order-1 flex gap-3 text-lg md:order-2">
          {socialMedia.map((social) => (
            <Link
              key={social.id}
              href={social.url}
              aria-label={social.label}
              target="_blank"
              className="rounded-xl p-3 transition ease-in hover:bg-sh-dark hover:text-sh-blue"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
