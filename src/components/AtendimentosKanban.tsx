import { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrop } from 'react-dnd';
import { Filter, Search, Plus } from 'lucide-react';
import { AtendimentoCard, AtendimentoData } from './AtendimentoCard';
import { AtendimentoDetalhes } from './AtendimentoDetalhes';
import HeaderNavigation from '../imports/HeaderNavigation';

interface KanbanColumnProps {
  titulo: string;
  status: 'inicio' | 'atendimento' | 'finalizado';
  atendimentos: AtendimentoData[];
  onDrop: (item: AtendimentoData, newStatus: 'inicio' | 'atendimento' | 'finalizado') => void;
  corDestaque: string;
  onCardClick: (atendimento: AtendimentoData) => void;
}

function KanbanColumn({ titulo, status, atendimentos, onDrop, corDestaque, onCardClick }: KanbanColumnProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ATENDIMENTO',
    drop: (item: AtendimentoData) => onDrop(item, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className="flex flex-col gap-[12px] min-w-[300px] flex-1 max-w-[360px]">
      {/* Header da coluna - Moderno */}
      <div className="flex items-center justify-between px-[4px]">
        <div className="flex items-center gap-[10px]">
          <div 
            className="size-[10px] rounded-full shadow-sm"
            style={{ 
              backgroundColor: corDestaque,
              boxShadow: `0 0 12px ${corDestaque}40`
            }}
          />
          <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[#1f2937] text-[15px]">
            {titulo}
          </h3>
        </div>
        <div 
          className="flex items-center justify-center min-w-[28px] h-[24px] px-[8px] rounded-[6px]"
          style={{ 
            backgroundColor: corDestaque,
          }}
        >
          <span className="font-['Inter:Bold',sans-serif] text-white text-[12px]">
            {atendimentos.length}
          </span>
        </div>
      </div>

      {/* Drop Zone */}
      <div 
        ref={drop}
        className="flex flex-col gap-[16px] min-h-[500px] rounded-[12px] p-[8px] pt-[16px] transition-all"
        style={{ 
          backgroundColor: isOver ? `${corDestaque}08` : '#f9fafb',
          border: isOver ? `2px dashed ${corDestaque}` : '2px dashed transparent',
        }}
      >
        {atendimentos.map((atendimento) => (
          <AtendimentoCard 
            key={atendimento.id} 
            atendimento={atendimento}
            onClick={() => onCardClick(atendimento)}
          />
        ))}
        
        {atendimentos.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center py-[48px]">
            <div 
              className="size-[56px] rounded-full flex items-center justify-center mb-[12px]"
              style={{ backgroundColor: `${corDestaque}15` }}
            >
              <div 
                className="size-[24px] rounded-full"
                style={{ backgroundColor: corDestaque }}
              />
            </div>
            <p className="font-['Inter:Medium',sans-serif] text-[#9ca3af] text-[13px]">
              Nenhum atendimento
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

interface AtendimentosKanbanProps {
  onAtendimentosChange?: (atendimentos: AtendimentoData[]) => void;
}

export function AtendimentosKanban({ onAtendimentosChange }: AtendimentosKanbanProps) {
  const [atendimentoSelecionado, setAtendimentoSelecionado] = useState<AtendimentoData | null>(null);
  const [atendimentos, setAtendimentos] = useState<AtendimentoData[]>([
    {
      id: '1',
      nome: 'Maria Silva Santos',
      data: '28/11/2025',
      hora: '09:30',
      valor: 'R$ 1.250,00',
      status: 'inicio',
      origem: 'Ditto',
    },
    {
      id: '2',
      nome: 'João Pedro Costa',
      data: '28/11/2025',
      hora: '10:00',
      valor: 'R$ 890,00',
      status: 'inicio',
      origem: 'Tengo',
    },
    {
      id: '3',
      nome: 'Ana Carolina Oliveira',
      data: '28/11/2025',
      hora: '11:15',
      valor: 'R$ 2.100,00',
      status: 'inicio',
      origem: 'Ditto',
    },
    {
      id: '4',
      nome: 'Pedro Henrique Almeida',
      data: '28/11/2025',
      hora: '14:20',
      valor: 'R$ 1.650,00',
      status: 'inicio',
      origem: 'Tengo',
    },
    {
      id: '5',
      nome: 'Carlos Eduardo Ferreira',
      data: '27/11/2025',
      hora: '08:00',
      valor: 'R$ 1.540,00',
      cpf: '123.456.789-00',
      telefoneCliente: '(11) 98888-7777',
      consultorNome: 'Roberto Alves',
      consultorContato: '(11) 98765-4321',
      analistaNome: 'Juliana Mendes',
      consultor: 'Roberto Alves',
      analista: 'Juliana Mendes',
      status: 'atendimento',
      origem: 'Ditto',
      tagStatus: 'negociando',
    },
    {
      id: '6',
      nome: 'Patrícia Souza Lima',
      data: '27/11/2025',
      hora: '08:45',
      valor: 'R$ 3.200,00',
      cpf: '987.654.321-00',
      telefoneCliente: '(11) 97777-8888',
      consultorNome: 'Marcos Silva',
      consultorContato: '(11) 91234-5678',
      analistaNome: 'Fernando Costa',
      consultor: 'Marcos Silva',
      analista: 'Fernando Costa',
      status: 'atendimento',
      origem: 'Tengo',
      tagStatus: 'proposta-digitada',
    },
    {
      id: '7',
      nome: 'Fernanda Lima Rodrigues',
      data: '27/11/2025',
      hora: '10:15',
      valor: 'R$ 2.890,00',
      cpf: '456.123.789-00',
      telefoneCliente: '(11) 96666-5555',
      consultorNome: 'Carla Mendes',
      consultorContato: '(11) 99876-5432',
      analistaNome: 'Paula Santos',
      consultor: 'Carla Mendes',
      analista: 'Paula Santos',
      status: 'atendimento',
      origem: 'Ditto',
      tagStatus: 'negociando',
    },
    {
      id: '8',
      nome: 'Ricardo Martins Pereira',
      data: '26/11/2025',
      hora: '14:30',
      valor: 'R$ 1.780,00',
      cpf: '456.789.123-00',
      telefoneCliente: '(11) 95555-4444',
      consultorNome: 'Fernanda Lima',
      consultorContato: '(11) 99988-7766',
      analistaNome: 'Paula Santos',
      consultor: 'Fernanda Lima',
      analista: 'Paula Santos',
      status: 'finalizado',
      origem: 'Tengo',
      tagStatus: 'proposta-paga',
    },
    {
      id: '9',
      nome: 'Luciana Aparecida Rocha',
      data: '26/11/2025',
      hora: '15:00',
      valor: 'R$ 2.450,00',
      cpf: '321.654.987-00',
      telefoneCliente: '(11) 94444-3333',
      consultorNome: 'André Souza',
      consultorContato: '(11) 97766-5544',
      analistaNome: 'Ricardo Almeida',
      consultor: 'André Souza',
      analista: 'Ricardo Almeida',
      status: 'finalizado',
      origem: 'Ditto',
      tagStatus: 'proposta-recusada',
    },
    {
      id: '10',
      nome: 'Fernando José Barbosa',
      data: '26/11/2025',
      hora: '16:20',
      valor: 'R$ 950,00',
      cpf: '789.123.456-00',
      telefoneCliente: '(11) 93333-2222',
      consultorNome: 'Carla Mendes',
      consultorContato: '(11) 96655-4433',
      analistaNome: 'Juliana Mendes',
      consultor: 'Carla Mendes',
      analista: 'Juliana Mendes',
      status: 'finalizado',
      origem: 'Tengo',
      tagStatus: 'proposta-paga',
    },
    {
      id: '11',
      nome: 'Beatriz Santos Oliveira',
      data: '25/11/2025',
      hora: '09:00',
      valor: 'R$ 1.320,00',
      cpf: '159.753.852-00',
      telefoneCliente: '(11) 92222-1111',
      consultorNome: 'Roberto Alves',
      consultorContato: '(11) 98765-4321',
      analistaNome: 'Fernando Costa',
      consultor: 'Roberto Alves',
      analista: 'Fernando Costa',
      status: 'finalizado',
      origem: 'Ditto',
      tagStatus: 'sem-interesse',
    },
    {
      id: '12',
      nome: 'Gabriel Costa Mendes',
      data: '25/11/2025',
      hora: '10:30',
      valor: 'R$ 780,00',
      cpf: '357.159.456-00',
      telefoneCliente: '(11) 91111-0000',
      consultorNome: 'Marcos Silva',
      consultorContato: '(11) 91234-5678',
      analistaNome: 'Juliana Mendes',
      consultor: 'Marcos Silva',
      analista: 'Juliana Mendes',
      status: 'finalizado',
      origem: 'Tengo',
      tagStatus: 'proposta-recusada',
    },
  ]);

  // Sincronizar atendimentos com o componente pai
  useEffect(() => {
    if (onAtendimentosChange) {
      onAtendimentosChange(atendimentos);
    }
  }, [atendimentos, onAtendimentosChange]);

  const handleDrop = (item: AtendimentoData, newStatus: 'inicio' | 'atendimento' | 'finalizado') => {
    if (item.status !== newStatus) {
      setAtendimentos((prev) =>
        prev.map((atendimento) =>
          atendimento.id === item.id
            ? { ...atendimento, status: newStatus }
            : atendimento
        )
      );
    }
  };

  const handleCardClick = (atendimento: AtendimentoData) => {
    setAtendimentoSelecionado(atendimento);
  };

  const handleCloseDetalhes = () => {
    setAtendimentoSelecionado(null);
  };

  const handleUpdateStatus = (status: string) => {
    if (atendimentoSelecionado) {
      // Determinar a coluna baseada no status
      let novaColuna: 'inicio' | 'atendimento' | 'finalizado' = atendimentoSelecionado.status;
      
      if (status === 'negociando' || status === 'proposta-digitada') {
        novaColuna = 'atendimento';
      } else if (status === 'sem-interesse' || status === 'proposta-recusada' || status === 'proposta-paga') {
        novaColuna = 'finalizado';
      }
      
      setAtendimentos((prev) =>
        prev.map((atendimento) =>
          atendimento.id === atendimentoSelecionado.id
            ? { ...atendimento, tagStatus: status, status: novaColuna }
            : atendimento
        )
      );
      
      // Atualizar também o atendimento selecionado para refletir a mudança
      setAtendimentoSelecionado({
        ...atendimentoSelecionado,
        tagStatus: status,
        status: novaColuna,
      });
    }
  };

  const atendimentosInicio = atendimentos.filter(a => a.status === 'inicio');
  const atendimentosEmAtendimento = atendimentos.filter(a => 
    a.status === 'atendimento' && 
    (a.tagStatus === 'negociando' || a.tagStatus === 'proposta-digitada')
  );
  const atendimentosFinalizados = atendimentos.filter(a => 
    a.status === 'finalizado' && 
    (a.tagStatus === 'sem-interesse' || a.tagStatus === 'proposta-recusada' || a.tagStatus === 'proposta-paga')
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col w-full min-h-screen">
        <div className="flex flex-col gap-[24px] p-[24px]">
          {/* Header Moderno */}
          <div className="flex items-center justify-between pb-[16px]">
            <div className="flex items-center gap-[16px]">
              <div>
                <h1 className="font-['Inter:Semi_Bold',sans-serif] text-[22px] text-[#2d2d2d]">
                  Atendimentos
                </h1>
                <p className="font-['Inter:Regular',sans-serif] text-[#8c8c8f] text-[13px] mt-[2px]">
                  {atendimentos.length} atendimentos no total
                </p>
              </div>
            </div>

          {/* Ações */}
          <div className="flex items-center gap-[12px]">
            {/* Busca */}
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-white border border-[#c5d6b5] rounded-[8px] pl-[36px] pr-[12px] py-[8px] text-[13px] font-['Inter:Regular',sans-serif] text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-1 transition-all w-[220px]"
                style={{
                  borderColor: '#c5d6b5',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#1e40af';
                  e.currentTarget.style.boxShadow = '0 0 0 1px #1e40af';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#c5d6b5';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
              <Search size={16} className="absolute left-[12px] top-[50%] translate-y-[-50%] text-[#9ca3af]" />
            </div>

            {/* Filtros */}
            <button 
              className="bg-white border rounded-[8px] px-[14px] py-[8px] flex items-center gap-[8px] transition-all"
              style={{ borderColor: '#c5d6b5' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
              }}
            >
              <Filter size={16} className="text-[#6b7280]" />
              <span className="font-['Inter:Medium',sans-serif] text-[#374151] text-[13px]">Filtros</span>
            </button>
          </div>
        </div>

          {/* Kanban Board */}
          <div className="flex gap-[16px] w-full overflow-x-auto pb-[16px]">
            <KanbanColumn 
              titulo="Início" 
              status="inicio"
              atendimentos={atendimentosInicio}
              onDrop={handleDrop}
              corDestaque="#c5d6b5"
              onCardClick={handleCardClick}
            />
            <KanbanColumn 
              titulo="Em atendimento" 
              status="atendimento"
              atendimentos={atendimentosEmAtendimento}
              onDrop={handleDrop}
              corDestaque="#2563EB"
              onCardClick={handleCardClick}
            />
            <KanbanColumn 
              titulo="Finalizado" 
              status="finalizado"
              atendimentos={atendimentosFinalizados}
              onDrop={handleDrop}
              corDestaque="#1e40af"
              onCardClick={handleCardClick}
            />
          </div>
        </div>
      </div>

      {/* Modal de Detalhes */}
      {atendimentoSelecionado && (
        <AtendimentoDetalhes
          atendimento={atendimentoSelecionado}
          onClose={handleCloseDetalhes}
          onUpdateStatus={handleUpdateStatus}
        />
      )}
    </DndProvider>
  );
}
