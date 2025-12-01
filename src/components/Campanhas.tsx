import { useState } from 'react';
import { Rocket, ChevronLeft, ChevronRight, Search, Phone, Calendar, Clock, MessageCircle, CheckCircle, XCircle, AlertCircle, User, TrendingUp, Users, X, Building2, FileText, Briefcase, ChevronDown, Link, Copy } from 'lucide-react';
import svgPaths from '../imports/svg-w1nx1gdhp4';
import { toast } from 'sonner@2.0.3';
import { ModalDetalhesAcionamento } from './ModalDetalhesAcionamento';

interface Cliente {
  id: number;
  nome: string;
  produto: string;
  valorProposta: number;
  linkFormalizacao: string;
  status: 'selecione' | 'agendar-retorno' | 'cliente-nao-encontrado' | 'sem-interesse' | 'convertido' | 'nao-responde';
  ultimoContato?: string;
  proximoContato?: string;
  observacoes: string;
  historico: HistoricoContato[];
  vendedor: string;
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
  analiseSolicitada?: boolean;
}

interface HistoricoContato {
  id: number;
  data: string;
  hora: string;
  tipo: 'ligacao' | 'whatsapp' | 'agendamento';
  status: 'sucesso' | 'sem-resposta' | 'ocupado';
  observacao: string;
  vendedor: string;
}

interface Agendamento {
  id: number;
  clienteId: number;
  clienteNome: string;
  dataAgendada: string;
  horaAgendada: string;
  vendedor: string;
  status: 'pendente' | 'realizado' | 'cancelado';
  observacao: string;
}

