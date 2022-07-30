import AppHeader from "../AppHeader";

type Props = {
  children?: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div className='bg-slate-50 min-h-screen'>
      <AppHeader />
      {children}
    </div>
  );
}
