import svgPaths from "./svg-bl4z5hic68";
import imgImage from "figma:asset/cca6033997b3589cf45ca932f03df03dffeb337e.png";

function Group13() {
  return (
    <div className="[grid-area:1_/_1] h-[9.9px] ml-[15.48%] mt-1/4 relative w-[10px]">
      <div className="absolute inset-[-10.1%_-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Group 12905">
            <path d="M11 5.94922H1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M6 10.9L1 5.95L6 1" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] bg-[#b4b4b8] h-[20px] ml-0 mt-0 rounded-[10px] w-[84px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[10px] justify-center ml-[34px] mt-[10px] not-italic relative text-[12px] text-white translate-y-[-50%] w-[36px]">
        <p className="leading-[normal]">voltar</p>
      </div>
      <Group13 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[170px]">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5fb371] text-[20px] text-nowrap whitespace-pre">EXTRATO FINANCEIRO</p>
      <Group12 />
    </div>
  );
}

function Notificacao() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="notificação">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="notificaÃ§Ã£o">
          <g id="Icons">
            <path d={svgPaths.p346098d0} id="Vector" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p27cc2e80} id="Vector_2" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ButtonPerfil() {
  return (
    <div className="h-[40px] relative shrink-0 w-[136px]" data-name="Button perfil">
      <div className="absolute bg-[#5fb371] bottom-0 left-[-4.41%] right-0 rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px] top-0" />
      <div className="absolute left-[80px] size-[32px] top-[4px]" data-name="image">
        <img alt="" className="block max-w-none size-full" height="32" src={imgImage} width="32" />
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-20px)] not-italic text-[14px] text-center text-nowrap text-white top-[calc(50%-9px)] translate-x-[-50%] whitespace-pre">Rodrigo</p>
    </div>
  );
}

function ControlBar() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[52px] items-center left-[calc(50%-3px)] px-[16px] py-0 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[265px]" data-name="control-bar">
      <Notificacao />
      <ButtonPerfil />
    </div>
  );
}

function UpperbarPortalDittoV() {
  return (
    <div className="h-[52px] relative shrink-0 w-[271px]" data-name="Upperbar Portal Ditto V1.0">
      <div className="absolute bg-[#f5f5fa] inset-0 rounded-[69px]" />
      <ControlBar />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[32px] top-[31px] w-[856px]">
      <Frame13 />
      <UpperbarPortalDittoV />
    </div>
  );
}

function MltiSelecao() {
  return (
    <div className="absolute left-1/2 size-[14px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="mlti seleção">
      <div className="absolute border-[#b4b4b8] border-[1.4px] border-solid inset-0 rounded-[2px]" data-name="container" />
    </div>
  );
}

function StatusEmpresa() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Status empresa">
      <MltiSelecao />
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip px-0 py-[2px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Tipo</p>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[40px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start leading-[0] not-italic overflow-clip px-0 py-[2px] relative shrink-0 text-[#8c8c8f] w-full" data-name="frame">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[12px] w-full">
        <p className="leading-[normal]">Data</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[10px] w-full">
        <p className="leading-[normal]">da transação</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[40px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip px-0 py-[2px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] w-full">
        <p className="leading-[normal]">Valor</p>
      </div>
    </div>
  );
}

function Cell2() {
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

function Cell3() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-[11px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Status</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-col items-start leading-[0] not-italic overflow-clip px-0 py-[2px] relative shrink-0 text-[#8c8c8f] w-full" data-name="frame">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[12px] w-full">
        <p className="leading-[normal]">Data</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[10px] w-full">
        <p className="leading-[normal]">do pagamento</p>
      </div>
    </div>
  );
}

function Cell4() {
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
    <div className="box-border content-stretch flex flex-col items-start overflow-clip px-0 py-[2px] relative shrink-0 w-full" data-name="frame">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">{`Descrição `}</p>
      </div>
    </div>
  );
}

function Cell5() {
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

function TableCell() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="table cell">
      <div className="content-stretch flex items-end justify-between overflow-clip relative rounded-[inherit] w-full">
        <StatusEmpresa />
        <Cell />
        <Cell1 />
        <Cell2 />
        <Cell3 />
        <Cell4 />
        <Cell5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#b4b4b8] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function MltiSelecao1() {
  return (
    <div className="absolute left-1/2 size-[14px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="mlti seleção">
      <div className="absolute border-[#b4b4b8] border-[1.4px] border-solid inset-0 rounded-[2px]" data-name="container" />
    </div>
  );
}

function Nome() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[40px]" data-name="Nome">
      <MltiSelecao1 />
    </div>
  );
}

function Cell6() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Super Match</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
        <p className="leading-[normal]">15/09/2025</p>
      </div>
    </div>
  );
}

