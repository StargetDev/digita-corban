import svgPaths from "./svg-jnudfp96ug";

function Heading() {
  return (
    <div className="h-[30px] relative shrink-0 w-[239.176px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[239.176px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[30px] left-0 not-italic text-[#3b7302] text-[20px] text-nowrap top-[-0.27px] whitespace-pre">Detalhes do Atendimento</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p354ab980} id="Vector" stroke="var(--stroke-0, #5A8505)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p2a4db200} id="Vector" stroke="var(--stroke-0, #5A8505)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[3.0504e+07px] shrink-0 size-[31.989px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[5.994px] px-[5.994px] relative size-[31.989px]">
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex from-[#f0f8e8] h-[65.795px] items-center justify-between left-0 pb-[1.818px] pt-0 px-[20px] rounded-tl-[16px] rounded-tr-[16px] to-[#e8f5d8] top-0 w-[750px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d0e8c0] border-[0px_0px_1.818px] border-solid inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px]" />
      <Heading />
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[45.284px] relative shrink-0 w-[174.205px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#3b7302] border-[0px_0px_1.818px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[45.284px] relative w-[174.205px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-[86.99px] not-italic text-[#3b7302] text-[13px] text-center text-nowrap top-[12.81px] translate-x-[-50%] whitespace-pre">Informações do Cliente</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[45.284px] relative shrink-0 w-[155.298px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.818px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[45.284px] relative w-[155.298px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-[78.49px] not-italic text-[13px] text-center text-gray-500 text-nowrap top-[12.81px] translate-x-[-50%] whitespace-pre">Propostas Digitadas</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[45.284px] relative shrink-0 w-[113.111px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0px_0px_1.818px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[45.284px] relative w-[113.111px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-[56.99px] not-italic text-[13px] text-center text-gray-500 text-nowrap top-[12.81px] translate-x-[-50%] whitespace-pre">Observações</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute box-border content-stretch flex h-[45.284px] items-start left-0 pb-[0.909px] pl-[20px] pr-0 pt-0 top-[65.8px] w-[750px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.909px] border-black border-solid inset-0 pointer-events-none" />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#304e01] text-[16px] text-nowrap top-[-1.18px] whitespace-pre">Dados do Cliente</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[17.997px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-[-0.09px] whitespace-pre">Nome</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21.009px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-gray-800 text-nowrap top-[-0.18px] whitespace-pre">Carlos Eduardo Ferreira</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.991px] h-[42.997px] items-start left-0 top-0 w-[214.73px]" data-name="Container">
      <Label />
      <Paragraph />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[17.997px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-[-0.09px] whitespace-pre">CPF</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21.009px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-gray-800 text-nowrap top-[-0.18px] whitespace-pre">123.456.789-00</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.991px] h-[42.997px] items-start left-[230.72px] top-0 w-[214.73px]" data-name="Container">
      <Label1 />
      <Paragraph1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[17.997px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-[-0.09px] whitespace-pre">Data</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21.009px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-gray-800 text-nowrap top-[-0.18px] whitespace-pre">27/11/2025</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.991px] h-[42.997px] items-start left-[461.45px] top-0 w-[214.73px]" data-name="Container">
      <Label2 />
      <Paragraph2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[17.997px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-[-0.09px] whitespace-pre">Hora</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[21.009px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-gray-800 text-nowrap top-[-0.18px] whitespace-pre">08:00</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.991px] h-[42.997px] items-start left-0 top-[53px] w-[214.73px]" data-name="Container">
      <Label3 />
      <Paragraph3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[17.997px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-[-0.09px] whitespace-pre">Consultor</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21.009px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-gray-800 text-nowrap top-[-0.18px] whitespace-pre">Roberto Alves</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.991px] h-[42.997px] items-start left-[230.72px] top-[53px] w-[214.73px]" data-name="Container">
      <Label4 />
      <Paragraph4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[17.997px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[12px] text-gray-500 text-nowrap top-[-0.09px] whitespace-pre">Analista</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[21.009px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-gray-800 text-nowrap top-[-0.18px] whitespace-pre">Juliana Mendes</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.991px] h-[42.997px] items-start left-[461.45px] top-[53px] w-[214.73px]" data-name="Container">
      <Label5 />
      <Paragraph5 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[95.994px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[165.781px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[11.989px] h-[165.781px] items-start pb-[0.909px] pt-[16.903px] px-[16.903px] relative w-full">
          <Heading1 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#304e01] text-[16px] text-nowrap top-[-1.18px] whitespace-pre">Status do Atendimento</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-blue-500 relative rounded-[3.0504e+07px] shrink-0 size-[11.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[11.989px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[19.489px] relative shrink-0 w-[74.148px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.489px] overflow-clip relative rounded-[inherit] w-[74.148px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-[37px] not-italic text-[13px] text-blue-500 text-center text-nowrap top-[0.82px] translate-x-[-50%] whitespace-pre">Negociando</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[19.489px] items-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Text />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex flex-col h-[43.125px] items-start left-0 pb-[1.818px] pt-[11.818px] px-[15.81px] rounded-[8px] top-0 w-[333.097px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.818px] border-blue-500 border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_0px_2px_#0a0a0a,0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-red-500 relative rounded-[3.0504e+07px] shrink-0 size-[11.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[11.989px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.489px] relative shrink-0 w-[87.088px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.489px] overflow-clip relative rounded-[inherit] w-[87.088px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-[44px] not-italic text-[13px] text-center text-nowrap text-red-500 top-[0.82px] translate-x-[-50%] whitespace-pre">Sem interesse</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[19.489px] items-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Text1 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[43.125px] items-start left-[343.1px] pb-[1.818px] pt-[11.818px] px-[15.81px] rounded-[8px] top-0 w-[333.097px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.818px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-violet-500 relative rounded-[3.0504e+07px] shrink-0 size-[11.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[11.989px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[19.489px] relative shrink-0 w-[108.437px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.489px] overflow-clip relative rounded-[inherit] w-[108.437px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-[54px] not-italic text-[13px] text-center text-nowrap text-violet-500 top-[0.82px] translate-x-[-50%] whitespace-pre">Proposta digitada</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[19.489px] items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Text2 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[43.125px] items-start left-0 pb-[1.818px] pt-[11.818px] px-[15.81px] rounded-[8px] top-[53.13px] w-[333.097px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.818px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-orange-500 relative rounded-[3.0504e+07px] shrink-0 size-[11.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[11.989px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[19.489px] relative shrink-0 w-[118.963px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.489px] overflow-clip relative rounded-[inherit] w-[118.963px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-[59px] not-italic text-[13px] text-center text-nowrap text-orange-500 top-[0.82px] translate-x-[-50%] whitespace-pre">Proposta Recusada</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[19.489px] items-center relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Text3 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[43.125px] items-start left-[343.1px] pb-[1.818px] pt-[11.818px] px-[15.81px] rounded-[8px] top-[53.13px] w-[333.097px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.818px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-emerald-500 relative rounded-[3.0504e+07px] shrink-0 size-[11.989px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[11.989px]" />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[19.489px] relative shrink-0 w-[89.659px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.489px] overflow-clip relative rounded-[inherit] w-[89.659px]">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] left-[45px] not-italic text-[13px] text-center text-emerald-500 text-nowrap top-[0.82px] translate-x-[-50%] whitespace-pre">Proposta Paga</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[7.997px] h-[19.489px] items-center relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Text4 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[43.125px] items-start left-0 pb-[1.818px] pt-[11.818px] px-[15.81px] rounded-[8px] top-[106.25px] w-[333.097px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.818px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[149.375px] relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[217.173px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[217.173px] items-start pb-[0.909px] pt-[16.903px] px-[16.903px] relative w-full">
          <Heading2 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[37.301px] relative rounded-[6px] shrink-0 w-[75.597px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#c5d6b5] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[37.301px] relative w-[75.597px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[38.4px] not-italic text-[13px] text-center text-gray-700 text-nowrap top-[9.72px] translate-x-[-50%] whitespace-pre">Fechar</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#3b7302] h-[35.483px] relative rounded-[6px] shrink-0 w-[139.19px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35.483px] relative w-[139.19px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-[70.49px] not-italic text-[13px] text-center text-nowrap text-white top-[8.82px] translate-x-[-50%] whitespace-pre">Salvar Alterações</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="box-border content-stretch flex gap-[10px] h-[50.199px] items-center justify-end pb-0 pt-[0.909px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.909px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[15.994px] h-[505.142px] items-start left-0 overflow-clip pb-0 pt-[20px] px-[20px] top-[111.99px] w-[750px]" data-name="Container">
      <Container9 />
      <Container21 />
      <Container22 />
    </div>
  );
}

export default function Container24() {
  return (
    <div className="bg-white relative rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="Container">
      <Container />
      <Container1 />
      <Container23 />
    </div>
  );
}