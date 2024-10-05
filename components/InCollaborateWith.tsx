/* eslint-disable @next/next/no-img-element */

import { CollaboratorCards } from "./ui/collabolator-cards";

const InCollaborateWith = () => {
  const collaborators = [
    {
      name: "IPNU",
      logo: "/assets/collaborator/ipnu.png",
    },
    {
      name: "IPPNU",
      logo: "/assets/collaborator/ippnu.png",
    },
    {
      name: "Smeducative",
      logo: "/assets/collaborator/smeducative.png",
    },
    {
      name: "BKK Smedip",
      logo: "/assets/collaborator/bkk-smedip.jpeg",
    },
    {
      name: "AR TV",
      logo: "/assets/collaborator/artv.png",
    },
    {
      name: "evercoss",
      logo: "/assets/collaborator/evercoss.png",
    },
    {
      name: "seven retail",
      logo: "/assets/collaborator/seven.jpg",
    },
    {
      name: "Axioo Class Program",
      logo: "/assets/collaborator/axioo-class-program.jpg",
    },
  ];

  return (
    <div className='mx-auto mt-12 max-w-6xl'>
      <div className='px-5 xl:px-0 py-12'>
        <div className='flex justify-center items-center mb-5 font-bold font-roboto text-lg xl:text-2xl uppercase'>
          Media Kolaborasi
        </div>
        <div className='relative flex flex-col justify-center items-center dark:bg-grid-white/[0.05] rounded-md overflow-hidden'>
          <CollaboratorCards
            items={collaborators}
            direction='right'
            speed='slow'
          />
        </div>
      </div>
    </div>
  );
};

export default InCollaborateWith;
