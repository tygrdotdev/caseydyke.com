import { External } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

function GearItem({
    title,
    description,
    href,
}: {
    title: string;
    description: string;
    href: string;
}) {
    return (
        <Link href={href} className="w-full group" target="_blank">
            <div className="flex flex-col rounded-md w-full p-2">
                <div className="flex flex-row items-center w-full gap-2">
                    <h1 className="font-semibold text-lg inline-flex group-hover:underline underline-offset-4">
                        {title}
                    </h1>
                    <External className="w-4 h-4 text-neutral-600 dark:text-neutral-500" />
                </div>
                <p className="text-neutral-500 dark:text-neutral-400">
                    {description}
                </p>
            </div>
        </Link>
    );
}

export default function GearPage() {
    return (
        <>
            <div className="flex flex-col gap-6 items-center sm:items-start px-2 py-4">
                <div className="flex flex-col items-center sm:items-start text-center">
                    <h1 className="text-4xl font-serif font-bold">My Gear</h1>
                    <p className="text-neutral-800 dark:text-neutral-200">
                        A list of all the gear I use to take photos.
                    </p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <GearItem
                        title="Nikon D780"
                        description="My main camera body. It's a full-frame DSLR, has a 25.2 MP sensor, 51-point autofocus system, and can shoot 7 frames per second."
                        href="https://www.nikon.co.uk/en_GB/product/cameras/d780"
                    />
                    <GearItem
                        title="Sigma 150-600mm f/5-6.3 Contemporary"
                        description="One of the lenses I use the most. It has a focal length of 150-600mm, a minimum focusing distance of 2.8m, and a maximum magnification ratio of 1:5."
                        href="https://www.sigma-global.com/en/lenses/c015_150_600_5_63/"
                    />
                    <GearItem
                        title="Sigma 105mm f/2.8 Macro"
                        description="The lens I use for capturing close-up shots. It features a focal length of 105mm, a minimum focusing distance of 31cm, and a maximum magnification ratio of 1:1."
                        href="https://www.sigma-global.com/en/lenses/a020_105_28/"
                    />

                    <GearItem
                        title="Photoshop Lightroom for iOS"
                        description="I like to keep my photos as natural as possible, so I use Lightroom to make minor adjustments to exposure, contrast, and colour."
                        href="https://www.adobe.com/uk/products/photoshop-lightroom/mobile.html"
                    />
                    <GearItem
                        title="iPhone 13 Pro"
                        description="I use my iPhone for quick shots when I don't have my DSLR with me. It features a 12 MP sensor, 3x optical zoom, and can shoot 4K video at 60 fps."
                        href="https://www.apple.com/iphone-13/specs/"
                    />
                </div>
            </div>
        </>
    );
}
