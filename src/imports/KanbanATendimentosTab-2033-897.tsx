import svgPaths from "./svg-bxbfzot3yy";

function Heading() {
  return (
    <div className="h-[32.997px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33px] left-0 not-italic text-[#2d2d2d] text-[22px] text-nowrap top-[-0.27px] whitespace-pre">Atendimentos</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.489px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#8c8c8f] text-[13px] top-[0.82px] w-[152px]">12 atendimentos no total</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[54.474px] relative shrink-0 w-[151.804px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.989px] h-[54.474px] items-start relative w-[151.804px]">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2033_998)" id="Icon">
          <path d={svgPaths.p2d3ab100} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
        <defs>
          <clipPath id="clip0_2033_998">
            <rect fill="white" height="15.9943" width="15.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[19.489px] relative shrink-0 w-[37.699px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.489px] relative w-[37.699px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[19.5px] not-italic text-[13px] text-center text-gray-700 text-nowrap top-[0.82px] translate-x-[-50%] whitespace-pre">Filtros</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[7.997px] h-[37.301px] items-center left-[231.99px] pl-[14.901px] pr-[0.909px] py-[0.909px] rounded-[8px] top-0 w-[91.491px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon />
      <Text />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[37.301px] left-0 rounded-[8px] top-0 w-[220px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[37.301px] items-center overflow-clip pl-[36px] pr-[12px] py-[8px] relative rounded-[inherit] w-[220px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-gray-400 text-nowrap whitespace-pre">Buscar...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[11.99px] size-[15.994px] top-[10.65px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2c894080} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p2139fb00} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[37.301px] left-0 top-0 w-[220px]" data-name="Container">
      <TextInput />
      <Icon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[37.301px] relative shrink-0 w-[323.48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[37.301px] relative w-[323.48px]">
        <Button />
        <Container1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[70.469px] relative shrink-0 w-[1120.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[70.469px] items-center justify-between relative w-[1120.75px]">
        <Container />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#c5d6b5] relative rounded-[3.0504e+07px] shadow-[0px_0px_12px_0px_rgba(197,214,181,0.25)] shrink-0 size-[10px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10px]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[37.188px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.5px] relative w-[37.188px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[15px] text-gray-800 text-nowrap top-[-1.18px] whitespace-pre">Início</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[57.187px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] h-[22.5px] items-center relative w-[57.187px]">
        <Container4 />
        <Heading1 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[17.997px] relative shrink-0 w-[7.713px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.997px] relative w-[7.713px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-[-0.09px] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#c5d6b5] h-[23.991px] relative rounded-[6px] shrink-0 w-[27.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.991px] items-center justify-center relative w-[27.997px]">
        <Text1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-[360px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.991px] items-center justify-between px-[3.991px] py-0 relative w-[360px]">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[#c5d6b5] h-[3.991px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[338.551px]" data-name="Container" />;
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2b5a3a0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p20d3b200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative rounded-[3.0504e+07px] shrink-0 size-[31.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.989px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[17.997px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[13px] text-gray-800 text-nowrap top-[-0.09px] whitespace-pre">Maria Silva Santos</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_1025)" id="Icon">
          <path d="M3.66476 0.916198V2.74953" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M7.32956 0.916198V2.74953" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p1e6b6f20} id="Vector_3" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M1.37429 4.58096H9.62003" id="Vector_4" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_1025">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[58.381px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[58.381px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 text-nowrap top-[-0.09px] whitespace-pre">28/11/2025</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[73.366px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[16.491px] items-center relative w-[73.366px]">
        <Icon3 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_1003)" id="Icon">
          <path d={svgPaths.p1d6e0380} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p3692fdc0} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_1003">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[30.653px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[30.653px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 text-nowrap top-[-0.09px] whitespace-pre">09:30</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[45.639px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[16.491px] items-center relative w-[45.639px]">
        <Icon4 />
        <Text3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[16.491px] items-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 grow h-[38.48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.991px] h-[38.48px] items-start relative w-full">
        <Paragraph1 />
        <Container12 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[7.997px] h-[38.48px] items-start left-[11.99px] top-[15.98px] w-[314.574px]" data-name="Container">
      <Container9 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#c5d6b5] relative rounded-[3.0504e+07px] shrink-0 size-[2.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[2.997px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.989px] h-[12.969px] items-start left-[3.99px] opacity-0 top-[26.74px] w-[2.997px]" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container15 key={i} />
      ))}
    </div>
  );
}

function AtendimentoCard() {
  return (
    <div className="absolute bg-white border-[0.909px] border-gray-200 border-solid h-[68.267px] left-[9.82px] rounded-[10px] top-[17.81px] w-[340.369px]" data-name="AtendimentoCard">
      <Container8 />
      <Container14 />
      <Container16 />
    </div>
  );
}

function Container17() {
  return <div className="absolute bg-[#c5d6b5] h-[3.991px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[338.551px]" data-name="Container" />;
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2b5a3a0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p20d3b200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative rounded-[3.0504e+07px] shrink-0 size-[31.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.989px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[17.997px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[13px] text-gray-800 text-nowrap top-[-0.09px] whitespace-pre">João Pedro Costa</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_1015)" id="Icon">
          <path d="M3.66476 0.916183V2.74952" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M7.32956 0.916183V2.74952" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p3876c800} id="Vector_3" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M1.37429 4.58098H9.62003" id="Vector_4" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_1015">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[58.381px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[58.381px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 text-nowrap top-[-0.09px] whitespace-pre">28/11/2025</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[73.366px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[16.491px] items-center relative w-[73.366px]">
        <Icon6 />
        <Text4 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_1007)" id="Icon">
          <path d={svgPaths.p1d6e0380} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p2229da00} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_1007">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[28.778px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[28.778px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 text-nowrap top-[-0.09px] whitespace-pre">10:00</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[43.764px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[16.491px] items-center relative w-[43.764px]">
        <Icon7 />
        <Text5 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[16.491px] items-center relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 grow h-[38.48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.991px] h-[38.48px] items-start relative w-full">
        <Paragraph2 />
        <Container21 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex gap-[7.997px] h-[38.48px] items-start left-[11.99px] top-[15.98px] w-[314.574px]" data-name="Container">
      <Container18 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#c5d6b5] relative rounded-[3.0504e+07px] shrink-0 size-[2.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[2.997px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.989px] h-[12.969px] items-start left-[3.99px] opacity-0 top-[26.74px] w-[2.997px]" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container24 key={i} />
      ))}
    </div>
  );
}

function AtendimentoCard1() {
  return (
    <div className="absolute bg-white border-[0.909px] border-gray-200 border-solid h-[68.267px] left-[9.82px] rounded-[10px] top-[102.07px] w-[340.369px]" data-name="AtendimentoCard">
      <Container17 />
      <Container23 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[#c5d6b5] h-[3.991px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[338.551px]" data-name="Container" />;
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2b5a3a0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p20d3b200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative rounded-[3.0504e+07px] shrink-0 size-[31.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.989px]">
        <Icon8 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[17.997px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[13px] text-gray-800 text-nowrap top-[-0.09px] whitespace-pre">Ana Carolina Oliveira</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_1015)" id="Icon">
          <path d="M3.66476 0.916183V2.74952" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M7.32956 0.916183V2.74952" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p3876c800} id="Vector_3" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M1.37429 4.58098H9.62003" id="Vector_4" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_1015">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[58.381px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[58.381px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 text-nowrap top-[-0.09px] whitespace-pre">28/11/2025</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[73.366px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[16.491px] items-center relative w-[73.366px]">
        <Icon9 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_1007)" id="Icon">
          <path d={svgPaths.p1d6e0380} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p2229da00} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_1007">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[25.057px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[25.057px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 text-nowrap top-[-0.09px] whitespace-pre">11:15</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[40.043px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[16.491px] items-center relative w-[40.043px]">
        <Icon10 />
        <Text7 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[16.491px] items-center relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 grow h-[38.48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.991px] h-[38.48px] items-start relative w-full">
        <Paragraph3 />
        <Container30 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[7.997px] h-[38.48px] items-start left-[11.99px] top-[15.98px] w-[314.574px]" data-name="Container">
      <Container27 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#c5d6b5] relative rounded-[3.0504e+07px] shrink-0 size-[2.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[2.997px]" />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.989px] h-[12.969px] items-start left-[3.99px] opacity-0 top-[26.74px] w-[2.997px]" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container33 key={i} />
      ))}
    </div>
  );
}

function AtendimentoCard2() {
  return (
    <div className="absolute bg-white border-[0.909px] border-gray-200 border-solid h-[68.267px] left-[9.82px] rounded-[10px] top-[186.34px] w-[340.369px]" data-name="AtendimentoCard">
      <Container26 />
      <Container32 />
      <Container34 />
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-[#c5d6b5] h-[3.991px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[338.551px]" data-name="Container" />;
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2b5a3a0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p20d3b200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative rounded-[3.0504e+07px] shrink-0 size-[31.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.989px]">
        <Icon11 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[17.997px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[13px] text-gray-800 text-nowrap top-[-0.09px] whitespace-pre">Pedro Henrique Almeida</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_1015)" id="Icon">
          <path d="M3.66476 0.916183V2.74952" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M7.32956 0.916183V2.74952" id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p3876c800} id="Vector_3" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M1.37429 4.58098H9.62003" id="Vector_4" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_1015">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[58.381px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[58.381px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 text-nowrap top-[-0.09px] whitespace-pre">28/11/2025</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[73.366px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[16.491px] items-center relative w-[73.366px]">
        <Icon12 />
        <Text8 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_1007)" id="Icon">
          <path d={svgPaths.p1d6e0380} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p2229da00} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_1007">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[28.736px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[28.736px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 text-nowrap top-[-0.09px] whitespace-pre">14:20</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[43.722px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[16.491px] items-center relative w-[43.722px]">
        <Icon13 />
        <Text9 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[16.491px] items-center relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="basis-0 grow h-[38.48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.991px] h-[38.48px] items-start relative w-full">
        <Paragraph4 />
        <Container39 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[7.997px] h-[38.48px] items-start left-[11.99px] top-[15.98px] w-[314.574px]" data-name="Container">
      <Container36 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#c5d6b5] relative rounded-[3.0504e+07px] shrink-0 size-[2.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[2.997px]" />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.989px] h-[12.969px] items-start left-[3.99px] opacity-0 top-[26.74px] w-[2.997px]" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container42 key={i} />
      ))}
    </div>
  );
}

function AtendimentoCard3() {
  return (
    <div className="absolute bg-white border-[0.909px] border-gray-200 border-solid h-[68.267px] left-[9.82px] rounded-[10px] top-[270.6px] w-[340.369px]" data-name="AtendimentoCard">
      <Container35 />
      <Container41 />
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-gray-50 h-[500px] relative rounded-[12px] shrink-0 w-[360px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.818px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[500px] relative w-[360px]">
        <AtendimentoCard />
        <AtendimentoCard1 />
        <AtendimentoCard2 />
        <AtendimentoCard3 />
      </div>
    </div>
  );
}

function KanbanColumn() {
  return (
    <div className="basis-0 grow h-[1291.86px] min-h-px min-w-px relative shrink-0" data-name="KanbanColumn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[11.989px] h-[1291.86px] items-start relative w-full">
        <Container7 />
        <Container44 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#65a603] relative rounded-[3.0504e+07px] shadow-[0px_0px_12px_0px_rgba(101,166,3,0.25)] shrink-0 size-[10px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10px]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[115.312px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.5px] relative w-[115.312px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[15px] text-gray-800 text-nowrap top-[-1.18px] whitespace-pre">Em atendimento</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[135.313px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] h-[22.5px] items-center relative w-[135.313px]">
        <Container45 />
        <Heading2 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[17.997px] relative shrink-0 w-[7.642px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.997px] relative w-[7.642px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-[-0.09px] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#65a603] h-[23.991px] relative rounded-[6px] shrink-0 w-[27.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.991px] items-center justify-center pl-0 pr-[0.014px] py-0 relative w-[27.997px]">
        <Text10 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-[360px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.991px] items-center justify-between pl-[3.992px] pr-[3.991px] py-0 relative w-[360px]">
        <Container46 />
        <Container47 />
      </div>
    </div>
  );
}

function Container49() {
  return <div className="absolute bg-[#65a603] h-[3.991px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[338.551px]" data-name="Container" />;
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1c9bba80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p243c73a0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative rounded-[3.0504e+07px] shrink-0 size-[31.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.989px]">
        <Icon14 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[17.997px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[13px] text-gray-800 text-nowrap top-[-0.09px] whitespace-pre">Carlos Eduardo Ferreira</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 top-[-0.09px] w-[108px]">CPF 123.456.789-00</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="basis-0 grow h-[36.477px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.989px] h-[36.477px] items-start relative w-full">
        <Paragraph5 />
        <Text11 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-full items-start relative w-[314.574px]">
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[85.866px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[85.866px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[43px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 98888-7777</p>
      </div>
    </div>
  );
}

function WhatsAppButton() {
  return (
    <div className="h-[26.293px] relative rounded-[6px] shrink-0 w-[125.668px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center pl-[10.909px] pr-[0.909px] py-[0.909px] relative w-[125.668px]">
        <WhatsAppIcon />
        <Text12 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15px] relative shrink-0 w-[57.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[57.031px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[10px] text-blue-800 text-nowrap top-[-0.09px] whitespace-pre">Negociando</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-blue-100 h-[24.801px] relative rounded-[6px] shrink-0 w-[74.844px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-blue-300 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.801px] items-center pl-[8.906px] pr-[0.909px] py-[0.909px] relative w-[74.844px]">
        <Text13 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[26.293px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-[26.293px] items-center relative w-[314.574px]">
        <WhatsAppButton />
        <Container53 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#65a603] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[15px] relative shrink-0 w-[66.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[66.25px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Consultor:</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">Roberto Alves</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex gap-[5.994px] h-[15px] items-center left-[8.91px] top-[8.91px] w-[296.761px]" data-name="Container">
      <Container55 />
      <Text14 />
      <Paragraph6 />
    </div>
  );
}

function WhatsAppIcon1() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[85.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[85.469px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[43.5px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 98765-4321</p>
      </div>
    </div>
  );
}

function WhatsAppButton1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center left-[8.91px] pl-[10.909px] pr-[0.909px] py-[0.909px] rounded-[6px] top-[29.9px] w-[125.27px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <WhatsAppIcon1 />
      <Text15 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[65.099px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(101,166,3,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[65.099px] relative w-[314.574px]">
        <Container56 />
        <WhatsAppButton1 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#3b7302] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[15px] relative shrink-0 w-[53.04px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[53.04px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Analista:</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start overflow-clip relative rounded-[inherit] w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">Juliana Mendes</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[15px] items-center relative w-full">
        <Container58 />
        <Text16 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_992)" id="Icon">
          <path d="M3.66479 0.916183V2.74952" id="Vector" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M7.32952 0.916183V2.74952" id="Vector_2" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p3876c800} id="Vector_3" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M1.37429 4.58098H9.62003" id="Vector_4" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_992">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[57.884px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[57.884px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#416b02] text-[11px] text-nowrap top-[-0.09px] whitespace-pre">27/11/2025</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[72.869px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.992px] h-[16.491px] items-center relative w-[72.869px]">
        <Icon15 />
        <Text17 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[16.491px] items-center justify-between relative w-full">
          <Container59 />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[38.295px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.295px] items-start pb-[0.909px] pt-[8.906px] px-[8.906px] relative w-[314.574px]">
        <Container61 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[120.298px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.997px] h-[120.298px] items-start pb-0 pt-[8.906px] px-0 relative w-[314.574px]">
        <Container57 />
        <Container62 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[227.045px] items-start left-0 pl-[11.989px] pr-0 py-[11.989px] top-[3.99px] w-[338.551px]" data-name="Container">
      <Container52 />
      <Container54 />
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#c5d6b5] relative rounded-[3.0504e+07px] shrink-0 size-[2.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[2.997px]" />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.989px] h-[12.969px] items-start left-[3.99px] opacity-0 top-[109.03px] w-[2.997px]" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container65 key={i} />
      ))}
    </div>
  );
}

function AtendimentoCard4() {
  return (
    <div className="absolute bg-white border-[0.909px] border-gray-200 border-solid h-[232.855px] left-[9.82px] rounded-[10px] top-[17.81px] w-[340.369px]" data-name="AtendimentoCard">
      <Container49 />
      <Container64 />
      <Container66 />
    </div>
  );
}

function Container67() {
  return <div className="absolute bg-[#65a603] h-[3.991px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[338.551px]" data-name="Container" />;
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1c9bba80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p243c73a0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative rounded-[3.0504e+07px] shrink-0 size-[31.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.989px]">
        <Icon16 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[17.997px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[13px] text-gray-800 text-nowrap top-[-0.09px] whitespace-pre">Patrícia Souza Lima</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 top-[-0.09px] w-[107px]">CPF 987.654.321-00</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="basis-0 grow h-[36.477px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.989px] h-[36.477px] items-start relative w-full">
        <Paragraph8 />
        <Text18 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-full items-start relative w-[314.574px]">
        <Container68 />
        <Container69 />
      </div>
    </div>
  );
}

function WhatsAppIcon2() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[85.895px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[85.895px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[43px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 97777-8888</p>
      </div>
    </div>
  );
}

function WhatsAppButton2() {
  return (
    <div className="h-[26.293px] relative rounded-[6px] shrink-0 w-[125.696px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center pl-[10.909px] pr-[0.909px] py-[0.909px] relative w-[125.696px]">
        <WhatsAppIcon2 />
        <Text19 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[10px] text-nowrap text-purple-800 top-[-0.09px] whitespace-pre">Proposta digitada</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-purple-200 h-[24.801px] relative rounded-[6px] shrink-0 w-[101.222px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-purple-400 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.801px] items-center px-[8.906px] py-[0.909px] relative w-[101.222px]">
        <Text20 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[26.293px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-[26.293px] items-center relative w-[314.574px]">
        <WhatsAppButton2 />
        <Container71 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[#65a603] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[15px] relative shrink-0 w-[66.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[66.25px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Consultor:</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">Marcos Silva</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex gap-[5.994px] h-[15px] items-center left-[8.91px] top-[8.91px] w-[296.761px]" data-name="Container">
      <Container73 />
      <Text21 />
      <Paragraph9 />
    </div>
  );
}

function WhatsAppIcon3() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[85.497px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[85.497px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[43.5px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 91234-5678</p>
      </div>
    </div>
  );
}

function WhatsAppButton3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center left-[8.91px] pl-[10.909px] pr-[0.909px] py-[0.909px] rounded-[6px] top-[29.9px] w-[125.298px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <WhatsAppIcon3 />
      <Text22 />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[65.099px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(101,166,3,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[65.099px] relative w-[314.574px]">
        <Container74 />
        <WhatsAppButton3 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#3b7302] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[15px] relative shrink-0 w-[53.04px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[53.04px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Analista:</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start overflow-clip relative rounded-[inherit] w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">Fernando Costa</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[15px] items-center relative w-full">
        <Container76 />
        <Text23 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_986)" id="Icon">
          <path d="M3.66479 0.916214V2.74955" id="Vector" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M7.32952 0.916214V2.74955" id="Vector_2" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p4c55140} id="Vector_3" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M1.37429 4.58095H9.62003" id="Vector_4" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_986">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[57.884px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[57.884px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#416b02] text-[11px] text-nowrap top-[-0.09px] whitespace-pre">27/11/2025</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[72.869px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.992px] h-[16.491px] items-center relative w-[72.869px]">
        <Icon17 />
        <Text24 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[16.491px] items-center justify-between relative w-full">
          <Container77 />
          <Container78 />
        </div>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[38.295px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.295px] items-start pb-[0.909px] pt-[8.906px] px-[8.906px] relative w-[314.574px]">
        <Container79 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[120.298px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.997px] h-[120.298px] items-start pb-0 pt-[8.906px] px-0 relative w-[314.574px]">
        <Container75 />
        <Container80 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[227.045px] items-start left-0 pl-[11.989px] pr-0 py-[11.989px] top-[3.99px] w-[338.551px]" data-name="Container">
      <Container70 />
      <Container72 />
      <Container81 />
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[#c5d6b5] relative rounded-[3.0504e+07px] shrink-0 size-[2.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[2.997px]" />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.989px] h-[12.969px] items-start left-[3.99px] opacity-0 top-[109.03px] w-[2.997px]" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container83 key={i} />
      ))}
    </div>
  );
}

function AtendimentoCard5() {
  return (
    <div className="absolute bg-white border-[0.909px] border-gray-200 border-solid h-[232.855px] left-[9.82px] rounded-[10px] top-[266.66px] w-[340.369px]" data-name="AtendimentoCard">
      <Container67 />
      <Container82 />
      <Container84 />
    </div>
  );
}

function Container85() {
  return <div className="absolute bg-[#65a603] h-[3.991px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[338.551px]" data-name="Container" />;
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1c9bba80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p243c73a0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Container86() {
  return (
    <div className="relative rounded-[3.0504e+07px] shrink-0 size-[31.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.989px]">
        <Icon18 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[17.997px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[13px] text-gray-800 text-nowrap top-[-0.09px] whitespace-pre">Fernanda Lima Rodrigues</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 top-[-0.09px] w-[107px]">CPF 456.123.789-00</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="basis-0 grow h-[36.477px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.989px] h-[36.477px] items-start relative w-full">
        <Paragraph11 />
        <Text25 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-full items-start relative w-[314.574px]">
        <Container86 />
        <Container87 />
      </div>
    </div>
  );
}

function WhatsAppIcon4() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[87.401px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[87.401px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[44.5px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 96666-5555</p>
      </div>
    </div>
  );
}

function WhatsAppButton4() {
  return (
    <div className="h-[26.293px] relative rounded-[6px] shrink-0 w-[127.202px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center pl-[10.909px] pr-[0.909px] py-[0.909px] relative w-[127.202px]">
        <WhatsAppIcon4 />
        <Text26 />
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[15px] relative shrink-0 w-[57.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[57.031px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[10px] text-blue-800 text-nowrap top-[-0.09px] whitespace-pre">Negociando</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="bg-blue-100 h-[24.801px] relative rounded-[6px] shrink-0 w-[74.844px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-blue-300 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.801px] items-center pl-[8.906px] pr-[0.909px] py-[0.909px] relative w-[74.844px]">
        <Text27 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[26.293px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-[26.293px] items-center relative w-[314.574px]">
        <WhatsAppButton4 />
        <Container89 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="bg-[#65a603] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[15px] relative shrink-0 w-[66.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[66.25px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Consultor:</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">Carla Mendes</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex gap-[5.994px] h-[15px] items-center left-[8.91px] top-[8.91px] w-[296.761px]" data-name="Container">
      <Container91 />
      <Text28 />
      <Paragraph12 />
    </div>
  );
}

function WhatsAppIcon5() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[87.23px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[87.23px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[44.5px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 99876-5432</p>
      </div>
    </div>
  );
}

function WhatsAppButton5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center left-[8.91px] pl-[10.909px] pr-[0.909px] py-[0.909px] rounded-[6px] top-[29.9px] w-[127.031px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <WhatsAppIcon5 />
      <Text29 />
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[65.099px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(101,166,3,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[65.099px] relative w-[314.574px]">
        <Container92 />
        <WhatsAppButton5 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="bg-[#3b7302] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[15px] relative shrink-0 w-[53.04px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[53.04px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Analista:</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start overflow-clip relative rounded-[inherit] w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">Paula Santos</p>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[15px] items-center relative w-full">
        <Container94 />
        <Text30 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_986)" id="Icon">
          <path d="M3.66479 0.916214V2.74955" id="Vector" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M7.32952 0.916214V2.74955" id="Vector_2" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p4c55140} id="Vector_3" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M1.37429 4.58095H9.62003" id="Vector_4" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_986">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[57.884px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[57.884px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#416b02] text-[11px] text-nowrap top-[-0.09px] whitespace-pre">27/11/2025</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[72.869px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.992px] h-[16.491px] items-center relative w-[72.869px]">
        <Icon19 />
        <Text31 />
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[16.491px] items-center justify-between relative w-full">
          <Container95 />
          <Container96 />
        </div>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[38.295px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.295px] items-start pb-[0.909px] pt-[8.906px] px-[8.906px] relative w-[314.574px]">
        <Container97 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[120.298px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.997px] h-[120.298px] items-start pb-0 pt-[8.906px] px-0 relative w-[314.574px]">
        <Container93 />
        <Container98 />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[227.045px] items-start left-0 pl-[11.989px] pr-0 py-[11.989px] top-[3.99px] w-[338.551px]" data-name="Container">
      <Container88 />
      <Container90 />
      <Container99 />
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-[#c5d6b5] relative rounded-[3.0504e+07px] shrink-0 size-[2.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[2.997px]" />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.989px] h-[12.969px] items-start left-[3.99px] opacity-0 top-[109.03px] w-[2.997px]" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container101 key={i} />
      ))}
    </div>
  );
}

function AtendimentoCard6() {
  return (
    <div className="absolute bg-white border-[0.909px] border-gray-200 border-solid h-[232.855px] left-[9.82px] rounded-[10px] top-[515.51px] w-[340.369px]" data-name="AtendimentoCard">
      <Container85 />
      <Container100 />
      <Container102 />
    </div>
  );
}

function Container103() {
  return (
    <div className="bg-gray-50 h-[758.182px] relative rounded-[12px] shrink-0 w-[360px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.818px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[758.182px] relative w-[360px]">
        <AtendimentoCard4 />
        <AtendimentoCard5 />
        <AtendimentoCard6 />
      </div>
    </div>
  );
}

function KanbanColumn1() {
  return (
    <div className="basis-0 grow h-[1291.86px] min-h-px min-w-px relative shrink-0" data-name="KanbanColumn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[11.989px] h-[1291.86px] items-start relative w-full">
        <Container48 />
        <Container103 />
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="bg-[#3b7302] relative rounded-[3.0504e+07px] shadow-[0px_0px_12px_0px_rgba(59,115,2,0.25)] shrink-0 size-[10px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10px]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="basis-0 grow h-[22.5px] min-h-px min-w-px relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22.5px] relative w-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[22.5px] left-0 not-italic text-[15px] text-gray-800 text-nowrap top-[-1.18px] whitespace-pre">Finalizado</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[91.548px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] h-[22.5px] items-center relative w-[91.548px]">
        <Container104 />
        <Heading3 />
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[17.997px] relative shrink-0 w-[7.301px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.997px] relative w-[7.301px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-[-0.09px] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="bg-[#3b7302] h-[23.991px] relative rounded-[6px] shrink-0 w-[27.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.991px] items-center justify-center pl-0 pr-[0.014px] py-0 relative w-[27.997px]">
        <Text32 />
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-[360px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[23.991px] items-center justify-between px-[3.991px] py-0 relative w-[360px]">
        <Container105 />
        <Container106 />
      </div>
    </div>
  );
}

function Container108() {
  return <div className="absolute bg-[#3b7302] h-[3.991px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[338.551px]" data-name="Container" />;
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36ea0600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p3bed1100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Container109() {
  return (
    <div className="relative rounded-[3.0504e+07px] shrink-0 size-[31.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.989px]">
        <Icon20 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[17.997px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[13px] text-gray-800 text-nowrap top-[-0.09px] whitespace-pre">Ricardo Martins Pereira</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 top-[-0.09px] w-[107px]">CPF 456.789.123-00</p>
    </div>
  );
}

function Container110() {
  return (
    <div className="basis-0 grow h-[36.477px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.989px] h-[36.477px] items-start relative w-full">
        <Paragraph14 />
        <Text33 />
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-full items-start relative w-[314.574px]">
        <Container109 />
        <Container110 />
      </div>
    </div>
  );
}

function WhatsAppIcon6() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[88.21px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[88.21px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[44px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 95555-4444</p>
      </div>
    </div>
  );
}

function WhatsAppButton6() {
  return (
    <div className="h-[26.293px] relative rounded-[6px] shrink-0 w-[128.011px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center pl-[10.909px] pr-[0.909px] py-[0.909px] relative w-[128.011px]">
        <WhatsAppIcon6 />
        <Text34 />
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[10px] text-emerald-800 text-nowrap top-[-0.09px] whitespace-pre">Proposta Paga</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="bg-[#d1f4e0] h-[24.801px] relative rounded-[6px] shrink-0 w-[86.776px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-green-300 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.801px] items-center px-[8.906px] py-[0.909px] relative w-[86.776px]">
        <Text35 />
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[26.293px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-[26.293px] items-center relative w-[314.574px]">
        <WhatsAppButton6 />
        <Container112 />
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="bg-[#65a603] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[15px] relative shrink-0 w-[66.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[66.25px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Consultor:</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">Fernanda Lima</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute content-stretch flex gap-[5.994px] h-[15px] items-center left-[8.91px] top-[8.91px] w-[296.761px]" data-name="Container">
      <Container114 />
      <Text36 />
      <Paragraph15 />
    </div>
  );
}

function WhatsAppIcon7() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[86.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[86.563px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[43.5px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 99988-7766</p>
      </div>
    </div>
  );
}

function WhatsAppButton7() {
  return (
    <div className="absolute box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center left-[8.91px] pl-[10.909px] pr-[0.909px] py-[0.909px] rounded-[6px] top-[29.9px] w-[126.364px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <WhatsAppIcon7 />
      <Text37 />
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[65.099px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(101,166,3,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[65.099px] relative w-[314.574px]">
        <Container115 />
        <WhatsAppButton7 />
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="bg-[#3b7302] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[15px] relative shrink-0 w-[53.04px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[53.04px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Analista:</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start overflow-clip relative rounded-[inherit] w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">Paula Santos</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[15px] items-center relative w-full">
        <Container117 />
        <Text38 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_960)" id="Icon">
          <path d="M3.66473 0.916183V2.74952" id="Vector" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M7.32959 0.916183V2.74952" id="Vector_2" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p3876c800} id="Vector_3" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M1.37429 4.58098H9.62003" id="Vector_4" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_960">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[58.466px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[58.466px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#416b02] text-[11px] text-nowrap top-[-0.09px] whitespace-pre">26/11/2025</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[73.452px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.992px] h-[16.491px] items-center relative w-[73.452px]">
        <Icon21 />
        <Text39 />
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex h-[16.491px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container118 />
      <Container119 />
    </div>
  );
}

function Container121() {
  return (
    <div className="h-[38.295px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.295px] items-start pb-[0.909px] pt-[8.906px] px-[8.906px] relative w-[314.574px]">
        <Container120 />
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[120.298px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.997px] h-[120.298px] items-start pb-0 pt-[8.906px] px-0 relative w-[314.574px]">
        <Container116 />
        <Container121 />
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[227.045px] items-start left-0 pl-[11.989px] pr-0 py-[11.989px] top-[3.99px] w-[338.551px]" data-name="Container">
      <Container111 />
      <Container113 />
      <Container122 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[13.991px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1a9bc400} id="Vector" stroke="var(--stroke-0, #065F46)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.74893" />
        </g>
      </svg>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute bg-[#d1f4e0] box-border content-stretch flex items-center justify-center left-[302.57px] p-[0.909px] rounded-[3.0504e+07px] size-[23.991px] top-[11.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-green-300 border-solid inset-0 pointer-events-none rounded-[3.0504e+07px]" />
      <Icon22 />
    </div>
  );
}

function Container125() {
  return (
    <div className="bg-[#c5d6b5] relative rounded-[3.0504e+07px] shrink-0 size-[2.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[2.997px]" />
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.989px] h-[12.969px] items-start left-[3.99px] opacity-0 top-[109.03px] w-[2.997px]" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container125 key={i} />
      ))}
    </div>
  );
}

function AtendimentoCard7() {
  return (
    <div className="absolute bg-white border-[0.909px] border-gray-200 border-solid h-[232.855px] left-[9.82px] rounded-[10px] top-[17.81px] w-[340.369px]" data-name="AtendimentoCard">
      <Container108 />
      <Container123 />
      <Container124 />
      <Container126 />
    </div>
  );
}

function Container127() {
  return <div className="absolute bg-[#3b7302] h-[3.991px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[338.551px]" data-name="Container" />;
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36ea0600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p3bed1100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Container128() {
  return (
    <div className="relative rounded-[3.0504e+07px] shrink-0 size-[31.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.989px]">
        <Icon23 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[17.997px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[13px] text-gray-800 text-nowrap top-[-0.09px] whitespace-pre">Luciana Aparecida Rocha</p>
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 top-[-0.09px] w-[108px]">CPF 321.654.987-00</p>
    </div>
  );
}

function Container129() {
  return (
    <div className="basis-0 grow h-[36.477px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.989px] h-[36.477px] items-start relative w-full">
        <Paragraph17 />
        <Text40 />
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-full items-start relative w-[314.574px]">
        <Container128 />
        <Container129 />
      </div>
    </div>
  );
}

function WhatsAppIcon8() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[89.332px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[89.332px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[45.5px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 94444-3333</p>
      </div>
    </div>
  );
}

function WhatsAppButton8() {
  return (
    <div className="h-[26.293px] relative rounded-[6px] shrink-0 w-[129.134px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center pl-[10.909px] pr-[0.909px] py-[0.909px] relative w-[129.134px]">
        <WhatsAppIcon8 />
        <Text41 />
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[10px] text-nowrap text-orange-800 top-[-0.09px] whitespace-pre">Proposta Recusada</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="bg-orange-200 h-[24.801px] relative rounded-[6px] shrink-0 w-[109.318px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-orange-300 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.801px] items-center px-[8.906px] py-[0.909px] relative w-[109.318px]">
        <Text42 />
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[26.293px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-[26.293px] items-center relative w-[314.574px]">
        <WhatsAppButton8 />
        <Container131 />
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="bg-[#65a603] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[15px] relative shrink-0 w-[66.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[66.25px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Consultor:</p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">André Souza</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute content-stretch flex gap-[5.994px] h-[15px] items-center left-[8.91px] top-[8.91px] w-[296.761px]" data-name="Container">
      <Container133 />
      <Text43 />
      <Paragraph18 />
    </div>
  );
}

function WhatsAppIcon9() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[86.818px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[86.818px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[43.5px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 97766-5544</p>
      </div>
    </div>
  );
}

function WhatsAppButton9() {
  return (
    <div className="absolute box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center left-[8.91px] pl-[10.909px] pr-[0.909px] py-[0.909px] rounded-[6px] top-[29.9px] w-[126.619px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <WhatsAppIcon9 />
      <Text44 />
    </div>
  );
}

function Container135() {
  return (
    <div className="h-[65.099px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(101,166,3,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[65.099px] relative w-[314.574px]">
        <Container134 />
        <WhatsAppButton9 />
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="bg-[#3b7302] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[15px] relative shrink-0 w-[53.04px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[53.04px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Analista:</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start overflow-clip relative rounded-[inherit] w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">Ricardo Almeida</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[15px] items-center relative w-full">
        <Container136 />
        <Text45 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_951)" id="Icon">
          <path d="M3.66473 0.916214V2.74955" id="Vector" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M7.32959 0.916214V2.74955" id="Vector_2" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p4c55140} id="Vector_3" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M1.37429 4.58095H9.62003" id="Vector_4" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_951">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[58.466px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[58.466px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#416b02] text-[11px] text-nowrap top-[-0.09px] whitespace-pre">26/11/2025</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[73.452px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.992px] h-[16.491px] items-center relative w-[73.452px]">
        <Icon24 />
        <Text46 />
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex h-[16.491px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container137 />
      <Container138 />
    </div>
  );
}

function Container140() {
  return (
    <div className="h-[38.295px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.295px] items-start pb-[0.909px] pt-[8.906px] px-[8.906px] relative w-[314.574px]">
        <Container139 />
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[120.298px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.997px] h-[120.298px] items-start pb-0 pt-[8.906px] px-0 relative w-[314.574px]">
        <Container135 />
        <Container140 />
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[227.045px] items-start left-0 pl-[11.989px] pr-0 py-[11.989px] top-[3.99px] w-[338.551px]" data-name="Container">
      <Container130 />
      <Container132 />
      <Container141 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[13.991px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1ec5c1a0} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.74893" />
          <path d={svgPaths.p1d9deec0} id="Vector_2" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.74893" />
        </g>
      </svg>
    </div>
  );
}

function Container143() {
  return (
    <div className="absolute bg-red-100 box-border content-stretch flex items-center justify-center left-[302.57px] p-[0.909px] rounded-[3.0504e+07px] size-[23.991px] top-[11.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-red-300 border-solid inset-0 pointer-events-none rounded-[3.0504e+07px]" />
      <Icon25 />
    </div>
  );
}

function Container144() {
  return (
    <div className="bg-[#c5d6b5] relative rounded-[3.0504e+07px] shrink-0 size-[2.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[2.997px]" />
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.989px] h-[12.969px] items-start left-[3.99px] opacity-0 top-[109.03px] w-[2.997px]" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container144 key={i} />
      ))}
    </div>
  );
}

function AtendimentoCard8() {
  return (
    <div className="absolute bg-white border-[0.909px] border-gray-200 border-solid h-[232.855px] left-[9.82px] rounded-[10px] top-[266.66px] w-[340.369px]" data-name="AtendimentoCard">
      <Container127 />
      <Container142 />
      <Container143 />
      <Container145 />
    </div>
  );
}

function Container146() {
  return <div className="absolute bg-[#3b7302] h-[3.991px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[338.551px]" data-name="Container" />;
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36ea0600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p3bed1100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Container147() {
  return (
    <div className="relative rounded-[3.0504e+07px] shrink-0 size-[31.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.989px]">
        <Icon26 />
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[17.997px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[13px] text-gray-800 text-nowrap top-[-0.09px] whitespace-pre">Fernando José Barbosa</p>
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 top-[-0.09px] w-[108px]">CPF 789.123.456-00</p>
    </div>
  );
}

function Container148() {
  return (
    <div className="basis-0 grow h-[36.477px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.989px] h-[36.477px] items-start relative w-full">
        <Paragraph20 />
        <Text47 />
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-full items-start relative w-[314.574px]">
        <Container147 />
        <Container148 />
      </div>
    </div>
  );
}

function WhatsAppIcon10() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[87.457px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[87.457px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[44.5px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 93333-2222</p>
      </div>
    </div>
  );
}

function WhatsAppButton10() {
  return (
    <div className="h-[26.293px] relative rounded-[6px] shrink-0 w-[127.259px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center pl-[10.909px] pr-[0.909px] py-[0.909px] relative w-[127.259px]">
        <WhatsAppIcon10 />
        <Text48 />
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[10px] text-emerald-800 text-nowrap top-[-0.09px] whitespace-pre">Proposta Paga</p>
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="bg-[#d1f4e0] h-[24.801px] relative rounded-[6px] shrink-0 w-[86.776px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-green-300 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.801px] items-center px-[8.906px] py-[0.909px] relative w-[86.776px]">
        <Text49 />
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="h-[26.293px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-[26.293px] items-center relative w-[314.574px]">
        <WhatsAppButton10 />
        <Container150 />
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="bg-[#65a603] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text50() {
  return (
    <div className="h-[15px] relative shrink-0 w-[66.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[66.25px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Consultor:</p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">Carla Mendes</p>
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute content-stretch flex gap-[5.994px] h-[15px] items-center left-[8.91px] top-[8.91px] w-[296.761px]" data-name="Container">
      <Container152 />
      <Text50 />
      <Paragraph21 />
    </div>
  );
}

function WhatsAppIcon11() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text51() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[88.423px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[88.423px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[44px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 96655-4433</p>
      </div>
    </div>
  );
}

function WhatsAppButton11() {
  return (
    <div className="absolute box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center left-[8.91px] pl-[10.909px] pr-[0.909px] py-[0.909px] rounded-[6px] top-[29.9px] w-[128.224px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <WhatsAppIcon11 />
      <Text51 />
    </div>
  );
}

function Container154() {
  return (
    <div className="h-[65.099px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(101,166,3,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[65.099px] relative w-[314.574px]">
        <Container153 />
        <WhatsAppButton11 />
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="bg-[#3b7302] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[15px] relative shrink-0 w-[53.04px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[53.04px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Analista:</p>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start overflow-clip relative rounded-[inherit] w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">Juliana Mendes</p>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[15px] items-center relative w-full">
        <Container155 />
        <Text52 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_951)" id="Icon">
          <path d="M3.66473 0.916214V2.74955" id="Vector" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M7.32959 0.916214V2.74955" id="Vector_2" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p4c55140} id="Vector_3" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M1.37429 4.58095H9.62003" id="Vector_4" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_951">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[58.466px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[58.466px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#416b02] text-[11px] text-nowrap top-[-0.09px] whitespace-pre">26/11/2025</p>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[73.452px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.992px] h-[16.491px] items-center relative w-[73.452px]">
        <Icon27 />
        <Text53 />
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex h-[16.491px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container156 />
      <Container157 />
    </div>
  );
}

function Container159() {
  return (
    <div className="h-[38.295px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.295px] items-start pb-[0.909px] pt-[8.906px] px-[8.906px] relative w-[314.574px]">
        <Container158 />
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="h-[120.298px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.997px] h-[120.298px] items-start pb-0 pt-[8.906px] px-0 relative w-[314.574px]">
        <Container154 />
        <Container159 />
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[227.045px] items-start left-0 pl-[11.989px] pr-0 py-[11.989px] top-[3.99px] w-[338.551px]" data-name="Container">
      <Container149 />
      <Container151 />
      <Container160 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[13.991px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1a9bc400} id="Vector" stroke="var(--stroke-0, #065F46)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.74893" />
        </g>
      </svg>
    </div>
  );
}

function Container162() {
  return (
    <div className="absolute bg-[#d1f4e0] box-border content-stretch flex items-center justify-center left-[302.57px] p-[0.909px] rounded-[3.0504e+07px] size-[23.991px] top-[11.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-green-300 border-solid inset-0 pointer-events-none rounded-[3.0504e+07px]" />
      <Icon28 />
    </div>
  );
}

function Container163() {
  return (
    <div className="bg-[#c5d6b5] relative rounded-[3.0504e+07px] shrink-0 size-[2.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[2.997px]" />
    </div>
  );
}

function Container164() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.989px] h-[12.969px] items-start left-[3.99px] opacity-0 top-[109.03px] w-[2.997px]" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container163 key={i} />
      ))}
    </div>
  );
}

function AtendimentoCard9() {
  return (
    <div className="absolute bg-white border-[0.909px] border-gray-200 border-solid h-[232.855px] left-[9.82px] rounded-[10px] top-[515.51px] w-[340.369px]" data-name="AtendimentoCard">
      <Container146 />
      <Container161 />
      <Container162 />
      <Container164 />
    </div>
  );
}

function Container165() {
  return <div className="absolute bg-[#3b7302] h-[3.991px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[338.551px]" data-name="Container" />;
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36ea0600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p3bed1100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Container166() {
  return (
    <div className="relative rounded-[3.0504e+07px] shrink-0 size-[31.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.989px]">
        <Icon29 />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[17.997px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[13px] text-gray-800 text-nowrap top-[-0.09px] whitespace-pre">Beatriz Santos Oliveira</p>
    </div>
  );
}

function Text54() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 top-[-0.09px] w-[108px]">CPF 159.753.852-00</p>
    </div>
  );
}

function Container167() {
  return (
    <div className="basis-0 grow h-[36.477px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.989px] h-[36.477px] items-start relative w-full">
        <Paragraph23 />
        <Text54 />
      </div>
    </div>
  );
}

function Container168() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-full items-start relative w-[314.574px]">
        <Container166 />
        <Container167 />
      </div>
    </div>
  );
}

function WhatsAppIcon12() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text55() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[80.27px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[80.27px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[40px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 92222-1111</p>
      </div>
    </div>
  );
}

function WhatsAppButton12() {
  return (
    <div className="h-[26.293px] relative rounded-[6px] shrink-0 w-[120.071px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center pl-[10.909px] pr-[0.909px] py-[0.909px] relative w-[120.071px]">
        <WhatsAppIcon12 />
        <Text55 />
      </div>
    </div>
  );
}

function Text56() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[10px] text-nowrap text-red-800 top-[-0.09px] whitespace-pre">Sem interesse</p>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="bg-red-100 h-[24.801px] relative rounded-[6px] shrink-0 w-[84.801px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-red-300 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.801px] items-center px-[8.906px] py-[0.909px] relative w-[84.801px]">
        <Text56 />
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="h-[26.293px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-[26.293px] items-center relative w-[314.574px]">
        <WhatsAppButton12 />
        <Container169 />
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="bg-[#65a603] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text57() {
  return (
    <div className="h-[15px] relative shrink-0 w-[66.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[66.25px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Consultor:</p>
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">Roberto Alves</p>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="absolute content-stretch flex gap-[5.994px] h-[15px] items-center left-[8.91px] top-[8.91px] w-[296.761px]" data-name="Container">
      <Container171 />
      <Text57 />
      <Paragraph24 />
    </div>
  );
}

function WhatsAppIcon13() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text58() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[85.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[85.469px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[43.5px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 98765-4321</p>
      </div>
    </div>
  );
}

function WhatsAppButton13() {
  return (
    <div className="absolute box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center left-[8.91px] pl-[10.909px] pr-[0.909px] py-[0.909px] rounded-[6px] top-[29.9px] w-[125.27px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <WhatsAppIcon13 />
      <Text58 />
    </div>
  );
}

function Container173() {
  return (
    <div className="h-[65.099px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(101,166,3,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[65.099px] relative w-[314.574px]">
        <Container172 />
        <WhatsAppButton13 />
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="bg-[#3b7302] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text59() {
  return (
    <div className="h-[15px] relative shrink-0 w-[53.04px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[53.04px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Analista:</p>
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start overflow-clip relative rounded-[inherit] w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">Fernando Costa</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[15px] items-center relative w-full">
        <Container174 />
        <Text59 />
        <Paragraph25 />
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_941)" id="Icon">
          <path d="M3.66473 0.916152V2.74949" id="Vector" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M7.32959 0.916152V2.74949" id="Vector_2" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p3d5c1600} id="Vector_3" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M1.37429 4.58101H9.62003" id="Vector_4" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_941">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text60() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[58.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[58.281px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#416b02] text-[11px] text-nowrap top-[-0.09px] whitespace-pre">25/11/2025</p>
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[73.267px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[16.491px] items-center relative w-[73.267px]">
        <Icon30 />
        <Text60 />
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex h-[16.491px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container175 />
      <Container176 />
    </div>
  );
}

function Container178() {
  return (
    <div className="h-[38.295px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.295px] items-start pb-[0.909px] pt-[8.906px] px-[8.906px] relative w-[314.574px]">
        <Container177 />
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="h-[120.298px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.997px] h-[120.298px] items-start pb-0 pt-[8.906px] px-0 relative w-[314.574px]">
        <Container173 />
        <Container178 />
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[227.045px] items-start left-0 pl-[11.989px] pr-0 py-[11.989px] top-[3.99px] w-[338.551px]" data-name="Container">
      <Container168 />
      <Container170 />
      <Container179 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[13.991px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1ec5c1a0} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.74893" />
          <path d={svgPaths.p1d9deec0} id="Vector_2" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.74893" />
        </g>
      </svg>
    </div>
  );
}

function Container181() {
  return (
    <div className="absolute bg-red-100 box-border content-stretch flex items-center justify-center left-[302.57px] p-[0.909px] rounded-[3.0504e+07px] size-[23.991px] top-[11.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-red-300 border-solid inset-0 pointer-events-none rounded-[3.0504e+07px]" />
      <Icon31 />
    </div>
  );
}

function Container182() {
  return (
    <div className="bg-[#c5d6b5] relative rounded-[3.0504e+07px] shrink-0 size-[2.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[2.997px]" />
    </div>
  );
}

function Container183() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.989px] h-[12.969px] items-start left-[3.99px] opacity-0 top-[109.03px] w-[2.997px]" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container182 key={i} />
      ))}
    </div>
  );
}

function AtendimentoCard10() {
  return (
    <div className="absolute bg-white border-[0.909px] border-gray-200 border-solid h-[232.855px] left-[9.82px] rounded-[10px] top-[764.36px] w-[340.369px]" data-name="AtendimentoCard">
      <Container165 />
      <Container180 />
      <Container181 />
      <Container183 />
    </div>
  );
}

function Container184() {
  return <div className="absolute bg-[#3b7302] h-[3.991px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[338.551px]" data-name="Container" />;
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36ea0600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
          <path d={svgPaths.p3bed1100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Container185() {
  return (
    <div className="relative rounded-[3.0504e+07px] shrink-0 size-[31.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[31.989px]">
        <Icon32 />
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[17.997px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[13px] text-gray-800 text-nowrap top-[-0.09px] whitespace-pre">Gabriel Costa Mendes</p>
    </div>
  );
}

function Text61() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-full" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[11px] text-gray-500 top-[-0.09px] w-[107px]">CPF 357.159.456-00</p>
    </div>
  );
}

function Container186() {
  return (
    <div className="basis-0 grow h-[36.477px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.989px] h-[36.477px] items-start relative w-full">
        <Paragraph26 />
        <Text61 />
      </div>
    </div>
  );
}

function Container187() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-full items-start relative w-[314.574px]">
        <Container185 />
        <Container186 />
      </div>
    </div>
  );
}

function WhatsAppIcon14() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text62() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[81.151px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[81.151px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[41.5px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 91111-0000</p>
      </div>
    </div>
  );
}

function WhatsAppButton14() {
  return (
    <div className="h-[26.293px] relative rounded-[6px] shrink-0 w-[120.952px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center pl-[10.909px] pr-[0.909px] py-[0.909px] relative w-[120.952px]">
        <WhatsAppIcon14 />
        <Text62 />
      </div>
    </div>
  );
}

function Text63() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[10px] text-nowrap text-orange-800 top-[-0.09px] whitespace-pre">Proposta Recusada</p>
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="bg-orange-200 h-[24.801px] relative rounded-[6px] shrink-0 w-[109.318px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-orange-300 border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24.801px] items-center px-[8.906px] py-[0.909px] relative w-[109.318px]">
        <Text63 />
      </div>
    </div>
  );
}

function Container189() {
  return (
    <div className="h-[26.293px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.997px] h-[26.293px] items-center relative w-[314.574px]">
        <WhatsAppButton14 />
        <Container188 />
      </div>
    </div>
  );
}

function Container190() {
  return (
    <div className="bg-[#65a603] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text64() {
  return (
    <div className="h-[15px] relative shrink-0 w-[66.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[66.25px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Consultor:</p>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start relative w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">Marcos Silva</p>
      </div>
    </div>
  );
}

function Container191() {
  return (
    <div className="absolute content-stretch flex gap-[5.994px] h-[15px] items-center left-[8.91px] top-[8.91px] w-[296.761px]" data-name="Container">
      <Container190 />
      <Text64 />
      <Paragraph27 />
    </div>
  );
}

function WhatsAppIcon15() {
  return (
    <div className="relative shrink-0 size-[11.989px]" data-name="WhatsAppIcon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_2033_917)" id="WhatsAppIcon">
          <path d={svgPaths.p14434780} fill="var(--fill-0, #65A603)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2033_917">
            <rect fill="white" height="11.9886" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text65() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[85.497px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[85.497px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[43.5px] not-italic text-[#416b02] text-[11px] text-center text-nowrap top-[-0.09px] translate-x-[-50%] whitespace-pre">(11) 91234-5678</p>
      </div>
    </div>
  );
}

function WhatsAppButton15() {
  return (
    <div className="absolute box-border content-stretch flex gap-[5.994px] h-[26.293px] items-center left-[8.91px] pl-[10.909px] pr-[0.909px] py-[0.909px] rounded-[6px] top-[29.9px] w-[125.298px]" data-name="WhatsAppButton">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <WhatsAppIcon15 />
      <Text65 />
    </div>
  );
}

function Container192() {
  return (
    <div className="h-[65.099px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(101,166,3,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[65.099px] relative w-[314.574px]">
        <Container191 />
        <WhatsAppButton15 />
      </div>
    </div>
  );
}

function Container193() {
  return (
    <div className="bg-[#3b7302] relative rounded-[3.0504e+07px] shrink-0 size-[5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[5px]" />
    </div>
  );
}

function Text66() {
  return (
    <div className="h-[15px] relative shrink-0 w-[53.04px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[15px] relative w-[53.04px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15px] left-0 not-italic text-[#416b02] text-[10px] text-nowrap top-[-0.09px] tracking-[0.25px] uppercase whitespace-pre">Analista:</p>
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15px] items-start overflow-clip relative rounded-[inherit] w-full">
        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[15px] min-h-px min-w-px not-italic relative shrink-0 text-[#304e01] text-[11px]">Juliana Mendes</p>
      </div>
    </div>
  );
}

function Container194() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[5.994px] h-[15px] items-center relative w-full">
        <Container193 />
        <Text66 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[10.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_2033_941)" id="Icon">
          <path d="M3.66473 0.916152V2.74949" id="Vector" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M7.32959 0.916152V2.74949" id="Vector_2" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d={svgPaths.p3d5c1600} id="Vector_3" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
          <path d="M1.37429 4.58101H9.62003" id="Vector_4" stroke="var(--stroke-0, #416B02)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916193" />
        </g>
        <defs>
          <clipPath id="clip0_2033_941">
            <rect fill="white" height="10.9943" width="10.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text67() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[58.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.491px] relative w-[58.281px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#416b02] text-[11px] text-nowrap top-[-0.09px] whitespace-pre">25/11/2025</p>
      </div>
    </div>
  );
}

function Container195() {
  return (
    <div className="h-[16.491px] relative shrink-0 w-[73.267px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[3.991px] h-[16.491px] items-center relative w-[73.267px]">
        <Icon33 />
        <Text67 />
      </div>
    </div>
  );
}

function Container196() {
  return (
    <div className="content-stretch flex h-[16.491px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container194 />
      <Container195 />
    </div>
  );
}

function Container197() {
  return (
    <div className="h-[38.295px] relative rounded-[8px] shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[38.295px] items-start pb-[0.909px] pt-[8.906px] px-[8.906px] relative w-[314.574px]">
        <Container196 />
      </div>
    </div>
  );
}

function Container198() {
  return (
    <div className="h-[120.298px] relative shrink-0 w-[314.574px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px_0px_0px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7.997px] h-[120.298px] items-start pb-0 pt-[8.906px] px-0 relative w-[314.574px]">
        <Container192 />
        <Container197 />
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[227.045px] items-start left-0 pl-[11.989px] pr-0 py-[11.989px] top-[3.99px] w-[338.551px]" data-name="Container">
      <Container187 />
      <Container189 />
      <Container198 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[13.991px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p1ec5c1a0} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.74893" />
          <path d={svgPaths.p1d9deec0} id="Vector_2" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.74893" />
        </g>
      </svg>
    </div>
  );
}

function Container200() {
  return (
    <div className="absolute bg-red-100 box-border content-stretch flex items-center justify-center left-[302.57px] p-[0.909px] rounded-[3.0504e+07px] size-[23.991px] top-[11.99px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px] border-red-300 border-solid inset-0 pointer-events-none rounded-[3.0504e+07px]" />
      <Icon34 />
    </div>
  );
}

function Container201() {
  return (
    <div className="bg-[#c5d6b5] relative rounded-[3.0504e+07px] shrink-0 size-[2.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[2.997px]" />
    </div>
  );
}

function Container202() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.989px] h-[12.969px] items-start left-[3.99px] opacity-0 top-[109.03px] w-[2.997px]" data-name="Container">
      {[...Array(3).keys()].map((_, i) => (
        <Container201 key={i} />
      ))}
    </div>
  );
}

function AtendimentoCard11() {
  return (
    <div className="absolute bg-white border-[0.909px] border-gray-200 border-solid h-[232.855px] left-[9.82px] rounded-[10px] top-[1013.21px] w-[340.369px]" data-name="AtendimentoCard">
      <Container184 />
      <Container199 />
      <Container200 />
      <Container202 />
    </div>
  );
}

function Container203() {
  return (
    <div className="bg-gray-50 h-[1255.88px] relative rounded-[12px] shrink-0 w-[360px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.818px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[1255.88px] relative w-[360px]">
        <AtendimentoCard7 />
        <AtendimentoCard8 />
        <AtendimentoCard9 />
        <AtendimentoCard10 />
        <AtendimentoCard11 />
      </div>
    </div>
  );
}

function KanbanColumn2() {
  return (
    <div className="basis-0 grow h-[1291.86px] min-h-px min-w-px relative shrink-0" data-name="KanbanColumn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[11.989px] h-[1291.86px] items-start relative w-full">
        <Container107 />
        <Container203 />
      </div>
    </div>
  );
}

function Container204() {
  return (
    <div className="h-[1307.86px] relative shrink-0 w-[1120.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15.994px] h-[1307.86px] items-start overflow-clip pl-0 pr-[8.764px] py-0 relative rounded-[inherit] w-[1120.75px]">
        <KanbanColumn />
        <KanbanColumn1 />
        <KanbanColumn2 />
      </div>
    </div>
  );
}

function AtendimentosKanban() {
  return (
    <div className="h-[1450.3px] relative shrink-0 w-full" data-name="AtendimentosKanban">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[23.991px] h-[1450.3px] items-start pb-0 pl-[23.991px] pr-0 pt-[23.991px] relative w-full">
          <Container3 />
          <Container204 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[#f8fafc] h-[1450.3px] items-start left-0 pl-[243.991px] pr-0 py-0 to-[#f1f5f9] top-0 w-[1412.73px]" data-name="App">
      <AtendimentosKanban />
    </div>
  );
}

function Container205() {
  return <div className="absolute border-[#ede6f6] border-[0px_0.909px_0px_0px] border-solid h-[810px] left-0 top-0 w-[243.991px]" data-name="Container" />;
}

function Home() {
  return (
    <div className="absolute contents inset-[8.33%_12.5%]" data-name="home">
      <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
            <path d={svgPaths.p1774d5f0} id="Icon" stroke="var(--stroke-0, #525051)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="h-[23.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Home />
    </div>
  );
}

function Home1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[23.991px] top-0" data-name="Home">
      <Icon35 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[24.006px] left-[31.99px] top-0 w-[84.46px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#525051] text-[16px] text-nowrap top-[-1.18px] whitespace-pre">Dashboard</p>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute h-[24.006px] left-[11.99px] top-[8px] w-[188.991px]" data-name="Content">
      <Home1 />
      <Paragraph29 />
    </div>
  );
}

function Container206() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <Content />
    </div>
  );
}

function NavItemBase() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-start left-0 rounded-[6px] top-0 w-[212.003px]" data-name="NavItemBase">
      <Container206 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="absolute left-0 size-[23.991px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1591d980} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d={svgPaths.p192f2b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M11.9957 10.9961H15.9943" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M11.9957 15.9943H15.9943" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M7.99716 10.9961H8.00716" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M7.99716 15.9943H8.00716" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[24.006px] left-[31.99px] top-0 w-[108.622px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-1.18px] whitespace-pre">Atendimentos</p>
    </div>
  );
}

function ContentAtendimentos() {
  return (
    <div className="absolute h-[24.006px] left-[11.99px] top-[8px] w-[188.991px]" data-name="ContentAtendimentos">
      <Icon36 />
      <Paragraph30 />
    </div>
  );
}

function Container207() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <ContentAtendimentos />
    </div>
  );
}

function NavItemAtendimentos() {
  return (
    <div className="absolute bg-[#65a603] content-stretch flex flex-col h-[40px] items-start left-0 rounded-[6px] top-[43.99px] w-[212.003px]" data-name="NavItemAtendimentos">
      <Container207 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute left-0 size-[23.991px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2355f280} id="Vector" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M7.99716 5.99787H15.9943" id="Vector_2" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M15.9943 13.995V17.9936" id="Vector_3" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M15.9943 9.99645H16.0043" id="Vector_4" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M11.9957 9.99645H12.0057" id="Vector_5" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M7.99716 9.99645H8.00716" id="Vector_6" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M11.9957 13.995H12.0057" id="Vector_7" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M7.99716 13.995H8.00716" id="Vector_8" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M11.9957 17.9936H12.0057" id="Vector_9" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M7.99716 17.9936H8.00716" id="Vector_10" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[24.006px] left-[31.99px] top-0 w-[78.182px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-1.18px] whitespace-pre">Simulador</p>
    </div>
  );
}

function ContentSimulador() {
  return (
    <div className="absolute h-[24.006px] left-[11.99px] top-[8px] w-[188.991px]" data-name="ContentSimulador">
      <Icon37 />
      <Paragraph31 />
    </div>
  );
}

function Container208() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <ContentSimulador />
    </div>
  );
}

function NavItemSimulador() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-start left-0 rounded-[6px] top-[87.98px] w-[212.003px]" data-name="NavItemSimulador">
      <Container208 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="absolute left-0 size-[23.991px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2cd55300} id="Vector" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d={svgPaths.p309cd300} id="Vector_2" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M9.99716 8.9968H7.99716" id="Vector_3" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M15.9943 12.9954H7.99716" id="Vector_4" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M15.9943 16.994H7.99716" id="Vector_5" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[24.006px] left-[31.99px] top-0 w-[78.58px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-1.18px] whitespace-pre">Propostas</p>
    </div>
  );
}

function ContentPropostas() {
  return (
    <div className="absolute h-[24.006px] left-[11.99px] top-[8px] w-[188.991px]" data-name="ContentPropostas">
      <Icon38 />
      <Paragraph32 />
    </div>
  );
}

function Container209() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <ContentPropostas />
    </div>
  );
}

