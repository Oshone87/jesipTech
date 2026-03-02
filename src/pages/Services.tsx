import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function Services() {
    return (
        <>
            <Helmet>
                <title>Services - JESIP Technology</title>
                <meta name="description" content="Our professional engineering capabilities and technical services." />
            </Helmet>

            {/* Hero */}
            <section className="bg-slate-900 py-24 text-center border-b border-slate-800">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Our Expertise</div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Professional Capabilities</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Delivering comprehensive engineering solutions from initial design through to final implementation for global industrial leaders.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Detailed List */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                    <div className="space-y-24">
                        {services.map((service: any, index: number) => (
                            <motion.div
                                key={service.id}
                                id={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Image/Icon side */}
                                <div className="w-full md:w-5/12">
                                    <div className="aspect-square rounded-3xl bg-slate-50 border border-slate-100 p-12 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <service.icon className="h-24 w-24 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
                                        <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                                    </div>
                                </div>

                                {/* Content side */}
                                <div className="w-full md:w-7/12 flex flex-col justify-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl mb-6">
                                        {index + 1}
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                        {service.features.map((feature: any, i: number) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-slate-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <Button asChild size="lg">
                                            <Link to="/contact">Request Service</Link>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mini CTA */}
            <section className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a custom engineering solution?</h2>
                    <p className="text-lg text-slate-600 mb-8">Contact our technical team to discuss your specific requirements.</p>
                    <Button size="lg" asChild>
                        <Link to="/contact">Contact Our Engineers</Link>
                    </Button>
                </div>
            </section>
        </>
    );
}
