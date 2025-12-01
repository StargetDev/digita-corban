import svgPaths from "./svg-oqwqbrl94o";
import imgImage1 from "figma:asset/f53e1d24fbad79be67f30faaa84b663526fc7319.png";
import { imgImage } from "./svg-d2yx8";

function StableTableSimulador() {
  return (
    <div className="box-border content-stretch flex gap-[9px] items-center px-[7px] py-0 relative shrink-0" data-name="Stable Table/ Simulador">
      <div aria-hidden="true" className="absolute border-[#5fb371] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5fb371] text-[20px] text-center text-nowrap">
        <p className="leading-[40px] whitespace-pre">Comissões em aberto</p>
      </div>
    </div>
  );
}

function StableTableHistorico() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[180px]" data-name="Stable Table/ Histórico">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b4b4b8] text-[20px] text-center text-nowrap">
        <p className="leading-[40px] whitespace-pre">Comisões pagas</p>
      </div>
    </div>
  );
}

function StableTableGrid() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[24px] h-[40px] items-center left-[32px] top-[calc(10%+49px)] translate-y-[-50%] w-[431px]" data-name="Stable Table/ Grid">
      <StableTableSimulador />
      <StableTableHistorico />
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
    <div className="[grid-area:1_/_1] h-[40px] ml-[180px] mt-0 relative w-[164px]" data-name="Button web">
      <div className="absolute bg-[#5fb371] inset-0 rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px]" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-1px)] not-italic text-[14px] text-center text-nowrap text-white top-[calc(50%-8px)] translate-x-[-50%] whitespace-pre">Exportar</p>
    </div>
  );
}

function ButtonWeb1() {
  return (
    <div className="[grid-area:1_/_1] h-[40px] ml-0 mt-0 relative w-[164px]" data-name="Button web">
      <div className="absolute bg-[#ededf2] inset-0 rounded-bl-[20px] rounded-br-[20px] rounded-tr-[20px]" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[calc(50%-0.5px)] not-italic text-[#b4b4b8] text-[14px] text-center text-nowrap top-[calc(50%-8px)] translate-x-[-50%] whitespace-pre">Pagar comissão</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <ButtonWeb />
      <ButtonWeb1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-0 top-[375px] w-[856px]">
      <Pagination />
      <Group17 />
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

function Cell() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-[11px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] w-[64px]">
            <p className="leading-[normal]">Consultor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[40px] items-center px-[8px] py-[11px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] w-[64px]">
            <p className="leading-[normal]">Equipe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[40px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] w-[64px]">
            <p className="leading-[normal]">QTD contratos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex flex-col items-start leading-[0] not-italic overflow-clip px-0 py-[2px] relative shrink-0 text-[#8c8c8f] w-full" data-name="frame">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[normal]">Valor</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[10px] w-full">
        <p className="leading-[normal]">Comissão</p>
      </div>
    </div>
  );
}

function Cell3() {
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
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[normal]">Tipo</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[10px] w-full">
        <p className="leading-[normal]">Pix</p>
      </div>
    </div>
  );
}

function Cell4() {
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
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[14px] w-full">
        <p className="leading-[normal]">Pix</p>
      </div>
    </div>
  );
}

function Cell5() {
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

function User() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="user">
      <div className="[grid-area:1_/_1] h-[25.2px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6.797px_0.399px] mask-size-[24px_24px] ml-[-6.8px] mt-[-0.4px] relative w-[37.6px]" data-name="Image" style={{ maskImage: `url('${imgImage}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Vinicius Silva</p>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[10px] relative w-full">
          <User />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
        <p className="leading-[normal]">Matriz</p>
      </div>
    </div>
  );
}

function Cell7() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame4 />
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
            <p className="leading-[normal]">9</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell9() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">R$ 4.500,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell10() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">CPF</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell11() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">123.456.789-10</p>
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

function User1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="user">
      <div className="[grid-area:1_/_1] h-[25.2px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6.797px_0.399px] mask-size-[24px_24px] ml-[-6.8px] mt-[-0.4px] relative w-[37.6px]" data-name="Image" style={{ maskImage: `url('${imgImage}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Vinicius Silva</p>
      </div>
    </div>
  );
}

function Cell12() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[10px] relative w-full">
          <User1 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
        <p className="leading-[normal]">Matriz</p>
      </div>
    </div>
  );
}