function NavItemPropostas() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-start left-0 rounded-[6px] top-[131.97px] w-[212.003px]" data-name="NavItemPropostas">
      <Container209 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="absolute left-0 size-[23.991px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p7ff8e72} id="Vector" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[24.006px] left-[31.99px] top-0 w-[92.244px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-1.18px] whitespace-pre">Credenciais</p>
    </div>
  );
}

function ContentCredenciais() {
  return (
    <div className="absolute h-[24.006px] left-[11.99px] top-[8px] w-[188.991px]" data-name="ContentCredenciais">
      <Icon39 />
      <Paragraph33 />
    </div>
  );
}

function Container210() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <ContentCredenciais />
    </div>
  );
}

function NavItemCredenciais() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-start left-0 rounded-[6px] top-[175.97px] w-[212.003px]" data-name="NavItemCredenciais">
      <Container210 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="absolute left-0 size-[23.991px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M11.9957 1.99929V21.9922" id="Vector" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d={svgPaths.p154ff340} id="Vector_2" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[24.006px] left-[31.99px] top-0 w-[85.724px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-1.18px] whitespace-pre">Comissões</p>
    </div>
  );
}

function ContentFinanceiro() {
  return (
    <div className="absolute h-[24.006px] left-[11.99px] top-[8px] w-[188.991px]" data-name="ContentFinanceiro">
      <Icon40 />
      <Paragraph34 />
    </div>
  );
}

