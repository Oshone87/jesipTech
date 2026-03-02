import { CheckCircle2, Factory, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutPreviewSection() {
    const features = [
        { icon: Factory, title: "Industrial Expertise", desc: "Decades of combined experience." },
        { icon: ShieldCheck, title: "Safety First", desc: "Rigorous compliance standards." },
        { icon: Cpu, title: "Modern Solutions", desc: "Advanced technical methodology." }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Delivering Excellence Through Technical Mastery
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            JESIP TECHNOLOGY LIMITED is a leader in providing high-quality engineering solutions across multiple sectors. Our multidisciplinary approach ensures that every project meets the highest standards of safety, efficiency, and innovation.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            {['Certified Engineers', 'Global Standards', 'Innovative Approach', '24/7 Support'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                                    <span className="font-semibold text-slate-800">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100">
                            <div className="text-4xl font-black text-primary border-r-2 border-slate-200 pr-6 mr-2">15+</div>
                            <div className="text-sm text-slate-600 font-medium">Years of combined <br /> leadership experience</div>
                        </div>
                    </motion.div>

                    {/* Right side Images */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[600px]"
                    >
                        <div className="absolute top-0 right-0 w-3/4 h-[80%] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/jesip img1.avif"
                                alt="Engineering Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-2/3 h-[50%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="/jesip img2.avif"
                                alt="Technical Details"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating badge */}
                        <div className="absolute top-[20%] -left-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <Factory className="text-primary h-6 w-6" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">Top Rated</div>
                                <div className="text-xs text-slate-500">Engineering Firm</div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Features row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-shadow"
                        >
                            <feature.icon className="h-10 w-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
