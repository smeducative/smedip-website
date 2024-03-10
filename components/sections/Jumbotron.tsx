type Props = {
  title: string;
  center?: boolean;
  sub?: JSX.Element | string;
};

export default function Jumbotron({ title, sub, center }: Props) {
  return (
    <div className="bg-gradient-to-t from-primary to-green-700">
      <div className="mx-auto pt-16 max-w-6xl">
        <div
          className={`py-12 xl:py-16 px-5 xl:px-0 ${
            center ? "text-center" : "text-left"
          }`}
        >
          <h1 className="font-bold text-lg text-slate-50 xl:text-2xl">
            {title}
          </h1>
          {sub}
        </div>
      </div>
    </div>
  );
}
