import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, ExternalLink, Calendar, User } from 'lucide-react';

// Mock data (should match the carousel data or be fetched)
const newsData = [
    {
        id: 1,
        title: "Avance en IA Generativa",
        date: "28 Nov 2025",
        author: "Alejandro M.",
        content: `
      <p class="mb-4">Los nuevos modelos de lenguaje están redefiniendo lo que es posible en el mundo de la tecnología. Con capacidades de razonamiento mejoradas y una comprensión del contexto sin precedentes, estas herramientas están listas para transformar industrias enteras.</p>
      <p class="mb-4">Expertos de todo el mundo coinciden en que estamos ante un punto de inflexión. La integración de estas tecnologías en aplicaciones cotidianas permitirá una personalización y eficiencia nunca antes vistas.</p>
      <p>Sin embargo, también surgen preguntas éticas importantes sobre el uso de estos modelos. La comunidad científica aboga por un desarrollo responsable y transparente.</p>
    `,
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
        category: "Tecnología",
        sources: [
            { name: "TechCrunch", url: "#" },
            { name: "Wired", url: "#" }
        ]
    },
    {
        id: 2,
        title: "Exploración Espacial 2025",
        date: "27 Nov 2025",
        author: "Sarah J.",
        content: `
      <p class="mb-4">La misión a Marte ha entrado en una fase crítica. Los nuevos rovers han enviado imágenes espectaculares de la superficie marciana, revelando detalles geológicos que sugieren la presencia de agua en el pasado remoto.</p>
      <p>Estos descubrimientos son fundamentales para entender la historia del planeta rojo y su potencial para albergar vida. Los científicos están analizando los datos con entusiasmo.</p>
    `,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600",
        category: "Ciencia",
        sources: [
            { name: "NASA", url: "#" },
            { name: "Space.com", url: "#" }
        ]
    },
    {
        id: 3,
        title: "Energía Sostenible",
        date: "26 Nov 2025",
        author: "Dr. Green",
        content: `
      <p class="mb-4">Un equipo internacional de físicos ha logrado un avance significativo en la fusión nuclear. Por primera vez, se ha generado más energía de la que se consumió para iniciar la reacción.</p>
      <p>Este hito nos acerca un paso más a una fuente de energía limpia e ilimitada. Aunque aún queda camino por recorrer, el optimismo es palpable en la comunidad científica.</p>
    `,
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600",
        category: "Medio Ambiente",
        sources: [
            { name: "Nature", url: "#" },
            { name: "Science Daily", url: "#" }
        ]
    }
];

const NewsPage = () => {
    const { id } = useParams();
    const newsItem = newsData.find(item => item.id === parseInt(id));

    if (!newsItem) {
        return <div className="text-center py-20 text-white">Noticia no encontrada</div>;
    }

    return (
        <div className="min-h-screen bg-background text-foreground pb-20">
            {/* Hero Image */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 z-20 container mx-auto px-6 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1 mb-6 text-sm font-bold tracking-wider text-white uppercase bg-red-600 rounded-full">
                            {newsItem.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {newsItem.title}
                        </h1>

                        <div className="flex items-center gap-6 text-gray-300 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {newsItem.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {newsItem.author}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="lg:col-span-8"
                >
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: newsItem.content }}
                    />

                    <div className="mt-12 pt-8 border-t border-border">
                        <Link to="/">
                            <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                                <ArrowLeft className="w-4 h-4" />
                                Volver a noticias
                            </button>
                        </Link>
                    </div>
                </motion.div>

                {/* Sidebar */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="lg:col-span-4 space-y-8"
                >
                    {/* Translate Button */}
                    <div className="p-6 rounded-2xl bg-card border border-border shadow-lg">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-primary" />
                            Traducción
                        </h3>
                        <p className="text-muted-foreground mb-6 text-sm">
                            Lee esta noticia en inglés con un solo clic.
                        </p>
                        <button className="w-full py-3 px-4 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Translate to English
                        </button>
                    </div>

                    {/* Sources */}
                    <div className="p-6 rounded-2xl bg-card border border-border shadow-lg">
                        <h3 className="text-xl font-bold mb-4">Fuentes</h3>
                        <ul className="space-y-3">
                            {newsItem.sources.map((source, index) => (
                                <li key={index}>
                                    <a
                                        href={source.url}
                                        className="flex items-center justify-between p-3 rounded-lg bg-background hover:bg-accent transition-colors group"
                                    >
                                        <span className="font-medium">{source.name}</span>
                                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NewsPage;
