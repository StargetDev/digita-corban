import { ArrowLeft, Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { AtendimentoData } from './AtendimentoCard';

interface ExtratoFinanceiroProps {
  atendimento: AtendimentoData;
  onClose: () => void;
}

interface Transacao {
  id: string;
  tipo: string;
  dataTransacao: string;
  valor: string;
  status: 'Pendente' | 'Pago' | 'Repasse efetuado';
  dataPagamento: string;
  descricao: string;
}

export function ExtratoFinanceiro({ atendimento, onClose }: ExtratoFinanceiroProps) {
  const [convenioSelecionado, setConvenioSelecionado] = useState('Selecione');
  const [bancoSelecionado, setBancoSelecionado] = useState('Facta');
  const [searchProposta, setSearchProposta] = useState('');
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [itensPorPagina, setItensPorPagina] = useState(7);

  // Mock de transações
  const transacoes: Transacao[] = [
    {
      id: '1',
      tipo: 'Super Match',
      dataTransacao: '15/09/2025',
      valor: '+R$ 50,00',
      status: 'Pendente',
      dataPagamento: '-',
      descricao: 'Venda',
    },
    {
      id: '2',
      tipo: 'Match',
      dataTransacao: '15/09/2025',
      valor: '+R$ 50,00',
      status: 'Pendente',
      dataPagamento: '-',
      descricao: 'Venda',
    },
    {
      id: '3',
      tipo: 'Pagamento',
      dataTransacao: '15/09/2025',
      valor: '-R$ 50,00',
      status: 'Repasse efetuado',
      dataPagamento: '15/09/2025',
      descricao: 'Comissão paga',
    },
    {
      id: '4',
      tipo: 'Super Match',
      dataTransacao: '15/09/2025',
      valor: '+R$ 50,00',
      status: 'Pago',
      dataPagamento: '15/09/2025',
      descricao: 'Venda',
    },
    {
      id: '5',
      tipo: 'Super Match',
      dataTransacao: '15/09/2025',
      valor: '+R$ 50,00',
      status: 'Pago',
      dataPagamento: '15/09/2025',
      descricao: 'Venda',
    },
    {
      id: '6',
      tipo: 'Super Match',
      dataTransacao: '15/09/2025',
      valor: '+R$ 50,00',
      status: 'Pago',
      dataPagamento: '15/09/2025',
      descricao: 'Venda',
    },
  ];

  const transacoesFiltradas = transacoes.filter((t) =>
    searchProposta ? t.descricao.toLowerCase().includes(searchProposta.toLowerCase()) : true
  );

  const totalPaginas = Math.ceil(transacoesFiltradas.length / itensPorPagina);
  const indexInicio = (paginaAtual - 1) * itensPorPagina;
  const indexFim = indexInicio + itensPorPagina;
  const transacoesPaginadas = transacoesFiltradas.slice(indexInicio, indexFim);

  const totalPago = 45000.0;
  const totalPendente = 4500.0;
  const totalGeral = 4500.0;

  const toggleSelectItem = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedItems.size === transacoesPaginadas.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(transacoesPaginadas.map((t) => t.id)));
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Pendente':
        return {
          bg: '#ff9800',
          text: '#ffffff',
        };
      case 'Pago':
        return {
          bg: '#4caf50',
          text: '#ffffff',
        };
      case 'Repasse efetuado':
        return {
          bg: '#37474F',
          text: '#FFFFFF',
        };
      default:
        return {
          bg: '#b4b4b8',
          text: '#ffffff',
        };
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f5f5fa]">
      <div className="flex flex-col gap-[24px] px-[32px] py-[24px]">
        {/* Cabeçalho com botão voltar */}
        <div className="flex items-center gap-[16px]">
          <button
            onClick={onClose}
            className="flex items-center gap-[8px] text-[#515251] hover:text-[#5fb371] transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-['Inter:Semi_Bold',sans-serif] text-[16px]">Voltar</span>
          </button>
          <div className="h-[24px] w-[1px] bg-[#d6d8db]" />
          <h1 className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#515251]">
            Extrato Financeiro
          </h1>
        </div>

          {/* Cards de Totais */}
          <div className="grid grid-cols-3 gap-[16px]">
            <div className="bg-gradient-to-br from-[#f5fdf7] to-[#e8f5e9] rounded-[12px] p-[18px] border border-[#d4edda] shadow-sm">
              <p className="font-['Inter:Regular',sans-serif] text-[#2d5f2e] text-[12px] mb-[4px]">
                Total pago
              </p>
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[#1e7e34] text-[18px]">
                R$ {totalPago.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#fffef5] to-[#fff9e6] rounded-[12px] p-[18px] border border-[#fff3cd] shadow-sm">
              <p className="font-['Inter:Regular',sans-serif] text-[#7d5d0f] text-[12px] mb-[4px]">
                Total pendente
              </p>
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[#b8860b] text-[18px]">
                R$ {totalPendente.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#fafbfc] to-[#f0f1f3] rounded-[12px] p-[18px] border border-[#e2e3e5] shadow-sm">
              <p className="font-['Inter:Regular',sans-serif] text-[#5a5d61] text-[12px] mb-[4px]">
                Total geral
              </p>
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[#383d41] text-[18px]">
                R$ {totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>

          {/* Filtros */}
          <div className="flex items-center gap-[16px]">
            {/* Convênio */}
            <div className="flex flex-col gap-[4px]">
              <label className="font-['Inter:Regular',sans-serif] text-[12px] text-[#8c8c8f]">
                Convênio
              </label>
              <div className="relative">
                <select
                  value={convenioSelecionado}
                  onChange={(e) => setConvenioSelecionado(e.target.value)}
                  className="appearance-none bg-white border border-[#d6d8db] rounded-[8px] px-[16px] py-[10px] pr-[40px] h-[40px] w-[180px] font-['Inter:Regular',sans-serif] text-[14px] text-[#515251] cursor-pointer focus:outline-none focus:border-[#5fb371]"
                >
                  <option>Selecione</option>
                  <option>INSS</option>
                  <option>Siape</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-[16px] top-1/2 translate-y-[-50%] text-[#515251] pointer-events-none"
                />
              </div>
            </div>

            {/* Banco */}
            <div className="flex flex-col gap-[4px]">
              <label className="font-['Inter:Regular',sans-serif] text-[12px] text-[#8c8c8f]">
                Banco
              </label>
              <div className="relative">
                <select
                  value={bancoSelecionado}
                  onChange={(e) => setBancoSelecionado(e.target.value)}
                  className="appearance-none bg-white border border-[#d6d8db] rounded-[8px] px-[16px] py-[10px] pr-[40px] h-[40px] w-[180px] font-['Inter:Regular',sans-serif] text-[14px] text-[#515251] cursor-pointer focus:outline-none focus:border-[#5fb371]"
                >
                  <option>Facta</option>
                  <option>Banco do Brasil</option>
                  <option>Bradesco</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-[16px] top-1/2 translate-y-[-50%] text-[#515251] pointer-events-none"
                />
              </div>
            </div>

            {/* Proposta */}
            <div className="flex flex-col gap-[4px] flex-1">
              <label className="font-['Inter:Regular',sans-serif] text-[12px] text-[#8c8c8f]">
                Proposta
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder=""
                  value={searchProposta}
                  onChange={(e) => setSearchProposta(e.target.value)}
                  className="bg-white border border-[#d6d8db] rounded-[8px] pl-[16px] pr-[40px] py-[10px] h-[40px] w-full font-['Inter:Regular',sans-serif] text-[14px] text-[#515251] placeholder-[#b4b4b8] focus:outline-none focus:border-[#5fb371]"
                />
                <Search
                  size={16}
                  className="absolute right-[16px] top-1/2 translate-y-[-50%] text-[#8c8c8f]"
                />
              </div>
            </div>
          </div>

          {/* Tabela */}
          <div className="mt-[8px] bg-white rounded-[8px] border border-[#d6d8db]">
            {/* Header */}
            <div className="bg-[#f8f9fa] border-b border-[#d6d8db] flex items-center h-[40px]">
              <div className="w-[40px] flex items-center justify-center">
                <div
                  onClick={toggleSelectAll}
                  className="size-[14px] border-[1.4px] border-[#b4b4b8] rounded-[2px] cursor-pointer flex items-center justify-center"
                  style={{
                    backgroundColor:
                      selectedItems.size === transacoesPaginadas.length &&
                      transacoesPaginadas.length > 0
                        ? '#5fb371'
                        : 'white',
                  }}
                >
                  {selectedItems.size === transacoesPaginadas.length &&
                    transacoesPaginadas.length > 0 && (
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                </div>
              </div>
              <div className="flex-1 px-[8px]">
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f]">
                  Tipo
                </span>
              </div>
              <div className="flex-1 px-[8px]">
                <div className="flex flex-col">
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f]">
                    Data
                  </span>
                  <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">
                    da transação
                  </span>
                </div>
              </div>
              <div className="flex-1 px-[8px]">
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f]">
                  Valor
                </span>
              </div>
              <div className="flex-1 px-[8px]">
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f]">
                  Status
                </span>
              </div>
              <div className="flex-1 px-[8px]">
                <div className="flex flex-col">
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f]">
                    Data
                  </span>
                  <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">
                    do pagamento
                  </span>
                </div>
              </div>
              <div className="flex-1 px-[8px]">
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f]">
                  Descrição
                </span>
              </div>
            </div>

            {/* Linhas */}
            <div>
              {transacoesPaginadas.map((transacao, index) => {
                const statusStyle = getStatusStyle(transacao.status);
                return (
                  <div
                    key={transacao.id}
                    className={`flex items-center h-[36px] border-b border-[#e9ecef] last:border-b-0 ${
                      index % 2 === 1 ? 'bg-[#f8f9fa]' : 'bg-white'
                    }`}
                  >
                    <div className="w-[40px] flex items-center justify-center">
                      <div
                        onClick={() => toggleSelectItem(transacao.id)}
                        className="size-[14px] border-[1.4px] border-[#b4b4b8] rounded-[2px] cursor-pointer flex items-center justify-center"
                        style={{
                          backgroundColor: selectedItems.has(transacao.id) ? '#5fb371' : 'white',
                        }}
                      >
                        {selectedItems.has(transacao.id) && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path
                              d="M1 4L3.5 6.5L9 1"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div className="flex-1 px-[8px]">
                      <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">
                        {transacao.tipo}
                      </span>
                    </div>
                    <div className="flex-1 px-[8px]">
                      <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">
                        {transacao.dataTransacao}
                      </span>
                    </div>
                    <div className="flex-1 px-[8px]">
                      <span
                        className="font-['Inter:Semi_Bold',sans-serif] text-[12px]"
                        style={{
                          color: transacao.valor.startsWith('+') ? '#4caf50' : '#f44336',
                        }}
                      >
                        {transacao.valor}
                      </span>
                    </div>
                    <div className="flex-1 px-[8px]">
                      <div
                        className="inline-flex items-center px-[12px] py-[4px] rounded-[16px]"
                        style={{
                          backgroundColor: statusStyle.bg,
                        }}
                      >
                        <span
                          className="font-['Inter:Semi_Bold',sans-serif] text-[10px]"
                          style={{ color: statusStyle.text }}
                        >
                          {transacao.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 px-[8px]">
                      <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">
                        {transacao.dataPagamento}
                      </span>
                    </div>
                    <div className="flex-1 px-[8px]">
                      <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">
                        {transacao.descricao}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Rodapé com Paginação */}
          <div className="flex items-center mt-[16px]">
            {/* Paginação */}
            <div className="flex items-center gap-[16px]">
              <span className="font-['Quicksand:SemiBold',sans-serif] text-[12px] text-[#515251]">
                {indexInicio + 1}-{Math.min(indexFim, transacoesFiltradas.length)} de{' '}
                {transacoesFiltradas.length}
              </span>
              <div className="flex items-center gap-[8px]">
                <button
                  onClick={() => setPaginaAtual(Math.max(1, paginaAtual - 1))}
                  disabled={paginaAtual === 1}
                  className="size-[32px] flex items-center justify-center disabled:opacity-30"
                >
                  <ChevronLeft size={16} className="text-[#C9C9C9]" />
                </button>
                <span className="font-['Quicksand:SemiBold',sans-serif] text-[12px] text-[#8c8c8f]">
                  {paginaAtual}/{totalPaginas || 1}
                </span>
                <button
                  onClick={() => setPaginaAtual(Math.min(totalPaginas, paginaAtual + 1))}
                  disabled={paginaAtual === totalPaginas || totalPaginas === 0}
                  className="size-[32px] flex items-center justify-center disabled:opacity-30"
                >
                  <ChevronRight size={16} className="text-[#515251]" />
                </button>
              </div>
              <div className="flex items-center gap-[8px]">
                <span className="font-['Quicksand:Regular',sans-serif] text-[12px] text-[#a6a6a6]">
                  Linhas por página:
                </span>
                <select
                  value={itensPorPagina}
                  onChange={(e) => {
                    setItensPorPagina(Number(e.target.value));
                    setPaginaAtual(1);
                  }}
                  className="font-['Quicksand:Regular',sans-serif] text-[12px] text-[#515251] border-none focus:outline-none cursor-pointer bg-transparent"
                >
                  <option>7</option>
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
                <ChevronDown size={16} className="text-[#A6A6A6]" />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
