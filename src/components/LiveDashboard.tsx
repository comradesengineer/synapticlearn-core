import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { employees } from "@/data/employeeData";
import { Brain, TrendingUp, Target, Clock } from "lucide-react";

const LiveDashboard = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
            <Brain className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Live Predictive Intelligence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            See iLEX in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time adaptive learning pathways powered by predictive analytics
          </p>
        </div>

        {/* Employee Learning Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {employees.map((employee) => (
            <Card 
              key={employee.id}
              className="p-6 hover:shadow-xl transition-all duration-300 bg-gradient-card border-border"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">{employee.name}</h3>
                  <p className="text-sm text-muted-foreground">ID: {employee.id}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{employee.performanceScore}</div>
                  <div className="text-xs text-muted-foreground">Performance</div>
                </div>
              </div>

              {/* Performance Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Performance Score</span>
                  <span className="text-sm text-muted-foreground">{employee.performanceScore}%</span>
                </div>
                <Progress value={employee.performanceScore} className="h-2" />
              </div>

              {/* Current Skills */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Current Skills</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {employee.currentSkills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Predicted Gaps */}
              <div className="mb-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">AI-Predicted Skill Gaps</span>
                </div>
                <p className="text-sm font-medium">{employee.predictedSkillGaps}</p>
              </div>

              {/* Learning Path */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">Adaptive Learning Path</span>
                </div>
                <p className="text-sm text-muted-foreground">{employee.learningPath}</p>
              </div>

              {/* Microlearning Nudges */}
              <div className="mb-4 p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-medium text-secondary">Daily Nudge</span>
                </div>
                <p className="text-sm">{employee.microlearningNudges}</p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div className="text-xs text-muted-foreground">Next Module</div>
                  <div className="text-sm font-medium">{employee.nextTrainingModule}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Feedback</div>
                  <div className="text-sm font-bold text-primary">⭐ {employee.feedbackScore}/5</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            This is real predictive learning in action—personalized, data-driven, and continuously adaptive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveDashboard;
