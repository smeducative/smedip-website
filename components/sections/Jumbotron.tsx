type Props = {
  title: string;
  sub?: JSX.Element | string;
};

export default function Jumbotron({ title, sub }: Props) {
  return (
    <div className='bg-gradient-to-t from-gray-900 via-gray-700 to-gray-500'>
      <div className='pt-16 mx-auto max-w-6xl'>
        <div className='py-8 xl:py-16 px-5 xl:px-0'>
          <h1 className='text-lg xl:text-2xl font-bold text-slate-50'>
            {title}
          </h1>
          {sub}
        </div>
      </div>
    </div>
  );
}
