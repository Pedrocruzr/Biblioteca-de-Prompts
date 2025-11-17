import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rh-dark to-rh-text-light">
      <div className="text-center px-4">
        <h1 className="mb-6 text-5xl md:text-6xl font-heading font-extrabold text-white">
          RH <span className="text-gradient">Turbo 360</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
          Automatize o ciclo completo de RH com 12 agentes de IA
        </p>
        <Button
          size="lg"
          onClick={() => navigate("/vendas-rh-turbo360")}
          className="bg-gradient-to-r from-rh-cta-pink to-rh-cta-orange text-white font-heading font-bold text-lg px-10 py-6 rounded-2xl hover:scale-105 transition-all shadow-glow"
        >
          Ver Página de Vendas
        </Button>
      </div>
    </div>
  );
};

export default Index;
