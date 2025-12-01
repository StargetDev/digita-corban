import { useState } from 'react';
import { Search, Filter, Calendar, User, CheckCircle, XCircle } from 'lucide-react';
import { ModalDetalhesAcionamento } from './ModalDetalhesAcionamento';

// Ícone WhatsApp
const WhatsAppIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

interface AnaliseItem {
  id: number;
  nome: string;
  tipo: string;
  cpf: string;
  telefone: string;
  consultor: string;
  consultorTelefone: string;
  analista: string;
  dataAnalise: string;
  status: 'entrada' | 'em_analise' | 'finalizado';
  aprovado?: boolean;
}

// Dados mockados
const ITENS_MOCK: AnaliseItem[] = [
  {
    id: 1,
    nome: 'Maria Silva Santos',
    tipo: 'CPF',
    cpf: '123.456.789-00',
    telefone: '(11) 98888-7777',
    consultor: 'Roberto Alves',
    consultorTelefone: '(11) 98765-4321',
    analista: 'Juliana Mendes',
    dataAnalise: '27/11/2025',
    status: 'entrada'
  },
  {
    id: 2,
    nome: 'João Pedro Costa',
    tipo: 'CPF',
    cpf: '987.654.321-00',
    telefone: '(21) 99999-8888',
    consultor: 'Amanda Silva',
    consultorTelefone: '(21) 97777-6666',
    analista: 'Carlos Mendes',
    dataAnalise: '28/11/2025',
    status: 'entrada'
  },
  {
    id: 3,
    nome: 'Ana Carolina Oliveira',
    tipo: 'CPF',
    cpf: '456.789.123-00',
    telefone: '(11) 97777-6666',
    consultor: 'Roberto Alves',
    consultorTelefone: '(11) 98765-4321',
    analista: 'Paula Santos',
    dataAnalise: '26/11/2025',
    status: 'entrada'
  },
  {
    id: 4,
    nome: 'Pedro Henrique Almeida',
    tipo: 'CPF',
    cpf: '321.654.987-00',
    telefone: '(11) 96666-5555',
    consultor: 'Fernanda Lima',
    consultorTelefone: '(11) 95555-4444',
    analista: 'João Silva',
    dataAnalise: '29/11/2025',
    status: 'entrada'
  },
  {
    id: 5,
    nome: 'Carlos Eduardo Ferreira',
    tipo: 'CPF',
    cpf: '123.456.789-00',
    telefone: '(11) 98888-7777',
    consultor: 'Roberto Alves',
    consultorTelefone: '(11) 98765-4321',
    analista: 'Juliana Mendes',
    dataAnalise: '27/11/2025',
    status: 'em_analise'
  },
  {
    id: 6,
    nome: 'Patrícia Souza Lima',
    tipo: 'CPF',
    cpf: '654.987.321-00',
    telefone: '(11) 97777-8888',
    consultor: 'Marcos Silva',
    consultorTelefone: '(11) 91234-5678',
    analista: 'Fernando Costa',
    dataAnalise: '27/11/2025',
    status: 'em_analise'
  },
  {
    id: 7,
    nome: 'Fernanda Lima Rodrigues',
    tipo: 'CPF',
    cpf: '159.753.456-00',
    telefone: '(11) 96666-5555',
    consultor: 'Carla Mendes',
    consultorTelefone: '(11) 98876-5432',
    analista: 'Paula Santos',
    dataAnalise: '27/11/2025',
    status: 'em_analise'
  },
  {
    id: 8,
    nome: 'Ricardo Martins Pereira',
    tipo: 'CPF',
    cpf: '456.123.456-00',
    telefone: '(11) 95555-4444',
    consultor: 'Fernanda Lima',
    consultorTelefone: '(11) 99988-7766',
    analista: 'Paula Santos',
    dataAnalise: '26/11/2025',
    status: 'finalizado',
    aprovado: true
  },
  {
    id: 9,
    nome: 'Luciana Aparecida Rocha',
    tipo: 'CPF',
    cpf: '789.654.987-00',
    telefone: '(11) 94444-3333',
    consultor: 'André Souza',
    consultorTelefone: '(11) 97766-5544',
    analista: 'Ricardo Almeida',
    dataAnalise: '26/11/2025',
    status: 'finalizado',
    aprovado: false
  },
  {
    id: 10,
    nome: 'Fernando José Barbosa',
    tipo: 'CPF',
    cpf: '951.753.456-00',
    telefone: '(11) 93333-2222',
    consultor: 'Carla Mendes',
    consultorTelefone: '(11) 98655-4433',
    analista: 'Juliana Mendes',
    dataAnalise: '26/11/2025',
    status: 'finalizado',
    aprovado: true
  },
  {
    id: 11,
    nome: 'Beatriz Santos Oliveira',
    tipo: 'CPF',
    cpf: '159.753.852-00',
    telefone: '(11) 92222-1111',
    consultor: 'Roberto Alves',
    consultorTelefone: '(11) 98765-4321',
    analista: 'Fernando Costa',
    dataAnalise: '25/11/2025',
    status: 'finalizado',
    aprovado: false
  },
  {
    id: 12,
    nome: 'Gabriel Costa Mendes',
    tipo: 'CPF',
    cpf: '357.159.456-00',
    telefone: '(11) 91111-0000',
    consultor: 'Marcos Silva',
    consultorTelefone: '(11) 91234-5678',
    analista: 'Juliana Mendes',
    dataAnalise: '25/11/2025',
    status: 'finalizado',
    aprovado: false
  }
];

