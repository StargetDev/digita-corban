import { useState } from 'react';
import { Search, Plus, Edit2, Trash2, X, UserX, KeyRound, Shield, Users, Briefcase, UserCog } from 'lucide-react';

type TipoPerfil = 'master' | 'gestor' | 'vendedor' | 'representante';

interface Usuario {
  id: number;
  empresa: string;
  empresaId: number; // ID da empresa para isolamento de dados
  nome: string;
  email: string;
  whatsapp: string;
  perfil: TipoPerfil;
  status: 'ativo' | 'inativo';
  dataCadastro: string;
  gestorId?: number; // ID do gestor responsável (para vendedores)
  representanteId?: number; // ID do representante (para gestores)
  limiteUsuarios?: number; // Limite de usuários que o gestor pode criar
  usuariosAtivos?: number; // Quantidade de usuários ativos do gestor
}

interface UsuariosProps {
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

export function Usuarios({ usuarioLogado }: UsuariosProps) {
  const PERFIL_USUARIO_LOGADO: TipoPerfil = usuarioLogado.perfil;
  const ID_USUARIO_LOGADO = usuarioLogado.id;
  const EMPRESA_ID_USUARIO_LOGADO = usuarioLogado.empresaId;

  // Lista de empresas cadastradas
  const empresasCadastradas = [
    { id: 0, nome: 'Starget' },
    { id: 1, nome: 'Tech Solutions Ltda' },
    { id: 2, nome: 'Inovação Digital Corp' },
    { id: 3, nome: 'Soluções Prime' },
    { id: 4, nome: 'Mega Empreendimentos' },
    { id: 5, nome: 'Consult Business' }
  ];

  const [usuarios, setUsuarios] = useState<Usuario[]>(([
    {
      id: 1,
      empresa: 'Starget',
      empresaId: 0,
      nome: 'Adriano Master',
      email: 'adriano@starget.com.br',
      whatsapp: '(11) 99999-0000',
      perfil: 'master',
      status: 'ativo',
      dataCadastro: '01/01/2025'
    },
    {
      id: 2,
      empresa: 'Tech Solutions Ltda',
      empresaId: 1,
      nome: 'João Silva',
      email: 'joao.silva@techsolutions.com',
      whatsapp: '(11) 98765-4321',
      perfil: 'gestor',
      status: 'ativo',
      dataCadastro: '15/01/2025',
      representanteId: 4,
      limiteUsuarios: 10,
      usuariosAtivos: 3
    },
    {
      id: 3,
      empresa: 'Tech Solutions Ltda',
      empresaId: 1,
      nome: 'Maria Santos',
      email: 'maria.santos@techsolutions.com',
      whatsapp: '(11) 97654-3210',
      perfil: 'vendedor',
      status: 'ativo',
      dataCadastro: '20/01/2025',
      gestorId: 2
    },
    {
      id: 4,
      empresa: 'Starget',
      empresaId: 0,
      nome: 'Paulo Representante',
      email: 'paulo@starget.com.br',
      whatsapp: '(11) 96543-2109',
      perfil: 'representante',
      status: 'ativo',
      dataCadastro: '10/01/2025'
    },
    {
      id: 5,
      empresa: 'Tech Solutions Ltda',
      empresaId: 1,
      nome: 'Ana Costa',
      email: 'ana.costa@techsolutions.com',
      whatsapp: '(11) 95432-1098',
      perfil: 'vendedor',
      status: 'ativo',
      dataCadastro: '22/01/2025',
      gestorId: 2
    },
    {
      id: 6,
      empresa: 'Tech Solutions Ltda',
      empresaId: 1,
      nome: 'Pedro Oliveira',
      email: 'pedro@techsolutions.com',
      whatsapp: '(11) 94321-0987',
      perfil: 'vendedor',
      status: 'inativo',
      dataCadastro: '25/01/2025',
      gestorId: 2
    },
    {
      id: 7,
      empresa: 'Inovação Digital Corp',
      empresaId: 2,
      nome: 'Roberto Almeida',
      email: 'roberto@inovacaodigital.com',
      whatsapp: '(21) 98888-7777',
      perfil: 'gestor',
      status: 'ativo',
      dataCadastro: '10/02/2025',
      representanteId: 4,
      limiteUsuarios: 15,
      usuariosAtivos: 2
    },
    {
      id: 8,
      empresa: 'Inovação Digital Corp',
      empresaId: 2,
      nome: 'Fernanda Lima',
      email: 'fernanda@inovacaodigital.com',
      whatsapp: '(21) 97777-6666',
      perfil: 'vendedor',
      status: 'ativo',
      dataCadastro: '15/02/2025',
      gestorId: 7
    },
    {
      id: 9,
      empresa: 'Inovação Digital Corp',
      empresaId: 2,
      nome: 'Carlos Eduardo',
      email: 'carlos@inovacaodigital.com',
      whatsapp: '(21) 96666-5555',
      perfil: 'vendedor',
      status: 'ativo',
      dataCadastro: '20/02/2025',
      gestorId: 7
    }
  ] as Usuario[]));

  const [modalAberto, setModalAberto] = useState(false);
  const [modalExclusao, setModalExclusao] = useState(false);
  const [modalResetSenha, setModalResetSenha] = useState(false);
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState('');
  const [showNovaSenha, setShowNovaSenha] = useState(false);
  const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<Usuario | null>(null);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [busca, setBusca] = useState('');
  const [filtroStatus, setFiltroStatus] = useState<'todos' | 'ativo' | 'inativo'>('todos');
  const [filtroPerfil, setFiltroPerfil] = useState<'todos' | TipoPerfil>('todos');

  const [formData, setFormData] = useState({
    empresa: '',
    empresaId: 0,
    nome: '',
    email: '',
    whatsapp: '',
    perfil: 'vendedor' as TipoPerfil,
    limiteUsuarios: 5
  });

  const getPerfilConfig = (perfil: TipoPerfil) => {
    const configs = {
      'master': {
        label: 'Master',
        icon: Shield,
        bg: 'bg-gradient-to-br from-[#7c3aed] to-[#5b21b6]',
        text: 'text-[#7c3aed]',
        bgLight: 'bg-[#f3e8ff]',
        description: 'Acesso total ao sistema'
      },
      'gestor': {
        label: 'Gestor',
        icon: Briefcase,
        bg: 'bg-gradient-to-br from-[#2563EB] to-[#1e40af]',
        text: 'text-[#2563EB]',
        bgLight: 'bg-[#dbeafe]',
        description: 'Gerencia campanhas e vendedores'
      },
      'vendedor': {
        label: 'Vendedor',
        icon: Users,
        bg: 'bg-gradient-to-br from-[#10b981] to-[#059669]',
        text: 'text-[#10b981]',
        bgLight: 'bg-[#d1fae5]',
        description: 'Acesso a campanhas vinculadas'
      },
      'representante': {
        label: 'Representante',
        icon: UserCog,
        bg: 'bg-gradient-to-br from-[#f59e0b] to-[#d97706]',
        text: 'text-[#f59e0b]',
        bgLight: 'bg-[#fef3c7]',
        description: 'Gerencia carteira de clientes'
      }
    };
    return configs[perfil];
  };

  // Filtrar usuários baseado no perfil do usuário logado
  const getUsuariosVisiveis = () => {
    if (PERFIL_USUARIO_LOGADO === 'master') {
      return usuarios; // Master vê todos
    } else if (PERFIL_USUARIO_LOGADO === 'gestor') {
      // Gestor vê apenas seus vendedores e ele mesmo
      return usuarios.filter(u => u.gestorId === ID_USUARIO_LOGADO || u.id === ID_USUARIO_LOGADO);
    } else if (PERFIL_USUARIO_LOGADO === 'representante') {
      // Representante vê seus gestores e os vendedores desses gestores
      const gestoresDoRepresentante = usuarios.filter(u => u.representanteId === ID_USUARIO_LOGADO);
      const idsGestores = gestoresDoRepresentante.map(g => g.id);
      return usuarios.filter(u => 
        u.representanteId === ID_USUARIO_LOGADO || 
        (u.gestorId && idsGestores.includes(u.gestorId))
      );
    } else {
      // Vendedor vê apenas ele mesmo
      return usuarios.filter(u => u.id === ID_USUARIO_LOGADO);
    }
  };

  const usuariosVisiveis = getUsuariosVisiveis();

  const abrirModalNovo = () => {
    // Gestor só pode criar vendedores
    const perfilPadrao = PERFIL_USUARIO_LOGADO === 'gestor' ? 'vendedor' : 'gestor';
    
    setFormData({ 
      empresa: PERFIL_USUARIO_LOGADO === 'gestor' ? usuarios.find(u => u.id === ID_USUARIO_LOGADO)?.empresa || '' : '',
      empresaId: PERFIL_USUARIO_LOGADO === 'gestor' ? usuarios.find(u => u.id === ID_USUARIO_LOGADO)?.empresaId || 0 : 0,
      nome: '', 
      email: '', 
      whatsapp: '',
      perfil: perfilPadrao,
      limiteUsuarios: 5
    });
    setModoEdicao(false);
    setUsuarioSelecionado(null);
    setModalAberto(true);
  };

  const abrirModalEdicao = (usuario: Usuario) => {
    setFormData({
      empresa: usuario.empresa,
      empresaId: usuario.empresaId,
      nome: usuario.nome,
      email: usuario.email,
      whatsapp: usuario.whatsapp,
      perfil: usuario.perfil,
      limiteUsuarios: usuario.limiteUsuarios || 5
    });
    setModoEdicao(true);
    setUsuarioSelecionado(usuario);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setFormData({ empresa: '', empresaId: 0, nome: '', email: '', whatsapp: '', perfil: 'vendedor', limiteUsuarios: 5 });
    setUsuarioSelecionado(null);
    setModoEdicao(false);
  };

  const salvarUsuario = () => {
    if (!formData.empresa || !formData.nome || !formData.email || !formData.whatsapp) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    // Buscar nome da empresa selecionada
    const empresaSelecionada = empresasCadastradas.find(e => e.id === formData.empresaId);
    const nomeEmpresa = empresaSelecionada?.nome || formData.empresa;

    // Verificar limite de usuários para gestores
    if (PERFIL_USUARIO_LOGADO === 'gestor' && !modoEdicao) {
      const gestor = usuarios.find(u => u.id === ID_USUARIO_LOGADO);
      if (gestor && gestor.usuariosAtivos && gestor.limiteUsuarios) {
        if (gestor.usuariosAtivos >= gestor.limiteUsuarios) {
          alert(`Você atingiu o limite de ${gestor.limiteUsuarios} usuários. Entre em contato com o suporte para aumentar seu limite.`);
          return;
        }
      }
    }

    if (modoEdicao && usuarioSelecionado) {
      setUsuarios(usuarios.map(u => 
        u.id === usuarioSelecionado.id 
          ? { 
              ...u, 
              ...formData,
              empresa: nomeEmpresa,
              limiteUsuarios: formData.perfil === 'gestor' ? formData.limiteUsuarios : undefined
            }
          : u
      ));
    } else {
      // Gerar empresaId automaticamente se for criação de novo gestor pelo Master
      let novaEmpresaId = formData.empresaId;
      if (PERFIL_USUARIO_LOGADO === 'master' && formData.perfil === 'gestor' && !modoEdicao) {
        // Buscar o maior empresaId existente e incrementar
        const maxEmpresaId = Math.max(...usuarios.filter(u => u.empresaId > 0).map(u => u.empresaId), 0);
        novaEmpresaId = maxEmpresaId + 1;
      }

      const novoUsuario: Usuario = {
        id: Math.max(...usuarios.map(u => u.id)) + 1,
        ...formData,
        empresa: nomeEmpresa,
        empresaId: novaEmpresaId,
        status: 'ativo',
        dataCadastro: new Date().toLocaleDateString('pt-BR'),
        gestorId: PERFIL_USUARIO_LOGADO === 'gestor' ? ID_USUARIO_LOGADO : undefined,
        limiteUsuarios: formData.perfil === 'gestor' ? formData.limiteUsuarios : undefined,
        usuariosAtivos: formData.perfil === 'gestor' ? 0 : undefined
      };
      setUsuarios([...usuarios, novoUsuario]);

      // Atualizar contagem de usuários ativos do gestor
      if (PERFIL_USUARIO_LOGADO === 'gestor') {
        setUsuarios(prevUsuarios => prevUsuarios.map(u => 
          u.id === ID_USUARIO_LOGADO && u.usuariosAtivos !== undefined
            ? { ...u, usuariosAtivos: u.usuariosAtivos + 1 }
            : u
        ));
      }
    }

    fecharModal();
  };

  const alternarStatus = (id: number) => {
    setUsuarios(usuarios.map(u => {
      if (u.id === id) {
        const novoStatus = u.status === 'ativo' ? 'inativo' : 'ativo';
        
        // Atualizar contagem de usuários ativos do gestor
        if (u.gestorId) {
          const ajuste = novoStatus === 'ativo' ? 1 : -1;
          setUsuarios(prevUsuarios => prevUsuarios.map(gestor => 
            gestor.id === u.gestorId && gestor.usuariosAtivos !== undefined
              ? { ...gestor, usuariosAtivos: gestor.usuariosAtivos + ajuste }
              : gestor
          ));
        }
        
        return { ...u, status: novoStatus };
      }
      return u;
    }));
  };

  const abrirModalExclusao = (usuario: Usuario) => {
    setUsuarioSelecionado(usuario);
    setModalExclusao(true);
  };

  const confirmarExclusao = () => {
    if (usuarioSelecionado) {
      // Se for um vendedor ativo, decrementar contador do gestor
      if (usuarioSelecionado.gestorId && usuarioSelecionado.status === 'ativo') {
        setUsuarios(usuarios.map(u => 
          u.id === usuarioSelecionado.gestorId && u.usuariosAtivos !== undefined
            ? { ...u, usuariosAtivos: u.usuariosAtivos - 1 }
            : u
        ));
      }
      
      setUsuarios(usuarios.filter(u => u.id !== usuarioSelecionado.id));
    }
    setModalExclusao(false);
    setUsuarioSelecionado(null);
  };

  const abrirModalResetSenha = (usuario: Usuario) => {
    setUsuarioSelecionado(usuario);
    setModalResetSenha(true);
  };

  const confirmarResetSenha = () => {
    if (usuarioSelecionado) {
      if (novaSenha !== confirmarNovaSenha) {
        alert('As senhas não coincidem');
        return;
      }
      if (novaSenha.length < 6) {
        alert('A senha deve ter no mínimo 6 caracteres');
        return;
      }
      alert(`Senha do usuário ${usuarioSelecionado.nome} resetada com sucesso`);
    }
    setModalResetSenha(false);
    setUsuarioSelecionado(null);
    setNovaSenha('');
    setConfirmarNovaSenha('');
  };

  const usuariosFiltrados = usuariosVisiveis.filter(usuario => {
    const matchBusca = 
      usuario.nome.toLowerCase().includes(busca.toLowerCase()) ||
      usuario.empresa.toLowerCase().includes(busca.toLowerCase()) ||
      usuario.email.toLowerCase().includes(busca.toLowerCase()) ||
      usuario.whatsapp.includes(busca);
    
    const matchStatus = filtroStatus === 'todos' || usuario.status === filtroStatus;
    const matchPerfil = filtroPerfil === 'todos' || usuario.perfil === filtroPerfil;

    return matchBusca && matchStatus && matchPerfil;
  });

  const totalAtivos = usuariosVisiveis.filter(u => u.status === 'ativo').length;
  const totalInativos = usuariosVisiveis.filter(u => u.status === 'inativo').length;
  const totalGestores = usuariosVisiveis.filter(u => u.perfil === 'gestor').length;
  const totalVendedores = usuariosVisiveis.filter(u => u.perfil === 'vendedor').length;

  // Verificar se usuário pode criar novos usuários
  const podeAdicionar = PERFIL_USUARIO_LOGADO === 'master' || PERFIL_USUARIO_LOGADO === 'gestor';

  // Obter informações do gestor logado
  const gestorLogado = usuarios.find(u => u.id === ID_USUARIO_LOGADO && u.perfil === 'gestor');

  return (
    <div className="h-full overflow-y-auto bg-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto p-[24px]">
        {/* Header */}
        <div className="mb-[20px]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] text-[22px] text-[#2d2d2d]">
            Usuários
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[2px]">
            Gerencie os usuários do sistema por perfil de acesso
          </p>
        </div>

        {/* Limite de Usuários para Gestores */}
        {PERFIL_USUARIO_LOGADO === 'gestor' && gestorLogado && (
          <div className="bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-[12px] p-[20px] mb-[20px] shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-white">
                  Limite de Usuários
                </h3>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-white/80 mt-[4px]">
                  Gerencie sua equipe de vendedores
                </p>
              </div>
              <div className="text-right">
                <div className="font-['Inter:Bold',sans-serif] text-[28px] text-white leading-none">
                  {gestorLogado.usuariosAtivos || 0}/{gestorLogado.limiteUsuarios || 0}
                </div>
                <p className="font-['Inter:Regular',sans-serif] text-[12px] text-white/80 mt-[4px]">
                  usuários ativos
                </p>
              </div>
            </div>
            <div className="mt-[16px] bg-white/20 h-[8px] rounded-full overflow-hidden">
              <div 
                className="bg-white h-full rounded-full transition-all duration-300"
                style={{ 
                  width: `${((gestorLogado.usuariosAtivos || 0) / (gestorLogado.limiteUsuarios || 1)) * 100}%` 
                }}
              />
            </div>
          </div>
        )}

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[16px] mb-[24px]">
          <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#e2e8f0]">
            <div className="flex items-center gap-[12px]">
              <div className="flex items-center justify-center w-[36px] h-[36px] bg-gradient-to-br from-[#2563EB] to-[#1e40af] rounded-[8px]">
                <Users size={18} className="text-white" />
              </div>
              <div>
                <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                  Total de Usuários
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#2d2d2d] leading-none">
                  {usuariosVisiveis.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#e2e8f0]">
            <div className="flex items-center gap-[12px]">
              <div className="flex items-center justify-center w-[36px] h-[36px] bg-gradient-to-br from-[#10b981] to-[#059669] rounded-[8px]">
                <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                  Usuários Ativos
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#2d2d2d] leading-none">
                  {totalAtivos}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#e2e8f0]">
            <div className="flex items-center gap-[12px]">
              <div className="flex items-center justify-center w-[36px] h-[36px] bg-gradient-to-br from-[#2563EB] to-[#1e40af] rounded-[8px]">
                <Briefcase size={18} className="text-white" />
              </div>
              <div>
                <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                  Gestores
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#2d2d2d] leading-none">
                  {totalGestores}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[12px] p-[20px] shadow-sm border border-[#e2e8f0]">
            <div className="flex items-center gap-[12px]">
              <div className="flex items-center justify-center w-[36px] h-[36px] bg-gradient-to-br from-[#10b981] to-[#059669] rounded-[8px]">
                <Users size={18} className="text-white" />
              </div>
              <div>
                <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                  Vendedores
                </p>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#2d2d2d] leading-none">
                  {totalVendedores}
                </p>
              </div>
            </div>
          </div>
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
                  placeholder="Buscar por nome, empresa, email ou whatsapp..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="w-full h-[40px] pl-[40px] pr-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>

              {/* Filtro Perfil */}
              <select
                value={filtroPerfil}
                onChange={(e) => setFiltroPerfil(e.target.value as 'todos' | TipoPerfil)}
                className="h-[40px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
              >
                <option value="todos">Todos os perfis</option>
                <option value="master">Master</option>
                <option value="gestor">Gestor</option>
                <option value="vendedor">Vendedor</option>
                <option value="representante">Representante</option>
              </select>

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
            {podeAdicionar && (
              <button
                onClick={abrirModalNovo}
                className="flex items-center gap-[8px] h-[40px] px-[16px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] hover:from-[#1e40af] hover:to-[#2563EB] transition-all shadow-sm"
              >
                <Plus size={18} />
                {PERFIL_USUARIO_LOGADO === 'gestor' ? 'Novo Vendedor' : 'Novo Usuário'}
              </button>
            )}
          </div>
        </div>

        {/* Tabela de Usuários */}
        <div className="bg-white rounded-[12px] shadow-sm border border-[#e2e8f0] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                <tr>
                  <th className="px-[20px] py-[12px] text-left font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Perfil
                  </th>
                  <th className="px-[20px] py-[12px] text-left font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Empresa
                  </th>
                  <th className="px-[20px] py-[12px] text-left font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Nome
                  </th>
                  <th className="px-[20px] py-[12px] text-left font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Email
                  </th>
                  <th className="px-[20px] py-[12px] text-left font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    WhatsApp
                  </th>
                  <th className="px-[20px] py-[12px] text-center font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Status
                  </th>
                  <th className="px-[20px] py-[12px] text-center font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                {usuariosFiltrados.map((usuario) => {
                  const perfilConfig = getPerfilConfig(usuario.perfil);
                  const Icon = perfilConfig.icon;
                  const podeEditar = PERFIL_USUARIO_LOGADO === 'master' || 
                                     (PERFIL_USUARIO_LOGADO === 'gestor' && usuario.perfil === 'vendedor' && usuario.gestorId === ID_USUARIO_LOGADO);
                  
                  return (
                    <tr key={usuario.id} className="border-b border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors">
                      <td className="px-[20px] py-[16px]">
                        <div className="flex items-center gap-[8px]">
                          <div className={`flex items-center justify-center w-[32px] h-[32px] ${perfilConfig.bg} rounded-[6px]`}>
                            <Icon size={16} className="text-white" />
                          </div>
                          <div>
                            <p className={`font-['Inter:Semi_Bold',sans-serif] text-[13px] ${perfilConfig.text}`}>
                              {perfilConfig.label}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-[20px] py-[16px]">
                        <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d]">
                          {usuario.empresa}
                        </p>
                      </td>
                      <td className="px-[20px] py-[16px]">
                        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#2d2d2d]">
                          {usuario.nome}
                        </p>
                      </td>
                      <td className="px-[20px] py-[16px]">
                        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#2d2d2d]">
                          {usuario.email}
                        </p>
                      </td>
                      <td className="px-[20px] py-[16px]">
                        <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#2d2d2d]">
                          {usuario.whatsapp}
                        </p>
                      </td>
                      <td className="px-[20px] py-[16px] text-center">
                        <div className="flex items-center justify-center gap-[6px]">
                          <button
                            onClick={() => alternarStatus(usuario.id)}
                            disabled={!podeEditar}
                            className={`relative inline-flex items-center h-[18px] w-[34px] rounded-full transition-all duration-300 ${
                              usuario.status === 'ativo'
                                ? 'bg-[#2563EB]'
                                : 'bg-[#e2e8f0]'
                            } ${!podeEditar ? 'opacity-50 cursor-not-allowed' : ''}`}
                            title={usuario.status === 'ativo' ? 'Desativar usuário' : 'Ativar usuário'}
                          >
                            <span
                              className={`inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-sm transition-transform duration-300 ${
                                usuario.status === 'ativo' ? 'translate-x-[18px]' : 'translate-x-[2px]'
                              }`}
                            />
                          </button>
                          <span className={`font-['Inter:Semi_Bold',sans-serif] text-[11px] ${
                            usuario.status === 'ativo' ? 'text-[#2563EB]' : 'text-[#8c8c8f]'
                          }`}>
                            {usuario.status === 'ativo' ? 'Ativo' : 'Inativo'}
                          </span>
                        </div>
                      </td>
                      <td className="px-[20px] py-[16px]">
                        <div className="flex items-center justify-center gap-[8px]">
                          {podeEditar && (
                            <>
                              <button
                                onClick={() => abrirModalEdicao(usuario)}
                                className="p-[8px] text-[#2563EB] hover:bg-[#dbeafe] rounded-[6px] transition-all"
                                title="Editar usuário"
                              >
                                <Edit2 size={16} />
                              </button>
                              <button
                                onClick={() => abrirModalResetSenha(usuario)}
                                className="p-[8px] text-[#2563EB] hover:bg-[#dbeafe] rounded-[6px] transition-all"
                                title="Resetar senha"
                              >
                                <KeyRound size={16} />
                              </button>
                              <button
                                onClick={() => abrirModalExclusao(usuario)}
                                className="p-[8px] text-[#dc2626] hover:bg-[#fee2e2] rounded-[6px] transition-all"
                                title="Excluir usuário"
                              >
                                <Trash2 size={16} />
                              </button>
                            </>
                          )}
                          {!podeEditar && (
                            <span className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                              Sem permissão
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {usuariosFiltrados.length === 0 && (
              <div className="py-[40px] text-center">
                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#8c8c8f]">
                  Nenhum usuário encontrado
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de Adicionar/Editar */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-[20px]">
          <div className="bg-white rounded-[16px] w-full max-w-[600px] max-h-[90vh] overflow-y-auto shadow-xl">
            {/* Header do Modal */}
            <div className="flex items-center justify-between p-[24px] border-b border-[#e2e8f0]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d]">
                {modoEdicao ? 'Editar Usuário' : (PERFIL_USUARIO_LOGADO === 'gestor' ? 'Novo Vendedor' : 'Novo Usuário')}
              </h2>
              <button
                onClick={fecharModal}
                className="p-[8px] text-[#8c8c8f] hover:bg-[#f1f5f9] rounded-[6px] transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-[24px] space-y-[16px]">
              <div>
                <label className="block font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] mb-[8px]">
                  Empresa *
                </label>
                <select
                  value={formData.empresaId}
                  onChange={(e) => setFormData({ ...formData, empresaId: parseInt(e.target.value) || 0 })}
                  className="w-full h-[44px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                  disabled={PERFIL_USUARIO_LOGADO === 'gestor'}
                >
                  {empresasCadastradas.map(empresa => (
                    <option key={empresa.id} value={empresa.id}>
                      {empresa.nome}
                    </option>
                  ))}
                </select>
              </div>

              {PERFIL_USUARIO_LOGADO === 'master' && (
                <div>
                  <label className="block font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] mb-[8px]">
                    Perfil de Acesso *
                  </label>
                  <select
                    value={formData.perfil}
                    onChange={(e) => setFormData({ ...formData, perfil: e.target.value as TipoPerfil })}
                    className="w-full h-[44px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                    disabled={modoEdicao}
                  >
                    <option value="master">Master</option>
                    <option value="gestor">Gestor</option>
                    <option value="vendedor">Vendedor</option>
                    <option value="representante">Representante</option>
                  </select>
                  <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f] mt-[4px]">
                    {getPerfilConfig(formData.perfil).description}
                  </p>
                </div>
              )}

              <div>
                <label className="block font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] mb-[8px]">
                  Nome *
                </label>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Digite o nome completo"
                  className="w-full h-[44px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>

              <div>
                <label className="block font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] mb-[8px]">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="exemplo@empresa.com"
                  className="w-full h-[44px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>

              <div>
                <label className="block font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] mb-[8px]">
                  WhatsApp *
                </label>
                <input
                  type="text"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="(00) 00000-0000"
                  className="w-full h-[44px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>
            </div>

            {/* Footer do Modal */}
            <div className="flex items-center justify-end gap-[12px] p-[24px] border-t border-[#e2e8f0]">
              <button
                onClick={fecharModal}
                className="h-[40px] px-[20px] border border-[#e2e8f0] text-[#2d2d2d] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] hover:bg-[#f8fafc] transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={salvarUsuario}
                className="h-[40px] px-[20px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] hover:from-[#1e40af] hover:to-[#2563EB] transition-all shadow-sm"
              >
                {modoEdicao ? 'Salvar Alterações' : (PERFIL_USUARIO_LOGADO === 'gestor' ? 'Adicionar Vendedor' : 'Adicionar Usuário')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Confirmação de Exclusão */}
      {modalExclusao && usuarioSelecionado && (
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
                Tem certeza que deseja excluir o usuário:
              </p>
              <div className="bg-[#f8fafc] rounded-[8px] p-[16px] mt-[12px]">
                <div className="flex items-center gap-[12px] mb-[8px]">
                  <div className={`flex items-center justify-center w-[32px] h-[32px] ${getPerfilConfig(usuarioSelecionado.perfil).bg} rounded-[6px]`}>
                    {(() => {
                      const Icon = getPerfilConfig(usuarioSelecionado.perfil).icon;
                      return <Icon size={16} className="text-white" />;
                    })()}
                  </div>
                  <span className={`font-['Inter:Semi_Bold',sans-serif] text-[12px] ${getPerfilConfig(usuarioSelecionado.perfil).text}`}>
                    {getPerfilConfig(usuarioSelecionado.perfil).label}
                  </span>
                </div>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#2d2d2d]">
                  {usuarioSelecionado.nome}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[4px]">
                  {usuarioSelecionado.empresa}
                </p>
              </div>
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#dc2626] mt-[16px]">
                Esta ação não poderá ser desfeita.
              </p>
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
                className="h-[40px] px-[20px] bg-gradient-to-r from-[#dc2626] to-[#ef4444] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] hover:from-[#b91c1c] hover:to-[#dc2626] transition-all shadow-sm"
              >
                Confirmar Exclusão
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Reset de Senha */}
      {modalResetSenha && usuarioSelecionado && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-[20px]">
          <div className="bg-white rounded-[16px] w-full max-w-[500px] shadow-xl">
            <div className="flex items-center justify-between p-[24px] border-b border-[#e2e8f0]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#2d2d2d]">
                Resetar Senha
              </h2>
              <button
                onClick={() => setModalResetSenha(false)}
                className="p-[8px] text-[#8c8c8f] hover:bg-[#f1f5f9] rounded-[6px] transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-[24px]">
              <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#2d2d2d] mb-[8px]">
                Resetar senha para o usuário:
              </p>
              <div className="bg-[#f8fafc] rounded-[8px] p-[16px] mt-[12px]">
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#2d2d2d]">
                  {usuarioSelecionado.nome}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[4px]">
                  {usuarioSelecionado.empresa}
                </p>
              </div>
              <div className="mt-[16px]">
                <label className="block font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] mb-[8px]">
                  Nova Senha *
                </label>
                <div className="relative">
                  <input
                    type={showNovaSenha ? 'text' : 'password'}
                    value={novaSenha}
                    onChange={(e) => setNovaSenha(e.target.value)}
                    placeholder="Digite a nova senha"
                    className="w-full h-[44px] px-[12px] pr-[40px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                  <button
                    onClick={() => setShowNovaSenha(!showNovaSenha)}
                    className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#8c8c8f] hover:text-[#2563EB] transition-all"
                  >
                    {showNovaSenha ? (
                      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-[16px]">
                <label className="block font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] mb-[8px]">
                  Confirmar Nova Senha *
                </label>
                <div className="relative">
                  <input
                    type={showConfirmarSenha ? 'text' : 'password'}
                    value={confirmarNovaSenha}
                    onChange={(e) => setConfirmarNovaSenha(e.target.value)}
                    placeholder="Confirme a nova senha"
                    className="w-full h-[44px] px-[12px] pr-[40px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                  <button
                    onClick={() => setShowConfirmarSenha(!showConfirmarSenha)}
                    className="absolute right-[12px] top-1/2 -translate-y-1/2 text-[#8c8c8f] hover:text-[#2563EB] transition-all"
                  >
                    {showConfirmarSenha ? (
                      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-[12px] p-[24px] border-t border-[#e2e8f0]">
              <button
                onClick={() => setModalResetSenha(false)}
                className="h-[40px] px-[20px] border border-[#e2e8f0] text-[#2d2d2d] rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] hover:bg-[#f8fafc] transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={confirmarResetSenha}
                className="h-[40px] px-[20px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] hover:from-[#1e40af] hover:to-[#2563EB] transition-all shadow-sm"
              >
                Resetar Senha
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}