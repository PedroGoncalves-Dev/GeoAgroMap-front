import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Globe,
  BarChart,
  MapPin,
  Filter,
  Leaf,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const technologies = [
    {
      name: "React 19",
      category: "Frontend",
      icon: <Code className="w-4 h-4" />,
    },
    {
      name: "TypeScript",
      category: "Language",
      icon: <Code className="w-4 h-4" />,
    },
    { name: "Vite", category: "Build Tool", icon: <Zap className="w-4 h-4" /> },
    {
      name: "TailwindCSS v4",
      category: "Styling",
      icon: <Code className="w-4 h-4" />,
    },
    {
      name: "Radix UI",
      category: "Components",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      name: "React Hook Form",
      category: "Forms",
      icon: <Code className="w-4 h-4" />,
    },
    {
      name: "Zod",
      category: "Validation",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      name: "TanStack Query",
      category: "State Management",
      icon: <Database className="w-4 h-4" />,
    },
    { name: "Leaflet", category: "Maps", icon: <MapPin className="w-4 h-4" /> },
    {
      name: "Recharts",
      category: "Charts",
      icon: <BarChart className="w-4 h-4" />,
    },
    {
      name: "Axios",
      category: "HTTP Client",
      icon: <Globe className="w-4 h-4" />,
    },
  ];

  const features = [
    {
      title: "Visualização Interativa",
      description:
        "Dashboard com gráficos e mapas para análise de dados agrícolas",
      icon: <BarChart className="w-6 h-6 text-primary-200" />,
    },
    {
      title: "Mapas Geográficos",
      description:
        "Visualização de dados em mapas interativos com informações regionais",
      icon: <MapPin className="w-6 h-6 text-primary-200" />,
    },
    {
      title: "Filtros Avançados",
      description:
        "Sistema de filtros para consultar dados por produto, região, ano e variável",
      icon: <Filter className="w-6 h-6 text-primary-200" />,
    },
    {
      title: "Dados IBGE",
      description:
        "Integração com APIs do IBGE para dados oficiais de produção agrícola",
      icon: <Database className="w-6 h-6 text-primary-200" />,
    },
  ];

  return (
    <div className="w-full h-full rounded-2xl p-6 space-y-6 overflow-y-auto">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Leaf className="w-8 h-8 text-primary-200" />
          <h1 className="text-3xl font-bold text-foreground">GeoAgroMap</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Plataforma de visualização e análise de dados geográficos agrícolas do
          Brasil
        </p>
      </div>

      <Separator className="my-6" />

      <Card className="border-primary-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary-200" />
            Sobre a Aplicação
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <p>
            O <strong className="text-foreground">GeoAgroMap</strong> é uma
            aplicação web moderna desenvolvida para visualizar e analisar dados
            de produção agrícola brasileira. A plataforma oferece uma interface
            intuitiva para explorar informações oficiais do IBGE sobre lavouras
            temporárias, permanentes e consolidadas em diferentes regiões do
            país.
          </p>
          <p>
            Através de mapas interativos e gráficos dinâmicos, os usuários podem
            analisar tendências de produção, comparar regiões e acompanhar a
            evolução do setor agrícola ao longo dos anos, facilitando a tomada
            de decisões baseadas em dados oficiais e confiáveis.
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary-100">
        <CardHeader>
          <CardTitle>Principais Funcionalidades</CardTitle>
          <CardDescription>
            Recursos disponíveis na plataforma para análise de dados agrícolas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg border border-primary-100 bg-card"
              >
                {feature.icon}
                <div>
                  <h3 className="font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary-100">
        <CardHeader>
          <CardTitle>Tecnologias Utilizadas</CardTitle>
          <CardDescription>
            Stack moderno para uma experiência de usuário superior
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="flex items-center gap-2 p-3 justify-start bg-primary-50 text-primary-400 border-primary-100"
              >
                {tech.icon}
                <div className="text-left">
                  <div className="font-medium">{tech.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {tech.category}
                  </div>
                </div>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary-100">
        <CardHeader>
          <CardTitle>Arquitetura e Abordagens</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Frontend</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>React 19</strong> com TypeScript para tipagem
                  robusta
                </li>
                <li>
                  • <strong>Componentização</strong> modular e reutilizável
                </li>
                <li>
                  • <strong>Design System</strong> baseado em Radix UI
                </li>
                <li>
                  • <strong>Responsive Design</strong> com TailwindCSS v4
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Gerenciamento de Estado
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>TanStack Query</strong> para cache e sincronização
                </li>
                <li>
                  • <strong>React Hook Form</strong> para formulários
                  performáticos
                </li>
                <li>
                  • <strong>Zod</strong> para validação de dados
                </li>
                <li>
                  • <strong>Axios</strong> para requisições HTTP
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Visualização
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>Leaflet</strong> para mapas interativos
                </li>
                <li>
                  • <strong>Recharts</strong> para gráficos dinâmicos
                </li>
                <li>
                  • <strong>GeoJSON</strong> para dados geográficos
                </li>
                <li>
                  • <strong>Tooltips</strong> informativos e contextuais
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Qualidade de Código
              </h4>
              <ul className="space-y-1 text-sm">
                <li>
                  • <strong>ESLint</strong> para linting de código
                </li>
                <li>
                  • <strong>Vite</strong> para build otimizado
                </li>
                <li>
                  • <strong>Arquitetura limpa</strong> com separação de
                  responsabilidades
                </li>
                <li>
                  • <strong>Tratamento de erros</strong> e estados de loading
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-muted-foreground pt-4">
        <p>
          Desenvolvido com React e tecnologias modernas para análise de dados
          agrícolas
        </p>
      </div>
    </div>
  );
};

export default About;
