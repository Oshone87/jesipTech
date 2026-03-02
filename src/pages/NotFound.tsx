import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center container mx-auto px-4 text-center">
            <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Button asChild size="lg">
                <Link to="/">Return Home</Link>
            </Button>
        </div>
    );
}
