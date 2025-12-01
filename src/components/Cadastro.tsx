import { useState } from 'react';
import { motion } from 'motion/react';
import svgPaths from '../imports/svg-q28tvzb5n9';

interface CadastroProps {
  onBack: () => void;
  onCadastro: () => void;
}

export function Cadastro({ onBack, onCadastro }: CadastroProps) {
  const [step, setStep] = useState(1);
  const [empresa, setEmpresa] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      // Validar primeira etapa
      if (!empresa || !nome || !email) {
        alert('Por favor, preencha todos os campos!');
        return;
      }
      setStep(2);
      return;
    }
    
    // Validar segunda etapa
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    
    onCadastro();
  };

  return (
    <div className="bg-black relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(rgba(255, 255, 255, 0.03) 0.12346%, rgba(0, 0, 0, 0) 0.12346%)" 
        }} 
      />

      {/* Floating Code Elements - Same as Login */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Section */}
        <motion.div className="absolute font-mono text-[#2563EB] opacity-10 text-xs left-[5%] top-[8%]" animate={{ opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          {'import { useState, useEffect } from "react";'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-8 text-[10px] right-[8%] top-[12%]" animate={{ opacity: [0.08, 0.12, 0.08] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          {'interface User { id: number; name: string; }'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-12 text-xs left-[15%] top-[5%]" animate={{ opacity: [0.12, 0.18, 0.12] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          {'const handleSubmit = async () => {'}
        </motion.div>

        {/* Floating Animated Lines */}
        <motion.div className="absolute font-mono text-[#2563EB] opacity-20 text-sm" initial={{ x: -200, y: 100 }} animate={{ x: ['10%', '90%'], y: ['10%', '15%'] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
          {'const authenticate = async (credentials) => {'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-15 text-xs" initial={{ x: '100%', y: '20%' }} animate={{ x: ['-20%'], y: ['20%', '25%'] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
          {'  return await api.post("/register", data);'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-20 text-sm" initial={{ x: '50%', y: '80%' }} animate={{ x: ['50%', '-10%'], y: ['80%', '75%'] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
          {'interface RegisterProps {'}
        </motion.div>

        {/* Semicolons */}
        <motion.div className="absolute font-mono text-[#3B82F6] opacity-10 text-3xl" initial={{ x: '10%', y: '25%' }} animate={{ x: ['10%', '90%'], y: ['25%', '20%'] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>
          {';'}
        </motion.div>
        <motion.div className="absolute font-mono text-[#60A5FA] opacity-10 text-2xl" initial={{ x: '90%', y: '75%' }} animate={{ x: ['90%', '5%'], y: ['75%', '80%'] }} transition={{ duration: 26, repeat: Infinity, ease: "linear" }}>
          {';'}
        </motion.div>
      </div>
      
      {/* Blur Effects */}
      <motion.div 
        className="absolute bg-[rgba(127,34,254,0.3)] blur-[120px] filter left-[25%] opacity-[0.507] rounded-full w-[384px] h-[384px] top-[25%]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.507, 0.6, 0.507],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bg-[rgba(0,146,184,0.3)] blur-[120px] filter left-[48%] opacity-[0.949] rounded-full w-[384px] h-[384px] top-[28%]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.949, 0.7, 0.949],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main Container */}
      <motion.div 
        className="relative z-10 flex flex-col gap-[20px] items-center w-[448px] max-h-[95vh] py-[20px] overflow-y-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Card */}
        <motion.div 
          className="bg-[rgba(15,23,42,0.85)] backdrop-blur-xl relative rounded-[24px] w-full border-[0.909px] border-[rgba(255,255,255,0.15)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.5)] p-[24px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.div 
            className="flex items-center justify-center mb-[32px] mt-[8px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative w-[209px] h-[48px]">
              {/* Icon Container */}
              <div className="absolute left-0 top-0 w-[48px] h-[48px]">
                <div className="absolute left-[0.74px] top-[0.75px] w-[46.52px] h-[46.477px]">
                  <div className="relative w-full h-full overflow-clip">
                    <div className="absolute inset-[2.66%_3.73%_3.73%_2.66%]">
                      <div className="absolute inset-[-2.84%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 46">
                          <path d={svgPaths.p39be6600} stroke="url(#paint0_linear_logo_cadastro)" strokeWidth="2.47318" />
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_logo_cadastro" x1="-0.742868" x2="46.7205" y1="-0.741056" y2="46.7658">
                              <stop stopColor="#3B82F6" />
                              <stop offset="1" stopColor="#2563EB" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[14.74px] top-[10.74px] w-[22.514px] h-[26.506px]">
                  <div className="relative w-full h-full overflow-clip">
                    <div className="absolute inset-[4.63%_7.61%_6.49%_5.43%]">
                      <div className="absolute inset-[-5.2%_-6.26%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 26">
                          <path d={svgPaths.p26e72d80} stroke="url(#paint0_linear_icon_cadastro)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.45056" />
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_icon_cadastro" x1="1.22528" x2="20.8681" y1="1.22528" y2="24.729">
                              <stop stopColor="#2563EB" />
                              <stop offset="1" stopColor="#1D4ED8" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Lines */}
                <div className="absolute left-[18px] top-[18.99px] w-[10.994px] h-[2.003px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
                    <path d="M1.00039 1.00039H9.99573" stroke="url(#paint0_linear_line1_cadastro)" strokeLinecap="round" strokeWidth="2.00078" />
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_line1_cadastro">
                        <stop stopColor="#60A5FA" />
                        <stop offset="1" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="absolute left-[18px] top-[23px] w-[10.994px] h-[1.989px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
                    <path d="M0.996839 0.996839H9.99218" stroke="url(#paint0_linear_line2_cadastro)" strokeLinecap="round" strokeWidth="1.99368" />
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_line2_cadastro">
                        <stop stopColor="#60A5FA" />
                        <stop offset="1" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="absolute left-[18px] top-[26.99px] w-[10.994px] h-[2.003px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
                    <path d="M1.00039 1.00039H9.99573" stroke="url(#paint0_linear_line3_cadastro)" strokeLinecap="round" strokeWidth="2.00078" />
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_line3_cadastro">
                        <stop stopColor="#60A5FA" />
                        <stop offset="1" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              
              {/* Text */}
              <div className="absolute left-[60px] top-0">
                <div className="mb-[4px]">
                  <p className="font-['Arimo:Bold',sans-serif] font-bold leading-[32px] text-[24px] text-nowrap text-white tracking-[-0.6px] whitespace-pre">Digita Corban</p>
                </div>
                <div>
                  <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[16px] text-[11px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[0.3px] whitespace-pre">SOLUÇÕES INTELIGENTES</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Título */}
          <motion.h2 
            className="font-['Arimo:Bold',sans-serif] text-center text-white text-[20px] mb-[8px]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            Criar nova conta
          </motion.h2>

          {/* Indicador de Progresso */}
          <motion.div 
            className="flex items-center justify-center gap-[12px] mb-[24px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          >
            {/* Step 1 */}
            <div className="flex items-center gap-[8px]">
              <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center border-[1.5px] transition-all ${
                step >= 1 
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#3B82F6] border-[#3B82F6]' 
                  : 'bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.2)]'
              }`}>
                <span className="font-['Arimo:Regular',sans-serif] text-[14px] text-white">1</span>
              </div>
              <span className={`font-['Arimo:Regular',sans-serif] text-[14px] ${
                step >= 1 ? 'text-white' : 'text-[#6a7282]'
              }`}>
                Dados pessoais
              </span>
            </div>

            {/* Linha conectora */}
            <div className={`w-[24px] h-[2px] transition-all ${
              step >= 2 ? 'bg-gradient-to-r from-[#2563EB] to-[#3B82F6]' : 'bg-[rgba(255,255,255,0.1)]'
            }`} />

            {/* Step 2 */}
            <div className="flex items-center gap-[8px]">
              <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center border-[1.5px] transition-all ${
                step >= 2 
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#3B82F6] border-[#3B82F6]' 
                  : 'bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.2)]'
              }`}>
                <span className="font-['Arimo:Regular',sans-serif] text-[14px] text-white">2</span>
              </div>
              <span className={`font-['Arimo:Regular',sans-serif] text-[14px] ${
                step >= 2 ? 'text-white' : 'text-[#6a7282]'
              }`}>
                Segurança
              </span>
            </div>
          </motion.div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-[16px]">
            {step === 1 && (
              <>
                {/* Campo Empresa */}
                <motion.div 
                  className="flex flex-col gap-[6px]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                >
                  <label className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] text-[#d1d5dc] text-[14px]">
                    Empresa
                  </label>
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-[14px] border-[0.909px] border-[rgba(255,255,255,0.1)]">
                    <input
                      type="text"
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      placeholder="Nome da empresa"
                      className="w-full h-[48px] px-[16px] py-[12px] bg-transparent font-['Arimo:Regular',sans-serif] font-normal text-[16px] text-white placeholder:text-[#6a7282] focus:outline-none focus:ring-2 focus:ring-[rgba(37,99,235,0.5)] rounded-[14px]"
                      required
                    />
                  </div>
                </motion.div>

                {/* Campo Nome */}
                <motion.div 
                  className="flex flex-col gap-[6px]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
                >
                  <label className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] text-[#d1d5dc] text-[14px]">
                    Nome completo
                  </label>
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-[14px] border-[0.909px] border-[rgba(255,255,255,0.1)]">
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full h-[48px] px-[16px] py-[12px] bg-transparent font-['Arimo:Regular',sans-serif] font-normal text-[16px] text-white placeholder:text-[#6a7282] focus:outline-none focus:ring-2 focus:ring-[rgba(37,99,235,0.5)] rounded-[14px]"
                      required
                    />
                  </div>
                </motion.div>

                {/* Campo E-mail */}
                <motion.div 
                  className="flex flex-col gap-[6px]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                >
                  <label className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] text-[#d1d5dc] text-[14px]">
                    E-mail
                  </label>
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-[14px] border-[0.909px] border-[rgba(255,255,255,0.1)]">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      className="w-full h-[48px] px-[16px] py-[12px] bg-transparent font-['Arimo:Regular',sans-serif] font-normal text-[16px] text-white placeholder:text-[#6a7282] focus:outline-none focus:ring-2 focus:ring-[rgba(37,99,235,0.5)] rounded-[14px]"
                      required
                    />
                  </div>
                </motion.div>

                {/* Botões de Navegação */}
                <div className="flex gap-[12px] mt-[24px]">
                  {/* Botão Voltar ao Login */}
                  <motion.button
                    type="button"
                    onClick={onBack}
                    className="w-full h-[48px] border-[0.909px] border-[rgba(255,255,255,0.2)] rounded-[14px] font-['Arimo:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-center text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Voltar ao login
                  </motion.button>

                  {/* Botão Próxima Etapa */}
                  <motion.button
                    type="submit"
                    className="w-full h-[48px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(37,99,235,0.25),0px_4px_6px_-4px_rgba(37,99,235,0.25)] font-['Arimo:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-center text-white hover:from-[#1d4ed8] hover:to-[#2563EB] transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Próxima etapa
                  </motion.button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                {/* Campo WhatsApp */}
                <motion.div 
                  className="flex flex-col gap-[6px]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                >
                  <label className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] text-[#d1d5dc] text-[14px]">
                    WhatsApp
                  </label>
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-[14px] border-[0.909px] border-[rgba(255,255,255,0.1)]">
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="(00) 00000-0000"
                      className="w-full h-[48px] px-[16px] py-[12px] bg-transparent font-['Arimo:Regular',sans-serif] font-normal text-[16px] text-white placeholder:text-[#6a7282] focus:outline-none focus:ring-2 focus:ring-[rgba(37,99,235,0.5)] rounded-[14px]"
                      required
                    />
                  </div>
                </motion.div>

                {/* Campo Senha */}
                <motion.div 
                  className="flex flex-col gap-[6px]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
                >
                  <label className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] text-[#d1d5dc] text-[14px]">
                    Senha
                  </label>
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-[14px] border-[0.909px] border-[rgba(255,255,255,0.1)] relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      placeholder="••••••••"
                      className="w-full h-[48px] px-[16px] py-[12px] pr-[48px] bg-transparent font-['Arimo:Regular',sans-serif] font-normal text-[16px] text-white placeholder:text-[#6a7282] focus:outline-none focus:ring-2 focus:ring-[rgba(37,99,235,0.5)] rounded-[14px]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-[16px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] flex items-center justify-center"
                    >
                      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                        <path d={svgPaths.pcb0000} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p2314a170} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </button>
                  </div>
                </motion.div>

                {/* Campo Confirmar Senha */}
                <motion.div 
                  className="flex flex-col gap-[6px]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
                >
                  <label className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] text-[#d1d5dc] text-[14px]">
                    Confirmar senha
                  </label>
                  <div className="bg-[rgba(255,255,255,0.05)] rounded-[14px] border-[0.909px] border-[rgba(255,255,255,0.1)] relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmarSenha}
                      onChange={(e) => setConfirmarSenha(e.target.value)}
                      placeholder="••••••••"
                      className="w-full h-[48px] px-[16px] py-[12px] pr-[48px] bg-transparent font-['Arimo:Regular',sans-serif] font-normal text-[16px] text-white placeholder:text-[#6a7282] focus:outline-none focus:ring-2 focus:ring-[rgba(37,99,235,0.5)] rounded-[14px]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-[16px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] flex items-center justify-center"
                    >
                      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                        <path d={svgPaths.pcb0000} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p2314a170} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </button>
                  </div>
                </motion.div>

                {/* Botões de Navegação */}
                <div className="flex gap-[12px] mt-[24px]">
                  {/* Botão Voltar */}
                  <motion.button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full h-[48px] border-[0.909px] border-[rgba(255,255,255,0.2)] rounded-[14px] font-['Arimo:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-center text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Voltar
                  </motion.button>

                  {/* Botão Criar Conta */}
                  <motion.button
                    type="submit"
                    className="w-full h-[48px] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(37,99,235,0.25),0px_4px_6px_-4px_rgba(37,99,235,0.25)] font-['Arimo:Regular',sans-serif] font-normal text-[16px] leading-[24px] text-center text-white hover:from-[#1d4ed8] hover:to-[#2563EB] transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Criar conta
                  </motion.button>
                </div>
              </>
            )}
          </form>
        </motion.div>

        {/* Footer */}
        <motion.p 
          className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] text-[14px] text-center text-[#6a7282]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1, ease: "easeOut" }}
        >
          © 2025 Digita Corban. Todos os direitos reservados.
        </motion.p>
      </motion.div>
    </div>
  );
}