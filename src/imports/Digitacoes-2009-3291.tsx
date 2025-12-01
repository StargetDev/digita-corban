import svgPaths from "./svg-2sfi93t11i";

function ChevronLeft() {
  return (
    <div className="absolute left-0 size-[24px] top-[23px]" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-left" opacity="0.1">
          <path d="M15 18L9 12L15 6" id="Icon" stroke="var(--stroke-0, #1B013F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#26a96c] h-[16.508px] ml-0 mt-0 rounded-[10.317px] w-[72.222px]" data-name="Rectangle" />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[normal] ml-[36px] mt-[3px] not-italic relative text-[8px] text-center text-nowrap text-white translate-x-[-50%] whitespace-pre">Pago</p>
    </div>
  );
}

function Digitado() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="digitado">
      <Group7 />
    </div>
  );
}

function Line() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Line">
      <div className="[grid-area:1_/_1] bg-[#f9f9f9] h-[6px] ml-0 mt-0 rounded-[7.5px] w-[244px]" data-name="Rectangle" />
      <div className="[grid-area:1_/_1] bg-neutral-700 h-[6px] ml-0 mt-0 rounded-[7.5px] w-[168.981px]" data-name="Rectangle" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold items-start justify-between leading-[normal] not-italic relative shrink-0 text-nowrap w-[244px] whitespace-pre">
      <p className="relative shrink-0 text-[#525051] text-[14px]">20</p>
      <p className="relative shrink-0 text-[#8c8c8f] text-[12px]">R$ 121.564.445,00</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[244px]">
      <Line />
      <Frame27 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[244px]">
      <Digitado />
      <Frame30 />
    </div>
  );
}

function MetricItem() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[70px] items-start p-[8px] relative rounded-[8.254px] shrink-0 w-[260px]" data-name="Metric item">
      <div aria-hidden="true" className="absolute border-[#f5f5fa] border-[1.032px] border-solid inset-0 pointer-events-none rounded-[8.254px] shadow-[0px_1.032px_2.063px_0px_rgba(16,24,40,0.05)]" />
      <Frame34 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-center text-nowrap text-white whitespace-pre">Em andamento</p>
    </div>
  );
}

function BaseBadge() {
  return (
    <div className="bg-[#5775d0] box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center p-[4px] relative rounded-[7272px] shrink-0 w-[80px]" data-name="Base Badge">
      <Frame />
    </div>
  );
}

function Line1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Line">
      <div className="[grid-area:1_/_1] bg-[#f9f9f9] h-[6px] ml-0 mt-0 rounded-[7.5px] w-[244px]" data-name="Rectangle" />
      <div className="[grid-area:1_/_1] bg-neutral-700 h-[6px] ml-0 mt-0 rounded-[7.5px] w-[168.981px]" data-name="Rectangle" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold items-start justify-between leading-[normal] not-italic relative shrink-0 text-nowrap w-[244px] whitespace-pre">
      <p className="relative shrink-0 text-[#525051] text-[14px]">20</p>
      <p className="relative shrink-0 text-[#8c8c8f] text-[12px]">R$ 121.564.445,00</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[244px]">
      <Line1 />
      <Frame28 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[244px]">
      <BaseBadge />
      <Frame31 />
    </div>
  );
}

function MetricItem1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[70px] items-start p-[8px] relative rounded-[8.254px] shrink-0 w-[260px]" data-name="Metric item">
      <div aria-hidden="true" className="absolute border-[#f5f5fa] border-[1.032px] border-solid inset-0 pointer-events-none rounded-[8.254px] shadow-[0px_1.032px_2.063px_0px_rgba(16,24,40,0.05)]" />
      <Frame35 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-center text-nowrap text-white whitespace-pre">Pendente</p>
    </div>
  );
}

function BaseBadge1() {
  return (
    <div className="bg-[#ee934f] box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center p-[4px] relative rounded-[7272px] shrink-0 w-[80px]" data-name="Base Badge">
      <Frame1 />
    </div>
  );
}

function Line2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Line">
      <div className="[grid-area:1_/_1] bg-[#f9f9f9] h-[6px] ml-0 mt-0 rounded-[7.5px] w-[244px]" data-name="Rectangle" />
      <div className="[grid-area:1_/_1] bg-neutral-700 h-[6px] ml-0 mt-0 rounded-[7.5px] w-[168.981px]" data-name="Rectangle" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold items-start justify-between leading-[normal] not-italic relative shrink-0 text-nowrap w-[244px] whitespace-pre">
      <p className="relative shrink-0 text-[#525051] text-[14px]">20</p>
      <p className="relative shrink-0 text-[#8c8c8f] text-[12px]">R$ 121.564.445,00</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[244px]">
      <Line2 />
      <Frame29 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[244px]">
      <BaseBadge1 />
      <Frame32 />
    </div>
  );
}