function Cell7() {
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

function Cell8() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#26a96c] text-[10px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">+R$ 50,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-center text-nowrap text-white whitespace-pre">Pendente</p>
    </div>
  );
}

function BaseBadge() {
  return (
    <div className="bg-[#ee934f] box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center p-[4px] relative rounded-[7272px] shrink-0 w-[70px]" data-name="Base Badge">
      <Frame5 />
    </div>
  );
}

function Cell9() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <BaseBadge />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
        <p className="leading-[normal]">-</p>
      </div>
    </div>
  );
}

function Cell10() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Cell11() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Venda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-end justify-between overflow-clip relative shrink-0 w-full" data-name="table cell">
      <Nome />
      <Cell6 />
      <Cell7 />
      <Cell8 />
      <Cell9 />
      <Cell10 />
      <Cell11 />
    </div>
  );
}

function MltiSelecao2() {
  return (
    <div className="absolute left-1/2 size-[14px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="mlti seleção">
      <div className="absolute border-[#b4b4b8] border-[1.4px] border-solid inset-0 rounded-[2px]" data-name="container" />
    </div>
  );
}

function Nome1() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[40px]" data-name="Nome">
      <MltiSelecao2 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
        <p className="leading-[normal]">Match</p>
      </div>
    </div>
  );
}

function Cell12() {
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

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
        <p className="leading-[normal]">15/09/2025</p>
      </div>
    </div>
  );
}

function Cell13() {
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

function Cell14() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#26a96c] text-[10px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">+R$ 50,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-center text-nowrap text-white whitespace-pre">Pendente</p>
    </div>
  );
}

function BaseBadge1() {
  return (
    <div className="bg-[#ee934f] box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center p-[4px] relative rounded-[7272px] shrink-0 w-[70px]" data-name="Base Badge">
      <Frame6 />
    </div>
  );
}

function Cell15() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <BaseBadge1 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
        <p className="leading-[normal]">-</p>
      </div>
    </div>
  );
}

function Cell16() {
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

function Cell17() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Venda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-[#f5f5fa] content-stretch flex h-[36px] items-end justify-between overflow-clip relative shrink-0 w-full" data-name="table cell">
      <Nome1 />
      <Cell12 />
      <Cell13 />
      <Cell14 />
      <Cell15 />
      <Cell16 />
      <Cell17 />
    </div>
  );
}

function MltiSelecao3() {
  return (
    <div className="absolute left-1/2 size-[14px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="mlti seleção">
      <div className="absolute border-[#b4b4b8] border-[1.4px] border-solid inset-0 rounded-[2px]" data-name="container" />
    </div>
  );
}

function Nome2() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[40px]" data-name="Nome">
      <MltiSelecao3 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
        <p className="leading-[normal]">Pagamento</p>
      </div>
    </div>
  );
}

function Cell18() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
        <p className="leading-[normal]">15/09/2025</p>
      </div>
    </div>
  );
}

function Cell19() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function Cell20() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#eb5757] text-[10px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">-R$ 50,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-center text-nowrap text-white whitespace-pre">Repasse efetuado</p>
    </div>
  );
}

function BaseBadge2() {
  return (
    <div className="bg-neutral-700 box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center p-[4px] relative rounded-[7272px] shrink-0" data-name="Base Badge">
      <Frame7 />
    </div>
  );
}

function BadgesTags() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badges & Tags">
      <BaseBadge2 />
    </div>
  );
}

function Cell21() {
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

function Cell22() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Comissão paga</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-end justify-between overflow-clip relative shrink-0 w-full" data-name="table cell">
      <Nome2 />
      <Cell18 />
      <Cell19 />
      <Cell20 />
      <Cell21 />
      <Cell19 />
      <Cell22 />
    </div>
  );
}

function MltiSelecao4() {
  return (
    <div className="absolute left-1/2 size-[14px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="mlti seleção">
      <div className="absolute border-[#b4b4b8] border-[1.4px] border-solid inset-0 rounded-[2px]" data-name="container" />
    </div>
  );
}

function Nome3() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[40px]" data-name="Nome">
      <MltiSelecao4 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
        <p className="leading-[normal]">Super Match</p>
      </div>
    </div>
  );
}

function Cell23() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
        <p className="leading-[normal]">15/09/2025</p>
      </div>
    </div>
  );
}

function Cell24() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function Cell25() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#26a96c] text-[10px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">+R$ 50,00</p>
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

