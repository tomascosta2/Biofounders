import VideoEmbed from "../components/VideoEmbed";
import Faqs from "./components/Faqs";

export default function Home() {
	return (
	  <div className="relative px-4">
		<div className="absolute blur-[200px] size-[832px] rounded-full bg-[#151F57]/80 -left-[310px] -top-[400px]"></div>
		<div className="absolute blur-[200px] size-[832px] rounded-full bg-[#151F57]/80 -right-[310px] top-[600px]"></div>
		<section className="py-[60px] relative">
		  <div className="max-w-[940px] mx-auto">
          <img className="h-[35px] md:h-[45px] object-contain mx-auto mb-8" src="../biofounders.png" alt="Bio Founders" />
			<div className="flex items-center justify-center gap-2 mb-4">
				<img src="../bio-stars.png" alt="Bio Founders 5 de 5 estrellas" />
				<p className="text-white/80 font-medium text-[16px] md:text-[20px] leading-[100%] pt-[4px]">5.0 Estrellas de 132 reviews</p>
			</div>
			<h1 className="text-[26px] leading-[26px] md:text-[50px] font-bold md:leading-[47px] text-center mb-8">
				¡Ya agendaste tu consulta gratuita! Mira este video para que puedas aprovecharla al maximo.
			</h1>
			<VideoEmbed version={5} />
		  </div>
		</section>
		<section className="relative py-[60px]">
			<div className="max-w-[900px] mx-auto">
			<h2 className="text-[32px] md:text-[42px] font-semibold mb-4 text-center max-w-[500px] mx-auto leading-[40px] mb-8">Algunos de los yogis con los que trabajamos:</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					<iframe className="aspect-[9/16] w-full" src="https://drive.google.com/file/d/1kuByc8o_YLaxpB4J8Zs6eDaWuEe7WM1I/preview"></iframe>
					<iframe className="aspect-[9/16] w-full" src="https://drive.google.com/file/d/1tKjnRvwPKUHQGRqZFxGElRnQdZtDC_1p/preview"></iframe>
					<iframe className="aspect-[9/16] w-full" src="https://drive.google.com/file/d/1wFohNlMhwuwvYxyKtPsm-IDyIzxgRtN_/preview"></iframe>
					<iframe className="aspect-[9/16] w-full" src="https://drive.google.com/file/d/1VYmzdoXhv1zT1EM2RM4tjoAXJrNK71lr/preview"></iframe>
					<iframe className="aspect-[9/16] w-full" src="https://drive.google.com/file/d/1MgLpATDO0naNk9hjIOr-626265E_CNBx/preview"></iframe>
					<iframe className="aspect-[9/16] w-full" src="https://drive.google.com/file/d/1pZugQZwfsm6w80ZYadOflFUT8tRzfIL8/preview"></iframe>
				</div>
			</div>
		</section>
		<Faqs/>
		<img className="h-[35px] md:h-[45px] object-contain mx-auto mt-12 mb-8" src="../biofounders.png" alt="Bio Founders" />
		<p className="text-white/80 font-medium text-[16px] md:text-[20px] text-center mb-[80px]">© Biofounders 2025. Todos los derechos reservados.</p>
	  </div>
	);
  }
  