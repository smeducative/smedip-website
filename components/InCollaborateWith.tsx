import Image from "next/image";

const InCollaborateWith = () => {
  const collaborators = [
    {
      name: "Smeducative",
      logo: "/assets/collaborator/smeducative.png",
    },
    {
      name: "AR TV",
      logo: "/assets/collaborator/artv.png",
    },
    {
      name: "creasico",
      logo: "/assets/collaborator/creasico.png",
    },
  ];

  return (
    <div className='mt-12 mx-auto max-w-6xl'>
      <div className='py-12 px-5 xl:px-0'>
        <div className='flex items-center justify-center textlg xl:text-2xl font-bold font-roboto'>
          In Collaboration with
        </div>
        <div className='flex flex-row flex-wrap gap-6 items-center justify-center'>
          {collaborators.map((collaborator) => (
            <img
              key={collaborator.name}
              src={collaborator.logo}
              alt={collaborator.name}
              className={`h-32 xl:h-44 w-32 xl:w-44 object-contain`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InCollaborateWith;