function Container211() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <ContentFinanceiro />
    </div>
  );
}

function NavItemFinanceiro() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-start left-0 rounded-[6px] top-[219.96px] w-[212.003px]" data-name="NavItemFinanceiro">
      <Container211 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="absolute left-0 size-[23.991px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p16f40b00} id="Vector" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M19.9929 1.99929V5.99787" id="Vector_2" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d="M21.9922 3.99858H17.9936" id="Vector_3" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          <path d={svgPaths.p1a4d5400} id="Vector_4" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[24.006px] left-[31.99px] top-0 w-[109.077px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-1.18px] whitespace-pre">Higienizações</p>
    </div>
  );
}

function ContentHigienizacoes() {
  return (
    <div className="absolute h-[24.006px] left-[11.99px] top-[8px] w-[188.991px]" data-name="ContentHigienizacoes">
      <Icon41 />
      <Paragraph35 />
    </div>
  );
}

function Container212() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <ContentHigienizacoes />
    </div>
  );
}

function NavItemHigienizacoes() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-start left-0 rounded-[6px] top-[263.95px] w-[212.003px]" data-name="NavItemHigienizacoes">
      <Container212 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="absolute left-0 size-[23.991px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p25a17700} id="Vector" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[24.006px] left-[31.99px] top-0 w-[120.909px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-1.18px] whitespace-pre">Leads Perfeitos</p>
    </div>
  );
}

