function Cor() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-center justify-center left-[135px] top-[278px]" data-name="cor">
      <div className="bg-[#2563EB] h-[164px] rounded-[94.677px] shrink-0 w-[161.833px]" data-name="Cor/cor primária" />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#949396] text-[15.626px] text-center w-[min-content]">
        <p className="mb-0">Cor primária</p>
        <p>5775D0</p>
      </div>
    </div>
  );
}

function Cor1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-center justify-center left-[281.83px] top-[278px]" data-name="cor">
      <div className="bg-[#3B82F6] h-[164px] rounded-[94.677px] shrink-0 w-[161.833px]" data-name="Cor/cor secundária" />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#949396] text-[15.626px] text-center w-[min-content]">
        <p className="mb-0">Cor segundária</p>
        <p>5CCBE1</p>
      </div>
    </div>
  );
}

function Cor2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-center justify-center left-[428.67px] top-[278px]" data-name="cor">
      <div className="bg-[#0F172A] h-[164px] rounded-[94.677px] shrink-0 w-[161.833px]" data-name="Cor/cor terciaria" />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#949396] text-[15.626px] text-center w-[min-content]">
        <p className="mb-0">Cor terciária</p>
        <p>0F91D2</p>
      </div>
    </div>
  );
}

function Cor3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-center justify-center left-[575.5px] top-[278px]" data-name="cor">
      <div className="bg-[#dde3f6] h-[164px] rounded-[94.677px] shrink-0 w-[161.833px]" data-name="Cor/cor primária 20%" />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#949396] text-[15.626px] text-center w-[min-content]">
        <p className="mb-0">Cor Primária 20%</p>
        <p>DDE3F6</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[10px] items-center left-[125px] p-[10px] top-[212px]">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#949396] text-[20px] text-nowrap whitespace-pre">Identidade</p>
    </div>
  );
}

function Identidade() {
  return (
    <div className="absolute contents left-[70px] top-[212px]" data-name="Identidade">
      <Cor />
      <Cor1 />
      <Cor2 />
      <Cor3 />
      <div className="absolute border border-[#949396] border-solid h-[331px] left-[70px] rounded-[39px] top-[234px] w-[744px]" />
      <Frame1 />
    </div>
  );
}

function White() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-center justify-center left-[129px] top-[735px]" data-name="White">
      <div className="bg-white h-[164px] relative rounded-[94.677px] shrink-0 w-[161.833px]">
        <div aria-hidden="true" className="absolute border border-[#949396] border-solid inset-0 pointer-events-none rounded-[94.677px]" />
      </div>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#949396] text-[15.626px] text-center w-[min-content]">
        <p className="mb-0">White</p>
        <p>FFFFFF</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[10px] items-center left-[125px] p-[10px] top-[663px]">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#949396] text-[20px] text-nowrap whitespace-pre">Escala de cinza</p>
    </div>
  );
}

function Gray() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-center justify-center left-[265.83px] top-[735px]" data-name="Gray 1">
      <div className="bg-[#f5f5fa] h-[164px] rounded-[94.677px] shrink-0 w-[161.833px]" />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#949396] text-[15.626px] text-center w-[min-content]">
        <p className="mb-0">
          <span className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#949396]">{`Gray `}</span>1
        </p>
        <p>F5F5FA</p>
      </div>
    </div>
  );
}

function Gray1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-center justify-center left-[402.67px] top-[735px]" data-name="Gray 2">
      <div className="bg-[#ededf2] h-[164px] rounded-[94.677px] shrink-0 w-[161.833px]" />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#949396] text-[15.626px] text-center w-[min-content]">
        <p className="mb-0">
          <span className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#949396]">{`Gray `}</span>2
        </p>
        <p>EDEDF2</p>
      </div>
    </div>
  );
}

function Gray2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-center justify-center left-[540px] top-[735px]" data-name="Gray 3">
      <div className="bg-[#dcdce0] h-[164px] rounded-[94.677px] shrink-0 w-[161.833px]" />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#949396] text-[15.626px] text-center w-[min-content]">
        <p className="mb-0">
          <span className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#949396]">{`Gray `}</span>3
        </p>
        <p>DCDCE0</p>
      </div>
    </div>
  );
}

function Gray3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-center justify-center left-[676.83px] top-[735px]" data-name="Gray 4">
      <div className="bg-[#b4b4b8] h-[164px] rounded-[94.677px] shrink-0 w-[161.833px]" />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#949396] text-[15.626px] text-center w-[min-content]">
        <p className="mb-0">
          <span className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#949396]">{`Gray `}</span>4
        </p>
        <p>B4B4B8</p>
      </div>
    </div>
  );
}

function Gray4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-center justify-center left-[814px] top-[735px]" data-name="Gray 5">
      <div className="bg-[#8c8c8f] h-[164px] rounded-[94.677px] shrink-0 w-[161.833px]" />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#949396] text-[15.626px] text-center w-[min-content]">
        <p className="mb-0">
          <span className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#949396]">{`Gray `}</span>5
        </p>
        <p>8C8C8F</p>
      </div>
    </div>
  );
}

