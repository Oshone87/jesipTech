import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

export default function Projects() {
    return (
        <>
            <Helmet>
                <title>Projects - JESIP Technology</title>
                <meta name="description" content="Explore our featured projects and industrial success stories." />
            </Helmet>

            {/* Hero */}
            <section className="bg-slate-900 py-24 text-center border-b border-slate-800">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Excellence In Engineering</div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Past Works</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Explore our legacy of innovative engineering solutions across infrastructure, industrial, and sustainable energy sectors.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {projects.map((project: any) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6 md:p-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                                    {project.description && (
                                        <p className="text-slate-600 text-sm md:text-base">
                                            {project.description}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {projects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-slate-500 text-lg">No projects found.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