function BaseBadge3() {
  return (
    <div className="bg-[#26a96c] box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center p-[4px] relative rounded-[7272px] shrink-0 w-[70px]" data-name="Base Badge">
      <Frame8 />
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

function Cell26() {
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

function Cell27() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Venda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="bg-[#f5f5fa] content-stretch flex h-[36px] items-end justify-between overflow-clip relative shrink-0 w-full" data-name="table cell">
      <Nome3 />
      <Cell23 />
      <Cell24 />
      <Cell25 />
      <Cell26 />
      <Cell24 />
      <Cell27 />
    </div>
  );
}

function MltiSelecao5() {
  return (
    <div className="absolute left-1/2 size-[14px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="mlti seleção">
      <div className="absolute border-[#b4b4b8] border-[1.4px] border-solid inset-0 rounded-[2px]" data-name="container" />
    </div>
  );
}

function Nome4() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[40px]" data-name="Nome">
      <MltiSelecao5 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
        <p className="leading-[normal]">Super Match</p>
      </div>
    </div>
  );
}

function Cell28() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
        <p className="leading-[normal]">15/09/2025</p>
      </div>
    </div>
  );
}

function Cell29() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Cell30() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#26a96c] text-[10px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">+R$ 50,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[8px] text-center text-nowrap text-white whitespace-pre">Pago</p>
    </div>
  );
}

function BaseBadge4() {
  return (
    <div className="bg-[#26a96c] box-border content-stretch flex gap-[4px] h-[16px] items-center justify-center p-[4px] relative rounded-[7272px] shrink-0 w-[70px]" data-name="Base Badge">
      <Frame9 />
    </div>
  );
}

function BadgesTags2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Badges & Tags">
      <BaseBadge4 />
    </div>
  );
}

function Cell31() {
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

function Cell32() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Venda</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-end justify-between overflow-clip relative shrink-0 w-full" data-name="table cell">
      <Nome4 />
      <Cell28 />
      <Cell29 />
      <Cell30 />
      <Cell31 />
      <Cell29 />
      <Cell32 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-1/2 top-[calc(20%+122px)] translate-x-[-50%] w-[856px]">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell4 />
    </div>
  );
}

function Frame24() {
  return <div className="absolute h-[12px] left-[56px] top-[calc(60%+137px)] w-[126.667px]" />;
}

