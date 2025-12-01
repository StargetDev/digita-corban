import svgPaths from "./svg-gmuphq36hl";

function LayerMc() {
  return (
    <div className="absolute inset-[10.01%_10%_9.99%_10%]" data-name="layer-MC0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 8">
        <g id="layer-MC0">
          <path d={svgPaths.p217bbf00} fill="url(#paint0_linear_3_8247)" id="path3" />
          <g id="Clip path group">
            <mask height="8" id="mask0_3_8247" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="22" x="0" y="0">
              <g id="clipPath5">
                <path d={svgPaths.p11cd0e80} fill="var(--fill-0, white)" id="path5" />
              </g>
            </mask>
            <g mask="url(#mask0_3_8247)">
              <path d={svgPaths.p302f1400} fill="var(--fill-0, white)" id="path4" />
            </g>
          </g>
          <g id="Clip path group_2">
            <mask height="8" id="mask1_3_8247" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="22" x="0" y="0">
              <g id="clipPath7">
                <path d={svgPaths.p11cd0e80} fill="var(--fill-0, white)" id="path7" />
              </g>
            </mask>
            <g mask="url(#mask1_3_8247)">
              <path d={svgPaths.p28325100} fill="var(--fill-0, white)" id="path6" />
            </g>
          </g>
          <g id="Clip path group_3">
            <mask height="8" id="mask2_3_8247" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="22" x="0" y="0">
              <g id="clipPath9">
                <path d={svgPaths.p11cd0e80} fill="var(--fill-0, white)" id="path9" />
              </g>
            </mask>
            <g mask="url(#mask2_3_8247)">
              <path d={svgPaths.p3dc53b00} fill="var(--fill-0, white)" id="path8" />
            </g>
          </g>
          <path d={svgPaths.p17a79f00} fill="url(#paint1_linear_3_8247)" id="path11" />
          <g id="Clip path group_4">
            <mask height="8" id="mask3_3_8247" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="22" x="0" y="0">
              <g id="clipPath13">
                <path d={svgPaths.p11cd0e80} fill="var(--fill-0, white)" id="path13" />
              </g>
            </mask>
            <g mask="url(#mask3_3_8247)">
              <path d={svgPaths.p2d6f2100} fill="var(--fill-0, white)" id="path12" />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_8247" x1="0.293631" x2="6.01245" y1="5.75449" y2="3.73531">
            <stop stopColor="#5FB371" />
            <stop offset="0.37095" stopColor="#5FB371" />
            <stop offset="1" stopColor="#5F9183" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3_8247" x1="6.38334" x2="7.72855" y1="1.80034" y2="1.14547">
            <stop stopColor="#5FB371" />
            <stop offset="0.37095" stopColor="#5FB371" />
            <stop offset="1" stopColor="#5F9183" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function DittoFundoEscuro() {
  return (
    <div className="absolute inset-[36.11%_12.23%_36.11%_13.89%] overflow-clip" data-name="ditto_fundo_escuro 1">
      <LayerMc />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute left-0 size-[36px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <circle cx="18" cy="18" fill="var(--fill-0, black)" id="Ellipse 968" r="18" />
        </svg>
      </div>
      <DittoFundoEscuro />
    </div>
  );
}