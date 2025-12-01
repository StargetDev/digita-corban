import svgPaths from "./svg-rtkmxi1ovx";

function Frame() {
  return (
    <div className="absolute bottom-[2.67%] font-['Inter:Regular',sans-serif] font-normal left-0 not-italic right-0 text-center text-white top-[61.33%]">
      <div className="absolute flex flex-col inset-[1.87%_66%_-1.87%_17%] justify-center leading-[0] text-[6.829px]">
        <p className="leading-[normal]">Y</p>
      </div>
      <p className="absolute bottom-0 leading-[normal] left-0 right-[83.33%] text-[7.179px] top-0">S</p>
      <p className="absolute bottom-0 leading-[normal] left-[33.33%] right-1/2 text-[7.179px] top-0">S</p>
      <p className="absolute bottom-0 leading-[normal] left-[83.33%] right-0 text-[7.179px] top-0">M</p>
      <p className="absolute bottom-0 leading-[normal] left-1/2 right-[33.33%] text-[7.18px] top-0">T</p>
      <p className="absolute bottom-0 leading-[normal] left-[66.67%] right-[16.67%] text-[7.18px] top-0">E</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[25px] relative shrink-0 w-[100px]" data-name="logo">
      <div className="absolute bottom-[41.33%] left-[73.33%] right-[14.33%] top-0" data-name="XMLID_65_">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
          <path d={svgPaths.p23ba7af0} fill="var(--fill-0, white)" id="XMLID_65_" />
        </svg>
      </div>
      <div className="absolute bottom-[41.33%] left-[58%] right-[27.33%] top-0" data-name="XMLID_69_">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <path d={svgPaths.pe620580} fill="var(--fill-0, white)" id="XMLID_69_" />
        </svg>
      </div>
      <div className="absolute bottom-[41.33%] left-[43.67%] right-[42.67%] top-0" data-name="XMLID_94_">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
          <path d={svgPaths.p9c93af0} fill="var(--fill-0, white)" id="XMLID_94_" />
        </svg>
      </div>
      <div className="absolute bottom-[41.33%] left-[27.33%] right-[57%] top-0" data-name="XMLID_53_">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
          <path d={svgPaths.pd72880} fill="var(--fill-0, white)" id="XMLID_53_" />
        </svg>
      </div>
      <div className="absolute bottom-[41.33%] left-[13.67%] right-[72.67%] top-0" data-name="XMLID_99_">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
          <path d={svgPaths.p1aa44480} fill="var(--fill-0, white)" id="XMLID_99_" />
        </svg>
      </div>
      <div className="absolute bottom-[41.33%] left-[86.33%] right-0 top-0" data-name="XMLID_99_">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
          <path d={svgPaths.p1aa44480} fill="var(--fill-0, white)" id="XMLID_99_" />
        </svg>
      </div>
      <div className="absolute bottom-[41.33%] left-0 right-[87%] top-0" data-name="XMLID_97_">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
          <path d={svgPaths.p24ed5c80} fill="var(--fill-0, white)" id="XMLID_97_" />
        </svg>
      </div>
      <Frame />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1a4027] text-[14px] text-nowrap whitespace-pre">Acesso</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#5fb371] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(70,3,165,0.05)]" />
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex h-[72px] items-center justify-between px-[32px] py-0 relative shrink-0 w-[1178px]" data-name="Container">
      <Logo />
      <ButtonBase />
    </div>
  );
}

export default function HeaderNavigation() {
  return (
    <div className="bg-[#3b7302] content-stretch flex flex-col items-center relative size-full" data-name="Header navigation">
      <Container />
    </div>
  );
}