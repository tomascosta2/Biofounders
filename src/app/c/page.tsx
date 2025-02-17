import Script from "next/script";
import VideoEmbed from "../components/VideoEmbed"

export default function Home() {
  return (
    <div className="relative overflow-clip px-4">
      <div className="absolute blur-[200px] size-[832px] rounded-full bg-[#151F57]/80 -left-[310px] -top-[400px]"></div>
      <div className="absolute blur-[200px] size-[832px] rounded-full bg-[#151F57]/80 -right-[310px] top-[600px]"></div>
      <section className="py-[60px] relative">
        <div className="max-w-[940px] mx-auto">
          <img className="h-[35px] md:h-[45px] object-contain mx-auto mb-8" src="../biofounders.png" alt="Bio Founders" />
          <p className="text-white/80 font-medium text-[16px] md:text-[20px] text-center mb-4">+10.000 nuevos clientes generados a profesores de yoga </p>
          <h1 className="text-[26px] leading-[26px] md:text-[50px] font-bold md:leading-[47px] text-center">
            Sumamos entre <span className="--highlight">10 y 40 alumnos nuevos</span> por mes para tus
            clases de Yoga con nuestro Sistema de Anuncios
          </h1>
          <p className="text-white/80 font-medium text-[16px] md:text-[20px] text-center mt-4 mb-8">Mira el video y descubri como lo hacemos</p>
          <VideoEmbed version={4} />
          <img className="h-[35px] md:h-[45px] object-contain mx-auto mb-8 mt-[100px]" src="../biofounders.png" alt="Bio Founders" />
          <p className="text-white/80 font-medium text-[16px] md:text-[20px] text-center">© Biofounders 2025. Todos los derechos reservados.</p>
        </div>
      </section>
      <Script>
      {`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1481141145776631');
      fbq('track', 'PageView');
      `}
      </Script>
      <noscript><img height="1" width="1" style={{'display': 'none'}}
      src="https://www.facebook.com/tr?id=1481141145776631&ev=PageView&noscript=1"
      /></noscript>
    </div>
    
  );
}