export function Campanhas() {
  const [abaAtiva, setAbaAtiva] = useState<'acionamento' | 'historico' | 'agendamentos'>('acionamento');
  const [clienteAtualIndex, setClienteAtualIndex] = useState(0);
  const [dataAgendamento, setDataAgendamento] = useState('');
  const [horaAgendamento, setHoraAgendamento] = useState('');
  const [whatsappAgendamento, setWhatsappAgendamento] = useState('');
  const [dropdownWhatsAppAberto, setDropdownWhatsAppAberto] = useState(false);
  const [linkCopiado, setLinkCopiado] = useState(false);
  const [modalDetalhesAberto, setModalDetalhesAberto] = useState(false);

  const [clientesAcionamento, setClientesAcionamento] = useState<ClienteAcionamento[]>([
    {
      id: 1,
      nome: 'Maria Silva Santos',
      cpf: '123.456.789-00',
      banco: 'Banco Facta',
      valor: 25800.50,
      produto: 'Margem aumento salário',
      matricula: '1234567890',
      dataNascimento: '15/03/1960',
      valorLiberado: 2000.00,
      parcelaMensal: 156.80,
      prazoMeses: 96,
      contatos: [
        { numero: '(11) 98765-4321', tipo: 'principal' },
        { numero: '(11) 97654-3210', tipo: 'secundario' },
        { numero: '(11) 96543-2109', tipo: 'recado' }
      ],
      vendedor: 'Carlos Mendes',
      linkFormalizacao: 'https://starget.com.br/formalizacao/MRS123456789',
      status: 'selecione'
    },
    {
      id: 2,
      nome: 'João Pedro Costa',
      cpf: '987.654.321-00',
      banco: 'Caixa Econômica',
      valor: 18500.00,
      produto: 'Consignado INSS',
      matricula: '9876543210',
      dataNascimento: '22/07/1955',
      valorLiberado: 1500.00,
      parcelaMensal: 125.50,
      prazoMeses: 84,
      contatos: [
        { numero: '(11) 99876-5432', tipo: 'principal' },
        { numero: '(11) 98765-4321', tipo: 'secundario' }
      ],
      vendedor: 'Ana Paula',
      linkFormalizacao: 'https://starget.com.br/formalizacao/JPC987654321',
      status: 'nao-responde'
    },
    {
      id: 3,
      nome: 'Ana Paula Mendes',
      cpf: '456.789.123-00',
      banco: 'Bradesco',
      valor: 32100.75,
      produto: 'Refinanciamento',
      matricula: '4567891230',
      dataNascimento: '10/11/1958',
      valorLiberado: 3500.00,
      parcelaMensal: 220.00,
      prazoMeses: 120,
      contatos: [
        { numero: '(11) 91234-5678', tipo: 'principal' },
        { numero: '(11) 92345-6789', tipo: 'secundario' },
        { numero: '(11) 93456-7890', tipo: 'recado' }
      ],
      vendedor: 'Roberto Lima',
      linkFormalizacao: 'https://starget.com.br/formalizacao/APM456789123',
      status: 'sem-interesse'
    }
  ]);

  // Clientes do histórico (já acionados)
  const [clientes, setClientes] = useState<Cliente[]>([
    {
      id: 1,
      nome: 'João da Silva',
      produto: 'Aumento INSS',
      valorProposta: 25800.50,
      linkFormalizacao: 'https://formalizacao.facta.com.br/proposta/ABC123',
      status: 'selecione',
      observacoes: 'Cliente em potencial para produto premium',
      historico: [],
      vendedor: 'Carlos Mendes'
    },
    {
      id: 2,
      nome: 'Maria Santos',
      produto: 'Consignado INSS',
      valorProposta: 18500.00,
      linkFormalizacao: 'https://formalizacao.facta.com.br/proposta/DEF456',
      status: 'agendar-retorno',
      ultimoContato: '30/11/2025 14:30',
      observacoes: 'Cliente demonstrou interesse, aguardando análise de documentos',
      historico: [
        {
          id: 1,
          data: '30/11/2025',
          hora: '14:30',
          tipo: 'whatsapp',
          status: 'sucesso',
          observacao: 'Cliente recebeu link e demonstrou interesse',
          vendedor: 'Ana Paula'
        }
      ],
      vendedor: 'Ana Paula'
    },
    {
      id: 3,
      nome: 'Pedro Oliveira',
      produto: 'Refinanciamento',
      valorProposta: 32100.75,
      linkFormalizacao: 'https://formalizacao.facta.com.br/proposta/GHI789',
      status: 'agendar-retorno',
      ultimoContato: '29/11/2025 16:45',
      proximoContato: '01/12/2025 10:00',
      observacoes: 'Cliente muito interessado, agendado retorno',
      historico: [
        {
          id: 1,
          data: '29/11/2025',
          hora: '10:00',
          tipo: 'ligacao',
          status: 'sucesso',
          observacao: 'Primeira ligação, cliente atendeu e demonstrou interesse',
          vendedor: 'Roberto Lima'
        },
        {
          id: 2,
          data: '29/11/2025',
          hora: '16:45',
          tipo: 'whatsapp',
          status: 'sucesso',
          observacao: 'Enviado link de formalização via WhatsApp',
          vendedor: 'Roberto Lima'
        }
      ],
      vendedor: 'Roberto Lima'
    },
    {
      id: 4,
      nome: 'Ana Costa',
      produto: 'Portabilidade',
      valorProposta: 15300.00,
      linkFormalizacao: 'https://formalizacao.facta.com.br/proposta/JKL012',
      status: 'sem-interesse',
      ultimoContato: '28/11/2025 11:20',
      observacoes: 'Cliente não tem interesse no momento',
      historico: [
        {
          id: 1,
          data: '28/11/2025',
          hora: '11:20',
          tipo: 'ligacao',
          status: 'sucesso',
          observacao: 'Cliente informou que não tem interesse',
          vendedor: 'Carlos Mendes'
        }
      ],
      vendedor: 'Carlos Mendes'
    },
    {
      id: 5,
      nome: 'Lucas Ferreira',
      produto: 'Aumento INSS',
      valorProposta: 21750.25,
      linkFormalizacao: 'https://formalizacao.facta.com.br/proposta/MNO345',
      status: 'nao-responde',
      ultimoContato: '30/11/2025 09:15',
      proximoContato: '02/12/2025 14:00',
      observacoes: 'Retorno agendado para segunda-feira às 14h',
      historico: [
        {
          id: 1,
          data: '30/11/2025',
          hora: '09:15',
          tipo: 'whatsapp',
          status: 'sucesso',
          observacao: 'Cliente pediu para retornar na segunda-feira',
          vendedor: 'Ana Paula'
        }
      ],
      vendedor: 'Ana Paula'
    },
    {
      id: 6,
      nome: 'Fernanda Alves',
      produto: 'Consignado INSS',
      valorProposta: 28400.00,
      linkFormalizacao: 'https://formalizacao.facta.com.br/proposta/PQR678',
      status: 'convertido',
      ultimoContato: '29/11/2025 15:30',
      observacoes: 'Proposta formalizada com sucesso!',
      historico: [
        {
          id: 1,
          data: '28/11/2025',
          hora: '10:00',
          tipo: 'ligacao',
          status: 'sucesso',
          observacao: 'Primeira abordagem, cliente interessado',
          vendedor: 'Roberto Lima'
        },
        {
          id: 2,
          data: '28/11/2025',
          hora: '14:00',
          tipo: 'whatsapp',
          status: 'sucesso',
          observacao: 'Link enviado via WhatsApp',
          vendedor: 'Roberto Lima'
        },
        {
          id: 3,
          data: '29/11/2025',
          hora: '15:30',
          tipo: 'whatsapp',
          status: 'sucesso',
          observacao: 'Cliente confirmou formalização',
          vendedor: 'Roberto Lima'
        }
      ],
      vendedor: 'Roberto Lima'
    },
  ]);

  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([
    {
      id: 1,
      clienteId: 1,
      clienteNome: 'Maria Silva Santos',
      dataAgendada: '02/12/2025',
      horaAgendada: '14:00',
      vendedor: 'Carlos Mendes',
      status: 'pendente',
      observacao: 'Cliente pediu retorno após reunião'
    },
    {
      id: 2,
      clienteId: 2,
      clienteNome: 'João Pedro Costa',
      dataAgendada: '01/12/2025',
      horaAgendada: '10:00',
      vendedor: 'Ana Paula',
      status: 'pendente',
      observacao: 'Retornar para finalizar documentação'
    }
  ]);

  const [busca, setBusca] = useState('');
  const [filtroStatus, setFiltroStatus] = useState<'todos' | Cliente['status']>('todos');
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [itensPorPagina] = useState(7);
  const [clienteSelecionado, setClienteSelecionado] = useState<Cliente | null>(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [modalAgendamento, setModalAgendamento] = useState(false);
  const [novaObservacao, setNovaObservacao] = useState('');
  const [dataAgendamentoHistorico, setDataAgendamentoHistorico] = useState('');
  const [horaAgendamentoHistorico, setHoraAgendamentoHistorico] = useState('');
  const [observacaoAgendamento, setObservacaoAgendamento] = useState('');

  const clienteAtual = clientesAcionamento[clienteAtualIndex];

  const getStatusConfig = (status: Cliente['status']) => {
    const configs = {
      'selecione': {
        label: 'Selecione o status',
        bg: 'bg-[#cbd5e1]',
        text: 'text-[#64748b]',
        cor: 'bg-white text-[#64748b] border-[#cbd5e1]'
      },
      'agendar-retorno': {
        label: 'Agendar retorno',
        bg: 'bg-[#f59e0b]',
        text: 'text-white',
        cor: 'bg-[#fef3c7] text-[#92400e] border-[#f59e0b]'
      },
      'convertido': {
        label: 'Convertido',
        bg: 'bg-[#10b981]',
        text: 'text-white',
        cor: 'bg-[#d1fae5] text-[#065f46] border-[#10b981]'
      },
      'cliente-nao-encontrado': {
        label: 'Não encontrado',
        bg: 'bg-[#ef4444]',
        text: 'text-white',
        cor: 'bg-[#fee2e2] text-[#991b1b] border-[#f87171]'
      },
      'sem-interesse': {
        label: 'Sem interesse',
        bg: 'bg-[#ef4444]',
        text: 'text-white',
        cor: 'bg-[#fee2e2] text-[#991b1b] border-[#ef4444]'
      },
      'nao-responde': {
        label: 'Não responde',
        bg: 'bg-[#6b7280]',
        text: 'text-white',
        cor: 'bg-[#f3f4f6] text-[#374151] border-[#9ca3af]'
      }
    };
    return configs[status];
  };

  const calcularMetricas = () => {
    // Filtra apenas clientes com status válido (não "selecione")
    const clientesValidos = clientes.filter(c => c.status !== 'selecione');
    const totalClientes = clientesValidos.length;
    const agendarRetorno = clientesValidos.filter(c => c.status === 'agendar-retorno').length;
    const semInteresse = clientesValidos.filter(c => c.status === 'sem-interesse').length;
    const convertidos = clientesValidos.filter(c => c.status === 'convertido').length;
    const naoResponde = clientesValidos.filter(c => c.status === 'nao-responde').length;
    const taxaConversao = totalClientes > 0 ? (convertidos / totalClientes) * 100 : 0;

    return {
      totalClientes,
      agendarRetorno,
      semInteresse,
      convertidos,
      naoResponde,
      taxaConversao
    };
  };

  const metricas = calcularMetricas();

  const clientesFiltrados = clientes.filter(cliente => {
    // Não mostrar clientes com status "selecione" no histórico
    if (cliente.status === 'selecione') return false;
    
    const matchBusca = 
      cliente.nome.toLowerCase().includes(busca.toLowerCase()) ||
      cliente.produto.toLowerCase().includes(busca.toLowerCase());
    
    const matchStatus = filtroStatus === 'todos' || cliente.status === filtroStatus;

    return matchBusca && matchStatus;
  });

  const totalPaginas = Math.ceil(clientesFiltrados.length / itensPorPagina);
  const indexInicial = (paginaAtual - 1) * itensPorPagina;
  const indexFinal = indexInicial + itensPorPagina;
  const clientesPaginados = clientesFiltrados.slice(indexInicial, indexFinal);

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

  const proximoCliente = () => {
    if (clienteAtualIndex < clientesAcionamento.length - 1) {
      setClienteAtualIndex(clienteAtualIndex + 1);
    }
  };

  const clienteAnterior = () => {
    if (clienteAtualIndex > 0) {
      setClienteAtualIndex(clienteAtualIndex - 1);
    }
  };

  const handleCarregarClienteAgendamento = (agendamento: Agendamento) => {
    const indexCliente = clientesAcionamento.findIndex(c => c.id === agendamento.clienteId);
    if (indexCliente !== -1) {
      setClienteAtualIndex(indexCliente);
      setAbaAtiva('acionamento');
    }
  };

  const handleEnviarWhatsApp = (telefone: string) => {
    const mensagem = `Olá ${clienteAtual.nome}! 👋\n\nTenho uma *Oferta Pré-Aprovada* exclusiva para você!\n\n🏦 *Banco:* ${clienteAtual.banco}\n💰 *Valor Liberado:* R$ ${clienteAtual.valorLiberado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n📊 *Parcela Mensal:* R$ ${clienteAtual.parcelaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n⏰ *Prazo:* ${clienteAtual.prazoMeses} meses\n\nGostaria de saber mais detalhes?\n\nAtenciosamente,\nEquipe Starget`;
    
    const telefoneNumeros = telefone.replace(/\D/g, '');
    const url = `https://wa.me/55${telefoneNumeros}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');
  };

  const handleEnviarWhatsAppHistorico = (cliente: Cliente) => {
    const mensagem = `Olá ${cliente.nome}! 👋\n\nTenho uma ótima oportunidade para você!\n\n*Produto:* ${cliente.produto}\n*Valor da Proposta:* R$ ${cliente.valorProposta.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n\n📋 *Link para Formalização:*\n${cliente.linkFormalizacao}\n\nQualquer dúvida, estou à disposição!\n\nAtenciosamente,\nEquipe Starget`;
    
    const telefone = cliente.telefone.replace(/\D/g, '');
    const url = `https://wa.me/55${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(url, '_blank');

    setClientes(prev => prev.map(c => {
      if (c.id === cliente.id) {
        const novoHistorico: HistoricoContato = {
          id: c.historico.length + 1,
          data: new Date().toLocaleDateString('pt-BR'),
          hora: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
          tipo: 'whatsapp',
          status: 'sucesso',
          observacao: 'Link de formalização enviado via WhatsApp',
          vendedor: c.vendedor
        };

        return {
          ...c,
          status: c.status === 'nao-contatado' ? 'contatado' : c.status,
          ultimoContato: `${novoHistorico.data} ${novoHistorico.hora}`,
          historico: [...c.historico, novoHistorico]
        };
      }
      return c;
    }));
  };

  const handleLigarCliente = (cliente: Cliente) => {
    const telefone = cliente.telefone.replace(/\D/g, '');
    window.open(`tel:${telefone}`, '_self');

    setClientes(prev => prev.map(c => {
      if (c.id === cliente.id) {
        const novoHistorico: HistoricoContato = {
          id: c.historico.length + 1,
          data: new Date().toLocaleDateString('pt-BR'),
          hora: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
          tipo: 'ligacao',
          status: 'sucesso',
          observacao: 'Ligação realizada',
          vendedor: c.vendedor
        };

        return {
          ...c,
          ultimoContato: `${novoHistorico.data} ${novoHistorico.hora}`,
          historico: [...c.historico, novoHistorico]
        };
      }
      return c;
    }));
  };

  const handleAbrirModal = (cliente: Cliente) => {
    setClienteSelecionado(cliente);
    setModalAberto(true);
  };

  const handleFecharModal = () => {
    setModalAberto(false);
    setClienteSelecionado(null);
  };

  const handleAbrirAgendamento = (cliente: Cliente) => {
    setClienteSelecionado(cliente);
    setModalAgendamento(true);
    setDataAgendamentoHistorico('');
    setHoraAgendamentoHistorico('');
    setObservacaoAgendamento('');
  };

  const handleSalvarAgendamento = () => {
    if (!clienteSelecionado || !dataAgendamentoHistorico || !horaAgendamentoHistorico) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    const novoAgendamento: Agendamento = {
      id: agendamentos.length + 1,
      clienteId: clienteSelecionado.id,
      clienteNome: clienteSelecionado.nome,
      dataAgendada: new Date(dataAgendamentoHistorico).toLocaleDateString('pt-BR'),
      horaAgendada: horaAgendamentoHistorico,
      vendedor: clienteSelecionado.vendedor,
      status: 'pendente',
      observacao: observacaoAgendamento
    };

    setAgendamentos(prev => [...prev, novoAgendamento]);

    setClientes(prev => prev.map(c => {
      if (c.id === clienteSelecionado.id) {
        return {
          ...c,
          status: 'agendado',
          proximoContato: `${novoAgendamento.dataAgendada} ${novoAgendamento.horaAgendada}`
        };
      }
      return c;
    }));

    setModalAgendamento(false);
    setClienteSelecionado(null);
    toast.success('Agendamento criado com sucesso!');
  };

  const handleAtualizarStatus = (clienteId: number, novoStatus: Cliente['status']) => {
    setClientes(prev => prev.map(c => {
      if (c.id === clienteId) {
        return {
          ...c,
          status: novoStatus
        };
      }
      return c;
    }));
  };

  const handleAdicionarObservacao = () => {
    if (!clienteSelecionado || !novaObservacao.trim()) return;

    setClientes(prev => prev.map(c => {
      if (c.id === clienteSelecionado.id) {
        return {
          ...c,
          observacoes: novaObservacao
        };
      }
      return c;
    }));

    setNovaObservacao('');
    toast.success('Observação atualizada com sucesso!');
  };

  const handleConfirmarAgendamento = () => {
    if (!dataAgendamento || !horaAgendamento || !whatsappAgendamento) {
      // Validação silenciosa - apenas não avança se os campos não estiverem preenchidos
      return;
    }
    toast.success(`Agendamento confirmado para ${dataAgendamento} às ${horaAgendamento}`);
    setDataAgendamento('');
    setHoraAgendamento('');
    setWhatsappAgendamento('');
    // Avança para o próximo cliente
    if (clienteAtualIndex < clientesAcionamento.length - 1) {
      setClienteAtualIndex(clienteAtualIndex + 1);
    }
  };

  const handleCopiarLink = () => {
    const clienteAtual = clientesAcionamento[clienteAtualIndex];
    navigator.clipboard.writeText(clienteAtual.linkFormalizacao);
    setLinkCopiado(true);
    setTimeout(() => setLinkCopiado(false), 2000);
  };

  const handleAlterarStatus = (novoStatus: 'selecione' | 'agendar-retorno' | 'cliente-nao-encontrado' | 'sem-interesse' | 'convertido' | 'nao-responde') => {
    const novosClientes = [...clientesAcionamento];
    novosClientes[clienteAtualIndex].status = novoStatus;
    setClientesAcionamento(novosClientes);
    // Em produção, aqui você faria uma chamada API para atualizar o status no backend
  };

  const handleSalvarStatusModal = (status: string) => {
    toast.success(`Status "${status}" salvo com sucesso!`);
    // Aqui você pode atualizar o status do cliente se necessário
  };

  return (
    <div className="h-full overflow-y-auto bg-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto p-[24px]">
        {/* Header */}
        <div className="mb-[20px]">
          <h1 className="font-['Inter:Semi_Bold',sans-serif] text-[22px] text-[#2d2d2d]">
            Campanhas
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[2px]">
            {abaAtiva === 'acionamento' 
              ? 'Acione clientes via WhatsApp com ofertas pré-aprovadas'
              : 'Histórico de clientes acionados, agendamentos e negociações'
            }
          </p>
        </div>

        {/* Abas */}
        <div className="flex items-center gap-[8px] mb-[20px] border-b border-[#e2e8f0]">
          <button
            onClick={() => setAbaAtiva('acionamento')}
            className={`px-[20px] py-[12px] font-['Inter:Semi_Bold',sans-serif] text-[14px] border-b-2 transition-all ${
              abaAtiva === 'acionamento'
                ? 'border-[#2563EB] text-[#2563EB]'
                : 'border-transparent text-[#8c8c8f] hover:text-[#2d2d2d]'
            }`}
          >
            <div className="flex items-center gap-[8px]">
              <Rocket size={18} />
              Acionamento
            </div>
          </button>
          <button
            onClick={() => setAbaAtiva('historico')}
            className={`px-[20px] py-[12px] font-['Inter:Semi_Bold',sans-serif] text-[14px] border-b-2 transition-all ${
              abaAtiva === 'historico'
                ? 'border-[#2563EB] text-[#2563EB]'
                : 'border-transparent text-[#8c8c8f] hover:text-[#2d2d2d]'
            }`}
          >
            <div className="flex items-center gap-[8px]">
              <Clock size={18} />
              Histórico
            </div>
          </button>
          <button
            onClick={() => setAbaAtiva('agendamentos')}
            className={`px-[20px] py-[12px] font-['Inter:Semi_Bold',sans-serif] text-[14px] border-b-2 transition-all ${
              abaAtiva === 'agendamentos'
                ? 'border-[#2563EB] text-[#2563EB]'
                : 'border-transparent text-[#8c8c8f] hover:text-[#2d2d2d]'
            }`}
          >
            <div className="flex items-center gap-[8px]">
              <Calendar size={18} />
              Agendamentos
            </div>
          </button>
        </div>

        {/* Conteúdo da Aba de Acionamento */}
        {abaAtiva === 'acionamento' && (
          <div className="flex gap-[16px]">
            {/* Painel Esquerdo - Contatos */}
            <div className="w-[310px] flex-shrink-0">
              <div className="bg-white rounded-[16px] overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] border-[0.909px] border-black/10">
                {/* Header Verde */}
                <div 
                  className="bg-gradient-to-b from-[#5fb371] to-[#4a9c5f] h-[63.991px] flex flex-col items-center justify-center px-[16px]"
                >
                  <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[22px] text-[16px] text-center text-white">
                    {clienteAtual.nome}
                  </p>
                  <p className="font-['Arimo:Regular',sans-serif] text-[12px] text-white/90 mt-[4px]">
                    CPF: {clienteAtual.cpf}
                  </p>
                </div>

                {/* Contatos Encontrados */}
                <div className="p-[16px]">
                  <div className="mb-[16px]">
                    <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] text-[#25D366] text-[12px] uppercase">
                      Contatos encontrados
                    </p>
                  </div>

                  {/* Lista de Contatos */}
                  <div className="space-y-[12px]">
                    {clienteAtual.contatos.map((contato, index) => (
                      <button
                        key={index}
                        onClick={() => handleEnviarWhatsApp(contato.numero)}
                        className="w-full bg-gradient-to-r from-[rgba(37,211,102,0.1)] to-[rgba(37,211,102,0.05)] h-[45.81px] rounded-[10px] border-[0.909px] border-[rgba(37,211,102,0.2)] hover:from-[rgba(37,211,102,0.15)] hover:to-[rgba(37,211,102,0.1)] transition-all"
                      >
                        <div className="flex items-center justify-between px-[8.906px] h-full">
                          <div className="flex items-center gap-[7.997px]">
                            <div className="bg-[rgba(37,211,102,0.2)] rounded-full size-[27.997px] flex items-center justify-center">
                              <svg className="size-[13.991px]" fill="none" viewBox="0 0 14 14">
                                <path d={svgPaths.p17bcea00} stroke="#25D366" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16596" />
                              </svg>
                            </div>
                            <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] text-[#101828] text-[12px]">
                              {contato.numero}
                            </p>
                          </div>
                          <ChevronRight size={16} className="text-[#25D366]" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Link de Formalização */}
              <div className="mt-[16px] bg-white rounded-[16px] p-[20px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] border-[0.909px] border-black/10">
                <div className="flex items-center gap-[8px] mb-[12px]">
                  <Link size={16} className="text-[#2563EB]" />
                  <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] text-[#0F172A]">
                    Link de Formalização
                  </h3>
                </div>
                
                <div className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] rounded-[8px] p-[12px] border border-[#93c5fd] mb-[12px]">
                  <p className="font-['Arimo:Regular',sans-serif] text-[10px] text-[#6a7282] mb-[6px]">
                    Envie para o cliente:
                  </p>
                  <p className="font-['Arimo:Regular',sans-serif] text-[11px] text-[#2563EB] break-all">
                    {clienteAtual.linkFormalizacao}
                  </p>
                </div>

                <button
                  onClick={handleCopiarLink}
                  className={`w-full flex items-center justify-center gap-[6px] h-[40px] rounded-[8px] font-['Arimo:Bold',sans-serif] font-bold text-[13px] transition-all ${
                    linkCopiado 
                      ? 'bg-[#10b981] text-white' 
                      : 'bg-[#2563EB] hover:bg-[#1d4ed8] text-white'
                  }`}
                >
                  {linkCopiado ? (
                    <>
                      <CheckCircle size={14} />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copiar Link
                    </>
                  )}
                </button>
              </div>


            </div>

            {/* Painel Direito - Oferta */}
            <div className="flex-1">
              <div className="bg-white rounded-[16px] p-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] border-[0.909px] border-black/10">
                {/* Header com texto "Conheça onde você está" no canto */}
                <div className="flex items-start justify-between mb-[20px]">
                  <div>
                    <div className="flex items-center gap-[8px] mb-[6px]">
                      <Rocket size={18} className="text-[#3B82F6]" />
                      <h2 className="font-['Arimo:Bold',sans-serif] font-bold text-[18px] text-[#0F172A]">
                        Oferta Pré-Aprovada
                      </h2>
                    </div>
                    <p className="font-['Arimo:Regular',sans-serif] text-[14px] text-[#6a7282]">
                      Condições exclusivas para o cliente
                    </p>
                  </div>
                </div>

                {/* Cards de Informações */}
                <div className="grid grid-cols-3 gap-[12px] mb-[24px]">
                  {/* Instituição */}
                  <div className="bg-[#eff6ff] rounded-[12px] p-[12px] border border-[#bfdbfe]">
                    <div className="flex items-center gap-[5px] mb-[6px]">
                      <Building2 size={13} className="text-[#3B82F6]" />
                      <p className="font-['Arimo:Regular',sans-serif] text-[10px] text-[#3B82F6] uppercase font-semibold">
                        Instituição
                      </p>
                    </div>
                    <p className="font-['Arimo:Regular',sans-serif] text-[13px] text-[#0F172A] font-medium">
                      {clienteAtual.banco}
                    </p>
                  </div>

                  {/* Convênio */}
                  <div className="bg-[#faf5ff] rounded-[12px] p-[12px] border border-[#e9d5ff]">
                    <div className="flex items-center gap-[5px] mb-[6px]">
                      <FileText size={13} className="text-[#8B5CF6]" />
                      <p className="font-['Arimo:Regular',sans-serif] text-[10px] text-[#8B5CF6] uppercase font-semibold">
                        Convênio
                      </p>
                    </div>
                    <p className="font-['Arimo:Regular',sans-serif] text-[13px] text-[#0F172A] font-medium">
                      Consignado INSS
                    </p>
                  </div>

                  {/* Produto */}
                  <div className="bg-[#f0fdf4] rounded-[12px] p-[12px] border border-[#bbf7d0]">
                    <div className="flex items-center gap-[5px] mb-[6px]">
                      <svg className="size-[13px]" fill="none" viewBox="0 0 16 16">
                        <path d={svgPaths.p31c68c00} stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
                      </svg>
                      <p className="font-['Arimo:Regular',sans-serif] text-[10px] text-[#10b981] uppercase font-semibold">
                        Produto
                      </p>
                    </div>
                    <p className="font-['Arimo:Regular',sans-serif] text-[13px] text-[#0F172A] font-medium">
                      {clienteAtual.produto}
                    </p>
                  </div>
                </div>

                {/* Valores */}
                <div className="grid grid-cols-2 gap-[12px] mb-[24px]">
                  {/* Contrato Digitado e Parcela Mensal - Card Único */}
                  <div className="bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe] rounded-[12px] px-[16px] py-[10px] border border-[#93c5fd] shadow-sm">
                    <div className="flex items-center gap-[6px] mb-[4px]">
                      <svg className="size-[14px]" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="font-['Arimo:Regular',sans-serif] text-[10px] text-[#1e40af] uppercase font-semibold tracking-wide">
                        Dados do Contrato digitado
                      </p>
                    </div>
                    
                    {/* Valores lado a lado */}
                    <div className="grid grid-cols-2 gap-[12px]">
                      {/* Contrato Digitado */}
                      <div>
                        <p className="font-['Arimo:Bold',sans-serif] font-bold text-[22px] text-[#0F172A] mb-[1px]">
                          R$ {clienteAtual.valorLiberado.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                        <p className="font-['Arimo:Regular',sans-serif] text-[11px] text-[#64748b]">
                          Crédito disponível
                        </p>
                      </div>

                      {/* Parcela Mensal */}
                      <div>
                        <p className="font-['Arimo:Bold',sans-serif] font-bold text-[22px] text-[#1e3a8a] mb-[1px]">
                          R$ {clienteAtual.parcelaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                        <p className="font-['Arimo:Regular',sans-serif] text-[11px] text-[#1e40af]">
                          em {clienteAtual.prazoMeses}x
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Solicitar Análise */}
                  <div className="bg-gradient-to-br from-[#d1fae5] to-[#a7f3d0] rounded-[12px] px-[16px] py-[10px] border border-[#10b981] shadow-sm flex flex-col justify-between">
                    <div className="flex items-center gap-[6px] mb-[4px]">
                      <FileText className="size-[14px] text-[#065f46]" />
                      <p className="font-['Arimo:Regular',sans-serif] text-[10px] text-[#065f46] uppercase font-semibold tracking-wide">
                        Valor Adicional
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        const novosClientes = [...clientesAcionamento];
                        novosClientes[clienteAtualIndex].analiseSolicitada = true;
                        setClientesAcionamento(novosClientes);
                        toast.success('Solicitação de análise enviada!');
                      }}
                      disabled={clienteAtual.analiseSolicitada}
                      className={`w-full rounded-[8px] h-[32px] font-['Arimo:Bold',sans-serif] font-bold text-[12px] transition-colors flex items-center justify-center gap-[6px] mt-auto ${
                        clienteAtual.analiseSolicitada
                          ? 'bg-[#059669] text-white cursor-not-allowed'
                          : 'bg-[#10b981] hover:bg-[#059669] text-white'
                      }`}
                    >
                      <CheckCircle size={14} />
                      {clienteAtual.analiseSolicitada ? 'Análise Solicitada' : 'Solicitar Análise'}
                    </button>
                  </div>
                </div>

                {/* Status e Agendamento */}
                <div className="bg-white rounded-[12px] p-[20px] border border-[#e2e8f0]">
                  {/* Status do Acionamento */}
                  <div className="flex items-center justify-between mb-[20px] pb-[20px] border-b border-[#e2e8f0]">
                    <div className="flex items-center gap-[8px]">
                      <AlertCircle size={16} className="text-[#2563EB]" />
                      <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] text-[#0F172A]">
                        Status do Acionamento
                      </h3>
                    </div>
                    <div className="flex items-center gap-[12px] flex-1 max-w-[400px]">
                      <select
                        value={clienteAtual.status}
                        onChange={(e) => handleAlterarStatus(e.target.value as any)}
                        className={`flex-1 h-[40px] rounded-[8px] px-[12px] font-['Arimo:Regular',sans-serif] text-[13px] font-semibold border-2 transition-all cursor-pointer ${getStatusConfig(clienteAtual.status).cor}`}
                      >
                        <option value="selecione">Selecione o status</option>
                        <option value="convertido">✅ Convertido</option>
                        <option value="agendar-retorno">📅 Agendar retorno</option>
                        <option value="cliente-nao-encontrado">❌ Cliente não encontrado</option>
                        <option value="sem-interesse">⛔ Sem interesse</option>
                        <option value="nao-responde">📵 Não responde</option>
                      </select>
                      <button
                        onClick={() => {
                          // Em produção, aqui você faria uma chamada API para salvar o status
                          toast.success('Status salvo com sucesso!');
                          // Avança para o próximo cliente
                          if (clienteAtualIndex < clientesAcionamento.length - 1) {
                            setClienteAtualIndex(clienteAtualIndex + 1);
                          }
                        }}
                        className="h-[40px] px-[20px] bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-[8px] font-['Arimo:Bold',sans-serif] font-bold text-[13px] transition-colors whitespace-nowrap"
                      >
                        Salvar
                      </button>
                    </div>
                  </div>

                  {/* Agendar Retorno - Condicional */}
                  {clienteAtual.status === 'agendar-retorno' && (
                    <div className="animate-fadeIn">
                      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#e2e8f0] to-transparent mb-[20px]"></div>
                      
                      <div className="flex items-center gap-[8px] mb-[12px]">
                        <Calendar size={16} className="text-[#3B82F6]" />
                        <h3 className="font-['Arimo:Bold',sans-serif] font-bold text-[14px] text-[#0F172A]">
                          Agendar retorno
                        </h3>
                      </div>

                      <div className="grid grid-cols-3 gap-[12px] mb-[12px]">
                      <div>
                        <label className="font-['Arimo:Regular',sans-serif] text-[12px] text-[#6a7282] block mb-[6px]">
                          Data
                        </label>
                        <input
                          type="date"
                          value={dataAgendamento}
                          onChange={(e) => setDataAgendamento(e.target.value)}
                          className="w-full h-[36px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Arimo:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#3B82F6] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-['Arimo:Regular',sans-serif] text-[12px] text-[#6a7282] block mb-[6px]">
                          Hora
                        </label>
                        <input
                          type="time"
                          value={horaAgendamento}
                          onChange={(e) => setHoraAgendamento(e.target.value)}
                          className="w-full h-[36px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Arimo:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#3B82F6] transition-colors"
                        />
                      </div>
                      <div className="relative">
                        <label className="font-['Arimo:Regular',sans-serif] text-[12px] text-[#6a7282] block mb-[6px]">
                          WhatsApp
                        </label>
                        <button
                          type="button"
                          onClick={() => setDropdownWhatsAppAberto(!dropdownWhatsAppAberto)}
                          className="w-full h-[36px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Arimo:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#3B82F6] transition-colors bg-white text-left flex items-center justify-between"
                        >
                          <span className={whatsappAgendamento ? "text-[#0F172A]" : "text-[#6a7282]"}>
                            {whatsappAgendamento || "Selecionar contato"}
                          </span>
                          <ChevronDown size={16} className={`text-[#6a7282] transition-transform ${dropdownWhatsAppAberto ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Dropdown de Contatos */}
                        {dropdownWhatsAppAberto && (
                          <div className="absolute top-[62px] left-0 right-0 bg-white rounded-[8px] border border-[#e2e8f0] shadow-lg z-10 overflow-hidden">
                            {clienteAtual.contatos.map((contato, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => {
                                  setWhatsappAgendamento(contato.numero);
                                  setDropdownWhatsAppAberto(false);
                                }}
                                className="w-full px-[12px] py-[10px] hover:bg-[#f0fdf4] border-b border-[#e2e8f0] last:border-b-0 text-left transition-colors"
                              >
                                <div className="flex items-center gap-[8px]">
                                  <MessageCircle size={14} className="text-[#25D366]" />
                                  <p className="font-['Arimo:Regular',sans-serif] text-[12px] text-[#101828]">
                                    {contato.numero}
                                  </p>
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                      <button
                        onClick={handleConfirmarAgendamento}
                        className="w-full h-[42px] bg-[#4338CA] hover:bg-[#3730A3] text-white rounded-[10px] font-['Arimo:Bold',sans-serif] font-bold text-[14px] flex items-center justify-center gap-[8px] transition-colors"
                      >
                        <Calendar size={16} />
                        Confirmar Agendamento
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Conteúdo da Aba de Histórico */}
        {abaAtiva === 'historico' && (
          <>
            {/* Cards de Métricas */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[12px] mb-[24px]">
              {/* Convertidos */}
              <div className="bg-white rounded-[12px] p-[16px] shadow-sm border border-[#e2e8f0]">
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <div className="flex items-center justify-center w-[32px] h-[32px] bg-gradient-to-br from-[#10b981] to-[#059669] rounded-[8px]">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">Convertidos</span>
                </div>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[24px] text-[#2d2d2d]">
                  {metricas.convertidos}
                </p>
                <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#10b981] mt-[4px]">
                  {metricas.taxaConversao.toFixed(1)}% conversão
                </p>
              </div>

              {/* Agendar Retorno */}
              <div className="bg-white rounded-[12px] p-[16px] shadow-sm border border-[#e2e8f0]">
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <div className="flex items-center justify-center w-[32px] h-[32px] bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-[8px]">
                    <Calendar size={16} className="text-white" />
                  </div>
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">Agendar Retorno</span>
                </div>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[24px] text-[#2d2d2d]">
                  {metricas.agendarRetorno}
                </p>
              </div>

              {/* Não Responde */}
              <div className="bg-white rounded-[12px] p-[16px] shadow-sm border border-[#e2e8f0]">
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <div className="flex items-center justify-center w-[32px] h-[32px] bg-gradient-to-br from-[#6b7280] to-[#4b5563] rounded-[8px]">
                    <AlertCircle size={16} className="text-white" />
                  </div>
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">Não Responde</span>
                </div>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[24px] text-[#2d2d2d]">
                  {metricas.naoResponde}
                </p>
              </div>

              {/* Sem Interesse */}
              <div className="bg-white rounded-[12px] p-[16px] shadow-sm border border-[#e2e8f0]">
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <div className="flex items-center justify-center w-[32px] h-[32px] bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-[8px]">
                    <XCircle size={16} className="text-white" />
                  </div>
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">Sem Interesse</span>
                </div>
                <p className="font-['Inter:Semi_Bold',sans-serif] text-[24px] text-[#2d2d2d]">
                  {metricas.semInteresse}
                </p>
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
                    placeholder="Buscar por nome ou produto..."
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
                  <option value="agendar-retorno">Agendar retorno</option>
                  <option value="cliente-nao-encontrado">Não encontrado</option>
                  <option value="sem-interesse">Sem interesse</option>
                  <option value="convertido">Convertido</option>
                  <option value="nao-responde">Não responde</option>
                </select>
              </div>
            </div>

            {/* Tabela de Clientes */}
            <div className="bg-white rounded-[12px] shadow-sm border border-[#e2e8f0] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#f8fafc] border-b border-[#e2e8f0]">
                    <tr>
                      <th className="px-[20px] py-[12px] text-left font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                        Cliente
                      </th>
                      <th className="px-[20px] py-[12px] text-left font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                        Produto / Valor
                      </th>
                      <th className="px-[20px] py-[12px] text-center font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                        Status
                      </th>
                      <th className="px-[20px] py-[12px] text-center font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase">
                        Último Contato
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientesPaginados.map((cliente) => {
                      const statusConfig = getStatusConfig(cliente.status);
                      return (
                        <tr 
                          key={cliente.id} 
                          onClick={() => {
                            // Muda para aba de acionamento e carrega o cliente
                            setAbaAtiva('acionamento');
                            toast.info(`Cliente ${cliente.nome} carregado em Acionamento`);
                          }}
                          className="border-b border-[#e2e8f0] hover:bg-[#f8fafc] transition-colors cursor-pointer"
                        >
                          <td className="px-[20px] py-[16px]">
                            <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d]">
                              {cliente.nome}
                            </p>
                          </td>
                          <td className="px-[20px] py-[16px]">
                            <div>
                              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#2d2d2d]">
                                {cliente.produto}
                              </p>
                              <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2563EB] mt-[2px]">
                                R$ {cliente.valorProposta.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                              </p>
                            </div>
                          </td>
                          <td className="px-[20px] py-[16px] text-center">
                            <div className="flex justify-center">
                              <span className={`inline-flex items-center justify-center px-[12px] py-[4px] rounded-full font-['Inter:Semi_Bold',sans-serif] text-[10px] whitespace-nowrap ${statusConfig.bg} ${statusConfig.text}`}>
                                {statusConfig.label}
                              </span>
                            </div>
                          </td>
                          <td className="px-[20px] py-[16px] text-center">
                            <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#8c8c8f]">
                              {cliente.ultimoContato || '-'}
                            </p>
                            {cliente.proximoContato && (
                              <p className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#f59e0b] mt-[4px] flex items-center justify-center gap-[4px]">
                                <Calendar size={12} />
                                {cliente.proximoContato}
                              </p>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {clientesPaginados.length === 0 && (
                  <div className="py-[40px] text-center">
                    <Users size={48} className="mx-auto text-[#e2e8f0] mb-[12px]" />
                    <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#8c8c8f]">
                      Nenhum cliente encontrado
                    </p>
                  </div>
                )}
              </div>

              {/* Paginação */}
              {clientesPaginados.length > 0 && (
                <div className="flex items-center justify-between px-[20px] py-[16px] border-t border-[#e2e8f0]">
                  <div className="flex items-center gap-[12px]">
                    <p className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#525051]">
                      {indexInicial + 1}-{Math.min(indexFinal, clientesFiltrados.length)} de {clientesFiltrados.length}
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
                </div>
              )}
            </div>

          </>
        )}

        {/* Conteúdo da Aba de Agendamentos */}
        {abaAtiva === 'agendamentos' && (
          <>
            {/* Título da Seção */}
            <div className="mb-[24px]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#0F172A]">
                Agendamentos
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[4px]">
                Gerencie todos os retornos agendados com clientes
              </p>
            </div>

            {/* Lista de Agendamentos */}
            <div className="bg-white rounded-[12px] shadow-sm border border-[#e2e8f0] p-[20px]">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[16px] text-[#2d2d2d] mb-[16px] flex items-center gap-[8px]">
                <Calendar size={20} className="text-[#2563EB]" />
                Próximos Agendamentos
              </h3>
              <div className="space-y-[12px]">
                {agendamentos.filter(a => a.status === 'pendente').map((agendamento) => (
                  <div 
                    key={agendamento.id} 
                    onClick={() => handleCarregarClienteAgendamento(agendamento)}
                    className="flex items-center justify-between p-[12px] bg-[#f8fafc] rounded-[8px] border border-[#e2e8f0] cursor-pointer hover:bg-[#f1f5f9] hover:border-[#2563EB] transition-all"
                  >
                    <div className="flex items-center gap-[12px]">
                      <div className="flex items-center justify-center w-[40px] h-[40px] bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-[8px]">
                        <Clock size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d]">
                          {agendamento.clienteNome}
                        </p>
                        <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                          {agendamento.dataAgendada} às {agendamento.horaAgendada}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                {agendamentos.filter(a => a.status === 'pendente').length === 0 && (
                  <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] text-center py-[20px]">
                    Nenhum agendamento pendente
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modal de Detalhes do Cliente */}
      {modalAberto && clienteSelecionado && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[12px] w-full max-w-[700px] max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Header do Modal */}
            <div className="sticky top-0 bg-white border-b border-[#e2e8f0] px-[24px] py-[20px] flex items-center justify-between rounded-t-[12px]">
              <div>
                <h2 className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#0F172A]">
                  {clienteSelecionado.nome}
                </h2>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] mt-[4px]">
                  {clienteSelecionado.telefone} • {clienteSelecionado.cpf}
                </p>
              </div>
              <button
                onClick={handleFecharModal}
                className="p-[8px] hover:bg-[#f1f5f9] rounded-[6px] transition-colors"
              >
                <X size={20} className="text-[#525051]" />
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-[24px] space-y-[20px]">
              {/* Informações do Cliente */}
              <div>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#2d2d2d] mb-[12px]">
                  Informações do Cliente
                </h3>
                <div className="grid grid-cols-2 gap-[12px]">
                  <div>
                    <label className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase block mb-[4px]">
                      Produto
                    </label>
                    <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#2d2d2d]">
                      {clienteSelecionado.produto}
                    </p>
                  </div>
                  <div>
                    <label className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase block mb-[4px]">
                      Valor da Proposta
                    </label>
                    <p className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2563EB]">
                      R$ {clienteSelecionado.valorProposta.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div>
                    <label className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase block mb-[4px]">
                      Vendedor Responsável
                    </label>
                    <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#2d2d2d]">
                      {clienteSelecionado.vendedor}
                    </p>
                  </div>
                  <div>
                    <label className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-[#8c8c8f] uppercase block mb-[4px]">
                      Status Atual
                    </label>
                    <span className={`inline-flex items-center justify-center px-[12px] py-[4px] rounded-full font-['Inter:Semi_Bold',sans-serif] text-[10px] ${getStatusConfig(clienteSelecionado.status).bg} ${getStatusConfig(clienteSelecionado.status).text}`}>
                      {getStatusConfig(clienteSelecionado.status).label}
                    </span>
                  </div>
                </div>
              </div>

              {/* Alterar Status */}
              <div>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#2d2d2d] mb-[8px]">
                  Alterar Status
                </h3>
                <select
                  value={clienteSelecionado.status}
                  onChange={(e) => handleAtualizarStatus(clienteSelecionado.id, e.target.value as Cliente['status'])}
                  className="w-full h-[40px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                >
                  <option value="selecione">Selecione o status</option>
                  <option value="agendar-retorno">Agendar retorno</option>
                  <option value="cliente-nao-encontrado">Não encontrado</option>
                  <option value="sem-interesse">Sem interesse</option>
                  <option value="convertido">Convertido</option>
                  <option value="nao-responde">Não responde</option>
                </select>
              </div>

              {/* Link de Formalização */}
              <div>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#2d2d2d] mb-[8px]">
                  Link de Formalização
                </h3>
                <div className="flex items-center gap-[8px]">
                  <input
                    type="text"
                    value={clienteSelecionado.linkFormalizacao}
                    readOnly
                    className="flex-1 h-[40px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] bg-[#f8fafc]"
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(clienteSelecionado.linkFormalizacao);
                      toast.success('Link copiado!');
                    }}
                    className="px-[16px] h-[40px] bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] transition-colors"
                  >
                    Copiar
                  </button>
                </div>
              </div>

              {/* Observações */}
              <div>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#2d2d2d] mb-[8px]">
                  Observações
                </h3>
                <textarea
                  value={novaObservacao || clienteSelecionado.observacoes}
                  onChange={(e) => setNovaObservacao(e.target.value)}
                  className="w-full h-[80px] px-[12px] py-[8px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] resize-none focus:outline-none focus:border-[#2563EB] transition-colors"
                  placeholder="Adicione observações sobre o cliente..."
                />
                <button
                  onClick={handleAdicionarObservacao}
                  className="mt-[8px] px-[16px] py-[8px] bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-[8px] font-['Inter:Semi_Bold',sans-serif] text-[13px] transition-colors"
                >
                  Salvar Observação
                </button>
              </div>

              {/* Histórico de Contatos */}
              <div>
                <h3 className="font-['Inter:Semi_Bold',sans-serif] text-[14px] text-[#2d2d2d] mb-[12px]">
                  Histórico de Contatos
                </h3>
                <div className="space-y-[8px]">
                  {clienteSelecionado.historico.length === 0 ? (
                    <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f] text-center py-[12px]">
                      Nenhum contato registrado
                    </p>
                  ) : (
                    clienteSelecionado.historico.map((contato) => (
                      <div key={contato.id} className="p-[12px] bg-[#f8fafc] rounded-[8px] border border-[#e2e8f0]">
                        <div className="flex items-start justify-between mb-[6px]">
                          <div className="flex items-center gap-[8px]">
                            {contato.tipo === 'whatsapp' && (
                              <div className="flex items-center justify-center w-[24px] h-[24px] bg-[#25D366] rounded-full">
                                <MessageCircle size={14} className="text-white" />
                              </div>
                            )}
                            {contato.tipo === 'ligacao' && (
                              <div className="flex items-center justify-center w-[24px] h-[24px] bg-[#3b82f6] rounded-full">
                                <Phone size={14} className="text-white" />
                              </div>
                            )}
                            {contato.tipo === 'agendamento' && (
                              <div className="flex items-center justify-center w-[24px] h-[24px] bg-[#f59e0b] rounded-full">
                                <Calendar size={14} className="text-white" />
                              </div>
                            )}
                            <div>
                              <p className="font-['Inter:Semi_Bold',sans-serif] text-[12px] text-[#2d2d2d]">
                                {contato.data} às {contato.hora}
                              </p>
                              <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#8c8c8f]">
                                {contato.vendedor}
                              </p>
                            </div>
                          </div>
                          {contato.status === 'sucesso' && (
                            <CheckCircle size={16} className="text-[#10b981]" />
                          )}
                          {contato.status === 'sem-resposta' && (
                            <XCircle size={16} className="text-[#ef4444]" />
                          )}
                        </div>
                        <p className="font-['Inter:Regular',sans-serif] text-[12px] text-[#525051]">
                          {contato.observacao}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Footer do Modal */}
            <div className="sticky bottom-0 bg-white border-t border-[#e2e8f0] px-[24px] py-[16px] flex justify-between rounded-b-[12px]">
              <button
                onClick={() => handleEnviarWhatsAppHistorico(clienteSelecionado)}
                className="flex items-center gap-[8px] px-[16px] py-[10px] bg-[#25D366] hover:bg-[#1fb855] text-white rounded-[6px] font-['Inter:Semi_Bold',sans-serif] text-[13px] transition-colors"
              >
                <MessageCircle size={16} />
                Enviar WhatsApp
              </button>
              <button
                onClick={handleFecharModal}
                className="px-[20px] py-[10px] bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-[6px] font-['Inter:Semi_Bold',sans-serif] text-[13px] transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Agendamento */}
      {modalAgendamento && clienteSelecionado && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[12px] w-full max-w-[500px] shadow-2xl">
            {/* Header do Modal */}
            <div className="bg-white border-b border-[#e2e8f0] px-[24px] py-[20px] flex items-center justify-between rounded-t-[12px]">
              <h2 className="font-['Inter:Semi_Bold',sans-serif] text-[18px] text-[#0F172A]">
                Agendar Retorno
              </h2>
              <button
                onClick={() => setModalAgendamento(false)}
                className="p-[8px] hover:bg-[#f1f5f9] rounded-[6px] transition-colors"
              >
                <X size={20} className="text-[#525051]" />
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-[24px] space-y-[16px]">
              <div>
                <label className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] block mb-[8px]">
                  Cliente
                </label>
                <p className="font-['Inter:Regular',sans-serif] text-[13px] text-[#8c8c8f]">
                  {clienteSelecionado.nome}
                </p>
              </div>

              <div>
                <label className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] block mb-[8px]">
                  Data do Agendamento
                </label>
                <input
                  type="date"
                  value={dataAgendamentoHistorico}
                  onChange={(e) => setDataAgendamentoHistorico(e.target.value)}
                  className="w-full h-[40px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>

              <div>
                <label className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] block mb-[8px]">
                  Horário
                </label>
                <input
                  type="time"
                  value={horaAgendamentoHistorico}
                  onChange={(e) => setHoraAgendamentoHistorico(e.target.value)}
                  className="w-full h-[40px] px-[12px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>

              <div>
                <label className="font-['Inter:Semi_Bold',sans-serif] text-[13px] text-[#2d2d2d] block mb-[8px]">
                  Observação
                </label>
                <textarea
                  value={observacaoAgendamento}
                  onChange={(e) => setObservacaoAgendamento(e.target.value)}
                  className="w-full h-[80px] px-[12px] py-[8px] border border-[#e2e8f0] rounded-[8px] font-['Inter:Regular',sans-serif] text-[13px] resize-none focus:outline-none focus:border-[#2563EB] transition-colors"
                  placeholder="Motivo do agendamento ou observações..."
                />
              </div>
            </div>

            {/* Footer do Modal */}
            <div className="bg-white border-t border-[#e2e8f0] px-[24px] py-[16px] flex justify-end gap-[8px] rounded-b-[12px]">
              <button
                onClick={() => setModalAgendamento(false)}
                className="px-[20px] py-[10px] bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#2d2d2d] rounded-[6px] font-['Inter:Semi_Bold',sans-serif] text-[13px] transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSalvarAgendamento}
                className="px-[20px] py-[10px] bg-[#2563EB] hover:bg-[#1d4ed8] text-white rounded-[6px] font-['Inter:Semi_Bold',sans-serif] text-[13px] transition-colors"
              >
                Salvar Agendamento
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Detalhes do Atendimento */}
      <ModalDetalhesAcionamento
        cliente={clienteAtual}
        aberto={modalDetalhesAberto}
        onFechar={() => setModalDetalhesAberto(false)}
        onSalvar={handleSalvarStatusModal}
      />
    </div>
  );
}
