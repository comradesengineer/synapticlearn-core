import PortalHeader from "@/components/PortalHeader";
import InterestAreas from "@/components/InterestAreas";
import TeamLearning from "@/components/TeamLearning";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      <main>
        <InterestAreas />
        <TeamLearning />
      </main>
    </div>
  );
};

export default Index;