function MetricItem2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[70px] items-start p-[8px] relative rounded-[8.254px] shrink-0 w-[260px]" data-name="Metric item">
      <div aria-hidden="true" className="absolute border-[#f5f5fa] border-[1.032px] border-solid inset-0 pointer-events-none rounded-[8.254px] shadow-[0px_1.032px_2.063px_0px_rgba(16,24,40,0.05)]" />
      <Frame36 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[24px] top-0">
      <MetricItem />
      <MetricItem1 />
      <MetricItem2 />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="absolute left-[836px] size-[24px] top-[20px]" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right">
          <path d="M9 18L15 12L9 6" id="Icon" stroke="var(--stroke-0, #1B013F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Digitacoes() {
  return (
    <div className="absolute h-[70px] left-[calc(50%-1px)] overflow-x-auto overflow-y-clip top-[calc(20%+44px)] translate-x-[-50%] w-[860px]" data-name="Digitações">
      <ChevronLeft />
      <Frame33 />
      <ChevronRight />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[72px] top-0" data-name="Group">
      <div className="absolute bottom-0 left-[18.95%] right-[74.74%] top-0" data-name="container">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="container"></g>
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-[20.79%] right-[77.26%] top-1/4" data-name="icon">
        <div className="absolute inset-[3.33%_5.68%_3.33%_5.8%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 11">
            <path clipRule="evenodd" d={svgPaths.pe706400} fill="var(--fill-0, #DCDCE0)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[99px] not-italic text-[#b4b4b8] text-[12px] text-nowrap top-[11.5px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">1/3</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[72px] top-0">
      <Group4 />
      <div className="absolute bottom-0 left-[31.58%] right-[62.11%] top-0" data-name="container">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="container"></g>
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-[33.84%] right-[64.21%] top-1/4" data-name="icon">
        <div className="absolute inset-[3.33%_5.8%_3.33%_5.68%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 11">
            <path clipRule="evenodd" d={svgPaths.p1bc0b532} fill="var(--fill-0, #525051)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[-4px] top-0">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic right-[323px] text-[#525051] text-[12px] text-nowrap text-right top-[calc(50%-8.75px)] whitespace-pre">1-7 de 100</p>
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-0 left-[83.56%] right-0 top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 3">
          <g id="container"></g>
          <path clipRule="evenodd" d={svgPaths.p3481cd00} fill="var(--fill-0, #8C8C8F)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-0 left-[45.53%] overflow-clip right-[16.05%] top-0">
      <Group1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic right-[24px] text-[#8c8c8f] text-[12px] text-nowrap text-right top-[calc(50%-7.75px)] whitespace-pre">7</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-0 not-italic text-[#b4b4b8] text-[12px] text-nowrap top-[calc(50%-7.75px)] whitespace-pre">Linhas por página:</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[91.51%_54.38%_2.98%_1.84%] overflow-clip">
      <Group6 />
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[52.53%] top-[88.53%]">
      <div className="absolute bottom-0 left-0 right-[52.53%] top-[88.53%]" data-name="container" />
      <Group3 />
    </div>
  );
}

function Cell() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-[11px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[14px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Banco</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start leading-[0] not-italic overflow-clip px-0 py-[2px] relative shrink-0 text-[#8c8c8f] w-full" data-name="frame">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[normal]">CPF</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[10px] w-full">
        <p className="leading-[normal]">Cliente</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[40px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start leading-[0] not-italic overflow-clip px-0 py-[2px] relative shrink-0 text-[#8c8c8f] w-full" data-name="frame">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[normal]">Produto</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[10px] w-full">
        <p className="leading-[normal]">Código da tabela</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[40px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start leading-[0] not-italic overflow-clip px-0 py-[2px] relative shrink-0 text-[#8c8c8f] w-full" data-name="frame">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[normal]">Data</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[10px] w-full">
        <p className="leading-[normal]">atualização</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[40px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-col items-start leading-[0] not-italic overflow-clip px-0 py-[2px] relative shrink-0 text-[#8c8c8f] w-full" data-name="frame">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[normal]">Status</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[10px] w-full">
        <p className="leading-[normal]">Sistema</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[40px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-white relative shrink-0 w-[868px]" data-name="table cell">
      <div className="content-stretch flex items-end justify-between overflow-clip relative rounded-[inherit] w-[868px]">
        <Cell />
        <Cell1 />
        <Cell2 />
        <Cell3 />
        <Cell4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#b4b4b8] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Cell5() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div aria-hidden="true" className="absolute border-[#5fb371] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">FACTA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full" data-name="Frame">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[normal]">123.456.789-10</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Elisabete Machado...</p>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2009_3295)" id="Icons">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2009_3295">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Icons />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">123456</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-[143px]">
        <p className="leading-[normal]">Crédito energia</p>
      </div>
      <Frame38 />
    </div>
  );
}

function Cell7() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Cell8() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">29/07/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-center text-nowrap text-white whitespace-pre">Pago</p>
    </div>
  );
}

function BaseBadge2() {
  return (
    <div className="bg-[#26a96c] box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center p-[4px] relative rounded-[7272px] shrink-0 w-[80px]" data-name="Base Badge">
      <Frame8 />
    </div>
  );
}

function BadgesTags() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[80px]" data-name="Badges & Tags">
      <BaseBadge2 />
    </div>
  );
}

function Cell9() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <BadgesTags />
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-end justify-between overflow-clip relative shrink-0 w-[868px]" data-name="table cell">
      <Cell5 />
      <Cell6 />
      <Cell7 />
      <Cell8 />
      <Cell9 />
    </div>
  );
}

function Cell10() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-neutral-700 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">Fintech do corban</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full" data-name="Frame">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[normal]">123.456.789-10</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Elisabete Machado...</p>
      </div>
    </div>
  );
}

function Cell11() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2009_3295)" id="Icons">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2009_3295">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Icons1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">123456</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-[min-content]">
        <p className="leading-[normal]">FGTS</p>
      </div>
      <Frame39 />
    </div>
  );
}

