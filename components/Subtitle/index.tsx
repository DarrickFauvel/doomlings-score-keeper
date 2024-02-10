import { anton } from "@/app/fonts"

function Subtitle() {
  return (
    <div className={`${anton.className} text-center uppercase tracking-wider`}>
      <div className="line1 text-2xl">a delightful card game</div>
      <div className="line2 flex justify-center items-center gap-1">
        <span className="text-right text-xs max-w-min leading-none -mt-2">
          for the
        </span>
        <span className="text-4xl">end</span>
        <span className="flex flex-col text-sm max-w-min leading-none">
          <span className="-mt-[1px]">of</span>
          <div className="bg-white h-[1px] my-[2px]"></div>
          <span className="">the</span>
        </span>
        <span className="text-4xl">world</span>
      </div>
    </div>
  )
}
export default Subtitle
