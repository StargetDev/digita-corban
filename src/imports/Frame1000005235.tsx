function Frame() {
  return (
    <div className="basis-0 bg-[rgba(95,179,113,0.1)] grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center leading-[normal] not-italic p-[8px] relative text-[#525051] text-[12px] text-nowrap w-full whitespace-pre">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0">Total recebido</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">R$ 45.000,00</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 bg-[#dde3f6] grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-center justify-center leading-[normal] not-italic p-[8px] relative text-[#525051] text-[12px] text-nowrap w-full whitespace-pre">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0">Total a receber</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">R$ 4.500,00</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
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

export default function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}