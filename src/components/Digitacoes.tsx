import { useState } from 'react';
import { ClipboardCheck, Sparkles, TrendingUp, Award, MessageCircle, Phone, Sliders, Users } from 'lucide-react';
import UndrawBusinessDealReUp4U from '../imports/UndrawBusinessDealReUp4U1';
import teamIllustration from 'figma:asset/d33cd2fd3af8523464c135a8558e472a78a40f7a.png';

interface Pacote {
  id: string;
  nome: string;
  quantidade: number;
  preco: number;
  popular?: boolean;
  destaque?: 'economia' | 'melhor-custo' | 'experimente' | 'mensagem';
}

export function Digitacoes() {
  const [saldoDigitacoes, setSaldoDigitacoes] = useState(750);

  const pacotes: Pacote[] = [
    { id: '10', nome: 'Experimente', quantidade: 100, preco: 275, destaque: 'experimente' },
    { id: '1', nome: 'Starter', quantidade: 500, preco: 1250 },
    { id: '2', nome: 'Básico', quantidade: 1000, preco: 2000 },
    { id: '3', nome: 'Profissional', quantidade: 2000, preco: 3200, popular: true },
    { id: '4', nome: 'Avançado', quantidade: 3000, preco: 4200 },
    { id: '5', nome: 'Business', quantidade: 5000, preco: 6000, destaque: 'economia' },
    { id: '6', nome: 'Enterprise', quantidade: 10000, preco: 10000 },
    { id: '7', nome: 'Corporate', quantidade: 15000, preco: 12000 },
    { id: '8', nome: 'Premium', quantidade: 25000, preco: 15000, destaque: 'melhor-custo' },
    { id: '9', nome: 'Outros pacotes', quantidade: 0, preco: 0, destaque: 'mensagem' },
  ];

  const handleComprarPacote = (pacoteId: string) => {
    const pacote = pacotes.find(p => p.id === pacoteId);
    if (pacote) {
      setSaldoDigitacoes(prev => prev + pacote.quantidade);
      alert(`Pacote ${pacote.nome} adquirido com sucesso! ${pacote.quantidade} digitações adicionadas ao seu saldo.`);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] overflow-hidden">
      {/* Header Fixo */}
      <div className="px-[20px] py-[12px]">
        <div>
          <h1 className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#2d2d2d]">
            Oportunidades
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#8c8c8f] mt-[2px]">
            Digite em lote a margem de janeiro de forma rápida e eficiente
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 overflow-hidden px-[20px] pb-[16px]">
        <div className="h-full flex flex-col gap-[20px]">
          {/* Card de Saldo Disponível */}
          <div className="bg-gradient-to-br from-[#2563EB] to-[#0F172A] rounded-[10px] px-[20px] py-[14px] shadow-md">
            <div className="flex items-center justify-between mb-[10px]">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] bg-white/20 rounded-[8px] flex items-center justify-center backdrop-blur-sm">
                  <ClipboardCheck className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-white mb-[2px]">
                    Saldo Disponível
                  </p>
                  <div className="flex items-baseline gap-[6px]">
                    <p className="font-['Inter:Bold',sans-serif] text-[22px] text-white leading-none">
                      {saldoDigitacoes.toLocaleString('pt-BR')}
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-[10px] text-white/80">
                      digitações restantes
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-[8px] bg-white/15 px-[10px] py-[6px] rounded-[6px] backdrop-blur-sm">
                <TrendingUp size={13} className="text-white" />
                <div>
                  <p className="font-['Inter:Semi_Bold',sans-serif] text-[9px] text-white/90">
                    Pacotes maiores
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] text-[8px] text-white/70">
                    economia de até 65%
                  </p>
                </div>
              </div>
            </div>
            
            {/* Frase em destaque */}
            <div className="border-t border-white/20 pt-[10px]">
              <p className="font-['Inter:Medium',sans-serif] text-[12px] text-white/95 leading-relaxed">
                Escolha o pacote que cabe no seu orçamento e garanta o processamento do aumento de salário hoje mesmo!
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-5 gap-[8px] flex-1 min-h-0">
            {pacotes.map((pacote) => (
              <div
                key={pacote.id}
                className={`relative rounded-[8px] p-[8px] shadow-sm transition-shadow flex items-center justify-center ${ 
                  pacote.destaque === 'mensagem' 
                    ? 'bg-gradient-to-br from-[#e2e8f0] to-[#cbd5e1] border border-[#cbd5e1]' 
                    : 'bg-white border border-[#e0e0e0]'
                }`}
              >
                {/* Tag "Experimente" */}
                {pacote.destaque === 'experimente' && (
                  <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-[#10b981] to-[#059669] text-white px-[8px] py-[2px] rounded-full shadow-lg">
                      <p className="font-['Inter:Semi_Bold',sans-serif] text-[8px] uppercase tracking-wide">
                        Experimente
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col items-center gap-[4px]">
                  {pacote.destaque === 'mensagem' ? (
                    // Layout especial para "Outros pacotes"
                    <div className="flex flex-col items-center justify-center gap-[5px] h-full">
                      <div className="size-[34px] bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-full flex items-center justify-center shadow-lg">
                        <Sliders className="text-white" size={16} />
                      </div>
                      <div className="flex flex-col items-center gap-[2px]">
                        <p className="font-['Inter:Bold',sans-serif] text-[16.5px] leading-tight text-[#2563EB] text-center">
                          Pacotes<br />personalizados
                        </p>
                        <p className="font-['Inter:Semi_Bold',sans-serif] text-[12.5px] text-[#0F172A] text-center">
                          Mande uma mensagem
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Layout normal para outros pacotes
                    <>
                      <div className="flex flex-col items-center gap-[1px]">
                        <p className="font-['Inter:Bold',sans-serif] text-[26.5px] leading-none text-[#2563EB]">
                          {pacote.quantidade.toLocaleString('pt-BR')}
                        </p>
                        <p className="font-['Inter:Semi_Bold',sans-serif] text-[13.5px] text-[#8c8c8f]">
                          digitações
                        </p>
                      </div>
                      <div className="w-full h-[1px] bg-[#e0e0e0]" />
                      <div className="flex flex-col items-center gap-[1px]">
                        <p className="font-['Inter:Semi_Bold',sans-serif] text-[17.5px] text-[#2d2d2d]">
                          R$ {pacote.preco.toLocaleString('pt-BR')}
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[13.5px] text-[#8c8c8f]">
                          R$ {(pacote.preco / pacote.quantidade).toFixed(2)} por digitação
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Banner com Ilustração e Texto */}
          <div className="relative pt-[12px]">
            {/* Tag "Oferta válida" - FORA DO CARD */}
            <div className="absolute top-[2px] left-[25%] -translate-x-1/2 z-20">
              <div className="bg-gradient-to-r from-[#10b981] to-[#059669] text-white px-[12px] py-[4px] rounded-full shadow-lg">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[8px] uppercase tracking-wide">
                  Oferta válida até 31/01/2026
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[16px]">
              {/* Card 1 - Time focado em links (ESQUERDA) */}
              <div className="bg-gradient-to-br from-white via-[#f8fafc] to-[#e0f2fe] rounded-[12px] border border-[#e0e0e0] shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center px-[20px] py-[12px] gap-[16px]">
                  {/* Ilustração */}
                  <div className="flex-shrink-0 w-[100px] h-[70px] flex items-center justify-center">
                    <img 
                      src={teamIllustration} 
                      alt="Team Illustration" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Texto principal */}
                  <div className="flex-1 space-y-[6px]">
                    <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#0F172A] leading-[1.4]">
                      Crie um time focado em links e veja seus resultados se multiplicarem.
                    </p>
                    <div className="flex items-center gap-[6px]">
                      <div className="w-[3px] h-[14px] bg-gradient-to-b from-[#2563EB] to-[#3B82F6] rounded-full"></div>
                      <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2563EB]">
                        Comece por apenas <span className="font-['Inter:Bold',sans-serif] text-[15px]">R$ 19,90</span>/usuário mensal
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 - Pacotes de digitação (DIREITA) */}
              <div className="bg-gradient-to-br from-white via-[#f8fafc] to-[#eff6ff] rounded-[12px] border border-[#e0e0e0] shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between px-[20px] py-[12px] gap-[20px]">
                  {/* Ilustração */}
                  <div className="flex-shrink-0 w-[100px] h-[70px] flex items-center justify-center">
                    <UndrawBusinessDealReUp4U />
                  </div>

                  {/* Conteúdo Textual */}
                  <div className="flex flex-col gap-[8px] flex-1">
                    <h3 className="font-['Inter:Bold',sans-serif] text-[15px] text-[#0F172A] leading-[1.3] tracking-tight">
                      Pacotes de digitação e outros<br />serviços sob medida
                    </h3>
                    <div className="flex items-center gap-[6px]">
                      <div className="w-[3px] h-[14px] bg-gradient-to-b from-[#2563EB] to-[#3B82F6] rounded-full"></div>
                      <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#2563EB]">
                        Fale conosco!
                      </p>
                    </div>
                  </div>
                  
                  <a 
                    href="https://wa.me/5516993169840" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center size-[48px] bg-[#25D366] hover:bg-[#1fb855] text-white rounded-[12px] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-110 flex-shrink-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-[24px] h-[24px] relative z-10 group-hover:rotate-12 transition-transform duration-300"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <div className="absolute -top-1 -right-1 size-[14px] bg-[#1fb855] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="size-[5px] bg-white rounded-full"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Digitacoes;