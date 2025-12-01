import { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, FileText, TrendingUp, Clock, CheckCircle, X, ExternalLink, Download } from 'lucide-react';

interface Proposta {
  id: number;
  banco: string;
  cpf: string;
  cliente: string;
  produto: string;
  vendedor: string;
  dataAtualizacao: string;
  status: 'pago' | 'em-andamento' | 'pendente' | 'recusada' | 'falha';
  valor: number;
  linkFormalizacao: string;
  observacaoFacta: string;
}

export function Propostas() {
  const [propostas] = useState<Proposta[]>([
    {
      id: 1,
      banco: 'FACTA',
      cpf: '123.456.789-10',
      cliente: 'Elisabete Machado Silva',
      produto: 'Aumento INSS',
      vendedor: 'João Silva',
      dataAtualizacao: '29/07/2025',
      status: 'pago',
      valor: 25800.50,
      linkFormalizacao: 'https://formalizacao.facta.com.br/proposta/123456',
      observacaoFacta: 'Proposta aprovada e paga com sucesso. Cliente recebeu o crédito em 48 horas.'
    },
    {
      id: 2,
      banco: 'FACTA',
      cpf: '123.456.789-10',
      cliente: 'Elisabete Machado Silva',
      produto: 'Aumento INSS',
      vendedor: 'João Silva',
      dataAtualizacao: '29/07/2025',
      status: 'pago',
      valor: 18500.00,
      linkFormalizacao: 'https://formalizacao.facta.com.br/proposta/123457',
      observacaoFacta: 'Documentação aprovada. Pagamento efetivado conforme prazo estabelecido.'
    },
    {
      id: 3,
      banco: 'FACTA',
      cpf: '123.456.789-10',
      cliente: 'Elisabete Machado Silva',
      produto: 'Aumento INSS',
      vendedor: 'João Silva',
      dataAtualizacao: '29/07/2025',
      status: 'em-andamento',
      valor: 32100.75,
      linkFormalizacao: 'https://formalizacao.facta.com.br/proposta/123458',
      observacaoFacta: 'Aguardando análise final de crédito. Previsão de conclusão em 24 horas.'
    },
    {
      id: 4,
      banco: 'FACTA',
      cpf: '123.456.789-10',
      cliente: 'Elisabete Machado Silva',
      produto: 'Aumento INSS',
      vendedor: 'João Silva',
      dataAtualizacao: '29/07/2025',
      status: 'em-andamento',
      valor: 15300.00,
      linkFormalizacao: 'https://formalizacao.facta.com.br/proposta/123459',
      observacaoFacta: 'Proposta em processamento. Documentação sendo validada pela equipe técnica.'
    },
    {
      id: 5,
      banco: 'FACTA',
      cpf: '123.456.789-10',
      cliente: 'Elisabete Machado Silva',
      produto: 'Aumento INSS',
      vendedor: 'João Silva',
      dataAtualizacao: '29/07/2025',
      status: 'pendente',
      valor: 21750.25,
      linkFormalizacao: 'https://formalizacao.facta.com.br/proposta/123460',
      observacaoFacta: 'Pendente envio de documentação adicional. Aguardando comprovante de residência atualizado.'
    },
    {
      id: 6,
      banco: 'FACTA',
      cpf: '123.456.789-10',
      cliente: 'Elisabete Machado Silva',
      produto: 'Aumento INSS',
      vendedor: 'João Silva',
      dataAtualizacao: '29/07/2025',
      status: 'recusada',
      valor: 12400.00,
      linkFormalizacao: 'https://formalizacao.facta.com.br/proposta/123461',
      observacaoFacta: 'Proposta recusada por não atender aos critérios de crédito. Score insuficiente.'
    },
    {
      id: 7,
      banco: 'FACTA',
      cpf: '123.456.789-10',
      cliente: 'Elisabete Machado Silva',
      produto: 'Aumento INSS',
      vendedor: 'João Silva',
      dataAtualizacao: '29/07/2025',
      status: 'falha',
      valor: 9800.50,
      linkFormalizacao: 'https://formalizacao.facta.com.br/proposta/123462',
      observacaoFacta: 'Falha no processamento. Sistema bancário temporariamente indisponível.'
    }
  ]);

  const [busca, setBusca] = useState('');
  const [filtroStatus, setFiltroStatus] = useState<'todos' | 'pago' | 'em-andamento' | 'pendente' | 'recusada' | 'falha'>('todos');
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [itensPorPagina, setItensPorPagina] = useState(7);
  const [propostaSelecionada, setPropostaSelecionada] = useState<Proposta | null>(null);
  const [modalAberto, setModalAberto] = useState(false);

  const getStatusConfig = (status: string) => {
    const configs = {
      'pago': {
        label: 'Pago',
        bg: 'bg-[#26a96c]',
        text: 'text-white',
        bgLight: 'bg-[#dcfce7]',
        textLight: 'text-[#166534]'
      },
      'em-andamento': {
        label: 'Em andamento',
        bg: 'bg-[#5775d0]',
        text: 'text-white',
        bgLight: 'bg-[#dbeafe]',
        textLight: 'text-[#1e40af]'
      },
      'pendente': {
        label: 'Pendente',
        bg: 'bg-[#ee934f]',
        text: 'text-white',
        bgLight: 'bg-[#fed7aa]',
        textLight: 'text-[#9a3412]'
      },
      'recusada': {
        label: 'Recusada',
        bg: 'bg-[#ef4444]',
        text: 'text-white',
        bgLight: 'bg-[#fee2e2]',
        textLight: 'text-[#991b1b]'
      },
      'falha': {
        label: 'Falha',
        bg: 'bg-[#fca5a5]',
        text: 'text-[#7f1d1d]',
        bgLight: 'bg-[#fef2f2]',
        textLight: 'text-[#991b1b]'
      }
    };
    return configs[status as keyof typeof configs];
  };

  const calcularMetricas = () => {
    const totalPago = propostas.filter(p => p.status === 'pago').length;
    const valorPago = propostas.filter(p => p.status === 'pago').reduce((acc, p) => acc + p.valor, 0);
    
    const totalEmAndamento = propostas.filter(p => p.status === 'em-andamento').length;
    const valorEmAndamento = propostas.filter(p => p.status === 'em-andamento').reduce((acc, p) => acc + p.valor, 0);
    
    const totalPendente = propostas.filter(p => p.status === 'pendente').length;
    const valorPendente = propostas.filter(p => p.status === 'pendente').reduce((acc, p) => acc + p.valor, 0);

    return {
      pago: { total: totalPago, valor: valorPago },
      emAndamento: { total: totalEmAndamento, valor: valorEmAndamento },
      pendente: { total: totalPendente, valor: valorPendente }
    };
  };

  const metricas = calcularMetricas();

  const propostasFiltradas = propostas.filter(proposta => {
    const matchBusca = 
      proposta.banco.toLowerCase().includes(busca.toLowerCase()) ||
      proposta.cpf.includes(busca) ||
      proposta.cliente.toLowerCase().includes(busca.toLowerCase()) ||
      proposta.produto.toLowerCase().includes(busca.toLowerCase());
    
    const matchStatus = filtroStatus === 'todos' || proposta.status === filtroStatus;

    return matchBusca && matchStatus;
  });

  const totalPaginas = Math.ceil(propostasFiltradas.length / itensPorPagina);
  const indexInicial = (paginaAtual - 1) * itensPorPagina;
  const indexFinal = indexInicial + itensPorPagina;
  const propostasPaginadas = propostasFiltradas.slice(indexInicial, indexFinal);

  const proximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const handleExportarArquivo = () => {
    // Criar cabeçalhos do CSV
    const headers = ['Banco', 'CPF', 'Cliente', 'Produto', 'Vendedor', 'Data de Atualização', 'Status', 'Valor', 'Link de Formalização', 'Observação Facta'];
    
    // Mapear os dados filtrados para linhas do CSV
    const rows = propostasFiltradas.map(proposta => [
      proposta.banco,
      proposta.cpf,
      proposta.cliente,
      proposta.produto,
      proposta.vendedor,
      proposta.dataAtualizacao,
      getStatusConfig(proposta.status).label,
      `R$ ${proposta.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      proposta.linkFormalizacao,
      proposta.observacaoFacta
    ]);

    // Combinar cabeçalhos e linhas
    const csvContent = [
      headers.join(';'),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(';'))
    ].join('\n');

    // Criar blob e fazer download
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `propostas_${new Date().toLocaleDateString('pt-BR').replace(/\//g, '-')}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-full overflow-y-auto bg-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto p-[24px]">
        {/* Header */}
        <div className="mb-[20px]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] text-[22px] text-[#2d2d2d]">
            Propostas
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[2px]">
            Acompanhe todas as propostas formalizadas e seus status
          </p>
        </div>

        {/* Cards de Métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mb-[24px]">
          {/* Card Pago */}
          <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#e2e8f0]">
            <div className="flex items-center justify-between mb-[12px]">
              <div className="inline-flex items-center justify-center px-[8px] py-[2px] bg-[#26a96c] rounded-full w-[85px]">
                <span className="font-['Inter:Medium',sans-serif] text-[9px] text-white whitespace-nowrap">
                  Pago
                </span>
              </div>
              <div className="flex items-center justify-center w-[36px] h-[36px] bg-gradient-to-br from-[#26a96c] to-[#059669] rounded-[8px]">
                <CheckCircle size={18} className="text-white" />
              </div>
            </div>
            <div className="bg-[#f9f9f9] h-[6px] rounded-full mb-[8px] overflow-hidden">
              <div 
                className="bg-[#525051] h-full rounded-full transition-all"
                style={{ width: `${(metricas.pago.total / propostas.length) * 100}%` }}
              />
            </div>
            <div className="flex items-end justify-between">
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#525051]">
                {metricas.pago.total}
              </p>
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#8c8c8f]">
                R$ {metricas.pago.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>

          {/* Card Em Andamento */}
          <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#e2e8f0]">
            <div className="flex items-center justify-between mb-[12px]">
              <div className="inline-flex items-center justify-center px-[8px] py-[2px] bg-[#5775d0] rounded-full w-[85px]">
                <span className="font-['Inter:Medium',sans-serif] text-[9px] text-white whitespace-nowrap">
                  Em andamento
                </span>
              </div>
              <div className="flex items-center justify-center w-[36px] h-[36px] bg-gradient-to-br from-[#5775d0] to-[#3b5998] rounded-[8px]">
                <Clock size={18} className="text-white" />
              </div>
            </div>
            <div className="bg-[#f9f9f9] h-[6px] rounded-full mb-[8px] overflow-hidden">
              <div 
                className="bg-[#525051] h-full rounded-full transition-all"
                style={{ width: `${(metricas.emAndamento.total / propostas.length) * 100}%` }}
              />
            </div>
            <div className="flex items-end justify-between">
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#525051]">
                {metricas.emAndamento.total}
              </p>
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#8c8c8f]">
                R$ {metricas.emAndamento.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>

          {/* Card Pendente */}
          <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#e2e8f0]">
            <div className="flex items-center justify-between mb-[12px]">
              <div className="inline-flex items-center justify-center px-[8px] py-[2px] bg-[#ee934f] rounded-full w-[85px]">
                <span className="font-['Inter:Medium',sans-serif] text-[9px] text-white whitespace-nowrap">
                  Pendente
                </span>
              </div>
              <div className="flex items-center justify-center w-[36px] h-[36px] bg-gradient-to-br from-[#ee934f] to-[#ea580c] rounded-[8px]">
                <TrendingUp size={18} className="text-white" />
              </div>
            </div>
            <div className="bg-[#f9f9f9] h-[6px] rounded-full mb-[8px] overflow-hidden">
              <div 
                className="bg-[#525051] h-full rounded-full transition-all"
                style={{ width: `${(metricas.pendente.total / propostas.length) * 100}%` }}
              />
            </div>
            <div className="flex items-end justify-between">
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#525051]">
                {metricas.pendente.total}
              </p>
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#8c8c8f]">
                R$ {metricas.pendente.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#e2e8f0] mb-[16px]">
          <div className="flex flex-col md:flex-row gap-[12px] items-start md:items-center">
            {/* Busca */}
            <div className="relative flex-1 w-full">
              <Search size={18} className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#8c8c8f]" />
              <input
                type="text"
                placeholder="Buscar por banco, CPF, cliente ou produto..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full h-[40px] pl-[40px] pr-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
              />
            </div>

            {/* Filtro Status */}
            <select
              value={filtroStatus}
              onChange={(e) => setFiltroStatus(e.target.value as any)}
              className="h-[40px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
            >
              <option value="todos">Todos os status</option>
              <option value="pago">Pago</option>
              <option value="em-andamento">Em andamento</option>
              <option value="pendente">Pendente</option>
              <option value="recusada">Recusada</option>
              <option value="falha">Falha</option>
            </select>

            {/* Botão Exportar */}
            <button
              onClick={handleExportarArquivo}
              className="flex items-center gap-[8px] h-[40px] px-[16px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] hover:from-[#1d4ed8] hover:to-[#2563EB] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] shadow-sm hover:shadow-md transition-all"
            >
              <Download size={16} />
              <span>Exportar</span>
            </button>
          </div>
        </div>

        {/* Tabela de Propostas */}
        <div className="bg-white rounded-[12px] shadow-sm border border-[#e2e8f0] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                <tr>
                  <th className="px-[20px] py-[12px] text-left font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Banco
                  </th>
                  <th className="px-[20px] py-[12px] text-left font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    <div>
                      <div>CPF</div>
                      <div className="font-['Inter:Regular',sans-serif] text-[9px] normal-case mt-[2px]">Cliente</div>
                    </div>
                  </th>
                  <th className="px-[20px] py-[12px] text-left font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    <div>
                      <div>Produto</div>
                      <div className="font-['Inter:Regular',sans-serif] text-[9px] normal-case mt-[2px]">Vendedor</div>
                    </div>
                  </th>
                  <th className="px-[20px] py-[12px] text-center font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    <div>
                      <div>Data</div>
                      <div className="font-['Inter:Regular',sans-serif] text-[9px] normal-case mt-[2px]">atualização</div>
                    </div>
                  </th>
                  <th className="px-[20px] py-[12px] text-center font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {propostasPaginadas.map((proposta) => {
                  const statusConfig = getStatusConfig(proposta.status);
                  return (
                    <tr 
                      key={proposta.id} 
                      className="border-b border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors cursor-pointer"
                      onClick={() => {
                        setPropostaSelecionada(proposta);
                        setModalAberto(true);
                      }}
                    >
                      <td className="px-[20px] py-[16px]">
                        <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d]">
                          {proposta.banco}
                        </p>
                      </td>
                      <td className="px-[20px] py-[16px]">
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d]">
                            {proposta.cpf}
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f] mt-[2px]">
                            {proposta.cliente}
                          </p>
                        </div>
                      </td>
                      <td className="px-[20px] py-[16px]">
                        <div>
                          <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#2d2d2d]">
                            {proposta.produto}
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f] mt-[2px] flex items-center gap-[4px]">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <circle cx="6" cy="6" r="5" stroke="#8c8c8f" strokeWidth="1"/>
                              <circle cx="6" cy="6" r="2" fill="#8c8c8f"/>
                            </svg>
                            {proposta.vendedor}
                          </p>
                        </div>
                      </td>
                      <td className="px-[20px] py-[16px] text-center">
                        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f]">
                          {proposta.dataAtualizacao}
                        </p>
                      </td>
                      <td className="px-[20px] py-[16px] text-center">
                        <div className="flex justify-center">
                          <span className={`inline-flex items-center justify-center px-[8px] py-[2px] rounded-full font-['Inter:Semi_Bold',sans-serif] text-[9px] whitespace-nowrap w-[85px] ${statusConfig.bg} ${statusConfig.text}`}>
                            {statusConfig.label}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {propostasPaginadas.length === 0 && (
              <div className="py-[40px] text-center">
                <FileText size={48} className="mx-auto text-[#e2e8f0] mb-[12px]" />
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#8c8c8f]">
                  Nenhuma proposta encontrada
                </p>
              </div>
            )}
          </div>

          {/* Paginação */}
          {propostasPaginadas.length > 0 && (
            <div className="flex items-center justify-between px-[20px] py-[16px] border-t border-[#e2e8f0]">
              <div className="flex items-center gap-[12px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#525051]">
                  {indexInicial + 1}-{Math.min(indexFinal, propostasFiltradas.length)} de {propostasFiltradas.length}
                </p>
                <div className="flex items-center gap-[8px]">
                  <button
                    onClick={paginaAnterior}
                    disabled={paginaAtual === 1}
                    className="p-[6px] rounded-[4px] hover:bg-[#f1f5f9] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronLeft size={16} className="text-[#525051]" />
                  </button>
                  <span className="font-['Inter:Regular',sans-serif] text-[12px] text-[#b4b4b8]">
                    {paginaAtual}/{totalPaginas}
                  </span>
                  <button
                    onClick={proximaPagina}
                    disabled={paginaAtual === totalPaginas}
                    className="p-[6px] rounded-[4px] hover:bg-[#f1f5f9] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <ChevronRight size={16} className="text-[#525051]" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-[8px]">
                <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#b4b4b8]">
                  Linhas por página:
                </p>
                <select
                  value={itensPorPagina}
                  onChange={(e) => {
                    setItensPorPagina(Number(e.target.value));
                    setPaginaAtual(1);
                  }}
                  className="h-[32px] px-[8px] border border-[#e2e8f0] rounded-[4px] font-['Inter:Regular',sans-serif] text-[12px] text-[#8c8c8f] focus:outline-none focus:border-[#2563EB] transition-colors"
                >
                  <option value="7">7</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal de Detalhes da Proposta */}
      {modalAberto && propostaSelecionada && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[12px] w-full max-w-[600px] max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header do Modal */}
            <div className="sticky top-0 bg-white border-b border-[#e2e8f0] px-[24px] py-[20px] flex items-center justify-between rounded-t-[12px]">
              <div>
                <h2 className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#0F172A]">
                  Detalhes da Proposta
                </h2>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[4px]">
                  {propostaSelecionada.cliente} • {propostaSelecionada.cpf}
                </p>
              </div>
              <button
                onClick={() => {
                  setModalAberto(false);
                  setPropostaSelecionada(null);
                }}
                className="p-[8px] hover:bg-[#f1f5f9] rounded-[6px] transition-colors"
              >
                <X size={20} className="text-[#525051]" />
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-[24px] space-y-[24px]">
              {/* Informações da Proposta */}
              <div className="grid grid-cols-2 gap-[16px]">
                <div>
                  <label className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase block mb-[8px]">
                    Banco
                  </label>
                  <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#2d2d2d]">
                    {propostaSelecionada.banco}
                  </p>
                </div>
                <div>
                  <label className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase block mb-[8px]">
                    Produto
                  </label>
                  <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#2d2d2d]">
                    {propostaSelecionada.produto}
                  </p>
                </div>
                <div>
                  <label className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase block mb-[8px]">
                    Vendedor
                  </label>
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#2d2d2d]">
                    {propostaSelecionada.vendedor}
                  </p>
                </div>
                <div>
                  <label className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase block mb-[8px]">
                    Data de Atualização
                  </label>
                  <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#2d2d2d]">
                    {propostaSelecionada.dataAtualizacao}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase block mb-[8px]">
                  Status
                </label>
                <div className="flex">
                  <span className={`inline-flex items-center justify-center px-[8px] py-[2px] rounded-full font-['Inter:Semi_Bold',sans-serif] text-[9px] whitespace-nowrap w-[85px] ${getStatusConfig(propostaSelecionada.status).bg} ${getStatusConfig(propostaSelecionada.status).text}`}>
                    {getStatusConfig(propostaSelecionada.status).label}
                  </span>
                </div>
              </div>

              {/* Link de Formalização */}
              <div>
                <label className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase block mb-[8px]">
                  Link de Formalização
                </label>
                <a
                  href={propostaSelecionada.linkFormalizacao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[8px] px-[16px] py-[12px] bg-[#f8fafc] hover:bg-[#f1f5f9] rounded-[8px] border border-[#e2e8f0] transition-colors group"
                >
                  <ExternalLink size={16} className="text-[#2563EB] group-hover:text-[#1d4ed8]" />
                  <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#2563EB] group-hover:text-[#1d4ed8] break-all">
                    {propostaSelecionada.linkFormalizacao}
                  </span>
                </a>
              </div>

              {/* Observação do Retorno da Facta */}
              <div>
                <label className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase block mb-[8px]">
                  Observação do Retorno da Facta
                </label>
                <div className="px-[16px] py-[12px] bg-[#f8fafc] rounded-[8px] border border-[#e2e8f0]">
                  <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#525051] leading-relaxed">
                    {propostaSelecionada.observacaoFacta}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer do Modal */}
            <div className="sticky bottom-0 bg-white border-t border-[#e2e8f0] px-[24px] py-[16px] flex justify-end rounded-b-[12px]">
              <button
                onClick={() => {
                  setModalAberto(false);
                  setPropostaSelecionada(null);
                }}
                className="px-[20px] py-[10px] bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-[6px] font-['Inter:Semi_Bold',sans-serif] text-[13px] transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}