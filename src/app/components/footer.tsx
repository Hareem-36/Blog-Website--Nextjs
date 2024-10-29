import Link from "next/link";

export default function Foot() {
    return (
        <div className="footer bg-teal-600 p-4 ">
            <center>
                {/* Social media links */}
                <div className="social-media-links space-x-4 text-white text-lg md:text-xl text-bold">
                    <Link href="https://www.linkedin.com/in/hareem-jaweid-4ab2102bb/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                        LinkedIn
                    </Link>
                    {" | "}
                    <Link href="https://www.facebook.com/share/wuEzeX2f8oR9pjrS/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                        Facebook
                    </Link>
                    {" | "}
                    <Link href="https://twitter.com/hareem_jaweid" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                        Twitter
                    </Link>
                </div>
                {/* Copyright */}
                <p className="text-white text-sm mt-4 text-bold">&copy; HareemJaweid 2024</p>
            </center>
        </div>
    );
}
