import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

interface TeamMemberProps {
  name: string;
  role: string;
  imgSrc: string;
  fhref: string;
  lhref: string;
  ihref: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imgSrc, fhref, lhref, ihref }) => {
  return (
    <div className="relative pr-[40px] before:content-[''] before:absolute before:bg-purple before:bottom-0 before:left-0 before:top-0 before:right-0 before:rounded-[20px] before:ml-12 sm:before:ml-12 before:mr-12 sm:before:mr-12 before:mt-[40px] before:z-[0]">
      {/* Team member image */}
      <img
        src={imgSrc}
        alt={name}
        className="rounded-[20px] relative z-1 w-64 h-64 object-cover"
      />

      {/* Social media icons */}
      <ul className="list-none space-y-2 absolute top-16 sm:top-16 right-8 mr-2">
        <li>
          <a
            href={fhref}
            target="_blank"
            rel="noreferrer"
            className="bg-purple text-white inline-block w-10 h-10 text-center rounded-full flex items-center justify-center hover:bg-olive-green transition delay-100 duration-300 ease-in-out"
          >
            <FaFacebookF className="text-xl" />
          </a>
        </li>
        <li>
          <a
            href={lhref}
            target="_blank"
            rel="noreferrer"
            className="bg-purple text-white inline-block w-10 h-10 text-center rounded-full flex items-center justify-center hover:bg-olive-green transition delay-100 duration-300 ease-in-out"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
        </li>
        <li>
          <a
            href={ihref}
            target="_blank"
            rel="noreferrer"
            className="bg-purple text-white inline-block w-10 h-10 text-center rounded-full flex items-center justify-center hover:bg-olive-green transition delay-100 duration-300 ease-in-out mr-4"
          >
            <FaInstagram className="text-xl" />
          </a>
        </li>
      </ul>

      {/* Name and Role */}
      <div className="relative z-1 py-[20px] pl-[30px] sm:pl-[50px] font-poppins font-extrabold">
        <h3 className="text-white text-2xl md:text-2xl lg:text-2xl font-semibold mb-[10px] leading-none ml-12 md:ml-8">
          {name}
        </h3>
        <p className="text-xl md:text-xl lg:text-xl leading-none text-white font-poppins font-medium ml-12 md:ml-8">
          {role.split(' ')[0]} <br /> {role.split(' ').slice(1).join(' ')}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;
