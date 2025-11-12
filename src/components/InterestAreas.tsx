import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Brain, Code, BarChart3, Cloud, Users, ArrowRight } from "lucide-react";

const interestAreas = [
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Data visualization, analytics, and business intelligence",
    color: "text-primary",
    bgColor: "bg-primary/10",
    count: 12,
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Python, ML models, and predictive analytics",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    count: 8,
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Programming languages and development frameworks",
    color: "text-accent",
    bgColor: "bg-accent/10",
    count: 15,
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "AWS, Azure, cloud architecture and deployment",
    color: "text-primary-light",
    bgColor: "bg-primary/10",
    count: 10,
  },
  {
    icon: Users,
    title: "Leadership & Management",
    description: "Project management, agile, and team leadership",
    color: "text-secondary-light",
    bgColor: "bg-secondary/10",
    count: 9,
  },
  {
    icon: BarChart3,
    title: "Business Skills",
    description: "Communication, customer service, and conflict resolution",
    color: "text-accent",
    bgColor: "bg-accent/10",
    count: 11,
  },
];

const InterestAreas = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Select Your Learning Path</h2>
          <p className="text-muted-foreground">Choose an area to explore personalized learning modules</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interestAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border cursor-pointer group"
              >
                <div className={`w-12 h-12 rounded-lg ${area.bgColor} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${area.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{area.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{area.count} modules available</span>
                  <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InterestAreas;
