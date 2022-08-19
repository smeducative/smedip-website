import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";

type Props = {
  bright?: boolean;
  children?: React.ReactNode;
};

export default function AppLayout({ children, bright }: Props) {
  return (
    <div className={`${bright ? "bg-slate-50" : "bg-slate-200"} min-h-screen`}>
      <AppHeader />
      {children}
      <AppFooter />
    </div>
  );
}
