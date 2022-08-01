type Props = {
  title: string;
};

export default function Jumbotron({ title }: Props) {
  return (
    <div className='bg-white'>
      <div className='pt-16 mx-auto max-w-6xl'>
        <div className='py-8 xl:py-16 px-5'>
          <h1 className='text-lg xl:text-2xl font-bold'>{title}</h1>
        </div>
      </div>
    </div>
  );
}
