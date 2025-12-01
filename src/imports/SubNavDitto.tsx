import svgPaths from "./svg-6f6xkjrvie";
import { ClipboardList, DollarSign, FileText, Heart, Calculator, Sparkles, Key, Shield, Activity, FolderOpen, Users, PhoneCall, Rocket, Target, Briefcase, Building2, TrendingUp } from 'lucide-react';
import { AbaAtiva } from '../App';
import Logo from './Logo';

function Home() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path d={svgPaths.p2ff764c0} id="Icon" stroke="var(--stroke-0, #525051)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Home />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#525051] text-[16px] text-nowrap whitespace-pre">Dashboard</p>
    </div>
  );
}

function NavItemBase() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Folder() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="folder">
          <path d={svgPaths.p1a910c72} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="absolute left-[12.5px] size-[12px] top-[12px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_13_9119)" id="search">
          <rect fill="#65A603" height="12" width="12" />
          <path d={svgPaths.pfabe700} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_13_9119">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <Folder />
      <Search />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Frame />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Simulador</p>
    </div>
  );
}

function ContentSimulador({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Calculator size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Simulador</p>
    </div>
  );
}

function NavItemSimulador({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentSimulador isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentHigienizacoes({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Sparkles size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Higienizações</p>
    </div>
  );
}

function NavItemHigienizacoes({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentHigienizacoes isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentAcessos({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Key size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Usuários</p>
    </div>
  );
}

function NavItemAcessos({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentAcessos isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentCredenciais({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Shield size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Credenciais</p>
    </div>
  );
}

function NavItemCredenciais({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentCredenciais isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentAtendimentos({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <ClipboardList size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Atendimentos</p>
    </div>
  );
}

function NavItemAtendimentos({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentAtendimentos isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentFinanceiro({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <DollarSign size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Comissões</p>
    </div>
  );
}

function NavItemFinanceiro({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentFinanceiro isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentPropostas({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <FileText size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Propostas</p>
    </div>
  );
}

function NavItemPropostas({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentPropostas isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function NavItemBase1() {
  return (
    <div className="bg-[#2563EB] relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Folder1() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="folder">
          <path d={svgPaths.p1a910c72} id="Icon" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Search1() {
  return (
    <div className="absolute left-[12.5px] size-[12px] top-[12px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_13_9113)" id="search">
          <rect fill="white" height="12" width="12" />
          <path d={svgPaths.pfabe700} id="Icon" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_13_9113">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <Folder1 />
      <Search1 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Frame1 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-700 text-nowrap whitespace-pre">Higienizações</p>
    </div>
  );
}

function NavItemBase2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <div className="h-[24px] relative shrink-0 w-[23.932px]" data-name="path3331">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.pfbc4b80} fill="var(--fill-0, #404040)" id="path3331" />
        </svg>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-700 text-nowrap whitespace-pre">Campanhas</p>
    </div>
  );
}

function NavItemBase3() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Key() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="key">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="key">
          <path d={svgPaths.p137c2980} id="Icon" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Key />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-700 text-nowrap whitespace-pre">Credenciais</p>
    </div>
  );
}

function NavItemBase4() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function ContentCampanhas({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Rocket size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Campanhas</p>
    </div>
  );
}

function NavItemCampanhas({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentCampanhas isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentDigitacoes({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Target size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Oportunidades</p>
    </div>
  );
}

function NavItemDigitacoes({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentDigitacoes isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentVendas({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <div className="h-[24px] relative shrink-0 w-[24px]" data-name="shopping-cart">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="9" cy="21" r="1" stroke={isActive ? "white" : "#404040"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="21" r="1" stroke={isActive ? "white" : "#404040"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke={isActive ? "white" : "#404040"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Vendas</p>
    </div>
  );
}

function NavItemVendas({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentVendas isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentProcessamentos({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Activity size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Digitações</p>
    </div>
  );
}

function NavItemProcessamentos({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentProcessamentos isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentHistorico({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <FolderOpen size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Arquivos</p>
    </div>
  );
}

function NavItemHistorico({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentHistorico isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentUsuarios({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Users size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Usuários</p>
    </div>
  );
}

function NavItemUsuarios({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentUsuarios isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentCarteira({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Briefcase size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Gestão Carteira</p>
    </div>
  );
}

function NavItemCarteira({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentCarteira isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentEmpresas({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Building2 size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Empresas</p>
    </div>
  );
}

function NavItemEmpresas({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentEmpresas isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentReceitas({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <svg className={`w-[24px] h-[24px] ${isActive ? "text-white" : "text-[#404040]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Receitas</p>
    </div>
  );
}

function NavItemReceitas({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentReceitas isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentPerformance({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <TrendingUp size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Desempenho</p>
    </div>
  );
}

function NavItemPerformance({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentPerformance isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function ContentAnalise({ isActive }: { isActive?: boolean }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <ClipboardList size={24} className={isActive ? "text-white" : "text-[#404040]"} />
      <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap whitespace-pre ${isActive ? "text-white" : "text-neutral-700"}`}>Análise</p>
    </div>
  );
}

function NavItemAnalise({ isActive, onClick }: { isActive?: boolean; onClick?: () => void }) {
  return (
    <div 
      className={`relative rounded-[6px] shrink-0 w-full cursor-pointer transition-all ${isActive ? "bg-[#2563EB]" : "bg-white hover:bg-gray-50"}`}
      data-name="_Nav item base"
      onClick={onClick}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <ContentAnalise isActive={isActive} />
        </div>
      </div>
    </div>
  );
}

function Navigation({ abaAtiva, onChangeAba }: { abaAtiva: AbaAtiva; onChangeAba: (aba: AbaAtiva) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Navigation">
      <NavItemDigitacoes 
        isActive={abaAtiva === 'home'} 
        onClick={() => onChangeAba('home')}
      />
      <NavItemProcessamentos 
        isActive={abaAtiva === 'processamentos'} 
        onClick={() => onChangeAba('processamentos')}
      />
      <NavItemHistorico 
        isActive={abaAtiva === 'historico'} 
        onClick={() => onChangeAba('historico')}
      />
      <NavItemCampanhas 
        isActive={abaAtiva === 'campanhas'} 
        onClick={() => onChangeAba('campanhas')}
      />
      <NavItemAnalise 
        isActive={abaAtiva === 'analise'} 
        onClick={() => onChangeAba('analise')}
      />
      <NavItemPerformance 
        isActive={abaAtiva === 'performance'} 
        onClick={() => onChangeAba('performance')}
      />
      <NavItemPropostas 
        isActive={abaAtiva === 'propostas'} 
        onClick={() => onChangeAba('propostas')}
      />
      <NavItemUsuarios 
        isActive={abaAtiva === 'usuarios'} 
        onClick={() => onChangeAba('usuarios')}
      />
      <NavItemEmpresas 
        isActive={abaAtiva === 'empresas'} 
        onClick={() => onChangeAba('empresas')}
      />
      <NavItemReceitas 
        isActive={abaAtiva === 'receitas'} 
        onClick={() => onChangeAba('receitas')}
      />
    </div>
  );
}

function Content5({ abaAtiva, onChangeAba }: { abaAtiva: AbaAtiva; onChangeAba: (aba: AbaAtiva) => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[16px] px-[16px] relative shrink-0 w-[244px]" data-name="Content">
      <Navigation abaAtiva={abaAtiva} onChangeAba={onChangeAba} />
    </div>
  );
}

export default function SubNavDitto({ abaAtiva, onChangeAba }: { abaAtiva: AbaAtiva; onChangeAba: (aba: AbaAtiva) => void }) {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[72px] px-0 relative size-full" data-name="Sub nav ditto">
      <div aria-hidden="true" className="absolute border-[#ede6f6] border-[0px_0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      
      {/* Logo */}
      <div className="absolute top-0 left-0 w-full h-[72px] flex items-center px-[18px] border-b border-[#f0f0f0]">
        <div className="w-[166.84px] h-[38.4px] scale-[0.8] origin-left">
          <Logo />
        </div>
      </div>
      
      <Content5 abaAtiva={abaAtiva} onChangeAba={onChangeAba} />
    </div>
  );
}