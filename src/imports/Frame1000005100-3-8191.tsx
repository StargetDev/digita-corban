import svgPaths from "./svg-ddlfa4mj3e";
import imgRectangle1 from "figma:asset/3b47ed41cc788915255fd730c4c5a85a2cb88243.png";
import imgRectangle2 from "figma:asset/bf4223aa7698c0129eb4c9163d42be6e57c8fb6c.png";
import { imgRectangle } from "./svg-ub0nh";

function Group() {
  return (
    <div className="absolute contents inset-[-53.57%_-52.87%_-56.51%_-52.05%]" data-name="Group">
      <div className="absolute inset-[-53.57%_-52.87%_-56.51%_-52.05%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11.071px_10.727px] mask-size-[19.244px_12.186px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[-53.57%_-52.87%_-56.51%_-52.05%]" data-name="Group">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[-53.57%_-52.87%_-56.51%_-52.05%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[-53.57%_-52.87%_-56.51%_-52.05%]" data-name="Group">
      <div className="absolute inset-[-53.57%_-52.87%_-56.51%_-52.05%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11.071px_10.727px] mask-size-[19.244px_12.186px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[-53.57%_-52.87%_-56.51%_-52.05%]" data-name="Group">
      <Group3 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[-53.57%_-52.87%_-56.51%_-52.05%]" data-name="Mask group">
      <Group2 />
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[-53.57%_-52.87%_-56.51%_-52.05%]" data-name="Group">
      <MaskGroup />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0.06%_4.2%_39.02%_1.94%]" data-name="Clip path group">
      <Group5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[66.13%_84.22%_15.85%_0.65%]" data-name="Group">
      <div className="absolute inset-[66.13%_84.22%_15.85%_0.65%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.pf601300} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[66.13%_84.22%_15.85%_0.65%]" data-name="Group">
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[66.13%_84.22%_15.85%_0.65%]" data-name="Group">
      <Group7 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[66.13%_67.52%_15.85%_20.65%]" data-name="Group">
      <div className="absolute inset-[66.13%_67.52%_15.85%_20.65%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
          <path d={svgPaths.p19f94d00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[66.13%_67.52%_15.85%_20.65%]" data-name="Group">
      <Group9 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[66.13%_67.52%_15.85%_20.65%]" data-name="Group">
      <Group10 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[66.13%_47.01%_15.85%_37.87%]" data-name="Group">
      <div className="absolute inset-[66.13%_47.01%_15.85%_37.87%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p1bb25f00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[66.13%_47.01%_15.85%_37.87%]" data-name="Group">
      <Group12 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[66.13%_47.01%_15.85%_37.87%]" data-name="Group">
      <Group13 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[65.76%_23.44%_15.51%_58.18%]" data-name="Group">
      <div className="absolute inset-[65.76%_23.44%_15.51%_58.18%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p341b4c80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[65.76%_23.44%_15.51%_58.18%]" data-name="Group">
      <Group15 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[65.76%_23.44%_15.51%_58.18%]" data-name="Group">
      <Group16 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[65.76%_0.57%_15.51%_80.67%]" data-name="Group">
      <div className="absolute inset-[65.76%_0.57%_15.51%_80.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.pc18a380} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[65.76%_0.57%_15.51%_80.67%]" data-name="Group">
      <Group18 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[65.76%_0.57%_15.51%_80.67%]" data-name="Group">
      <Group19 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[91.86%_91.98%_0.51%_1.4%]" data-name="Group">
      <div className="absolute inset-[91.86%_91.98%_0.51%_1.4%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.paadf740} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[91.86%_91.98%_0.51%_1.4%]" data-name="Group">
      <Group21 />
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[91.86%_91.98%_0.51%_1.4%]" data-name="Group">
      <Group22 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[91.93%_76.18%_0.61%_17.83%]" data-name="Group">
      <div className="absolute inset-[91.93%_76.18%_0.61%_17.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.p322a3100} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[91.93%_76.18%_0.61%_17.83%]" data-name="Group">
      <Group24 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[91.93%_76.18%_0.61%_17.83%]" data-name="Group">
      <Group25 />
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[89.96%_61.02%_0.59%_33.7%]" data-name="Group">
      <div className="absolute inset-[89.96%_61.02%_0.59%_33.7%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.p16439300} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[89.96%_61.02%_0.59%_33.7%]" data-name="Group">
      <Group27 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[89.96%_61.02%_0.59%_33.7%]" data-name="Group">
      <Group28 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[91.93%_44.03%_0.61%_48.98%]" data-name="Group">
      <div className="absolute inset-[91.93%_44.03%_0.61%_48.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.p9a3b00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[91.93%_44.03%_0.61%_48.98%]" data-name="Group">
      <Group30 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[91.93%_44.03%_0.61%_48.98%]" data-name="Group">
      <Group31 />
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[91.93%_33.08%_0.61%_65.88%]" data-name="Group">
      <div className="absolute inset-[91.93%_33.08%_0.61%_65.88%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
          <path d="M0 0H0.211835V1.4916H0V0Z" fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[91.93%_33.08%_0.61%_65.88%]" data-name="Group">
      <Group33 />
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[91.93%_33.08%_0.61%_65.88%]" data-name="Group">
      <Group34 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[91.93%_17.61%_0.61%_76.37%]" data-name="Group">
      <div className="absolute inset-[91.93%_17.61%_0.61%_76.37%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.p15706700} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[91.93%_17.61%_0.61%_76.37%]" data-name="Group">
      <Group36 />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[91.93%_17.61%_0.61%_76.37%]" data-name="Group">
      <Group37 />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[91.86%_1.02%_0.51%_91.24%]" data-name="Group">
      <div className="absolute inset-[91.86%_1.02%_0.51%_91.24%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path d={svgPaths.p1d740d00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[91.86%_1.02%_0.51%_91.24%]" data-name="Group">
      <Group39 />
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[91.86%_1.02%_0.51%_91.24%]" data-name="Group">
      <Group40 />
    </div>
  );
}

function Logo3Svg() {
  return (
    <div className="absolute bottom-1/4 left-[calc(50%+0.25px)] overflow-clip top-[19.44%] translate-x-[-50%] w-[20.504px]" data-name="logo 3 svg">
      <ClipPathGroup />
      <Group8 />
      <Group11 />
      <Group14 />
      <Group17 />
      <Group20 />
      <Group23 />
      <Group26 />
      <Group29 />
      <Group32 />
      <Group35 />
      <Group38 />
      <Group41 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute left-0 size-[36px] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <circle cx="18" cy="18" fill="var(--fill-0, #063326)" id="Ellipse 968" r="18" />
        </svg>
      </div>
      <Logo3Svg />
    </div>
  );
}