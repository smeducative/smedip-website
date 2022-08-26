import Image from 'next/image'
import smeducative from '../assets/collaborator/smeducative.png'
import artv from '../assets/collaborator/artv.png'

const InCollaborateWith = () => {
    const collaborators = [
        {
            name: 'Smeducative',
            logo: smeducative
        }, {
            name: 'AR TV',
            logo: artv
        }
    ]


    return <div className="mx-auto max-w-6xl">

        <div className="py-12 px-5 xl:px-0">
            <div className="flex flex-wrap">
                {collaborators.map(collaborator => (
                    <Image 
                        key={collaborator.name}
                        src={collaborator.logo}
                        alt={collaborator.name}
                        height={120}
                        width={'100%'}
                        className={`obje`}
                    />
                ))}
            </div>
        </div>

    </div>
}


export default InCollaborateWith