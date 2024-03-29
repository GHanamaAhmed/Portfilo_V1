type TitleSectionProps = {
  title: string;
  subTitle?: string;
  textAlign?: string;
};
export default function TitleSection({
  title,
  subTitle,
  textAlign,
}: TitleSectionProps) {
  return (
    <div className={`w-full flex flex-col ${textAlign} gap-4`}>
      {title && (
        <p className="text-3xl text-solidHeading dark:text-SolidHeadingDarkMode font-bold">
          {title}
        </p>
      )}
      {subTitle && (
        <p className="text-darkContent dark:text-lightContent"> {subTitle}</p>
      )}
    </div>
  );
}
