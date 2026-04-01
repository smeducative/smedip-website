import gsap from "gsap";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CarFront,
  Film,
  GraduationCap,
  Handshake,
  Leaf,
  MonitorSmartphone,
  Sprout,
  Users,
  Wifi,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import ClickSpark from "./ClickSpark";
import SpotlightCard from "./SpotlightCard";
import StarBorder from "./StarBorder";

type Program = {
  code: string;
  title: string;
  description: string;
  competencies: string[];
  careers: string[];
  label: string;
  href?: string;
  icon: LucideIcon;
  className: string;
  featured?: boolean;
  image?: string;
};

type Highlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const programs: Program[] = [
  {
    code: "TJKT",
    title: "Teknik Jaringan Komputer & Telekomunikasi",
    description:
      "Belajar instalasi jaringan, administrasi server, troubleshooting hardware, dan kultur kerja digital yang relevan dengan kebutuhan industri.",
    competencies: [
      "Instalasi LAN/WAN",
      "Administrasi server",
      "MikroTik & troubleshooting",
    ],
    careers: ["IT Support", "Teknisi jaringan", "Admin infrastruktur"],
    label: "Praktik jaringan, hardware, dan sertifikasi",
    href: "/kompetensi-keahlian/tkj",
    icon: Wifi,
    className: "lg:col-span-7",
    featured: true,
    image: "/assets/images/CBMM4413.JPG",
  },
  {
    code: "TKR",
    title: "Teknik Kendaraan Ringan",
    description:
      "Program otomotif roda empat yang menekankan perawatan mesin mobil, sistem kelistrikan, dan pembiasaan kerja bengkel sesuai standar industri.",
    competencies: [
      "Perawatan mesin mobil",
      "Sistem kelistrikan",
      "Tune up & overhaul",
    ],
    careers: ["Mekanik dealer", "Teknisi bengkel", "Wirausaha otomotif"],
    label: "Praktik otomotif roda empat berstandar industri",
    icon: CarFront,
    className: "lg:col-span-5",
  },
  {
    code: "TBSM",
    title: "Teknik dan Bisnis Sepeda Motor",
    description:
      "Pembelajaran otomotif sepeda motor dengan orientasi teaching factory, budaya kerja industri, dan pemeliharaan kendaraan modern.",
    competencies: [
      "Smart motor injection",
      "Kelistrikan & mesin",
      "Modifikasi & service berkala",
    ],
    careers: ["Mekanik bengkel", "Teknisi dealer", "Wirausaha otomotif"],
    label: "Kurikulum terintegrasi industri",
    href: "/kompetensi-keahlian/tbsm",
    icon: Wrench,
    className: "lg:col-span-6",
  },
  {
    code: "ATPH",
    title: "Agribisnis Tanaman / Smart Farming",
    description:
      "Menggabungkan budidaya tanaman, hidroponik, aquaponik, dan praktik produksi berbasis lahan untuk menumbuhkan agripreneur muda.",
    competencies: [
      "Hidroponik & aquaponik",
      "Budidaya tanaman pangan",
      "Pupuk organik & pembibitan",
    ],
    careers: ["Agripreneur", "Teknisi pertanian", "Operator greenhouse"],
    label: "Lahan praktik dan green house aktif",
    href: "/kompetensi-keahlian/atph",
    icon: Sprout,
    className: "lg:col-span-6",
  },
  {
    code: "BDP",
    title: "Broadcasting dan Perfilman",
    description:
      "Jalur kreatif untuk produksi video, penyiaran, storytelling visual, dan pengembangan konten digital yang siap tampil di berbagai platform.",
    competencies: [
      "Produksi video",
      "Editing & motion basic",
      "Teknik penyiaran",
    ],
    careers: ["Video editor", "Kameramen", "Content creator"],
    label: "Kelas kreatif dengan ritme produksi nyata",
    icon: Film,
    className: "lg:col-span-6",
  },
  {
    code: "ACP",
    title: "Axioo Class Program (TJKT)",
    description:
      "Kelas industri hasil kolaborasi dengan Axioo untuk memperdalam perakitan komputer, jaringan, dan pemrograman web dengan ritme belajar yang dekat ke kebutuhan dunia kerja digital.",
    competencies: [
      "Perakitan komputer",
      "Jaringan komputer",
      "Pemrograman web",
    ],
    careers: ["IT Support", "Web developer", "Teknisi komputer"],
    label: "Kelas industri Axioo untuk talenta digital",
    icon: MonitorSmartphone,
    className: "lg:col-span-6",
  },
];