function ContentCampanhas() {
  return (
    <div className="absolute h-[24.006px] left-[11.99px] top-[8px] w-[188.991px]" data-name="ContentCampanhas">
      <Icon42 />
      <Paragraph36 />
    </div>
  );
}

function Container213() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <ContentCampanhas />
    </div>
  );
}

function NavItemCampanhas() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-start left-0 rounded-[6px] top-[307.94px] w-[212.003px]" data-name="NavItemCampanhas">
      <Container213 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="h-[23.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_16.67%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p298c5520} id="Vector" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[7.83%_7.83%_33.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-7.08%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p1ffea800} id="Vector" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container214() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[23.991px] top-0" data-name="Container">
      <Icon43 />
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[24.006px] left-[31.99px] top-0 w-[82.443px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-1.18px] whitespace-pre">Digitações</p>
    </div>
  );
}

function ContentDigitacoes() {
  return (
    <div className="absolute h-[24.006px] left-[11.99px] top-[8px] w-[188.991px]" data-name="ContentDigitacoes">
      <Container214 />
      <Paragraph37 />
    </div>
  );
}

function Container215() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <ContentDigitacoes />
    </div>
  );
}

function NavItemDigitacoes() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-start left-0 rounded-[6px] top-[351.93px] w-[212.003px]" data-name="NavItemDigitacoes">
      <Container215 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="h-[23.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[83.33%_58.33%_8.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-49.98%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p2f782c40} id="Vector" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[83.33%_12.5%_8.33%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-49.98%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p2f782c40} id="Vector" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[4.17%_4.17%_33.33%_4.17%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-4.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 17">
            <path d={svgPaths.p302b6d60} id="Vector" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container216() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[23.991px] top-0" data-name="Container">
      <Icon44 />
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute h-[24.006px] left-[31.99px] top-0 w-[57.955px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-1.18px] whitespace-pre">Vendas</p>
    </div>
  );
}

