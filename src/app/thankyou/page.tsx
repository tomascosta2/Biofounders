import Faqs from "./components/Faqs";

export default function Home() {
	return (
	  <div className="relative">
		<div className="absolute blur-[200px] size-[832px] rounded-full bg-[#151F57]/80 -left-[310px] -top-[400px]"></div>
		<section className="py-[60px] relative">
		  <div className="max-w-[940px] mx-auto">
          <img className="h-[45px] object-contain mx-auto mb-8" src="../biofounders.png" alt="Bio Founders" />
			<div className="flex items-center justify-center gap-2 mb-4">
				<img src="../bio-stars.png" alt="Bio Founders 5 de 5 estrellas" />
				<p className="text-white/80 font-medium text-[20px] leading-[100%] pt-[4px]">5.0 Estrellas de 132 reviews</p>
			</div>
			<h1 className="text-[50px] font-bold leading-[47px] text-center">
				¡Ya agendaste tu consulta gratuita! Mira este video para que puedas aprovecharla al maximo.
			</h1>
		  </div>
		</section>
		<Faqs/>
	  </div>
	);
  }
  