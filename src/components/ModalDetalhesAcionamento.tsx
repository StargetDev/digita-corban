import { useState } from 'react';
import { X, Plus } from 'lucide-react';
import svgPaths from '../imports/svg-jnudfp96ug';

interface Proposta {
  id: number;
  numeroProposta: string;
  banco: string;
  convenio: string;
  produto: string;
  valorContrato: number;
}

interface Observacao {
  id: number;
  texto: string;
  data: string;
  hora: string;
  usuario: string;
}

interface ClienteAcionamento {
  id: number;
  nome: string;
  cpf: string;
  banco: string;
  valor: number;
  produto: string;
  matricula: string;
  dataNascimento: string;
  valorLiberado: number;
  parcelaMensal: number;
  prazoMeses: number;
  contatos: {
    numero: string;
    tipo: 'principal' | 'secundario' | 'recado';
  }[];
  vendedor: string;
  linkFormalizacao: string;
  status: 'selecione' | 'agendar-retorno' | 'cliente-nao-encontrado' | 'sem-interesse' | 'convertido' | 'nao-responde';
}

interface ModalDetalhesAcionamentoProps {
  cliente: ClienteAcionamento;
  aberto: boolean;
  onFechar: () => void;
  onSalvar: (status: string) => void;
}

export function ModalDetalhesAcionamento({ cliente, aberto, onFechar, onSalvar }: ModalDetalhesAcionamentoProps) {
  const [abaAtiva, setAbaAtiva] = useState<'informacoes' | 'propostas' | 'observacoes'>('informacoes');
  const [statusSelecionado, setStatusSelecionado] = useState('com-saldo');
  const [propostas, setPropostas] = useState<Proposta[]>([]);
  const [novaProposta, setNovaProposta] = useState({
    numeroProposta: '',
    banco: '',
    convenio: '',
    produto: '',
    valorContrato: ''
  });
  const [observacoes, setObservacoes] = useState<Observacao[]>([]);
  const [novaObservacao, setNovaObservacao] = useState('');

  if (!aberto) return null;

  const handleSalvar = () => {
    onSalvar(statusSelecionado);
    onFechar();
  };

  const getDataHoraAtual = () => {
    const agora = new Date();
    const data = agora.toLocaleDateString('pt-BR');
    const hora = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    return { data, hora };
  };

  const { data, hora } = getDataHoraAtual();

  const handleAdicionarProposta = () => {
    if (!novaProposta.numeroProposta || !novaProposta.banco || !novaProposta.convenio || !novaProposta.produto) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    const proposta: Proposta = {
      id: Date.now(),
      numeroProposta: novaProposta.numeroProposta,
      banco: novaProposta.banco,
      convenio: novaProposta.convenio,
      produto: novaProposta.produto,
      valorContrato: parseFloat(novaProposta.valorContrato.replace(/[^\d,]/g, '').replace(',', '.')) || 0
    };

    setPropostas([...propostas, proposta]);
    setNovaProposta({
      numeroProposta: '',
      banco: '',
      convenio: '',
      produto: '',
      valorContrato: ''
    });
  };

  const handleAdicionarObservacao = () => {
    if (!novaObservacao) {
      alert('Por favor, preencha a observação');
      return;
    }

    const observacao: Observacao = {
      id: Date.now(),
      texto: novaObservacao,
      data,
      hora,
      usuario: 'Juliana Mendes'
    };

    setObservacoes([...observacoes, observacao]);
    setNovaObservacao('');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onFechar}>
      <div 
        className="bg-white relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-[750px] h-[617px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Azul */}
        <div className="absolute bg-gradient-to-b box-border from-[#dbeafe] h-[65.795px] left-0 pb-[1.818px] pt-0 px-[20px] rounded-tl-[16px] rounded-tr-[16px] to-[#bfdbfe] top-0 w-[750px] flex items-center justify-between">
          <div className="border-[#93c5fd] border-b-[1.818px]" />
          <div className="flex-1 flex items-center justify-center">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[30px] text-[#1e40af] text-[20px]">
              Detalhes do Atendimento
            </p>
          </div>
          <button 
            onClick={onFechar}
            className="relative rounded-[3.0504e+07px] size-[31.989px] hover:bg-[#93c5fd] transition-colors flex items-center justify-center"
          >
            <X size={20} className="text-[#2563EB]" />
          </button>
        </div>

        {/* Tabs */}
        <div className="absolute box-border flex h-[45.284px] items-start left-0 pb-[0.909px] pl-[20px] pr-0 pt-0 top-[65.8px] w-[750px] border-b-[0.909px] border-black">
          <button
            onClick={() => setAbaAtiva('informacoes')}
            className={`h-[45.284px] w-[174.205px] ${
              abaAtiva === 'informacoes' 
                ? 'border-b-[1.818px] border-[#2563EB]' 
                : 'border-b-[1.818px] border-transparent'
            }`}
          >
            <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] text-[13px] text-center ${
              abaAtiva === 'informacoes' ? 'text-[#2563EB]' : 'text-gray-500'
            }`}>
              Informações do Cliente
            </p>
          </button>
          <button
            onClick={() => setAbaAtiva('propostas')}
            className={`h-[45.284px] w-[155.298px] ${
              abaAtiva === 'propostas' 
                ? 'border-b-[1.818px] border-[#2563EB]' 
                : 'border-b-[1.818px] border-transparent'
            }`}
          >
            <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] text-[13px] text-center ${
              abaAtiva === 'propostas' ? 'text-[#2563EB]' : 'text-gray-500'
            }`}>
              Propostas Digitadas
            </p>
          </button>
          <button
            onClick={() => setAbaAtiva('observacoes')}
            className={`h-[45.284px] w-[113.111px] ${
              abaAtiva === 'observacoes' 
                ? 'border-b-[1.818px] border-[#2563EB]' 
                : 'border-b-[1.818px] border-transparent'
            }`}
          >
            <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] text-[13px] text-center ${
              abaAtiva === 'observacoes' ? 'text-[#2563EB]' : 'text-gray-500'
            }`}>
              Observações
            </p>
          </button>
        </div>

        {/* Conteúdo */}
        <div className="absolute box-border flex flex-col gap-[15.994px] h-[505.142px] items-start left-0 overflow-y-auto pb-0 pt-[20px] px-[20px] top-[111.99px] w-[750px]">
          {abaAtiva === 'informacoes' && (
            <>
              {/* Dados do Cliente */}
              <div className="rounded-[10px] border-[#93c5fd] border-[0.909px] w-full">
                <div className="box-border flex flex-col gap-[11.989px] p-[16.903px]">
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#1e40af] text-[16px]">
                    Dados do Cliente
                  </h3>
                  
                  <div className="grid grid-cols-3 gap-[16px]">
                    {/* Nome */}
                    <div className="flex flex-col gap-[3.991px]">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] text-[12px] text-[#64748b]">
                        Nome
                      </p>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[14px] text-[#0F172A]">
                        {cliente.nome}
                      </p>
                    </div>

                    {/* CPF */}
                    <div className="flex flex-col gap-[3.991px]">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] text-[12px] text-[#64748b]">
                        CPF
                      </p>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[14px] text-[#0F172A]">
                        {cliente.cpf}
                      </p>
                    </div>

                    {/* Data */}
                    <div className="flex flex-col gap-[3.991px]">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] text-[12px] text-[#64748b]">
                        Data
                      </p>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[14px] text-[#0F172A]">
                        {data}
                      </p>
                    </div>

                    {/* Hora */}
                    <div className="flex flex-col gap-[3.991px]">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] text-[12px] text-[#64748b]">
                        Hora
                      </p>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[14px] text-[#0F172A]">
                        {hora}
                      </p>
                    </div>

                    {/* Vendedor */}
                    <div className="flex flex-col gap-[3.991px]">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] text-[12px] text-[#64748b]">
                        Vendedor
                      </p>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[14px] text-[#0F172A]">
                        {cliente.vendedor}
                      </p>
                    </div>

                    {/* Analista */}
                    <div className="flex flex-col gap-[3.991px]">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] text-[12px] text-[#64748b]">
                        Analista
                      </p>
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[14px] text-[#0F172A]">
                        Juliana Mendes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status de Análise */}
              <div className="rounded-[10px] border-[#93c5fd] border-[0.909px] w-full">
                <div className="box-border flex flex-col gap-[10px] p-[16.903px]">
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#1e40af] text-[16px]">
                    Status de Análise
                  </h3>

                  <div className="grid grid-cols-2 gap-[10px]">
                    {/* Com saldo adicional */}
                    <button
                      onClick={() => setStatusSelecionado('com-saldo')}
                      className={`h-[43.125px] rounded-[8px] px-[15.81px] py-[11.818px] flex items-center gap-[7.997px] border-[1.818px] transition-all ${
                        statusSelecionado === 'com-saldo'
                          ? 'bg-emerald-50 border-emerald-500 shadow-[0px_0px_0px_2px_#0a0a0a,0px_1px_3px_0px_rgba(0,0,0,0.1)]'
                          : 'bg-white border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <div className="bg-emerald-500 rounded-full size-[11.989px]" />
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] text-[13px] text-emerald-500">
                        Com saldo adicional
                      </p>
                    </button>

                    {/* Sem saldo adicional */}
                    <button
                      onClick={() => setStatusSelecionado('sem-saldo')}
                      className={`h-[43.125px] rounded-[8px] px-[15.81px] py-[11.818px] flex items-center gap-[7.997px] border-[1.818px] transition-all ${
                        statusSelecionado === 'sem-saldo'
                          ? 'bg-red-50 border-red-500 shadow-[0px_0px_0px_2px_#0a0a0a,0px_1px_3px_0px_rgba(0,0,0,0.1)]'
                          : 'bg-white border-gray-200 hover:border-red-300'
                      }`}
                    >
                      <div className="bg-red-500 rounded-full size-[11.989px]" />
                      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] text-[13px] text-red-500">
                        Sem saldo adicional
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {abaAtiva === 'propostas' && (
            <div className="content-stretch flex flex-col gap-[15.994px] w-full">
              {/* Formulário Adicionar Nova Proposta */}
              <div className="bg-[#f8fafc] rounded-[6px] w-full" style={{ border: '0.909px solid #cbd5e1' }}>
                <div className="p-[12.9px]">
                  <h4 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] text-[14px] text-[#0F172A] mb-[12px]">
                    Adicionar Nova Proposta
                  </h4>

                  {/* Grid de Campos - Linha 1 */}
                  <div className="grid grid-cols-3 gap-[8px] mb-[8px]">
                    {/* Número Proposta */}
                    <div className="flex flex-col gap-[3.991px]">
                      <label className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] text-[11px] text-[#64748b]">
                        Número Proposta *
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: 2024001"
                        value={novaProposta.numeroProposta}
                        onChange={(e) => setNovaProposta({...novaProposta, numeroProposta: e.target.value})}
                        className="h-[31.79px] px-[8px] py-[6px] rounded-[4px] border-[0.909px] border-[#cbd5e1] font-['Inter:Regular',sans-serif] text-[12px] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                      />
                    </div>

                    {/* Banco */}
                    <div className="flex flex-col gap-[3.991px]">
                      <label className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] text-[11px] text-[#64748b]">
                        Banco *
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: BB"
                        value={novaProposta.banco}
                        onChange={(e) => setNovaProposta({...novaProposta, banco: e.target.value})}
                        className="h-[31.79px] px-[8px] py-[6px] rounded-[4px] border-[0.909px] border-[#cbd5e1] font-['Inter:Regular',sans-serif] text-[12px] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                      />
                    </div>

                    {/* Convênio */}
                    <div className="flex flex-col gap-[3.991px]">
                      <label className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] text-[11px] text-[#64748b]">
                        Convênio *
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: INSS"
                        value={novaProposta.convenio}
                        onChange={(e) => setNovaProposta({...novaProposta, convenio: e.target.value})}
                        className="h-[31.79px] px-[8px] py-[6px] rounded-[4px] border-[0.909px] border-[#cbd5e1] font-['Inter:Regular',sans-serif] text-[12px] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                      />
                    </div>
                  </div>

                  {/* Grid de Campos - Linha 2 */}
                  <div className="grid grid-cols-3 gap-[8px] mb-[10px]">
                    {/* Produto */}
                    <div className="flex flex-col gap-[3.991px]">
                      <label className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] text-[11px] text-[#64748b]">
                        Produto *
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Consignado"
                        value={novaProposta.produto}
                        onChange={(e) => setNovaProposta({...novaProposta, produto: e.target.value})}
                        className="h-[31.79px] px-[8px] py-[6px] rounded-[4px] border-[0.909px] border-[#cbd5e1] font-['Inter:Regular',sans-serif] text-[12px] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                      />
                    </div>

                    {/* Valor Contrato */}
                    <div className="flex flex-col gap-[3.991px]">
                      <label className="font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] text-[11px] text-[#64748b]">
                        Valor Contrato
                      </label>
                      <input
                        type="text"
                        placeholder="R$ 0,00"
                        value={novaProposta.valorContrato}
                        onChange={(e) => setNovaProposta({...novaProposta, valorContrato: e.target.value})}
                        className="h-[31.79px] px-[8px] py-[6px] rounded-[4px] border-[0.909px] border-[#cbd5e1] font-['Inter:Regular',sans-serif] text-[12px] focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                      />
                    </div>
                  </div>

                  {/* Botão Adicionar */}
                  <button
                    onClick={handleAdicionarProposta}
                    className="bg-[#2563EB] h-[29.986px] px-[12px] rounded-[6px] flex items-center gap-[8px] hover:bg-[#1d4ed8] transition-colors"
                  >
                    <Plus size={14} className="text-white" />
                    <span className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] text-[12px] text-white">
                      Adicionar Proposta
                    </span>
                  </button>
                </div>
              </div>

              {/* Lista de Propostas Cadastradas */}
              <div className="rounded-[10px] border-[#93c5fd] border-[0.909px] w-full">
                <div className="box-border flex flex-col gap-[11.989px] p-[16.903px]">
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#1e40af] text-[16px]">
                    Propostas Cadastradas
                  </h3>

                  {propostas.length === 0 ? (
                    <div className="box-border flex flex-col gap-[1.989px] items-center justify-center p-[20px] rounded-[8px] border-[#93c5fd] border-[1.818px] border-dashed">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] text-[13px] text-[#64748b]">
                        Nenhuma proposta cadastrada
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] text-[11px] text-[#94a3b8]">
                        Adicione propostas usando o formulário acima
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-[12px]">
                      {propostas.map((proposta) => (
                        <div key={proposta.id} className="bg-white rounded-[8px] p-[12px] border border-[#e2e8f0] shadow-sm">
                          <div className="grid grid-cols-5 gap-[12px]">
                            <div>
                              <p className="font-['Inter:Medium',sans-serif] text-[10px] text-[#64748b] mb-[2px]">Nº Proposta</p>
                              <p className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#0F172A]">{proposta.numeroProposta}</p>
                            </div>
                            <div>
                              <p className="font-['Inter:Medium',sans-serif] text-[10px] text-[#64748b] mb-[2px]">Banco</p>
                              <p className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#0F172A]">{proposta.banco}</p>
                            </div>
                            <div>
                              <p className="font-['Inter:Medium',sans-serif] text-[10px] text-[#64748b] mb-[2px]">Convênio</p>
                              <p className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#0F172A]">{proposta.convenio}</p>
                            </div>
                            <div>
                              <p className="font-['Inter:Medium',sans-serif] text-[10px] text-[#64748b] mb-[2px]">Produto</p>
                              <p className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#0F172A]">{proposta.produto}</p>
                            </div>
                            <div>
                              <p className="font-['Inter:Medium',sans-serif] text-[10px] text-[#64748b] mb-[2px]">Valor</p>
                              <p className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#0F172A]">
                                {proposta.valorContrato > 0 ? `R$ ${proposta.valorContrato.toLocaleString('pt-BR', {minimumFractionDigits: 2})}` : '-'}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {abaAtiva === 'observacoes' && (
            <div className="content-stretch flex flex-col gap-[15.994px] w-full">
              {/* Formulário Adicionar Observação */}
              <div className="rounded-[10px] border-[#93c5fd] border-[0.909px] w-full">
                <div className="box-border flex flex-col p-[16.903px]">
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#1e40af] text-[16px] mb-[14px]">
                    Adicionar Observação
                  </h3>

                  {/* TextArea */}
                  <textarea
                    value={novaObservacao}
                    onChange={(e) => setNovaObservacao(e.target.value)}
                    className="h-[100px] w-full px-[12px] py-[8px] rounded-[6px] border-[0.909px] border-[#cbd5e1] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:ring-2 focus:ring-[#2563EB] resize-none mb-[16px]"
                    placeholder="Digite sua observação sobre este atendimento..."
                  />

                  {/* Botão Salvar */}
                  <button
                    onClick={handleAdicionarObservacao}
                    className="bg-[#2563EB] h-[29.986px] px-[12px] rounded-[6px] flex items-center gap-[6px] hover:bg-[#1d4ed8] transition-colors self-start"
                  >
                    <span className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] text-[12px] text-center text-white">
                      Salvar
                    </span>
                  </button>
                </div>
              </div>

              {/* Observações Adicionadas */}
              <div className="rounded-[10px] border-[#93c5fd] border-[0.909px] w-full">
                <div className="box-border flex flex-col gap-[11.989px] p-[16.903px]">
                  <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] text-[#1e40af] text-[16px]">
                    Observações Adicionadas
                  </h3>

                  {observacoes.length === 0 ? (
                    <div className="box-border flex flex-col gap-[1.989px] items-center justify-center p-[20px] rounded-[8px] border-[#93c5fd] border-[1.818px] border-dashed">
                      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] text-[13px] text-[#64748b]">
                        Nenhuma observação adicionada
                      </p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] text-[11px] text-[#94a3b8]">
                        Adicione observações usando o formulário acima
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-[12px]">
                      {observacoes.map((observacao) => (
                        <div key={observacao.id} className="bg-white rounded-[8px] p-[12px] border border-[#e2e8f0] shadow-sm">
                          <div className="flex items-center gap-[16px] mb-[8px]">
                            <div>
                              <p className="font-['Inter:Medium',sans-serif] text-[10px] text-[#64748b]">Data/Hora</p>
                              <p className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#0F172A]">{observacao.data} às {observacao.hora}</p>
                            </div>
                            <div>
                              <p className="font-['Inter:Medium',sans-serif] text-[10px] text-[#64748b]">Usuário</p>
                              <p className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#0F172A]">{observacao.usuario}</p>
                            </div>
                          </div>
                          <div className="border-t border-gray-200 pt-[8px]">
                            <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#0F172A] leading-[19.5px]">{observacao.texto}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Botões */}
          <div className="flex gap-[10px] items-center justify-end w-full pt-[0.909px] border-t border-gray-200">
            <button
              onClick={onFechar}
              className="h-[37.301px] w-[75.597px] rounded-[6px] border-[#cbd5e1] border-[0.909px] hover:bg-gray-50 transition-colors"
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] text-[13px] text-center text-[#64748b]">
                Fechar
              </p>
            </button>
            <button
              onClick={handleSalvar}
              className="bg-[#2563EB] h-[35.483px] w-[139.19px] rounded-[6px] hover:bg-[#1d4ed8] transition-colors"
            >
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] text-[13px] text-center text-white">
                Salvar Alterações
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}