function ContentVendas() {
  return (
    <div className="absolute h-[24.006px] left-[11.99px] top-[8px] w-[188.991px]" data-name="ContentVendas">
      <Container216 />
      <Paragraph38 />
    </div>
  );
}

function Container217() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <ContentVendas />
    </div>
  );
}

function NavItemVendas() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-start left-0 rounded-[6px] top-[395.92px] w-[212.003px]" data-name="NavItemVendas">
      <Container217 />
    </div>
  );
}

function Key() {
  return (
    <div className="absolute contents inset-[8.33%_8.33%_12.4%_8.62%]" data-name="key">
      <div className="absolute inset-[8.33%_8.33%_12.4%_8.62%]" data-name="Icon">
        <div className="absolute inset-[-5.26%_-5.02%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.p10308e00} id="Icon" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99929" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="h-[23.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Key />
    </div>
  );
}

function Key1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[23.991px] top-0" data-name="Key">
      <Icon45 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute h-[24.006px] left-[31.99px] top-0 w-[68.48px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[16px] text-neutral-700 text-nowrap top-[-1.18px] whitespace-pre">Usuários</p>
    </div>
  );
}

function ContentAcessos() {
  return (
    <div className="absolute h-[24.006px] left-[11.99px] top-[8px] w-[188.991px]" data-name="ContentAcessos">
      <Key1 />
      <Paragraph39 />
    </div>
  );
}

function Container218() {
  return (
    <div className="h-[40px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <ContentAcessos />
    </div>
  );
}

function NavItemAcessos() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[40px] items-start left-0 rounded-[6px] top-[439.91px] w-[212.003px]" data-name="NavItemAcessos">
      <Container218 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[479.915px] left-[15.99px] top-[87.98px] w-[212.003px]" data-name="Navigation">
      <NavItemBase />
      <NavItemAtendimentos />
      <NavItemSimulador />
      <NavItemPropostas />
      <NavItemCredenciais />
      <NavItemFinanceiro />
      <NavItemHigienizacoes />
      <NavItemCampanhas />
      <NavItemDigitacoes />
      <NavItemVendas />
      <NavItemAcessos />
    </div>
  );
}

function SubNavDitto() {
  return (
    <div className="absolute bg-white h-[810px] left-0 top-0 w-[243.991px]" data-name="SubNavDitto">
      <Container205 />
      <Navigation />
    </div>
  );
}

export default function KanbanATendimentosTab() {
  return (
    <div className="bg-white relative size-full" data-name="Kanban ATendimentos Tab">
      <App />
      <SubNavDitto />
    </div>
  );
}