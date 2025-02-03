import Link from "next/link";
import Image from "next/legacy/image";
import ExampleNorthernLights from "@/components/ui/northernLights";

export default function NotFound() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Well this is awkward...
            </h1>
            <p>
                <span>The page you're looking for could not be found.</span>
            </p>
            <p className="mb-4">
                <span>Here's a cat GIF to cheer you up instead!</span>
            </p>

            <div
                className="relative w-1/2 mx-auto"
                style={{ paddingBottom: "50%" }}
            >
                <Image
                    src={`/cats/cat${Math.floor(Math.random() * 7) + 1}.gif`}
                    layout="fill"
                    objectFit="contain"
                    alt="404 Not Found"
                    className="mx-auto mb-4"
                />
            </div>
        </section>
    );
}