function Gray5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-center justify-center left-[951px] top-[735px]" data-name="Gray 6">
      <div className="bg-[#525051] h-[164px] rounded-[94.677px] shrink-0 w-[161.833px]" />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#949396] text-[15.626px] text-center w-[min-content]">
        <p className="mb-0">
          <span className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#949396]">{`Gray `}</span>6
        </p>
        <p>525051</p>
      </div>
    </div>
  );
}

function Black() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-center justify-center left-[1087.83px] top-[735px]" data-name="Black">
      <div className="bg-black h-[164px] rounded-[94.677px] shrink-0 w-[161.833px]" />
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#949396] text-[15.626px] text-center w-[min-content]">
        <p className="mb-0">Black</p>
        <p>000000</p>
      </div>
    </div>
  );
}

function EscalaDeCinza() {
  return (
    <div className="absolute contents left-[70px] top-[663px]" data-name="Escala de cinza">
      <White />
      <div className="absolute border border-[#949396] border-solid h-[331px] left-[70px] rounded-[39px] top-[685px] w-[1240px]" />
      <Frame4 />
      <Gray />
      <Gray1 />
      <Gray2 />
      <Gray3 />
      <Gray4 />
      <Gray5 />
      <Black />
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-center mr-[-50px] relative shrink-0">
      <div className="bg-[#26a96c] rounded-[100px] shrink-0 size-[100px]" />
      <p className="font-['Inter:Light',sans-serif] font-light h-[35px] leading-[normal] not-italic relative shrink-0 text-[#464546] text-[12px] w-[48px]">Positivo26A96C</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[9px] items-end justify-center mr-[-50px] relative shrink-0">
      <div className="bg-[#d4eee2] rounded-[100px] shrink-0 size-[100px]" />
      <div className="font-['Inter:Light',sans-serif] font-light h-[35px] leading-[normal] not-italic relative shrink-0 text-[#464546] text-[12px] w-[76px]">
        <p className="mb-0">Positivo 20%</p>
        <p>D4EEE2</p>
      </div>
    </div>
  );
}

function Positivo() {
  return (
    <div className="box-border content-stretch flex items-start pl-0 pr-[50px] py-0 relative shrink-0" data-name="positivo">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-center mr-[-50px] relative shrink-0">
      <div className="bg-[#ee934f] rounded-[100px] shrink-0 size-[100px]" />
      <div className="font-['Inter:Light',sans-serif] font-light h-[35px] leading-[normal] not-italic relative shrink-0 text-[#464546] text-[12px] w-[48px]">
        <p className="mb-0">Alerta</p>
        <p>EE934F</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[9px] items-end justify-center mr-[-50px] relative shrink-0">
      <div className="bg-[#e7d5c7] rounded-[100px] shrink-0 size-[100px]" />
      <div className="font-['Inter:Light',sans-serif] font-light h-[35px] leading-[normal] not-italic relative shrink-0 text-[#464546] text-[12px] w-[76px]">
        <p className="mb-0">Alerta 20%</p>
        <p>E7D5C7</p>
      </div>
    </div>
  );
}

function Alerta() {
  return (
    <div className="box-border content-stretch flex items-start pl-0 pr-[50px] py-0 relative shrink-0" data-name="alerta">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[9px] items-start justify-center mr-[-50px] relative shrink-0">
      <div className="bg-[#eb5757] rounded-[100px] shrink-0 size-[100px]" />
      <div className="font-['Inter:Light',sans-serif] font-light h-[35px] leading-[normal] not-italic relative shrink-0 text-[#464546] text-[12px] w-[52px]">
        <p className="mb-0">Negativa</p>
        <p>EB5757</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[9px] items-end justify-center mr-[-50px] relative shrink-0">
      <div className="bg-[#fbdddd] rounded-[100px] shrink-0 size-[100px]" />
      <div className="font-['Inter:Light',sans-serif] font-light h-[35px] leading-[normal] not-italic relative shrink-0 text-[#464546] text-[12px] w-[79px]">
        <p className="mb-0">Negativa 20%</p>
        <p>FBDDDD</p>
      </div>
    </div>
  );
}

function Negativa() {
  return (
    <div className="box-border content-stretch flex items-start pl-0 pr-[50px] py-0 relative shrink-0" data-name="negativa">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[37px] items-start left-[1541px] top-[382px]">
      <Positivo />
      <Alerta />
      <Negativa />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[10px] items-center left-[1465px] p-[10px] top-[278px]">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[normal] not-italic relative shrink-0 text-[#949396] text-[20px] text-nowrap whitespace-pre">Apoio/Status</p>
    </div>
  );
}

function ApioStatus() {
  return (
    <div className="absolute contents left-[1410px] top-[278px]" data-name="Apio/status">
      <Frame />
      <div className="absolute border border-[#949396] border-solid h-[716px] left-[1410px] rounded-[39px] top-[300px] w-[425px]" />
      <Frame9 />
    </div>
  );
}

export default function Cores() {
  return (
    <div className="relative size-full" data-name="Cores">
      <div className="absolute bg-[#f5f5fa] h-[164px] left-0 right-0 top-0" />
      <div className="absolute bg-white h-[969px] left-0 right-0 top-[164px]" />
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.4] left-[70px] not-italic text-[#2f3437] text-[40px] text-nowrap top-[58px] whitespace-pre">Cores</p>
      <Identidade />
      <EscalaDeCinza />
      <ApioStatus />
    </div>
  );
}