const highlights: Highlight[] = [
  {
    title: "Pengajar produktif",
    description:
      "Guru berpengalaman mendampingi siswa dari dasar keterampilan sampai ritme kerja lapangan.",
    icon: GraduationCap,
  },
  {
    title: "Kurikulum adaptif",
    description:
      "Materi disusun dekat dengan praktik industri, proyek nyata, dan kebutuhan dunia kerja saat ini.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Pembinaan karakter",
    description:
      "Belajar akademik, organisasi, dan akhlak berjalan beriringan agar siswa tumbuh utuh.",
    icon: Users,
  },
  {
    title: "Jejaring mitra",
    description:
      "Magang, guru tamu, dan ruang kolaborasi membuka jalur lebih dekat ke industri dan komunitas.",
    icon: Handshake,
  },
];

const facilities = [
  "Lab komputer dan jaringan",
  "Workshop otomotif",
  "Green house dan lahan praktik",
  "Hotspot area sekolah",
  "Ruang belajar nyaman",
  "Masjid dan pembinaan keagamaan",
  "Studio konten siswa",
  "Area kegiatan organisasi",
];

const quickFacts = [
  { value: "4+", label: "jalur belajar populer" },
  { value: "Practice", label: "lebih banyak praktik terarah" },
  { value: "Growth", label: "akademik, skill, dan karakter" },
];

const stackCards = [
  {
    title: "Lab & jaringan aktif",
    copy: "Belajar dari praktik jaringan, perangkat, dan simulasi infrastruktur.",
    image: "/assets/images/CBMM4413.JPG",
  },
  {
    title: "Karakter dan organisasi",
    copy: "Ruang tumbuh untuk disiplin, kolaborasi, dan pembinaan siswa.",
    image: "/assets/images/CBMM4431.JPG",
  },
  {
    title: "Fasilitas yang dipakai",
    copy: "Workshop, green house, dan area praktik hadir untuk kegiatan harian.",
    image: "/assets/images/IMG_4531.JPG",
  },
];

function BentoShell({
  active,
  children,
  className,
  spotlightColor,
}: {
  active: boolean;
  children: ReactNode;
  className: string;
  spotlightColor: `rgba(${number}, ${number}, ${number}, ${number})`;
}) {
  if (!active) {
    return <div className={className}>{children}</div>;
  }

  return (
    <SpotlightCard className={className} spotlightColor={spotlightColor}>
      {children}
    </SpotlightCard>
  );
}

function SparkShell({
  active,
  children,
}: {
  active: boolean;
  children: ReactNode;
}) {
  if (!active) {
    return <>{children}</>;
  }

  return (
    <ClickSpark
      sparkColor='#db7710'
      sparkCount={10}
      sparkRadius={26}
      sparkSize={9}
      duration={420}
      extraScale={1.05}>
      {children}
    </ClickSpark>
  );
}

function BorderShell({
  active,
  children,
}: {
  active: boolean;
  children: ReactNode;
}) {
  if (!active) {
    return (
      <div className='inline-flex rounded-full border border-white/20 bg-white/10 p-[1px]'>
        {children}
      </div>
    );
  }

  return (
    <StarBorder
      as='div'
      className='inline-flex rounded-full p-[1px]'
      color='#db7710'
      speed='5s'
      thickness={1}>
      {children}
    </StarBorder>
  );
}

