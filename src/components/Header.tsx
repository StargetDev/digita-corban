import { useState } from 'react';
import { LogOut, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  empresa: string;
  perfil: string;
}

interface HeaderProps {
  onLogout: () => void;
  usuarioLogado: Usuario;
}

export function Header({ onLogout, usuarioLogado }: HeaderProps) {
  const [showPerfilModal, setShowPerfilModal] = useState(false);
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarNovaSenha, setConfirmarNovaSenha] = useState('');
  const [showSenhaAtual, setShowSenhaAtual] = useState(false);
  const [showNovaSenha, setShowNovaSenha] = useState(false);
  const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);

  const handleAlterarSenha = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (novaSenha !== confirmarNovaSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    if (novaSenha.length < 6) {
      alert('A nova senha deve ter pelo menos 6 caracteres!');
      return;
    }

    // Aqui você faria a chamada para a API
    alert('Senha alterada com sucesso!');
    setSenhaAtual('');
    setNovaSenha('');
    setConfirmarNovaSenha('');
    setShowPerfilModal(false);
  };

  return (
    <>
      {/* Header Superior */}
      <div className="fixed top-0 right-0 z-30 px-[24px] py-[16px] ml-[244px] flex justify-end gap-[12px]">
        {/* Botão Perfil */}
        <motion.button
          onClick={() => setShowPerfilModal(true)}
          className="flex items-center gap-[8px] px-[16px] py-[10px] bg-white rounded-[12px] border-[1px] border-[#e5e7eb] shadow-sm hover:shadow-md transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <User className="w-[18px] h-[18px] text-[#2563EB]" />
          <span className="font-['Inter:Medium',sans-serif] text-[14px] text-[#2d2d2d]">
            Perfil
          </span>
        </motion.button>

        {/* Botão Sair */}
        <motion.button
          onClick={onLogout}
          className="flex items-center gap-[8px] px-[16px] py-[10px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-[12px] shadow-sm hover:shadow-md transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <LogOut className="w-[18px] h-[18px] text-white" />
          <span className="font-['Inter:Medium',sans-serif] text-[14px] text-white">
            Sair
          </span>
        </motion.button>
      </div>

      {/* Modal de Perfil */}
      <AnimatePresence>
        {showPerfilModal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPerfilModal(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[480px] max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white rounded-[20px] shadow-2xl p-[32px] relative">
                {/* Botão Fechar */}
                <button
                  onClick={() => setShowPerfilModal(false)}
                  className="absolute top-[20px] right-[20px] w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-[20px] h-[20px] text-[#6b7280]" />
                </button>

                {/* Cabeçalho */}
                <div className="mb-[24px]">
                  <div className="flex items-center gap-[12px] mb-[8px]">
                    <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-r from-[#2563EB] to-[#3B82F6] flex items-center justify-center">
                      <User className="w-[24px] h-[24px] text-white" />
                    </div>
                    <div>
                      <h2 className="font-['Inter:Semi_Bold',sans-serif] text-[20px] text-[#2d2d2d]">
                        Meu Perfil
                      </h2>
                      <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#6b7280]">
                        Alterar senha de acesso
                      </p>
                    </div>
                  </div>
                </div>

                {/* Formulário */}
                <form onSubmit={handleAlterarSenha} className="space-y-[20px]">
                  {/* Campo Senha Atual */}
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-['Inter:Medium',sans-serif] text-[14px] text-[#374151]">
                      Senha atual
                    </label>
                    <div className="relative">
                      <input
                        type={showSenhaAtual ? 'text' : 'password'}
                        value={senhaAtual}
                        onChange={(e) => setSenhaAtual(e.target.value)}
                        placeholder="Digite sua senha atual"
                        className="w-full h-[48px] px-[16px] pr-[48px] bg-[#f9fafb] border-[1px] border-[#e5e7eb] rounded-[12px] font-['Inter:Regular',sans-serif] text-[14px] text-[#2d2d2d] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowSenhaAtual(!showSenhaAtual)}
                        className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280] transition-colors"
                      >
                        {showSenhaAtual ? (
                          <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                            <path d="M3.26 11.6021C2.83 11.1021 2.5 10.5021 2.5 10.0021C2.5 9.50214 2.83 8.90214 3.26 8.40214C5.1 6.30214 7.45 5.00214 10 5.00214C12.55 5.00214 14.9 6.30214 16.74 8.40214C17.17 8.90214 17.5 9.50214 17.5 10.0021C17.5 10.5021 17.17 11.1021 16.74 11.6021C14.9 13.7021 12.55 15.0021 10 15.0021C7.45 15.0021 5.1 13.7021 3.26 11.6021Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 12.5021C11.3807 12.5021 12.5 11.3829 12.5 10.0021C12.5 8.62142 11.3807 7.50214 10 7.50214C8.61929 7.50214 7.5 8.62142 7.5 10.0021C7.5 11.3829 8.61929 12.5021 10 12.5021Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                            <path d="M3.26 11.6021C2.83 11.1021 2.5 10.5021 2.5 10.0021C2.5 9.50214 2.83 8.90214 3.26 8.40214C5.1 6.30214 7.45 5.00214 10 5.00214C12.55 5.00214 14.9 6.30214 16.74 8.40214C17.17 8.90214 17.5 9.50214 17.5 10.0021C17.5 10.5021 17.17 11.1021 16.74 11.6021C14.9 13.7021 12.55 15.0021 10 15.0021C7.45 15.0021 5.1 13.7021 3.26 11.6021Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 12.5021C11.3807 12.5021 12.5 11.3829 12.5 10.0021C12.5 8.62142 11.3807 7.50214 10 7.50214C8.61929 7.50214 7.5 8.62142 7.5 10.0021C7.5 11.3829 8.61929 12.5021 10 12.5021Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.5 2.50214L17.5 17.5021" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Campo Nova Senha */}
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-['Inter:Medium',sans-serif] text-[14px] text-[#374151]">
                      Nova senha
                    </label>
                    <div className="relative">
                      <input
                        type={showNovaSenha ? 'text' : 'password'}
                        value={novaSenha}
                        onChange={(e) => setNovaSenha(e.target.value)}
                        placeholder="Digite a nova senha"
                        className="w-full h-[48px] px-[16px] pr-[48px] bg-[#f9fafb] border-[1px] border-[#e5e7eb] rounded-[12px] font-['Inter:Regular',sans-serif] text-[14px] text-[#2d2d2d] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowNovaSenha(!showNovaSenha)}
                        className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280] transition-colors"
                      >
                        {showNovaSenha ? (
                          <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                            <path d="M3.26 11.6021C2.83 11.1021 2.5 10.5021 2.5 10.0021C2.5 9.50214 2.83 8.90214 3.26 8.40214C5.1 6.30214 7.45 5.00214 10 5.00214C12.55 5.00214 14.9 6.30214 16.74 8.40214C17.17 8.90214 17.5 9.50214 17.5 10.0021C17.5 10.5021 17.17 11.1021 16.74 11.6021C14.9 13.7021 12.55 15.0021 10 15.0021C7.45 15.0021 5.1 13.7021 3.26 11.6021Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 12.5021C11.3807 12.5021 12.5 11.3829 12.5 10.0021C12.5 8.62142 11.3807 7.50214 10 7.50214C8.61929 7.50214 7.5 8.62142 7.5 10.0021C7.5 11.3829 8.61929 12.5021 10 12.5021Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                            <path d="M3.26 11.6021C2.83 11.1021 2.5 10.5021 2.5 10.0021C2.5 9.50214 2.83 8.90214 3.26 8.40214C5.1 6.30214 7.45 5.00214 10 5.00214C12.55 5.00214 14.9 6.30214 16.74 8.40214C17.17 8.90214 17.5 9.50214 17.5 10.0021C17.5 10.5021 17.17 11.1021 16.74 11.6021C14.9 13.7021 12.55 15.0021 10 15.0021C7.45 15.0021 5.1 13.7021 3.26 11.6021Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 12.5021C11.3807 12.5021 12.5 11.3829 12.5 10.0021C12.5 8.62142 11.3807 7.50214 10 7.50214C8.61929 7.50214 7.5 8.62142 7.5 10.0021C7.5 11.3829 8.61929 12.5021 10 12.5021Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.5 2.50214L17.5 17.5021" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Campo Confirmar Nova Senha */}
                  <div className="flex flex-col gap-[8px]">
                    <label className="font-['Inter:Medium',sans-serif] text-[14px] text-[#374151]">
                      Confirmar nova senha
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmarSenha ? 'text' : 'password'}
                        value={confirmarNovaSenha}
                        onChange={(e) => setConfirmarNovaSenha(e.target.value)}
                        placeholder="Digite novamente a nova senha"
                        className="w-full h-[48px] px-[16px] pr-[48px] bg-[#f9fafb] border-[1px] border-[#e5e7eb] rounded-[12px] font-['Inter:Regular',sans-serif] text-[14px] text-[#2d2d2d] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition-all"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmarSenha(!showConfirmarSenha)}
                        className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#6b7280] transition-colors"
                      >
                        {showConfirmarSenha ? (
                          <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                            <path d="M3.26 11.6021C2.83 11.1021 2.5 10.5021 2.5 10.0021C2.5 9.50214 2.83 8.90214 3.26 8.40214C5.1 6.30214 7.45 5.00214 10 5.00214C12.55 5.00214 14.9 6.30214 16.74 8.40214C17.17 8.90214 17.5 9.50214 17.5 10.0021C17.5 10.5021 17.17 11.1021 16.74 11.6021C14.9 13.7021 12.55 15.0021 10 15.0021C7.45 15.0021 5.1 13.7021 3.26 11.6021Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 12.5021C11.3807 12.5021 12.5 11.3829 12.5 10.0021C12.5 8.62142 11.3807 7.50214 10 7.50214C8.61929 7.50214 7.5 8.62142 7.5 10.0021C7.5 11.3829 8.61929 12.5021 10 12.5021Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        ) : (
                          <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                            <path d="M3.26 11.6021C2.83 11.1021 2.5 10.5021 2.5 10.0021C2.5 9.50214 2.83 8.90214 3.26 8.40214C5.1 6.30214 7.45 5.00214 10 5.00214C12.55 5.00214 14.9 6.30214 16.74 8.40214C17.17 8.90214 17.5 9.50214 17.5 10.0021C17.5 10.5021 17.17 11.1021 16.74 11.6021C14.9 13.7021 12.55 15.0021 10 15.0021C7.45 15.0021 5.1 13.7021 3.26 11.6021Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10 12.5021C11.3807 12.5021 12.5 11.3829 12.5 10.0021C12.5 8.62142 11.3807 7.50214 10 7.50214C8.61929 7.50214 7.5 8.62142 7.5 10.0021C7.5 11.3829 8.61929 12.5021 10 12.5021Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.5 2.50214L17.5 17.5021" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Botões de Ação */}
                  <div className="flex gap-[12px] pt-[8px]">
                    <button
                      type="button"
                      onClick={() => setShowPerfilModal(false)}
                      className="flex-1 h-[48px] bg-[#f3f4f6] rounded-[12px] font-['Inter:Medium',sans-serif] text-[14px] text-[#6b7280] hover:bg-[#e5e7eb] transition-colors"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 h-[48px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-[12px] font-['Inter:Medium',sans-serif] text-[14px] text-white hover:from-[#1d4ed8] hover:to-[#2563EB] shadow-sm hover:shadow-md transition-all"
                    >
                      Alterar senha
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}