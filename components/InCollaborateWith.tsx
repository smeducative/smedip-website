/* eslint-disable @next/next/no-img-element */

const InCollaborateWith = () => {
  const collaborators = [
    {
      name: "Smeducative",
      logo: "/assets/collaborator/smeducative.png",
    },
    {
      name: "BKK Smedip",
      logo: "/assets/collaborator/bkk-smedip.jpeg",
    },
    {
      name: "IPNU",
      logo: "/assets/collaborator/ipnu.png",
    },
    {
      name: "IPPNU",
      logo: "/assets/collaborator/ippnu.png",
    },
    {
      name: "AR TV",
      logo: "/assets/collaborator/artv.png",
    },
    {
      name: "bank bsi",
      logo: "/assets/collaborator/bsi.png",
    },
    {
      name: "evercoss",
      logo: "/assets/collaborator/evercoss.png",
    },
    {
      name: "seven retail",
      logo: "/assets/collaborator/seven.jpg",
    },
  ];

  return (
    <div className="mt-12 mx-auto max-w-6xl">
      <div className="py-12 px-5 xl:px-0">
        <div className="flex items-center justify-center textlg xl:text-2xl font-bold font-roboto uppercase">
          In Collaboration with
        </div>
        <div className="mt-8 flex flex-row flex-wrap gap-6 items-center justify-center">
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