function Cell12() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Cell13() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">29/07/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-center text-nowrap text-white whitespace-pre">Pago</p>
    </div>
  );
}

function BaseBadge3() {
  return (
    <div className="bg-[#26a96c] box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center p-[4px] relative rounded-[7272px] shrink-0 w-[80px]" data-name="Base Badge">
      <Frame11 />
    </div>
  );
}

function BadgesTags1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badges & Tags">
      <BaseBadge3 />
    </div>
  );
}

function Cell14() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <BadgesTags1 />
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-[#f5f5fa] content-stretch flex h-[36px] items-end justify-between overflow-clip relative shrink-0 w-[868px]" data-name="table cell">
      <Cell10 />
      <Cell11 />
      <Cell12 />
      <Cell13 />
      <Cell14 />
    </div>
  );
}

function Cell15() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-neutral-700 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">ICRED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full" data-name="Frame">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[normal]">123.456.789-10</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Elisabete Machado...</p>
      </div>
    </div>
  );
}

function Cell16() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Icons2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2009_3295)" id="Icons">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2009_3295">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Icons2 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">123456</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-[min-content]">
        <p className="leading-[normal]">FGTS</p>
      </div>
      <Frame40 />
    </div>
  );
}

function Cell17() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Cell18() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">29/07/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-center text-nowrap text-white whitespace-pre">Em andamento</p>
    </div>
  );
}

function BaseBadge4() {
  return (
    <div className="bg-[#5775d0] box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center p-[4px] relative rounded-[7272px] shrink-0 w-[80px]" data-name="Base Badge">
      <Frame14 />
    </div>
  );
}

function BadgesTags2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[80px]" data-name="Badges & Tags">
      <BaseBadge4 />
    </div>
  );
}

function Cell19() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <BadgesTags2 />
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-end justify-between overflow-clip relative shrink-0 w-[868px]" data-name="table cell">
      <Cell15 />
      <Cell16 />
      <Cell17 />
      <Cell18 />
      <Cell19 />
    </div>
  );
}

function Cell20() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div aria-hidden="true" className="absolute border-[#5fb371] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">VCTex</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full" data-name="Frame">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[normal]">123.456.789-10</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Elisabete Machado...</p>
      </div>
    </div>
  );
}

function Cell21() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Icons3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2009_3295)" id="Icons">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2009_3295">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Icons3 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">123456</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-[min-content]">
        <p className="leading-[normal]">FGTS</p>
      </div>
      <Frame41 />
    </div>
  );
}

function Cell22() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Cell23() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">29/07/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-center text-nowrap text-white whitespace-pre">Em andamento</p>
    </div>
  );
}

function BaseBadge5() {
  return (
    <div className="bg-[#5775d0] box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center p-[4px] relative rounded-[7272px] shrink-0 w-[80px]" data-name="Base Badge">
      <Frame17 />
    </div>
  );
}

function BadgesTags3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badges & Tags">
      <BaseBadge5 />
    </div>
  );
}

function Cell24() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <BadgesTags3 />
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="bg-[#f5f5fa] content-stretch flex h-[36px] items-end justify-between overflow-clip relative shrink-0 w-[868px]" data-name="table cell">
      <Cell20 />
      <Cell21 />
      <Cell22 />
      <Cell23 />
      <Cell24 />
    </div>
  );
}

