import HomeTriggerButton from "./HomeTriggerButton/HomeTriggerButton";

interface IProps {
  fromAbout?: boolean;
}

const HomeButton = async ({ fromAbout }: IProps) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/resume/687a5ad4ff7cd1d52b4db123`,
    {
      next: {
        revalidate: 5,
        tags: ["resume"],
      },
    }
  );

  const data = await res.json();
  const resume = data?.data;

  return (
    <div>
      <HomeTriggerButton resume={resume?.resume} fromAbout={fromAbout} />
    </div>
  );
};

export default HomeButton;
