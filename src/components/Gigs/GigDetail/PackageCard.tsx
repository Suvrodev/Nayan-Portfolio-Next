// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PackageCard = ({ data }: { data: any }) => {
  return (
    <div>
      <h3 className="font-bold text-lg flex items-center justify-between">
        <p className="text-sm mt-1  ">
          {data.concepts} 2 BUSINESS CARD Concepts
        </p>
        <p> - ${data.price}</p>
      </h3>
      | {data.revisions} Revisions
      <ul className="list-disc ml-6 mt-2 text-sm ">
        {data.features.map((f: string, i: number) => (
          <li key={i}>{f}</li>
        ))}
        {data.sourceFile && <li>Include Source File</li>}
      </ul>
      <p className="text-sm mt-2">
        <strong>{data.delivery}</strong>
      </p>
      <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
        Continue
      </button>
    </div>
  );
};

export default PackageCard;
