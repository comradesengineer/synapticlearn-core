import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "156%",
    label: "ROI Increase",
    description: "Average return on learning investment",
    color: "text-primary",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Active Learners",
    description: "Engaged employees across enterprises",
    color: "text-secondary",
  },
  {
    icon: Target,
    value: "89%",
    label: "Skill Accuracy",
    description: "Predictive capability matching rate",
    color: "text-accent",
  },
  {
    icon: Zap,
    value: "4.5x",
    label: "Faster Deployment",
    description: "Time to competency reduction",
    color: "text-primary-light",
  },
];

const ImpactMetrics = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Measurable Business Impact
          </h2>
          <p className="text-xl text-muted-foreground">
            Data-driven results that demonstrate the transformative power of predictive learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card 
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-gradient-card border-border"
              >
                <Icon className={`w-10 h-10 ${metric.color} mx-auto mb-4`} />
                <div className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold mb-2">{metric.label}</div>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
