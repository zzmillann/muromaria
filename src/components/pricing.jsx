import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Star, Zap } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const PlanCard = ({ plan, index }) => {
    const { toast } = useToast();

    const handleSubscribe = () => {
        toast({
            title: `🚀 Suscripción a ${plan.name}`,
            description: "🚧 ¡La integración de pagos con Stripe aún no está implementada! 🚀",
        });
    }

    const isPopular = plan.name === 'Premium';

    return (
        <motion.div
            className={`relative p-8 rounded-3xl border ${isPopular ? 'border-red-500 bg-neutral-800/50' : 'border-neutral-700 bg-neutral-900/50'} shadow-2xl`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                        <Star className="w-4 h-4" />
                        MÁS POPULAR
                    </div>
                </div>
            )}
            <div className="text-center">
                <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400 mb-2">{plan.name}</p>
                <p className="text-slate-400 mb-6">{plan.description}</p>
                <p className="text-5xl font-extrabold text-white mb-2">{plan.price}</p>
                <p className="text-slate-500 mb-8">{plan.period}</p>
            </div>

            <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                    </li>
                ))}
            </ul>

            <Button onClick={handleSubscribe} className={`w-full font-bold text-lg py-6 ${isPopular ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:scale-105' : 'bg-neutral-700 hover:bg-neutral-600'} text-white transition-transform duration-300`}>
                Suscribirse Ahora
            </Button>
        </motion.div>
    );
};

const Pricing = () => {
  const plans = [
    {
      name: 'Diario',
      description: 'Noticias en tu navegador.',
      price: 'Gratis',
      period: 'Siempre',
      features: [
        'Acceso a noticias diarias de IA',
        'Feed de noticias general',
        'Audio-noticias de IA',
      ],
    },
    {
      name: 'Premium',
      description: 'Recibe las noticias donde estés.',
      price: '9.99€',
      period: 'por mes',
      features: [
        'Todo lo del plan Diario',
        'Noticias personalizadas por temas',
        'Resumen diario por WhatsApp cada mañana',
        'Acceso sin anuncios',
        'Soporte prioritario',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full mb-6 shadow-[0_0_20px_rgba(239,68,68,0.5)]">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Elige tu Plan
          </h2>
          <p className="text-lg text-slate-300">
            Accede gratis o lleva tu experiencia al siguiente nivel con el plan Premium y recibe las noticias directamente en tu WhatsApp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {plans.map((plan, index) => (
                <PlanCard key={plan.name} plan={plan} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;