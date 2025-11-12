import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { employees } from "@/data/employeeData";
import { Brain, Target, Clock } from "lucide-react";

const TeamLearning = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Your Team's Learning Progress</h2>
          <p className="text-muted-foreground">Real-time adaptive learning powered by predictive analytics</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {employees.map((employee) => (
            <Card 
              key={employee.id}
              className="p-6 hover:shadow-lg transition-all duration-300 bg-gradient-card border-border animate-fade-in"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold mb-1">{employee.name}</h3>
                  <p className="text-xs text-muted-foreground">Employee ID: {employee.id}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{employee.performanceScore}</div>
                  <div className="text-xs text-muted-foreground">Score</div>
                </div>
              </div>

              <div className="mb-4">
                <Progress value={employee.performanceScore} className="h-2" />
              </div>

              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs font-medium">Current Skills</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {employee.currentSkills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
                <div className="flex items-center gap-2 mb-1">
                  <Brain className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs font-semibold text-accent">Predicted Gap</span>
                </div>
                <p className="text-sm font-medium">{employee.predictedSkillGaps}</p>
              </div>

              <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-3.5 h-3.5 text-secondary" />
                  <span className="text-xs font-medium text-secondary">Current Path: {employee.learningPath}</span>
                </div>
                <p className="text-xs text-muted-foreground">{employee.microlearningNudges}</p>
              </div>

              <div className="flex items-center justify-between pt-3 mt-3 border-t border-border">
                <div>
                  <div className="text-xs text-muted-foreground">Next Module</div>
                  <div className="text-sm font-medium">{employee.nextTrainingModule}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-primary">⭐ {employee.feedbackScore}/5</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamLearning;
