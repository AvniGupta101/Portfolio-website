import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { credentials } from "../constants";
const firstRow = credentials.slice(0, credentials.length / 2);
const secondRow = credentials.slice(credentials.length / 2);

const CredentialCard = ({ img, name, username, body, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation block"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full bg-white/10 w-8 h-8 object-contain p-1"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </a>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-12 md:mt-16 c-space">
      <h2 className="text-heading">My Credentials & Links</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-8 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((credential) => (
            <CredentialCard key={credential.username} {...credential} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((credential) => (
            <CredentialCard key={credential.username} {...credential} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
