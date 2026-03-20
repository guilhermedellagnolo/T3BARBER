import {
  MessageSquare,
  Smartphone,
  Globe,
  ShieldCheck,
  Zap,
  Check,
  Crown,
  ArrowRight,
  Users,
  Building2,
  User,
} from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5547997455202?text=Opa!%20Quero%20saber%20mais%20sobre%20o%20T3%20Barber.";

/* ───────────────────────────── HERO ───────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="relative z-10 max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-sm text-yellow-400">
              <Crown className="h-4 w-4" />
              Tecnologia de Alta Performance para Barbearias  
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Pare de perder dinheiro com <span className="text-yellow-400">faltas</span> e buracos na <span className="text-yellow-400">agenda</span>.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-zinc-400 sm:text-xl">
              Esqueça o caos do WhatsApp. Tenha um site premium com a sua marca, notificações automáticas para os clientes e o <strong className="text-zinc-200">controle total da sua barbearia na palma da mão</strong>.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-500 px-8 py-4 text-lg font-bold text-zinc-950 shadow-lg shadow-yellow-500/25 transition hover:bg-yellow-400 hover:shadow-yellow-400/30 active:scale-[0.98]"
            >
              Quero meu site agora
              <ArrowRight className="h-5 w-5" />
            </a>

            <div className="mt-5 flex items-center gap-2 text-sm text-zinc-500">
              <ShieldCheck className="h-4 w-4 text-yellow-500" />
              Configuração VIP feita por nós. Sem taxa de adesão.
            </div>
          </div>

          {/* Hero image */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-yellow-500/20 to-transparent blur-2xl" />
              <img
                src="/images/hero-site-cliente.png"
                alt="Exemplo de site de agendamento personalizado pelo T3 Barber"
                className="relative w-full max-w-lg rounded-2xl drop-shadow-2xl"
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-max rounded-full border border-yellow-500/30 bg-zinc-900/90 px-5 py-2 text-sm font-medium text-yellow-400 shadow-lg backdrop-blur">
                Exemplo real — o seu site terá a sua marca
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FEATURES ZIG-ZAG ─────────────────────── */
interface FeatureBlockProps {
  badge: string;
  badgeIcon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  bullets: string[];
}