function Cell25() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div aria-hidden="true" className="absolute border-[#5fb371] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">Fintech do corban</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full" data-name="Frame">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[normal]">123.456.789-10</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Elisabete Machado...</p>
      </div>
    </div>
  );
}

function Cell26() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2009_3295)" id="Icons">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2009_3295">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Icons4 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">123456</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-[min-content]">
        <p className="leading-[normal]">FGTS</p>
      </div>
      <Frame42 />
    </div>
  );
}

function Cell27() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Cell28() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">29/07/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-center text-nowrap text-white whitespace-pre">Pendente</p>
    </div>
  );
}

function BaseBadge6() {
  return (
    <div className="bg-[#ee934f] box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center p-[4px] relative rounded-[7272px] shrink-0 w-[80px]" data-name="Base Badge">
      <Frame20 />
    </div>
  );
}

function BadgesTags4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badges & Tags">
      <BaseBadge6 />
    </div>
  );
}

function Cell29() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <BadgesTags4 />
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-end justify-between overflow-clip relative shrink-0 w-[868px]" data-name="table cell">
      <Cell25 />
      <Cell26 />
      <Cell27 />
      <Cell28 />
      <Cell29 />
    </div>
  );
}

function Cell30() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div aria-hidden="true" className="absolute border-[#5fb371] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">Fintech do corban</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full" data-name="Frame">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[normal]">123.456.789-10</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Elisabete Machado...</p>
      </div>
    </div>
  );
}

function Cell31() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2009_3295)" id="Icons">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2009_3295">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Icons5 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">123456</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-[min-content]">
        <p className="leading-[normal]">FGTS</p>
      </div>
      <Frame43 />
    </div>
  );
}

function Cell32() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Cell33() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">29/07/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[80px]" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-center text-nowrap text-white whitespace-pre">Recusada</p>
    </div>
  );
}

function BaseBadge7() {
  return (
    <div className="bg-[#eb5757] box-border content-stretch flex gap-[4px] h-[16px] items-center p-[4px] relative rounded-[7272px] shrink-0 w-[80px]" data-name="Base Badge">
      <Frame23 />
    </div>
  );
}

function BadgesTags5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[80px]" data-name="Badges & Tags">
      <BaseBadge7 />
    </div>
  );
}

function Cell34() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <BadgesTags5 />
        </div>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="bg-[#f5f5fa] content-stretch flex h-[36px] items-end justify-between overflow-clip relative shrink-0 w-[868px]" data-name="table cell">
      <Cell30 />
      <Cell31 />
      <Cell32 />
      <Cell33 />
      <Cell34 />
    </div>
  );
}

function Cell35() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_4px] border-neutral-700 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">Fintech do corban</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full" data-name="Frame">
      <div className="flex flex-col justify-center min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[normal]">123.456.789-10</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
        <p className="leading-[normal] whitespace-pre">Elisabete Machado...</p>
      </div>
    </div>
  );
}

function Cell36() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Icons6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2009_3295)" id="Icons">
          <path d={svgPaths.p3e7757b0} id="Vector" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 8V6" id="Vector_2" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 4H6.005" id="Vector_3" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2009_3295">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Icons6 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">123456</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-[min-content]">
        <p className="leading-[normal]">FGTS</p>
      </div>
      <Frame44 />
    </div>
  );
}

function Cell37() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame25 />
        </div>
      </div>
    </div>
  );
}

function Cell38() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">29/07/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#eb5757] text-[8px] text-center text-nowrap whitespace-pre">Falha</p>
    </div>
  );
}

function BaseBadge8() {
  return (
    <div className="bg-[#fbdddd] box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center p-[4px] relative rounded-[7272px] shrink-0 w-[80px]" data-name="Base Badge">
      <div aria-hidden="true" className="absolute border border-[#eb5757] border-solid inset-0 pointer-events-none rounded-[7272px]" />
      <Frame26 />
    </div>
  );
}

function BadgesTags6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badges & Tags">
      <BaseBadge8 />
    </div>
  );
}

function Cell39() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <BadgesTags6 />
        </div>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-end justify-between overflow-clip relative shrink-0 w-[868px]" data-name="table cell">
      <Cell35 />
      <Cell36 />
      <Cell37 />
      <Cell38 />
      <Cell39 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[86px]">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute h-[427px] left-[32px] top-[calc(20%+60px)] w-[868px]">
      <Group5 />
      <Frame37 />
    </div>
  );
}

export default function Digitacoes1() {
  return (
    <div className="bg-white relative size-full" data-name="Digitações">
      <Digitacoes />
      <Frame45 />
    </div>
  );
}