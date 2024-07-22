import NavBar from "./menu/NavBar";

export default function Layout(props) {
    return (
        <>
            <NavBar />
            <main>
                {props.children}
            </main>
            <footer>
            </footer>
        </>
    );
}