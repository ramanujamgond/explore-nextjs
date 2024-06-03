"use client";

import Link from "next/link"
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {

    // CLIENT SIDE NAVIGATION
    const router = useRouter();

    // get the path name 
    const pathname = usePathname();

    // extract query from the url parameters
    const query = useSearchParams();

    const handleClick = () => {
        // router.push("/");
        // router.replace("/");
        // router.refresh();
        // router.back();
        router.forward();
    };

    return (
        <div>
            <Link href="/" prefetch={false}>Click Here</Link>
            <button onClick={handleClick}>Write and Redirect</button>
        </div>
    )
}
export default NavigationTestPage