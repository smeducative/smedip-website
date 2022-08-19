type Props = {
  title: string;
  center?: boolean;
  sub?: JSX.Element | string;
};

export default function Jumbotron({ title, sub, center }: Props) {
  return (
    <div className='bg-gradient-to-t from-green-900 via-green-700 to-green-500'>
      <div className='pt-16 mx-auto max-w-6xl'>
        <div
          className={`py-12 xl:py-16 px-5 xl:px-0 ${
            center ? "text-center" : "text-left"
          }`}>
          <h1 className='text-lg xl:text-2xl font-bold text-slate-50'>
            {title}
          </h1>
          {sub}
        </div>
      </div>
    </div>
  );
}
