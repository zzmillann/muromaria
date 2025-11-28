import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsData = [
    {
        id: 1,
        title: "Avance en IA Generativa",
        summary: "Nuevos modelos de lenguaje prometen revolucionar la creación de contenido.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
        category: "Tecnología"
    },
    {
        id: 2,
        title: "Exploración Espacial 2025",
        summary: "La misión a Marte entra en su fase crítica con nuevos descubrimientos.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600",
        category: "Ciencia"
    },
    {
        id: 3,
        title: "Energía Sostenible",
        summary: "Científicos logran un hito en la fusión nuclear comercial.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600",
        category: "Medio Ambiente"
    }
];

const NewsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % newsData.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + newsData.length) % newsData.length);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-2xl group">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Link to={`/noticia/${newsData[currentIndex].id}`} className="absolute inset-0 w-full h-full cursor-pointer">
                        <div className="relative w-full h-full">
                            {/* Image with Overlay */}
                            <div className="absolute inset-0 bg-black/40 z-10" />
                            <img
                                src={newsData[currentIndex].image}
                                alt={newsData[currentIndex].title}
                                className="w-full h-full object-cover"
                            />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block px-3 py-1 mb-2 md:mb-4 text-xs font-bold tracking-wider text-white uppercase bg-red-600 rounded-full"
                                >
                                    {newsData[currentIndex].category}
                                </motion.span>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 tracking-tight"
                                >
                                    {newsData[currentIndex].title}
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-sm md:text-lg text-gray-200 mb-4 md:mb-6 max-w-2xl line-clamp-2"
                                >
                                    {newsData[currentIndex].summary}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <button className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-sm md:text-base transition-all duration-300 group-hover:pl-8">
                                        Leer más <ExternalLink className="w-4 h-4" />
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md border border-white/10 transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 right-8 z-30 flex gap-2">
                {newsData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-red-500' : 'bg-white/50 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsCarousel;
