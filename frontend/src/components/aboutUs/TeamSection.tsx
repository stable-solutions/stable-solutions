import TeamMember from './TeamMember'; // Import the TeamMember component

const teamMembers = [
  {
    name: 'Rafael',
    role: 'CEO & Co-founder',
    imgSrc: "/assets/aboutus/profiles/rafael-aboutus.svg", // Placeholder image
    fhref:'0',
    lhref:'0',
    ihref:'0'
  },
  {
    name: 'Malik Byrd',
    role: 'CMO & Co-founder',
    imgSrc: "/assets/aboutus/profiles/malik-aboutus.svg", // Placeholder image
    fhref:'0',
    lhref:'0',
    ihref:'0'
  },
  {
    name: 'Diya Li',
    role: 'Co-founder',
    imgSrc: "/assets/aboutus/profiles/diya-aboutus.svg", // Placeholder image
    fhref:'0',
    lhref:'0',
    ihref:'0'
  },
];

const TeamSection = () => {
  return (
    <section className="flex flex-wrap justify-center gap-6 mt-12 mb-16 w-full px-4 sm:px-8 lg:px-16"> {/* Adjusted padding and gap */}
      {teamMembers.map((member, index) => (
        <div key={index} className="flex-grow min-w-[250px] max-w-[350px]"> {/* Adjusted width for better scaling */}
          <TeamMember
            name={member.name}
            role={member.role}
            imgSrc={member.imgSrc}
            fhref={member.fhref}
            lhref={member.lhref}
            ihref={member.ihref}
          />
        </div>
      ))}
    </section>
  );
};

export default TeamSection;
