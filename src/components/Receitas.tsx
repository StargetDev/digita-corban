import { useState } from 'react';
import { Search, DollarSign, Building2, User, Download } from 'lucide-react';

interface ReceitaEmpresa {
  empresaId: number;
  empresaNome: string;
  representanteId?: number;
  representanteNome?: string;
  acessosContratados: number;
  valorAcesso: number;
  totalAcessos: number;
  digitacoesContratadas: number;
  valorDigitacao: number;
  totalDigitacoes: number;
  receitaMensal: number;
  mes: string;
}

interface ReceitasProps {
  usuarioLogado: {
    id: number;
    nome: string;
    email: string;
    senha: string;
    empresa: string;
    empresaId: number;
    perfil: 'master' | 'gestor' | 'vendedor' | 'representante';
  };
}

export function Receitas({ usuarioLogado }: ReceitasProps) {
  const VALOR_POR_ACESSO = 150; // R$ 150 por acesso
  const VALOR_POR_DIGITACAO = 2.50; // R$ 2,50 por digitação

  const [receitas] = useState<ReceitaEmpresa[]>([
    {
      empresaId: 1,
      empresaNome: 'Tech Solutions Ltda',
      representanteId: 4,
      representanteNome: 'Paulo Representante',
      acessosContratados: 10,
      valorAcesso: VALOR_POR_ACESSO,
      totalAcessos: 10 * VALOR_POR_ACESSO,
      digitacoesContratadas: 500,
      valorDigitacao: VALOR_POR_DIGITACAO,
      totalDigitacoes: 500 * VALOR_POR_DIGITACAO,
      receitaMensal: (10 * VALOR_POR_ACESSO) + (500 * VALOR_POR_DIGITACAO),
      mes: 'Novembro/2025'
    },
    {
      empresaId: 2,
      empresaNome: 'Inovação Digital Corp',
      representanteId: 4,
      representanteNome: 'Paulo Representante',
      acessosContratados: 15,
      valorAcesso: VALOR_POR_ACESSO,
      totalAcessos: 15 * VALOR_POR_ACESSO,
      digitacoesContratadas: 1000,
      valorDigitacao: VALOR_POR_DIGITACAO,
      totalDigitacoes: 1000 * VALOR_POR_DIGITACAO,
      receitaMensal: (15 * VALOR_POR_ACESSO) + (1000 * VALOR_POR_DIGITACAO),
      mes: 'Novembro/2025'
    },
    {
      empresaId: 3,
      empresaNome: 'Soluções Prime',
      representanteId: undefined,
      representanteNome: undefined,
      acessosContratados: 8,
      valorAcesso: VALOR_POR_ACESSO,
      totalAcessos: 8 * VALOR_POR_ACESSO,
      digitacoesContratadas: 300,
      valorDigitacao: VALOR_POR_DIGITACAO,
      totalDigitacoes: 300 * VALOR_POR_DIGITACAO,
      receitaMensal: (8 * VALOR_POR_ACESSO) + (300 * VALOR_POR_DIGITACAO),
      mes: 'Novembro/2025'
    },
    {
      empresaId: 4,
      empresaNome: 'Mega Empreendimentos',
      representanteId: undefined,
      representanteNome: undefined,
      acessosContratados: 20,
      valorAcesso: VALOR_POR_ACESSO,
      totalAcessos: 20 * VALOR_POR_ACESSO,
      digitacoesContratadas: 1500,
      valorDigitacao: VALOR_POR_DIGITACAO,
      totalDigitacoes: 1500 * VALOR_POR_DIGITACAO,
      receitaMensal: (20 * VALOR_POR_ACESSO) + (1500 * VALOR_POR_DIGITACAO),
      mes: 'Novembro/2025'
    },
    {
      empresaId: 5,
      empresaNome: 'Consult Business',
      representanteId: undefined,
      representanteNome: undefined,
      acessosContratados: 12,
      valorAcesso: VALOR_POR_ACESSO,
      totalAcessos: 12 * VALOR_POR_ACESSO,
      digitacoesContratadas: 800,
      valorDigitacao: VALOR_POR_DIGITACAO,
      totalDigitacoes: 800 * VALOR_POR_DIGITACAO,
      receitaMensal: (12 * VALOR_POR_ACESSO) + (800 * VALOR_POR_DIGITACAO),
      mes: 'Novembro/2025'
    },
    // Dados de Outubro/2025
    {
      empresaId: 1,
      empresaNome: 'Tech Solutions Ltda',
      representanteId: 4,
      representanteNome: 'Paulo Representante',
      acessosContratados: 8,
      valorAcesso: VALOR_POR_ACESSO,
      totalAcessos: 8 * VALOR_POR_ACESSO,
      digitacoesContratadas: 450,
      valorDigitacao: VALOR_POR_DIGITACAO,
      totalDigitacoes: 450 * VALOR_POR_DIGITACAO,
      receitaMensal: (8 * VALOR_POR_ACESSO) + (450 * VALOR_POR_DIGITACAO),
      mes: 'Outubro/2025'
    },
    {
      empresaId: 2,
      empresaNome: 'Inovação Digital Corp',
      representanteId: 4,
      representanteNome: 'Paulo Representante',
      acessosContratados: 12,
      valorAcesso: VALOR_POR_ACESSO,
      totalAcessos: 12 * VALOR_POR_ACESSO,
      digitacoesContratadas: 800,
      valorDigitacao: VALOR_POR_DIGITACAO,
      totalDigitacoes: 800 * VALOR_POR_DIGITACAO,
      receitaMensal: (12 * VALOR_POR_ACESSO) + (800 * VALOR_POR_DIGITACAO),
      mes: 'Outubro/2025'
    },
    {
      empresaId: 3,
      empresaNome: 'Soluções Prime',
      representanteId: undefined,
      representanteNome: undefined,
      acessosContratados: 5,
      valorAcesso: VALOR_POR_ACESSO,
      totalAcessos: 5 * VALOR_POR_ACESSO,
      digitacoesContratadas: 200,
      valorDigitacao: VALOR_POR_DIGITACAO,
      totalDigitacoes: 200 * VALOR_POR_DIGITACAO,
      receitaMensal: (5 * VALOR_POR_ACESSO) + (200 * VALOR_POR_DIGITACAO),
      mes: 'Outubro/2025'
    }
  ]);

  const [busca, setBusca] = useState('');
  const [filtroRepresentante, setFiltroRepresentante] = useState<'todos' | string>('todos');
  const [filtroPeriodo, setFiltroPeriodo] = useState('Novembro/2025');

  // Calcular totais
  const receitasFiltradas = receitas.filter(receita => {
    const matchBusca = receita.empresaNome.toLowerCase().includes(busca.toLowerCase());
    const matchRepresentante = 
      filtroRepresentante === 'todos' || 
      (filtroRepresentante === 'sem-representante' && !receita.representanteId) ||
      receita.representanteId?.toString() === filtroRepresentante;
    const matchPeriodo = receita.mes === filtroPeriodo;
    
    return matchBusca && matchRepresentante && matchPeriodo;
  });

  const receitaTotalMensal = receitasFiltradas.reduce((acc, r) => acc + r.receitaMensal, 0);
  const totalAcessos = receitasFiltradas.reduce((acc, r) => acc + r.acessosContratados, 0);
  const totalDigitacoes = receitasFiltradas.reduce((acc, r) => acc + r.digitacoesContratadas, 0);

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  return (
    <div className="h-full overflow-y-auto bg-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto p-[24px]">
        {/* Header */}
        <div className="mb-[20px]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] text-[22px] text-[#2d2d2d]">
            Receitas e Faturamento
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[2px]">
            Acompanhe as receitas geradas pelas empresas corbans
          </p>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] mb-[24px]">
          <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#e2e8f0]">
            <div className="flex items-center gap-[12px]">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-gradient-to-br from-[#10b981] to-[#059669] rounded-[8px]">
                <DollarSign size={20} className="text-white" />
              </div>
              <div>
                <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                  Receita Total Mensal
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d] leading-none">
                  {formatarMoeda(receitaTotalMensal)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#e2e8f0]">
            <div className="flex items-center gap-[12px]">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-gradient-to-br from-[#2563EB] to-[#1e40af] rounded-[8px]">
                <User size={20} className="text-white" />
              </div>
              <div>
                <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                  Receita Acessos
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d] leading-none">
                  {formatarMoeda(totalAcessos * VALOR_POR_ACESSO)}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f] mt-[2px]">
                  {totalAcessos} acessos
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#e2e8f0]">
            <div className="flex items-center gap-[12px]">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-[8px]">
                <svg className="w-[20px] h-[20px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                  Receita Digitações
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d] leading-none">
                  {formatarMoeda(totalDigitacoes * VALOR_POR_DIGITACAO)}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f] mt-[2px]">
                  {totalDigitacoes} digitações
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#e2e8f0]">
            <div className="flex items-center gap-[12px]">
              <div className="flex items-center justify-center w-[40px] h-[40px] bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] rounded-[8px]">
                <Building2 size={20} className="text-white" />
              </div>
              <div>
                <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                  Empresas Ativas
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d] leading-none">
                  {receitasFiltradas.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#e2e8f0] mb-[16px]">
          <div className="flex flex-col md:flex-row gap-[12px] items-start md:items-center justify-between">
            <div className="flex flex-col md:flex-row gap-[12px] flex-1 w-full">
              {/* Busca */}
              <div className="relative flex-1">
                <Search size={18} className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#8c8c8f]" />
                <input
                  type="text"
                  placeholder="Buscar por empresa..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="w-full h-[40px] pl-[40px] pr-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>

              {/* Filtro Representante */}
              <select
                value={filtroRepresentante}
                onChange={(e) => setFiltroRepresentante(e.target.value)}
                className="h-[40px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
              >
                <option value="todos">Todos os representantes</option>
                <option value="4">Paulo Representante</option>
                <option value="sem-representante">Sem representante</option>
              </select>

              {/* Filtro Período */}
              <select
                value={filtroPeriodo}
                onChange={(e) => setFiltroPeriodo(e.target.value)}
                className="h-[40px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
              >
                <option value="Novembro/2025">Novembro/2025</option>
                <option value="Outubro/2025">Outubro/2025</option>
              </select>
            </div>

            {/* Botão Exportar */}
            <button
              className="flex items-center gap-[8px] h-[40px] px-[16px] bg-gradient-to-r from-[#10b981] to-[#059669] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] hover:from-[#059669] hover:to-[#047857] transition-all shadow-sm"
            >
              <Download size={18} />
              Exportar Relatório
            </button>
          </div>
        </div>

        {/* Tabela de Receitas */}
        <div className="bg-white rounded-[12px] shadow-sm border border-[#e2e8f0] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                <tr>
                  <th className="px-[20px] py-[14px] text-left font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f] uppercase tracking-wide">
                    Empresa
                  </th>
                  <th className="px-[20px] py-[14px] text-center font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f] uppercase tracking-wide">
                    Acessos
                  </th>
                  <th className="px-[20px] py-[14px] text-center font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f] uppercase tracking-wide">
                    Digitações
                  </th>
                  <th className="px-[20px] py-[14px] text-left font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f] uppercase tracking-wide">
                    Representante
                  </th>
                  <th className="px-[20px] py-[14px] text-right font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f] uppercase tracking-wide">
                    Receita Mensal
                  </th>
                </tr>
              </thead>
              <tbody>
                {receitasFiltradas.map((receita) => (
                  <tr key={receita.empresaId} className="border-b border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors">
                    <td className="px-[20px] py-[16px]">
                      <div className="flex items-center gap-[12px]">
                        <div className="flex items-center justify-center w-[36px] h-[36px] bg-gradient-to-br from-[#2563EB] to-[#1e40af] rounded-[8px]">
                          <Building2 size={16} className="text-white" />
                        </div>
                        <div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d]">
                            {receita.empresaNome}
                          </p>
                          <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                            {receita.mes}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-[20px] py-[16px]">
                      <div className="text-center">
                        <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d]">
                          {receita.acessosContratados} acessos
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                          {formatarMoeda(receita.totalAcessos)}
                        </p>
                      </div>
                    </td>
                    <td className="px-[20px] py-[16px]">
                      <div className="text-center">
                        <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d]">
                          {receita.digitacoesContratadas} digitações
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                          {formatarMoeda(receita.totalDigitacoes)}
                        </p>
                      </div>
                    </td>
                    <td className="px-[20px] py-[16px]">
                      {receita.representanteNome ? (
                        <div className="flex items-center gap-[8px]">
                          <div className="flex items-center justify-center w-[28px] h-[28px] bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] rounded-[6px]">
                            <User size={14} className="text-white" />
                          </div>
                          <p className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#2d2d2d]">
                            {receita.representanteNome}
                          </p>
                        </div>
                      ) : (
                        <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#8c8c8f]">
                          Sem representante
                        </p>
                      )}
                    </td>
                    <td className="px-[20px] py-[16px] text-right">
                      <p className="font-['Inter:Semi_Bold',sans-serif] text-[15px] text-[#10b981]">
                        {formatarMoeda(receita.receitaMensal)}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-[#f8fafc] border-t-2 border-[#2563EB]">
                <tr>
                  <td className="px-[20px] py-[16px]" colSpan={4}>
                    <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#2d2d2d] text-right">
                      Total Geral:
                    </p>
                  </td>
                  <td className="px-[20px] py-[16px] text-right">
                    <p className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#10b981]">
                      {formatarMoeda(receitaTotalMensal)}
                    </p>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {receitasFiltradas.length === 0 && (
          <div className="bg-white rounded-[12px] p-[40px] shadow-sm border border-[#e2e8f0] text-center">
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#8c8c8f]">
              Nenhuma receita encontrada
            </p>
          </div>
        )}
      </div>
    </div>
  );
}