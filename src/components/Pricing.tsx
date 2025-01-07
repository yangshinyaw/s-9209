import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "$29",
    features: ["Basic Analytics", "5 Team Members", "24/7 Support"],
  },
  {
    name: "Professional",
    price: "$99",
    features: ["Advanced Analytics", "Unlimited Team Members", "Priority Support", "Custom Integrations"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Custom Solutions", "Dedicated Support", "SLA", "Advanced Security"],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 200}ms` }}>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">{plan.name}</CardTitle>
                <p className="text-4xl font-bold text-center text-primary mt-4">{plan.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="text-primary h-5 w-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-8">Get Started</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};