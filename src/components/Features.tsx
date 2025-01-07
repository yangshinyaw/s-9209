import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Powerful Analytics",
    description: "Gain deep insights into your business performance with real-time analytics.",
  },
  {
    title: "Team Collaboration",
    description: "Work seamlessly with your team members in real-time.",
  },
  {
    title: "Automated Workflows",
    description: "Save time with intelligent automation of repetitive tasks.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 200}ms` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-6 w-6" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};