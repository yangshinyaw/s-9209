import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already using our platform to grow their operations.
        </p>
        <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  );
};