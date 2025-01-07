import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div className="animate-fadeIn">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your Business with Our SaaS Solution
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Streamline operations, boost productivity, and scale your business with our powerful platform.
            </p>
            <div className="mt-8 flex gap-x-4 justify-center">
              <Button className="bg-primary hover:bg-accent text-white px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" className="px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};