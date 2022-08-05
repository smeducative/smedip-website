import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";

type Props = {
  children?: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div className='bg-slate-50 min-h-screen'>
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
}
