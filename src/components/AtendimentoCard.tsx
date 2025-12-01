import { useDrag } from 'react-dnd';
import { Calendar, Clock, User, Check, X } from 'lucide-react';

export interface AtendimentoData {
  id: string;
  nome: string;
  data: string;
  hora: string;
  valor: string;
  status: 'inicio' | 'atendimento' | 'finalizado';
  origem: 'Ditto' | 'Tengo';
  cpf?: string;
  telefoneCliente?: string;
  consultorNome?: string;
  consultorContato?: string;
  analistaNome?: string;
  consultor?: string;
  analista?: string;
  tagStatus?: 'negociando' | 'proposta-digitada' | 'sem-interesse' | 'proposta-recusada' | 'proposta-paga';
}

interface AtendimentoCardProps {
  atendimento: AtendimentoData;
  onClick?: () => void;
}

function WhatsAppIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
    </svg>
  );
}

function WhatsAppButton({ telefone }: { telefone: string }) {
  const formatPhoneForWhatsApp = (phone: string) => {
    return phone.replace(/\D/g, '');
  };

  const handleClick = () => {
    const phoneNumber = formatPhoneForWhatsApp(telefone);
    window.open(`https://wa.me/55${phoneNumber}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-[6px] px-[10px] py-[4px] rounded-[6px] transition-all border shrink-0"
      style={{
        backgroundColor: 'transparent',
        borderColor: '#bfdbfe',
        color: '#2563EB',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#eff6ff';
        e.currentTarget.style.borderColor = '#2563EB';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.borderColor = '#bfdbfe';
      }}
      title={`Abrir WhatsApp`}
    >
      <WhatsAppIcon />
      <span className="font-['Inter:Medium',sans-serif] text-[11px] whitespace-nowrap" style={{ color: '#416b02' }}>
        {telefone}
      </span>
    </button>
  );
}

export function AtendimentoCard({ atendimento, onClick }: AtendimentoCardProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ATENDIMENTO',
    item: atendimento,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const isInicio = atendimento.status === 'inicio';
  const isFinalizado = atendimento.status === 'finalizado';
  const isSucesso = isFinalizado && atendimento.tagStatus === 'proposta-paga';
  const isInsucesso = isFinalizado && (atendimento.tagStatus === 'sem-interesse' || atendimento.tagStatus === 'proposta-recusada');
  
  const statusColor = 
    atendimento.status === 'inicio' ? '#bfdbfe' :
    atendimento.status === 'atendimento' ? '#2563EB' :
    '#1e40af';

  // Cores específicas para cada origem
  const origemConfig = atendimento.origem === 'Ditto' 
    ? { 
        color: '#65D6B5',    // DITTO - Verde água
        bg: '#e0f7f2',       // Fundo verde água claro
        border: '#65D6B5'    // Borda verde água
      }
    : { 
        color: '#1C3601',    // TENGO - Verde escuro
        bg: '#f0f4ec',       // Fundo verde muito claro
        border: '#1C3601'    // Borda verde escuro
      };

  return (
    <div 
      ref={drag}
      onClick={onClick}
      className="bg-white relative rounded-[10px] shrink-0 w-full cursor-pointer transition-all group hover:shadow-xl hover:scale-[1.02]"
      style={{ 
        opacity: isDragging ? 0.5 : 1,
        border: '1px solid #e5e7eb',
      }}
    >
      {/* Barra de status superior */}
      <div 
        className="h-[4px] w-full rounded-t-[10px]"
        style={{ backgroundColor: statusColor }}
      />

      {/* Ícone de Resultado - V (sucesso) ou X (insucesso) */}
      {isFinalizado && (
        <div 
          className="absolute top-[12px] right-[12px] flex items-center justify-center size-[24px] rounded-full"
          style={{
            backgroundColor: isSucesso ? '#d1f4e0' : '#fee2e2',
            border: `1.5px solid ${isSucesso ? '#86efac' : '#fca5a5'}`
          }}
        >
          {isSucesso ? (
            <Check size={14} style={{ color: '#065f46' }} strokeWidth={3} />
          ) : (
            <X size={14} style={{ color: '#dc2626' }} strokeWidth={3} />
          )}
        </div>
      )}

      <div className="p-[12px] flex flex-col gap-[10px]">
        {/* Header: Nome do Cliente */}
        <div className="flex items-start gap-[8px]">
          <div className="flex items-start gap-[8px] flex-1 min-w-0">
            {/* Ícone de Pessoa */}
            <div 
              className="size-[32px] rounded-full flex items-center justify-center shrink-0 text-white"
              style={{ 
                background: 'linear-gradient(135deg, #2563EB 0%, #2563EBdd 100%)'
              }}
            >
              <User size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[#1f2937] text-[13px] leading-[18px] truncate">
                {atendimento.nome}
              </p>
              {/* CPF - apenas nas colunas Em atendimento e Finalizado */}
              {!isInicio && atendimento.cpf && (
                <span className="font-['Inter:Medium',sans-serif] text-[#6b7280] text-[11px] mt-[2px] block">
                  CPF {atendimento.cpf}
                </span>
              )}
              {/* Data e hora - apenas na coluna Início */}
              {isInicio && (
                <div className="flex items-center gap-[8px] mt-[4px]">
                  <div className="flex items-center gap-[4px] text-[#6b7280]">
                    <Calendar size={11} />
                    <span className="font-['Inter:Regular',sans-serif] text-[11px]">{atendimento.data}</span>
                  </div>
                  <div className="flex items-center gap-[4px] text-[#6b7280]">
                    <Clock size={11} />
                    <span className="font-['Inter:Regular',sans-serif] text-[11px]">{atendimento.hora}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Telefone do Cliente e Tags de Status - APENAS nas colunas Em atendimento e Finalizado */}
        {!isInicio && atendimento.telefoneCliente && (
          <div className="flex items-center gap-[8px]">
            <WhatsAppButton telefone={atendimento.telefoneCliente} />
            
            {/* Tags de Status - APENAS nas colunas Em atendimento e Finalizado */}
            {!isInicio && atendimento.tagStatus && (
              <div 
                className="inline-flex items-center px-[8px] py-[4px] rounded-[6px]"
                style={{
                  backgroundColor: 
                    atendimento.tagStatus === 'negociando' ? '#dbeafe' :
                    atendimento.tagStatus === 'proposta-digitada' ? '#e9d5ff' :
                    atendimento.tagStatus === 'proposta-paga' ? '#d1f4e0' :
                    atendimento.tagStatus === 'proposta-recusada' ? '#fed7aa' :
                    '#fee2e2',
                  color: 
                    atendimento.tagStatus === 'negociando' ? '#1e40af' :
                    atendimento.tagStatus === 'proposta-digitada' ? '#6b21a8' :
                    atendimento.tagStatus === 'proposta-paga' ? '#065f46' :
                    atendimento.tagStatus === 'proposta-recusada' ? '#9a3412' :
                    '#991b1b',
                  border: `1px solid ${
                    atendimento.tagStatus === 'negociando' ? '#93c5fd' :
                    atendimento.tagStatus === 'proposta-digitada' ? '#c084fc' :
                    atendimento.tagStatus === 'proposta-paga' ? '#86efac' :
                    atendimento.tagStatus === 'proposta-recusada' ? '#fdba74' :
                    '#fca5a5'
                  }`
                }}
              >
                <span className="font-['Inter:Medium',sans-serif] text-[10px]">
                  {atendimento.tagStatus === 'negociando' ? 'Negociando' :
                   atendimento.tagStatus === 'proposta-digitada' ? 'Proposta digitada' :
                   atendimento.tagStatus === 'proposta-paga' ? 'Proposta Paga' :
                   atendimento.tagStatus === 'proposta-recusada' ? 'Proposta Recusada' :
                   'Sem interesse'}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Informações adicionais - Consultor e Analista */}
        {!isInicio && (
          <div className="flex flex-col gap-[8px] pt-[8px] border-t border-[#f3f4f6]">
            {/* Consultor - Nome e Telefone */}
            {atendimento.consultorNome && (
              <div 
                className="rounded-[8px] p-[8px]"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(101,166,3,0.15) 0%, rgba(101,166,3,0.08) 100%)',
                  border: '1px solid rgba(101,166,3,0.2)'
                }}
              >
                {/* Consultor: Nome */}
                <div className="flex items-center gap-[6px] mb-[6px]">
                  <div className="size-[5px] rounded-full shrink-0" style={{ backgroundColor: '#2563EB' }} />
                  <span className="font-['Inter:Medium',sans-serif] text-[10px] uppercase tracking-wide" style={{ color: '#1e3a8a' }}>
                    Consultor:
                  </span>
                  <p className="font-['Inter:Semi_Bold',sans-serif] text-[11px] leading-[15px] flex-1 min-w-0" style={{ color: '#304e01' }}>
                    {atendimento.consultorNome}
                  </p>
                </div>
                
                {/* Botão WhatsApp do Consultor */}
                {atendimento.consultorContato && (
                  <div className="flex items-center gap-[8px]">
                    <WhatsAppButton telefone={atendimento.consultorContato} />
                  </div>
                )}
              </div>
            )}

            {/* Analista */}
            {atendimento.analistaNome && (
              <div 
                className="rounded-[8px] p-[8px]"
                style={{ 
                  background: 'linear-gradient(135deg, #d8e3cc 0%, #c5d6b5 100%)',
                  border: '1px solid #c5d6b5'
                }}
              >
                {/* Analista: Nome e Data */}
                <div className="flex items-center justify-between gap-[8px] mb-[4px]">
                  <div className="flex items-center gap-[6px] flex-1 min-w-0">
                    <div className="size-[5px] rounded-full shrink-0" style={{ backgroundColor: '#1e40af' }} />
                    <span className="font-['Inter:Medium',sans-serif] text-[10px] uppercase tracking-wide" style={{ color: '#1e3a8a' }}>
                      Analista:
                    </span>
                    <p className="font-['Inter:Semi_Bold',sans-serif] text-[11px] leading-[15px] flex-1 min-w-0 truncate" style={{ color: '#304e01' }}>
                      {atendimento.analistaNome}
                    </p>
                  </div>
                  {/* Data */}
                  <div className="flex items-center gap-[4px] shrink-0" style={{ color: '#416b02' }}>
                    <Calendar size={11} />
                    <span className="font-['Inter:Regular',sans-serif] text-[11px]">{atendimento.data}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Indicador de drag no hover */}
      <div className="absolute top-[50%] left-[4px] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex flex-col gap-[2px]">
          <div className="w-[3px] h-[3px] rounded-full" style={{ backgroundColor: '#c5d6b5' }} />
          <div className="w-[3px] h-[3px] rounded-full" style={{ backgroundColor: '#c5d6b5' }} />
          <div className="w-[3px] h-[3px] rounded-full" style={{ backgroundColor: '#c5d6b5' }} />
        </div>
      </div>
    </div>
  );
}
