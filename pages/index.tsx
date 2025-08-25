import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import GalleryImage from "@/components/gallery-image";
import {
	JumbotronCarouselComponent,
	type Slide,
} from "@/components/jumbotron-carousel";
import PPDBPage from "@/components/ppdb";
import SmedipKristalPage from "@/components/SmedipKristal";
import MarsSmedip from "@/components/sections/MarsSmedip";
import YoutubeGridCards, {
	type YTVideo,
} from "@/components/youtube-grid-cards";
import { getActivities } from "@/lib/getYtActivities";
import InCollaborateWith from "../components/InCollaborateWith";
import KompetensiKeahlian from "../components/KompetensiKeahlian";
import AppLayout from "../components/layouts/AppLayout";
import HeroSection from "../components/sections/HeroSection";
import NewsSection from "../components/sections/NewsSection";
import PublikasiSection from "../components/sections/PublikasiSection";
import type { News } from "../lib/fetch";
import { getNews, getPublikasi, getSlides, type Publikasi } from "../lib/fetch";
import { getFullpath } from "../lib/getFullpath";

type Props = {
	news: News[];
	publikasi: Publikasi[];
	videos: YTVideo[];
	slides: Slide[];
};

const Home: NextPage<Props> = ({ news, publikasi, videos, slides }) => {
	const { route } = useRouter();

	return (
		<AppLayout bright>
			<NextSeo
				title="SMK Diponegoro Karanganyar Kab. Pekalongan | MAU Modern, Agamis, Unggul"
				description="Terwujudnya Sekolah Sebagai Pusat Pendidikan dan Pelatihan Kejuruan dengan Layanan Pendidikan yang Modern Sesuai Perkembangan Ilmu Pengetahan yang Menghasilkan Sumber Daya Manusia yang Unggul dalam Prestasi dan Berakhlak Islami (Modern Agamis Unggul)"
				canonical={getFullpath()}
				openGraph={{
					title: "SMK Diponegoro Karanganyar",
					description:
						"Terwujudnya Sekolah Sebagai Pusat Pendidikan dan Pelatihan Kejuruan dengan Layanan Pendidikan yang Modern Sesuai Perkembangan Ilmu Pengetahan yang Menghasilkan Sumber Daya Manusia yang Unggul dalam Prestasi dan Berakhlak Islami (Modern Agamis Unggul)",
					url: route,
					images: [
						{
							url: getFullpath("/logo.png"),
							width: 850,
							height: 650,
							alt: "Photo of text",
						},
					],
				}}
			/>
			<HeroSection />
			{slides?.length > 0 && <JumbotronCarouselComponent slides={slides} />}
			<SmedipKristalPage />
			<GalleryImage />
			<KompetensiKeahlian />
			<YoutubeGridCards items={videos} />
			<NewsSection news={news} />
			<PublikasiSection publikasi={publikasi} />
			<PPDBPage />
			<MarsSmedip />
			<InCollaborateWith />
		</AppLayout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const [smedipYT, bdpTV] = await Promise.all([
		getActivities({
			channelId: "UCtbl00zVFRkH2cALJgSN3Uw",
		}).then((res) => res),
		getActivities({
			channelId: "UCZ5gDURHX02514KEbzt6sVQ",
		}).then((res) => res),
	]);

	const filtered = [...smedipYT, ...bdpTV].filter(
		(item) => item.snippet.type === "upload",
	);

	const videos = filtered;

	// then sort by snippet.publishedAt
	const sorted = videos.sort(
		(a, b) =>
			Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt),
	);

	const { data: news } = await getNews();
	const { data: publikasi } = await getPublikasi();
	const { data: slides } = await getSlides();

	return {
		props: {
			news,
			publikasi,
			videos: sorted,
			slides,
		},
		revalidate: 5,
	};
};

export default Home;
