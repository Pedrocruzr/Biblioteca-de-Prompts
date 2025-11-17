import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Check, Shield, Users, Clock } from "lucide-react";
import { CTAButton } from "@/components/VendasRH/CTAButton";
import { SectionWrapper } from "@/components/VendasRH/SectionWrapper";
import { CountdownTimer } from "@/components/VendasRH/CountdownTimer";
import { FAQItem } from "@/components/VendasRH/FAQItem";
import { ModuleCard } from "@/components/VendasRH/ModuleCard";
import { TestimonialCard } from "@/components/VendasRH/TestimonialCard";
import heroImage from "@/assets/hero-businesswoman.png";
import pedroNetoImage from "@/assets/pedro-neto.png";
import rhTurboLogo from "@/assets/rh-turbo-360-logo.png";
import rhTurboHeaderLogo from "@/assets/rh-turbo-header-logo.png";
import rhTurboHeroLogo from "@/assets/rh-turbo-hero-logo.png";
import turboBadge from "@/assets/turbo-badge.png";
import depoimentoChinita from "@/assets/depoimento-cintia-hq.jpeg";
import depoimentoAnneBeatriz from "@/assets/depoimento-anne-hq.jpeg";
import avatarCintia from "@/assets/avatar-cintia.png";
import avatarAnne from "@/assets/avatar-anne.png";
const VendasRHTurbo360 = () => {
  useEffect(() => {
    // Track page view
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "PageView");
    }
  }, []);
  const handleCTAClick = (location: string) => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout", {
        content_name: "RH Turbo 360",
        content_category: "Curso",
        value: 197.0,
        currency: "BRL"
      });
    }
    // Analytics tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "purchase_click", {
        event_category: "CTA",
        event_label: location
      });
    }
  };
  return <>
      <Helmet>
        <title>
          Método RH Turbo 360 — 12 Agentes de IA para Automatizar o RH
        </title>
        <meta name="description" content="Automatize o ciclo completo de RH com 12 agentes de IA: diagnóstico, recrutamento cirúrgico, desenvolvimento acelerado e transições humanizadas. Economize tempo e aumente a precisão." />
        <meta property="og:type" content="product" />
        <meta property="og:title" content="RH Turbo 360 — Automatize RH com IA" />
        <meta property="og:description" content="12 agentes de IA para transformar seu RH: do diagnóstico ao desligamento humanizado." />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="/vendas-rh-turbo360" />
      </Helmet>

      {/* Header Sticky */}
      <header className="sticky top-0 z-50 bg-rh-dark/95 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <img src={turboBadge} alt="Turbo" className="h-12 md:h-16" />
          <CTAButton onClick={() => handleCTAClick("header")} className="hidden md:inline-flex">
            Quero Automatizar Meu RH
          </CTAButton>
        </div>
      </header>

      {/* Seção 1 — Headline + Promessa (ESCURO) */}
      <SectionWrapper variant="dark" id="hero">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="mb-8">
            <img src={rhTurboHeroLogo} alt="RH Turbo 360 Logo" className="w-full max-w-[266px] md:max-w-[310px] h-auto" />
          </div>
          
          {/* Headline */}
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">Automatize o RH da sua empresa em UM clique com IA e transforme seu rotina com mais tempo, precisão e respeito aos talentos</h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-rh-muted-dark mb-8 leading-relaxed">12 agentes de IA orquestrados para eficiência, precisão e humanização — do diagnóstico ao desligamento.</p>
          
          {/* 1. Benefit List */}
          <ul className="space-y-4 mb-8 text-left max-w-2xl w-full">
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-rh-orange flex-shrink-0 mt-1" />
                <span className="text-rh-muted-dark">
                  Como eliminar tarefas repetitivas com IA, mesmo que você não entenda nada de tecnologia.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-rh-orange flex-shrink-0 mt-1" />
                <span className="text-rh-muted-dark">
                  Os erros invisíveis que estão drenando tempo e dinheiro do seu RH.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Check className="w-5 h-5 text-rh-orange flex-shrink-0 mt-1" />
                <span className="text-rh-muted-dark">
                  O passo a passo para ter um RH mais estratégico, reconhecido e com resultados comprovados.
                </span>
              </li>
            </ul>

          {/* 2. "ASSISTIR AGORA" text */}
          <h3 className="font-heading font-bold text-2xl mb-6 text-center text-rh-text-dark">
            ASSISTIR AGORA
          </h3>

          {/* 3. Woman Image */}
          <img src={heroImage} alt="Profissional de RH estratégico" className="w-full max-w-lg rounded-2xl mb-8" />

          {/* 4. Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-rh-muted-dark mb-8">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-rh-orange" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-rh-orange" />
              <span>Suporte humano</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-rh-orange" />
              <span>Acesso imediato</span>
            </div>
          </div>

          {/* 5. CTA Button */}
          <div className="flex justify-center">
            <CTAButton size="lg" onClick={() => handleCTAClick("hero-primary")}>
              QUERO O RH TURBO 360
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>

      {/* Seção 2 — Identificação do Problema (CLARO) */}
      <SectionWrapper variant="light" id="problema">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8">Se você é profissional de RH ou gestor e está <span className="text-gradient">passando por isso...</span>
          </h2>
          <div className="space-y-6 text-left">
            {[{
            title: "Grande Cansaço com tarefas operacionais"
          }, {
            title: "Falta de reconhecimento e papel estratégico"
          }, {
            title: "Retrabalho e erros em planilhas e documentos"
          }, {
            title: "Prazos fora de controle e comunicação truncada"
          }].map((item, idx) => <div key={idx} className="flex gap-4 items-start bg-white rounded-2xl p-6 shadow-soft border border-rh-text-light/10">
                <div className="w-3 h-3 rounded-full bg-rh-magenta mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-rh-text-light">
                    {item.title}
                  </h3>
                  
                </div>
              </div>)}
          </div>
        </div>
      </SectionWrapper>

      {/* Seção 3 — Apresentação da Solução (ESCURO) */}
      <SectionWrapper variant="dark" id="solucao">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Apresento o{" "}
            <span className="text-gradient">Método RH Turbo 360</span>
          </h2>
          <p className="text-xl md:text-2xl text-rh-muted-dark mb-10 leading-relaxed">O único ecossistema com mais de 16 agentes de IA, orquestrando cada etapa e ajudando a impulsionar:</p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["RHs sobrecarregados que querem automatizar sem depender do TI.", "Pequenas empresas que precisam de eficiência e não têm verba para consultorias caras.", "Profissionais de RH que querem se destacar com estratégia e tecnologia.", "Gestores que querem transformar o RH de um centro de custo para um motor de crescimento."].map((chip, idx) => <span key={idx} className="px-6 py-3 bg-white/10 border border-rh-orange/50 rounded-full text-rh-text-dark font-semibold backdrop-blur-sm">
                {chip}
              </span>)}
          </div>

        </div>
      </SectionWrapper>

      {/* Seção 4 — Como Funciona (4 Fases) (CLARO) */}
      <SectionWrapper variant="light" id="como-funciona">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl mb-4 md:text-4xl">
            Como Funciona o{" "}
            <span className="text-rh-magenta">Método RH Turbo 360</span>
          </h2>
          <p className="text-xl text-rh-text-light/70 max-w-2xl mx-auto">O método é dividido em 4 fases, com IA nos pontos críticos do RH, e você tem acesso a tutoriais práticos para usar mais de 16 agentes no dia a dia.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[{
          icon: "🔍",
          title: "Diagnóstico Inteligente",
          desc: <div className="space-y-3">
              <p className="text-base font-semibold text-rh-text-light">🎯 Entenda a empresa antes de automatizar</p>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start">
                  <span className="text-rh-magenta mt-1">
                </span>
                  <span className="text-base text-rh-text-light/70">Coleta, organiza e traduz a cultura da empresa</span>
                </li>
              </ul>
            </div>
        }, {
          icon: "🎯",
          title: "Recrutamento Cirúrgico",
          desc: <div className="space-y-3">
              <p className="text-base font-semibold text-rh-text-light">🎯 Contrate a pessoa certa com apoio total da IA</p>
              <p className="text-base text-rh-text-light/70">Cria vagas, entrevistas e testes automáticos.</p>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start">
                  <span className="text-rh-magenta mt-1">
                </span>
                  
                </li>
              </ul>
            </div>
        }, {
          icon: "🚀",
          title: "Desenvolvimento Acelerado",
          desc: <div className="space-y-3">
              <p className="text-base font-semibold text-rh-text-light">🎯 Desenvolva talentos de forma objetiva e contínua</p>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start">
                  <span className="text-rh-magenta mt-1">
                </span>
                  <span className="text-base text-rh-text-light/70">Planeja PDIs e aplica dinâmicas com IA</span>
                </li>
              </ul>
            </div>
        }, {
          icon: "🤝",
          title: "Transições Humanizadas",
          desc: <div className="space-y-3">
              <p className="font-semibold text-rh-text-light text-base">🎯 Torne o primeiro e o último dia marcantes e respeitosos</p>
              <ul className="space-y-2">
                <li className="flex gap-2 items-start">
                  <span className="text-rh-magenta mt-1">
                </span>
                  <span className="text-base text-rh-text-light/70">Roteiros personalizados de onboarding e desligamento</span>
                </li>
              </ul>
            </div>
        }].map((fase, idx) => <div key={idx} className="bg-white rounded-2xl p-8 shadow-soft border border-rh-text-light/10 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{fase.icon}</div>
              <h3 className="font-heading font-bold text-2xl mb-3 text-rh-text-light">
                {fase.title}
              </h3>
              <div className="text-rh-text-light/70 leading-relaxed">
                {typeof fase.desc === 'string' ? <p>{fase.desc}</p> : fase.desc}
              </div>
            </div>)}
        </div>
      </SectionWrapper>

      {/* Seção 5 — Prova Social (ESCURO) */}
      <SectionWrapper variant="dark" id="depoimentos">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-rh-muted-dark">
            Resultados reais de profissionais que transformaram seus RHs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <TestimonialCard quote={<div className="relative flex items-center justify-center py-4"><div className="absolute inset-0 bg-gradient-to-br from-rh-cta-pink/20 to-rh-cta-orange/20 rounded-2xl" /><img src={depoimentoChinita} alt="Depoimento Cintia Oliveira" className="relative w-[75%] h-auto rounded-lg shadow-lg object-contain" /></div>} name="Cíntia Oliveira" role="Gerente de RH" company="TechCorp Brasil" result="Redução de 40% no tempo de contratação" avatar={avatarCintia} />
          <TestimonialCard quote={<div className="relative flex items-center justify-center py-4"><div className="absolute inset-0 bg-gradient-to-br from-rh-cta-pink/20 to-rh-cta-orange/20 rounded-2xl" /><img src={depoimentoAnneBeatriz} alt="Depoimento Anne Beatriz" className="relative w-[75%] h-auto rounded-lg shadow-lg object-contain" /></div>} name="Anne Beatriz" role="Diretor de Pessoas" company="Inovação SA" result="50% menos tempo no onboarding" avatar={avatarAnne} />
        </div>
      </SectionWrapper>

      {/* Seção 6 — O que Você Recebe (CLARO) */}
      <SectionWrapper variant="light" id="modulos">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            O Que Você Recebe no{" "}
            <span className="text-rh-magenta">RH Turbo 360</span>
          </h2>
          <p className="text-xl text-rh-text-light/70 max-w-2xl mx-auto">O método é dividido em 5 fases, com 12 agentes de IA aplicados em pontos críticos da jornada de RH:</p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto mb-12">
          <ModuleCard icon="📚" title="Módulo 1: Diagnóstico Inteligente" agents={[{
          name: "Diagnóstico Six Box",
          description: "Mapeia 6 áreas críticas da empresa"
        }, {
          name: "Coletor de Dados Six Box",
          description: "Capta informações sólidas para decisões precisas"
        }, {
          name: "Tradutor de Cultura",
          description: "Cria missão, visão e valores a partir da identidade real"
        }]} />

          <ModuleCard icon="🎯" title="Módulo 2: Recrutamento Cirúrgico" agents={[{
          name: "Agente de Descrição de Vagas por Competências",
          description: "Descrições estratégicas e atrativas"
        }, {
          name: "Analista de Entrevista Automatizado",
          description: "Cria Roteiros personalizados baseados na vaga, padroniza entrevistas baseada no método (STAR), aumenta qualidade e velocidade de seleção."
        }, {
          name: "Teste de Perfil Comportamental",
          description: "Disc, Eneagrama e Perfil comportamental"
        }, {
          name: "Especialista em Taxa de Aderência com a Vaga",
          description: "Analisa compatibilidade técnica e cultural"
        }]} />

          <ModuleCard icon="🔥" title="Módulo 3: Desenvolvimento Acelerado" agents={[{
          name: "Analista de PDI",
          description: "Criação de Planos de Desenvolvimento Individual"
        }, {
          name: "Analista em Mapeamento de Competências",
          description: "Define o que cada cargo precisa para performar melhor com o mapeamento por Competências técnicas, comportamentais e organizacionais"
        }, {
          name: "Mentor de Dinâmicas",
          description: "Escolhe e orienta atividades de avaliação eficazes baseada em 11 níveis de competências"
        }]} />

          <ModuleCard icon="🎁" title="Módulo 4: Transições Humanizadas" agents={[{
          name: "Onboarding Estratégico",
          description: "Roteiro de integração com visão de longo prazo"
        }, {
          name: "Desligamento Humanizado",
          description: "Conversas e cartas personalizadas com empatia"
        }]} />
        </div>

        {/* Bônus */}
        <div className="bg-gradient-to-br from-rh-magenta/10 to-rh-orange/10 rounded-2xl p-8 md:p-12 border-2 border-rh-magenta/30 max-w-4xl mx-auto">
          <h3 className="font-heading font-bold text-3xl mb-8 text-center text-rh-text-light">
            🎁 Bônus Exclusivos
          </h3>
          <div className="space-y-4 mb-8">
            {[{
            title: 'Playbook "Recrutamento e Seleção com IA"',
            value: "R$ 67"
          }, {
            title: "Analista de Pesquisa de Clima",
            value: "R$ 67",
            desc: "Interpreta respostas de pesquisas internas e gera relatórios automáticos."
          }, {
            title: "Mentor de Dinâmicas",
            value: "R$ 67",
            desc: "Seleciona e orienta atividades de avaliação eficazes"
          }, {
            title: "Teste de Perfil Comportamental (DISC)",
            value: "R$ 67",
            desc: "Teste Disc completo com relatório de matriz"
          }].map((bonus, idx) => <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-xl">
                <div className="flex-1">
                  <p className="font-semibold text-rh-text-light">
                    {bonus.title}
                  </p>
                  {bonus.desc && <p className="text-sm text-rh-text-light/60">
                      {bonus.desc}
                    </p>}
                </div>
                <span className="text-rh-magenta font-bold whitespace-nowrap ml-4 line-through">
                  {bonus.value}
                </span>
              </div>)}
          </div>

          <div className="border-t-2 border-rh-magenta/30 pt-6 text-center">
            <p className="text-rh-text-light/70 mb-2">Valor Total:</p>
            <p className="text-3xl font-heading font-bold text-rh-text-light line-through mb-4">R$ 268,00</p>
            <p className="text-rh-text-light/70 mb-2">
              Seu Investimento Hoje:
            </p>
            <p className="font-heading font-extrabold text-gradient mb-4 text-7xl">R$ 197,00</p>
            <p className="text-xl font-semibold text-rh-magenta">Economia de R$ 71,00</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Seção 7 — Garantia (ESCURO) */}
      <SectionWrapper variant="dark" id="garantia">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-rh-cta-pink to-rh-cta-orange rounded-full flex items-center justify-center">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Garantia Incondicional de{" "}
            <span className="text-gradient">7 Dias</span>
          </h2>
          <p className="text-xl text-rh-muted-dark leading-relaxed mb-8">
            Se você não perceber clareza e ganho de produtividade nos primeiros
            7 dias, devolvemos 100% do seu investimento. Cancelamento em 1
            clique, sem burocracia.
          </p>
          <div className="bg-white/5 border border-rh-orange/30 rounded-2xl p-6 backdrop-blur-sm">
            <p className="text-rh-muted-dark">
              ✓ Teste por 7 dias sem compromisso
              <br />
              ✓ Reembolso integral garantido
              <br />✓ Sem perguntas, sem complicações
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Seção 8 — Urgência (CLARO) */}
      <SectionWrapper variant="light" id="urgencia">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-rh-magenta/10 to-rh-orange/10 rounded-2xl p-8 md:p-12 border-2 border-rh-magenta/50">
            <p className="text-2xl md:text-3xl font-heading font-bold text-rh-text-light mb-6">
              ⏰ Oferta válida por tempo limitado
            </p>
            <div className="mb-8">
              <CountdownTimer />
            </div>
            <p className="text-lg text-rh-text-light/70 mb-8">
              Após esse prazo, o preço retorna ao valor integral e os bônus
              serão removidos.
            </p>
            <CTAButton size="lg" onClick={() => handleCTAClick("urgencia")} className="w-full sm:w-auto">
              GARANTIR MINHA VAGA AGORA
            </CTAButton>
          </div>
        </div>
      </SectionWrapper>

      {/* Seção 9 — O Autor (ESCURO) */}
      <SectionWrapper variant="dark" id="autor">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-12 text-center">
            Conheça o <span className="text-gradient">Criador do Método</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="font-heading font-bold text-3xl mb-4 text-rh-text-dark">
                Pedro Neto
              </h3>
              <div className="space-y-4 text-rh-muted-dark leading-relaxed">
                <p>
                  Pedro Neto é um especialista em Recursos Humanos com
                  especializações em Gestão de Pessoas e Desenvolvimento
                  Corporativo, criador do inovador{" "}
                  <strong className="text-rh-orange">Método RH TURBO</strong>,
                  uma metodologia transformadora voltada à profissionalização de
                  pequenas empresas por meio da gestão por competências com o
                  uso de inteligência artificial.
                </p>
                <p>
                  Com sua abordagem exclusiva utilizando inteligência
                  artificial, já implementou projetos estratégicos de gestão em
                  RH que proporcionaram resultados expressivos e melhorias
                  significativas para as organizações parceiras.
                </p>
                <p>
                  Com mais de uma década de experiência na linha de frente do RH
                  estratégico, Pedro se destaca por sua capacidade de
                  desenvolver soluções personalizadas com IA que impulsionam o
                  crescimento e a eficiência de pequenas empresas em diversos
                  segmentos.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src={pedroNetoImage} alt="Pedro Neto - Criador do Método RH Turbo 360" className="rounded-2xl shadow-glow w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Seção 10 — FAQ (CLARO) */}
      <SectionWrapper variant="light" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-12 text-center">
            Perguntas <span className="text-rh-magenta">Frequentes</span>
          </h2>
          <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8">
            <FAQItem question="Preciso saber programar para fazer o curso?" answer="Não! O Método RH TURBO foi desenvolvido para profissionais de RH que querem usar a IA sem precisar escrever uma única linha de código. Tudo é prático e acessível." />
            <FAQItem question="Este curso é para quem já usa IA?" answer="Sim! Seja você iniciante ou já tenha algum contato com IA, o curso aborda desde os fundamentos até aplicações avançadas, sempre com foco na prática e sem programação." />
            <FAQItem question="Terei suporte para tirar dúvidas?" answer="Sim! Você terá acesso à nossa Comunidade Exclusiva de RHs Inovadores, onde poderá interagir com outros alunos e tirar suas dúvidas diretamente com a equipe." />
            <FAQItem question="O curso é atualizado?" answer="Com certeza! O universo da IA está em constante evolução, e nosso conteúdo é revisado e atualizado periodicamente para garantir que você tenha acesso às informações mais recentes e relevantes." />
          </div>
        </div>
      </SectionWrapper>

      {/* Seção 11 — CTA Final (CLARO) */}
      <SectionWrapper variant="light" id="cta-final">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Pronto para{" "}
            <span className="text-rh-magenta">
              Transformar Seu RH com IA
            </span>
            ?
          </h2>
          <p className="text-xl text-rh-text-light/70 mb-10 leading-relaxed">
            Automatize tarefas em 1 clique e libere seu tempo para o
            estratégico. Comece hoje mesmo com garantia de 7 dias.
          </p>
          <CTAButton size="lg" onClick={() => handleCTAClick("final")} className="w-full sm-w-auto mb-8">
            SIM, EU QUERO O RH TURBO 360
          </CTAButton>

          {/* Links de confiança */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-rh-text-light/60">
            <a href="#" className="hover:text-rh-magenta transition-colors">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-rh-magenta transition-colors">
              Termos de Uso
            </a>
            <span>•</span>
            <a href="#" className="hover:text-rh-magenta transition-colors">
              Suporte
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="bg-rh-dark text-rh-muted-dark py-8 px-4 text-center text-sm border-t border-white/10">
        <p>
          © 2025 RH Turbo 360. Todos os direitos reservados. | CNPJ:
          00.000.000/0000-00
        </p>
      </footer>
    </>;
};
export default VendasRHTurbo360;