export default function KompetensiKeahlian() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [interactiveReady, setInteractiveReady] = useState(false);

  useEffect(() => {
    setInteractiveReady(true);
  }, []);

  useEffect(() => {
    let context: gsap.Context | undefined;
    let mounted = true;

    const initAnimations = async () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || !sectionRef.current) {
        return;
      }

      const { ScrollTrigger } = await import("gsap/dist/ScrollTrigger");

      if (!mounted || !sectionRef.current) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        gsap.fromTo(
          "[data-kk-reveal]",
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
            },
          }
        );

        gsap.utils.toArray<HTMLElement>("[data-program-card]").forEach((card) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0, y: 42, scale: 0.98 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 86%",
              },
            }
          );
        });

        gsap.to("[data-kk-parallax]", {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to("[data-kk-orb]", {
          y: -20,
          x: 16,
          repeat: -1,
          yoyo: true,
          duration: 5.5,
          ease: "sine.inOut",
        });
      }, sectionRef);
    };

    initAnimations();

    return () => {
      mounted = false;
      context?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id='kompetensi-keahlian'
      className='relative overflow-hidden bg-[#f4efe6] py-16 sm:py-20'>
      <div className='absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(24,56,47,0.14),_transparent_55%)]' />
      <div className='absolute right-0 top-28 h-64 w-64 rounded-full bg-[#db7710]/10 blur-3xl' data-kk-orb />

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl' data-kk-reveal>
          <div className='inline-flex items-center rounded-full border border-[#d8cbb7] bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8b5a1f]'>
            Program Keahlian
          </div>
          <h2 className='mt-4 max-w-2xl font-inter text-3xl font-bold leading-tight text-[#17372f] sm:text-4xl lg:text-5xl'>
            Pilih jalur belajar yang dekat dengan minat, praktik, dan peluang kerja.
          </h2>
          <p className='mt-4 max-w-2xl text-sm leading-7 text-[#466256] sm:text-base'>
            Bagian ini dirapikan mengikuti ritme halaman SPMB: jurusan tampil lebih informatif,
            kompetensinya terlihat jelas, dan alasan memilih sekolah langsung terbaca tanpa terasa padat.
          </p>
        </div>

        <div className='mt-8 grid gap-4 lg:grid-cols-12'>          

          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.code}
                className={program.className}
                data-program-card>
                <BentoShell
                  active={interactiveReady}
                  className='h-full rounded-[32px]'
                  spotlightColor='rgba(219, 119, 16, 0.16)'>
                  <article className='relative flex h-full flex-col overflow-hidden rounded-[32px] border border-[#dbd2c3] bg-white/90 p-5 shadow-[0_20px_60px_rgba(24,56,47,0.08)] sm:p-6'>
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(219,119,16,0.12),_transparent_32%)]' />
                    <div className='relative flex h-full flex-col'>
                      <div className='flex items-start justify-between gap-4'>
                        <div>
                          <p className='text-xs font-semibold uppercase tracking-[0.24em] text-[#8b5a1f]'>
                            {program.code}
                          </p>
                          <h3 className='mt-3 max-w-md font-inter text-xl font-semibold leading-tight text-[#17372f] sm:text-2xl'>
                            {program.title}
                          </h3>
                        </div>
                        <div className='inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eff5f1] text-[#17372f]'>
                          <Icon className='h-5 w-5' />
                        </div>
                      </div>

                      {program.featured && program.image ? (
                        <div className='relative mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]'>
                          <div className='relative min-h-[240px] overflow-hidden rounded-[28px]'>
                            <Image
                              src={program.image}
                              alt={program.title}
                              fill
                              className='object-cover'
                              sizes='(min-width: 1024px) 32vw, 100vw'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-[#17372f]/70 via-[#17372f]/0 to-transparent' data-kk-parallax />
                            <div className='absolute bottom-4 left-4 inline-flex rounded-full bg-white/88 px-4 py-2 text-xs font-semibold text-[#17372f]'>
                              {program.label}
                            </div>
                          </div>
                          <div className='flex flex-col justify-between rounded-[28px] bg-[#f8f5ef] p-5'>
                            <div>
                              <p className='text-sm leading-7 text-[#4f665c]'>{program.description}</p>
                            </div>
                            <div className='mt-4'>
                              <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#8b5a1f]'>
                                Prospek karir
                              </p>
                              <div className='mt-3 flex flex-wrap gap-2'>
                                {program.careers.map((career) => (
                                  <span
                                    key={career}
                                    className='rounded-full bg-white px-3 py-2 text-xs font-medium text-[#17372f]'>
                                    {career}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p className='relative mt-5 text-sm leading-7 text-[#4f665c]'>
                          {program.description}
                        </p>
                      )}

                      <div className='relative mt-5 grid gap-4 sm:grid-cols-2'>
                        <div>
                          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#8b5a1f]'>
                            Kompetensi
                          </p>
                          <ul className='mt-3 space-y-2'>
                            {program.competencies.map((item) => (
                              <li
                                key={item}
                                className='flex items-start gap-2 text-sm text-[#24463b]'>
                                <BadgeCheck className='mt-0.5 h-4 w-4 text-[#db7710]' />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-[#8b5a1f]'>
                            Prospek karir
                          </p>
                          <ul className='mt-3 space-y-2'>
                            {program.careers.map((item) => (
                              <li
                                key={item}
                                className='flex items-start gap-2 text-sm text-[#24463b]'>
                                <BriefcaseBusiness className='mt-0.5 h-4 w-4 text-[#17372f]' />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className='relative mt-6 flex items-center justify-between gap-4 border-[#ebe3d6] border-t pt-4'>
                        <p className='text-xs font-medium leading-5 text-[#5f786d]'>{program.label}</p>
                        {program.href ? (
                          <Link
                            href={program.href}
                            className='inline-flex items-center gap-2 rounded-full bg-[#17372f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0f2821]'>
                            Detail jurusan
                            <ArrowUpRight className='h-4 w-4' />
                          </Link>
                        ) : (
                          <span className='inline-flex items-center rounded-full bg-[#f2ebe0] px-4 py-2 text-xs font-semibold text-[#17372f]'>
                            Jalur kreatif siswa
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </BentoShell>
              </div>
            );
          })}
        </div>

        <div className='mt-16 grid gap-4 lg:grid-cols-12'>
          <div className='lg:col-span-4' data-kk-reveal>
            <div className='h-full rounded-[32px] border border-[#dbd2c3] bg-white/80 p-6 shadow-[0_18px_50px_rgba(24,56,47,0.06)] sm:p-7'>
              <div className='inline-flex items-center rounded-full bg-[#eef4f1] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#17372f]'>
                Keunggulan & Fasilitas
              </div>
              <h3 className='mt-4 font-inter text-2xl font-semibold leading-tight text-[#17372f] sm:text-[2rem]'>
                Belajar di ruang yang mendukung skill, disiplin, dan rasa percaya diri.
              </h3>
              {/* <p className='mt-4 text-sm leading-7 text-[#4f665c] sm:text-base'>
                Di bawah ini, alasan memilih sekolah dan fasilitas utama ditampilkan dalam blok ringkas seperti referensi SPMB, tetapi disesuaikan dengan karakter visual situs ini.
              </p> */}

              <div className='mt-6 grid gap-3'>
                <div className='rounded-[26px] bg-[#17372f] px-5 py-4 text-white'>
                  <p className='text-sm font-semibold'>Lingkungan belajar aktif</p>
                  <p className='mt-2 text-sm leading-6 text-[#d7e2dc]'>
                    Teori, praktik, organisasi, dan pembinaan karakter bertemu dalam satu alur belajar.
                  </p>
                </div>
                
              </div>
            </div>
          </div>

          <div className='lg:col-span-8 grid gap-4 sm:grid-cols-2' data-kk-reveal>
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className='rounded-[30px] border border-[#dbd2c3] bg-white/88 p-5 shadow-[0_18px_50px_rgba(24,56,47,0.05)] sm:p-6'>
                  <div className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4f1] text-[#17372f]'>
                    <Icon className='h-5 w-5' />
                  </div>
                  <h4 className='mt-4 font-inter text-xl font-semibold text-[#17372f]'>
                    {item.title}
                  </h4>
                  <p className='mt-3 text-sm leading-7 text-[#4f665c]'>{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className='lg:col-span-12' data-kk-reveal>
            <div className='relative overflow-hidden rounded-[32px] bg-[#18382f] p-6 text-white shadow-[0_24px_80px_rgba(24,56,47,0.18)] sm:p-7'>
              <div className='absolute inset-y-0 right-0 hidden w-2/5 lg:block'>
                <div className='relative h-full'>
                  <Image
                    src='/assets/images/IMG_4531.JPG'
                    alt='Kegiatan siswa SMK Diponegoro Karanganyar'
                    fill
                    className='object-cover opacity-70'
                    sizes='(min-width: 1024px) 28vw, 100vw'
                  />
                  <div className='absolute inset-0 bg-gradient-to-r from-[#18382f] via-[#18382f]/30 to-transparent' data-kk-parallax />
                </div>
              </div>

              <div className='relative max-w-xl'>
                <div className='inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8d7c0]'>
                  <Leaf className='h-4 w-4' />
                  Fasilitas sekolah
                </div>
                <h3 className='mt-4 font-inter text-2xl font-semibold leading-tight sm:text-[2rem]'>
                  Ruang belajar yang siap dipakai untuk bertumbuh, bukan hanya dipamerkan.
                </h3>
                <p className='mt-4 text-sm leading-7 text-[#d7e2dc] sm:text-base'>
                  Dari lab komputer hingga green house, fasilitas dipilih untuk mendukung jurusan, kegiatan siswa, dan ritme belajar sehari-hari.
                </p>

                <div className='mt-6 flex flex-wrap gap-2'>
                  {facilities.map((item) => (
                    <span
                      key={item}
                      className='rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-medium text-white/95'>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
