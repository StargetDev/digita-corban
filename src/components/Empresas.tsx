import { useState } from 'react';
import { Search, Plus, Edit2, Trash2, X, Building2, Users, TrendingUp, AlertCircle, FileText, UserPlus, FilePlus } from 'lucide-react';

interface Empresa {
  id: number;
  nome: string;
  cnpj: string;
  razaoSocial: string;
  responsavel: string;
  emailResponsavel: string;
  whatsappResponsavel: string;
  limiteAcessos: number;
  acessosUtilizados: number;
  limiteDigitacoes: number;
  digitacoesUtilizadas: number;
  status: 'ativo' | 'inativo';
  dataCadastro: string;
  representanteId?: number;
}

interface EmpresasProps {
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

export function Empresas({ usuarioLogado }: EmpresasProps) {
  const [empresas, setEmpresas] = useState<Empresa[]>([
    {
      id: 1,
      nome: 'Tech Solutions Ltda',
      cnpj: '12.345.678/0001-90',
      razaoSocial: 'Tech Solutions Tecnologia Ltda',
      responsavel: 'João Silva',
      emailResponsavel: 'joao.silva@techsolutions.com',
      whatsappResponsavel: '(11) 98765-4321',
      limiteAcessos: 10,
      acessosUtilizados: 4,
      limiteDigitacoes: 500,
      digitacoesUtilizadas: 237,
      status: 'ativo',
      dataCadastro: '15/01/2025',
      representanteId: 4
    },
    {
      id: 2,
      nome: 'Inovação Digital Corp',
      cnpj: '98.765.432/0001-10',
      razaoSocial: 'Inovação Digital Corporativa S.A.',
      responsavel: 'Roberto Almeida',
      emailResponsavel: 'roberto@inovacaodigital.com',
      whatsappResponsavel: '(21) 98888-7777',
      limiteAcessos: 15,
      acessosUtilizados: 3,
      limiteDigitacoes: 1000,
      digitacoesUtilizadas: 456,
      status: 'ativo',
      dataCadastro: '10/02/2025',
      representanteId: 4
    },
    {
      id: 3,
      nome: 'Soluções Prime',
      cnpj: '45.678.901/0001-23',
      razaoSocial: 'Soluções Prime Consultoria Ltda',
      responsavel: 'Carlos Mendes',
      emailResponsavel: 'carlos@solprime.com.br',
      whatsappResponsavel: '(21) 96666-5555',
      limiteAcessos: 8,
      acessosUtilizados: 2,
      limiteDigitacoes: 300,
      digitacoesUtilizadas: 189,
      status: 'ativo',
      dataCadastro: '20/02/2025'
    },
    {
      id: 4,
      nome: 'Mega Empreendimentos',
      cnpj: '23.456.789/0001-45',
      razaoSocial: 'Mega Empreendimentos e Negócios Ltda',
      responsavel: 'Ana Paula Costa',
      emailResponsavel: 'ana.costa@megaemp.com',
      whatsappResponsavel: '(31) 95555-4444',
      limiteAcessos: 20,
      acessosUtilizados: 8,
      limiteDigitacoes: 1500,
      digitacoesUtilizadas: 1342,
      status: 'ativo',
      dataCadastro: '05/03/2025'
    },
    {
      id: 5,
      nome: 'Consult Business',
      cnpj: '67.890.123/0001-67',
      razaoSocial: 'Consult Business Soluções Ltda',
      responsavel: 'Roberto Alves',
      emailResponsavel: 'roberto@consultbusiness.com',
      whatsappResponsavel: '(41) 94444-3333',
      limiteAcessos: 12,
      acessosUtilizados: 5,
      limiteDigitacoes: 800,
      digitacoesUtilizadas: 423,
      status: 'inativo',
      dataCadastro: '18/03/2025'
    }
  ]);

  // Mapeamento de representantes
  const representantes: { [key: number]: string } = {
    4: 'Paulo Representante',
    10: 'Maria Representante',
    11: 'Carlos Representante'
  };

  const obterNomeRepresentante = (representanteId?: number) => {
    if (!representanteId) return 'Sem representante';
    return representantes[representanteId] || 'Representante não encontrado';
  };

  const [modalAberto, setModalAberto] = useState(false);
  const [modalExclusao, setModalExclusao] = useState(false);
  const [empresaSelecionada, setEmpresaSelecionada] = useState<Empresa | null>(null);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [busca, setBusca] = useState('');
  const [filtroStatus, setFiltroStatus] = useState<'todos' | 'ativo' | 'inativo'>('todos');

  const [modalAcessos, setModalAcessos] = useState(false);
  const [modalDigitacoes, setModalDigitacoes] = useState(false);
  const [quantidadeAcessos, setQuantidadeAcessos] = useState(5);
  const [valorAcessos, setValorAcessos] = useState(750);
  const [quantidadeDigitacoes, setQuantidadeDigitacoes] = useState(100);
  const [valorDigitacoes, setValorDigitacoes] = useState(250);

  const [formData, setFormData] = useState({
    nome: '',
    cnpj: '',
    razaoSocial: '',
    responsavel: '',
    emailResponsavel: '',
    whatsappResponsavel: '',
    limiteAcessos: 5,
    limiteDigitacoes: 100,
    representanteId: undefined as number | undefined
  });

  const abrirModalNovo = () => {
    setFormData({
      nome: '',
      cnpj: '',
      razaoSocial: '',
      responsavel: '',
      emailResponsavel: '',
      whatsappResponsavel: '',
      limiteAcessos: 5,
      limiteDigitacoes: 100,
      representanteId: undefined
    });
    setModoEdicao(false);
    setEmpresaSelecionada(null);
    setModalAberto(true);
  };

  const abrirModalEdicao = (empresa: Empresa) => {
    setFormData({
      nome: empresa.nome,
      cnpj: empresa.cnpj,
      razaoSocial: empresa.razaoSocial,
      responsavel: empresa.responsavel,
      emailResponsavel: empresa.emailResponsavel,
      whatsappResponsavel: empresa.whatsappResponsavel,
      limiteAcessos: empresa.limiteAcessos,
      limiteDigitacoes: empresa.limiteDigitacoes,
      representanteId: empresa.representanteId
    });
    setModoEdicao(true);
    setEmpresaSelecionada(empresa);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setFormData({
      nome: '',
      cnpj: '',
      razaoSocial: '',
      responsavel: '',
      emailResponsavel: '',
      whatsappResponsavel: '',
      limiteAcessos: 5,
      limiteDigitacoes: 100,
      representanteId: undefined
    });
    setEmpresaSelecionada(null);
    setModoEdicao(false);
  };

  const salvarEmpresa = () => {
    if (!formData.nome) {
      alert('Por favor, preencha o nome da empresa');
      return;
    }

    if (modoEdicao && empresaSelecionada) {
      setEmpresas(empresas.map(e =>
        e.id === empresaSelecionada.id
          ? { ...e, nome: formData.nome, representanteId: formData.representanteId }
          : e
      ));
    } else {
      const novaEmpresa: Empresa = {
        id: Math.max(...empresas.map(e => e.id)) + 1,
        ...formData,
        acessosUtilizados: 0,
        digitacoesUtilizadas: 0,
        status: 'ativo',
        dataCadastro: new Date().toLocaleDateString('pt-BR')
      };
      setEmpresas([...empresas, novaEmpresa]);
    }

    fecharModal();
  };

  const alternarStatus = (id: number) => {
    setEmpresas(empresas.map(e =>
      e.id === id
        ? { ...e, status: e.status === 'ativo' ? 'inativo' : 'ativo' }
        : e
    ));
  };

  const abrirModalExclusao = (empresa: Empresa) => {
    setEmpresaSelecionada(empresa);
    setModalExclusao(true);
  };

  const confirmarExclusao = () => {
    if (empresaSelecionada) {
      if (empresaSelecionada.acessosUtilizados > 0) {
        alert('Não é possível excluir uma empresa com acessos utilizados. Primeiro remova todos os usuários.');
        return;
      }
      setEmpresas(empresas.filter(e => e.id !== empresaSelecionada.id));
    }
    setModalExclusao(false);
    setEmpresaSelecionada(null);
  };

  const abrirModalAcessos = (empresa: Empresa) => {
    setEmpresaSelecionada(empresa);
    setQuantidadeAcessos(5);
    setValorAcessos(750); // R$ 150 por acesso x 5
    setModalAcessos(true);
  };

  const abrirModalDigitacoes = (empresa: Empresa) => {
    setEmpresaSelecionada(empresa);
    setQuantidadeDigitacoes(100);
    setValorDigitacoes(250); // R$ 2,50 por digitação x 100
    setModalDigitacoes(true);
  };

  const adicionarAcessos = () => {
    if (quantidadeAcessos < 1 || valorAcessos < 1) {
      alert('Por favor, preencha quantidade e valor válidos');
      return;
    }

    if (empresaSelecionada) {
      setEmpresas(empresas.map(e =>
        e.id === empresaSelecionada.id
          ? { ...e, limiteAcessos: e.limiteAcessos + quantidadeAcessos }
          : e
      ));
      alert(`${quantidadeAcessos} acessos adicionados por ${formatarMoeda(valorAcessos)}`);
    }

    setModalAcessos(false);
    setEmpresaSelecionada(null);
  };

  const adicionarDigitacoes = () => {
    if (quantidadeDigitacoes < 1 || valorDigitacoes < 1) {
      alert('Por favor, preencha quantidade e valor válidos');
      return;
    }

    if (empresaSelecionada) {
      setEmpresas(empresas.map(e =>
        e.id === empresaSelecionada.id
          ? { ...e, limiteDigitacoes: e.limiteDigitacoes + quantidadeDigitacoes }
          : e
      ));
      alert(`${quantidadeDigitacoes} digitações adicionadas por ${formatarMoeda(valorDigitacoes)}`);
    }

    setModalDigitacoes(false);
    setEmpresaSelecionada(null);
  };

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  const empresasFiltradas = empresas.filter(empresa => {
    const matchBusca =
      empresa.nome.toLowerCase().includes(busca.toLowerCase()) ||
      empresa.razaoSocial.toLowerCase().includes(busca.toLowerCase()) ||
      empresa.cnpj.includes(busca) ||
      empresa.responsavel.toLowerCase().includes(busca.toLowerCase());

    const matchStatus = filtroStatus === 'todos' || empresa.status === filtroStatus;

    return matchBusca && matchStatus;
  });

  const totalEmpresas = empresas.length;
  const totalAtivas = empresas.filter(e => e.status === 'ativo').length;
  const totalAcessosContratados = empresas.reduce((acc, e) => acc + e.limiteAcessos, 0);
  const totalAcessosUtilizados = empresas.reduce((acc, e) => acc + e.acessosUtilizados, 0);
  const totalDigitacoesContratadas = empresas.reduce((acc, e) => acc + e.limiteDigitacoes, 0);
  const totalDigitacoesUtilizadas = empresas.reduce((acc, e) => acc + e.digitacoesUtilizadas, 0);

  // Apenas Master tem acesso
  if (usuarioLogado.perfil !== 'master') {
    return (
      <div className="h-full overflow-y-auto bg-[#f8fafc] flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center w-[64px] h-[64px] bg-[#fee2e2] rounded-full mx-auto mb-[16px]">
            <X size={32} className="text-[#dc2626]" />
          </div>
          <h2 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d] mb-[8px]">
            Acesso Negado
          </h2>
          <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#8c8c8f]">
            Apenas usuários Master podem gerenciar empresas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto p-[24px]">
        {/* Header */}
        <div className="mb-[20px]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] text-[22px] text-[#2d2d2d]">
            Empresas Corbans
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[2px]">
            Gerencie as empresas parceiras e seus limites de acessos
          </p>
        </div>

        {/* Filtros e Ações */}
        <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#e2e8f0] mb-[16px]">
          <div className="flex flex-col md:flex-row gap-[12px] items-start md:items-center justify-between">
            <div className="flex flex-col md:flex-row gap-[12px] flex-1 w-full">
              {/* Busca */}
              <div className="relative flex-1">
                <Search size={18} className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#8c8c8f]" />
                <input
                  type="text"
                  placeholder="Buscar por nome, razão social, CNPJ ou responsável..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="w-full h-[40px] pl-[40px] pr-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>

              {/* Filtro Status */}
              <select
                value={filtroStatus}
                onChange={(e) => setFiltroStatus(e.target.value as 'todos' | 'ativo' | 'inativo')}
                className="h-[40px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
              >
                <option value="todos">Todos os status</option>
                <option value="ativo">Ativos</option>
                <option value="inativo">Inativos</option>
              </select>
            </div>

            {/* Botão Adicionar */}
            <button
              onClick={abrirModalNovo}
              className="flex items-center gap-[8px] h-[40px] px-[16px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] hover:from-[#1e40af] hover:to-[#2563EB] transition-all shadow-sm"
            >
              <Plus size={18} />
              Nova Empresa
            </button>
          </div>
        </div>

        {/* Grid de Empresas */}
        <div className="bg-white rounded-[12px] shadow-sm border border-[#e2e8f0] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                <tr>
                  <th className="px-[20px] py-[14px] text-left font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f] uppercase tracking-wide">
                    Empresa
                  </th>
                  <th className="px-[20px] py-[14px] text-left font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f] uppercase tracking-wide">
                    Responsável
                  </th>
                  <th className="px-[20px] py-[14px] text-center font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f] uppercase tracking-wide">
                    Acessos
                  </th>
                  <th className="px-[20px] py-[14px] text-center font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f] uppercase tracking-wide">
                    Digitações
                  </th>
                  <th className="px-[20px] py-[14px] text-center font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f] uppercase tracking-wide">
                    Status
                  </th>
                  <th className="px-[20px] py-[14px] text-center font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#8c8c8f] uppercase tracking-wide">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {empresasFiltradas.map((empresa) => {
                  const percentualAcessos = (empresa.acessosUtilizados / empresa.limiteAcessos) * 100;
                  const percentualDigitacoes = (empresa.digitacoesUtilizadas / empresa.limiteDigitacoes) * 100;
                  const corBarraAcessos = percentualAcessos >= 90 ? 'bg-[#dc2626]' : percentualAcessos >= 70 ? 'bg-[#f59e0b]' : 'bg-[#10b981]';
                  const corBarraDigitacoes = percentualDigitacoes >= 90 ? 'bg-[#dc2626]' : percentualDigitacoes >= 70 ? 'bg-[#f59e0b]' : 'bg-[#10b981]';
                  
                  return (
                    <tr key={empresa.id} className="border-b border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors">
                      <td className="px-[20px] py-[16px]">
                        <div className="flex items-center gap-[12px]">
                          <div className="flex items-center justify-center w-[36px] h-[36px] bg-gradient-to-br from-[#2563EB] to-[#1e40af] rounded-[8px]">
                            <Building2 size={16} className="text-white" />
                          </div>
                          <div>
                            <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d]">
                              {empresa.nome}
                            </p>
                            <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                              {obterNomeRepresentante(empresa.representanteId)}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-[20px] py-[16px]">
                        <p className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#2d2d2d]">
                          {empresa.responsavel}
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                          {empresa.emailResponsavel}
                        </p>
                      </td>
                      <td className="px-[20px] py-[16px]">
                        <div className="flex flex-col items-center gap-[6px]">
                          <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d]">
                            {empresa.acessosUtilizados}/{empresa.limiteAcessos}
                          </p>
                          <div className="w-[80px] bg-[#e2e8f0] h-[4px] rounded-full overflow-hidden">
                            <div 
                              className={`${corBarraAcessos} h-full rounded-full transition-all duration-300`}
                              style={{ width: `${percentualAcessos}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-[20px] py-[16px]">
                        <div className="flex flex-col items-center gap-[6px]">
                          <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d]">
                            {empresa.digitacoesUtilizadas}/{empresa.limiteDigitacoes}
                          </p>
                          <div className="w-[80px] bg-[#e2e8f0] h-[4px] rounded-full overflow-hidden">
                            <div 
                              className={`${corBarraDigitacoes} h-full rounded-full transition-all duration-300`}
                              style={{ width: `${percentualDigitacoes}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-[20px] py-[16px]">
                        <div className="flex justify-center">
                          <button
                            onClick={() => alternarStatus(empresa.id)}
                            className={`relative inline-flex items-center h-[20px] w-[38px] rounded-full transition-all duration-300 ${
                              empresa.status === 'ativo' ? 'bg-[#10b981]' : 'bg-[#e2e8f0]'
                            }`}
                          >
                            <span
                              className={`inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-sm transition-transform duration-300 ${
                                empresa.status === 'ativo' ? 'translate-x-[20px]' : 'translate-x-[2px]'
                              }`}
                            />
                          </button>
                        </div>
                      </td>
                      <td className="px-[20px] py-[16px]">
                        <div className="flex items-center justify-center gap-[8px]">
                          <button
                            onClick={() => abrirModalAcessos(empresa)}
                            className="flex items-center justify-center h-[32px] w-[32px] border border-[#e2e8f0] text-[#10b981] rounded-[6px] hover:bg-[#f0fdf4] transition-all"
                            title="Adicionar Acessos"
                          >
                            <UserPlus size={14} />
                          </button>
                          <button
                            onClick={() => abrirModalDigitacoes(empresa)}
                            className="flex items-center justify-center h-[32px] w-[32px] border border-[#e2e8f0] text-[#f59e0b] rounded-[6px] hover:bg-[#fffbeb] transition-all"
                            title="Adicionar Digitações"
                          >
                            <FilePlus size={14} />
                          </button>
                          <button
                            onClick={() => abrirModalEdicao(empresa)}
                            className="flex items-center justify-center h-[32px] w-[32px] border border-[#e2e8f0] text-[#2563EB] rounded-[6px] hover:bg-[#f8fafc] transition-all"
                            title="Editar"
                          >
                            <Edit2 size={14} />
                          </button>
                          <button
                            onClick={() => abrirModalExclusao(empresa)}
                            className="flex items-center justify-center h-[32px] w-[32px] border border-[#e2e8f0] text-[#dc2626] rounded-[6px] hover:bg-[#fee2e2] transition-all"
                            title="Excluir"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {empresasFiltradas.length === 0 && (
          <div className="bg-white rounded-[12px] p-[40px] shadow-sm border border-[#e2e8f0] text-center">
            <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#8c8c8f]">
              Nenhuma empresa encontrada
            </p>
          </div>
        )}
      </div>

      {/* Modal de Adicionar/Editar */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-[20px]">
          <div className="bg-white rounded-[16px] w-full max-w-[600px] max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="flex items-center justify-between p-[24px] border-b border-[#e2e8f0]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d]">
                {modoEdicao ? 'Editar Empresa' : 'Nova Empresa'}
              </h2>
              <button
                onClick={fecharModal}
                className="p-[8px] text-[#8c8c8f] hover:bg-[#f1f5f9] rounded-[6px] transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-[24px] space-y-[16px]">
              <div>
                <label className="block font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] mb-[8px]">
                  Nome Fantasia *
                </label>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Nome comercial da empresa"
                  className="w-full h-[44px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>

              <div>
                <label className="block font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] mb-[8px]">
                  Representante Responsável
                </label>
                <select
                  value={formData.representanteId || ''}
                  onChange={(e) => setFormData({ ...formData, representanteId: e.target.value ? parseInt(e.target.value) : undefined })}
                  className="w-full h-[44px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                >
                  <option value="">Selecione um representante (opcional)</option>
                  <option value="4">Paulo Representante</option>
                  <option value="10">Maria Representante</option>
                  <option value="11">Carlos Representante</option>
                </select>
                <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f] mt-[4px]">
                  Representante que receberá comissão pelas vendas desta empresa
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-[12px] p-[24px] border-t border-[#e2e8f0]">
              <button
                onClick={fecharModal}
                className="h-[40px] px-[20px] border border-[#e2e8f0] text-[#2d2d2d] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] hover:bg-[#f8fafc] transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={salvarEmpresa}
                className="h-[40px] px-[20px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] hover:from-[#1e40af] hover:to-[#2563EB] transition-all shadow-sm"
              >
                {modoEdicao ? 'Salvar Alterações' : 'Cadastrar Empresa'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Confirmação de Exclusão */}
      {modalExclusao && empresaSelecionada && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-[20px]">
          <div className="bg-white rounded-[16px] w-full max-w-[500px] shadow-xl">
            <div className="flex items-center justify-between p-[24px] border-b border-[#e2e8f0]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d]">
                Confirmar Exclusão
              </h2>
              <button
                onClick={() => setModalExclusao(false)}
                className="p-[8px] text-[#8c8c8f] hover:bg-[#f1f5f9] rounded-[6px] transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-[24px]">
              <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#2d2d2d] mb-[8px]">
                Tem certeza que deseja excluir a empresa:
              </p>
              <div className="bg-[#f8fafc] rounded-[8px] p-[16px] mt-[12px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#2d2d2d]">
                  {empresaSelecionada.nome}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[4px]">
                  CNPJ: {empresaSelecionada.cnpj}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f]">
                  Acessos: {empresaSelecionada.acessosUtilizados}/{empresaSelecionada.limiteAcessos}
                </p>
              </div>
              {empresaSelecionada.acessosUtilizados > 0 && (
                <div className="flex items-start gap-[8px] mt-[16px] p-[12px] bg-[#fee2e2] rounded-[8px]">
                  <AlertCircle size={16} className="text-[#dc2626] mt-[2px]" />
                  <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#dc2626]">
                    Esta empresa possui {empresaSelecionada.acessosUtilizados} acesso(s) utilizado(s). Remova todos os usuários antes de excluir a empresa.
                  </p>
                </div>
              )}
              {empresaSelecionada.acessosUtilizados === 0 && (
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#dc2626] mt-[16px]">
                  Esta ação não poderá ser desfeita.
                </p>
              )}
            </div>

            <div className="flex items-center justify-end gap-[12px] p-[24px] border-t border-[#e2e8f0]">
              <button
                onClick={() => setModalExclusao(false)}
                className="h-[40px] px-[20px] border border-[#e2e8f0] text-[#2d2d2d] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] hover:bg-[#f8fafc] transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarExclusao}
                disabled={empresaSelecionada.acessosUtilizados > 0}
                className={`h-[40px] px-[20px] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] transition-all shadow-sm ${
                  empresaSelecionada.acessosUtilizados > 0
                    ? 'bg-[#e2e8f0] text-[#8c8c8f] cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#dc2626] to-[#ef4444] text-white hover:from-[#b91c1c] hover:to-[#dc2626]'
                }`}
              >
                Confirmar Exclusão
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Adicionar Acessos */}
      {modalAcessos && empresaSelecionada && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-[20px]">
          <div className="bg-white rounded-[16px] w-full max-w-[500px] shadow-xl">
            <div className="flex items-center justify-between p-[24px] border-b border-[#e2e8f0]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d]">
                Adicionar Acessos
              </h2>
              <button
                onClick={() => setModalAcessos(false)}
                className="p-[8px] text-[#8c8c8f] hover:bg-[#f1f5f9] rounded-[6px] transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-[24px]">
              <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#2d2d2d] mb-[8px]">
                Adicionar acessos para a empresa:
              </p>
              <div className="bg-[#f8fafc] rounded-[8px] p-[16px] mt-[12px] mb-[20px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#2d2d2d]">
                  {empresaSelecionada.nome}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[4px]">
                  CNPJ: {empresaSelecionada.cnpj}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f]">
                  Acessos atuais: {empresaSelecionada.acessosUtilizados}/{empresaSelecionada.limiteAcessos}
                </p>
              </div>

              <div className="space-y-[16px]">
                <div>
                  <label className="block font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] mb-[8px]">
                    Quantidade de Acessos
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantidadeAcessos}
                    onChange={(e) => setQuantidadeAcessos(parseInt(e.target.value) || 1)}
                    className="w-full h-[44px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                    placeholder="Quantidade de acessos"
                  />
                </div>

                <div>
                  <label className="block font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] mb-[8px]">
                    Valor Total Cobrado
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={valorAcessos}
                    onChange={(e) => setValorAcessos(parseFloat(e.target.value) || 1)}
                    className="w-full h-[44px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                    placeholder="Valor em reais (R$)"
                  />
                  <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f] mt-[4px]">
                    Total a cobrar: {formatarMoeda(valorAcessos)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-[12px] p-[24px] border-t border-[#e2e8f0]">
              <button
                onClick={() => setModalAcessos(false)}
                className="h-[40px] px-[20px] border border-[#e2e8f0] text-[#2d2d2d] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] hover:bg-[#f8fafc] transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={adicionarAcessos}
                className="h-[40px] px-[20px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] hover:from-[#1e40af] hover:to-[#2563EB] transition-all shadow-sm"
              >
                Adicionar Acessos
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Adicionar Digitacões */}
      {modalDigitacoes && empresaSelecionada && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-[20px]">
          <div className="bg-white rounded-[16px] w-full max-w-[500px] shadow-xl">
            <div className="flex items-center justify-between p-[24px] border-b border-[#e2e8f0]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d]">
                Adicionar Digitações
              </h2>
              <button
                onClick={() => setModalDigitacoes(false)}
                className="p-[8px] text-[#8c8c8f] hover:bg-[#f1f5f9] rounded-[6px] transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-[24px]">
              <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#2d2d2d] mb-[8px]">
                Adicionar digitações para a empresa:
              </p>
              <div className="bg-[#f8fafc] rounded-[8px] p-[16px] mt-[12px] mb-[20px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#2d2d2d]">
                  {empresaSelecionada.nome}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[4px]">
                  CNPJ: {empresaSelecionada.cnpj}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f]">
                  Digitações atuais: {empresaSelecionada.digitacoesUtilizadas}/{empresaSelecionada.limiteDigitacoes}
                </p>
              </div>

              <div className="space-y-[16px]">
                <div>
                  <label className="block font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] mb-[8px]">
                    Quantidade de Digitações
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantidadeDigitacoes}
                    onChange={(e) => setQuantidadeDigitacoes(parseInt(e.target.value) || 1)}
                    className="w-full h-[44px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                    placeholder="Quantidade de digitações"
                  />
                </div>

                <div>
                  <label className="block font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] mb-[8px]">
                    Valor Total Cobrado
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={valorDigitacoes}
                    onChange={(e) => setValorDigitacoes(parseFloat(e.target.value) || 1)}
                    className="w-full h-[44px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                    placeholder="Valor em reais (R$)"
                  />
                  <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f] mt-[4px]">
                    Total a cobrar: {formatarMoeda(valorDigitacoes)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-[12px] p-[24px] border-t border-[#e2e8f0]">
              <button
                onClick={() => setModalDigitacoes(false)}
                className="h-[40px] px-[20px] border border-[#e2e8f0] text-[#2d2d2d] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] hover:bg-[#f8fafc] transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={adicionarDigitacoes}
                className="h-[40px] px-[20px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] hover:from-[#1e40af] hover:to-[#2563EB] transition-all shadow-sm"
              >
                Adicionar Digitações
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}