export default function Chat()
{
    return (     
        <div className="p-3 bg-secondary-color flex flex-col gap-5 overflow-y-scroll flex-1">
    <div className="self-start">
      <div
        id="coming-message"
        className="bg-primary-color rounded-3xl p-3 text-text-color rounded-tl-none w-fit max-w-[250px]"
      >
        Lorem lipsum wow works really interesting
      </div>
    </div>
    <div className="self-end">
      <div
        id="sent-message"
        className="bg-sent-message-color rounded-3xl p-3 text-primary-color rounded-tr-none w-fit max-w-[250px]"
      >
        Lorem lipsum wow works really interesting
      </div>
    </div>
    <div className="self-start">
      <div
        id="coming-message"
        className="bg-primary-color rounded-3xl p-3 text-text-color rounded-tl-none w-fit max-w-[250px]"
      >
        Lorem lipsum wow works really interesting
      </div>
    </div>
    <div className="self-end">
      <div
        id="sent-message"
        className="bg-sent-message-color rounded-3xl p-3 font-semibold text-primary-color rounded-tr-none w-fit max-w-[250px]"
      >
        Lorem lipsum wow works really interesting
      </div>
    </div>
    <div className="self-end">
      <div
        id="sent-message"
        className="bg-sent-message-color rounded-3xl font-semibold p-3 text-primary-color rounded-tr-none w-fit max-w-[250px]"
      >
        Lorem lipsum wow works really interesting
      </div>
    </div>
    <div className="self-end">
      <div
        id="sent-message"
        className="bg-sent-message-color rounded-3xl font-semibold p-3 text-primary-color rounded-tr-none w-fit max-w-[250px]"
      >
        Lorem lipsum wow works really interesting
      </div>
    </div>
  </div>)
}