function Cell13() {
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

function Cell14() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">9</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell15() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">R$ 4.500,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell16() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">Celular</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell17() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">(99)99999-9999</p>
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

function User2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="user">
      <div className="[grid-area:1_/_1] h-[25.2px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6.797px_0.399px] mask-size-[24px_24px] ml-[-6.8px] mt-[-0.4px] relative w-[37.6px]" data-name="Image" style={{ maskImage: `url('${imgImage}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Vinicius Silva</p>
      </div>
    </div>
  );
}

function Cell18() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[10px] relative w-full">
          <User2 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
        <p className="leading-[normal]">Matriz</p>
      </div>
    </div>
  );
}

function Cell19() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Cell20() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">9</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell21() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">R$ 4.500,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell22() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">Celular</p>
          </div>
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
            <p className="leading-[normal]">(99)99999-9999</p>
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
      <Cell22 />
      <Cell23 />
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

function User3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="user">
      <div className="[grid-area:1_/_1] h-[25.2px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6.797px_0.399px] mask-size-[24px_24px] ml-[-6.8px] mt-[-0.4px] relative w-[37.6px]" data-name="Image" style={{ maskImage: `url('${imgImage}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Vinicius Silva</p>
      </div>
    </div>
  );
}

function Cell24() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center px-[8px] py-[10px] relative w-full">
          <User3 />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
        <p className="leading-[normal]">Matriz</p>
      </div>
    </div>
  );
}

function Cell25() {
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

function Cell26() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">9</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell27() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">R$ 4.500,00</p>
          </div>
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
            <p className="leading-[normal]">CPF</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Cell29() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="cell">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-center px-[8px] py-[10px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8c8c8f] text-[10px] w-full">
            <p className="leading-[normal]">123.456.789-10</p>
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
      <Cell24 />
      <Cell25 />
      <Cell26 />
      <Cell27 />
      <Cell28 />
      <Cell29 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[28px] w-[856px]">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell1 />
    </div>
  );
}

function IconClientes() {
  return (
    <div className="absolute bottom-[95.29%] left-[94.74%] right-[2.92%] top-0" data-name="Icon Clientes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon Clientes">
          <circle cx="10" cy="10" fill="var(--fill-0, #DCDCE0)" id="Ellipse" r="10" />
          <g id="Group 12810">
            <path d={svgPaths.p265b3a80} id="Vector" stroke="var(--stroke-0, #B4B4B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p3e7beb00} id="Vector_2" stroke="var(--stroke-0, #B4B4B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.pbfa1640} id="Vector_3" stroke="var(--stroke-0, #B4B4B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
            <path d={svgPaths.p34d26dc0} id="Vector_4" stroke="var(--stroke-0, #B4B4B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[811px] top-0">
      <IconClientes />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[17px] leading-[normal] left-[835px] not-italic text-[#8c8c8f] text-[12px] top-[2px] w-[21px]">100</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[rgba(95,179,113,0.2)] box-border content-stretch flex gap-[8px] items-center justify-center left-0 p-[8px] rounded-[8px] top-[328px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#525051] text-[12px] text-nowrap whitespace-pre">Constam na lista apenas contratos pagos</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute h-[425px] left-[32px] top-[calc(20%+106px)] w-[856px]">
      <Frame15 />
      <Frame13 />
      <Group12 />
      <Frame11 />
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

function Group14() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Filtro />
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group14 />
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
        <p className="leading-[normal] whitespace-pre">Curitiba</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-0 mt-[17px] not-italic relative text-[#8c8c8f] text-[14px] text-nowrap translate-y-[-100%]">
        <p className="leading-[normal] whitespace-pre">Equipe</p>
      </div>
      <Group6 />
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
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] ml-[8px] mt-[26.36px] not-italic relative text-[#8c8c8f] text-[12px] text-nowrap translate-y-[-100%]">
        <p className="leading-[normal] whitespace-pre">123.456.789-10</p>
      </div>
      <Search />
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-0 mt-[17px] not-italic relative text-[#8c8c8f] text-[14px] text-nowrap translate-y-[-100%]">
        <p className="leading-[normal] whitespace-pre">CPF do consultor</p>
      </div>
      <Group8 />
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

function Group16() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group9 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-end ml-0 mt-[17px] not-italic relative text-[#8c8c8f] text-[14px] text-nowrap translate-y-[-100%]">
        <p className="leading-[normal] whitespace-pre">Banco</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0">
      <Group7 />
      <Group13 />
      <Group16 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex items-end justify-between left-[32px] top-[calc(20%+21px)] w-[856px]">
      <Group15 />
      <Frame12 />
    </div>
  );
}

export default function Relatorios() {
  return (
    <div className="bg-white relative size-full" data-name="Relatorios">
      <StableTableGrid />
      <Frame16 />
      <Frame14 />
    </div>
  );
}