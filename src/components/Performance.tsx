import { useState } from 'react';
import { TrendingUp, Users, FileText, DollarSign, Award, Calendar, Filter, CheckCircle, Clock, UserX, XCircle, PhoneOff } from 'lucide-react';

interface PerformanceVendedor {
  id: number;
  vendedor: string;
  convertido: number;
  agendarRetorno: number;
  clienteNaoEncontrado: number;
  semInteresse: number;
  naoResponde: number;
  formalizados: number;
  pagos: number;
}

export function Performance() {
  const [mesAtual, setMesAtual] = useState('12/2025');
  const [vendedorFiltro, setVendedorFiltro] = useState('todos');

  // Dados mockados de performance
  const [dadosPerformance] = useState<PerformanceVendedor[]>([
    {
      id: 1,
      vendedor: 'Maria Santos',
      convertido: 145,
      agendarRetorno: 32,
      clienteNaoEncontrado: 18,
      semInteresse: 25,
      naoResponde: 12,
      formalizados: 98,
      pagos: 45
    },
    {
      id: 2,
      vendedor: 'Ana Costa',
      convertido: 132,
      agendarRetorno: 28,
      clienteNaoEncontrado: 15,
      semInteresse: 22,
      naoResponde: 10,
      formalizados: 87,
      pagos: 38
    },
    {
      id: 3,
      vendedor: 'Pedro Oliveira',
      convertido: 98,
      agendarRetorno: 20,
      clienteNaoEncontrado: 12,
      semInteresse: 18,
      naoResponde: 8,
      formalizados: 65,
      pagos: 25
    },
    {
      id: 4,
      vendedor: 'Carlos Eduardo',
      convertido: 87,
      agendarRetorno: 18,
      clienteNaoEncontrado: 10,
      semInteresse: 15,
      naoResponde: 7,
      formalizados: 54,
      pagos: 22
    },
    {
      id: 5,
      vendedor: 'Fernanda Lima',
      convertido: 156,
      agendarRetorno: 35,
      clienteNaoEncontrado: 20,
      semInteresse: 28,
      naoResponde: 14,
      formalizados: 112,
      pagos: 52
    }
  ]);

  // Filtrar dados por vendedor
  const dadosFiltrados = vendedorFiltro === 'todos' 
    ? dadosPerformance 
    : dadosPerformance.filter(d => d.vendedor === vendedorFiltro);

  // Calcular totais
  const totais = dadosFiltrados.reduce((acc, curr) => ({
    convertido: acc.convertido + curr.convertido,
    agendarRetorno: acc.agendarRetorno + curr.agendarRetorno,
    clienteNaoEncontrado: acc.clienteNaoEncontrado + curr.clienteNaoEncontrado,
    semInteresse: acc.semInteresse + curr.semInteresse,
    naoResponde: acc.naoResponde + curr.naoResponde,
    formalizados: acc.formalizados + curr.formalizados,
    pagos: acc.pagos + curr.pagos
  }), { 
    convertido: 0, 
    agendarRetorno: 0, 
    clienteNaoEncontrado: 0, 
    semInteresse: 0, 
    naoResponde: 0,
    formalizados: 0,
    pagos: 0
  });

  // Calcular total geral para percentuais
  const totalGeral = totais.convertido + totais.agendarRetorno + totais.clienteNaoEncontrado + totais.semInteresse + totais.naoResponde;

  // Função para calcular percentual
  const calcularPercentual = (valor: number) => {
    if (totalGeral === 0) return '0%';
    return ((valor / totalGeral) * 100).toFixed(1) + '%';
  };

  return (
    <div className="h-full overflow-y-auto bg-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto p-[24px]">
        {/* Header */}
        <div className="mb-[20px]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] text-[22px] text-[#2d2d2d]">
            Desempenho da Equipe
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[2px]">
            Acompanhe o desempenho de cada vendedor e as métricas da campanha
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#e2e8f0] mb-[24px]">
          <div className="flex flex-col md:flex-row gap-[12px] items-start md:items-center">
            {/* Filtro de Período */}
            <div className="flex items-center gap-[8px]">
              <Calendar size={16} className="text-[#8c8c8f]" />
              <select
                value={mesAtual}
                onChange={(e) => setMesAtual(e.target.value)}
                className="h-[40px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
              >
                <option value="12/2025">Dezembro 2025</option>
                <option value="11/2025">Novembro 2025</option>
                <option value="10/2025">Outubro 2025</option>
                <option value="09/2025">Setembro 2025</option>
                <option value="08/2025">Agosto 2025</option>
                <option value="07/2025">Julho 2025</option>
              </select>
            </div>

            {/* Filtro de Vendedor */}
            <div className="flex items-center gap-[8px]">
              <Users size={16} className="text-[#8c8c8f]" />
              <select
                value={vendedorFiltro}
                onChange={(e) => setVendedorFiltro(e.target.value)}
                className="h-[40px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
              >
                <option value="todos">Todos os vendedores</option>
                {dadosPerformance.map(d => (
                  <option key={d.id} value={d.vendedor}>{d.vendedor}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Cards de Métricas Gerais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[12px] mb-[24px]">
          {/* Card Convertido */}
          <div className="bg-white rounded-[8px] p-[12px] shadow-sm border border-[#e2e8f0] flex items-center gap-[12px]">
            <div className="flex items-center justify-center w-[32px] h-[32px] bg-gradient-to-br from-[#10b981] to-[#059669] rounded-[6px] flex-shrink-0">
              <CheckCircle size={16} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f] mb-[2px]">
                Convertido
              </p>
              <div className="flex items-baseline gap-[6px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d]">
                  {totais.convertido}
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f]">
                  {calcularPercentual(totais.convertido)}
                </p>
              </div>
            </div>
          </div>

          {/* Card Agendar Retorno */}
          <div className="bg-white rounded-[8px] p-[12px] shadow-sm border border-[#e2e8f0] flex items-center gap-[12px]">
            <div className="flex items-center justify-center w-[32px] h-[32px] bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-[6px] flex-shrink-0">
              <Clock size={16} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f] mb-[2px]">
                Agendar Retorno
              </p>
              <div className="flex items-baseline gap-[6px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d]">
                  {totais.agendarRetorno}
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f]">
                  {calcularPercentual(totais.agendarRetorno)}
                </p>
              </div>
            </div>
          </div>

          {/* Card Cliente Não Encontrado */}
          <div className="bg-white rounded-[8px] p-[12px] shadow-sm border border-[#e2e8f0] flex items-center gap-[12px]">
            <div className="flex items-center justify-center w-[32px] h-[32px] bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-[6px] flex-shrink-0">
              <UserX size={16} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f] mb-[2px]">
                Cliente Não Encontrado
              </p>
              <div className="flex items-baseline gap-[6px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d]">
                  {totais.clienteNaoEncontrado}
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f]">
                  {calcularPercentual(totais.clienteNaoEncontrado)}
                </p>
              </div>
            </div>
          </div>

          {/* Card Sem Interesse */}
          <div className="bg-white rounded-[8px] p-[12px] shadow-sm border border-[#e2e8f0] flex items-center gap-[12px]">
            <div className="flex items-center justify-center w-[32px] h-[32px] bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-[6px] flex-shrink-0">
              <XCircle size={16} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f] mb-[2px]">
                Sem Interesse
              </p>
              <div className="flex items-baseline gap-[6px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d]">
                  {totais.semInteresse}
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f]">
                  {calcularPercentual(totais.semInteresse)}
                </p>
              </div>
            </div>
          </div>

          {/* Card Não Responde */}
          <div className="bg-white rounded-[8px] p-[12px] shadow-sm border border-[#e2e8f0] flex items-center gap-[12px]">
            <div className="flex items-center justify-center w-[32px] h-[32px] bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] rounded-[6px] flex-shrink-0">
              <PhoneOff size={16} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f] mb-[2px]">
                Não Responde
              </p>
              <div className="flex items-baseline gap-[6px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d]">
                  {totais.naoResponde}
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f]">
                  {calcularPercentual(totais.naoResponde)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabela Detalhada */}
        <div className="bg-white rounded-[12px] shadow-sm border border-[#e2e8f0] overflow-hidden">
          <div className="p-[20px] border-b border-[#e2e8f0]">
            <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#2d2d2d]">
              Desempenho Detalhado
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                <tr>
                  <th className="px-[20px] py-[12px] text-left font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Vendedor
                  </th>
                  <th className="px-[20px] py-[12px] text-center font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Cliente Não Encontrado
                  </th>
                  <th className="px-[20px] py-[12px] text-center font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Sem Interesse
                  </th>
                  <th className="px-[20px] py-[12px] text-center font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Não Responde
                  </th>
                  <th className="px-[20px] py-[12px] text-center font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Agendar Retorno
                  </th>
                  <th className="px-[20px] py-[12px] text-center font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Convertido
                  </th>
                  <th className="px-[20px] py-[12px] text-center font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Formalizados
                  </th>
                  <th className="px-[20px] py-[12px] text-center font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Pagos
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...dadosFiltrados]
                  .sort((a, b) => b.pagos - a.pagos)
                  .map((vendedor, index) => (
                    <tr key={vendedor.id} className="border-b border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors">
                      <td className="px-[20px] py-[16px]">
                        <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d]">
                          {vendedor.vendedor}
                        </p>
                      </td>
                      <td className="px-[20px] py-[16px] text-center">
                        <span className="inline-flex items-center justify-center px-[10px] py-[4px] bg-[#fef3c7] text-[#92400e] rounded-full font-['Inter:Semi_Bold',sans-serif] text-[12px]">
                          {vendedor.clienteNaoEncontrado}
                        </span>
                      </td>
                      <td className="px-[20px] py-[16px] text-center">
                        <span className="inline-flex items-center justify-center px-[10px] py-[4px] bg-[#fee2e2] text-[#991b1b] rounded-full font-['Inter:Semi_Bold',sans-serif] text-[12px]">
                          {vendedor.semInteresse}
                        </span>
                      </td>
                      <td className="px-[20px] py-[16px] text-center">
                        <span className="inline-flex items-center justify-center px-[10px] py-[4px] bg-[#ede9fe] text-[#5b21b6] rounded-full font-['Inter:Semi_Bold',sans-serif] text-[12px]">
                          {vendedor.naoResponde}
                        </span>
                      </td>
                      <td className="px-[20px] py-[16px] text-center">
                        <span className="inline-flex items-center justify-center px-[10px] py-[4px] bg-[#dbeafe] text-[#1e40af] rounded-full font-['Inter:Semi_Bold',sans-serif] text-[12px]">
                          {vendedor.agendarRetorno}
                        </span>
                      </td>
                      <td className="px-[20px] py-[16px] text-center">
                        <span className="inline-flex items-center justify-center px-[10px] py-[4px] bg-[#d1fae5] text-[#065f46] rounded-full font-['Inter:Semi_Bold',sans-serif] text-[12px]">
                          {vendedor.convertido}
                        </span>
                      </td>
                      <td className="px-[20px] py-[16px] text-center">
                        <span className="inline-flex items-center justify-center px-[10px] py-[4px] bg-[#e0f2fe] text-[#0c4a6e] rounded-full font-['Inter:Semi_Bold',sans-serif] text-[12px]">
                          {vendedor.formalizados}
                        </span>
                      </td>
                      <td className="px-[20px] py-[16px] text-center">
                        <span className="inline-flex items-center justify-center px-[10px] py-[4px] bg-[#26a96c] text-white rounded-full font-['Inter:Semi_Bold',sans-serif] text-[12px]">
                          {vendedor.pagos}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}