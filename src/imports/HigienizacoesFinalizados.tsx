import svgPaths from "./svg-ftl9t2hr2r";

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">Lote-568093855</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdce0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#525051] text-[14px] text-nowrap whitespace-pre">Nome da lista</p>
      <Input />
    </div>
  );
}

function InputFieldBase() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="_Input field base">
      <InputWithLabel />
    </div>
  );
}

function InputField() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[calc(20%-2px)] w-[320px]" data-name="Input field">
      <InputFieldBase />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[114px]" data-name="Table header">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#525051] text-[12px] text-nowrap whitespace-pre">Data de criação</p>
    </div>
  );
}

function TableHeaderCell() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center p-[8px] relative shrink-0 w-[130px]" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableHeader />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[84px]" data-name="Table header">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#525051] text-[12px] text-nowrap whitespace-pre">Origem</p>
    </div>
  );
}

function TableHeaderCell1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center p-[8px] relative shrink-0 w-[100px]" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableHeader1 />
    </div>
  );
}

function TableHeader2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[192px]" data-name="Table header">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#525051] text-[12px] text-nowrap whitespace-pre">Nome da lista</p>
    </div>
  );
}

function TableHeaderCell2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center p-[8px] relative shrink-0 w-[208px]" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableHeader2 />
    </div>
  );
}

function TableHeader3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#525051] text-[12px] text-nowrap whitespace-pre">Quantidade</p>
    </div>
  );
}

function TableHeaderCell3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center p-[8px] relative shrink-0 w-[115px]" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableHeader3 />
    </div>
  );
}

function TableHeader4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#525051] text-[12px] text-nowrap whitespace-pre">Progresso</p>
    </div>
  );
}

function TableHeaderCell4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center p-[8px] relative shrink-0 w-[115px]" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableHeader4 />
    </div>
  );
}

function TableHeader5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[70px]" data-name="Table header">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#525051] text-[12px] text-nowrap whitespace-pre">Finalizado em</p>
    </div>
  );
}

function TableHeaderCell5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center p-[8px] relative shrink-0 w-[156px]" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableHeader5 />
    </div>
  );
}

function TableHeader6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#525051] text-[12px] text-nowrap whitespace-pre">Ações</p>
    </div>
  );
}

function TableHeaderCell6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center p-[8px] relative shrink-0 w-[80px]" data-name="Table header cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableHeader6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <TableHeaderCell />
      <TableHeaderCell1 />
      <TableHeaderCell2 />
      <TableHeaderCell3 />
      <TableHeaderCell4 />
      <TableHeaderCell5 />
      <TableHeaderCell6 />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[114px]" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">12/06/2024</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[130px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[84px]" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">Leads</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[100px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText1 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[208px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] w-[192px]">Lote-568093855</p>
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">250</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[115px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText2 />
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">100,00%</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[115px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText3 />
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[59px]" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">21/06/2024</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[156px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText4 />
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trash-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trash-2">
          <path d={svgPaths.p20b8f600} id="Icon" stroke="var(--stroke-0, #D92D20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[80px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#e4e7ec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Trash />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[114px]" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">12/06/2024</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[130px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText5 />
    </div>
  );
}

function TextAndSupportingText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[84px]" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">Arquivo</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[100px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText6 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[208px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] w-[192px]">Lote-568093855</p>
    </div>
  );
}

function TextAndSupportingText7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">250</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[115px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText7 />
    </div>
  );
}

function TextAndSupportingText8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">100,00%</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[115px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText8 />
    </div>
  );
}

function TextAndSupportingText9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[59px]" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">21/06/2024</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[156px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText9 />
    </div>
  );
}

function Trash1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trash-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trash-2">
          <path d={svgPaths.p20b8f600} id="Icon" stroke="var(--stroke-0, #D92D20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[80px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#e4e7ec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Trash1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
    </div>
  );
}

function TextAndSupportingText10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[114px]" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">12/06/2024</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[130px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText10 />
    </div>
  );
}

function TextAndSupportingText11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[84px]" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">Arquivo</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[100px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText11 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[208px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] w-[192px]">Lote-568093855</p>
    </div>
  );
}

function TextAndSupportingText12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">250</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[115px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText12 />
    </div>
  );
}

function TextAndSupportingText13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">83,00%</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[115px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText13 />
    </div>
  );
}

function TextAndSupportingText14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[59px]" data-name="Text and supporting text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[12px] text-nowrap whitespace-pre">21/06/2024</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[156px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#ededf2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TextAndSupportingText14 />
    </div>
  );
}

function Trash2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trash-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trash-2">
          <path d={svgPaths.p20b8f600} id="Icon" stroke="var(--stroke-0, #D92D20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center p-[8px] relative shrink-0 w-[80px]" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#e4e7ec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Trash2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-center flex flex-wrap gap-0 items-center left-[16px] top-[calc(40%-10px)] w-[904px]">
      <Frame1 />
      <Frame2 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame3 key={i} />
      ))}
      <Frame4 />
      <Frame2 />
      <Frame2 />
    </div>
  );
}

function Content() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pb-[16px] pt-0 px-[4px] relative shrink-0" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#b4b4b8] text-[14px] text-nowrap whitespace-pre">Em andamento</p>
    </div>
  );
}

function TabButtonBase() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="_Tab button base">
      <Content />
      <div className="h-[2px] shrink-0 w-full" data-name="Bottom border" />
    </div>
  );
}

function Content1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center pb-[16px] pt-0 px-[4px] relative shrink-0" data-name="Content">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#65a603] text-[14px] text-nowrap whitespace-pre">Finalizados</p>
    </div>
  );
}

