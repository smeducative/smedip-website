/* eslint-disable @next/next/no-img-element */

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
    <div className="mx-auto mt-12 max-w-6xl">
      <div className="px-5 xl:px-0 py-12">
        <div className="flex justify-center items-center font-bold font-roboto xl:text-2xl uppercase textlg">
          In Collaboration with
        </div>
        <div className="gap-6 grid grid-cols-2 md:grid-cols-4 mt-8">
          {collaborators.map((collaborator) => (
            <img
              key={collaborator.name}
              src={collaborator.logo}
              alt={collaborator.name}
              className={`p-3 h-24 lg:h-40 w-24 lg:w-40 object-contain hover:scale-105 transition duration-300 cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InCollaborateWith;
