import { Card } from "@/components/ui/card";
import { Database, Brain, Route, Workflow, BarChart3, Layers } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Data-Driven Foundation",
    description: "Unified data backbone aggregating performance, project, and market signals to power predictive and personalized learning with scalable integrity.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Brain,
    title: "Predictive Intelligence Core",
    description: "Advanced ML engines continuously anticipate future capability needs—transforming training from reactive response to proactive strategic talent development.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Route,
    title: "Adaptive Learning Pathways",
    description: "AI-driven algorithms dynamically map individual learning journeys, ensuring targeted micro-learning aligned with emerging business priorities.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Workflow,
    title: "Seamless Workflow Integration",
    description: "Real-time learning nudges delivered into productivity platforms like MS Teams, embedding learning within daily operations for sustained ROI.",
    color: "text-primary-light",
    bgColor: "bg-primary/10",
  },
  {
    icon: BarChart3,
    title: "Continuous Analytics & Feedback",
    description: "Robust data pipelines surface actionable insights for managers, enabling proactive oversight, skill gap closure, and ongoing talent optimization.",
    color: "text-secondary-light",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Layers,
    title: "Scalable, Modular Ecosystem",
    description: "Modular architecture ensures rapid iteration, cost-efficient scaling, and seamless expansion as enterprise needs evolve.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Architectural Excellence
          </h2>
          <p className="text-xl text-muted-foreground">
            Six foundational pillars that transform your organization from static training 
            to a living, predictive learning ecosystem.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