function TabButtonBase1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0" data-name="_Tab button base">
      <Content1 />
      <div className="h-[2px] relative shrink-0 w-full" data-name="Bottom border">
        <div aria-hidden="true" className="absolute border border-[#65a603] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-0 top-0" data-name="Tabs">
      <TabButtonBase />
      <TabButtonBase1 />
    </div>
  );
}

function HorizontalTabs() {
  return (
    <div className="absolute h-[38px] left-[16px] top-[calc(20%+80px)] w-[904px]" data-name="Horizontal tabs">
      <div className="absolute bg-[#ededf2] bottom-0 h-px left-0 right-0" data-name="Divider" />
      <Tabs />
    </div>
  );
}

function ButtonBase() {
  return (
    <div className="absolute bg-[#65a603] left-[calc(83.33%+12px)] rounded-[8px] top-[calc(20%+28px)]" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Nova pesquisa</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#65a603] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function ButtonBase1() {
  return (
    <div className="absolute bg-white left-[calc(66.67%+28px)] rounded-[8px] top-[calc(20%+28px)]" data-name="_Button base">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#65a603] text-[14px] text-nowrap whitespace-pre">Ver serviços</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#65a603] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(70,3,165,0.05)]" />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-left">
          <path d={svgPaths.p11678e00} id="Icon" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </g>
      </svg>
    </div>
  );
}

function ButtonBase2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="_Button base">
      <ArrowLeft />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonBase2 />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right">
          <path d={svgPaths.p3b6ad300} id="Icon" stroke="var(--stroke-0, #8C8C8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" />
        </g>
      </svg>
    </div>
  );
}

function ButtonBase3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="_Button base">
      <ArrowRight />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0" data-name="Button">
      <ButtonBase3 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-[16px] px-[16px] py-[12px] top-[calc(60%+90px)] w-[904px]" data-name="Pagination">
      <div aria-hidden="true" className="absolute border-[#e4e7ec] border-[1px_0px_0px] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-1px]" />
      <Button />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#8c8c8f] text-[14px] text-nowrap whitespace-pre">Pág 1 de 10</p>
      <Button1 />
    </div>
  );
}

function HigienizacoesFinalizados() {
  return (
    <div className="absolute bg-white h-[720px] left-[244px] overflow-clip top-0 w-[936px]" data-name="Higienizações - finalizados">
      <InputField />
      <Frame />
      <HorizontalTabs />
      <ButtonBase />
      <ButtonBase1 />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[38px] left-[16px] not-italic text-[#65a603] text-[24px] top-[88px] w-[904px]">Higienizações</p>
      <Pagination />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="home">
          <path d={svgPaths.p2ff764c0} id="Icon" stroke="var(--stroke-0, #525051)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Home />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#525051] text-[16px] text-nowrap whitespace-pre">Dashboard</p>
    </div>
  );
}

function NavItemBase() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Folder() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="folder">
          <path d={svgPaths.p1a910c72} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="absolute left-[12.5px] size-[12px] top-[12px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_4163)" id="search">
          <rect fill="#65A603" height="12" width="12" />
          <path d={svgPaths.pfabe700} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_4163">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <Folder />
      <Search />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Frame5 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Simulador</p>
    </div>
  );
}

function NavItemBase1() {
  return (
    <div className="bg-[#65a603] relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Folder1() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="folder">
          <path d={svgPaths.p1a910c72} id="Icon" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Search1() {
  return (
    <div className="absolute left-[12.5px] size-[12px] top-[12px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_4146)" id="search">
          <rect fill="white" height="12" width="12" />
          <path d={svgPaths.pfabe700} id="Icon" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_4146">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <Folder1 />
      <Search1 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Frame6 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-700 text-nowrap whitespace-pre">Higienizações</p>
    </div>
  );
}

function NavItemBase2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <div className="h-[24px] relative shrink-0 w-[23.932px]" data-name="path3331">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.pfbc4b80} fill="var(--fill-0, #404040)" id="path3331" />
        </svg>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-700 text-nowrap whitespace-pre">Campanhas</p>
    </div>
  );
}

function NavItemBase3() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function Key() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="key">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="key">
          <path d={svgPaths.p137c2980} id="Icon" stroke="var(--stroke-0, #404040)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[189px]" data-name="Content">
      <Key />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-700 text-nowrap whitespace-pre">Credenciais</p>
    </div>
  );
}

function NavItemBase4() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Navigation">
      <NavItemBase />
      <NavItemBase1 />
      <NavItemBase2 />
      <NavItemBase3 />
      <NavItemBase4 />
    </div>
  );
}

function Content7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[16px] px-[16px] relative shrink-0 w-[244px]" data-name="Content">
      <Navigation />
    </div>
  );
}

function SubNavDitto() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[16px] h-[720px] items-start left-0 pb-0 pt-[72px] px-0 top-0 w-[244px]" data-name="Sub nav ditto">
      <div aria-hidden="true" className="absolute border-[#ede6f6] border-[0px_0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Content7 />
    </div>
  );
}

function Frame7() {
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
      <Frame7 />
    </div>
  );
}

function ButtonBase4() {
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
      <ButtonBase4 />
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="absolute bg-[#3b7302] content-stretch flex flex-col items-center left-0 overflow-clip top-0 w-[1180px]" data-name="Header navigation">
      <Container />
    </div>
  );
}

export default function HigienizacoesFinalizados1() {
  return (
    <div className="relative size-full" data-name="Higienizações - finalizados">
      <HigienizacoesFinalizados />
      <SubNavDitto />
      <HeaderNavigation />
    </div>
  );
}