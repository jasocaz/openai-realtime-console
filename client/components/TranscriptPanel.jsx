export default function TranscriptPanel({ transcriptSegments, liveText }) {
  return (
    <section className="h-full w-full bg-gray-50 rounded-md p-4 flex flex-col gap-3">
      <h2 className="text-lg font-bold">Transcript</h2>
      <div className="flex-1 overflow-y-auto flex flex-col gap-2">
        {transcriptSegments.length === 0 && !liveText
          ? <p className="text-gray-500">Speak into the microphone…</p>
          : null}
        {transcriptSegments.map((segment, idx) => (
          <div key={idx} className="p-2 rounded-md bg-white border border-gray-200">
            <p className="text-sm">{segment}</p>
          </div>
        ))}
        {liveText
          ? (
            <div className="p-2 rounded-md bg-white border border-dashed border-gray-300">
              <p className="text-sm text-gray-600">{liveText}</p>
            </div>
          )
          : null}
      </div>
    </section>
  );
}


