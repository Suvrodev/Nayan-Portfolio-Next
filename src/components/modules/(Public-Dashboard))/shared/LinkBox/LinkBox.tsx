import Link from "next/link";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface IProps {
  text1?: string;
  text2?: string;
  text3?: string;
}

const LinkBox = ({ text1, text2, text3 }: IProps) => {
  return (
    <div className="cursor-pointer">
      <span className="primaryBox p-3 rounded-[2px] inline-flex items-center">
        {text1 === "Home" ? (
          <Link href="/" className="">
            {text1}
          </Link>
        ) : (
          <>{text1}</>
        )}

        {text2 && (
          <span className="mx-1">
            <KeyboardArrowRightIcon fontSize="small" />
          </span>
        )}

        {text2}
        {text3}
      </span>
    </div>
  );
};

export default LinkBox;
