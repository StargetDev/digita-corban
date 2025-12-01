import { useState } from 'react';
import { X, Plus, Trash2, Edit2 } from 'lucide-react';
import { AtendimentoData } from './AtendimentoCard';

interface PropostaDigitada {
  id: number;
  numeroProposta: string;
  banco: string;
  convenio: string;
  produto: string;
  valorContrato: string;
  comissaoConsultor: string;
  comissaoOperador: string;
}

interface ObservacaoAdicionada {
  id: number;
  usuario: string;
  data: string;
  hora: string;
  texto: string;
}

interface AtendimentoDetalhesProps {
  atendimento: AtendimentoData | null;
  onClose: () => void;
  onUpdateStatus: (status: string) => void;
}

export function AtendimentoDetalhes({ atendimento, onClose, onUpdateStatus }: AtendimentoDetalhesProps) {
  const [abaAtiva, setAbaAtiva] = useState<'informacoes' | 'propostas' | 'observacoes'>('informacoes');
  const [statusSelecionado, setStatusSelecionado] = useState(atendimento?.tagStatus || '');
  const [observacoes, setObservacoes] = useState('');
  const [observacoesAdicionadas, setObservacoesAdicionadas] = useState<ObservacaoAdicionada[]>([]);
  const [observacaoEditandoId, setObservacaoEditandoId] = useState<number | null>(null);
  const [propostas, setPropostas] = useState<PropostaDigitada[]>([]);
  const [novaProposta, setNovaProposta] = useState({
    numeroProposta: '',
    banco: '',
    convenio: '',
    produto: '',
    valorContrato: '',
    comissaoConsultor: '',
    comissaoOperador: '',
  });

  if (!atendimento) return null;

  const statusOptions = [
    { value: 'negociando', label: 'Negociando', color: '#3b82f6', bgColor: '#eff6ff' },
    { value: 'sem-interesse', label: 'Sem interesse', color: '#ef4444', bgColor: '#fef2f2' },
    { value: 'proposta-digitada', label: 'Proposta digitada', color: '#8b5cf6', bgColor: '#f5f3ff' },
    { value: 'proposta-recusada', label: 'Proposta Recusada', color: '#f97316', bgColor: '#fff7ed' },
    { value: 'proposta-paga', label: 'Proposta Paga', color: '#10b981', bgColor: '#f0fdf4' },
  ];

  const adicionarProposta = () => {
    if (novaProposta.numeroProposta && novaProposta.banco && novaProposta.convenio && novaProposta.produto) {
      setPropostas([...propostas, { id: Date.now(), ...novaProposta }]);
      setNovaProposta({
        numeroProposta: '',
        banco: '',
        convenio: '',
        produto: '',
        valorContrato: '',
        comissaoConsultor: '',
        comissaoOperador: '',
      });
    }
  };

  const removerProposta = (id: number) => {
    setPropostas(propostas.filter(p => p.id !== id));
  };

  const handleStatusChange = (value: string) => {
    setStatusSelecionado(value);
    onUpdateStatus(value);
  };

  const adicionarObservacao = () => {
    if (observacoes.trim()) {
      if (observacaoEditandoId !== null) {
        // Modo edição
        setObservacoesAdicionadas(
          observacoesAdicionadas.map((obs) =>
            obs.id === observacaoEditandoId
              ? { ...obs, texto: observacoes }
              : obs
          )
        );
        setObservacaoEditandoId(null);
      } else {
        // Modo adicionar
        const agora = new Date();
        const novaObservacao: ObservacaoAdicionada = {
          id: Date.now(),
          usuario: 'Usuário Atual', // Aqui você pode substituir pelo nome do usuário logado
          data: agora.toLocaleDateString('pt-BR'),
          hora: agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
          texto: observacoes,
        };
        setObservacoesAdicionadas([novaObservacao, ...observacoesAdicionadas]);
      }
      setObservacoes('');
    }
  };

  const editarObservacao = (obs: ObservacaoAdicionada) => {
    setObservacoes(obs.texto);
    setObservacaoEditandoId(obs.id);
  };

  const removerObservacao = (id: number) => {
    setObservacoesAdicionadas(observacoesAdicionadas.filter((obs) => obs.id !== id));
  };

  const cancelarEdicao = () => {
    setObservacoes('');
    setObservacaoEditandoId(null);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center z-50 p-[24px]"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-[16px] w-full max-w-[750px] max-h-[85vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="bg-gradient-to-r from-[#eff6ff] to-[#e0e7ff] px-[20px] py-[16px] rounded-t-[16px] flex items-center justify-between flex-shrink-0 border-b-2 border-[#dbeafe]"
        >
          <div>
            <h2 className="font-['Inter:Bold',sans-serif] text-[20px] text-[#1e40af]">
              Detalhes do Atendimento
            </h2>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-[#dbeafe] rounded-full p-[6px] transition-all text-[#2563EB]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sistema de Abas */}
        <div className="border-b border-[#e5e7eb] flex-shrink-0">
          <div className="flex px-[20px]">
            <button
              onClick={() => setAbaAtiva('informacoes')}
              className={`px-[16px] py-[12px] font-['Inter:Semi_Bold',sans-serif] text-[13px] border-b-2 transition-all ${
                abaAtiva === 'informacoes'
                  ? 'border-[#1e40af] text-[#1e40af]'
                  : 'border-transparent text-[#6b7280] hover:text-[#1e40af] hover:border-[#bfdbfe]'
              }`}
            >
              Informações do Cliente
            </button>
            <button
              onClick={() => setAbaAtiva('propostas')}
              className={`px-[16px] py-[12px] font-['Inter:Semi_Bold',sans-serif] text-[13px] border-b-2 transition-all ${
                abaAtiva === 'propostas'
                  ? 'border-[#1e40af] text-[#1e40af]'
                  : 'border-transparent text-[#6b7280] hover:text-[#1e40af] hover:border-[#bfdbfe]'
              }`}
            >
              Propostas Digitadas
              {propostas.length > 0 && (
                <span className="ml-[8px] inline-flex items-center justify-center px-[6px] py-[1px] rounded-full text-[10px] font-['Inter:Bold',sans-serif] bg-[#88c641] text-white">
                  {propostas.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setAbaAtiva('observacoes')}
              className={`px-[16px] py-[12px] font-['Inter:Semi_Bold',sans-serif] text-[13px] border-b-2 transition-all ${
                abaAtiva === 'observacoes'
                  ? 'border-[#1e40af] text-[#1e40af]'
                  : 'border-transparent text-[#6b7280] hover:text-[#1e40af] hover:border-[#bfdbfe]'
              }`}
            >
              Observações
            </button>
          </div>
        </div>

        <div className="p-[20px] space-y-[16px] overflow-y-auto flex-1">
          {/* Conteúdo da Aba: Informações do Cliente */}
          {abaAtiva === 'informacoes' && (
            <>
              {/* Informações do Cliente */}
              <div className="border border-[#c5d6b5] rounded-[10px] p-[16px]">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#304e01] mb-[12px]">
                  Dados do Cliente
                </h3>
                <div className="grid grid-cols-3 gap-x-[16px] gap-y-[10px]">
                  <div>
                    <label className="font-['Inter:Medium',sans-serif] text-[12px] text-[#6b7280] block mb-[4px]">
                      Nome
                    </label>
                    <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#1f2937]">
                      {atendimento.nome}
                    </p>
                  </div>
                  {atendimento.cpf && (
                    <div>
                      <label className="font-['Inter:Medium',sans-serif] text-[12px] text-[#6b7280] block mb-[4px]">
                        CPF
                      </label>
                      <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#1f2937]">
                        {atendimento.cpf}
                      </p>
                    </div>
                  )}
                  <div>
                    <label className="font-['Inter:Medium',sans-serif] text-[12px] text-[#6b7280] block mb-[4px]">
                      Data
                    </label>
                    <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#1f2937]">
                      {atendimento.data}
                    </p>
                  </div>
                  {atendimento.hora && (
                    <div>
                      <label className="font-['Inter:Medium',sans-serif] text-[12px] text-[#6b7280] block mb-[4px]">
                        Hora
                      </label>
                      <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#1f2937]">
                        {atendimento.hora}
                      </p>
                    </div>
                  )}
                  {atendimento.consultor && (
                    <div>
                      <label className="font-['Inter:Medium',sans-serif] text-[12px] text-[#6b7280] block mb-[4px]">
                        Consultor
                      </label>
                      <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#1f2937]">
                        {atendimento.consultor}
                      </p>
                    </div>
                  )}
                  {atendimento.analista && (
                    <div>
                      <label className="font-['Inter:Medium',sans-serif] text-[12px] text-[#6b7280] block mb-[4px]">
                        Analista
                      </label>
                      <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#1f2937]">
                        {atendimento.analista}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Status */}
              <div className="border border-[#c5d6b5] rounded-[10px] p-[16px]">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#304e01] mb-[10px]">
                  Status do Atendimento
                </h3>
                <div className="grid grid-cols-2 gap-[10px]">
                  {statusOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleStatusChange(option.value)}
                      className={`px-[14px] py-[10px] rounded-[8px] transition-all font-['Inter:Semi_Bold',sans-serif] text-[13px] ${
                        statusSelecionado === option.value
                          ? 'ring-2 shadow-sm'
                          : 'hover:shadow-md'
                      }`}
                      style={{
                        backgroundColor: statusSelecionado === option.value ? option.bgColor : '#ffffff',
                        borderColor: statusSelecionado === option.value ? option.color : '#e5e7eb',
                        borderWidth: '2px',
                        borderStyle: 'solid',
                        ringColor: statusSelecionado === option.value ? option.color : 'transparent',
                      }}
                    >
                      <div className="flex items-center gap-[8px]">
                        <div
                          className="w-[12px] h-[12px] rounded-full flex-shrink-0"
                          style={{ backgroundColor: option.color }}
                        />
                        <span className="truncate" style={{ color: option.color }}>
                          {option.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Conteúdo da Aba: Observações */}
          {abaAtiva === 'observacoes' && (
            <div className="space-y-[16px]">
              {/* Adicionar Nova Observação */}
              <div className="border border-[#c5d6b5] rounded-[10px] p-[16px]">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#304e01] mb-[10px]">
                  {observacaoEditandoId !== null ? 'Editar Observação' : 'Adicionar Observação'}
                </h3>
                <textarea
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  placeholder="Digite sua observação sobre este atendimento..."
                  className="w-full border border-[#bfdbfe] rounded-[6px] px-[12px] py-[8px] font-['Inter:Regular',sans-serif] text-[13px] text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#1e40af] min-h-[100px] resize-y mb-[10px]"
                />
                <div className="flex gap-[8px]">
                  <button
                    onClick={adicionarObservacao}
                    className="flex items-center gap-[6px] px-[12px] py-[6px] rounded-[6px] transition-all font-['Inter:Medium',sans-serif] text-[12px] text-white bg-[#88c641] hover:bg-[#76b82d]"
                  >
                    Salvar
                  </button>
                  {observacaoEditandoId !== null && (
                    <button
                      onClick={cancelarEdicao}
                      className="flex items-center gap-[6px] px-[12px] py-[6px] rounded-[6px] transition-all font-['Inter:Medium',sans-serif] text-[12px] border border-[#c5d6b5] text-[#6b7280] hover:bg-gray-100"
                    >
                      Cancelar
                    </button>
                  )}
                </div>
              </div>

              {/* Observações Adicionadas */}
              <div className="border border-[#c5d6b5] rounded-[10px] p-[16px]">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#304e01] mb-[12px]">
                  Observações Adicionadas
                </h3>

                {observacoesAdicionadas.length > 0 ? (
                  <div className="space-y-[12px]">
                    {observacoesAdicionadas.map((obs) => (
                      <div
                        key={obs.id}
                        className="border border-[#e5e7eb] rounded-[8px] p-[12px] bg-[#f9fafb] hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-[8px]">
                          <div className="flex items-center gap-[8px]">
                            <div>
                              <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#1f2937]">
                                {obs.usuario}
                              </p>
                              <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#6b7280]">
                                {obs.data} às {obs.hora}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-[6px]">
                            <button
                              onClick={() => editarObservacao(obs)}
                              className="p-[6px] rounded-[4px] hover:bg-[#1e40af] hover:bg-opacity-10 transition-colors group"
                              title="Editar observação"
                            >
                              <Edit2 size={14} className="text-[#6b7280] group-hover:text-[#1e40af]" />
                            </button>
                            <button
                              onClick={() => removerObservacao(obs.id)}
                              className="p-[6px] rounded-[4px] hover:bg-red-50 transition-colors group"
                              title="Remover observação"
                            >
                              <Trash2 size={14} className="text-[#6b7280] group-hover:text-red-600" />
                            </button>
                          </div>
                        </div>
                        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#374151] leading-relaxed">
                          {obs.texto}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-[32px] border-2 border-dashed border-[#c5d6b5] rounded-[8px]">
                    <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#6b7280]">
                      Nenhuma observação adicionada
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#9ca3af] mt-[2px]">
                      Adicione observações usando o formulário acima
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Conteúdo da Aba: Propostas Digitadas */}
          {abaAtiva === 'propostas' && (
            <div className="space-y-[16px]">
              {/* Formulário para Nova Proposta */}
              <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[6px] p-[12px]">
                <h4 className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#374151] mb-[8px]">
                  Adicionar Nova Proposta
                </h4>
                <div className="grid grid-cols-3 gap-[8px] mb-[10px]">
                  <div>
                    <label className="font-['Inter:Medium',sans-serif] text-[11px] text-[#6b7280] block mb-[4px]">
                      Número Proposta *
                    </label>
                    <input
                      type="text"
                      value={novaProposta.numeroProposta}
                      onChange={(e) => setNovaProposta({ ...novaProposta, numeroProposta: e.target.value })}
                      placeholder="Ex: 2024001"
                      className="w-full border border-[#bfdbfe] rounded-[4px] px-[8px] py-[6px] font-['Inter:Regular',sans-serif] text-[12px] focus:outline-none focus:ring-1 focus:ring-[#1e40af]"
                    />
                  </div>
                  <div>
                    <label className="font-['Inter:Medium',sans-serif] text-[11px] text-[#6b7280] block mb-[4px]">
                      Banco *
                    </label>
                    <input
                      type="text"
                      value={novaProposta.banco}
                      onChange={(e) => setNovaProposta({ ...novaProposta, banco: e.target.value })}
                      placeholder="Ex: BB"
                      className="w-full border border-[#bfdbfe] rounded-[4px] px-[8px] py-[6px] font-['Inter:Regular',sans-serif] text-[12px] focus:outline-none focus:ring-1 focus:ring-[#1e40af]"
                    />
                  </div>
                  <div>
                    <label className="font-['Inter:Medium',sans-serif] text-[11px] text-[#6b7280] block mb-[4px]">
                      Convênio *
                    </label>
                    <input
                      type="text"
                      value={novaProposta.convenio}
                      onChange={(e) => setNovaProposta({ ...novaProposta, convenio: e.target.value })}
                      placeholder="Ex: INSS"
                      className="w-full border border-[#bfdbfe] rounded-[4px] px-[8px] py-[6px] font-['Inter:Regular',sans-serif] text-[12px] focus:outline-none focus:ring-1 focus:ring-[#1e40af]"
                    />
                  </div>
                  <div>
                    <label className="font-['Inter:Medium',sans-serif] text-[11px] text-[#6b7280] block mb-[4px]">
                      Produto *
                    </label>
                    <input
                      type="text"
                      value={novaProposta.produto}
                      onChange={(e) => setNovaProposta({ ...novaProposta, produto: e.target.value })}
                      placeholder="Ex: Consignado"
                      className="w-full border border-[#bfdbfe] rounded-[4px] px-[8px] py-[6px] font-['Inter:Regular',sans-serif] text-[12px] focus:outline-none focus:ring-1 focus:ring-[#1e40af]"
                    />
                  </div>
                  <div>
                    <label className="font-['Inter:Medium',sans-serif] text-[11px] text-[#6b7280] block mb-[4px]">
                      Valor Contrato
                    </label>
                    <input
                      type="text"
                      value={novaProposta.valorContrato}
                      onChange={(e) => setNovaProposta({ ...novaProposta, valorContrato: e.target.value })}
                      placeholder="R$ 0,00"
                      className="w-full border border-[#bfdbfe] rounded-[4px] px-[8px] py-[6px] font-['Inter:Regular',sans-serif] text-[12px] focus:outline-none focus:ring-1 focus:ring-[#1e40af]"
                    />
                  </div>

                </div>
                <button
                  onClick={adicionarProposta}
                  className="flex items-center gap-[6px] px-[12px] py-[6px] rounded-[6px] transition-all font-['Inter:Medium',sans-serif] text-[12px] text-white bg-[#88c641] hover:bg-[#76b82d]"
                >
                  <Plus size={14} />
                  Adicionar Proposta
                </button>
              </div>

              {/* Área de Gestão de Propostas */}
              <div className="border border-[#c5d6b5] rounded-[10px] p-[16px]">
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#304e01] mb-[12px]">
                  Propostas Cadastradas
                </h3>

                {/* Grid de Propostas Existentes */}
                {propostas.length > 0 && (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-[12px]">
                      <thead>
                        <tr className="bg-[#f3f4f6]">
                          <th className="px-[8px] py-[6px] text-left font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#374151] border-b-2 border-[#c5d6b5]">
                            Nº Proposta
                          </th>
                          <th className="px-[8px] py-[6px] text-left font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#374151] border-b-2 border-[#c5d6b5]">
                            Banco
                          </th>
                          <th className="px-[8px] py-[6px] text-left font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#374151] border-b-2 border-[#c5d6b5]">
                            Convênio
                          </th>
                          <th className="px-[8px] py-[6px] text-left font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#374151] border-b-2 border-[#c5d6b5]">
                            Produto
                          </th>
                          <th className="px-[8px] py-[6px] text-left font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#374151] border-b-2 border-[#c5d6b5]">
                            Valor
                          </th>
                          <th className="px-[8px] py-[6px] text-left font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#374151] border-b-2 border-[#c5d6b5]">
                            Com. Cons.
                          </th>
                          <th className="px-[8px] py-[6px] text-left font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#374151] border-b-2 border-[#c5d6b5]">
                            Com. Oper.
                          </th>
                          <th className="px-[8px] py-[6px] text-center font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#374151] border-b-2 border-[#c5d6b5] w-[50px]">
                            Ações
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {propostas.map((proposta) => (
                          <tr key={proposta.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-[8px] py-[6px] font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#1e40af] border-b border-[#e5e7eb]">
                              {proposta.numeroProposta}
                            </td>
                            <td className="px-[8px] py-[6px] font-['Inter:Regular',sans-serif] text-[12px] text-[#1f2937] border-b border-[#e5e7eb]">
                              {proposta.banco}
                            </td>
                            <td className="px-[8px] py-[6px] font-['Inter:Regular',sans-serif] text-[12px] text-[#1f2937] border-b border-[#e5e7eb]">
                              {proposta.convenio}
                            </td>
                            <td className="px-[8px] py-[6px] font-['Inter:Regular',sans-serif] text-[12px] text-[#1f2937] border-b border-[#e5e7eb]">
                              {proposta.produto}
                            </td>
                            <td className="px-[8px] py-[6px] font-['Inter:Regular',sans-serif] text-[12px] text-[#1f2937] border-b border-[#e5e7eb]">
                              {proposta.valorContrato}
                            </td>
                            <td className="px-[8px] py-[6px] font-['Inter:Regular',sans-serif] text-[12px] text-[#1f2937] border-b border-[#e5e7eb]">
                              {proposta.comissaoConsultor}
                            </td>
                            <td className="px-[8px] py-[6px] font-['Inter:Regular',sans-serif] text-[12px] text-[#1f2937] border-b border-[#e5e7eb]">
                              {proposta.comissaoOperador}
                            </td>
                            <td className="px-[8px] py-[6px] border-b border-[#e5e7eb] text-center">
                              <button
                                onClick={() => removerProposta(proposta.id)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50 rounded-[4px] p-[4px] transition-all"
                              >
                                <Trash2 size={14} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {propostas.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-[20px] border-2 border-dashed border-[#c5d6b5] rounded-[8px]">
                    <p className="font-['Inter:Medium',sans-serif] text-[13px] text-[#6b7280]">
                      Nenhuma proposta cadastrada
                    </p>
                    <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#9ca3af] mt-[2px]">
                      Adicione propostas usando o formulário acima
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Botões de Ação */}
          <div className="flex items-center justify-end gap-[10px] pt-[12px] border-t border-[#e5e7eb] mt-auto">
            <button
              onClick={onClose}
              className="px-[16px] py-[8px] rounded-[6px] border border-[#c5d6b5] font-['Inter:Medium',sans-serif] text-[13px] text-[#374151] hover:bg-gray-50 transition-all"
            >
              Fechar
            </button>
            <button
              className="px-[16px] py-[8px] rounded-[6px] font-['Inter:Medium',sans-serif] text-[13px] text-white transition-all"
              style={{ backgroundColor: '#1e40af' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1e3a8a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1e40af';
              }}
            >
              Salvar Alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
