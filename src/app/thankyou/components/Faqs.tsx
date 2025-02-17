'use client'
import { useState } from "react";

export default function Faqs() {

	const [open, setOpen] = useState<string | null>(null);
	
	const Preguntas = [
		{
		  pregunta: "¿Cómo garantizan que realmente voy a recibir entre 10 y 40 alumnos nuevos al mes?",
		  respuesta: "Nuestro sistema está diseñado específicamente para atraer alumnos interesados en clases de yoga en tu ciudad. Utilizamos anuncios altamente optimizados y estrategias de conversión probadas. Si sigues nuestras recomendaciones y tienes la capacidad de recibir nuevos alumnos, los resultados son consistentes."
		},
		{
		  pregunta: "¿Cuánto presupuesto adicional necesito para los anuncios?",
		  respuesta: "Recomendamos un presupuesto publicitario acorde a tu objetivo de crecimiento. En promedio, nuestros clientes invierten desde [X cantidad] al mes en anuncios, con un retorno que les permite recuperar la inversión rápidamente con los nuevos alumnos."
		},
		{
		  pregunta: "¿Tengo que hacer algo técnico o gestionar los anuncios yo mismo?",
		  respuesta: "No, nosotros nos encargamos de todo el proceso: desde la configuración de las campañas hasta la optimización continua. Solo necesitas estar listo para recibir y atender a los nuevos alumnos que llegarán a tu estudio o clases."
		},
		{
		  pregunta: "¿Qué pasa si en mi ciudad hay mucha competencia?",
		  respuesta: "Nuestro sistema está diseñado para destacar tu oferta y diferenciarte de otros estudios o instructores. Nos enfocamos en atraer alumnos que realmente se alineen con tu estilo de enseñanza y valores, lo que te permite competir con ventaja."
		},
		{
		  pregunta: "¿Tengo algún tipo de garantía si no funciona para mí?",
		  respuesta: "Sí, ofrecemos [tipo de garantía o política de satisfacción, si aplica]. Nuestro objetivo es que obtengas resultados reales, por eso solo trabajamos con instructores y estudios que cumplen ciertos requisitos para maximizar el éxito de la estrategia."
		}
	];
	  
	  

	const toggle = (pregunta: string) => {
		if (open === pregunta) {
			setOpen(null)
		} else {
			setOpen(pregunta)
		}
	}

	return (
		<section id="faqs" className="relative py-[60px] lg:py-[100px] px-4">
			<div className="tc-container">
				<h2 className="text-[42px] font-semibold mb-8 text-center">Preguntas Frecuentes</h2>
				<div className="max-w-[800px] mx-auto">
					{
						Preguntas.map((item) => (
							<div 
								key={item.pregunta}
								onClick={() => {toggle(item.pregunta)}}
								className="w-full cursor-pointer p-[20px] border-b border-b-white/50 last:border-b-0"
							>
								<h3 className="--sora text-[16px] md:text-[18px] text-white lg:text-[20px] flex justify-between items-center">{item.pregunta}<svg className={`${open === item.pregunta ? 'rotate-45' : ''} min-w-[20px] size-[20px] transition-all duration-300`} fill="#FFF" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></h3>
								<div className={`normal-case overflow-hidden duration-500 transition-all ${open === item.pregunta  ? 'max-h-[2000px]' : 'max-h-0'}`}>
									<p className="text-white/80 text-[18px] pt-[10px]">{item.respuesta}</p>
								</div>
							</div>
						))
					}
				</div>
			</div>
		</section>
	)
}