export function Analise() {
  const [searchTerm, setSearchTerm] = useState('');
  const [itens] = useState<AnaliseItem[]>(ITENS_MOCK);
  const [modalAberto, setModalAberto] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState<AnaliseItem | null>(null);

  // Converter AnaliseItem para ClienteAcionamento
  const converterParaCliente = (item: AnaliseItem) => {
    return {
      id: item.id,
      nome: item.nome,
      cpf: item.cpf,
      banco: 'Banco Facta',
      valor: 25800.50,
      produto: 'Margem aumento salário',
      matricula: '1234567890',
      dataNascimento: '15/03/1960',
      valorLiberado: 2000.00,
      parcelaMensal: 156.80,
      prazoMeses: 96,
      contatos: [
        { numero: item.telefone, tipo: 'principal' as const }
      ],
      vendedor: item.consultor,
      linkFormalizacao: 'https://starget.com.br/formalizacao/123456789',
      status: 'selecione' as const
    };
  };

  // Filtrar itens por termo de busca
  const itensFiltrados = itens.filter(item =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.cpf.includes(searchTerm) ||
    item.telefone.includes(searchTerm)
  );

  // Separar itens por status
  const itensEntrada = itensFiltrados.filter(item => item.status === 'entrada');
  const itensEmAnalise = itensFiltrados.filter(item => item.status === 'em_analise');
  const itensFinalizados = itensFiltrados.filter(item => item.status === 'finalizado');

  const renderCard = (item: AnaliseItem) => {
    return (
      <div
        key={item.id}
        onClick={() => {
          setItemSelecionado(item);
          setModalAberto(true);
        }}
        className="bg-white rounded-[8px] p-[16px] shadow-sm border border-[#e2e8f0] mb-[12px] hover:shadow-md transition-shadow cursor-pointer"
      >
        {/* Header com nome e badge */}
        <div className="flex items-start justify-between mb-[12px]">
          <div className="flex items-center gap-[8px] flex-1">
            <div className="w-[32px] h-[32px] rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0">
              <span className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-white">
                {item.nome.split(' ')[0][0]}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#0F172A] truncate">
                {item.nome}
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#64748b]">
                CPF: {item.cpf}
              </p>
            </div>
          </div>
          {/* Badge apenas para Finalizados */}
          {item.status === 'finalizado' && (
            <div className={`px-[8px] py-[4px] rounded-[6px] flex-shrink-0 ${
              item.aprovado === true 
                ? 'bg-[#dcfce7] text-[#166534]' 
                : 'bg-[#fee2e2] text-[#991b1b]'
            }`}>
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[10px] whitespace-nowrap">
                {item.aprovado === true 
                  ? 'Com saldo adicional' 
                  : 'Sem saldo adicional'}
              </p>
            </div>
          )}
        </div>

        {/* Vendedor */}
        <div className="bg-[#eff6ff] rounded-[6px] p-[10px] mb-[8px]">
          <div className="flex items-center gap-[6px] mb-[4px]">
            <User size={12} className="text-[#2563EB]" />
            <p className="font-['Inter:Semi_Bold',sans-serif] text-[10px] text-[#2563EB] uppercase">
              Vendedor:
            </p>
            <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#0F172A]">
              {item.consultor}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <a 
              href={`https://wa.me/55${item.consultorTelefone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-[6px] hover:opacity-70 transition-opacity"
            >
              <WhatsAppIcon size={12} className="text-[#10b981]" />
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#10b981]">
                {item.consultorTelefone}
              </p>
            </a>
            {/* Data apenas para Entrada */}
            {item.status === 'entrada' && (
              <div className="flex items-center gap-[4px]">
                <Calendar size={12} className="text-[#64748b]" />
                <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#64748b]">
                  {item.dataAnalise}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Analista - apenas para Em análise e Finalizados */}
        {item.status !== 'entrada' && (
          <div className="bg-[#eff6ff] rounded-[6px] p-[10px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[6px]">
                <User size={12} className="text-[#2563EB]" />
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[10px] text-[#2563EB] uppercase">
                  Analista:
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#0F172A]">
                  {item.analista}
                </p>
              </div>
              <div className="flex items-center gap-[4px]">
                <Calendar size={12} className="text-[#64748b]" />
                <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#64748b]">
                  {item.dataAnalise}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderColuna = (titulo: string, itens: AnaliseItem[], contador: number, corContador: string) => (
    <div className="flex-1 min-w-[300px]">
      {/* Header da coluna */}
      <div className="flex items-center gap-[8px] mb-[16px]">
        <div className={`w-[28px] h-[28px] rounded-[6px] ${corContador} flex items-center justify-center`}>
          <span className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-white">
            {contador}
          </span>
        </div>
        <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[15px] text-[#2d2d2d]">
          {titulo}
        </h3>
      </div>

      {/* Cards */}
      <div className="space-y-[12px]">
        {itens.map(item => renderCard(item))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-[#f1f5f9]">
      {/* Header */}
      <div className="bg-white border-b border-[#e2e8f0] px-[32px] py-[24px]">
        <div className="flex items-start justify-between mb-[20px]">
          <div>
            <h1 className="font-['Inter:Semi_Bold',sans-serif] text-[22px] text-[#0F172A] mb-[4px]">
              Análise
            </h1>
            <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#64748b]">
              {itens.length} análises no total
            </p>
          </div>
        </div>

        {/* Barra de busca e filtros */}
        <div className="flex items-center gap-[12px]">
          <div className="relative flex-1 max-w-[300px]">
            <Search size={16} className="absolute left-[12px] top-[50%] translate-y-[-50%] text-[#9CA3AF]" />
            <input
              type="text"
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-[38px] pl-[36px] pr-[12px] rounded-[8px] border border-[#cbd5e1] font-['Inter:Regular',sans-serif] text-[13px] text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
            />
          </div>
          <button className="h-[38px] px-[16px] rounded-[8px] border border-[#cbd5e1] bg-white flex items-center gap-[8px] hover:bg-[#f1f5f9] transition-colors">
            <Filter size={16} className="text-[#64748b]" />
            <span className="font-['Inter:Medium',sans-serif] text-[13px] text-[#0F172A]">
              Filtros
            </span>
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-auto px-[32px] py-[24px]">
        <div className="flex gap-[24px] min-h-full">
          {renderColuna('Entrada', itensEntrada, itensEntrada.length, 'bg-[#93c5fd]')}
          {renderColuna('Em análise', itensEmAnalise, itensEmAnalise.length, 'bg-[#3B82F6]')}
          {renderColuna('Finalizados', itensFinalizados, itensFinalizados.length, 'bg-[#10b981]')}
        </div>
      </div>

      {/* Modal Detalhes do Atendimento */}
      {itemSelecionado && (
        <ModalDetalhesAcionamento
          cliente={converterParaCliente(itemSelecionado)}
          aberto={modalAberto}
          onFechar={() => {
            setModalAberto(false);
            setItemSelecionado(null);
          }}
          onSalvar={(status) => {
            console.log('Status salvo:', status);
            setModalAberto(false);
            setItemSelecionado(null);
          }}
        />
      )}
    </div>
  );
}