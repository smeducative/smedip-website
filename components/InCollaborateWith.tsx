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
      name: "AR TV",
      logo: "/assets/collaborator/artv.png",
    },
    {
      name: "creasico",
      logo: "/assets/collaborator/creasico.png",
    },
    {
      name: "bank bsi",
      logo: "/assets/collaborator/bsi.png",
    },
  ];

  return (
    <div className='mt-12 mx-auto max-w-6xl'>
      <div className='py-12 px-5 xl:px-0'>
        <div className='flex items-center justify-center textlg xl:text-2xl font-bold font-roboto uppercase'>
          In Collaboration with
        </div>
        <div className='flex flex-row flex-wrap gap-6 items-center justify-center'>
          {collaborators.map((collaborator) => (
            <img
              key={collaborator.name}
              src={collaborator.logo}
              alt={collaborator.name}
              className={`h-24 lg:h-40 w-24 lg:w-40 object-contain`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InCollaborateWith;
