import svgPaths from "./svg-vj79asqu0x";

function Icon() {
  return (
    <div className="relative shrink-0 size-[23.991px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[23.991px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[41.974px] relative shrink-0 w-[416.349px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.989px] h-[41.974px] items-center relative w-[416.349px]">
        <Icon />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[41.705px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-start relative w-[41.705px]">
        <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap whitespace-pre">Fechar</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p139f1200} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.pc092300} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-gray-100 relative rounded-[3.0504e+07px] shrink-0 size-[31.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.989px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[31.989px] relative shrink-0 w-[81.69px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-[31.989px] items-center relative w-[81.69px]">
        <Text />
        <Container1 />
      </div>
    </div>
  );
}

export default function Container2() {
  return (
    <div className="bg-white relative rounded-tl-[16px] rounded-tr-[16px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.909px] border-black border-solid inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-[0.909px] pt-0 px-[20px] relative size-full">
          <Container />
          <Button />
        </div>
      </div>
    </div>
  );
}