import React from "react";
import CardProfile from "./CardProfile";
import logo from "../../image/logo-stakeholder.png";
import image1 from "../../image/bang-aldi-bang-lukman.png";
import image2 from "../../image/fest_indo.png";
import image3 from "../../image/keluarga_cemara.png";
import useTabletorMobileStyle from "../../features/hooks/useTabletorMobileStyle";
import {
	coreTeamCards,
	festivalIndonesiaCards,
	talentSportsHobbyCards,
	hwfkCards,
	entrepreunershipCards,
	socmedCards,
	profDevCards,
	orgDevCards,
	academicCards,
} from "./OrgMember";
import { useMediaQuery } from "react-responsive";

const OrgStructure = () => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width:1000px" });
	const isLargeScreen = useMediaQuery({
		query: "(min-width: 1824px)",
	});
	const coreTeamComp = coreTeamCards.map((member) => (
		<CardProfile
			nama={member.Nama}
			posisi={member.Posisi}
			picture={member.Picture}
		/>
	));

	const defaultClass = "mb-3 d-flex flex-row";

	const smScreenClass = "mb-3 d-flex flex-column";

	const lgScreenClass = "d-flex flex-column mb-3";

	const content = (
		// <p>Tes</p>
		<div data-spy="scroll">
			{/* <p id="audivider" class="justify-content-center"></p> */}
			<hr id="audivider" style={{ margin: "50px" }} />
			<h1
				id="aboutUs"
				style={{
					paddingLeft: "3.5rem",
					margin: "2rem 0 2rem 0",
					fontWeight: "700",
					fontSize: isTabletOrMobile ? "2em" : "3em",
				}}
				class="fw-bold"
			>
				About Us
			</h1>
			<div>
				{/* ABOUT PPIMIB SECTION */}
				<div
					// className={useTabletorMobileStyle(
					// 	"d-flex flex-row mb-3 px-5",
					// 	"d-flex flex-column mb-3",
					// 	1000
					// )}
					className={useTabletorMobileStyle(
						"d-flex flex-row mb-3 ps-5",
						"d-flex flex-column mb-3",
						1000
					)}
				>
					{/* <div className="row align-items-start">
						<div className="col position-relative">
							<h1
								id="aboutUs"
								style={{
									// paddingBottom: "3.5rem",
									// margin: "0rem 0 5rem 0",
									fontWeight: "700",
									fontSize: isTabletOrMobile ? "2em" : "3em",
								}}
								// class="fw-bold position-absolute top-0 start-0"
							>
								About Us
							</h1>
						</div>
						<div className="col">
							<img
								className={
									isTabletOrMobile ? "img-fluid m-auto mb-5" : "img-fluid"
								}
								alt="PPILOGO"
								src={logo}
								style={{ maxWidth: "273px" }}
							></img>
						</div>
					</div> */}
					<img
						className={
							isTabletOrMobile
								? "img-fluid m-auto mb-5"
								: "img-fluid mb-auto mt-5"
						}
						alt="PPILOGO"
						src={logo}
						style={{ maxWidth: "273px" }}
					></img>
					<div className="px-5 mt-5">
						<h2
							style={{
								color: "#1D1D59",
								fontWeight: "1000",
							}}
						>
							{" "}
							About PPI MIB
						</h2>
						<p id="orgDescription">
							PPI MIB merupakan rumah bagi para pelajar Indonesia dan masyarakat
							Indonesia di Birmingham. Perhimpunan ini 'mungkin' merupakan satu
							satunya perhimpunan wilayah di United Kingdom yang anggotanya
							bukan hanya pelajar, namun juga masyarakat Indonesia. Ini
							menunjukkan semangat para pendiri PPI MIB terdahulu untuk
							memperkuat silaturahmi dan kebersamaan yang berasaskan Persatuan
							Indonesia di Birmingham.
						</p>
					</div>
					<img
						alt="GAMBAR PAK MENTRI"
						src={image2}
						className="img-fluid"
						style={{ display: isLargeScreen ? "" : "none" }}
						// style={{ transform: "translateX(80px)" }}
					></img>
				</div>

				{/* VISION SECTION */}
				<div
					className={useTabletorMobileStyle(defaultClass, smScreenClass, 1000)}
				>
					<div class="d-flex flex-column mb-3"></div>
					<img
						alt="GAMBAR BANG ALDI PIDATO"
						className="img-fluid"
						src={image1}
						// style={{ transform: "translateX(-80px)" }}
					></img>
					<div className={isLargeScreen ? "px-5 col-3" : "px-5 m-auto"}>
						<h3
							style={{
								color: "#1D1D59",
								fontWeight: "1000",
								textDecoration: "underline",
							}}
						>
							Vision
						</h3>
						<p id="orgDescription">
							Menjadikan PPI MIB sebagai sarana kolaborasi antara pelajar dan
							masyarakat Indonesia yang konstruktif, sehat, kompak, menyenangkan
							dan berkesinambungan.
						</p>
					</div>
					<div
						className="px-5 col-5"
						style={{ display: isLargeScreen ? "" : "none" }}
					>
						<h3
							style={{
								color: "#1D1D59",
								fontWeight: "1000",
								textDecoration: "underline",
							}}
						>
							Mission
						</h3>
						<ul id="orgDescription">
							<li>
								Membangun rasa persaudaraan dan persatuan antara masayarakat dan
								pelajar
							</li>
							<li>Memberikan dukungan akademik bagi para mahasiswa</li>
							<li>
								Menjalin hubungan dengan organisasi nasional dan internasional
							</li>
							<li>
								Menonjolkan dan mendukungan para mahasiswa dan masyarakat
								Indonesia Birmingham yang berprestasi
							</li>
							<li>Mengimplementasikan Study-Life Balance</li>
							<li>Memperhatikan pelajar muda Indonesia (anak)</li>
							<li>Mendukung serta memperkenalkan pariwisata Indonesia</li>
						</ul>
					</div>
				</div>

				{/* MISSION SECTION */}
				<div
					className={useTabletorMobileStyle(defaultClass, smScreenClass, 1000)}
				>
					{!isLargeScreen ? (
						!isTabletOrMobile ? (
							<>
								<div className="m-auto px-5">
									<h3
										style={{
											color: "#1D1D59",
											fontWeight: "1000",
											textDecoration: "underline",
										}}
									>
										Mission
									</h3>
									<ul id="orgDescription">
										<li>
											Membangun rasa persaudaraan dan persatuan antara
											masayarakat dan pelajar
										</li>
										<li>Memberikan dukungan akademik bagi para mahasiswa</li>
										<li>
											Menjalin hubungan dengan organisasi nasional dan
											internasional
										</li>
										<li>
											Menonjolkan dan mendukungan para mahasiswa dan masyarakat
											Indonesia Birmingham yang berprestasi
										</li>
										<li>Mengimplementasikan Study-Life Balance</li>
										<li>Memperhatikan pelajar muda Indonesia (anak)</li>
										<li>Mendukung serta memperkenalkan pariwisata Indonesia</li>
									</ul>
								</div>
								<img
									alt="GAMBAR PAK MENTRI"
									src={image2}
									className="img-fluid ms-auto"
									style={{ objectFit: "contain" }}

									// style={{ transform: "translateX(80px)" }}
								></img>
							</>
						) : (
							<>
								<img
									alt="GAMBAR PAK MENTRI"
									src={image2}
									className="img-fluid"
									// style={{ objectFit: "contain" }}
									// style={{ transform: "translateX(80px)" }}
								></img>
								<div className="m-auto px-5">
									<h3
										style={{
											color: "#1D1D59",
											fontWeight: "1000",
											textDecoration: "underline",
										}}
									>
										Mission
									</h3>
									<ul>
										<li>
											Membangun rasa persaudaraan dan persatuan antara
											masayarakat dan pelajar
										</li>
										<li>Memberikan dukungan akademik bagi para mahasiswa</li>
										<li>
											Menjalin hubungan dengan organisasi nasional dan
											internasional
										</li>
										<li>
											Menonjolkan dan mendukungan para mahasiswa dan masyarakat
											Indonesia Birmingham yang berprestasi
										</li>
										<li>Mengimplementasikan Study-Life Balance</li>
										<li>Memperhatikan pelajar muda Indonesia (anak)</li>
										<li>Mendukung serta memperkenalkan pariwisata Indonesia</li>
									</ul>
								</div>
							</>
						)
					) : (
						<div></div>
					)}
				</div>

				{/* OUR TEAM SECTION */}
				<div className="mt-5 d-flex flex-column align-items-center">
					<h2
						style={{
							color: "#1D1D59",
							fontWeight: "1000",
							textDecoration: "underline",
						}}
					>
						Our Team
					</h2>
					<img
						alt="FOTO KELUARGA CEMARA"
						src={image3}
						className="img-fluid"
						id="keluarga_cemara"
					></img>
				</div>

				<div className={useTabletorMobileStyle("px-5", "px-2", 400)}>
					{/* CORE TEAM CARDS */}
					<div className="mb-4">
						<h2 className="fw-bolder">Core Team</h2>
						<div className="cardHolder">{coreTeamCards}</div>
					</div>

					{/* KETUA FESTIVAL INDONESIA */}
					<div className="mb-4">
						<h2 className="fw-bolder">Ketua Festival Indonesia</h2>
						<div className="cardHolder">{festivalIndonesiaCards}</div>
					</div>

					{/* TALENT SPORTS AND HOBBY */}
					<div className="mb-4">
						<h2 className="fw-bolder">Talent Sports and Hobby</h2>
						<div className="cardHolder">{talentSportsHobbyCards}</div>
					</div>

					{/* HEALTH WELLBEING FAMILY AND KIDS */}
					<div className="mb-4">
						<h2 className="fw-bolder">Health Wellbeing Family and Kids</h2>
						<div className="cardHolder">{hwfkCards}</div>
					</div>

					{/* ENTREPREUNERSHIP */}
					<div className="mb-4">
						<h2 className="fw-bolder">Entrepreunership</h2>
						<div className="cardHolder">{entrepreunershipCards}</div>
					</div>

					{/* Social Media and Public Relations */}
					<div className="mb-4">
						<h2 className="fw-bolder">Social Media and Public Relations</h2>
						<div className="cardHolder">{socmedCards}</div>
					</div>

					{/* Professional Development and Enggagement */}
					<div className="mb-4">
						<h2 className="fw-bolder">
							Professional Development and Enggagement
						</h2>
						<div className="cardHolder">{profDevCards}</div>
					</div>

					{/* Organisation Development and Engagement */}
					<div className="mb-4">
						<h2 className="fw-bolder">
							Organisation Development and Engagement
						</h2>
						<div className="cardHolder">{orgDevCards}</div>
					</div>

					{/* Academic Support, Data, and Information */}
					<div className="mb-4">
						<h2 className="fw-bolder">
							Academic Support, Data, and Information
						</h2>
						<div className="cardHolder">{academicCards}</div>
					</div>
				</div>
			</div>
		</div>
	);

	return content;
};
export default OrgStructure;
