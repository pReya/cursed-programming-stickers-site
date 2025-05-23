export interface Technology {
  name: string;
  id: string;
  url?: string;
}

interface ImageCardProps {
  id: string;
  img: string;
  imgAlt?: string;
  className?: string;
  technologies: Technology[];
}

const ImageCard: React.FC<ImageCardProps> = ({
  id,
  img,
  imgAlt,
  className,
  technologies,
}) => {
  return (
    <div
      key={id}
      className={`flex flex-col items-center rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400 justify-center ${
        className || ""
      }`}
    >
      <div className="flex-shrink-0 p-6">
        <img
          className="size-40"
          src={
            import.meta.env.BASE_URL !== "/"
              ? import.meta.env.BASE_URL + img
              : img
          }
          alt={imgAlt}
        />
      </div>
      {technologies.length === 2 && (
        <div className="w-full">
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <a
                href={technologies[0].url}
                className="text-center relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-3 text-sm font-semibold text-gray-900"
              >
                {technologies[0].name}
              </a>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <a
                href={technologies[1].url}
                className="text-center relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-3 text-sm font-semibold text-gray-900"
              >
                {technologies[1].name}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
