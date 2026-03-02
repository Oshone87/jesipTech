import { Helmet } from 'react-helmet-async';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutPreviewSection } from '@/components/sections/AboutPreviewSection';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { ProjectsPreviewSection } from '@/components/sections/ProjectsPreviewSection';
import { CtaSection } from '@/components/sections/CtaSection';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>JESIP Technology - Engineering the Future</title>
                <meta name="description" content="Technical excellence in professional engineering services for modern infrastructure, energy solutions, and industrial innovation." />
            </Helmet>

            <main className="w-full">
                <HeroSection />
                <AboutPreviewSection />
                <CapabilitiesSection />
                <ProjectsPreviewSection />
                <CtaSection />
            </main>
        </>
    );
}
