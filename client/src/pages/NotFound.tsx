import { Link } from "react-router";

export default function NotFound({object = "page"}) {
    return (
        <div className="py-5 w-full h-[calc(100dvh-var(--header-height))] flex flex-col text-center justify-center items-center grow">
            <h1>Sorry! The {object} you're looking for doesn't exist</h1>
            <Link
                to="/"
                className="mt-5 action-btn bg-(--primary-btn) text-(--primary-btn-text) lg:hover:bg-(--accent) active:bg-(--accent)"
            >
                Return home
            </Link>
        </div>
    )
}