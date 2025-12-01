import { BarChart3, TrendingUp, FolderSearch, Megaphone, Settings, ChevronLeft } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

function Logo() {
  return (
    <div className="flex items-center gap-[8px] p-[24px]">
      <div className="bg-[#5fb371] rounded-[8px] size-[40px] flex items-center justify-center">
        <div className="font-['Inter:Bold',sans-serif] text-white text-[20px]">
          d
        </div>
      </div>
      <span className="font-['Inter:Bold',sans-serif] text-[#5fb371] text-[24px]">
        itto
      </span>
    </div>
  );
}

function NavItem({ icon, label, isActive = false }: NavItemProps) {
  return (
    <div className={`${isActive ? 'bg-[#5fb371]' : 'bg-white hover:bg-gray-50'} relative rounded-[6px] shrink-0 w-full transition-colors cursor-pointer`}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center gap-[12px] px-[12px] py-[12px] relative w-full">
          <div className={isActive ? 'text-white' : 'text-[#404040]'}>
            {icon}
          </div>
          <p className={`font-['Inter:Semi_Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-nowrap whitespace-pre ${isActive ? 'text-white' : 'text-neutral-700'}`}>
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

function BackButton() {
  return (
    <div className="flex items-center gap-[8px] px-[12px] py-[8px] cursor-pointer hover:bg-gray-50 rounded-[6px] transition-colors mb-[8px]">
      <ChevronLeft size={24} className="text-[#8c8c8f]" />
    </div>
  );
}

export function Sidebar() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-screen items-start pb-[24px] pt-0 px-0 w-[230px] fixed left-0 top-0 shadow-sm z-10">
      <Logo />
      
      <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-0 px-[16px] relative shrink-0 w-full">
        <BackButton />
        
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <NavItem 
            icon={<BarChart3 size={24} />} 
            label="Dashboard" 
          />
          <NavItem 
            icon={<TrendingUp size={24} />} 
            label="Simulador" 
          />
          <NavItem 
            icon={<FolderSearch size={24} />} 
            label="Acompanhamentos" 
            isActive 
          />
          <NavItem 
            icon={<Megaphone size={24} />} 
            label="Propostas" 
          />
          <NavItem 
            icon={<Settings size={24} />} 
            label="Configurações" 
          />
        </div>
      </div>
    </div>
  );
}
