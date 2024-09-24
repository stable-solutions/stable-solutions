// TeamSection.tsx
import React from 'react';
import TeamMember from './TeamMember'; // Import the TeamMember component

const teamMembers = [
  {
    name: 'Rafael',
    role: 'CEO & Co-founder',
    imgSrc: 'https://placehold.co/150x150', // Placeholder image
  },
  {
    name: 'Malik Byrd',
    role: 'CSO & Co-founder',
    imgSrc: 'https://placehold.co/150x150', // Placeholder image
  },
  {
    name: 'Diya Li',
    role: 'CTO & Co-founder',
    imgSrc: 'https://placehold.co/150x150', // Placeholder image
  },
];

const TeamSection = () => {
  return (
    <section className="flex flex-wrap justify-center gap-8 mt-32 mb-24">
      {teamMembers.map((member, index) => (
        <TeamMember
          key={index}
          name={member.name}
          role={member.role}
          imgSrc={member.imgSrc}
        />
      ))}
    </section>
  );
};

export default TeamSection;