function FeatureBlock({
  badge,
  badgeIcon,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse,
  bullets,
}: FeatureBlockProps) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        reverse ? "lg:[direction:rtl]" : ""
      }`}
    >
      <div className={reverse ? "lg:[direction:ltr]" : ""}>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-sm text-yellow-400">
          {badgeIcon}
          {badge}
        </div>
        <h3 className="text-2xl font-bold leading-tight sm:text-3xl">{title}</h3>
        <p className="mt-4 text-lg leading-relaxed text-zinc-400">{description}</p>
        <ul className="mt-5 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-zinc-300">
              <Check className="mt-1 h-4 w-4 shrink-0 text-yellow-500" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      <div className={`flex justify-center ${reverse ? "lg:[direction:ltr]" : ""}`}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-w-md rounded-2xl drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

function Features() {
  return (
    <section className="relative bg-zinc-950/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-500">
            A MINA DE OURO
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            O combo que tira você do celular e devolve para a cadeira
          </h2>
        </div>

        <div className="mt-20 space-y-24">
          <FeatureBlock
            badge="O Radar Operacional"
            badgeIcon={<Smartphone className="h-4 w-4" />}
            title="Um App Exclusivo para o Barbeiro"
            description="Controle o dia inteiro sem sair da cadeira. Bloqueie horários com um toque, insira encaixes na hora e veja o quanto você já faturou no dia."
            imageSrc="/images/app-barbeiro.png"
            imageAlt="App do Barbeiro T3 Barber"
            bullets={[
              "Bloqueie horários com 1 clique",
              "Agende encaixes facilmente",
              "Mude o status do cliente (Concluído/Faltou)",
              "Faturamento diário em tempo real",
            ]}
          />

          <FeatureBlock
            badge="Automação Total"
            badgeIcon={<MessageSquare className="h-4 w-4" />}
            title="Confirmações Automáticas via WhatsApp"
            description="O cliente agenda sozinho pelo site e o nosso sistema dispara a confirmação  no WhatsApp do cliente e do barbeiro"
            imageSrc="/images/whatsapp-print.png"
            imageAlt="Confirmação automática via WhatsApp"
            reverse
            bullets={[
              "Mensagem de sucesso logo após o agendamento",
              "Regra clara de cancelamento com antecedência",
              "Evite prejuízos blindando sua agenda",
              "Zero trabalho manual de mandar mensagens",
            ]}
          />

          <FeatureBlock
            badge="Site Premium"
            badgeIcon={<Globe className="h-4 w-4" />}
            title="A Sua Marca, O Seu Site"
            description="Aplicativos de marketplace mostram outras barbearias para o seu cliente. Aqui não. Nós entregamos um site com o seu estilo, sua logo e os seus serviços."
            imageSrc="/images/multi-tenant-sites.png"
            imageAlt="Exemplos de sites personalizados para cada barbearia"
            bullets={[
              "subdomínio próprio (ex: barbeariadom.t3barber.com.br)",
              "Galeria de fotos com os seus melhores cortes",
              "Seus clientes não veem seus concorrentes",
              "Identidade visual adaptada para o seu negócio",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PRICING ───────────────────────── */
const originalPlans = [
  { name: "Solo", originalPrice: 69, barbeiros: "1 barbeiro" },
  { name: "Equipe", originalPrice: 119, barbeiros: "Até 3 barbeiros" },
  { name: "Barbearia Pro", originalPrice: 199, barbeiros: "Barbeiros ilimitados" },
];

function Pricing() {
  return (
    <section className="relative py-24">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-yellow-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 px-5 py-2 text-sm font-bold text-yellow-400 animate-pulse">
            <Zap className="h-4 w-4" />
            Oferta de Lançamento — Vagas Limitadas
          </div>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Tudo que você viu acima. Por um preço único.
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Site personalizado, App do Barbeiro, WhatsApp automático,
            onboarding feito por nós e suporte direto.{" "}
            <strong className="text-zinc-200">
              Barbeiros ilimitados. Sem surpresas.
            </strong>
          </p>
        </div>

        {/* Promo Card — único plano */}
        <div className="mx-auto mt-14 max-w-lg">
          <div className="relative flex flex-col items-center rounded-3xl border-2 border-yellow-500/40 bg-zinc-900/90 p-10 text-center shadow-2xl shadow-yellow-500/10 backdrop-blur">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-500 px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-zinc-950">
              Oferta de Lançamento
            </div>

            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/20 text-yellow-400">
              <Crown className="h-7 w-7" />
            </div>

            <h3 className="text-2xl font-bold">Plano Completo</h3>
            <p className="mt-1 text-sm text-yellow-400/80">Barbeiros ilimitados</p>

            {/* Preços antigos riscados */}
            <div className="mt-6 flex items-center gap-3 text-zinc-500">
              {originalPlans.map((p) => (
                <span key={p.name} className="text-sm line-through">
                  R$ {p.originalPrice}
                </span>
              ))}
            </div>

            {/* Preço promo */}
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-6xl font-extrabold tracking-tight text-yellow-400">
                R$&nbsp;50
              </span>
              <span className="text-lg text-zinc-500">/mês</span>
            </div>

            <p className="mt-3 text-sm text-zinc-400">
              Tudo incluso. Sem taxa de adesão. Sem fidelidade.
            </p>

            {/* Features rápidas */}
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-left text-sm text-zinc-300">
              {[
                "Site com a sua marca",
                "App do Barbeiro",
                "WhatsApp automático",
                "Barbeiros ilimitados",
                "Fidelidade de clientes",
                "Agendamento fixo",
                "Suporte direto",
                "Configuração por nós",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 shrink-0 text-yellow-500" />
                  {f}
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-500 px-6 py-4 text-lg font-bold text-zinc-950 shadow-lg shadow-yellow-500/25 transition hover:bg-yellow-400 hover:shadow-yellow-400/30 active:scale-[0.98]"
            >
              <Zap className="h-5 w-5" />
              Quero garantir essa oferta
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-zinc-600">
          Sem fidelidade. Cancele quando quiser. Preço promocional por tempo limitado.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────── FOOTER ───────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center text-sm text-zinc-500 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-semibold text-zinc-300">
          <span className="text-yellow-500">T3</span> Barber
        </div>

        <p>&copy; 2026 T3 Barber. Todos os direitos reservados.</p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-zinc-400 transition hover:text-yellow-400"
        >
          <MessageSquare className="h-4 w-4" />
          Falar com o Suporte
        </a>
      </div>
    </footer>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-yellow-500/30">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}