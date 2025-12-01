import { useState } from 'react';
import { Upload, Play, Download, CheckCircle, Loader2, FileText, XCircle, TrendingUp, FileSpreadsheet } from 'lucide-react';

interface Digitacao {
  id: string;
  cliente: string;
  cpf: string;
  proposta: string;
  status: 'sucesso' | 'erro' | 'processando';
  mensagem: string;
  dataHora: string;
  loteId: string;
  linkFormalizacao?: string;
}

type StatusProcessamento = 'idle' | 'processando' | 'concluido';

export function Processamentos() {
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [nomeArquivo, setNomeArquivo] = useState('');
  const [credenciais, setCredenciais] = useState({ usuario: '', senha: '', url: '' });
  const [statusProcessamento, setStatusProcessamento] = useState<StatusProcessamento>('idle');
  const [progresso, setProgresso] = useState(0);
  const [modalDetalhesAberto, setModalDetalhesAberto] = useState(false);
  const [digitacoesAtual, setDigitacoesAtual] = useState<Digitacao[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setArquivo(file);
    }
  };

  const handleUploadClick = () => {
    document.getElementById('file-upload')?.click();
  };

  const handleIniciarProcessamento = () => {
    if (!arquivo || !credenciais.usuario || !credenciais.senha) {
      alert('Por favor, preencha todos os campos e faça o upload do arquivo.');
      return;
    }

    const loteId = `lote-${String(Date.now()).slice(-3)}`;
    setStatusProcessamento('processando');
    setProgresso(0);
    setDigitacoesAtual([]);

    const totalItens = 100;
    const itensPorLote = 10;
    let processados = 0;

    const intervalo = setInterval(() => {
      processados += itensPorLote;
      const percentual = Math.min((processados / totalItens) * 100, 100);
      setProgresso(percentual);

      const novasDigitacoes: Digitacao[] = Array.from({ length: itensPorLote }, (_, i) => {
        const sucesso = Math.random() > 0.2;
        return {
          id: `${Date.now()}-${i}`,
          cliente: `Cliente ${processados + i}`,
          cpf: `${Math.floor(Math.random() * 100000000000)}`.padStart(11, '0'),
          proposta: `PROP${Math.floor(Math.random() * 100000)}`.padStart(10, '0'),
          status: sucesso ? 'sucesso' : 'erro',
          mensagem: sucesso ? 'Digitação realizada com sucesso' : 'Erro na validação do CPF',
          dataHora: new Date().toLocaleString('pt-BR'),
          loteId,
          linkFormalizacao: sucesso ? `https://sistema.facta.com.br/proposta/${Math.floor(Math.random() * 100000)}` : undefined
        };
      });

      setDigitacoesAtual(prev => [...novasDigitacoes, ...prev]);

      if (percentual >= 100) {
        clearInterval(intervalo);
        setStatusProcessamento('concluido');
      }
    }, 1000);
  };

  const handleExportarResultado = () => {
    const headers = ['Cliente', 'CPF', 'Proposta', 'Status', 'Mensagem', 'Data/Hora'];
    const csvContent = [
      headers.join(';'),
      ...digitacoesAtual.map(d => 
        [d.cliente, d.cpf, d.proposta, d.status, d.mensagem, d.dataHora].join(';')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `resultado_processamento_${new Date().getTime()}.csv`;
    link.click();
  };

  const handleExportarPlanilhaModelo = () => {
    // Definir as colunas do modelo
    const colunas = [
      'CPF',
      'Nome',
      'Matricula',
      'Data_Nascimento',
      'Margem_Disponivel',
      'Valor_Parcela',
      'Numero_Parcelas',
      'Banco',
      'Data_Digitacao',
      'Status'
    ];

    // Criar linhas de exemplo
    const exemplo1 = [
      '123.456.789-00',
      'João da Silva',
      'MAT001',
      '01/01/1980',
      'R$ 5.000,00',
      'R$ 250,00',
      '24',
      'Banco do Brasil',
      '01/12/2024',
      'Pendente'
    ];

    const exemplo2 = [
      '987.654.321-00',
      'Maria Santos',
      'MAT002',
      '15/05/1985',
      'R$ 3.500,00',
      'R$ 180,00',
      '36',
      'Caixa Econômica',
      '01/12/2024',
      'Aprovado'
    ];

    // Montar o CSV
    const linhas = [
      colunas.join(','),
      exemplo1.join(','),
      exemplo2.join(','),
      // Linha vazia para começar a preencher
      ',,,,,,,,,,'
    ];

    const csv = linhas.join('\n');

    // Criar blob e fazer download
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'modelo_importacao_digitacoes.csv');
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const digitacoesComSucesso = digitacoesAtual.filter(d => d.status === 'sucesso').length;
  const digitacoesComErro = digitacoesAtual.filter(d => d.status === 'erro').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-[20px]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-[20px]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] text-[22px] text-[#2d2d2d]">
            Digitações
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[2px]">
            Configure e execute seus processamentos
          </p>
        </div>

        {/* Configuração */}
        <div className="bg-white rounded-[8px] p-[20px] shadow-sm border border-[#e0e0e0] mb-[16px]">
          <div className="flex items-center gap-[10px] mb-[16px]">
            <div className="flex items-center justify-center w-[36px] h-[36px] bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe] rounded-[8px]">
              <FileText size={18} className="text-[#2563EB]" />
            </div>
            <div>
              <h2 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#2d2d2d]">
                Configuração de Processamento
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#8c8c8f]">
                Configure as credenciais e o arquivo para processamento
              </p>
            </div>
          </div>

          {/* Credenciais e Upload */}
          <div className="grid grid-cols-2 gap-[12px] mb-[12px]">
            <div className="flex flex-col gap-[6px]">
              <label className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#2d2d2d]">
                Usuário Facta
              </label>
              <input
                type="text"
                value={credenciais.usuario}
                onChange={(e) => setCredenciais({ ...credenciais, usuario: e.target.value })}
                placeholder="Digite seu usuário"
                className="px-[12px] py-[8px] border border-[#e0e0e0] rounded-[6px] font-['Inter:Regular',sans-serif] text-[13px] text-[#2d2d2d] focus:outline-none focus:border-[#2563EB] transition-all"
                disabled={statusProcessamento === 'processando'}
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#2d2d2d]">
                Senha Facta
              </label>
              <input
                type="password"
                value={credenciais.senha}
                onChange={(e) => setCredenciais({ ...credenciais, senha: e.target.value })}
                placeholder="Digite sua senha"
                className="px-[12px] py-[8px] border border-[#e0e0e0] rounded-[6px] font-['Inter:Regular',sans-serif] text-[13px] text-[#2d2d2d] focus:outline-none focus:border-[#2563EB] transition-all"
                disabled={statusProcessamento === 'processando'}
              />
            </div>
          </div>

          {/* Upload de Arquivo */}
          <div className="grid grid-cols-2 gap-[12px] mb-[16px]">
            <div className="flex flex-col gap-[6px]">
              <label className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#2d2d2d]">
                Nome do Arquivo
              </label>
              <input
                type="text"
                value={nomeArquivo}
                onChange={(e) => setNomeArquivo(e.target.value)}
                placeholder="Digite o nome do arquivo"
                className="px-[12px] py-[8px] border border-[#e0e0e0] rounded-[6px] font-['Inter:Regular',sans-serif] text-[13px] text-[#2d2d2d] focus:outline-none focus:border-[#2563EB] transition-all"
                disabled={statusProcessamento === 'processando'}
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#2d2d2d]">
                Arquivo de Dados
              </label>
              <div className="flex items-center gap-[8px]">
                <button
                  onClick={handleUploadClick}
                  disabled={statusProcessamento === 'processando'}
                  className="flex-1 flex items-center justify-center gap-[6px] bg-[#f0fdf4] border border-[#86efac] hover:bg-[#dcfce7] hover:border-[#4ade80] transition-all px-[12px] py-[8px] rounded-[6px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Upload size={16} className="text-[#16a34a]" />
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#16a34a]">
                    Selecionar
                  </span>
                </button>
                <button
                  onClick={handleExportarPlanilhaModelo}
                  disabled={statusProcessamento === 'processando'}
                  title="Planilha modelo"
                  className="flex-1 flex items-center justify-center gap-[6px] bg-[#eff6ff] border border-[#93c5fd] hover:bg-[#dbeafe] hover:border-[#60a5fa] transition-all px-[12px] py-[8px] rounded-[6px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FileSpreadsheet size={16} className="text-[#2563EB]" />
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2563EB]">
                    Planilha Modelo
                  </span>
                </button>
              </div>
            </div>
          </div>
          {arquivo && (
            <div className="flex items-center gap-[6px] px-[10px] py-[6px] bg-gradient-to-r from-[#dbeafe] to-[#bfdbfe] rounded-[6px] mb-[16px] w-fit">
              <CheckCircle size={14} className="text-[#2563EB]" />
              <span className="font-['Inter:Regular',sans-serif] text-[12px] text-[#2563EB]">
                {arquivo.name}
              </span>
            </div>
          )}
          <input
            id="file-upload"
            type="file"
            accept=".csv,.xlsx,.xls"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Botões de Ação */}
          <div className="flex items-center justify-between pt-[16px] border-t border-[#e0e0e0]">
            <div>
              {statusProcessamento === 'concluido' && (
                <button
                  onClick={handleExportarResultado}
                  className="flex items-center gap-[6px] bg-white border border-[#e0e0e0] hover:bg-[#f9fafb] transition-all px-[16px] py-[8px] rounded-[6px]"
                >
                  <Download size={16} className="text-[#2d2d2d]" />
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d]">
                    Exportar Resultado
                  </span>
                </button>
              )}
            </div>
            <button
              onClick={handleIniciarProcessamento}
              disabled={!arquivo || !credenciais.usuario || !credenciais.senha || statusProcessamento === 'processando'}
              className="flex items-center gap-[8px] bg-gradient-to-r from-[#2563EB] to-[#1e40af] hover:shadow-lg transition-all px-[20px] py-[8px] rounded-[6px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {statusProcessamento === 'processando' ? (
                <>
                  <Loader2 size={16} className="text-white animate-spin" />
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-white">
                    Processando...
                  </span>
                </>
              ) : (
                <>
                  <Play size={16} className="text-white" />
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-white">
                    Iniciar Processamento
                  </span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Status do Processamento */}
        {(statusProcessamento === 'processando' || statusProcessamento === 'concluido') && (
          <div className="bg-white rounded-[8px] p-[20px] shadow-sm border border-[#e0e0e0]">
            <div className="flex items-center justify-between mb-[16px]">
              <div className="flex items-center gap-[10px]">
                <div className={`flex items-center justify-center w-[36px] h-[36px] rounded-[8px] ${
                  statusProcessamento === 'processando' 
                    ? 'bg-gradient-to-br from-[#fef3c7] to-[#fde68a]' 
                    : 'bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe]'
                }`}>
                  {statusProcessamento === 'processando' && <Loader2 size={18} className="text-[#3B82F6] animate-spin" />}
                  {statusProcessamento === 'concluido' && <CheckCircle size={18} className="text-[#2563EB]" />}
                </div>
                <div>
                  <h2 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#2d2d2d]">
                    Status do Processamento
                  </h2>
                  <p className={`font-['Inter:Regular',sans-serif] text-[12px] ${
                    statusProcessamento === 'processando' ? 'text-[#3B82F6]' : 'text-[#2563EB]'
                  }`}>
                    {statusProcessamento === 'processando' ? 'Em Processamento' : 'Concluído com Sucesso'}
                  </p>
                </div>
              </div>
            </div>

            {/* Barra de Progresso */}
            <div className="mb-[16px]">
              <div className="flex items-center justify-between mb-[8px]">
                <span className="font-['Inter:Regular',sans-serif] text-[12px] text-[#8c8c8f]">
                  Progresso
                </span>
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2563EB]">
                  {progresso.toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-[#f3f4f6] rounded-full h-[8px] overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#2563EB] to-[#1e40af] h-[8px] rounded-full transition-all duration-500"
                  style={{ width: `${progresso}%` }}
                />
              </div>
            </div>

            {/* Resumo e Botão */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10px]">
                <div className="bg-[#f9fafb] rounded-[8px] px-[14px] py-[10px] flex items-center gap-[8px] border border-[#e0e0e0]">
                  <TrendingUp size={14} className="text-[#8c8c8f]" />
                  <div className="flex flex-col">
                    <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">
                      Total
                    </span>
                    <span className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#2d2d2d]">
                      {digitacoesAtual.length}
                    </span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe] rounded-[8px] px-[14px] py-[10px] flex items-center gap-[8px] border border-[#2563EB]/20">
                  <CheckCircle size={14} className="text-[#2563EB]" />
                  <div className="flex flex-col">
                    <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#2563EB]">
                      Sucesso
                    </span>
                    <span className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#2563EB]">
                      {digitacoesComSucesso}
                    </span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#fef2f2] to-[#fee2e2] rounded-[8px] px-[14px] py-[10px] flex items-center gap-[8px] border border-[#e53935]/20">
                  <XCircle size={14} className="text-[#e53935]" />
                  <div className="flex flex-col">
                    <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#e53935]">
                      Erro
                    </span>
                    <span className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#e53935]">
                      {digitacoesComErro}
                    </span>
                  </div>
                </div>
              </div>
              {digitacoesAtual.length > 0 && (
                <button
                  onClick={() => setModalDetalhesAberto(true)}
                  className="flex items-center gap-[6px] bg-white border border-[#e0e0e0] hover:bg-[#f9fafb] hover:border-[#2563EB] transition-all px-[16px] py-[8px] rounded-[6px]"
                >
                  <FileText size={14} className="text-[#2d2d2d]" />
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d]">
                    Ver Detalhes
                  </span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Modal de Detalhes */}
        {modalDetalhesAberto && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center z-50 p-[20px]" onClick={() => setModalDetalhesAberto(false)}>
            <div className="bg-white rounded-[12px] w-[900px] max-h-[85vh] flex flex-col shadow-xl" onClick={(e) => e.stopPropagation()}>
              {/* Header do Modal */}
              <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-[#e0e0e0]">
                <div>
                  <h2 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d]">
                    Detalhes do Processamento
                  </h2>
                  <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#9ca3af] mt-[4px]">
                    {digitacoesAtual.length} digitações processadas
                  </p>
                </div>
                <button
                  onClick={() => setModalDetalhesAberto(false)}
                  className="flex items-center justify-center w-[36px] h-[36px] text-[#9ca3af] hover:text-[#2d2d2d] hover:bg-[#f9fafb] rounded-[10px] transition-all"
                >
                  <XCircle size={20} />
                </button>
              </div>

              {/* Resumo */}
              <div className="px-[32px] py-[20px] border-b border-[#f0f0f0] bg-gradient-to-br from-[#f9fafb] to-white">
                <div className="flex items-center gap-[12px]">
                  <div className="bg-white rounded-[14px] px-[20px] py-[14px] flex items-center gap-[10px] shadow-sm border border-[#f0f0f0]">
                    <TrendingUp size={18} className="text-[#9ca3af]" />
                    <div className="flex flex-col">
                      <span className="font-['Inter:Regular',sans-serif] text-[11px] text-[#9ca3af]">
                        Total
                      </span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#2d2d2d]">
                        {digitacoesAtual.length}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-[14px] px-[20px] py-[14px] flex items-center gap-[10px] shadow-sm border border-[#2563EB]/20">
                    <CheckCircle size={18} className="text-[#2563EB]" />
                    <div className="flex flex-col">
                      <span className="font-['Inter:Regular',sans-serif] text-[11px] text-[#2563EB]">
                        Sucesso
                      </span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#2563EB]">
                        {digitacoesComSucesso}
                      </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-[14px] px-[20px] py-[14px] flex items-center gap-[10px] shadow-sm border border-[#e53935]/20">
                    <XCircle size={18} className="text-[#e53935]" />
                    <div className="flex flex-col">
                      <span className="font-['Inter:Regular',sans-serif] text-[11px] text-[#e53935]">
                        Erro
                      </span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#e53935]">
                        {digitacoesComErro}
                      </span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <button
                      onClick={handleExportarResultado}
                      className="flex items-center gap-[8px] bg-gradient-to-r from-[#2563EB] to-[#1e40af] hover:shadow-lg hover:shadow-[#2563EB]/20 transition-all px-[20px] py-[12px] rounded-[12px]"
                    >
                      <Download size={16} className="text-white" />
                      <span className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-white">
                        Exportar CSV
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Grid de Detalhes */}
              <div className="flex-1 overflow-hidden flex flex-col">
                {/* Header do Grid */}
                <div className="bg-[#f9fafb] border-b border-[#f0f0f0] flex items-center h-[48px] px-[32px]">
                  <div className="w-[150px] font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#9ca3af] uppercase tracking-wide">
                    Data/Hora
                  </div>
                  <div className="w-[150px] font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#9ca3af] uppercase tracking-wide">
                    CPF
                  </div>
                  <div className="w-[160px] font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#9ca3af] uppercase tracking-wide">
                    Proposta
                  </div>
                  <div className="w-[120px] font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#9ca3af] uppercase tracking-wide text-center">
                    Status
                  </div>
                  <div className="flex-1 font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#9ca3af] uppercase tracking-wide">
                    Link gerado
                  </div>
                </div>

                {/* Linhas do Grid */}
                <div className="flex-1 overflow-y-auto">
                  {digitacoesAtual.map((digitacao, index) => (
                    <div
                      key={digitacao.id}
                      className={`flex items-center h-[56px] px-[32px] border-b border-[#f0f0f0] hover:bg-[#f9fafb] transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'
                      }`}
                    >
                      <div className="w-[150px] font-['Inter:Regular',sans-serif] text-[13px] text-[#2d2d2d]">
                        {digitacao.dataHora}
                      </div>
                      <div className="w-[150px] font-['Inter:Regular',sans-serif] text-[13px] text-[#2d2d2d]">
                        {digitacao.cpf}
                      </div>
                      <div className="w-[160px] font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d]">
                        {digitacao.proposta}
                      </div>
                      <div className="w-[120px] flex justify-center">
                        {digitacao.status === 'sucesso' ? (
                          <div className="flex items-center gap-[6px] bg-gradient-to-r from-[#dbeafe] to-[#bfdbfe] px-[10px] py-[4px] rounded-full border border-[#2563EB]/20">
                            <CheckCircle size={12} className="text-[#2563EB]" />
                            <span className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#2563EB]">
                              Sucesso
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-[6px] bg-gradient-to-r from-[#fef2f2] to-[#fee2e2] px-[10px] py-[4px] rounded-full border border-[#e53935]/20">
                            <XCircle size={12} className="text-[#e53935]" />
                            <span className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#e53935]">
                              Erro
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        {digitacao.linkFormalizacao && (
                          <a
                            href={digitacao.linkFormalizacao}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-['Inter:Regular',sans-serif] text-[12px] text-[#2563EB] hover:text-[#1e40af] hover:underline transition-colors truncate block"
                          >
                            {digitacao.linkFormalizacao}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}