function Frame10() {
  return (
    <div className="basis-0 bg-[rgba(95,179,113,0.1)] grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center leading-[normal] not-italic p-[8px] relative text-[#5fb371] text-[12px] text-nowrap w-full whitespace-pre">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0">Total pago</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">R$ 45.000,00</p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 bg-[rgba(238,147,79,0.1)] grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center leading-[normal] not-italic p-[8px] relative text-[#ee934f] text-[12px] text-nowrap w-full whitespace-pre">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0">Total pendente</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">R$ 4.500,00</p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="basis-0 bg-[#f5f5fa] grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center leading-[normal] not-italic p-[8px] relative text-[#525051] text-[12px] text-nowrap w-full whitespace-pre">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0">Total geral</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">R$ 4.500,00</p>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-1/2 top-[107px] translate-x-[-50%] w-[856px]">
      <Frame10 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[72px] top-0" data-name="Group">
      <div className="absolute bottom-0 left-[18.95%] right-[74.74%] top-0" data-name="container">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="container"></g>
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-[20.79%] right-[77.26%] top-1/4" data-name="icon">
        <div className="absolute inset-[3.42%_5.54%_3.42%_5.6%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
            <path clipRule="evenodd" d={svgPaths.p3a8dfb00} fill="var(--fill-0, #C9C9C9)" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Quicksand:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[99px] text-[#8c8c8f] text-[12px] text-nowrap top-[11.5px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">1/3</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[72px] top-0">
      <Group />
      <div className="absolute bottom-0 left-[31.58%] right-[62.11%] top-0" data-name="container">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="container"></g>
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-[33.84%] right-[64.21%] top-1/4" data-name="icon">
        <div className="absolute inset-[3.42%_5.6%_3.42%_5.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
            <path clipRule="evenodd" d={svgPaths.p1b8a8100} fill="var(--fill-0, black)" fillOpacity="0.54" fillRule="evenodd" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-0 top-0">
      <p className="absolute font-['Quicksand:SemiBold',sans-serif] font-semibold leading-[18px] right-[323px] text-[#515251] text-[12px] text-nowrap text-right top-[calc(50%-9px)] whitespace-pre">1-7 de 100</p>
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-0 left-[83.56%] right-0 top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Group 3">
          <g id="container"></g>
          <path clipRule="evenodd" d={svgPaths.p36a22900} fill="var(--fill-0, #A6A6A6)" fillRule="evenodd" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-0 left-[45.53%] overflow-clip right-[16.05%] top-0">
      <Group2 />
      <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] right-[24px] text-[#515251] text-[12px] text-nowrap text-right top-[calc(50%-8px)] whitespace-pre">7</p>
      <p className="absolute font-['Quicksand:Regular',sans-serif] font-normal leading-[normal] left-0 text-[#a6a6a6] text-[12px] text-nowrap top-[calc(50%-8px)] whitespace-pre">Linhas por página:</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[26%_3.88%] overflow-clip">
      <Group10 />
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-0">
      <Group4 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="h-[50px] relative shrink-0 w-[412px]" data-name="Pagination">
      <Group5 />
    </div>
  );
}

function ButtonWeb() {
  return (
    <div className="h-[40px] relative shrink-0 w-[164px]" data-name="Button web">
      <div className="absolute bg-[#ededf2] inset-0 rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px]" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-1px)] not-italic text-[#b4b4b8] text-[14px] text-center text-nowrap top-[calc(50%-8px)] translate-x-[-50%] whitespace-pre">{`Pagar `}</p>
    </div>
  );
}

function ButtonWeb1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[164px]" data-name="Button web">
      <div className="absolute bg-[#ededf2] inset-0 rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px]" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-1px)] not-italic text-[#b4b4b8] text-[14px] text-center text-nowrap top-[calc(50%-8px)] translate-x-[-50%] whitespace-pre">Exportar</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <ButtonWeb />
      <ButtonWeb1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-1/2 top-[calc(60%+114px)] translate-x-[-50%] w-[856px]">
      <Pagination />
      <Frame32 />
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[60px] mt-[6px] place-items-start relative">
      <div className="[grid-area:1_/_1] ml-0 mt-px relative size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #404040)" id="Ellipse 80" r="8" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center ml-[4px] mt-[9px] not-italic relative text-[14px] text-nowrap text-white translate-y-[-50%]">
        <p className="leading-[18px] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Filtro() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="filtro">
      <div className="[grid-area:1_/_1] bg-[#f5f5fa] h-[30px] ml-0 mt-0 rounded-[10px] w-[87px]" data-name="Rectangle" />
      <Group11 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center ml-[12px] mt-[15.5px] not-italic relative text-[#525051] text-[14px] text-nowrap translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Filtros</p>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Filtro />
    </div>
  );
}

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group15 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="[grid-area:1_/_1] ml-[161.56px] mt-[6.5px] relative size-[24px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-down">
          <path d="M6 9L12 15L18 9" id="Icon" stroke="var(--stroke-0, #525051)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[40.98%] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-white border border-[#b4b4b8] border-solid h-[36px] ml-0 mt-0 rounded-[10px] w-[190px]" />
      <ChevronDown />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] ml-[8px] mt-[27px] not-italic relative text-[#8c8c8f] text-[12px] text-nowrap translate-y-[-100%]">
        <p className="leading-[normal] whitespace-pre">Selecione</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-0 mt-[17px] not-italic relative text-[#8c8c8f] text-[14px] text-nowrap translate-y-[-100%]">
        <p className="leading-[normal] whitespace-pre">Convênio</p>
      </div>
      <Group6 />
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="[grid-area:1_/_1] ml-[161.5px] mt-[6px] overflow-clip relative size-[24px]" data-name="chevron-down">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
            <path d="M1 1L7 7L13 1" id="Icon" stroke="var(--stroke-0, #525051)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[25px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-white border border-[#b4b4b8] border-solid h-[36px] ml-0 mt-0 rounded-[10px] w-[190px]" />
      <ChevronDown1 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] ml-[8px] mt-[27px] not-italic relative text-[#8c8c8f] text-[12px] text-nowrap translate-y-[-100%]">
        <p className="leading-[normal] whitespace-pre">Facta</p>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group9 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-0 mt-[17px] not-italic relative text-[#8c8c8f] text-[14px] text-nowrap translate-y-[-100%]">
        <p className="leading-[normal] whitespace-pre">Banco</p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="[grid-area:1_/_1] ml-[160.5px] mt-[6px] overflow-clip relative size-[24px]" data-name="search">
      <div className="absolute inset-[12.5%]" data-name="Icon">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p29ecb700} id="Icon" stroke="var(--stroke-0, #525051)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[25px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-white border border-[#b4b4b8] border-solid h-[36px] ml-0 mt-0 rounded-[10px] w-[190px]" />
      <Search />
    </div>
  );
}

function Group14() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-0 mt-[17px] not-italic relative text-[#8c8c8f] text-[14px] text-nowrap translate-y-[-100%]">
        <p className="leading-[normal] whitespace-pre">Proposta</p>
      </div>
      <Group8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0">
      <Group7 />
      <Group17 />
      <Group14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-1/2 top-[calc(20%+37px)] translate-x-[-50%] w-[856px]">
      <Group16 />
      <Frame11 />
    </div>
  );
}

export default function Relatorios() {
  return (
    <div className="bg-white relative size-full" data-name="Relatorios">
      <Frame14 />
      <Frame12 />
      <Frame24 />
      <Frame23 />
      <Frame16 />
      <Frame15 />
    </div>
  );
}