import { motion } from "framer-motion";
import Image from "next/image";
import SmedipKristal from "@/public/assets/images/smedip-kristal.png";

const SmedipKristalPage = () => {
	return (
		<div
			style={{
				backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%234dd6f3' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
			}}
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 2 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className="mx-auto pt-12 xl:pt-24 pb-10 max-w-6xl"
			>
				<div className="gap-6 grid grid-cols-12 px-5 xl:px-0">
					<div className="flex justify-center items-center col-span-12 lg:col-span-4">
						<Image
							src={SmedipKristal}
							alt={`sambutan kepsek src`}
							className="hover:-rotate-3 hover:scale-110 duration-500"
						/>
					</div>
					<div className="col-span-12 lg:col-span-8">
						<div className="flex flex-col justify-center items-start">
							<h1 className="font-roboto font-extrabold text-[#4FBEBC] text-2xl">
								MAU (Modern, Agamis, Unggul)
							</h1>
							<p className="mt-5 font-inter text-sm lg:text-base">
								Terinspirasi oleh julukan Indonesia sebagai{" "}
								<strong>Zamrud Khatulistiwa</strong>, SMK Diponegoro Karanganyar
								(SMEDIP) diharapkan menjadi representasi kecil dari kesuburan
								dan kehijauan negara di garis khatulistiwa. Layaknya zamrud yang
								berharga, SMEDIP berupaya menjadi lembaga pendidikan yang
								modern, agamis, dan unggul dalam membentuk generasi muda yang
								berkualitas. Dengan visi dan misi yang kuat, SMEDIP bertekad
								menjadi cerminan kecil dari keindahan dan potensi besar bangsa
								Indonesia.
							</p>
							<a
								href="https://drive.google.com/file/d/1nyFe0kdDRpEMzFR1gGa2JINxLpqr_wTg/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center bg-[#4FBEBC] hover:bg-[#3da8a6] mt-6 px-6 py-3 rounded-lg font-inter font-medium text-white text-sm lg:text-base hover:scale-105 transition-colors duration-300 transform"
							>
								Text Doa
								<svg
									className="ml-2 w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default SmedipKristalPage;
