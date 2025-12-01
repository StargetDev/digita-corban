import { useState } from 'react';
import { Search, Download, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { AtendimentoData } from './AtendimentoCard';
import { ExtratoFinanceiro } from './ExtratoFinanceiro';

interface FinanceiroProps {
  atendimentos: AtendimentoData[];
}

export function Financeiro({ atendimentos }: FinanceiroProps) {
  const [abaAtiva, setAbaAtiva] = useState<'comissoes-abertas' | 'comissoes-pagas'>('comissoes-abertas');
  const [searchCPF, setSearchCPF] = useState('');
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [itensPorPagina, setItensPorPagina] = useState(7);
  const [atendimentoSelecionado, setAtendimentoSelecionado] = useState<AtendimentoData | null>(null);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  // Filtrar propostas baseado na aba ativa
  const propostas = atendimentos.filter((atendimento) => {
    if (abaAtiva === 'comissoes-pagas') {
      return atendimento.tagStatus === 'proposta-paga';
    } else {
      // Comissões em aberto: propostas digitadas que ainda não foram pagas
      return atendimento.tagStatus === 'proposta-digitada';
    }
  });

  // Filtrar por CPF
  const propostasFiltradas = propostas.filter((proposta) =>
    searchCPF ? proposta.cpf?.includes(searchCPF) : true
  );

  // Paginação
  const totalPaginas = Math.ceil(propostasFiltradas.length / itensPorPagina);
  const indexInicio = (paginaAtual - 1) * itensPorPagina;
  const indexFim = indexInicio + itensPorPagina;
  const propostasPaginadas = propostasFiltradas.slice(indexInicio, indexFim);

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
    if (selectedItems.size === propostasPaginadas.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(propostasPaginadas.map((p) => p.id)));
    }
  };

  // Se está mostrando detalhes, renderiza a tela de extrato
  if (mostrarDetalhes && atendimentoSelecionado) {
    return (
      <ExtratoFinanceiro
        atendimento={atendimentoSelecionado}
        onClose={() => {
          setMostrarDetalhes(false);
          setAtendimentoSelecionado(null);
        }}
      />
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      <div className="flex flex-col gap-[24px] px-[32px] py-[24px]">
        {/* Título */}
        <div>
          <h1 className="font-['Inter:Semi_Bold',sans-serif] text-[22px] text-[#2d2d2d]">
            Comissões
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[2px]">
            Gerencie as comissões abertas e pagas
          </p>
        </div>

        {/* Abas */}
        <div className="flex items-center gap-[24px] relative">
          <button
            onClick={() => setAbaAtiva('comissoes-abertas')}
            className={`relative pb-[8px] font-['Inter:Regular',sans-serif] text-[20px] transition-colors ${
              abaAtiva === 'comissoes-abertas' ? 'text-[#5fb371]' : 'text-[#b4b4b8]'
            }`}
          >
            Comissões em aberto
            {abaAtiva === 'comissoes-abertas' && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5fb371]" />
            )}
          </button>
          <button
            onClick={() => setAbaAtiva('comissoes-pagas')}
            className={`relative pb-[8px] font-['Inter:Regular',sans-serif] text-[20px] transition-colors ${
              abaAtiva === 'comissoes-pagas' ? 'text-[#5fb371]' : 'text-[#b4b4b8]'
            }`}
          >
            Comissões pagas
            {abaAtiva === 'comissoes-pagas' && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5fb371]" />
            )}
          </button>
        </div>

        {/* Contador */}
        <div className="flex items-center gap-[4px] mt-[24px]">
          <div className="bg-[#f5f5fa] rounded-full size-[24px] flex items-center justify-center">
            <span className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f]">
              {propostasFiltradas.length}
            </span>
          </div>
          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#8c8c8f]">
            100
          </span>
        </div>

        {/* Tabela */}
        <div className="mt-[16px]">
          {/* Header da Tabela */}
          <div className="bg-white border-b border-[#b4b4b8] flex items-center h-[40px]">
            <div className="w-[40px] flex items-center justify-center">
              <div
                onClick={toggleSelectAll}
                className="size-[14px] border-[1.4px] border-[#b4b4b8] rounded-[2px] cursor-pointer flex items-center justify-center"
                style={{
                  backgroundColor: selectedItems.size === propostasPaginadas.length && propostasPaginadas.length > 0 ? '#5fb371' : 'white',
                }}
              >
                {selectedItems.size === propostasPaginadas.length && propostasPaginadas.length > 0 && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </div>
            <div className="flex-1 px-[8px]">
              <span className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f]">Consultor</span>
            </div>
            {abaAtiva === 'comissoes-pagas' && (
              <div className="flex-1 px-[8px]">
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f]">Equipe</span>
              </div>
            )}
            <div className="flex-1 px-[8px]">
              <span className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f]">QTD contratos</span>
            </div>
            <div className="flex-1 px-[8px]">
              <div className="flex flex-col">
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#8c8c8f]">Valor</span>
                <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">Comissão</span>
              </div>
            </div>
            <div className="flex-1 px-[8px]">
              <div className="flex flex-col">
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#8c8c8f]">Tipo</span>
                <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">Pix</span>
              </div>
            </div>
            <div className="flex-1 px-[8px]">
              <span className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#8c8c8f]">Pix</span>
            </div>
          </div>

          {/* Linhas da Tabela */}
          <div>
            {propostasPaginadas.length === 0 ? (
              <div className="px-[20px] py-[40px] text-center">
                <p className="font-['Inter:Regular',sans-serif] text-[#8c8c8f] text-[14px]">
                  Nenhuma proposta encontrada
                </p>
              </div>
            ) : (
              propostasPaginadas.map((proposta, index) => (
                <div
                  key={proposta.id}
                  onClick={() => {
                    setAtendimentoSelecionado(proposta);
                    setMostrarDetalhes(true);
                  }}
                  className={`flex items-center h-[36px] cursor-pointer hover:bg-[#e8f5e9] transition-colors ${index % 2 === 1 ? 'bg-[#f5f5fa]' : 'bg-white'}`}
                >
                  <div className="w-[40px] flex items-center justify-center">
                    <div
                      onClick={() => toggleSelectItem(proposta.id)}
                      className="size-[14px] border-[1.4px] border-[#b4b4b8] rounded-[2px] cursor-pointer flex items-center justify-center"
                      style={{
                        backgroundColor: selectedItems.has(proposta.id) ? '#5fb371' : 'white',
                      }}
                    >
                      {selectedItems.has(proposta.id) && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="flex-1 px-[8px] flex items-center gap-[4px]">
                    {abaAtiva === 'comissoes-pagas' && (
                      <div className="size-[24px] rounded-full bg-gradient-to-br from-[#a8d5a8] to-[#88c641] flex items-center justify-center">
                        <span className="font-['Inter:Semi_Bold',sans-serif] text-[10px] text-white">
                          {proposta.consultorNome?.charAt(0) || 'V'}
                        </span>
                      </div>
                    )}
                    <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">
                      {proposta.consultorNome || 'Vinicius Silva'}
                    </span>
                  </div>
                  {abaAtiva === 'comissoes-pagas' && (
                    <div className="flex-1 px-[8px]">
                      <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">
                        Matriz
                      </span>
                    </div>
                  )}
                  <div className="flex-1 px-[8px]">
                    <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">
                      1
                    </span>
                  </div>
                  <div className="flex-1 px-[8px]">
                    <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">
                      {proposta.valor}
                    </span>
                  </div>
                  <div className="flex-1 px-[8px]">
                    <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">
                      CPF
                    </span>
                  </div>
                  <div className="flex-1 px-[8px]">
                    <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">
                      {proposta.cpf || '123.456.789-10'}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Mensagem */}
          {abaAtiva === 'comissoes-pagas' && (
            <div className="mt-[16px] bg-[#e8f5e9] px-[16px] py-[8px] rounded-[4px] inline-block">
              <span className="font-['Inter:Regular',sans-serif] text-[12px] text-[#2e7d32]">
                Constam na lista apenas contratos pagos
              </span>
            </div>
          )}
        </div>

        {/* Rodapé com Paginação e Botões */}
        <div className="flex items-center justify-between mt-[24px]">
          {/* Paginação */}
          <div className="flex items-center gap-[16px]">
            <span className="font-['Quicksand:SemiBold',sans-serif] text-[12px] text-[#515251]">
              {indexInicio + 1}-{Math.min(indexFim, propostasFiltradas.length)} de {propostasFiltradas.length}
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

          {/* Botões */}
          <div className="flex items-center gap-[16px]">
            <button
              disabled={selectedItems.size === 0}
              className="h-[40px] px-[24px] bg-[#ededf2] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] font-['Inter:Bold',sans-serif] text-[14px] text-[#b4b4b8] disabled:opacity-50"
            >
              Pagar comissão
            </button>
            <button className="h-[40px] px-[24px] bg-[#5fb371] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] font-['Inter:Bold',sans-serif] text-[14px] text-white flex items-center gap-[8px]">
              <Download size={16} />
              Exportar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
