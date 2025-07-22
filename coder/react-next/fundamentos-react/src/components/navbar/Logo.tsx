import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className={`bg-purple-950`}>
            <h1 className="text-3xl text-zinc-300 h-16 flex items-center px-3">
                <span>
                    <IconBrandReact className="inline-block mr-2" size={32} stroke={1} />
                </span>
                My Logo
            </h1>
        </Link>
    );
}