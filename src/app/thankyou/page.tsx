import Script from "next/script";
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
				¡Ya agendaste tu entrevista! Mira este video para que puedas aprovecharla al maximo.
			</h1>
			<VideoEmbed version={5} />
		  </div>
		</section>
		<section className="relative py-[60px]">
			<div className="max-w-[900px] mx-auto">
				<h2 className="text-[32px] md:text-[42px] font-semibold mb-8 text-center max-w-[500px] mx-auto leading-[40px]">Algunos de los yogis con los que trabajamos:</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					<iframe className="aspect-[9/16] w-full" src="https://fast.wistia.net/embed/iframe/l4mhpjya0l?web_component=true&seo=true&videoFoam=false"></iframe>
					<iframe className="aspect-[9/16] w-full" src="https://fast.wistia.net/embed/iframe/88j5ccvet1?web_component=true&seo=true&videoFoam=false"></iframe>
					<iframe className="aspect-[9/16] w-full" src="https://fast.wistia.net/embed/iframe/p824mmmqp4?web_component=true&seo=true&videoFoam=false"></iframe>
					<iframe className="aspect-[9/16] w-full" src="https://fast.wistia.net/embed/iframe/b8xn8u9ucz?web_component=true&seo=true&videoFoam=false"></iframe>
					<iframe className="aspect-[9/16] w-full" src="https://fast.wistia.net/embed/iframe/g0tibj3njb?web_component=true&seo=true&videoFoam=false"></iframe>
					<iframe className="aspect-[9/16] w-full" src="https://fast.wistia.net/embed/iframe/782997tbkq?web_component=true&seo=true&videoFoam=false"></iframe>
				</div>
				<h2 className="text-[32px] md:text-[42px] font-semibold mb-8 text-center max-w-[800px] mx-auto leading-[40px] mt-[120px]">Como Julián consiguió 40 nuevos clientes con nuestra estrategia</h2>
				<iframe className="w-full aspect-video" 
					src="https://www.youtube.com/embed/SaPx0Z534HI?si=7fyhTfuIWQy-U4XJ&controls=0&modestbranding=1&rel=0&fs=0&disablekb=1&playsinline=1" 
					title="YouTube video player" 
					allow="autoplay; encrypted-media">
				</iframe>
			</div>
		</section>
		<Faqs/>
		<img className="h-[35px] md:h-[45px] object-contain mx-auto mt-12 mb-8" src="../biofounders.png" alt="Bio Founders" />
		<p className="text-white/80 font-medium text-[16px] md:text-[20px] text-center mb-[80px]">© Biofounders 2025. Todos los derechos reservados.</p>
		<Script>
		{`!function(f,b,e,v,n,t,s)
		{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};
		if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
		n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];
		s.parentNode.insertBefore(t,s)}(window, document,'script',
		'https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', '942814494324978');
		fbq('track', 'Lead');`}
		</Script>
		<noscript><img height="1" width="1" style={{'display': 'none'}}
		src="https://www.facebook.com/tr?id=942814494324978&ev=PageView&noscript=1"
		/></noscript>
	  </div>
	  
	);
  }
  