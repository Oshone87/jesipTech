import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

export function CapabilitiesSection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Expertise</div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Professional Capabilities</h2>
                    <p className="text-lg text-slate-600">
                        Comprehensive engineering solutions from initial design through to final implementation for global industrial leaders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service: any, index: number) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group relative overflow-hidden"
                        >
                            {/* Subtle background decoration */}
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                                <service.icon size={100} />
                            </div>

                            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 relative z-10">
                                <service.icon className="h-7 w-7 text-primary" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4 relative z-10">{service.title}</h3>
                            <p className="text-slate-600 mb-8 relative z-10 h-20 line-clamp-3 hover:line-clamp-none transition-all">
                                {service.summary}
                            </p>

                            <Link
                                to={`/services#${service.id}`}
                                className="inline-flex items-center text-primary font-medium group-hover:text-blue-700 relative z-10"
                            >
                                Learn More
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
