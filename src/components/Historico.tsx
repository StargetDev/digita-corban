import { useState } from 'react';
import { Package, Download, CheckCircle, XCircle, Clock, TrendingUp } from 'lucide-react';

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

interface HistoricoLote {
  id: string;
  dataProcessamento: string;
  totalDigitacoes: number;
  sucessos: number;
  erros: number;
  digitacoes: Digitacao[];
}

export function Historico() {
  const [historicoLotes] = useState<HistoricoLote[]>([
    {
      id: 'lote-001',
      dataProcessamento: '25/11/2025 14:30',
      totalDigitacoes: 100,
      sucessos: 85,
      erros: 15,
      digitacoes: []
    },
    {
      id: 'lote-002',
      dataProcessamento: '23/11/2025 10:15',
      totalDigitacoes: 200,
      sucessos: 195,
      erros: 5,
      digitacoes: []
    },
    {
      id: 'lote-003',
      dataProcessamento: '22/11/2025 16:45',
      totalDigitacoes: 150,
      sucessos: 142,
      erros: 8,
      digitacoes: []
    },
    {
      id: 'lote-004',
      dataProcessamento: '21/11/2025 09:30',
      totalDigitacoes: 80,
      sucessos: 78,
      erros: 2,
      digitacoes: []
    },
  ]);

  const handleExportarLote = (lote: HistoricoLote) => {
    const headers = ['Cliente', 'CPF', 'Proposta', 'Status', 'Mensagem', 'Data/Hora'];
    const csvContent = [
      headers.join(';'),
      ...lote.digitacoes.map(d => 
        [d.cliente, d.cpf, d.proposta, d.status, d.mensagem, d.dataHora].join(';')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `lote_${lote.id}_${new Date().getTime()}.csv`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] p-[20px]">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-[20px]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] text-[22px] text-[#2d2d2d]">
            Arquivos de Digitações
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[2px]">
            Visualize todos os processamentos realizados
          </p>
        </div>

        {/* Conteúdo */}
        <div className="h-full flex flex-col overflow-y-auto">
          {historicoLotes.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-[10px] bg-white rounded-[8px] border border-[#e0e0e0] py-[60px]">
              <div className="flex items-center justify-center w-[56px] h-[56px] bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] rounded-[12px]">
                <Clock size={28} className="text-[#d1d5db]" />
              </div>
              <div className="text-center">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] mb-[2px]">
                  Nenhum processamento ainda
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#8c8c8f]">
                  Seus processamentos aparecerão aqui
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-5 gap-[10px]">
              {historicoLotes.map((lote) => (
                <div
                  key={lote.id}
                  className="group relative bg-white rounded-[8px] p-[12px] border border-[#e0e0e0] hover:border-[#2563EB] hover:shadow-md transition-all aspect-square flex flex-col"
                >
                  {/* Header do Card */}
                  <div className="flex items-center justify-between mb-[8px]">
                    <div className="flex items-center gap-[6px]">
                      <div className="flex items-center justify-center w-[24px] h-[24px] bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe] rounded-[6px]">
                        <Package size={12} className="text-[#2563EB]" />
                      </div>
                      <div>
                        <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] leading-none">
                          {lote.id}
                        </h3>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleExportarLote(lote)}
                      className="flex items-center justify-center w-[24px] h-[24px] bg-white border border-[#e0e0e0] hover:bg-[#f9fafb] hover:border-[#2563EB] transition-all rounded-[6px]"
                      title="Exportar"
                    >
                      <Download size={12} className="text-[#2d2d2d]" />
                    </button>
                  </div>

                  {/* Data */}
                  <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f] mb-[10px]">
                    {lote.dataProcessamento}
                  </p>

                  {/* Estatísticas - Grid 3 colunas */}
                  <div className="grid grid-cols-3 gap-[6px] mb-[8px]">
                    <div className="bg-[#f9fafb] rounded-[6px] p-[6px] border border-[#e0e0e0] flex flex-col items-center justify-center aspect-square">
                      <p className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#2d2d2d] leading-none mb-[2px]">
                        {lote.totalDigitacoes}
                      </p>
                      <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#8c8c8f]">
                        Total
                      </span>
                    </div>
                    <div className="bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe] rounded-[6px] p-[6px] border border-[#2563EB]/20 flex flex-col items-center justify-center aspect-square">
                      <p className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#2563EB] leading-none mb-[2px]">
                        {lote.sucessos}
                      </p>
                      <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#2563EB]">
                        Sucesso
                      </span>
                    </div>
                    <div className="bg-gradient-to-br from-[#fef2f2] to-[#fee2e2] rounded-[6px] p-[6px] border border-[#e53935]/20 flex flex-col items-center justify-center aspect-square">
                      <p className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#e53935] leading-none mb-[2px]">
                        {lote.erros}
                      </p>
                      <span className="font-['Inter:Regular',sans-serif] text-[10px] text-[#e53935]">
                        Erro
                      </span>
                    </div>
                  </div>

                  {/* Taxa de Sucesso */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-[4px]">
                      <span className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                        Taxa de Sucesso
                      </span>
                      <span className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#2563EB]">
                        {((lote.sucessos / lote.totalDigitacoes) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-[#f3f4f6] rounded-full h-[4px] overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#2563EB] to-[#1e40af] h-[4px] rounded-full transition-all"
                        style={{ width: `${(lote.sucessos / lote.totalDigitacoes) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Indicador de hover sutil */}
                  <div className="absolute bottom-[6px] left-[50%] transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-[2px] w-[24px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}