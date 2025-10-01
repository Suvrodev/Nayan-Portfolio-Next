import Image, { StaticImageData } from "next/image";
import { TUpdateService } from "@/types/serviceType";

// Static imports (as you already have)
import wordpress from "@/app/assets/serviceDetail/wordpress.svg";
import html from "@/app/assets/serviceDetail/html.svg";
import css from "@/app/assets/serviceDetail/css.svg";
import tailwind from "@/app/assets/serviceDetail/tailwind.svg";
import bootstrap from "@/app/assets/serviceDetail/bootstrap.svg";
import js from "@/app/assets/serviceDetail/js.svg";
import php from "@/app/assets/serviceDetail/php.svg";
import mySql from "@/app/assets/serviceDetail/mySql.svg"; // filename uses camelCase
import react from "@/app/assets/serviceDetail/react.svg";
import nextjs from "@/app/assets/serviceDetail/nextjs.svg"; // rename local var to avoid "next" keyword confusion
import node from "@/app/assets/serviceDetail/node.svg";
import jquerySvg from "@/app/assets/serviceDetail/jQuery.svg"; // rename variable

interface IProps {
  service: TUpdateService;
}

// title -> image map (case-insensitive keys)
const ICONS: Record<string, StaticImageData> = {
  wordpress,
  html,
  css,
  tailwind,
  bootstrap,
  js,
  javascript: js, // optional alias
  php,
  mysql: mySql, // JSON uses "mysql" but import is mySql.svg
  react,
  next: nextjs, // if ever used
  nextjs: nextjs, // alias
  node,
  nodejs: node, // alias
  jquery: jquerySvg,
};

const toKey = (v: string) => v.trim().toLowerCase();

const humanize = (v: string) =>
  v.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default function SkillLogo({ service }: IProps) {
  const titles = service?.skillLogo?.images ?? []; // string[]

  return (
    <div>
      <h2 className="pTitle text-center my-10">{service?.skillLogo?.title}</h2>

      {/* <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 w-max">
          {titles.map((raw, idx) => {
            const key = toKey(raw);
            const src = ICONS[key];

            return (
              <div
                key={`${key}-${idx}`}
                className="flex flex-col items-center justify-center gap-2"
                title={humanize(raw)}
              >
                {src ? (
                  <Image
                    src={src}
                    alt={`${humanize(raw)} logo`}
                    width={250}
                    height={40}
                  />
                ) : (
                  <span className="text-xs text-red-500">Missing: {raw}</span>
                )}
              </div>
            );
          })}
        </div>
      </div> */}

      <div className="flex justify-center">
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-items-center w-full max-w-6xl mx-auto">
          {titles.map((raw, idx) => {
            const key = toKey(raw);
            const src = ICONS[key];

            return (
              <div
                key={`${key}-${idx}`}
                className="flex flex-col items-center justify-center gap-2"
                title={humanize(raw)}
              >
                {src ? (
                  <Image
                    src={src}
                    alt={`${humanize(raw)} logo`}
                    width={250}
                    height={40}
                  />
                ) : (
                  <span className="text-xs text-red-500">Missing: {raw}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
