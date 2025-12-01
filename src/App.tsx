import { useState } from 'react';
import SubNavDitto from './imports/SubNavDitto';
import { AtendimentosKanban } from './components/AtendimentosKanban';
import { Financeiro } from './components/Financeiro';
import { Propostas } from './components/Propostas';
import { Campanhas } from './components/Campanhas';
import { Digitacoes } from './components/Digitacoes';
import { Processamentos } from './components/Processamentos';
import { Historico } from './components/Historico';
import { Usuarios } from './components/Usuarios';
import { Empresas } from './components/Empresas';
import { Receitas } from './components/Receitas';
import { Performance } from './components/Performance';
import { Analise } from './components/Analise';
import { AtendimentoData } from './components/AtendimentoCard';
import { Login } from './components/Login';
import { Cadastro } from './components/Cadastro';
import { Header } from './components/Header';
import { Toaster } from 'sonner@2.0.3';

export type AbaAtiva = 'home' | 'propostas' | 'processamentos' | 'historico' | 'usuarios' | 'campanhas' | 'empresas' | 'receitas' | 'performance' | 'analise';

// Usuário Master com acesso total (100%)
const USUARIO_MASTER = {
  id: 1,
  nome: 'Adriano Master',
  email: 'adriano@starget.com.br',
  senha: 'Pa$$word@123',
  empresa: 'Starget',
  empresaId: 0, // 0 = Starget (empresa mãe, não é corban)
  perfil: 'master' as const
};

export default function App() {
  // Inicia logado como Master por padrão
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [usuarioLogado] = useState(USUARIO_MASTER);
  const [showCadastro, setShowCadastro] = useState(false);
  const [abaAtiva, setAbaAtiva] = useState<AbaAtiva>('home');
  const [atendimentos, setAtendimentos] = useState<AtendimentoData[]>([]);

  // Se não estiver logado, mostra tela de login ou cadastro
  if (!isLoggedIn) {
    if (showCadastro) {
      return (
        <Cadastro 
          onBack={() => setShowCadastro(false)}
          onCadastro={() => {
            setShowCadastro(false);
            setIsLoggedIn(true);
          }}
        />
      );
    }
    return (
      <Login 
        onLogin={() => setIsLoggedIn(true)}
        onCadastro={() => setShowCadastro(true)}
      />
    );
  }

  return (
    <div className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] min-h-screen w-full">
      <Toaster position="top-right" richColors />
      {/* Header com botões de Perfil e Sair - apenas na Home */}
      {abaAtiva === 'home' && <Header onLogout={() => setIsLoggedIn(false)} usuarioLogado={usuarioLogado} />}
      
      {/* Layout com Sidebar e Conteúdo */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[244px] h-screen fixed left-0 top-0">
          <SubNavDitto abaAtiva={abaAtiva} onChangeAba={setAbaAtiva} usuarioLogado={usuarioLogado} />
        </div>
        
        {/* Área de Conteúdo Principal */}
        <div className="ml-[244px] w-full">
          {abaAtiva === 'home' && (
            <Digitacoes usuarioLogado={usuarioLogado} />
          )}
          {abaAtiva === 'propostas' && (
            <Propostas usuarioLogado={usuarioLogado} />
          )}
          {abaAtiva === 'processamentos' && (
            <Processamentos />
          )}
          {abaAtiva === 'historico' && (
            <Historico />
          )}
          {abaAtiva === 'usuarios' && (
            <Usuarios usuarioLogado={usuarioLogado} />
          )}
          {abaAtiva === 'campanhas' && (
            <Campanhas usuarioLogado={usuarioLogado} />
          )}
          {abaAtiva === 'empresas' && (
            <Empresas usuarioLogado={usuarioLogado} />
          )}
          {abaAtiva === 'receitas' && (
            <Receitas usuarioLogado={usuarioLogado} />
          )}
          {abaAtiva === 'performance' && (
            <Performance />
          )}
          {abaAtiva === 'analise' && (
            <Analise />
          )}
        </div>
      </div>
    </div>
  );
}